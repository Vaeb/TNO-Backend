import { HelixPaginatedResult, HelixStream, HelixStreamType, HelixClip } from '@twurple/api';
import { gotScraping } from 'got-scraping';

import { apiClient } from '../../twitchSetup';
import {
    log, cloneDeepJson, filterObj, mapObj, parseParam, isObjEmpty, parseLookup,
} from '../../utils';

import { regNp, regOthers, regNpPublic, regNpInternational, regNpWhitelist } from '../../data/settings';
import settingsParsed from '../../data/settingsParsed';
import factionsParsed from '../../data/factionsParsed';
import { NpFactions, npFactions } from '../../data/meta';
import { npCharacters as npCharactersOld } from '../../data/characters';
import { isFactionColor, lesserFactions, greaterFactions, npFactionsRegex, npFactionsSubRegex, filterFactionsBase, serverTwoFactions } from '../../data/factions';

import type { RecordGen } from '../../utils';
import type { FactionMini, FactionFull, FactionRealMini, FactionRealFull } from '../../data/meta';
import type { Character as CharacterOld, NpCharacters as NpCharactersOld, AssumeOther, AssumeServer, WlBias } from '../../data/characters';
import type { NpFactionsRegexMini, FactionColorsMini, FactionColorsRealMini } from '../../data/factions';

const includedData = Object.assign(
    {},
    ...['minViewers', 'stopOnMin', 'intervalSeconds']
        .map(key => ({ [key]: (settingsParsed as any)[key] })),
    ...['useColorsDark', 'useColorsLight']
        .map(key => ({ [key]: (factionsParsed as any)[key] })),
    { npFactions }
);

interface Character extends Omit<CharacterOld, 'factions' | 'displayName' | 'assumeServer' | 'wlBias'> {
    factions: FactionRealMini[];
    factionsObj: { [key in FactionRealMini]?: true };
    factionUse: FactionColorsRealMini;
    displayName: string;
    nameReg: RegExp;
    assumeServer: AssumeServer;
    wlBias: WlBias;
    serverTwo?: boolean;
    serverTwoFactionRegex?: RegExp;
}

type NpCharacter = Character[] & { assumeChar?: Character; assumeServer: AssumeServer; wlBias: WlBias; assumeOther: number; };

type NpCharacters = { [key: string]: NpCharacter };

const npCharacters = cloneDeepJson<NpCharactersOld, NpCharacters>(npCharactersOld);

const fullFactionMap: { [key in FactionMini]?: FactionFull } = {}; // Factions with corresponding characters

const displayNameDefault: { [key in FactionMini]?: number } = {
    police: 2,
    doj: 2,
    asrr: 0,
    mersions: 0,
    dans: 0,
} as const;

const FSTATES = {
    nopixel: 1,
    other: 2,
} as const;

const ASTATES = {
    assumeNpNoOther: -1,
    assumeNp: 0,
    assumeOther: 1,
    someOther: 1.5,
    neverNp: 2,
} as const;

const game = '32982' as const;
const languages = ['en', 'no']; // https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
// eslint-disable-next-line no-sequences
const interLangs: { [K in typeof languages[number]]: true } = Object.assign(
    {},
    ...['pt', 'hi', 'es'].map(lang => ({ [lang]: true }))
);
const streamType: HelixStreamType = 'live';
const fetchLimit = 100 as const;
const fetchLimitClips = 100 as const;
// const maxPages = 5 as const;
const searchNumDefault = 2000;
const searchNumClipsDefault = 750;
const searchNumMax = 5000;
const searchNumClipsMax = 4000;
const updateCacheMs = 1000 * 60;
const storeNumClipsMax = 7500;

const toFactionMini = (faction: string) => faction.toLowerCase().replace(' ', '');

/*

*****************************************************************************
***************************** PARSE CHARACTERS ******************************
*****************************************************************************

*/
const fbStreamers: [string, NpCharacter][] = [];

