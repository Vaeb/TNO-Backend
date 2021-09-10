import { HelixPaginatedResult, HelixStream, HelixStreamType } from 'twitch';

import { apiClient } from '../../twitchSetup';
import {
    log, cloneDeepJson, filterObj, mapObj, parseParam, isObjEmpty, parseLookup,
} from '../../utils';

import { regNp, regOthers, regNpPublic, regNpWhitelist } from '../../data/settings';
import settingsParsed from '../../data/settingsParsed';
import factionsParsed from '../../data/factionsParsed';
import { NpFactions, npFactions } from '../../data/meta';
import { npCharacters as npCharactersOld } from '../../data/characters';
import { isFactionColor, lesserFactions, greaterFactions, npFactionsRegex, npFactionsSubRegex, filterFactionsBase } from '../../data/factions';

import type { RecordGen } from '../../utils';
import type { FactionMini, FactionFull, FactionRealMini, FactionRealFull } from '../../data/meta';
import type { Character as CharacterOld, NpCharacters as NpCharactersOld, AssumeOther, AssumeServer } from '../../data/characters';
import type { NpFactionsRegexMini, FactionColorsMini, FactionColorsRealMini } from '../../data/factions';

const includedData = Object.assign(
    {},
    ...['minViewers', 'stopOnMin', 'intervalSeconds']
        .map(key => ({ [key]: (settingsParsed as any)[key] })),
    ...['useColorsDark', 'useColorsLight']
        .map(key => ({ [key]: (factionsParsed as any)[key] })),
    { npFactions }
);

interface Character extends Omit<CharacterOld, 'factions' | 'displayName' | 'assumeServer'> {
    factions: FactionRealMini[];
    factionsObj: { [key in FactionRealMini]?: true };
    factionUse: FactionColorsRealMini;
    displayName: string;
    nameReg: RegExp;
    assumeServer: AssumeServer;
}

type NpCharacters = { [key: string]: Character[] & { assumeOther: number; assumeServer: AssumeServer; assumeChar?: Character; } };

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
const language = 'en' as const;
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
for (const [streamer, characters] of Object.entries(npCharacters)) {
    const streamerLower = streamer.toLowerCase();

    if (characters.length > 0) {
        characters.push({ name: '? "< One-Life Character >" ?', nicknames: ['Permathon', 'Perma?thon', '/\\bone[\\s-]life/'], assumeServer: 'both' } as Character); // '/\\bone[\\s-]life[\\s-]charac/'
    }

    const foundOthers: { [key in AssumeOther]?: boolean } = {};

    // eslint-disable-next-line no-loop-func
    characters.forEach((char) => {
        const charOld = char as unknown as CharacterOld;
        const names = charOld.name.split(/\s+/);
        const nameRegAll = [];
        const parsedNames = [];
        const titles = [];
        const realNames = [];
        let knownName;
        let currentName = null;
        let displayNameNum = charOld.displayName;

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
        }

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

        char.displayName = titles ? `${titles.join(' ')} ` : '';
        if (knownName !== undefined) {
            char.displayName += knownName;
        } else if (displayNameNum === 0) {
            char.displayName += realNames.join(' ');
        } else {
            char.displayName += realNames[displayNameNum - 1] || realNames[0];
        }
        char.displayName = char.displayName.trim();

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
    });

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
}

const npFactionsRegexEntries = Object.entries(npFactionsRegex) as [NpFactionsRegexMini, RegExp][];

const knownPfps: { [key: string]: string } = {};

interface GetStreamsOptions { searchNum?: number; international?: boolean }
type GetStreamsOptionsRequired = Required<GetStreamsOptions>;
export const getStreams = async (options: GetStreamsOptions): Promise<HelixStream[]> => {
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
            language: optionsParsed.international ? undefined : language,
            limit: String(limitNow),
            type: streamType,
            after,
        });

        if (gtaStreamsNow.data.length === 0) break;

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
            log(`Looking up pfp for ${lookupStreams.length} users...`);
            const foundUsers = await apiClient.helix.users.getUsersByIds(lookupStreams);
            for (const helixUser of foundUsers) {
                knownPfps[helixUser.id] = helixUser.profilePictureUrl.replace('-300x300.', '-50x50.');
            }
        }

        after = gtaStreamsNow.cursor;
    }

    return gtaStreams;
};

