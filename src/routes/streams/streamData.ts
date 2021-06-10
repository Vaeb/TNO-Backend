import { HelixPaginatedResult, HelixStream, HelixStreamType } from 'twitch';

import { apiClient } from '../../twitchSetup';
import {
    log, cloneDeepJson, filterObj, mapObj, parseParam,
} from '../../utils';

import { regNp, regOthers, regNpPublic, regNpWhitelist } from '../../data/settings';
import { npCharacters as npCharactersOld } from '../../data/characters';
import { isFactionColor, npFactionsRegex, NpFactionsRegexKeys } from '../../data/factions';

import type { RecordGen } from '../../utils';
import type { FactionMini, FactionFull, FactionRealMini, FactionRealFull } from '../../data/meta';
import type { Character as CharacterOld, NpCharacters as NpCharactersOld, AssumeOther, AssumeServer } from '../../data/characters';
import type { NpFactionsRegexMini, FactionColorsMini, FactionColorsRealMini } from '../../data/factions';

interface Character extends Omit<CharacterOld, 'faction' | 'displayName' | 'assumeServer'> {
    faction: FactionRealMini;
    factionUse: FactionColorsRealMini;
    displayName: string;
    nameReg: RegExp;
    assumeServer: AssumeServer;
}

type NpCharacters = { [key: string]: Character[] & { assumeOther: number; assumeServer: AssumeServer } };

const npCharacters = cloneDeepJson<NpCharactersOld, NpCharacters>(npCharactersOld);

const fullFactionMap: { [key in FactionMini]?: FactionFull } = {}; // Factions with corresponding characters

const displayNameDefault: { [key in FactionMini]?: number } = {
    police: 2,
    doj: 2,
    asrr: 0,
    mersions: 0,
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
} as const;

const game = '32982' as const;
const language = 'en' as const;
const streamType = HelixStreamType.Live;
const bigLimit = 100 as const;
// const maxPages = 5 as const;
const searchNumDefault = 500;
const updateCacheMs = 1000 * 60;

const toFactionMini = (faction: string) => faction.toLowerCase().replace(' ', '');

/*

*****************************************************************************
***************************** PARSE CHARACTERS ******************************
*****************************************************************************

*/
for (const [streamer, characters] of Object.entries(npCharacters)) {
    if (characters.length > 0) {
        characters.push({ name: '<Permathon>', nicknames: ['Permathon', 'Perma?thon'] } as Character);
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

        const fullFaction: FactionRealFull = charOld.faction || 'Independent';
        char.faction = toFactionMini(fullFaction) as FactionRealMini;
        if (!fullFactionMap[char.faction]) fullFactionMap[char.faction] = fullFaction;
        if (displayNameNum === undefined) displayNameNum = displayNameDefault[char.faction] ?? 1;

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
        char.nameReg = new RegExp(nameRegAll.join('|'), nameRegAll.length > 1 ? 'i' : undefined);

        if (char.faction != null) {
            char.factionUse = isFactionColor(char.faction) ? char.faction : 'otherfaction';
        } else {
            char.factionUse = 'independent';
        }

        if (charOld.assume !== undefined) foundOthers[charOld.assume] = true;

        if (!characters.assumeServer) characters.assumeServer = char.assumeServer || 'whitelist';
        if (!char.assumeServer) char.assumeServer = characters.assumeServer;
    });

    if (foundOthers.assumeNp && foundOthers.assumeOther) {
        characters.assumeOther = ASTATES.someOther;
    } else if (foundOthers.assumeOther) {
        characters.assumeOther = ASTATES.assumeOther;
    } else if (foundOthers.assumeNpNoOther) {
        characters.assumeOther = ASTATES.assumeNpNoOther;
    } else if (foundOthers.assumeNp) {
        characters.assumeOther = ASTATES.assumeNp;
    } else {
        characters.assumeOther = ASTATES.assumeNp;
    }

    const streamerLower = streamer.toLowerCase();
    if (streamer !== streamerLower) {
        npCharacters[streamerLower] = characters;
        delete npCharacters[streamer];
    }
}

const npFactionsRegexEntries = Object.entries(npFactionsRegex) as [NpFactionsRegexMini, RegExp][];

const knownPfps: { [key: string]: string } = {};

