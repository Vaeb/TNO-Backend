/* eslint-disable no-useless-escape */
/* eslint-disable operator-linebreak */

import { mergeRegex } from '../utils';

export const minViewers = 1;
export const stopOnMin = true;
export const checkOther = true;
export const intervalSeconds = 0.7;
export const regNp = /(?<!not\s)(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p\b)(?![\s\-]+inspired)/.source;
export const regNpPublic = mergeRegex([
    /(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p\b)(?:[\s\-_.]*(?:rp|\d+\.?\d*))?[\W_]*pub\w*\b(?!\W+(?:later|after))/,
    /|(\bpub\w*[\W_]*(?:no[\s\-_.]*pixel|\bn[\s\-_.]*p\b))/,
    /|(?<=(?:on|playing)\W+)(?:pub|public)/,
    /|\bpub\w*[\W_]*(?:server|queue|for\b)/,
    /|\[pub\w*\]/,
]).source;
export const regNpWhitelist = /(?:\bwhitelist|\bwl\b|\bmain\b|\bprivate\b(?![\s\-]+(?:detective|investigat\w+)))\b(?!\W+(?:later|after))/.source;
export const regOther = /the\s*family|\btf\s?rp|family\s*rp|twitchrp|\bt\W*rp|\bnon[\s\-]*stop|\bns\s?rp/.source;
export const regOthers = [
    { name: 'TheFamilyRP', reg: /the\s*family|\btf\s?rp|family\s*rp/.source, include: 1 },
    { name: 'TwitchRP', reg: /twitch[\s\-]*rp|\bt\W*rp/.source, include: 1 },
    { name: 'NonStopRP', reg: /\bnon[\s\-]*stop|\bns\s?rp/.source, include: 1 },
    { name: 'SVRP', reg: /\bsvrp\b|subversion/.source, include: 0 },
    { name: 'SSB WRLD', reg: /\bssb\b|ssb[\s:-]*(?:wo?rld|rp)|ssb\s+(?:later|after)/.source, include: 0 },
    { name: 'FrenzyRP', reg: /\bfrenzy\s*rp/.source, include: 0 },
    { name: 'Grizzley World', reg: /grizzley[\s\-]*wo?rld/.source, include: 0 },
    {
        name: '',
        reg: /\bgta[\s:-]*v?[\s:-]*online|chaos\s*mod\b|story[\s\-]*mode|\bgta[\s:-]*v?[\s\-]+story|grizzely\s*rp|\boc\s*rp\b|\bybn\b/.source,
        include: 0,
    },
];
