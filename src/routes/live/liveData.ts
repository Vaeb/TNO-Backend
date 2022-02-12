import { HelixPaginatedResult, HelixStream, HelixStreamType } from 'twitch';
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
import { isFactionColor, lesserFactions, greaterFactions, npFactionsRegex, npFactionsSubRegex, filterFactionsBase } from '../../data/factions';

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
const languages: string[] = ['en', 'hi', 'no'];
const streamType = HelixStreamType.Live;
const bigLimit = 100 as const;
// const maxPages = 5 as const;
const searchNumDefault = 2000;
const searchNumMax = 5000;
const updateCacheMs = 1000 * 60;

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

        if (charOld.nicknames) {
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
        } // testing commit identity

        const fullFactions: FactionRealFull[] = charOld.factions?.length ? charOld.factions : ['Independent'];
        char.factionsObj = {};
        char.factions = fullFactions.map((fullFaction) => {
            const miniFaction = toFactionMini(fullFaction) as FactionRealMini;
            if (!fullFactionMap[miniFaction]) fullFactionMap[miniFaction] = fullFaction;
            char.factionsObj[miniFaction] = true;
            return miniFaction;
        });
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

const knownPfps: { [key: string]: string } = {};

interface GetStreamsOptions { searchNum?: number; international?: boolean }
type GetStreamsOptionsRequired = Required<GetStreamsOptions>;
export const getStreams = async (options: GetStreamsOptions, endpoint = '<no-endpoint>'): Promise<HelixStream[]> => {
    const optionsParsed: GetStreamsOptionsRequired = {
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
    while (searchNum > 0) {
        const limitNow = Math.min(searchNum, bigLimit);
        searchNum -= limitNow;
        const gtaStreamsNow: HelixPaginatedResult<HelixStream> = await apiClient.helix.streams.getStreams({
            game,
            // language: optionsParsed.international ? undefined : language,
            language: languages,
            limit: String(limitNow),
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

        if (lookupStreams.length > 0) {
            log(`${endpoint}: Looking up pfp for ${lookupStreams.length} users after...`);
            const foundUsers = await apiClient.helix.users.getUsersByIds(lookupStreams);
            for (const helixUser of foundUsers) {
                knownPfps[helixUser.id] = helixUser.profilePictureUrl.replace('-300x300.', '-50x50.');
            }
        }

        after = gtaStreamsNow.cursor;
    }

    return gtaStreams;
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
    userDisplayName: string,
    videoUrl: string
    title: string,
    viewers: number,
    profileUrlOverride: string,
    thumbnailUrl: string,
    facebook: boolean,
}

type FbStreamsMap = { [key: string]: FbStreamDetails };

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
    channelsFb: string[];
    baseHtml: string;
    baseHtmlFb: string;
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

export const getNpLive = async (baseOptions = {}, override = false, integrated = false, endpoint = '<no-endpoint>'): Promise<Live> => {
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

    if (!override && cachedResults[optionsStr] !== undefined) {
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

                    const baseStream: BaseStream = {
                        channelName,
                        title,
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
                        if (!isFacebook || integrated) {
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

                    if (onWorldwideIndex !== -1) {
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
                            const lowIndex = numResults ? matchPositions[0].index! + serverMatchWeight + devFactionWeight : -1;
                            if (lowIndex > -1 && (
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
                    if (!isFacebook || integrated) {
                        npStreams.push(stream);
                    } else {
                        npStreamsFb.push(stream);
                    }
                });

                factionCount.alltwitch = gtaStreams.length;

                const filterFactions = (cloneDeepJson(filterFactionsBase) as typeof filterFactionsBase)
                    .sort((dataA, dataB) => {
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

                // Includes npManual, _ORDER_, _TITLE_, _VIEWERS_, _PFP_, _CHANNEL1_, _CHANNEL2_
                // eslint-disable-next-line max-len
                const baseHtml = '<div class="tno-stream" id="tno-stream-_TNOID_" data-target="" style="order: _ORDER_;"><div class="Layout-sc-nxg1ff-0 hwqnUg"><div><div class="Layout-sc-nxg1ff-0"><article data-a-target="card-10" data-a-id="card-_CHANNEL1_" class="Layout-sc-nxg1ff-0 hTbBzX"><div class="Layout-sc-nxg1ff-0 gIDgyI"><div class="Layout-sc-nxg1ff-0 iTDkvD"><div class="ScTextWrapper-sc-14f6evl-1 cndMhY"><div class="ScTextMargin-sc-14f6evl-2 feEGBq"><div class="Layout-sc-nxg1ff-0 AjNUj"><a lines="1" data-a-target="preview-card-title-link" class="ScCoreLink-sc-udwpw5-0 iwYxXk ScCoreLink-sc-ybxm10-0 iEEhdE tw-link" href="/_CHANNEL1_"><h3 title="_TITLE_" class="CoreText-sc-cpl358-0 hkccBP">_TITLE_</h3></a></div></div><div class="ScTextMargin-sc-14f6evl-2 feEGBq"><p class="CoreText-sc-cpl358-0 gzYAzs"><a data-test-selector="ChannelLink" data-a-target="preview-card-channel-link" class="ScCoreLink-sc-udwpw5-0 iwYxXk tw-link" href="/_CHANNEL1_/videos">_CHANNEL2_</a></p></div><div class="Layout-sc-nxg1ff-0 gwFCeO"><div class="InjectLayout-sc-588ddc-0 bFhJdp"><div class="InjectLayout-sc-588ddc-0 hoDLKA"><button class="ScTag-sc-xzp4i-0 hrkHJN tw-tag" aria-label="English" data-a-target="English"><div class="ScTagContent-sc-xzp4i-1 iYcwjl">English</div></button></div></div></div></div><div class="ScImageWrapper-sc-14f6evl-0 eBvtgw"><a data-a-target="card-10" data-a-id="card-_CHANNEL1_" data-test-selector="preview-card-avatar" class="ScCoreLink-sc-udwpw5-0 hUIOdd tw-link" href="/_CHANNEL1_/videos"><div class="ScAspectRatio-sc-1sw3lwy-1 flFnOO tw-aspect"><div class="ScAspectSpacer-sc-1sw3lwy-0 giUbvo"></div><figure aria-label="_CHANNEL1_" class="ScAvatar-sc-12nlgut-0 hnnsXF tw-avatar"><img class="InjectLayout-sc-588ddc-0 bxsmXn tw-image tw-image-avatar" alt="_CHANNEL1_" src="_PFP_"></figure></div></a></div></div></div><div class="ScWrapper-sc-uo2e2v-0 bbtaKw tw-hover-accent-effect"><div class="ScTransformWrapper-sc-uo2e2v-1 ScCornerTop-sc-uo2e2v-2 dKYJaX eXxFuv"></div><div class="ScTransformWrapper-sc-uo2e2v-1 ScCornerBottom-sc-uo2e2v-3 bNOuEj dzSwHO"></div><div class="ScTransformWrapper-sc-uo2e2v-1 ScEdgeLeft-sc-uo2e2v-4 kIKqjn cdcwLw"></div><div class="ScTransformWrapper-sc-uo2e2v-1 ScEdgeBottom-sc-uo2e2v-5 cuGbfn geiifk"></div><div class="ScTransformWrapper-sc-uo2e2v-1 icKHub"><a data-a-target="preview-card-image-link" class="ScCoreLink-sc-udwpw5-0 hUIOdd tw-link" href="/_CHANNEL1_"><div class="Layout-sc-nxg1ff-0 bcTnJT"><div class="ScAspectRatio-sc-1sw3lwy-1 dJaMsL tw-aspect"><div class="ScAspectSpacer-sc-1sw3lwy-0 lnBtND"></div><img alt="_TITLE_ - _CHANNEL1_" class="tw-image" src="https://static-cdn.jtvnw.net/previews-ttv/live_user__CHANNEL1_-440x248.jpg_TIMEID_"></div><div class="ScPositionCorner-sc-1iiybo2-1 ibaFTb"><div class="ScChannelStatusTextIndicator-sc-1f5ghgf-0 cbXzwD tw-channel-status-text-indicator" font-size="font-size-6"><p class="CoreText-sc-cpl358-0 joOBZx">LIVE</p></div></div><div class="ScPositionCorner-sc-1iiybo2-1 fIveqX"><div class="ScMediaCardStatWrapper-sc-1ncw7wk-0 gPUAhy tw-media-card-stat">_VIEWERS_ viewers</div></div></div></a></div></div></article></div></div></div></div>';
                const baseHtmlFb = baseHtml
                    .replaceAll('https://static-cdn.jtvnw.net/previews-ttv/live_user__CHANNEL1_-440x248.jpg_TIMEID_', '_THUMBNAIL_')
                    .replaceAll('href="/_CHANNEL1_/videos"', 'href="https://www.facebook.com/_CHANNEL2_"')
                    .replaceAll('href="/_CHANNEL1_"', 'href="_VIDEOURL_"');

                const result: Live = {
                    ...includedData,
                    factionCount,
                    filterFactions,
                    streams: npStreams,
                    streamsFb: npStreamsFb,
                    channelsFb: fbStreamers.map(data => data[0]),
                    baseHtml,
                    baseHtmlFb,
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

const checkFbStreamsMap = (fbStreamsMap: any): fbStreamsMap is FbStreamsMap => {
    if (fbStreamsMap == null || typeof fbStreamsMap !== 'object') return false;

    const fbStream = Object.values(fbStreamsMap)[0];
    if (fbStream == null || typeof fbStream !== 'object') return false;

    const objKeys = Object.keys(fbStream);
    const mixedKeys = new Set(fbStreamSkeletonKeys.concat(objKeys));
    if (mixedKeys.size !== fbStreamSkeletonKeys.length || mixedKeys.size !== objKeys.length) return false;

    return true;
};

export const newFbData = async (fbChannels: string[], fbStreamsMap: any, tick: number): Promise<Stream[]> => {
    console.log(fbChannels, fbStreamsMap);

    if (!checkFbStreamsMap(fbStreamsMap)) {
        log('>>>>> Bad fbStreamsMap structure!!!');
        return [];
    }

    let isMajor = fbLastMajorChange === 0; // Initial POST counts as a major change (full data)
    for (const channel of fbChannels) {
        if (!npCharacters[channel.toLowerCase()]) {
            log('>>>>> Bad entry:', channel);
            break;
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

    log('UPDATED CACHE', fbStreamsCache);
    if (isMajor) {
        fbLastMajorChangePrev = fbLastMajorChange;
        fbLastMajorChange = +new Date();
        log('>> UPDATED FB FOR MAJOR CHANGE');
    }
    if (tick < fbLastMajorChange) {
        const override = (fbLastMajorChange - fbLastMajorChangePrev) > updateCacheMs * 2;
        log('>> Fetching new streams for next major change | override:', override);
        if (override) {
            const live = await getNpLive({}, override, true, '/parse_streams');
            return live.streams;
        }
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
    const live = await getNpLive(baseOptions, override, undefined, '/streams');
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