export const getStreams = async (searchNum = searchNumDefault): Promise<HelixStream[]> => {
    searchNum = Math.min(searchNum, 5000);
    // const gtaGame = await apiClient.helix.games.getGameById(game);
    let gtaStreams: HelixStream[] = [];
    let after;
    while (searchNum > 0) {
        const limitNow = Math.min(searchNum, bigLimit);
        searchNum -= limitNow;
        const gtaStreamsNow: HelixPaginatedResult<HelixStream> = await apiClient.helix.streams.getStreams({
            game,
            language,
            limit: String(limitNow),
            type: streamType,
            after,
        });

        if (gtaStreamsNow.data.length === 0) break;

        const lookupStreams = [];
        for (const helixStream of gtaStreamsNow.data) {
            if (knownPfps[helixStream.userId] === undefined) {
                lookupStreams.push(helixStream.userId);
            }
        }

        if (lookupStreams.length > 0) {
            log(`Looking up pfp for ${lookupStreams.length} users...`);
            if (lookupStreams.length < 5) log(lookupStreams);
            const foundUsers = await apiClient.helix.users.getUsersByIds(lookupStreams);
            for (const helixUser of foundUsers) {
                knownPfps[helixUser.id] = helixUser.profilePictureUrl.replace('-300x300.', '-50x50.');
            }
        }

        gtaStreams = gtaStreams.concat(gtaStreamsNow.data);
        after = gtaStreamsNow.cursor;
    }

    return gtaStreams;
};

export interface GetNpStreams {
    factionName?: FactionMini;
    filterEnabled?: boolean;
    allowPublic?: boolean;
    allowOthers?: boolean;
    darkMode?: boolean;
    searchNum?: number;
}

interface BaseStreamData {
    channelName: string;
    title: string;
    tagIds: string[];
    viewers: number;
    profileUrl: string;
}

interface StreamData extends BaseStreamData {
    rpServer?: string;
    characterName: string;
    faction?: FactionMini;
    tagText: string;
    tagFaction: FactionColorsMini;
    tagFactionSecondary?: FactionColorsMini;
    keepCase: boolean;
}

const cachedResults: { [key: string]: StreamData[] | undefined } = {};