for (const [streamer, characters] of Object.entries(npCharacters)) {
    const streamerLower = streamer.toLowerCase();

    /* if (characters.length > 0) {
        // const usuallyWl = !characters[0].assumeServer || characters[0].assumeServer === 'whitelist';
        const permathonCharDefault = {
            name: '? "< One-Life Character >" ?',
            nicknames: ['Permathon', 'Perma?thon', '/\\bone[\\s-]life/'],
            // assumeServer: 'whitelist',
        } as Character;
        // const permathonCharPublic = { ...permathonCharWl, assumeServer: 'public' } as Character;
        // const permathonCharInternational = { ...permathonCharWl, assumeServer: 'international' } as Character;
        characters.push(permathonCharDefault); // '/\\bone[\\s-]life[\\s-]charac/'
    } */

    const foundOthers: { [key in AssumeOther]?: boolean } = {};
    let wlBiasIdx: number | undefined;
    let isFacebook = false;

    // eslint-disable-next-line no-loop-func
    characters.forEach((char, charIdx) => {
        const charOld = char as unknown as CharacterOld;
        const names = charOld.name.split(/\s+/);
        const nameRegAll = [];
        const parsedNames = [];
        const titles = [];
        const realNames = [];
        let knownName;
        let currentName = null;
        let displayNameNum = charOld.displayName;
        if (char.facebook) isFacebook = true;

        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            let pushName;
            if (currentName != null) {
                currentName.push(name);
                if (name.includes(']') || name.includes('"')) {
                    pushName = currentName.join(' ');
                    const type1 = pushName.includes('[');
                    pushName = pushName.replace(/[\[\]"]/g, '');
                    if (type1) {
                        titles.push(pushName);
                    } else {
                        // had square
                        knownName = pushName; // had quotes
                    }
                    currentName = null;
                }
            } else if (name.includes('[') || name.includes('"')) {
                const type1 = name.includes('[');
                if ((type1 && name.includes(']')) || (!type1 && name.indexOf('"') !== name.lastIndexOf('"'))) {
                    pushName = name.replace(/[\[\]"]/g, '');
                    if (type1) {
                        titles.push(pushName);
                    } else {
                        knownName = pushName;
                    }
                } else {
                    currentName = [name];
                }
            } else {
                pushName = name.replace(/"/g, '');
                if (pushName !== name) knownName = pushName; // had quotes
                // realNames.push(pushName.replace(/([A-Z])\.\s*/g, '\1'));
                realNames.push(pushName.replace(/\./g, ''));
            }
            if (pushName) parsedNames.push(RegExp.escape(pushName.toLowerCase()));
        }

        const fullFactions: FactionRealFull[] = charOld.factions?.length ? charOld.factions : ['Independent'];
        char.factionsObj = {};
        char.factions = fullFactions.map((fullFaction) => {
            const miniFaction = toFactionMini(fullFaction) as FactionRealMini;
            if (!fullFactionMap[miniFaction]) {
                fullFactionMap[miniFaction] = fullFaction;
            }
            char.factionsObj[miniFaction] = true;
            if (serverTwoFactions[miniFaction]) {
                if (!char.nicknames) char.nicknames = [];
                char.nicknames.push('2.0');
                char.serverTwoFactionRegex = npFactionsRegex[miniFaction as keyof typeof npFactionsRegex];
            }
            return miniFaction;
        });

        if (charOld.nicknames) {
            if (charOld.nicknames.includes('2.0')) char.serverTwo = true;
            if (realNames.length === 1) realNames.push(realNames[0]);
            if (displayNameNum !== 0) realNames.push(...charOld.nicknames.filter(nck => typeof nck === 'string'));
            charOld.nicknames.forEach((nck) => {
                if (nck[0] === '/' && nck[nck.length - 1] === '/') {
                    nameRegAll.push(nck.substring(1, nck.length - 1));
                } else {
                    const nicknameKeywords = [...nck.matchAll(/"([^"]+)"/g)].map(result => result[1]);
                    if (nicknameKeywords.length > 0) {
                        parsedNames.push(...nicknameKeywords.map(keyword => RegExp.escape(keyword.toLowerCase())));
                    } else {
                        parsedNames.push(RegExp.escape(nck.toLowerCase()));
                    }
                }
            });
        }

        const primaryFaction = char.factions[0];
        if (displayNameNum === undefined) displayNameNum = displayNameDefault[primaryFaction] ?? 1;

        const displayNameTitle = titles.length ? `《${titles.join(' ')}》` : '';
        let displayNameChar = '';
        if (knownName !== undefined) {
            displayNameChar = knownName;
            parsedNames.push(RegExp.escape(`${displayNameChar.toLowerCase()}s`));
        } else if (displayNameNum === 0) {
            displayNameChar = realNames.join(' ');
            parsedNames.push(RegExp.escape(`${realNames[0].toLowerCase()}s`));
        } else {
            displayNameChar = realNames[displayNameNum - 1] || realNames[0];
            parsedNames.push(RegExp.escape(`${displayNameChar.toLowerCase()}s`));
        }
        char.displayName = `${char.leader ? `♛${displayNameTitle ? '' : ' '}` : ''}${displayNameTitle}${displayNameChar}`.trim();

        // console.log(char.displayName);

        nameRegAll.push(`\\b(?:${parsedNames.join('|')})\\b`);
        if (char.factions.includes('development') && streamerLower !== 'dwjft') { // Include regex for dev faction
            nameRegAll.push(npFactionsRegex.development.source);
        }
        char.nameReg = new RegExp(nameRegAll.join('|'), nameRegAll.length > 1 ? 'ig' : 'g');

        if (primaryFaction != null) {
            char.factionUse = isFactionColor(primaryFaction) ? primaryFaction : 'otherfaction';
        } else {
            char.factionUse = 'independent';
        }
        if (char.displayName === 'Jack') console.log(char, primaryFaction, isFactionColor(primaryFaction));

        if (charOld.assume !== undefined) foundOthers[charOld.assume] = true;

        if (!characters.assumeServer) characters.assumeServer = char.assumeServer || 'whitelist';
        if (!char.assumeServer) char.assumeServer = characters.assumeServer;
        if (char.assumeChar && !characters.assumeChar) characters.assumeChar = char;
        if (characters.wlBias === undefined) characters.wlBias = 0;
        if (char.wlBias !== undefined) {
            characters.wlBias = char.wlBias; // Static across all characters
            wlBiasIdx = charIdx;
        }
        char.wlBias = characters.wlBias;
    });

    if (wlBiasIdx) { // 1 or greater
        for (let i = 0; i < wlBiasIdx; i++) {
            characters[i].wlBias = characters.wlBias;
        }
    }

    if (foundOthers.assumeNp && foundOthers.assumeOther) {
        characters.assumeOther = ASTATES.someOther;
    } else if (foundOthers.assumeOther) {
        characters.assumeOther = ASTATES.assumeOther;
    } else if (foundOthers.assumeNpNoOther) {
        characters.assumeOther = ASTATES.assumeNpNoOther;
    } else if (foundOthers.assumeNp) {
        characters.assumeOther = ASTATES.assumeNp;
    } else if (foundOthers.neverNp) {
        characters.assumeOther = ASTATES.neverNp;
    } else {
        characters.assumeOther = ASTATES.assumeNp;
    }

    if (streamer !== streamerLower) {
        npCharacters[streamerLower] = characters;
        delete npCharacters[streamer];
    }

    if (isFacebook) {
        fbStreamers.push([streamer, characters]);
    }
}

const npFactionsRegexEntries = Object.entries(npFactionsRegex) as [NpFactionsRegexMini, RegExp][];

type FactionsMap = { [key in FactionMini]?: boolean };

// TODO: In future can use streamer data for all streamer-only parts of *streams* data
interface StreamerData {
    factionsMap: FactionsMap;
    tagText: string;
    tagFaction: FactionColorsMini;
    tagFactionSecondary?: FactionColorsMini;
    characterName: string;
    nicknameLookup: string | null;
    noOthersInclude: boolean;
    noPublicInclude: boolean; // use these props on frontend to determine whether stream should show
    noInternationalInclude: boolean; // use these props on frontend to determine whether stream should show
    wlOverride: boolean;
    profileUrl?: string;
}

type MixedStreamerData = Record<string, StreamerData>;

const streamerDataArchive: MixedStreamerData = {};

const knownPfps: { [key: string]: string } = {};

const lookupPfps = async (lookupStreams: string[], endpoint = '<no-endpoint>') => {
    if (lookupStreams.length > 0) {
        log(`${endpoint}: Looking up pfp for ${lookupStreams.length} users after...`);
        const foundUsers = await apiClient.users.getUsersByIds(lookupStreams);
        for (const helixUser of foundUsers) {
            const pfpUrl = helixUser.profilePictureUrl.replace('-300x300.', '-50x50.');
            const streamer = streamerDataArchive[helixUser.name.toLowerCase()];
            knownPfps[helixUser.id] = pfpUrl;
            if (streamer && !streamer.profileUrl) {
                streamer.profileUrl = pfpUrl;
            }
        }
    }
};

interface GetStreamsOptions { searchNum?: number; international?: boolean }

export const getStreams = async (options: GetStreamsOptions, endpoint = '<no-endpoint>'): Promise<HelixStream[]> => {
    const optionsParsed: Required<GetStreamsOptions> = {
        searchNum: searchNumDefault,
        international: false,
        ...filterObj(options, v => v !== undefined),
    };

    let { searchNum } = optionsParsed;
    searchNum = Math.min(searchNum, searchNumMax);

    // const gtaGame = await apiClient.helix.games.getGameById(game);
    const gtaStreamsObj: { [key: string]: HelixStream } = {};
    const gtaStreams: HelixStream[] = [];
    let after;
    try {
        while (searchNum > 0) {
            const limitNow = Math.min(searchNum, fetchLimit);
            searchNum -= limitNow;
            const gtaStreamsNow: HelixPaginatedResult<HelixStream> = await apiClient.streams.getStreams({
                game,
                // language: optionsParsed.international ? undefined : language,
                language: languages,
                limit: limitNow,
                type: streamType,
                after,
            });

            if (gtaStreamsNow.data.length === 0) {
                log(`${endpoint}: Search ended (limit: ${limitNow})`, gtaStreamsNow);
                break;
            }

            const lookupStreams = [];
            for (const helixStream of gtaStreamsNow.data) {
                const { userId } = helixStream;
                if (gtaStreamsObj[userId]) continue;
                gtaStreamsObj[userId] = helixStream;
                gtaStreams.push(helixStream);
                if (knownPfps[userId] === undefined) {
                    lookupStreams.push(userId);
                }
            }

            await lookupPfps(lookupStreams, 'for_stream');

            after = gtaStreamsNow.cursor;
        }
    } catch (err) {
        log(`GETSTREAMS FETCH FAILED | ${endpoint}: Error`, err);
        return [];
    }

    return gtaStreams;
};

interface Clip {
    id: string;
    title: string;
    channelName: string;
    clipperName: string;
    viewers: number;
    duration: number;
    creationStamp: number;
    thumbnailUrl: string;
}

type ClipGroupNames = '24h' | '7d' | '30d' | 'all';

type ClipGroups = { [key in ClipGroupNames]: Clip[] };

const emptyClipGroups: ClipGroups = { '24h': [], '7d': [], '30d': [], all: [] };

const clipAfters: { [key in ClipGroupNames]: string | undefined } = { '24h': undefined, '7d': undefined, '30d': undefined, all: undefined };

const clipGroups: ClipGroups = JSON.parse(JSON.stringify(emptyClipGroups));
const clipGroupsTemp: ClipGroups = JSON.parse(JSON.stringify(emptyClipGroups));

// Has got a clip group active with full clips
const hasCycled: { [key in ClipGroupNames]: boolean } = { '24h': false, '7d': false, '30d': false, all: false };

// This is only useful if you set up a streamerDataTemp equivalent to clipGroupsTemp. Builds up until clipGroupsTemp is full.
// Would need to do something to account for 4 clipGroupsTemp fulls vs 1 streamerDataTemp (should be in sync)
const streamerData: MixedStreamerData = {};

const serverTwoCheck = /(?:[lp]|\b)2\.0\b|\bclassic|classic\b/i;

// Can run less frequently
// Make it so that each run it gets the next searchNumClipsDefault clips after `after[group.name]` or reset `after` if it's been 3 hours
export const getClips = async (endpoint = '<no-endpoint>'): Promise<[ClipGroups, MixedStreamerData]> => {
    const optionsParsed = {
        searchNum: searchNumClipsDefault,
    };

    const offsets: { name: ClipGroupNames, offset: number | undefined }[] = [
        { name: '24h', offset: 1000 * 60 * 60 * 24 },
        { name: '7d', offset: 1000 * 60 * 60 * 24 * 7 },
        { name: '30d', offset: 1000 * 60 * 60 * 24 * 30 },
        { name: 'all', offset: undefined },
    ];

    const nowStamp = +new Date();

    for (const group of offsets) {
        let { searchNum } = optionsParsed;
        searchNum = Math.min(searchNum, searchNumClipsMax);
        let reachedEnd = false;

        const clips: Clip[] = [];
        if (clipAfters[group.name] === undefined) {
            clipGroupsTemp[group.name] = [];
        }

        const foundClips: { [key: string]: HelixClip } = {};

        log(`RESTARTING FROM CLIP_AFTER ${group.name}:`, clipAfters[group.name]);

        try {
            while (searchNum > 0) {
                const limitNow = Math.min(searchNum, fetchLimitClips);

                const clipsNow: HelixPaginatedResult<HelixClip> = await apiClient.clips.getClipsForGame(game, {
                    limit: limitNow,
                    startDate: group.offset ? new Date(nowStamp - group.offset).toISOString() : undefined,
                    endDate: group.offset ? new Date(nowStamp).toISOString() : undefined,
                    after: clipAfters[group.name],
                });

                if (clipsNow.data.length === 0) {
                    reachedEnd = true;
                    break;
                }

                searchNum -= limitNow;

                const lookupStreams = [];

                for (const clip of clipsNow.data) {
                    const { id, broadcasterDisplayName: channelName, broadcasterId: channelId } = clip;
                    const channelNameLower = channelName.toLowerCase();
                    const streamer = npCharacters[channelNameLower];
                    if (foundClips[id] || !streamer || streamer.assumeOther === ASTATES.neverNp) continue;
                    foundClips[id] = clip;

                    if (!streamerData[channelNameLower]) {
                        if (!streamerDataArchive[channelNameLower]) {
                            const firstChar = streamer[0];
                            let tagFaction: FactionColorsMini = firstChar.factionUse;
                            if (tagFaction === 'otherfaction') tagFaction = 'independent';
                            const tagFactionSecondary = (streamer.assumeServer === 'public' && 'publicnp')
                                || (streamer.assumeServer === 'international' && 'international')
                                || undefined;
                            // const factionsMap = streamer.reduce<FactionsMap>((obj, char) => {
                            //     for (const faction of char.factions) {
                            //         obj[faction] = true;
                            //     }
                            //     return obj;
                            // }, {});
                            const usuallyOther = streamer.assumeOther === ASTATES.assumeOther;
                            const usuallyPublic = streamer.assumeServer === 'public';
                            const usuallyInternational = streamer.assumeServer === 'international';
                            const usuallyWl = streamer.wlBias === 1 || (!usuallyOther && streamer.assumeServer === 'whitelist' && streamer.wlBias === 0);

                            const streamerInfo: StreamerData = {
                                factionsMap: firstChar.factionsObj,
                                tagText: firstChar.displayName,
                                tagFaction,
                                tagFactionSecondary,
                                characterName: firstChar.name,
                                nicknameLookup: firstChar.nicknames ? firstChar.nicknames.map(nick => parseLookup(nick)).join(' _-_ ') : null,
                                noOthersInclude: !usuallyOther,
                                noPublicInclude: !usuallyPublic,
                                noInternationalInclude: !usuallyInternational,
                                wlOverride: usuallyWl,
                            };

                            if (knownPfps[channelId] === undefined) {
                                lookupStreams.push(channelId);
                            } else {
                                streamerInfo.profileUrl = knownPfps[channelId];
                            }

                            streamerDataArchive[channelNameLower] = streamerInfo;
                        }
                        streamerData[channelNameLower] = streamerDataArchive[channelNameLower];
                    }

                    clips.push({
                        id: clip.id,
                        title: clip.title.replace(/"/g, '&quot;'),
                        channelName,
                        clipperName: clip.creatorDisplayName,
                        viewers: clip.views,
                        duration: clip.duration,
                        creationStamp: +clip.creationDate,
                        thumbnailUrl: clip.thumbnailUrl,
                    });
                }

                await lookupPfps(lookupStreams, 'for_clip');

                clipAfters[group.name] = clipsNow.cursor;
            }
        } catch (err) {
            log(`GETCLIPS FETCH FAILED | ${endpoint}: Error`, err);
            return [{ ...emptyClipGroups }, {}];
        }

        clipGroupsTemp[group.name] = clipGroupsTemp[group.name].concat(clips);

        if (hasCycled[group.name] === false) {
            clipGroups[group.name] = clipGroupsTemp[group.name];
        }

        if (reachedEnd || clipGroupsTemp[group.name].length >= storeNumClipsMax) {
            log(`${endpoint}: Clips search ended (searchNum before: ${searchNum})`);
            log('& RESET CLIP_AFTER', hasCycled[group.name]);
            // Enable hasCycled (assuming there's actually clips, should always be true)
            if (clipGroupsTemp[group.name].length) {
                hasCycled[group.name] = true;
                clipGroups[group.name] = clipGroupsTemp[group.name];
            }
            clipAfters[group.name] = undefined;
        }
    }

    return [clipGroups, streamerData];
};

// interface FbStream {
//     channelName: string;
//     videoUrl: string;
//     viewCountStr: string;
//     viewCount: number;
//     pfpUrl: string;
//     thumbnailUrl: string;
//     characters: NpCharacter[];
// }

interface FbStreamDetails {
    userDisplayName: string;
    videoUrl: string;
    title: string;
    viewers: number;
    profileUrlOverride: string;
    thumbnailUrl: string;
    facebook: boolean;
}

type FbStreamsMap = { [key: string]: FbStreamDetails };

const initialStamp = +new Date();
let fbLastMajorChangePrev = 0;
let fbLastMajorChange = 0;
const fbStreamsCache: FbStreamsMap = {};
// let fbStreamsCacheJson = '';
// let lastFbStreamsLookup = 0;

export const getFbStreams = async (): Promise<FbStreamDetails[]> => {
    const fbStreamsRaw = (await Promise.all(fbStreamers
        .map(async ([streamer, characters]) => {
            const { body } = await gotScraping.get(`https://mobile.facebook.com/gaming/${streamer}`);
            const isLive = body.includes('playbackIsLiveStreaming&quot;:true');
            if (streamer === 'JJLakee' && isLive == false) console.log('NOT LIVE', streamer, body);
            if (isLive === false) return undefined;
            return [streamer, body];
        })))
        .filter(result => result !== undefined);

    const fbStreams: FbStreamDetails[] = fbStreamsRaw
        .map((data) => {
            const [streamer, body] = (data as [string, string]);
            const videoUrl = (body.match(/&quot;videoURL&quot;:&quot;(.*?)&quot;/) || ['', ''])[1]
                .replace(/\\/g, '');
            const viewCountStr = (body.match(/>LIVE<[\s\S]+?<\/i>([\d.K]+)<\/span>/) || [])[1];
            let viewCount = parseFloat(viewCountStr);
            if (viewCountStr.includes('K')) viewCount *= 1000;
            const pfpUrl = (body.match(/[ "]profpic"[\s\S]+?(http.+?)&#039;/) || ['', ''])[1]
                .replace(/\\(\w\w) /g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
            const thumbnailUrl = (body.match(/\sdata-store=[\s\S]+?background: url\(&#039;(http.+?)&#039;/) || ['', ''])[1]
                .replace(/\\(\w\w) /g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
            // console.log(streamer, viewCountStr, videoUrl);

            return {
                userDisplayName: streamer,
                videoUrl,
                title: `《Facebook Gaming - ${streamer}》`,
                viewers: viewCount,
                profileUrlOverride: pfpUrl,
                thumbnailUrl,
                facebook: true,
            };
        });

    fbStreams.sort((a, b) => b.viewers - a.viewers);

    // const fbStreams: FbStream[] = fbStreamsMaybe.filter(fbStream => fbStream !== undefined);

    return fbStreams;
};

const isHelixStream = (stream: HelixStream | FbStreamDetails): stream is HelixStream =>
    (stream as HelixStream).language != null;

type FilterFactions = [FactionMini, string, boolean, number][];

export interface LiveOptions {
    factionName: FactionMini;
    filterEnabled: boolean;
    allowPublic: boolean;
    allowInternational: boolean;
    allowOthers: boolean;
    darkMode: boolean;
    international: boolean;
    searchNum?: number;
}

interface BaseStream {
    channelName: string;
    title: string;
    // tagIds: string[];
    viewers: number;
    profileUrl: string;
}

interface Stream extends BaseStream {
    id: number;
    rpServer: string | null;
    characterName: string | null;
    nicknameLookup: string | null;
    faction: FactionMini;
    factions: FactionMini[];
    factionsMap: { [key in FactionMini]?: boolean };
    tagText: string;
    tagFaction: FactionColorsMini;
    tagFactionSecondary?: FactionColorsMini;
    noOthersInclude: boolean;
    noPublicInclude: boolean; // use these props on frontend to determine whether stream should show
    noInternationalInclude: boolean; // use these props on frontend to determine whether stream should show
    wlOverride: boolean;
    facebook: boolean;
    videoUrl?: string;
    thumbnailUrl?: string;
    // keepCase: boolean;
}

type FactionCount = { [key in FactionMini]: number };

interface Live {
    minViewers: number;
    stopOnMin: boolean;
    intervalSeconds: number;
    useColorsDark: RecordGen;
    useColorsLight: RecordGen;
    npFactions: NpFactions;
    factionCount: FactionCount;
    filterFactions: any[];
    streams: Stream[];
    streamsFb: Stream[];
    clipGroups: ClipGroups;
    channelsFb: string[];
    baseHtml: string;
    baseHtmlFb: string;
    baseHtmlClip: string;
    fbDebounce: number;
    fbMaxLookup: number;
    fbSleep: number;
    fbGroupSize: number;
    fbGroupSleepInc: number;
    fbRandomRadius: number;
    fbLastMajorChange: number;
    tick: number;
}

const cachedResults: { [key: string]: Live | undefined } = {};
const npStreamsPromise: { [key: string]: Promise<Live> | undefined } = {};

export const getNpLive = async (baseOptions = {}, override = false, endpoint = '<no-endpoint>', useActivePromise = false): Promise<Live> => {
    if (!isObjEmpty(baseOptions)) log(`${endpoint}: options -`, JSON.stringify(baseOptions));

    const options: LiveOptions = {
        factionName: 'allnopixel',
        filterEnabled: true,
        allowPublic: true,
        allowInternational: true,
        allowOthers: true,
        international: false,
        darkMode: true,
        ...filterObj(
            mapObj(baseOptions as RecordGen, (v, k) => {
                const value = parseParam(v as any);
                if (k === 'factionName') return toFactionMini(value);
                return value;
            }),
            v => v !== undefined
        ),
    };

    const optionsStr = JSON.stringify(options);

    if (!override && cachedResults[optionsStr] !== undefined && !useActivePromise) {
        log(`${endpoint}: Returning cached results.`);
        return cachedResults[optionsStr]!;
    }

    if (npStreamsPromise[optionsStr] === undefined || override) {
        npStreamsPromise[optionsStr] = new Promise<Live>(async (resolve, reject) => {
            try {
                log(`${endpoint}: Fetching streams data...`);

                const {
                    factionName, filterEnabled, allowPublic, allowInternational, allowOthers, searchNum, international,
                } = options;
                const allowOthersNow = allowOthers || factionName === 'other';

                const nowTime = +new Date();
                // if ((nowTime - lastFbStreamsLookup) > 1000 * 60 * 10) {
                //     lastFbStreamsLookup = nowTime;
                //     // fbStreamsCache = await getFbStreams();
                // }

                const fbStreams = Object.values(fbStreamsCache).sort((a, b) => b.viewers - a.viewers);

                const gtaStreams: (HelixStream | FbStreamDetails)[] = await getStreams({ searchNum, international }, endpoint);
                if (gtaStreams.length === 0) {
                    resolve(cachedResults[optionsStr]!);
                    return;
                }

                await getClips(endpoint);

                const numStreamsFb = fbStreams.length;
                if (numStreamsFb > 0) {
                    let fbIdx = 0;
                    let addStream = fbStreams[fbIdx];
                    for (let i = 0; i < gtaStreams.length; i++) {
                        const stream = gtaStreams[i];
                        if (addStream.viewers >= stream.viewers) {
                            gtaStreams.splice(i, 0, addStream);
                            fbIdx++;
                            if (fbIdx < numStreamsFb) {
                                addStream = fbStreams[fbIdx];
                            } else {
                                break;
                            }
                        }
                    }
                    if (fbIdx < numStreamsFb) {
                        for (let i = fbIdx; i < numStreamsFb; i++) {
                            gtaStreams.push(fbStreams[i]);
                        }
                    }
                }

                log(`${endpoint}: fbStreams`, fbStreams.map(fbStream => [fbStream.userDisplayName, fbStream.viewers]));

                log(`${endpoint}: Fetched streams! Now processing data...`);

                // log(gtaStreams.length);

                // const useTextColor = '#000';
                // const useColors = darkMode ? useColorsDark : useColorsLight;
                const metaFactions: FactionMini[] = ['allnopixel', 'alltwitch'];
                const isMetaFaction = metaFactions.includes(factionName);
                // const isNpMetaFaction = npMetaFactions.includes(factionName);
                // const minViewersUse = isNpMetaFaction ? minViewers : 3;

                let nextId = 0;
                const npStreams: Stream[] = [];
                const npStreamsFb: Stream[] = [];
                const factionCount: FactionCount = mapObj(npFactions, () => 0);
                gtaStreams.forEach((helixStream) => {
                    const { userDisplayName: channelName, title, viewers } = helixStream;
                    const language = isHelixStream(helixStream) ? helixStream.language : 'en';

                    const baseStream: BaseStream = {
                        channelName,
                        title: title.replace(/"/g, '&quot;'),
                        // tagIds: helixStream.tagIds,
                        viewers,
                        profileUrl: (helixStream as FbStreamDetails).profileUrlOverride || knownPfps[(helixStream as HelixStream).userId],
                    }; // rpServer, characterName, faction, tagText, tagFaction

                    const isFacebook = !!(helixStream as FbStreamDetails).facebook;

                    // let noOthersInclude = true; // INV: Still being used?

                    const titleParsed = title.toLowerCase().replace(/\./g, ' ');
                    const channelNameLower = channelName.toLowerCase();

                    let onOther = false;
                    let onOtherPos = -1;
                    let onOtherIncluded = false;
                    let serverName = '';

                    // log(channelName, '>>>', titleParsed);

                    for (let i = 0; i < regOthers.length; i++) {
                        const regOther = regOthers[i];
                        onOtherPos = title.indexOfRegex(regOther.reg);
                        if (onOtherPos > -1) {
                            onOther = true;
                            serverName = regOther.name;
                            if (regOther.include) onOtherIncluded = true;
                            break;
                        }
                    }

                    let onNp = false;
                    const onNpPos = title.indexOfRegex(regNp);
                    if (onNpPos > -1 && (onOther === false || onNpPos < onOtherPos)) {
                        onNp = true;
                        onOther = false;
                        onOtherIncluded = false;
                    }

                    const characters = npCharacters[channelNameLower] as NpCharacter | undefined;

                    if (characters && characters.assumeOther === ASTATES.neverNp) {
                        console.log('Excluded', channelName, 'because of "neverNp"');
                        return;
                    }

                    const mainsOther = characters && characters.assumeOther == ASTATES.assumeOther;
                    const keepNp = characters && characters.assumeOther == ASTATES.assumeNpNoOther;
                    const onMainOther = !onNp && mainsOther;
                    const npStreamer = onNp || characters;

                    const nowFilterEnabled = filterEnabled && factionName !== 'alltwitch';

                    // log(title, '>>>', onNp);

                    let streamState; // remove, mark-np, mark-other
                    if (nowFilterEnabled) {
                        // If filtering streams is enabled
                        if ((npStreamer && !mainsOther && !keepNp && onOther)) {
                            // If is-including-others and streamer on another server, or it's an NP streamer playing another server
                            streamState = FSTATES.other;
                        } else if ((onOtherIncluded || onMainOther || (npStreamer && onOther))) {
                            if (allowOthersNow) {
                                streamState = FSTATES.other;
                                // noOthersInclude = false;
                            } else {
                                return;
                            }
                        } else if (npStreamer && !onMainOther && !onOther) {
                            // If NoPixel streamer that isn't on another server
                            streamState = FSTATES.nopixel;
                            serverName = 'NP';
                        } else {
                            return;
                        }
                    } else if (npStreamer && !onMainOther && !onOther) {
                        // If NoPixel streamer that isn't on another server
                        streamState = FSTATES.nopixel;
                        serverName = 'NP';
                    } else {
                        streamState = FSTATES.other;
                    }

                    // log(streamState);

                    const hasCharacters = characters && characters.length;

                    let assumeServer: AssumeServer = 'whitelist';
                    let usualServer: AssumeServer | 'unknown' = 'unknown';
                    const realAssumes: AssumeServer[] = ['whitelist', 'public', 'international'];

                    if (hasCharacters) {
                        ({ assumeServer } = characters);
                        usualServer = assumeServer;
                    }

                    let usuallyOther = false;
                    let usuallyWl = false;

                    if (characters) {
                        const otherStates = [ASTATES.assumeOther, ASTATES.neverNp] as number[];
                        usuallyOther = otherStates.includes(characters.assumeOther);
                        usuallyWl = characters.wlBias === 1 || (!usuallyOther && usualServer === 'whitelist' && characters.wlBias === 0);
                    }

                    if (streamState === FSTATES.other) {
                        // Other included RP servers
                        const allowStream = isMetaFaction;
                        if (allowStream === false) {
                            return;
                        }

                        const stream: Stream = {
                            id: nextId,
                            ...baseStream,
                            rpServer: serverName.length ? serverName : null,
                            characterName: null,
                            nicknameLookup: null,
                            faction: 'other',
                            factions: ['other'],
                            factionsMap: { other: true },
                            tagText: serverName.length > 0 ? `::${serverName}::` : '::Other Server::',
                            tagFaction: 'other',
                            noOthersInclude: false,
                            noPublicInclude: true,
                            noInternationalInclude: true,
                            wlOverride: usuallyWl,
                            facebook: isFacebook,
                            // keepCase: true,
                        };

                        if (isFacebook) {
                            helixStream = helixStream as FbStreamDetails;
                            stream.videoUrl = helixStream.videoUrl;
                            stream.thumbnailUrl = helixStream.thumbnailUrl;
                        }

                        nextId++;
                        factionCount.other++;
                        if (!isFacebook) { // || integrated
                            npStreams.push(stream);
                        } else {
                            npStreamsFb.push(stream);
                        }
                        return;
                    }

                    // streamState === FSTATES.nopixel

                    let nowCharacter;
                    let onServer: AssumeServer = assumeServer;

                    const onPublicIndex = title.indexOfRegex(regNpPublic, 0, Infinity);
                    const onWhitelistIndex = title.indexOfRegex(regNpWhitelist, 0, Infinity);
                    const onWorldwideIndex = title.indexOfRegex(regNpInternational, 0);
                    let onServerDetected = false;

                    if (onWorldwideIndex !== -1 || interLangs[language]) {
                        onServer = 'international';
                        onServerDetected = true;
                    } else if (onPublicIndex < onWhitelistIndex) {
                        onServer = 'public';
                        onServerDetected = true;
                    } else if (onWhitelistIndex < onPublicIndex) {
                        onServer = 'whitelist';
                        onServerDetected = true;
                    }

                    if (hasCharacters) {
                        let lowestPos = Infinity;
                        let maxResults = -1;
                        let maxSize = -1;
                        for (const char of characters) {
                            const matchPositions = [...titleParsed.matchAll(char.nameReg)];
                            const numResults = matchPositions.length;
                            const resSize = numResults > 0 ? matchPositions[0][0].length : -1; // Could use all matches, but more expensive
                            const devFactionWeight = char.factions[0] === 'development' ? 2e4 : 0;
                            const serverMatchWeight = (onServerDetected && char.assumeServer !== onServer && realAssumes.includes(char.assumeServer)) ? 1e4 : 0;
                            const serverTwoWeight = char.serverTwo && (serverTwoCheck.test(title) || char?.serverTwoFactionRegex?.test(title)) ? -1e3 : 0;
                            const lowIndex = numResults ? matchPositions[0].index! + serverTwoWeight + serverMatchWeight + devFactionWeight : -Infinity;
                            if (lowIndex > -Infinity && (
                                lowIndex < lowestPos
                                || (lowIndex === lowestPos && numResults > maxResults)
                                || (lowIndex === lowestPos && numResults === maxResults && resSize > maxSize)
                            )) {
                                lowestPos = lowIndex;
                                maxResults = numResults;
                                maxSize = resSize;
                                nowCharacter = char;
                            }
                        }
                    }

                    let factionNames: FactionRealMini[] = [];
                    const factionsInTitle: FactionRealMini[] = [];
                    let newCharFactionSpotted = false;

                    // if (nowCharacter === undefined) {
                    interface FactionObj {
                        rank1: number;
                        rank2: number;
                        rank3: number;
                        index: number;
                        factions: FactionRealMini[];
                        character?: Character;
                    }
                    const factionObjects: FactionObj[] = [];

                    for (const [faction, regex] of npFactionsRegexEntries) {
                        const matchPos = title.indexOfRegex(regex);
                        if (matchPos > -1) {
                            if (nowCharacter) {
                                factionsInTitle.push(faction);
                            } else {
                                const factionCharacter = characters && characters.find(char => char.factionsObj[faction]);
                                const factionObj: FactionObj = {
                                    rank1: greaterFactions[faction] ? 0 : 1,
                                    rank2: factionCharacter ? 0 : 1,
                                    rank3: !lesserFactions[faction] ? 0 : 1,
                                    index: matchPos,
                                    factions: factionCharacter ? factionCharacter.factions : [faction],
                                    character: factionCharacter,
                                };
                                factionObjects.push(factionObj);
                            }
                        }
                    }

                    if (nowCharacter) {
                        if (factionsInTitle.length > 0) {
                            const charFactionsMap = Object.assign({}, ...nowCharacter.factions.map(faction => ({ [faction]: true })));
                            for (const faction of factionsInTitle) {
                                if (!charFactionsMap[faction] && !(faction === 'doc' && charFactionsMap.medical)) {
                                    newCharFactionSpotted = true;
                                    break;
                                }
                            }
                        }
                    } else if (factionObjects.length) {
                        factionObjects.sort((a, b) => a.rank1 - b.rank1 || a.rank2 - b.rank2 || a.rank3 - b.rank3 || a.index - b.index);
                        if (factionObjects[0].character) nowCharacter = factionObjects[0].character; // Sorted by has-character
                        // factionNames = factionObjects[0].factions;
                        factionNames = factionObjects.map(factionObj => factionObj.factions).flat(1);
                    }
                    // }

                    const hasFactions = factionNames.length;

                    if (nowCharacter && onServerDetected === false) {
                        ({ assumeServer } = nowCharacter);
                        if (channelNameLower === 'sparkykne' && title.includes('🟢')) onServer = 'whitelist';
                        onServer = assumeServer;
                    }

                    const onNpWhitelist = onServer === 'whitelist';
                    const onNpPublic = onServer === 'public';
                    const onNpInternational = onServer === 'international';

                    // log(nowCharacter);

                    let allowStream = isMetaFaction;
                    if (allowStream === false) {
                        if (factionName === 'othernp') {
                            allowStream = !nowCharacter && !hasFactions && !hasCharacters;
                        } else if (factionName === 'whitelistnp') {
                            allowStream = onNpWhitelist;
                        } else if (factionName === 'publicnp') {
                            allowStream = onNpPublic;
                        } else if (factionName === 'international') {
                            allowStream = onNpInternational;
                        } else {
                            // eslint-disable-next-line no-lonely-if
                            if (nowCharacter) {
                                allowStream = factionName in nowCharacter.factionsObj;
                            } else if (hasFactions) {
                                allowStream = (factionNames as string[]).includes(factionName);
                            } else if (hasCharacters) {
                                allowStream = factionName in characters[0].factionsObj;
                            }
                        }
                    }

                    let hasFactionsTagText;
                    if (!nowCharacter && hasFactions && factionNames[0] in npFactionsSubRegex) {
                        for (const [tagText, tagReg] of npFactionsSubRegex[factionNames[0]]!) {
                            if (tagReg.test(title)) {
                                hasFactionsTagText = tagText;
                                break;
                            }
                        }
                    }

                    let possibleCharacter = nowCharacter;
                    if (!nowCharacter && !hasFactions && hasCharacters) {
                        if (characters.assumeChar) {
                            nowCharacter = characters.assumeChar;
                            possibleCharacter = nowCharacter;
                        } else {
                            possibleCharacter = characters.find((char => char.assumeServer === onServer)) || characters[0];
                        }
                    }

                    // log(allowStream === false, (onNpPublic && factionName !== 'publicnp' && allowPublic == false));

                    if (
                        allowStream === false
                            || (onNpPublic && factionName !== 'publicnp' && allowPublic == false)
                            || (onNpInternational && factionName !== 'international' && allowInternational == false)
                    ) {
                        return;
                    }

                    // let keepCase = false;
                    let activeFactions: FactionMini[];
                    let tagFaction: FactionColorsMini;
                    let tagText;

                    if (nowCharacter) {
                        activeFactions = [...nowCharacter.factions];
                        tagFaction = nowCharacter.factionUse;
                        tagText = nowCharacter.displayName;
                    } else if (hasFactions) {
                        activeFactions = [...factionNames, 'guessed'];
                        tagFaction = isFactionColor(factionNames[0]) ? factionNames[0] : 'independent';
                        const factionNameFull = fullFactionMap[factionNames[0]] || factionNames[0];
                        tagText = hasFactionsTagText ? `〈${hasFactionsTagText}〉` : `〈${factionNameFull}〉`;
                        if (tagFaction === 'podcast' || tagFaction === 'watchparty') {
                            tagText = `《${factionNameFull}》${channelName}`;
                        }
                    } else if (possibleCharacter) {
                        activeFactions = [...possibleCharacter.factions, 'guessed'];
                        tagFaction = possibleCharacter.factionUse;
                        tagText = `? ${possibleCharacter.displayName} ?`;
                    } else {
                        // keepCase = true;
                        activeFactions = ['othernp'];
                        tagFaction = 'othernp';
                        tagText = `${serverName}`;
                    }

                    if (newCharFactionSpotted) activeFactions.push('guessed');
                    if (onNpWhitelist) activeFactions.push('whitelistnp');

                    const stream: Stream = {
                        id: nextId,
                        ...baseStream,
                        rpServer: serverName,
                        characterName: possibleCharacter?.name ?? null,
                        nicknameLookup: possibleCharacter?.nicknames ? possibleCharacter.nicknames.map(nick => parseLookup(nick)).join(' _-_ ') : null,
                        faction: activeFactions[0],
                        factions: activeFactions,
                        factionsMap: Object.assign({}, ...activeFactions.map(faction => ({ [faction]: true }))),
                        tagText,
                        tagFaction,
                        tagFactionSecondary: (onNpPublic && 'publicnp') || (onNpInternational && 'international') || undefined,
                        noOthersInclude: true, // noOthersInclude
                        noPublicInclude: !onNpPublic,
                        noInternationalInclude: !onNpInternational,
                        wlOverride: usuallyWl,
                        facebook: isFacebook,
                        // keepCase,
                    };

                    if (isFacebook) {
                        helixStream = helixStream as FbStreamDetails;
                        stream.videoUrl = helixStream.videoUrl;
                        stream.thumbnailUrl = helixStream.thumbnailUrl;
                    }

                    nextId++;
                    for (const faction of activeFactions) factionCount[faction]++;
                    factionCount.allnopixel++;
                    if (onNpWhitelist) factionCount.whitelistnp++;
                    if (onNpPublic) factionCount.publicnp++;
                    if (onNpInternational) factionCount.international++;
                    if (!isFacebook) { // || integrated
                        npStreams.push(stream);
                    } else {
                        npStreamsFb.push(stream);
                    }
                });

                factionCount.alltwitch = gtaStreams.length;

                const filterFactions = (cloneDeepJson(filterFactionsBase) as FilterFactions);
                filterFactions.forEach((faction, i) => {
                    faction[3] = i;
                });
                filterFactions.sort((dataA, dataB) => {
                    const countA = factionCount[dataA[0]] || 0;
                    const countB = factionCount[dataB[0]] || 0;
                    if (countA === countB) return 0;
                    if (countA === 0) return 1;
                    if (countB === 0) return -1;
                    return 0;
                });

                for (const data of filterFactions) {
                    data[2] = factionCount[data[0]] !== 0;
                }

                // log(filterFactions);

                // Includes _TNOID_, npManual, _ORDER_, _TITLE_, _VIEWERS_, _PFP_, _CHANNEL1_, _CHANNEL2_
                // eslint-disable-next-line max-len
                const baseHtml = '<div class="tno-stream" id="tno-stream-_TNOID_" data-target="" style="order: _ORDER_;"><div class="Layout-sc-1xcs6mc-0 cLVpKC"><div><div class="Layout-sc-1xcs6mc-0"><article data-a-target="card-10" data-a-id="card-_CHANNEL1_" class="Layout-sc-1xcs6mc-0 fAprix"><div class="Layout-sc-1xcs6mc-0 gIALbm"><div class="Layout-sc-1xcs6mc-0 fSCWTp"><div class="ScTextWrapper-sc-10mto54-1 CSRpv"><div class="ScTextMargin-sc-10mto54-2 lkOZnV"><a data-focusable="true" data-test-selector="TitleAndChannel" data-a-target="preview-card-channel-link" aria-label="_CHANNEL1_ streaming _TITLE_" class="ScCoreLink-sc-16kq0mq-0 bMtPpj tw-link" href="/_CHANNEL1_"><h3 title="_TITLE_" class="CoreText-sc-1txzju1-0 jpNucq">_TITLE_</h3><p data-a-target="preview-card-channel-link" tabindex="-1" title="_CHANNEL2_" class="CoreText-sc-1txzju1-0 eZjVb">_CHANNEL2_</p></a></div><div class="Layout-sc-1xcs6mc-0 czEOvg"><div class="InjectLayout-sc-1i43xsx-0 cerOzE"><div class="InjectLayout-sc-1i43xsx-0 bkcYqZ"><button aria-label="Tag, English" data-a-target="English" tabindex="0" class="ScTag-sc-14s7ciu-0 bupdaH tw-tag"><div class="ScTagContent-sc-14s7ciu-1 bOnUXP"><div class="ScTruncateText-sc-i3kjgq-0 iXYIJp"><span>English</span></div></div></button></div></div></div></div><div class="ScImageWrapper-sc-10mto54-0 fyZLSX"><a data-a-target="card-10" data-a-id="card-_CHANNEL1_" data-test-selector="preview-card-avatar" tabindex="-1" class="ScCoreLink-sc-16kq0mq-0 ebZBYr tw-link" href="/_CHANNEL1_/videos"><div class="ScAspectRatio-sc-18km980-1 nvuLn tw-aspect"><div class="ScAspectSpacer-sc-18km980-0 dMlEgZ"></div><div class="ScAvatar-sc-144b42z-0 dddgvK tw-avatar"><img class="InjectLayout-sc-1i43xsx-0 gljEcG tw-image tw-image-avatar" alt="_CHANNEL1_" src="_PFP_"></div></div></a></div><div class="Layout-sc-1xcs6mc-0 bwEznE"><div class="Layout-sc-1xcs6mc-0 csTBa-D"><div class="InjectLayout-sc-1i43xsx-0 jYKWrK"><div class="Layout-sc-1xcs6mc-0 fWCZqF feedback-card"><div data-toggle-balloon-id="2599c516-5a5b-425f-9000-b68b5ee63afa" class="Layout-sc-1xcs6mc-0 gyuRLA"><div data-test-selector="toggle-balloon-wrapper__mouse-enter-detector" style="display: inherit;"><button class="ScCoreButton-sc-ocjdkq-0 fIBtKN ScButtonIcon-sc-9yap0r-0 eLUkQy" aria-label="Recommendation feedback" data-a-target="rec-feedback-card-button"><div class="ButtonIconFigure-sc-1emm8lf-0 kWtxaN"><div class="ScIconLayout-sc-1q25cff-0 ktoHkr"><div class="ScAspectRatio-sc-18km980-1 jMbAyK tw-aspect"><div class="ScAspectSpacer-sc-18km980-0 dMlEgZ"></div><svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" aria-hidden="true" focusable="false" class="ScIconSVG-sc-1q25cff-1 ifhFgG"><g><path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path></g></svg></div></div></div></button></div></div></div></div></div></div></div></div><div class="ScWrapper-sc-1wvuch4-0 dkRHaw tw-hover-accent-effect"><div class="ScTransformWrapper-sc-1wvuch4-1 ScCornerTop-sc-1wvuch4-2 dUXffE cOgLZP"></div><div class="ScTransformWrapper-sc-1wvuch4-1 ScCornerBottom-sc-1wvuch4-3 fwcrNw ePncOC"></div><div class="ScTransformWrapper-sc-1wvuch4-1 ScEdgeLeft-sc-1wvuch4-4 kOCzPo fUpopo"></div><div class="ScTransformWrapper-sc-1wvuch4-1 ScEdgeBottom-sc-1wvuch4-5 hxhSlw djJjFs"></div><div class="ScTransformWrapper-sc-1wvuch4-1 hTMUmc"><a data-a-target="preview-card-image-link" tabindex="-1" class="ScCoreLink-sc-16kq0mq-0 ebZBYr preview-card-image-link tw-link" href="/_CHANNEL1_"><div class="Layout-sc-1xcs6mc-0 cCEKFF"><div class="ScAspectRatio-sc-18km980-1 jMbAyK tw-aspect"><div class="ScAspectSpacer-sc-18km980-0 laApky"></div><img alt="_TITLE_ - _CHANNEL1_" class="tw-image" src="https://static-cdn.jtvnw.net/previews-ttv/live_user__CHANNEL1_-440x248.jpg_TIMEID_"></div><div class="ScPositionCorner-sc-1shjvnv-1 hyKylJ"><div class="ScChannelStatusTextIndicator-sc-qtgrnb-0 bLhnSM tw-channel-status-text-indicator" font-size="font-size-6"><p class="CoreText-sc-1txzju1-0 gvsscq">LIVE</p></div></div><div class="ScPositionCorner-sc-1shjvnv-1 eoUNUZ"><div class="ScMediaCardStatWrapper-sc-anph5i-0 kTpKoW tw-media-card-stat">_VIEWERS_ viewers</div></div></div></a></div></div></article></div></div></div></div>';
                const baseHtmlFb = baseHtml
                    .replaceAll('https://static-cdn.jtvnw.net/previews-ttv/live_user__CHANNEL1_-440x248.jpg_TIMEID_', '_THUMBNAIL_')
                    .replaceAll('href="/_CHANNEL1_/videos"', 'href="https://www.facebook.com/_CHANNEL2_"')
                    .replaceAll('href="/_CHANNEL1_"', 'href="_VIDEOURL_"');
                // eslint-disable-next-line max-len
                const baseHtmlClip = '<div data-a-target="clips-card-_ORDER_" id="tno-stream-_TNOID_" class="tno-stream Layout-sc-1xcs6mc-0 iPAXTU"><article class="Layout-sc-1xcs6mc-0 guHXLE"><div class="Layout-sc-1xcs6mc-0 gUnRUD"><div class="Layout-sc-1xcs6mc-0 ilDsKw"><div class="ScTextWrapper-sc-10mto54-1 fwZpSK"><div class="ScTextMargin-sc-10mto54-2 bcdHdk"><div class="Layout-sc-1xcs6mc-0 idlTrs"><a lines="1" class="ScCoreLink-sc-16kq0mq-0 eYjhIv ScCoreLink-sc-bhsr9c-0 jYyMcQ tw-link" href="/_CHANNEL1_/clip/_ID_"><h3 title="_TITLE_" class="CoreText-sc-1txzju1-0 dlDlel">_TITLE_</h3></a></div></div><div class="ScTextMargin-sc-10mto54-2 bcdHdk"><p class="CoreText-sc-1txzju1-0 jiepBC"><a data-a-target="preview-card-channel-link" class="ScCoreLink-sc-16kq0mq-0 eYjhIv tw-link" href="/_CHANNEL1_">_CHANNEL2_</a></p><p class="CoreText-sc-1txzju1-0 jiepBC"><a data-a-target="preview-card-clip-curator-link" class="ScCoreLink-sc-16kq0mq-0 eYjhIv tw-link" href="/_CLIPPER1_">Clipped by _CLIPPER1_</a></p></div></div><div class="ScImageWrapper-sc-10mto54-0 jrfBpi"><a data-test-selector="preview-card-avatar" tabindex="-1" class="ScCoreLink-sc-16kq0mq-0 jSrrlW tw-link" href="/_CHANNEL1_"><div class="ScAspectRatio-sc-18km980-1 gxJZAm tw-aspect"><div class="ScAspectSpacer-sc-18km980-0 kiiGFY"></div><figure aria-label="_CHANNEL1_" class="ScAvatar-sc-144b42z-0 jBfrnP tw-avatar"><img class="InjectLayout-sc-1i43xsx-0 bEwPpb tw-image tw-image-avatar" alt="_CHANNEL1_" src="_PFP_"></figure></div></a></div><div class="Layout-sc-1xcs6mc-0 jufFcl"><button class="ScCoreButton-sc-ocjdkq-0 hUGgcQ ScButtonIcon-sc-9yap0r-0 duUMaR" aria-label="More options" title="More options" data-a-target="report-button-more-button"><div class="ButtonIconFigure-sc-1emm8lf-0 hdCHgB"><div class="ScIconLayout-sc-1q25cff-0 cMWGQu"><div class="ScAspectRatio-sc-18km980-1 hTTohL tw-aspect"><div class="ScAspectSpacer-sc-18km980-0 kiiGFY"></div><svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1q25cff-1 dSicFr"><g><path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path></g></svg></div></div></div></button></div></div></div><div class="ScWrapper-sc-1wvuch4-0 dSyPJh tw-hover-accent-effect"><div class="ScTransformWrapper-sc-1wvuch4-1 ScCornerTop-sc-1wvuch4-2 gEBqEV hPOElK"></div><div class="ScTransformWrapper-sc-1wvuch4-1 ScCornerBottom-sc-1wvuch4-3 fNwmtl dTxLuP"></div><div class="ScTransformWrapper-sc-1wvuch4-1 ScEdgeLeft-sc-1wvuch4-4 jhgGdR blwnUh"></div><div class="ScTransformWrapper-sc-1wvuch4-1 ScEdgeBottom-sc-1wvuch4-5 dJYDVl dWkueR"></div><div class="ScTransformWrapper-sc-1wvuch4-1 gMwbGx"><a data-a-target="preview-card-image-link" tabindex="-1" class="ScCoreLink-sc-16kq0mq-0 jSrrlW tw-link" href="/_CHANNEL1_/clip/_ID_"><div class="Layout-sc-1xcs6mc-0 hkwQCo"><div class="ScAspectRatio-sc-18km980-1 hTTohL tw-aspect"><div class="ScAspectSpacer-sc-18km980-0 ftHEOL"></div><img alt="_TITLE_" class="tw-image" src="_THUMBNAIL_"></div><div class="ScPositionCorner-sc-1shjvnv-1 hoKYhE"><div class="ScMediaCardStatWrapper-sc-anph5i-0 bEHknf tw-media-card-stat">_DURATION_</div></div><div class="ScPositionCorner-sc-1shjvnv-1 gUtzBI"><div class="ScMediaCardStatWrapper-sc-anph5i-0 bEHknf tw-media-card-stat">_VIEWERS_ views</div></div><div class="ScPositionCorner-sc-1shjvnv-1 kBbWhP"><div class="ScMediaCardStatWrapper-sc-anph5i-0 bEHknf tw-media-card-stat">_DATE_</div></div></div></a></div></div></article></div>';

                const result: Live = {
                    ...includedData,
                    factionCount,
                    filterFactions,
                    clipGroups,
                    streamerData,
                    streams: npStreams,
                    streamsFb: npStreamsFb,
                    // streamsFb: [], // Temporary disable fb until frontend fix
                    channelsFb: fbStreamers.map(data => data[0]),
                    baseHtml,
                    baseHtmlFb,
                    baseHtmlClip,
                    fbDebounce: 1000 * 60 * 5.5,
                    fbMaxLookup: 3,
                    fbSleep: 2100,
                    fbGroupSize: 3,
                    fbGroupSleepInc: 1400,
                    fbRandomRadius: 1000,
                    fbLastMajorChange,
                    tick: nowTime,
                };

                // console.log('npStreamsFb', npStreamsFb);

                cachedResults[optionsStr] = result;
                log(`${endpoint}: Done fetching streams data!`);
                resolve(result);
            } catch (err) {
                log(`${endpoint}: Failed to fetch streams data:`, err);
                reject(err);
            }
        });
    } else {
        log(`${endpoint}: Waiting for npStreamsPromise...`);
    }

    await npStreamsPromise[optionsStr]!;

    log(`${endpoint}: Got data!`);

    return cachedResults[optionsStr]!;
};

const fbStreamSkeleton: FbStreamDetails = {
    userDisplayName: '',
    videoUrl: '',
    title: '',
    viewers: 0,
    profileUrlOverride: '',
    thumbnailUrl: '',
    facebook: true,
};
const fbStreamSkeletonKeys = Object.keys(fbStreamSkeleton);

const checkFbStreamsMap = (fbStreamsMap: FbStreamsMap): fbStreamsMap is FbStreamsMap => {
    if (fbStreamsMap == null || typeof fbStreamsMap !== 'object') return false;

    const fbStreams = Object.values(fbStreamsMap);
    if (fbStreams.length === 0) return true;

    const fbStream = fbStreams[0];
    if (fbStream == null || typeof fbStream !== 'object') return false;

    const objKeys = Object.keys(fbStream);
    const mixedKeys = new Set(fbStreamSkeletonKeys.concat(objKeys));
    if (mixedKeys.size !== fbStreamSkeletonKeys.length || mixedKeys.size !== objKeys.length) return false;

    return true;
};

const integrateFb = (live: Live): Stream[] => {
    const { streams, streamsFb } = live;
    const streamsAll: Stream[] = [];

    const numStreamsFb = streamsFb.length;
    if (numStreamsFb === 0) return streams;

    let fbIdx = 0;
    let addStream: Stream | undefined = streamsFb[fbIdx];
    for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        while (addStream && addStream.viewers >= stream.viewers) {
            streamsAll.push(addStream);
            fbIdx++;
            addStream = streamsFb[fbIdx];
        }
        streamsAll.push(stream);
    }
    if (fbIdx < numStreamsFb) {
        for (let i = fbIdx; i < numStreamsFb; i++) {
            streamsAll.push(streamsFb[i]);
        }
    }

    return streamsAll;
};

export const newFbData = async (fbChannels: string[], fbStreamsMap: FbStreamsMap, tick: number): Promise<Stream[]> => {
    console.log(fbChannels, fbStreamsMap);

    if (tick < initialStamp) {
        log('>>>>> Ignoring data from before initialStamp', initialStamp, tick);
        return [];
    }

    if (!checkFbStreamsMap(fbStreamsMap)) {
        log('>>>>> Bad fbStreamsMap structure!!!');
        return [];
    }

    let isMajor = fbLastMajorChange === 0; // Initial POST counts as a major change (full data)
    for (const channel of fbChannels) {
        if (!npCharacters[channel.toLowerCase()]) {
            log('>>>>> Bad entry:', channel);
            return [];
        }
        const stream = fbStreamsMap[channel];
        if (!stream) {
            if (fbStreamsCache[channel]) isMajor = true;
            delete fbStreamsCache[channel];
        } else {
            if (!fbStreamsCache[channel]) {
                isMajor = true;
            } else {
                // eslint-disable-next-line no-lonely-if
                if (!stream.title.startsWith('《FB》') && fbStreamsCache[channel].title.startsWith('《FB》')) {
                    stream.title = fbStreamsCache[channel].title;
                    console.log('Keeping old (better) title');
                }
            }
            fbStreamsCache[channel] = stream;
        }
    }

    console.log('== CACHE ==', ...Object.keys(fbStreamsCache).map(channel => [channel])); // Better looking logs
    if (isMajor) { // This data includes a major change
        fbLastMajorChangePrev = fbLastMajorChange;
        fbLastMajorChange = +new Date();
        log('>> UPDATED FB FOR MAJOR CHANGE');
    }
    if (tick < fbLastMajorChange) { // The user's data is missing major info
        const override = isMajor && (fbLastMajorChange - fbLastMajorChangePrev) > updateCacheMs * 2; // Immediately update the cache data
        log('>> Fetching new streams for next major change | override:', override);
        const live = await getNpLive({}, override, '/parse_streams', true); // Return the cache data (or override first)
        const streamsAll = integrateFb(live);
        return streamsAll;
    }
    return [];
};

// export const newFbDataOld = async (fbStreams: FbStreamDetails[], tick: number): Promise<Stream[]> => {
//     const fbStreamsJson = JSON.stringify(fbStreams);
//     if (fbStreamsJson === fbStreamsCacheJson) {
//         log('>>>>>>>>>> [OLD] GOT FB REQUEST: SAME AS CACHE');
//         return [];
//     }
//     const oldChannels = Object.values(fbStreamsCache).map(data => data.userDisplayName);
//     fbStreamsCacheJson = fbStreamsJson;
//     fbStreamsCache = Object.assign({}, ...fbStreams.map(data => ({ [data.userDisplayName]: data })));
//     log('UPDATED CACHE', fbStreamsCache);
//     const newChannels = fbStreams.map(data => data.userDisplayName);
//     if (JSON.stringify(oldChannels) !== JSON.stringify(newChannels)) {
//         fbLastMajorChangePrev = fbLastMajorChange;
//         fbLastMajorChange = +new Date();
//         log('>> [OLD] UPDATED FB FOR MAJOR CHANGE');
//     }
//     if (tick < fbLastMajorChange) {
//         const override = (fbLastMajorChange - fbLastMajorChangePrev) > updateCacheMs * 2;
//         log('>> [OLD] Fetching new streams for next major change | override:', override);
//         if (override) {
//             const live = await getNpLive({}, override, true);
//             return live.streams;
//         }
//     }
//     return [];
// };

export const getNpStreams = async (baseOptions = {}, override = false): Promise<Stream[]> => {
    const live = await getNpLive(baseOptions, override, '/streams');
    return live.streams;
};

getNpLive();

setInterval(async () => {
    const cachedResultsKeys = Object.keys(cachedResults);
    if (!cachedResultsKeys.length) return;
    log('Refreshing cache...');
    for (const optionsStr of cachedResultsKeys) {
        log('Refreshing optionStr');
        const optionsObj = JSON.parse(optionsStr);
        await getNpLive(optionsObj, true);
    }
}, updateCacheMs);
