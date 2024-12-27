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
            '(?:pub\\w*|ps\\b|green|purp|purple)'
        ),
        '(?:pub|public',
        '(?:pub|public|public[\\s\\-_.]*server|ps\\b|green|purp|purple'
    ),
    reg.flags
);

const addOtherCountries = (reg: RegExp) => new RegExp(
    replaceAll(
        reg.source,
        'india',
        '(?:india\\w*|brazil\\w*|brasil\\w*|am[ée]rica\\s+do\\s+sul|sul\\s*america\\w*|spain'
        + '|nopixeles|nopixelsa|spanish|espa[nñ]ol|espa[nñ]a|south\\s*america\\w*|s\\.?/?\\s*a\\b\\.?\\s*|e\\.?/?\\s*sp?\\b\\.?\\s*)'
    ),
    reg.flags
);

export const regNp = /(?<!(?:not|like)\s)(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?:wl|whitelist|public)?\b)(?![\s\-]*(?:inspired|based|like|ban|\.ins\b))/i;
export const regNpPublic = addPublicCounties(mergeRegex([
    /(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d))(?:[\s\-_.]*(?:rp|\d+\.?\d*))?[\W_]*pub\w*(?!\W+(?:later|after))/i,
    /|(\bpub\w*[\W_]*(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d)))/i,
    /|(?<=(?:\bon|(?:playing|plays)|(?:trying|tries)(?:\s*out)?|(?:taking|takes)\s*over|gta[\s\-_.]*[5v]?|rp|roleplay)\W+)(?:pub|public)/i,
    /|\bpub\w*[\W_]*(?:pub|public|server|county|city|country|universe|timeline|queue|for\b|roleplay|rp\b|stuff\b|shenanigans)/i,
    /|[^\w\s]\s*pub\w*\s*[^\w\s]/i,
    /|\b(?:pub|public)$/i,
]));
export const regNpInternational = addOtherCountries(mergeRegex([
    /(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d))(?:[\s\-_.]*(?:rp|\d+\.?\d*))?[\W_]*india\b(?!\W+(?:later|after))/i,
    /|(\bindia[\W_]*(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d)))/i,
    /|(?<=(?:\bon|\bin|goes\sto|playing|gta[\s\-_.]*[5v]?|rp|roleplay)\W+)(?:india)/i,
    /|\bindia[\W_]*(?:india|server|county|city|country|universe|timeline|queue|for\b|roleplay|rp\b|stuff\b|shenanigans)/i,
    /|[^\w\s]\s*india\s*[^\w\s]/i,
    /|\bindia$/i,
]));

console.log(regNpInternational);

// eslint-disable-next-line max-len
export const regNpWhitelist = /(?<!(?:waiting for|chance at)\s)(?:\bwhitelist|\bwl+\b|(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d))(?:[\s\-_.]*(?:rp|\d+\.?\d*))?[\W_]*(?:main|white)\b|\b(?:main|white)[\W_]*(?:nopixel|np|server)|\bprivate\b(?![\s\-]+(?:detective|investigat\w+)))\b(?!\W+(?:later|after|gone))/i;
export const regOther = /the\s*family|\btf\s?rp|family\s*rp|twitchrp|\bt\W*rp|\bnon[\s\-]*stop|\bns\s?rp/i;
export const regOthers = [
    // { name: 'TheFamilyRP', reg: /\btf\s?rp|family\s*(?:rp\b|roleplay)/i, include: 1 },
    { name: 'TheFamilyRP', reg: /\btf\s?rp/i, include: 1 },
    { name: 'PurpleRP', reg: /\bprp\b|purple\s*(?:rp\b|role\s*play)/i, include: 1 },
    { name: 'TwitchRP', reg: /twitch[\s\-]*rp|\bt\W*rp/i, include: 1 },
    { name: 'NonStopRP', reg: /\bnon[\s\-]*stop\s*(?:rp\b|roleplay)|\bns\s?rp/i, include: 1 },
    { name: 'Project Homecoming', reg: /project[\s\-_.]*(?:homecoming\d*|\bhc\d*\b)|\bph\d*\b/i, include: 1 },
    { name: 'LegacyRP', reg: /\blegacy[\s\-_.]*(?:rp\b|roleplay)/i, include: 1 },
    { name: 'District 10', reg: /\bdistrict[\s\-_.]*(?:10|ten)\b|\bd10\b/i, include: 1 },
    { name: 'EchoRP', reg: /\becho[\s\-_.]*(?:rp\b|roleplay)/i, include: 1 },
    { name: 'IllusionRP', reg: /\billusion[\s\-_.]*(?:rp\b|roleplay)/i, include: 1 },
    { name: 'ProdigyRP', reg: /\bproi?digy[\s\-_.]*(?:\b|rp\b|roleplay)/i, include: 1 },
    { name: 'ONX', reg: /\bony?x[\s\-_.]*(?:\b|rp\b|roleplay)/i, include: 1 },
    { name: 'LiquidRP', reg: /\bliquid[\s\-_.]*(?:rp\b|roleplay|\W*$|[\|:;,\-])/i, include: 1 },
    { name: '5City', reg: /\b5city|\bfivecity/i, include: 1 },
    { name: 'Lucid City', reg: /\blucid[\s\-_.]*city|\blcrp/i, include: 1 },
    { name: 'ZooYorkRP', reg: /\b(?:zoo|new)[\s\-_.]*york|\bzy\b|\bzyrp\b/i, include: 1 },
    { name: 'IgniteRP', reg: /\bignite\s*(?:rp|roleplay)|\bignite\b|\b1985\b/i, include: 1 },
    { name: 'NewDayRP', reg: /\bnewday(?:rp|roleplay)?\b|\b(?:new\s+day|nd)\s*(?:rp|roleplay)\b/i, include: 1 },
    { name: 'TheSquadRP', reg: /(?:the[\s\-]*|\b)squad[\s\-]*(?:roleplay|rp\b)|\bts[\s\-]*rp\b/i, include: 1 },
    { name: 'NewHopeRP', reg: /\bnew[\s\-_.]*hope[\s\-_.]*(?:rp\b|roleplay)|\bnhrp\b/i, include: 1 },
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
        reg: /\boc\s*rp\b|\bybn\b|\bnew\s*(?:(?:rp|roleplay)\s*)?server/i,
        include: 0,
    },
];
