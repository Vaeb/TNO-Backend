/* eslint-disable no-useless-escape */
/* eslint-disable max-len */

import { mergeRegex } from '../utils';
import { npFactions, npFactionsRealMini } from './meta';

import type { FactionMini, FactionRealMini } from './meta';

const noAutoFaction = { independent: true, otherfaction: true, other: true, cleanbois: true } as const;

export type NpFactionsRegexKeys = Exclude<FactionRealMini, keyof typeof noAutoFaction>;

export const npFactionsRegex = {
    lostmc: /lost\s*mc|the\s*lost\b/i,
    changgang: /chang\s*gang|\bcga?\b/i,
    vagos: /vagos|yellow[\s\-]*gang|\besv\b/i,
    gsf: /grove|\bgsf\b/i,
    ssb: /balla|\bssb\b(?![\s\-]+(?:wo?rld|later))|\besb\b/i,
    bsk: /\bbsk\b|brouge street|burger shot king/i,
    marabunta: /\bmarabunta/i,
    hoa: /\bhoa\b|hogs\s*of\s*anarchy|home[\s\-]*owners[\s\-]*association/i,
    doj: /\bdoj\b|department\s*of\s*justice|judge\b(?![\s]*me)|\ba?\.?d\.?a\b|lawyer|para[\s\-]*legal/i,
    asrr: /\balta[\s\-]*street|\bblock(?:\b|[\s\-]*party|[\s\-]*athon)/i,
    angels: /\bangels\b/i,
    nbc: /\bnbc\b/i,
    burgershot: /burger[\s\-]*shot|\bburgers\b/i,
    development: /\bdevelop|\bdev\b|\bcoding/i,
    doc: /\bdoc\b|\bcorrection/i,
    prison: /\blifer|\bprison|\blife\W+sentence/i,
    mechanic: /\bmechanic\b/i,
    harmony: /\bharmony\b/i,
    quickfix: /\bquick[\s\-]*fix/i,
    tunershop: /\btuner[\s\-]*shop\b/i,
    larpers: /\blarp\b|\blarper|the\s*guild/i,
    police: mergeRegex([
        /(?<!then\b.*|!|\bformer\b[\s\w]+)/i,
        /(?:\bcop\b|chief of police|officer|der?puty|\bd-\d|investigation|sergeant|lieutenant|corporal|sheriff|trooper|cadet|\b(?:ranger|dt|sgt|lt(?![^|!]*\bjones\b)|cpl|lspd|sasp|bcso|cid|police[\s\-_]*academy)\b)/i,
    ]),
    medical: /(?<!then\b.*|!)(?:doctor|\b(?:dr|ems|emt)\b)/i,
} as { [key in NpFactionsRegexKeys]: RegExp };

export type NpFactionsRegexMini = keyof typeof npFactionsRegex;

const has = <K extends string>(key: K, x: Record<string, unknown>): x is { [key in K]: unknown } =>
    key in x;

const keepS: { [key in FactionRealMini]?: boolean } = { pegasus: true, news: true };
npFactionsRealMini.forEach((faction) => {
    const fullFaction = npFactions[faction];
    if (!has(faction, noAutoFaction) && !has(faction, npFactionsRegex) && !['doc'].includes(faction)) {
        faction = faction as NpFactionsRegexKeys;
        let regStr = RegExp.escape((fullFaction[fullFaction.length - 1] === 's' && !keepS[faction]) ? fullFaction.slice(0, -1) : fullFaction).toLowerCase();
        if (regStr.length <= 3) {
            regStr = `\\b${regStr}\\b`;
        } else {
            regStr = `\\b${regStr}`;
        }
        npFactionsRegex[faction] = new RegExp(regStr, 'i');
    }
});

// export type NoFactionColorsMini = 'alltwitch' | 'allnopixel' | 'darkweb' | 'news' | 'russians' | 'condemnedmc' | 'mersions' | 'lunatix' | 'marabunta';
// type FactionColorsMini = Exclude<FactionMini, NoFactionColorsMini>;
// : { [key in FactionColorsMini]: string }

export const useColorsDark = {
    cleanbois: '#e74c3c',
    lostmc: '#ab5179',
    changgang: '#686de0',
    vagos: '#f1c40f',
    gsf: '#006422',
    ssb: '#9b59b6',
    bsk: '#8854d0',
    pegasus: '#A87C2D',
    hoa: '#a6033a',
    doj: '#00a032',
    asrr: '#a35231',
    angels: '#ff9ff3',
    nbc: '#789500',
    bbmc: '#3B64E6',
    burgershot: '#E99062',
    development: '#718093',
    doc: '#0984e3',
    prison: '#1C8EA2',
    mechanic: '#40739e',
    harmony: '#40739e',
    quickfix: '#40739e',
    tunershop: '#40739e',
    larpers: '#ffeaa7',
    police: '#0abde3',
    medical: '#badc58',
    otherfaction: '#32ff7e',
    independent: '#32ff7e',
    podcast: '#ffffff',
    othernp: '#ffffff',
    publicnp: '#81ecec',
    other: '#81ecec',
} as const;

export type FactionColorsMini = keyof typeof useColorsDark;

export type FactionColorsRealMini = FactionRealMini & FactionColorsMini;

export const isFactionColor = (factionMini: FactionMini): factionMini is FactionColorsMini => factionMini in useColorsDark;

export const useColorsLight: { [key in FactionColorsMini]: string } = {
    cleanbois: '#c74c3c',
    lostmc: '#ab5179',
    changgang: '#686de0',
    vagos: '#e3ba16',
    gsf: '#006422',
    ssb: '#9b59b6',
    bsk: '#8854d0',
    pegasus: '#A87C2D',
    hoa: '#a6033a',
    doj: '#00a032',
    asrr: '#a35231',
    angels: '#e192d7',
    nbc: '#789500',
    bbmc: '#2250ff',
    burgershot: '#c77c50',
    development: '#718093',
    doc: '#1080d6',
    prison: '#1C8EA2',
    mechanic: '#40739e',
    harmony: '#40739e',
    quickfix: '#40739e',
    tunershop: '#40739e',
    larpers: '#cfba57',
    police: '#0a0de3',
    medical: '#9adc58',
    otherfaction: '#12af7e',
    independent: '#12af7e',
    podcast: '#000000',
    othernp: '#000000',
    publicnp: '#65b1b8',
    other: '#65b1b8',
} as const;
