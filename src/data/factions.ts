/* eslint-disable no-useless-escape */
/* eslint-disable max-len */

import { mergeRegex, objectEntries } from '../utils';
import { npFactions, npFactionsRealMini } from './meta';

import type { FactionMini, FactionRealMini } from './meta';

const noAutoFaction = {
    independent: true,
    otherfaction: true,
    other: true,
    cleanbois: true,
    russians: true,
    chaos: true,
    mechanic: true,
} as const;

export type NpFactionsRegexKeys = Exclude<FactionRealMini, keyof typeof noAutoFaction>;

const noLater = (reg: RegExp) => mergeRegex(['(?:', reg, ')', /(?!(?:[\s-_]+(?:char\w*|roleplay|rp))?[^\w.;]+(?:later|after))/i]);

const noFormer = (reg: RegExp) => mergeRegex([/(?<!(?:\b|_)(?:vs?|versus|on|against|e?x|former|fake|wanna\s*be|fighting|clapping|with|becom\w+\s+a|for|then)(?:\s+(?:th?e|some|all|every|el|la|da))?[^a-z0-9]*|vs?)/i, '(?:', reg, ')']);

export const npFactionsRegex = {
    lostmc: noLater(noFormer(/lost\s*mc|the\s*lost\b/i)),
    changgang: noFormer(/chang\s*gang|\bcga?\b/i),
    hydragang: noFormer(/\b(?:hydra|mario|flippy|snake+)'?s?[\s\-]*(?:gang|crew)|\bhydra\b|\bhga?\b/i),
    streetteam: noFormer(/street\s*team|\bs[\s.]*t[\s.]*a\b|(?:(?:[^\w\s]|^) *(?<![^']\b\w\.? *)s\.?\s*t\b(?!\.? *\w\.?\b)|(?<![^']\b\w\.? *)\bs\.?\s*t(?!\.? *\w\.?\b) *(?:[^\w\s]|$))(?!\s*jude)/i), // https://regex101.com/r/i3N2HD/1
    bcg: noFormer(/\bbcg|\bbowl[\s\-_.]*cut|bowl[\s\-_.]*cut[\s\-_.]*gang/i),
    cleancartel: noFormer(/\bclean\s*cartel/i),
    vagos: noLater(noFormer(/\bcb\s*street\s*team|vagos|\bvago\b|yellow[\s\-]*gang|\besv\b/i)),
    gsf: noLater(noFormer(/\bgrove\b|\bgsf\b|broc+ol+i bo[iy]|\bthe[\s\-_.]*families|𝕱𝖆𝖒𝖎𝖑𝖎𝖊𝖘/i)),
    ssb: noLater(noFormer(/\bball+a+(?:\b|[sgz])|\besb\b|\b[sg]sb\b(?![\s\-]+(?:wo?rld|later))/i)),
    bsk: noFormer(/\bb[s$]k\b|brouge street|burger shot king/i),
    sos: noFormer(/\bs[o0]s\b|save[\s\-_.]*our[\s\-_.]*souls/i),
    seaside: noFormer(/\bsea[\-_.]*side\b|(?<!\bthe\s)\bss\b/i),
    marabunta: noLater(noFormer(/\bmarabunta|\bmg\b/i)),
    hoa: noFormer(/\bh[.\s]*o[.\s\-_]*[ab]\b|hogs\s*of\s*anarchy|home[\s\-]*owners[\s\-]*association/i),
    pinkgang: noFormer(/\bpittman|(?:pink|\bpit+?)[\s\-_.]*(?:gang|crew)/i), // [^\w\s(]\s*pc\s*[^\w\s)]
    doj: noLater(noFormer(/\bdoj\b|\bspu\b|\bprosecutor\b|department\s*of\s*justice|judge\b(?![\s]*me)|\bd\.a\b|\ba\.?d\.?a\b|(?<!\b(?:former|ex|aspiring)[\s\-]*)(?:lawyer|attorney)|para[\s\-]*legal/i)),
    asrr: noLater(noFormer(/\balta[\s\-]*street|(?<!\bthe\s)\bblock(?:\b|[\s\-]*party|[\s\-]*athon)/i)),
    dans: noLater(noFormer(/\bdans\b|g[le][el][\s\-_.]+dan/i)),
    angels: noFormer(/(?<!rejected[\s\-_.]*)\bangels\b/i),
    nbc: noFormer(/\bnbc\b/i),
    mandem: noFormer(/\bmandem|\bmdma?\b(?![\s\-]+record)/i),
    roadmen: noFormer(/\broadmen|(?:[^\w\s]|^) *(?<![^']\b\w\.? *)rdm\b/i),
    bbmc: noFormer(/\bbbmc\b|\bbondi/i),
    wastelanders: noFormer(/waste\s*landers/i),
    rust: noLater(noFormer(/\br[\s\-_.]*u[\s\-_.]*s[\s\-_.]*t\b|\bunfortunate[\s\-_.]*street[\s\-_.]*team\b/i)),
    cbpd: noFormer(/c[\s\-_.]*b[\s\-_.]*p[\s\-_.]*d|(?:cerberus|\bares)[\s\-_.]*(?:business[\s\-_.]*)?(?:protection|security)|\btartarus/),
    italianmafia: noFormer(/\b(?:italian|sicilian)[\s\-_.]*(?:mafi|mob)|\bcosa[\s\-_.]*nostra|\bbalbani\b|\bbcf\b/i),
    royalmafia: noFormer(/zoo[\s\-_.]*mafi|\bzm\b/i),
    stable: noLater(noFormer(/\bstable(?:hand)?\b/i)),
    podcast: noLater(noFormer(/\b(?<!!)podcast\b/i)),
    watchparty: noLater(noFormer(/\b(?<!!)watch[\s\-_.]*part/i)),
    gulaggang: noLater(noFormer(/\bgulag[\s\-_.]*gang|(?:[^\w\s.]\s*|^\s*|\.\s+)\bgg\b|\bgg[\s\-_.]*(?:st|z|a|b)\b/i)),
    gangton: noLater(noFormer(/\bgang?[\s\-_.]*t.n|\bgc\b/i)),
    zone3: noLater(noFormer(/\bz[\s\-_.]*[34]\b|zone[\s\-_.]*(?:[34]|three|four)/i)),
    pb: noLater(noFormer(/\bpb|pi[sz]+[\s\-_.]*bab(?:ie|y)/i)),
    dons: noLater(noFormer(/\bdons\b/i)),
    mayhemmc: noLater(noFormer(/\bmayhem|\bcmc\b/i)),
    news: noFormer(/(?<!(?:good|big|great|amazing|bad|some)\s*)\bnews\b|\blsbn\b|weazel[\s\-_.]*news/i),
    rooster: noFormer(/\brr\b|\brooster[^\w\s]?(?:s|\b)|rooster[\s\-_.]*(?:rest|ranch|reef|inn|hotel|cab)/i),
    burgershot: noFormer(/(?<!(?:everyone|people)\s+at\s+)burger[\s\-]*shot|\bburgers\b|\bburgersh/i),
    development: /\bdevelop|\bdev\b|\bcoding|devathon/i,
    doc: noLater(noFormer(/\bdoc\b|\bcorrection/i)),
    frat: noLater(noFormer(/\bfrat\b/i)),
    prison: noLater(/\blifer|\blife\W+sentence/i),
    harmony: /\bharmony\b/i,
    quickfix: /\bquick[\s\-]*fix/i,
    tunershop: /\btun(?:er|a)[\s\-]*shop\b|\b6str\W*tun(?:er|a)\b/i,
    larpers: /\blarp\b|\blarper|the\s*guild/i,
    selfinsert: /self\W*insert/i,
    onelife: /\bperma?thon|\b(?:one|1)[\s\-_.]*life/i,
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
//     rooster: true,
//     burgershot: true,
//     development: true,
//     mechanic: true,
//     harmony: true,
//     quickfix: true,
//     tunershop: true,
// });

// const validateType = <T> (obj: T) => undefined;

export const lesserFactions: { [key in FactionRealMini]?: true } = {
    news: true,
    rooster: true,
    burgershot: true,
    development: true,
    selfinsert: true,
    mechanic: true,
    harmony: true,
    onelife: true,
    quickfix: true,
    tunershop: true,
} as const;
// validateType<{ [key in FactionRealMini]?: true }>(lesserFactions);
// const checkKeys: FactionRealMini = (null!) as keyof typeof lesserFactions;

export const greaterFactions: { [key in FactionRealMini]?: true } = {
    podcast: true,
    watchparty: true,
} as const;

export type NpFactionsRegexMini = keyof typeof npFactionsRegex;

const has = <K extends string>(key: K, x: Record<string, unknown>): x is { [key in K]: unknown } => key in x;

const keepS: { [key in FactionRealMini]?: boolean } = { pegasus: true, news: true, russians: true, dans: true };

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

export const serverTwoFactions: { [key in FactionRealMini]?: true } = {
    gangton: true,
    zone3: true,
};

// export type NoFactionColorsMini = 'alltwitch' | 'allnopixel' | 'darkweb' | 'news' | 'russians' | 'mayhemmc' | 'mersions' | 'lunatix' | 'marabunta';
// type FactionColorsMini = Exclude<FactionMini, NoFactionColorsMini>;
// : { [key in FactionColorsMini]: string }

export const useColorsDark = { // #ff77ff #FAA0A0 #FA0B42
    cleanbois: '#e74c3c',
    limelight: '#bfff00',
    lostmc: '#ab5179',
    changgang: '#686de0',
    hydragang: '#E23B5B',
    streetteam: '#AF9595',
    rust: '#A87C2D',
    cleancartel: '#32ff7e',
    vagos: '#f1c40f',
    seaside: '#67BDA5',
    gsf: '#006422',
    ssb: '#9b59b6',
    bsk: '#7957D4',
    marabunta: '#60a5fa',
    hoa: '#a6033a',
    gulaggang: '#F6EE6D',
    pb: '#FAA0A0',
    zone3: '#9AFA99',
    doj: '#00a032',
    asrr: '#a35231',
    angels: '#ff9ff3',
    mandem: '#F95FAB',
    roadmen: '#32ff7e',
    royalmafia: '#3F809B',
    nbc: '#789500',
    bbmc: '#3B64E6',
    burgershot: '#E99062',
    development: '#718093',
    mayhemmc: '#32ff7e',
    doc: '#0984e3',
    prison: '#1C8EA2',
    larpers: '#FFECAF',
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

export const isFactionColor = (factionMini: FactionMini): factionMini is FactionColorsMini => factionMini in useColorsDark;

export const useColorsLight: { [key in FactionColorsMini]: string } = {
    cleanbois: '#c74c3c',
    limelight: '#bfff00',
    lostmc: '#ab5179',
    changgang: '#686de0',
    hydragang: '#DF274B',
    streetteam: '#AF9595',
    rust: '#A87C2D',
    cleancartel: '#12af7e',
    vagos: '#e3ba16',
    seaside: '#67BDA5',
    gsf: '#006422',
    ssb: '#9b59b6',
    bsk: '#8854d0',
    marabunta: '#66A1FA',
    hoa: '#a6033a',
    gulaggang: '#CDC14C',
    pb: '#FC9090',
    zone3: '#6FBA7D',
    doj: '#00a032',
    asrr: '#a35231',
    angels: '#e192d7',
    nbc: '#789500',
    mandem: '#e84393',
    roadmen: '#12af7e',
    royalmafia: '#40739e',
    bbmc: '#2250ff',
    burgershot: '#c77c50',
    development: '#718093',
    mayhemmc: '#12af7e',
    doc: '#1080d6',
    prison: '#1C8EA2',
    larpers: '#cfba57',
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
    // harmony: true,
    quickfix: true,
    mersions: true,
    stable: true,
    // podcast: true,
    otherfaction: true,
    othernp: true,
};

type FactionMiniArr = FactionMini[];

const filterOrderTop: FactionMiniArr = [
    'allnopixel',
    'alltwitch',
    'publicnp',
    'international',
    'independent',
    'gulaggang',
    'cleanbois',
    'police',
    'changgang',
    'pb',
    'rust',
    'seaside',
    'hydragang',
    'hoa',
    'ssb',
    'gsf',
    'vagos',
    'bbmc',
    'mandem',
    'streetteam',
    'bsk',
    'dons',
    'marabunta',
    'lostmc',
    'angels',
    'sos',
    'rooster',
    'cbpd',
    'royalmafia',
    'bcg',
    'nbc',
    'zone3',
    'asrr',
    'prison',
    'italianmafia',
    'wastelanders',
    'roadmen',
    'cleancartel',
    'selfinsert',
    'pinkgang',
    'britneygang',
    'mayhemmc',
    'tunershop',
    'burgershot',
    'medical',
];

const filterOrderAfterHasColor: FactionMiniArr = ['doj', 'doc', 'development'];

const filterOrderAfterNoColor: FactionMiniArr = ['limelight', 'larpers', 'pegasus', 'whitelistnp', 'guessed', 'podcast', 'watchparty', 'other'];

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
    gangton: 'Gangton Courts',
    zone3: 'Zone 3',
    pb: 'Piss Babiez',
    bcg: 'Bowl Cut Gang (BCG)',
    asrr: 'Alta Street Ruff Rydaz',
    nbc: 'Natural Born Crackheads',
    bsk: 'Brouge Street Kingz (BSK)',
    sos: 'Save Our Souls (SOS)',
    marabunta: 'Marabunta Grande',
    bbmc: 'Bondi Boys MC',
    wastelanders: 'The Wastelanders',
    rooster: 'Rooster Companies',
    doc: 'Department of Corrections',
    doj: 'Law & Government', // Lawyers & Judges
    ssb: 'Ballas',
    gsf: 'Grove Street Families',
    rust: 'RUST',
    larpers: 'The Guild',
    stable: 'The Stable',
    mandem: 'The Mandem',
    roadmen: 'The Roadmen',
    dons: 'The Dons',
    italianmafia: 'Balbani Crime Family (BCF)',
    prison: 'Prison Lifers',
    angels: 'The Angels',
    selfinsert: 'Self Inserts',
    onelife: 'One Life Characters',
    lunatix: 'Lunatix MC',
    britneygang: 'Britney Gang',
    othernp: 'Unknown RPers',
    other: 'Other Servers',
    guessed: 'Uncertain',
};

export const filterFactionsBase: [FactionMini, string, boolean][] = objectEntries(npFactions)
    .filter(mini => !(mini[0] in filterExclude))
    .sort((miniA, miniB) => (filterOrder[miniA[0]] || (miniA[0] in useColorsDark ? 1000 : 2000)) - (filterOrder[miniB[0]] || (miniB[0] in useColorsDark ? 1000 : 2000)))
    .map(mini => [mini[0], filterRename[mini[0]] || mini[1], true]);
