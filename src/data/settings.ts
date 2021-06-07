/* eslint-disable operator-linebreak */

export const minViewers = 1;
export const stopOnMin = true;
export const checkOther = true;
export const intervalSeconds = 0.7;
export const regNp = '(?<!not\\s)(?:no[\\s\\-_.]*pixel|\\bn[\\s\\-_.]*p\\b)(?![\\s\\-]+inspired)';
export const regNpPublic =
    '(?:no[\\s\\-_.]*pixel|\\bn[\\s\\-_.]*p\\b)(?:[\\s\\-_.]*(?:rp|\\d+\\.?\\d*))?[\\W_]*pub\\w*\\b(?!\\W+(?:later|after))' +
    '|\\bpub\\w*[\\W_]*(?:no[\\s\\-_.]*pixel|\\bn[\\s\\-_.]*p\\b)' +
    '|\\bpub\\w*[\\W_]*(?:server|queue|for\\b)|\\[pub\\w*\\]';
export const regNpWhitelist = '(?:\\bwhitelist|\\bwl\\b|\\bmain\\b|\\bprivate\\b(?![\\s\\-]+(?:detective|investigat\\w+)))\\b(?!\\W+(?:later|after))';
export const regOther = 'the\\s*family|\\btf\\s?rp|family\\s*rp|twitchrp|\\bt\\W*rp|\\bnon[\\s\\-]*stop|\\bns\\s?rp';
export const regOthers = [
    { name: 'TheFamilyRP', reg: 'the\\s*family|\\btf\\s?rp|family\\s*rp', include: 1 },
    { name: 'TwitchRP', reg: 'twitch[\\s\\-]*rp|\\bt\\W*rp', include: 1 },
    { name: 'NonStopRP', reg: '\\bnon[\\s\\-]*stop|\\bns\\s?rp', include: 1 },
    { name: 'SVRP', reg: '\\bsvrp\\b|subversion', include: 0 },
    { name: 'SSB WRLD', reg: '\\bssb\\b|ssb[\\s:-]*(?:wo?rld|rp)|ssb\\s+(?:later|after)', include: 0 },
    { name: 'FrenzyRP', reg: '\\bfrenzy\\s*rp', include: 0 },
    { name: 'Grizzley World', reg: 'grizzley[\\s\\-]*wo?rld', include: 0 },
    {
        name: '',
        reg: '\\bgta[\\s:-]*v?[\\s:-]*online|chaos\\s*mod\\b|story[\\s\\-]*mode|\\bgta[\\s:-]*v?[\\s\\-]+story|grizzely\\s*rp|\\boc\\s*rp\\b|\\bybn\\b',
        include: 0,
    },
];
