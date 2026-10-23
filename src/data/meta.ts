export const npFactionsReal = { // map: removed spaces + converted to lower case
    lostmc: 'Lost MC',
    changgang: 'Chang Gang',
    hydragang: 'Hydra Gang',
    vagos: 'Vagos',
    gsf: 'GSF',
    ssb: 'SSB',
    saints: 'Saints',
    hoa: 'HOA',
    manor: 'Manor',
    doj: 'DoJ',
    burgershot: 'Burger Shot',
    development: 'Development',
    doc: 'DoC',
    prison: 'Prison',
    mechanic: 'Mechanic',
    police: 'Police',
    medical: 'Medical',
    independent: 'Independent',
    otherfaction: 'Other Faction',
    other: 'Other',
    news: 'News',
    mersions: 'Mersions',
    marabunta: 'Marabunta',
    habibis: 'Habibis',
    hounds: 'Hounds',
    admc: 'ADMC',
    kc: 'KC',
    clowns: 'Clowns',
    pawnaddicts: 'Pawn Addicts',
    brickbois: 'Brick Bois',
    hkpawn: 'HK Pawn',
    sinnerpawn: 'Sinner Pawn',
    brickhouse: 'Brick House',
    oldcountry: 'Old Country',
    the404: 'The 404',
    sweepers: 'Sweepers',
    degens: 'Degens',
    casino: 'Casino',
    polish: 'Polish',
    nest: 'NEST',
    gruppe6: 'Gruppe6',
    slim: 'Slim',
    order: 'Order',
    locksmiths: 'Locksmiths',
    bpm: 'BPM',
    collective: 'Collective',
    '6chambers': '6Chambers',
    faceless: 'Faceless',
    besties: 'Besties',
    podcast: 'Podcast',
    watchparty: 'Watch Party',
} as const;

export const npFactionsMeta = {
    allnopixel: 'All NoPixel',
    alltwitch: 'All Twitch',
    othernp: 'Other NP',
    whitelistnp: 'Whitelist NP',
    publicnp: 'Public NP',
    international: 'International NP',
    guessed: 'Guessed',
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
