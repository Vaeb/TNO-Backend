/* eslint-disable no-useless-escape */
/* eslint-disable operator-linebreak */

import { mergeRegex, replaceAll } from '../utils';

export const minViewers = 1;
export const stopOnMin = true;
export const intervalSeconds = 0.7;

const addPublicCounties = (reg: RegExp) => new RegExp(
    replaceAll(
        replaceAll(
            reg.source,
            'pub\\w*',
            '(?:pub\\w*|ps\\b|🟢|🟣|green|purp|purple)'
        ),
        '(?:pub|public',
        '(?:pub|public|public[\\s\\-_.]*server|ps\\b|🟢|🟣|green|purp|purple'
    ),
    reg.flags
);

export const regNp = /(?<!(?:not|like)\s)(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p\b)(?![\s\-]*(?:inspired|based|like|ban|\.ins\b))/i;
export const regNpPublic = addPublicCounties(mergeRegex([
    /(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d))(?:[\s\-_.]*(?:rp|\d+\.?\d*))?[\W_]*pub\w*(?!\W+(?:later|after))/i,
    /|(\bpub\w*[\W_]*(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d)))/i,
    /|(?<=(?:\bon|playing|gta[\s\-_.]*[5v]?|rp|roleplay)\W+)(?:pub|public)/i,
    /|\bpub\w*[\W_]*(?:pub|public|server|county|city|country|universe|timeline|queue|for\b|roleplay|rp\b|stuff\b|shenanigans)/i,
    /|[^\w\s]\s*pub\w*\s*[^\w\s]/i,
    /|\b(?:pub|public)$/i,
]));
export const regNpInternational = mergeRegex([
    /(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d))(?:[\s\-_.]*(?:rp|\d+\.?\d*))?[\W_]*india\w*\b(?!\W+(?:later|after))/i,
    /|(\bindia\w*[\W_]*(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d)))/i,
    /|(?<=(?:\bon|playing|gta[\s\-_.]*[5v]?|rp|roleplay)\W+)(?:india)/i,
    /|\bindia\w*[\W_]*(?:india|server|county|city|country|universe|timeline|queue|for\b|roleplay|rp\b|stuff\b|shenanigans)/i,
    /|[^\w\s]\s*india\w*\s*[^\w\s]/i,
    /|\bindia\w*$/i,
]);

console.log(regNpPublic);

// eslint-disable-next-line max-len
export const regNpWhitelist = /(?<!(?:waiting for|chance at)\s)(?:\bwhitelist|\bwl+\b|(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d))(?:[\s\-_.]*(?:rp|\d+\.?\d*))?[\W_]*(?:main|white)\b|\b(?:main|white)[\W_]*(?:nopixel|np|server)|\bprivate\b(?![\s\-]+(?:detective|investigat\w+)))\b(?!\W+(?:later|after|gone))/i;
export const regOther = /the\s*family|\btf\s?rp|family\s*rp|twitchrp|\bt\W*rp|\bnon[\s\-]*stop|\bns\s?rp/i;
export const regOthers = [
    { name: 'TheFamilyRP', reg: /\btf\s?rp|family\s*(?:rp\b|roleplay)/i, include: 1 },
    { name: 'TwitchRP', reg: /twitch[\s\-]*rp|\bt\W*rp/i, include: 1 },
    { name: 'NonStopRP', reg: /\bnon[\s\-]*stop\s*(?:rp\b|roleplay)|\bns\s?rp/i, include: 1 },
    { name: 'Project Homecoming', reg: /project[\s\-_.]*(?:homecoming\d*|\bhc\d*\b)|\bph\d*\b/i, include: 1 },
    { name: 'LegacyRP', reg: /\blegacy[\s\-_.]*(?:rp\b|roleplay)/i, include: 1 },
    { name: 'NewDayRP', reg: /\bnewday(?:rp|roleplay)?\b|\b(?:new\s+day|nd)\s*(?:rp|roleplay)\b/i, include: 1 },
    { name: 'TheSquadRP', reg: /(?:the[\s\-]*|\b)squad[\s\-]*(?:roleplay|rp\b)|\bts[\s\-]*rp\b/i, include: 1 },
    { name: 'NewHopeRP', reg: /\bnew[\s\-_.]*hope[\s\-_.]*(?:rp\b|roleplay)|\bnhrp\b/i, include: 1 },
    { name: 'ZooYorkRP', reg: /\bzoo[\s\-_.]*york[\s\-_.]*(?:rp\b|roleplay)|\bzyrp\b/i, include: 0 },
    { name: 'SVRP', reg: /\bsvrp\b|subversion/i, include: 0 },
    { name: 'BlueHavenRP', reg: /\bbhrp\b|blue[\s\-_.]*haven/i, include: 0 },
    { name: 'SSB WRLD', reg: /\bssb\b|ssb[\s:-]*(?:wo?rld|rp)|ssb\s+(?:later|after)/i, include: 0 },
    { name: 'FrenzyRP', reg: /\bfrenzy\s*rp/i, include: 0 },
    { name: 'OvertimeRP', reg: /\bover[\s\-_.]*time[\s\-_.]*(?:rp\b|roleplay)/i, include: 0 },
    { name: 'GrandRP', reg: /\bgrand[\s\-_.]*(?:rp\b|roleplay)/i, include: 0 },
    { name: 'FiveM', reg: /\brandom[\s\-_.]*fivem\b/i, include: 0 },
    { name: 'OurBenefactors', reg: /\bour[\s\-_.]*benefactors|\bob[\s\-_.]*rp\b/i, include: 1 },
    { name: 'Grizzley World', reg: /grizzley[\s\-]*wo?rld|grizzely\s*rp/i, include: 0 },
    { name: 'Chaos Mod', reg: /chaos\s*mod\b|\bgta[\s:-]*[5v]?[\s\-]+chaos\s*(?:[^\s\w]|$)/i, include: 0 },
    { name: 'GTA Online', reg: /\bgta[\s:-]*[5v]?[\s:-]*online/i, include: 0 },
    { name: 'GTA Story', reg: /story[\s\-]*mode|\bgta[\s:-]*[5v]?[\s\-]+story/i, include: 0 },
    {
        name: '',
        reg: /\boc\s*rp\b|\bybn\b/i,
        include: 0,
    },
];