export interface LiveOptions {
    factionName: FactionMini;
    filterEnabled: boolean;
    allowPublic: boolean;
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
}

const cachedResults: { [key: string]: Live | undefined } = {};
const npStreamsPromise: { [key: string]: Promise<Stream[]> | undefined } = {};

export const getNpLive = async (baseOptions = {}, override = false): Promise<Live> => {
    if (!isObjEmpty(baseOptions)) log(baseOptions);

    const options: LiveOptions = {
        factionName: 'allnopixel',
        filterEnabled: true,
        allowPublic: true,
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
        log('Returning cached results.');
        return cachedResults[optionsStr]!;
    }

    if (npStreamsPromise[optionsStr] === undefined || override) {
        npStreamsPromise[optionsStr] = new Promise<Stream[]>(async (resolve, reject) => {
            try {
                log('Fetching streams data...');

                const {
                    factionName, filterEnabled, allowPublic, allowOthers, searchNum, international,
                } = options;
                const allowOthersNow = allowOthers || factionName === 'other';

                const gtaStreams = await getStreams({ searchNum, international });

                // log(gtaStreams.length);

                // const useTextColor = '#000';
                // const useColors = darkMode ? useColorsDark : useColorsLight;
                const metaFactions: FactionMini[] = ['allnopixel', 'alltwitch'];
                // const npMetaFactions: FactionMini[] = ['allnopixel', 'alltwitch', 'othernp', 'publicnp'];
                const isMetaFaction = metaFactions.includes(factionName);
                // const isNpMetaFaction = npMetaFactions.includes(factionName);
                // const minViewersUse = isNpMetaFaction ? minViewers : 3;

                const npStreams: Stream[] = [];
                const factionCount: FactionCount = mapObj(npFactions, () => 0);
                gtaStreams.forEach((helixStream) => {
                    const { userDisplayName: channelName, title, viewers } = helixStream;

                    const baseStream: BaseStream = {
                        channelName,
                        title,
                        // tagIds: helixStream.tagIds,
                        viewers,
                        profileUrl: knownPfps[helixStream.userId],
                    }; // rpServer, characterName, faction, tagText, tagFaction

                    let noOthersInclude = true;

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

                    const characters = npCharacters[channelNameLower];

                    if (characters.assumeOther === ASTATES.neverNp) {
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
                                noOthersInclude = false;
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

                    if (streamState === FSTATES.other) {
                        // Other included RP servers
                        const allowStream = isMetaFaction;
                        if (allowStream === false) {
                            return;
                        }

                        const stream: Stream = {
                            ...baseStream,
                            rpServer: serverName.length ? serverName : null,
                            characterName: null,
                            nicknameLookup: null,
                            faction: 'other',
                            factions: ['other'],
                            factionsMap: { other: true },
                            tagText: serverName.length > 0 ? `::${serverName}::` : '',
                            tagFaction: 'other',
                            noOthersInclude,
                            noPublicInclude: true,
                            // keepCase: true,
                        };

                        factionCount.other++;
                        npStreams.push(stream);
                        return;
                    }

                    // streamState === FSTATES.nopixel

                    const hasCharacters = characters && characters.length;
                    let nowCharacter;

                    let assumeServer: AssumeServer = 'whitelist';

                    if (hasCharacters) {
                        ({ assumeServer } = characters);
                    }

                    let onServer: AssumeServer = assumeServer;

                    const onPublicIndex = title.indexOfRegex(regNpPublic, 0, Infinity);
                    const onWhitelistIndex = title.indexOfRegex(regNpWhitelist, 0, Infinity);
                    let onServerDetected = false;

                    if (onPublicIndex < onWhitelistIndex) {
                        onServer = 'public';
                        onServerDetected = true;
                    } else if (onWhitelistIndex < onPublicIndex) {
                        onServer = 'whitelist';
                        onServerDetected = true;
                    }

                    if (hasCharacters) {
                        let lowestPos = Infinity;
                        let maxResults = -1;
                        for (const char of characters) {
                            const matchPositions = [...titleParsed.matchAll(char.nameReg)];
                            const numResults = matchPositions.length;
                            const lowIndex = numResults ? matchPositions[0].index! + (onServerDetected && char.assumeServer !== onServer && char.assumeServer !== 'both' ? 1e4 : 0) : -1;
                            if (lowIndex > -1 && (lowIndex < lowestPos || (lowIndex === lowestPos && numResults > maxResults))) {
                                lowestPos = lowIndex;
                                maxResults = numResults;
                                nowCharacter = char;
                            }
                        }
                    }

                    let factionNames: FactionRealMini[] = [];

                    if (nowCharacter === undefined) {
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

                        if (factionObjects.length) {
                            factionObjects.sort((a, b) => a.rank1 - b.rank1 || a.rank2 - b.rank2 || a.rank3 - b.rank3 || a.index - b.index);
                            if (factionObjects[0].character) nowCharacter = factionObjects[0].character; // Sorted by has-character
                            // factionNames = factionObjects[0].factions;
                            factionNames = factionObjects.map(factionObj => factionObj.factions).flat(1);
                        }
                    }

                    const hasFactions = factionNames.length;

                    if (nowCharacter && onServerDetected === false) {
                        ({ assumeServer } = nowCharacter);
                        onServer = assumeServer;
                    }

                    const onNpPublic = onServer === 'public';

                    // log(nowCharacter);

                    let allowStream = isMetaFaction;
                    if (allowStream === false) {
                        if (factionName === 'othernp') {
                            allowStream = !nowCharacter && !hasFactions && !hasCharacters;
                        } else if (factionName === 'publicnp') {
                            allowStream = onNpPublic;
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

                    if (allowStream === false || (onNpPublic && factionName !== 'publicnp' && allowPublic == false)) {
                        return;
                    }

                    // let keepCase = false;
                    let activeFactions: FactionMini[];
                    let tagFaction: FactionColorsMini;
                    let tagText;

                    if (nowCharacter) {
                        activeFactions = nowCharacter.factions;
                        tagFaction = nowCharacter.factionUse;
                        tagText = `${nowCharacter.leader ? '♛ ' : ''}${nowCharacter.displayName}`;
                    } else if (hasFactions) {
                        activeFactions = factionNames;
                        tagFaction = isFactionColor(factionNames[0]) ? factionNames[0] : 'independent';
                        tagText = hasFactionsTagText ? `< ${hasFactionsTagText} >` : `< ${fullFactionMap[factionNames[0]] || factionNames[0]} >`;
                    } else if (possibleCharacter) {
                        activeFactions = possibleCharacter.factions;
                        tagFaction = possibleCharacter.factionUse;
                        tagText = `? ${possibleCharacter.displayName} ?`;
                    } else {
                        // keepCase = true;
                        activeFactions = ['othernp'];
                        tagFaction = 'othernp';
                        tagText = `${serverName}`;
                    }

                    const stream: Stream = {
                        ...baseStream,
                        rpServer: serverName,
                        characterName: possibleCharacter?.name ?? null,
                        nicknameLookup: possibleCharacter?.nicknames ? possibleCharacter.nicknames.map(nick => parseLookup(nick)).join(' _-_ ') : null,
                        faction: activeFactions[0],
                        factions: activeFactions,
                        factionsMap: Object.assign({}, ...activeFactions.map(faction => ({ [faction]: true }))),
                        tagText,
                        tagFaction,
                        tagFactionSecondary: onNpPublic ? 'publicnp' : undefined,
                        noOthersInclude,
                        noPublicInclude: !onNpPublic,
                        // keepCase,
                    };

                    for (const faction of activeFactions) factionCount[faction]++;
                    factionCount.allnopixel++;
                    if (onNpPublic) factionCount.publicnp++;
                    npStreams.push(stream);
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

                log(filterFactions);

                const result: Live = { ...includedData, factionCount, filterFactions, streams: npStreams };
                cachedResults[optionsStr] = result;
                log('Done fetching streams data!');
                resolve(npStreams);
            } catch (err) {
                log('Failed to fetch streams data:', err);
                reject(err);
            }
        });
    } else {
        log('Waiting for npStreamsPromise...');
    }

    await npStreamsPromise[optionsStr]!;

    log('Got data!');

    return cachedResults[optionsStr]!;
};

export const getNpStreams = async (baseOptions = {}, override = false): Promise<Stream[]> => {
    const live = await getNpLive(baseOptions, override);
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
