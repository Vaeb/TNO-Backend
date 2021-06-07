const npFactions = {
    cleanbois: 'Cleanbois',
    lostmc: 'Lost MC',
    changgang: 'Chang Gang',
    vagos: 'Vagos',
    gsf: 'GSF',
    ssb: 'SSB',
    pegasus: 'Pegasus',
    hoa: 'HOA',
    doj: 'DoJ',
    asrr: 'ASRR',
    angels: 'Angels',
    nbc: 'NBC',
    bbmc: 'BBMC',
    burgershot: 'Burger Shot',
    development: 'Development',
    doc: 'DoC',
    prison: 'Prison',
    mechanic: 'Mechanic',
    harmony: 'Harmony',
    quickfix: 'QuickFix',
    tunershop: 'Tuner Shop',
    larpers: 'LARPers',
    police: 'Police',
    medical: 'Medical',
    darkweb: 'Dark Web',
    newsmedia: 'News Media',
    russians: 'Russians',
    condemnedmc: 'Condemned MC',
    mersions: 'Mersions',
    lunatix: 'Lunatix',
    othernp: 'OtherNP',
    marabunta: 'Marabunta',
} as const;

type NpFactions = typeof npFactions;

export type FactionMini = keyof NpFactions;
export type FactionFull = (NpFactions)[FactionMini];