export const getNpStreams = async (options: GetNpStreams = {}): Promise<StreamData[]> => {
    options = {
        factionName: 'allnopixel',
        filterEnabled: true,
        allowPublic: true,
        allowOthers: false,
        darkMode: true,
        ...filterObj(
            mapObj(options as RecordGen, (v, k) => {
                const value = parseParam(v as any);
                if (k === 'factionName') return toFactionMini(value);
                return value;
            }),
            v => v !== undefined
        ),
    };

    const optionsStr = JSON.stringify(options);

    if (cachedResults[optionsStr] !== undefined) {
        log('Returning cached results...');
        return cachedResults[optionsStr]!;
    }

    const {
        factionName, filterEnabled, allowPublic, allowOthers, searchNum,
    } = options;
    const gtaStreams = await getStreams(searchNum);

    // log(gtaStreams.length);
    log(options);

    // const useTextColor = '#000';
    // const useColors = darkMode ? useColorsDark : useColorsLight;
    const metaFactions: FactionMini[] = ['allnopixel', 'alltwitch'];
    // const npMetaFactions: FactionMini[] = ['allnopixel', 'alltwitch', 'othernp', 'publicnp'];
    const isMetaFaction = factionName !== undefined ? metaFactions.includes(factionName) : false;
    // const isNpMetaFaction = factionName !== undefined ? npMetaFactions.includes(factionName) : false;
    // const minViewersUse = isNpMetaFaction ? minViewers : 3;

    const npStreams = gtaStreams
        .map((helixStream) => {
            const { userDisplayName: channelName, title, viewers } = helixStream;

            const baseStreamData: BaseStreamData = {
                channelName,
                title,
                tagIds: helixStream.tagIds,
                viewers,
                profileUrl: knownPfps[helixStream.userId],
            }; // rpServer, characterName, faction, tagText, tagFaction

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
            const mainsOther = characters && characters.assumeOther == ASTATES.assumeOther;
            const keepNp = characters && characters.assumeOther == ASTATES.assumeNpNoOther;
            const onMainOther = !onNp && mainsOther;
            const npStreamer = onNp || characters;

            const nowFilterEnabled = filterEnabled && factionName !== 'alltwitch';

            // log(title, '>>>', onNp);

            let streamState; // remove, mark-np, mark-other
            if (nowFilterEnabled) {
                // If filtering streams is enabled
                if (
                    (allowOthers && (onOtherIncluded || onMainOther || (npStreamer && onOther)))
                    || (npStreamer && !mainsOther && !keepNp && onOther)
                ) {
                    // If is-including-others and streamer on another server, or it's an NP streamer playing another server
                    streamState = FSTATES.other;
                } else if (npStreamer && !onMainOther && !onOther) {
                    // If NoPixel streamer that isn't on another server
                    streamState = FSTATES.nopixel;
                    serverName = 'NP';
                } else {
                    return undefined;
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
                    return undefined;
                }

                const streamData: StreamData = {
                    ...baseStreamData,
                    rpServer: serverName,
                    characterName: '',
                    faction: undefined,
                    tagText: serverName.length > 0 ? `::${serverName}::` : '',
                    tagFaction: 'other',
                    keepCase: true,
                };

                return streamData;
            }

            // streamState === FSTATES.nopixel

            let nowCharacter;

            let assumeServer: AssumeServer = 'whitelist';

            if (characters && characters.length) {
                let lowestPos = Infinity;
                ({ assumeServer } = characters);
                for (const char of characters) {
                    const matchPos = titleParsed.indexOfRegex(char.nameReg);
                    if (matchPos > -1 && matchPos < lowestPos) {
                        lowestPos = matchPos;
                        nowCharacter = char;
                    }
                }
            }

            let factionNames: NpFactionsRegexMini[] = [];

            if (nowCharacter === undefined) {
                interface FactionObj {
                    name: NpFactionsRegexKeys;
                    index: number;
                    character?: Character;
                    rank: number;
                }
                const factionObjects: FactionObj[] = [];

                for (const [faction, regex] of npFactionsRegexEntries) {
                    const matchPos = title.indexOfRegex(regex);
                    if (matchPos > -1) {
                        const factionCharacter = characters && characters.find(char => char.faction === faction);
                        const factionObj: FactionObj = {
                            name: faction,
                            index: matchPos,
                            character: factionCharacter,
                            rank: factionCharacter ? 0 : 1, // ?????
                        };
                        factionObjects.push(factionObj);
                    }
                }

                if (factionObjects.length) {
                    factionObjects.sort((a, b) => a.rank - b.rank || a.index - b.index);
                    if (factionObjects[0].character) nowCharacter = factionObjects[0].character;
                    factionNames = factionObjects.map(f => f.name);
                }
            }

            const hasFactions = factionNames.length;
            const hasCharacters = characters && characters.length;

            if (nowCharacter) ({ assumeServer } = nowCharacter);
            const onNpPublic = assumeServer === 'whitelist' ? regNpPublic.test(title) : !regNpWhitelist.test(title);

            // log(nowCharacter);

            let allowStream = isMetaFaction;
            if (allowStream === false) {
                if (factionName === 'othernp') {
                    allowStream = !nowCharacter && !hasFactions && !hasCharacters;
                } else if (factionName === 'publicnp') {
                    allowStream = onNpPublic;
                } else {
                    let nowFaction;
                    if (nowCharacter) {
                        // use condition below
                        nowFaction = nowCharacter.factionUse;
                    } else if (hasFactions) {
                        nowFaction = factionNames[0];
                    } else if (hasCharacters) {
                        nowFaction = characters[0].factionUse;
                    }
                    allowStream = nowFaction === factionName;
                }
            }

            // log(allowStream === false, (onNpPublic && factionName !== 'publicnp' && allowPublic == false));

            if (allowStream === false || (onNpPublic && factionName !== 'publicnp' && allowPublic == false)) {
                return undefined;
            }

            let activeFaction: FactionMini | undefined;
            let keepCase = false;
            let tagFaction: FactionColorsMini;
            let tagText;

            if (nowCharacter) {
                activeFaction = nowCharacter.faction;
                tagFaction = nowCharacter.factionUse;
                tagText = `${nowCharacter.leader ? '♛ ' : ''}${nowCharacter.displayName}`;
            } else if (hasFactions) {
                activeFaction = factionNames[0];
                tagFaction = isFactionColor(factionNames[0]) ? factionNames[0] : 'independent';
                tagText = `< ${fullFactionMap[factionNames[0]] || factionNames[0]} >`;
            } else if (hasCharacters) {
                activeFaction = characters[0].factionUse;
                tagFaction = characters[0].factionUse;
                tagText = `? ${characters[0].displayName} ?`;
            } else {
                activeFaction = undefined;
                keepCase = true;
                activeFaction = 'othernp';
                tagFaction = 'othernp';
                tagText = `${serverName}`;
            }

            const streamData: StreamData = {
                ...baseStreamData,
                rpServer: serverName,
                characterName: nowCharacter?.name ?? '',
                faction: activeFaction,
                tagText,
                tagFaction,
                tagFactionSecondary: onNpPublic ? 'publicnp' : undefined,
                keepCase,
            };

            return streamData;
        })
        .filter((stream): stream is StreamData => stream !== undefined);

    cachedResults[optionsStr] = npStreams;

    return npStreams;
};

setInterval(() => {
    const cachedResultsKeys = Object.keys(cachedResults);
    if (!cachedResultsKeys.length) return;
    log('Refreshing cache...');
    for (const optionsStr of cachedResultsKeys) {
        log('Refreshing optionStr');
        const optionsObj = JSON.parse(optionsStr);
        cachedResults[optionsStr] = undefined;
        getNpStreams(optionsObj);
    }
}, updateCacheMs);
