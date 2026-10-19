/* eslint-disable no-useless-escape */
/* eslint-disable max-len */

import { mergeRegex, objectEntries } from '../utils';
import { npFactions, npFactionsRealMini } from './meta';

import type { FactionMini, FactionRealMini } from './meta';

const noAutoFaction = {
    independent: true,
    otherfaction: true,
    other: true,
    mechanic: true,
} as const;

export type NpFactionsRegexKeys = Exclude<FactionRealMini, keyof typeof noAutoFaction>;

const noLater = (reg: RegExp) => mergeRegex(['(?:', reg, ')', /(?!(?:[\s-_]+(?:char\w*|roleplay|rp|war))?[^\w.;]+(?:later|after))/i]);

const noFormer = (reg: RegExp) => mergeRegex([/(?<!(?:\b|_)(?:vs?|versus|on|against|e?x|former|fake|wanna\s*be|fighting|clapping|with|becom\w+\s+a|for|then)(?:\s+(?:th?e|some|all|every|el|la|da))?[^a-z0-9]*|vs?)/i, '(?:', reg, ')']);

export const npFactionsRegex = {
    lostmc: noLater(noFormer(/lost\s*mc|the\s*lost\b/i)),
    changgang: noFormer(/chang\s*gang|\bcga?\b/i),
    hydragang: noFormer(/\b(?:hydra|mario|flippy|snake+)'?s?[\s\-]*(?:gang|crew)|\bhydra\b|\bhga?\b/i),
    vagos: noLater(noFormer(/\bcb\s*street\s*team|vagos|\bvago\b|yellow[\s\-]*gang|\besv\b/i)),
    gsf: noLater(noFormer(/\bgrove\b|\bgsf\b|broc+ol+i bo[iy]|\bthe[\s\-_.]*families|𝕱𝖆𝖒𝖎𝖑𝖎𝖊𝖘/i)),
    ssb: noLater(noFormer(/\bball+a+(?:\b|[sgz])|🟣|\besb\b|\b[sg]sb\b(?![\s\-]+(?:wo?rld|later))/i)),
    marabunta: noLater(noFormer(/\bmarabunta|\bmg\b/i)),
    hoa: noFormer(/\bh[.\s]*o[.\s\-_]*[ab]\b|hogs\s*of\s*anarchy|home[\s\-]*owners[\s\-]*association/i),
    doj: noLater(noFormer(/\bdoj\b|\bspu\b|\bprosecutor\b|department\s*of\s*justice|judge\b(?![\s]*me)|\bd\.a\b|\ba\.?d\.?a\b|(?<!\b(?:former|ex|aspiring)[\s\-]*)(?:lawyer|attorney)|para[\s\-]*legal/i)),
    manor: noFormer(/\bmanors?\b/i),
    habibis: noFormer(/\bhabibi/i),
    hounds: noFormer(/\bhounds/i),
    admc: noFormer(/\badmc\b|\balready[\s\-_.]*dead/i),
    clowns: noFormer(/\bclown/i),
    pawnaddicts: noFormer(/\bpawn[\s\-_.]*addicts?\b/i),
    brickbois: noFormer(/\bbrick[\s\-_.]*bo[iy][sz]?\b/i),
    hkpawn: noFormer(/\b(?:hong[\s\-_.]*kong|hk)[\s\-_.]*pawn\b/i),
    sinnerpawn: noFormer(/\bsinners?[\s\-_.]*(?:st(?:reet)?\.?[\s\-_.]*)?pawn\b/i),
    brickhouse: noFormer(/\bbrick[\s\-_.]*house\b/i),
    oldcountry: noFormer(/\bold[\s\-_.]*country\b/i),
    the404: noFormer(/\bthe[\s\-_.]*404\b|\b404[\s\-_.]*(?:gang|crew)\b/i),
    sweepers: noFormer(/\bstreet[\s\-_.]*sweepers?\b/i),
    pissboiz: noFormer(/\bpiss[\s\-_.]*bo[iy][sz]?\b/i),
    casino: noFormer(/\bpixel[\s\-_.]*casino\b|(?<!pixel[\s\-_.]*)\bcasino\b/i),
    polish: noFormer(/\bpolish[\s\-_.]*folks?\b/i),
    nest: noFormer(/\bnest\b/i),
    gruppe6: noFormer(/\bgruppe[\s\-_.]*(?:6|sechs)\b|\bg6\b/i),
    slim: noFormer(/\bslim[\s\-_.]*(?:and|&|n'?)?[\s\-_.]*friends\b/i),
    order: noFormer(/\bthe[\s\-_.]*order\b/i),
    locksmiths: noFormer(/\block[\s\-]*smiths?\b/i),
    bpm: noFormer(/\bbpm\b/i),
    collective: noFormer(/\bthe[\s\-_.]*collective\b/i),
    '6chambers': noFormer(/\b6[\s\-_.]*chambers?\b|\bsix[\s\-_.]*chambers?\b/i),
    kc: noFormer(/\bkc\b|\bkaneshiro/i),
    faceless: noFormer(/\bface[\s\-_.]*less/i),
    podcast: noLater(noFormer(/\b(?<!!)podcast\b/i)),
    watchparty: noLater(noFormer(/\b(?<!!)watch[\s\-_.]*part/i)),
    besties: noLater(noFormer(/\bbesties|\bbst\b/i)),
    saints: noLater(noFormer(/\bsaints/i)),
    news: noFormer(/(?<!(?:good|big|great|amazing|bad|some)\s*)\bnews\b|\blsbn\b|weazel[\s\-_.]*news/i),
    burgershot: noFormer(/(?<!(?:everyone|people)\s+at\s+)burger[\s\-]*shot|\bburgers\b|\bburgersh/i),
    development: /\bdevelop|\bdev\b|\bcoding|devathon/i,
    doc: noLater(noFormer(/\bdoc\b|\bcorrection/i)),
    prison: noLater(/\blifer|\blife\W+sentence/i),
    police: noLater(noFormer(
        mergeRegex([
            /(?<!\bthen\b.*|!|\bformer\b[\s\w]+|corrections\s+|\bdoc\s+|\bmedic\w*\s+|\bems\s+)/i,
            /(?:\bcop(?:\s+mode)?\b|🚓|chief of police|\b[56](?:\d[1-9]|[1-9]\d)\b|officer|\binterceptor\s*trial|\bpolice\spursuit|\bpolice\sdepartment|\bfinal\s*eval|\bfto|der?puty(?![\s\-_]*(?:mayor|warden))|\bd-\d|\bdispatch\b|ride[\s\-_.]*along|sergeant|lieutenant|corporal|sheriff|\btrooper|\bcadet|\bcaderp|\b(?:ranger|dt|sdso|pbso|cpd|vpd|dpd|sgt|cpl|cpt|ofc|lspd|sasp|bcso|pbso|sdso|police[\s\-_]*academy|lt(?![^|!]*\bjones\b))\b)/i,
            /(?!\?|[\s\-_]+copium)/i,
        ])
    )),
    medical: noLater(/(?<!then\b.*|!)(?:doctor|\b[teplch]-\d{1,2}\b|paramedic|therapist|psychologist|\b(?:dr(?!\s*pepper)|em[st])\b)/i),
} as { [key in NpFactionsRegexKeys]: RegExp };

export const npFactionsSubRegex: { [key in FactionRealMini]?: [string, RegExp][] } = {
    police: [
        ['Dispatch', /\bd-\d|\bdispatch\b/i],
        ['Ride Along', /ride[\s\-_.]*along/i],
    ],
};

// export const lesserFactions = asConst<PartialRecord<FactionRealMini, true>>()({
//     news: true,
//     burgershot: true,
//     development: true,
//     mechanic: true,
// });

// const validateType = <T> (obj: T) => undefined;

export const lesserFactions: { [key in FactionRealMini]?: true } = {
    news: true,
    burgershot: true,
    development: true,
    mechanic: true,
} as const;
// validateType<{ [key in FactionRealMini]?: true }>(lesserFactions);
// const checkKeys: FactionRealMini = (null!) as keyof typeof lesserFactions;

export const greaterFactions: { [key in FactionRealMini]?: true } = {
    podcast: true,
    watchparty: true,
} as const;

export type NpFactionsRegexMini = keyof typeof npFactionsRegex;

const has = <K extends string>(key: K, x: Record<string, unknown>): x is { [key in K]: unknown } => key in x;

const keepS: { [key in FactionRealMini]?: boolean } = { news: true };

npFactionsRealMini.forEach((faction) => {
    const fullFaction = npFactions[faction];
    if (!has(faction, noAutoFaction) && !has(faction, npFactionsRegex)) {
        faction = faction as NpFactionsRegexKeys;
        let regStr = RegExp.escape(fullFaction[fullFaction.length - 1] === 's' && !keepS[faction] ? fullFaction.slice(0, -1) : fullFaction).toLowerCase();
        if (regStr.length <= 4) {
            regStr = `\\b${regStr}\\b`;
        } else {
            regStr = `\\b${regStr}`;
        }
        console.log(faction);
        npFactionsRegex[faction] = new RegExp(regStr, 'i');
    }
});

// export type NoFactionColorsMini = 'alltwitch' | 'allnopixel' | 'news' | 'mersions' | 'marabunta';
// type FactionColorsMini = Exclude<FactionMini, NoFactionColorsMini>;
// : { [key in FactionColorsMini]: string }

export const useColorsDark = { // #ff77ff #FAA0A0 #FA0B42
    collective: '#e74c3c',
    unused2: '#bfff00',
    hounds: '#ab5179',
    changgang: '#686de0',
    hydragang: '#E23B5B',
    '6chambers': '#E84118',
    habibis: '#A87C2D',
    unused4: '#32ff7e',
    vagos: '#f1c40f',
    unused5: '#67BDA5',
    gsf: '#006422',
    ssb: '#9b59b6',
    clowns: '#7957D4',
    pawnaddicts: '#E1B12C',
    brickbois: '#D2691E',
    hkpawn: '#FF6B81',
    sinnerpawn: '#C44569',
    brickhouse: '#B33939',
    oldcountry: '#6AB04C',
    the404: '#1DD1A1',
    sweepers: '#A4B0BE',
    pissboiz: '#FFF200',
    casino: '#AF9595',
    polish: '#EA8685',
    nest: '#786FA6',
    gruppe6: '#38ADA9',
    slim: '#F8A5C2',
    order: '#E056FD',
    locksmiths: '#C9A227',
    bpm: '#FF9F1A',
    // marabunta: '#60a5fa',
    hoa: '#a6033a',
    // saints: '#9AFA99',
    doj: '#00a032',
    unused6: '#a35231',
    kc: '#f1aff3',
    besties: '#ff7fff',
    manor: '#FF51A1',
    unused7: '#32ff7e',
    faceless: '#3F809B',
    unused8: '#789500',
    admc: '#3B64E6',
    burgershot: '#E99062',
    development: '#718093',
    unused9: '#32ff7e',
    doc: '#0984e3',
    prison: '#1C8EA2',
    unused10: '#FFECAF',
    police: '#0abde3',
    medical: '#badc58',
    otherfaction: '#32ff7e',
    independent: '#32ff7e',
    podcast: '#ffffff',
    watchparty: '#ffffff',
    othernp: '#ffffff',
    international: '#f780a1',
    publicnp: '#81ecec',
    other: '#429e9d',
    allnopixel: '#ffffff',
    alltwitch: '#ffffff',
} as const;

export type FactionColorsMini = keyof typeof useColorsDark;

export type FactionColorsRealMini = FactionRealMini & FactionColorsMini;

export const isFactionColor = (factionMini: FactionMini): factionMini is FactionMini & FactionColorsMini => factionMini in useColorsDark;

export const useColorsLight: { [key in FactionColorsMini]: string } = {
    collective: '#c74c3c',
    unused2: '#bfff00',
    hounds: '#ab5179',
    changgang: '#686de0',
    hydragang: '#DF274B',
    '6chambers': '#C23616',
    habibis: '#A87C2D',
    unused4: '#12af7e',
    vagos: '#e3ba16',
    unused5: '#67BDA5',
    gsf: '#006422',
    ssb: '#9b59b6',
    clowns: '#8854d0',
    pawnaddicts: '#B7891A',
    brickbois: '#A0522D',
    hkpawn: '#D6455D',
    sinnerpawn: '#A33355',
    brickhouse: '#8C2B2B',
    oldcountry: '#4E8A36',
    the404: '#10AC84',
    sweepers: '#57606F',
    pissboiz: '#ADA200',
    casino: '#AF9595',
    polish: '#C0605F',
    nest: '#574B90',
    gruppe6: '#227C78',
    slim: '#D6739A',
    order: '#B03AC9',
    locksmiths: '#9C7A12',
    bpm: '#C26A00',
    // marabunta: '#66A1FA',
    hoa: '#a6033a',
    // saints: '#6FBA7D',
    doj: '#00a032',
    unused6: '#a35231',
    kc: '#e192d7',
    unused8: '#789500',
    besties: '#ff77ff',
    manor: '#e84393',
    unused7: '#12af7e',
    faceless: '#40739e',
    admc: '#2250ff',
    burgershot: '#c77c50',
    development: '#718093',
    unused9: '#12af7e',
    doc: '#1080d6',
    prison: '#1C8EA2',
    unused10: '#cfba57',
    police: '#0a0de3',
    medical: '#9adc58',
    otherfaction: '#12af7e',
    independent: '#12af7e',
    podcast: '#000000',
    watchparty: '#000000',
    othernp: '#000000',
    international: '#8faf7f',
    publicnp: '#65b1b8',
    other: '#35b0a8',
    allnopixel: '#ffffff',
    alltwitch: '#ffffff',
} as const;

const filterExclude: { [key in FactionMini]?: boolean } = {
    mechanic: true,
    mersions: true,
    // podcast: true,
    otherfaction: true,
    othernp: true,
    // 2025
    vagos: true,
    news: true,
    marabunta: true,
    podcast: true,
    watchparty: true,
};

type FactionMiniArr = FactionMini[];

const filterOrderTop: FactionMiniArr = [
    'allnopixel',
    'alltwitch',
    'publicnp',
    'international',
    'independent',
    '6chambers',
    'besties',
    'pawnaddicts',
    'police',
    'brickbois',
    'sinnerpawn',
    'oldcountry',
    'the404',
    'sweepers',
    'slim',
    'casino',
    'brickhouse',
    'hkpawn',
    'pissboiz',
    'polish',
    'burgershot',
    'gruppe6',
    'doj',
    'doc',
    'nest',
    'order',
    'locksmiths',
    'bpm',
    'collective',
    'faceless',
    'manor',
    'hydragang',
    'habibis',
    'admc',
    'kc',
    'clowns',
    'hounds',
    'changgang',
    'medical',
    'saints',
    'vagos',
    'hoa',
    'ssb',
    'lostmc',
    'gsf',
    'marabunta',
    'prison',
];

const filterOrderAfterHasColor: FactionMiniArr = ['development'];

const filterOrderAfterNoColor: FactionMiniArr = ['whitelistnp', 'guessed', 'podcast', 'watchparty', 'other'];

const filterOrder: { [key in FactionMini]?: number } = Object.assign(
    {},
    ...filterOrderTop.map((mini, index) => ({ [mini]: index + 1 })),
    ...filterOrderAfterHasColor.map((mini, index) => ({ [mini]: 1000 + index + 1 })),
    ...filterOrderAfterNoColor.map((mini, index) => ({ [mini]: 3000 + index + 1 }))
);

const filterRename: { [key in FactionMini]?: string } = {
    allnopixel: 'All NoPixel (Default)',
    alltwitch: 'All Twitch (No Filtering)',
    whitelistnp: 'NoPixel Whitelist',
    publicnp: 'NoPixel Public',
    international: 'NoPixel International',
    hoa: 'Home Owners Association',
    hydragang: 'Hydra Gang',
    marabunta: 'Marabunta Grande',
    admc: 'Already Dead MC (ADMC)',
    kc: 'Kaneshiro Clan (KC)',
    doc: 'Department of Corrections',
    doj: 'Law & Government', // Lawyers & Judges
    ssb: 'Ballas',
    // saints: 'The Saints',
    gsf: 'Grove Street Families',
    faceless: 'The Faceless',
    hounds: 'Hounds MC',
    manor: 'The Manor',
    clowns: 'The Clowns',
    pawnaddicts: 'Pawn Addicts',
    brickbois: 'Brick Bois',
    hkpawn: 'Hong Kong Pawn',
    sinnerpawn: 'Sinner Street Pawn',
    brickhouse: 'The Brick House',
    oldcountry: 'Old Country',
    the404: 'The 404',
    sweepers: 'Street Sweepers',
    pissboiz: 'PISS BOIZ',
    casino: 'Pixel Casino',
    polish: 'Polish Folks',
    nest: 'NEST',
    gruppe6: 'Gruppe Sechs',
    slim: 'Slim and Friends',
    order: 'The Order',
    locksmiths: 'The Locksmiths',
    bpm: 'BPM',
    collective: 'The Collective',
    '6chambers': '6Chambers',
    prison: 'Prison Lifers',
    othernp: 'Unknown RPers',
    other: 'Other Servers',
    guessed: 'Uncertain',
};

export const filterFactionsBase: [FactionMini, string, boolean][] = objectEntries(npFactions)
    .filter(mini => !(mini[0] in filterExclude))
    .sort((miniA, miniB) => (filterOrder[miniA[0]] || (miniA[0] in useColorsDark ? 1000 : 2000)) - (filterOrder[miniB[0]] || (miniB[0] in useColorsDark ? 1000 : 2000)))
    .map(mini => [mini[0], filterRename[mini[0]] || mini[1], true]);
