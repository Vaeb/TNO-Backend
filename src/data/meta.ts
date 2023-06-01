export const npFactionsReal = { // map: removed spaces + converted to lower case
    cleanbois: 'Cleanbois',
    limelight: 'Limelight',
    lostmc: 'Lost MC',
    changgang: 'Chang Gang',
    hydragang: 'Hydra Gang',
    gangton: 'Gangton',
    chaos: 'Chaos',
    vagos: 'Vagos',
    gsf: 'GSF',
    ssb: 'SSB',
    pegasus: 'Pegasus',
    hoa: 'HOA',
    pinkgang: 'Pink Gang',
    mandem: 'Mandem',
    roadmen: 'Roadmen',
    zone3: 'Zone3',
    ghost: 'Ghost',
    doj: 'DoJ',
    streetteam: 'Street Team',
    bcg: 'BCG',
    wastelanders: 'Wastelanders',
    cleancartel: 'Clean Cartel',
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
    italianmafia: 'Italian Mafia',
    police: 'Police',
    medical: 'Medical',
    independent: 'Independent',
    otherfaction: 'Other Faction',
    other: 'Other',
    darkweb: 'Dark Web',
    seaside: 'Seaside',
    news: 'News',
    russians: 'Russians',
    frat: 'Frat',
    mayhemmc: 'Mayhem MC',
    mersions: 'Mersions',
    lunatix: 'Lunatix',
    marabunta: 'Marabunta',
    bsk: 'BSK',
    sos: 'SOS',
    rust: 'RUST',
    cbpd: 'CBPD',
    royalmafia: 'Royal Mafia',
    selfinsert: 'Self Insert',
    gulaggang: 'Gulag Gang',
    dons: 'Dons',
    podcast: 'Podcast',
    watchparty: 'Watch Party',
    onelife: 'One Life',
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
