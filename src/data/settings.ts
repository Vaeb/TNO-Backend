/* eslint-disable no-useless-escape */
/* eslint-disable operator-linebreak */

import { mergeRegex, replaceAll } from '../utils';

export const minViewers = 1;
export const stopOnMin = true;
export const intervalSeconds = 0.7;

const addPublicCounties = (reg: RegExp) => new RegExp(
    replaceAll(
        replaceAll(reg.source, 'pub\\w*', '(?:pub\\w*|orange|purple)'),
        '(?:pub|',
        '(?:pub|orange|purple|'
    ),
    reg.flags
);

export const regNp = /(?<!not\s)(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p\b)(?![\s\-]*(?:inspired|based|ban|\.ins\b))/i;
export const regNpPublic = addPublicCounties(mergeRegex([
    /(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d))(?:[\s\-_.]*(?:rp|\d+\.?\d*))?[\W_]*pub\w*\b(?!\W+(?:later|after))/i,
    /|(\bpub\w*[\W_]*(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p(?=\b|\d)))/i,
    /|(?<=(?:on|playing)\W+)(?:pub|public)/i,
    /|\bpub\w*[\W_]*(?:server|county|city|country|universe|timeline|queue|for\b)/i,
    /|[^\w\s]\s*pub\w*\s*[^\w\s]/i,
    /|\b(?:pub|public)$/i,
]));

console.log(regNpPublic);

export const regNpWhitelist = /(?:\bwhitelist|\bwl\b|\bmain\b|\bprivate\b(?![\s\-]+(?:detective|investigat\w+)))\b(?!\W+(?:later|after))/i;
export const regOther = /the\s*family|\btf\s?rp|family\s*rp|twitchrp|\bt\W*rp|\bnon[\s\-]*stop|\bns\s?rp/i;
export const regOthers = [
    { name: 'TheFamilyRP', reg: /the\s*family|\btf\s?rp|family\s*rp/i, include: 1 },
    { name: 'TwitchRP', reg: /twitch[\s\-]*rp|\bt\W*rp/i, include: 1 },
    { name: 'NonStopRP', reg: /\bnon[\s\-]*stop|\bns\s?rp/i, include: 1 },
    { name: 'Project Homecoming', reg: /project[\s\-_.]*(?:homecoming\d*|\bhc\d*\b)|\bph\d*\b/i, include: 1 },
    { name: 'LegacyRP', reg: /\blegacy[\s\-_.]*(?:rp\b|roleplay)/i, include: 1 },
    { name: 'New Day RP', reg: /\bnewday(?:rp|roleplay)?\b|\bnew\s+day\s*(?:rp|roleplay)\b/i, include: 1 },
    { name: 'SVRP', reg: /\bsvrp\b|subversion/i, include: 0 },
    { name: 'SSB WRLD', reg: /\bssb\b|ssb[\s:-]*(?:wo?rld|rp)|ssb\s+(?:later|after)/i, include: 0 },
    { name: 'FrenzyRP', reg: /\bfrenzy\s*rp/i, include: 0 },
    { name: 'Grizzley World', reg: /grizzley[\s\-]*wo?rld/i, include: 0 },
    {
        name: '',
        reg: /\bgta[\s:-]*v?[\s:-]*online|chaos\s*mod\b|story[\s\-]*mode|\bgta[\s:-]*v?[\s\-]+story|grizzely\s*rp|\boc\s*rp\b|\bybn\b/i,
        include: 0,
    },
];
