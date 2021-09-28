export const npFactionsReal = { // map: removed spaces + converted to lower case
    cleanbois: 'Cleanbois',
    limelight: 'Limelight',
    lostmc: 'Lost MC',
    changgang: 'Chang Gang',
    chaos: 'Chaos',
    vagos: 'Vagos',
    gsf: 'GSF',
    ssb: 'SSB',
    pegasus: 'Pegasus',
    hoa: 'HOA',
    pinkgang: 'Pink Gang',
    mandem: 'Mandem',
    doj: 'DoJ',
    asrr: 'ASRR',
    dans: 'Dans',
    britneygang: 'Britney Gang',
    angels: 'Angels',
    nbc: 'NBC',
    bbmc: 'BBMC',
    rooster: 'Rooster',
    burgershot: 'Burger Shot',
    stable: 'Stable',
    development: 'Development',
    doc: 'DoC',
    prison: 'Prison',
    mechanic: 'Mechanic',
    tunershop: 'Tuner Shop',
    harmony: 'Harmony',
    quickfix: 'QuickFix',
    larpers: 'LARPers',
    police: 'Police',
    medical: 'Medical',
    independent: 'Independent',
    otherfaction: 'Other Faction',
    other: 'Other',
    darkweb: 'Dark Web',
    news: 'News',
    russians: 'Russians',
    frat: 'Frat',
    condemnedmc: 'Condemned MC',
    mersions: 'Mersions',
    lunatix: 'Lunatix',
    marabunta: 'Marabunta',
    bsk: 'BSK',
    gulaggang: 'Gulag Gang',
    podcast: 'Podcast',
} as const;

export const npFactionsMeta = {
    allnopixel: 'All NoPixel',
    alltwitch: 'All Twitch',
    othernp: 'Other NP',
    publicnp: 'Public NP',
    international: 'International NP',
} as const;

type NpFactionsReal = typeof npFactionsReal;
type NpFactionsMeta = typeof npFactionsMeta;

export const npFactions: NpFactionsReal & NpFactionsMeta = { ...npFactionsReal, ...npFactionsMeta } as const;

export type NpFactions = typeof npFactions;

export type FactionRealMini = keyof NpFactionsReal;
export type FactionRealFull = (NpFactionsReal)[FactionRealMini];

export type FactionMini = keyof NpFactions;
export type FactionFull = (NpFactions)[FactionMini];

export const npFactionsRealMini: FactionRealMini[] = (Object.keys(npFactionsReal) as FactionRealMini[]);
export const npFactionsMini: FactionMini[] = (Object.keys(npFactions) as FactionMini[]);
