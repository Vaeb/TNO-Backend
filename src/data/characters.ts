/* eslint-disable object-curly-newline */

import { FactionRealFull } from './meta';

export type AssumeOther = 'assumeNpNoOther' | 'assumeNp' | 'assumeOther' | 'someOther' | 'neverNp';

export type AssumeServer = 'whitelist' | 'public' | 'international';

export type WlBias = -1 | 0 | 1;

export interface Character {
    name: string;
    factions?: FactionRealFull[];
    displayName?: number;
    nicknames?: string[];
    leader?: boolean;
    highCommand?: boolean;
    affiliate?: boolean;
    assume?: AssumeOther;
    assumeServer?: AssumeServer;
    assumeChar?: boolean;
    wlBias?: WlBias;
    facebook?: boolean;
}

export type NpCharacters = { [key: string]: Character[] };

const reg = (r: RegExp): string => `/${r.source}/`;

// Make character map

export const npCharacters: NpCharacters = {
    '0Reed': [
        { name: 'Reed Dankleaf', factions: ['Lost MC'] },
        { name: '[Deputy] Tommy Tribble', factions: ['Police'], displayName: 1 },
    ],
    '13Stewartc': [
        { name: '[Development] Stewart', factions: ['Development'], nicknames: ['Handling', 'Fixes', 'Fixing', 'Tuning', reg(/\bnew\s+\w+\s*stuff/)] },
    ],
    '1ndiantechsupport': [
        { name: 'Kendrick Jones', factions: ['SSB'], displayName: 1 },
    ],
    '4HEAD': [
        { name: 'Aubrey "4HEAD" Webster', factions: ['Besties'] },
    ],
    '52chains': [
        { name: '[Officer] Carmine Costello', factions: ['Police'], nicknames: ['Mouse'], displayName: 1 },
        { name: 'Fidel Guevara', nicknames: ['Don', 'Cabron'] },
    ],
    '713stew': [
        { name: 'Junior Diaz', factions: ['Vagos'], displayName: 0 },
    ],
    '77_Nights': [
        { name: 'Damian De Santos', factions: ['Vagos'], displayName: 1 },
    ],
    '80bsaget': [
        { name: 'Tim Lee', displayName: 0 },
        { name: '[Officer] Bexar McCree', factions: ['Police'] },
    ],
    '9baller': [
        { name: 'D "D Rose" Rose', factions: ['SSB'] },
    ],
    a2guapo: [
        { name: 'Jay Hobbs', factions: ['Besties'], nicknames: ['J', 'JHobbs'], displayName: 0 },
    ],
    Aaoki: [
        { name: '[Deputy] Maddison Bancroft', factions: ['Police'], displayName: 2 },
        { name: 'Shazza Wazza', factions: ['Rooster'], nicknames: ['Shazzam'] },
    ],
    aaron_rp: [
        { name: 'Aaron Alexander', factions: ['GSF'], nicknames: ['Double A', reg(/double.?a/)], displayName: 3 },
    ],
    AaronOnAir: [
        { name: '[Peacekeeper] Dan Faily', factions: ['Police'], nicknames: ['485'], facebook: true },
        { name: 'Sal T. Block', factions: ['ASRR'], displayName: 0 },
    ],
    abbay: [
        { name: 'Olivia Harvey', factions: ['Rooster'] },
    ],
    abbbz: [
        { name: 'Sanjay Patel', factions: ['Burger Shot'] },
    ],
    AbbottJake: [
        { name: 'Luke Atar', factions: ['Manor'], nicknames: ['Morning Crew Leader'], displayName: 1 },
        { name: 'Nip Smith', displayName: 0 },
        { name: 'Joey Grass', factions: ['Prison'], displayName: 0 },
        { name: 'Tommy Lee', displayName: 0 },
    ],
    abby: [
        { name: 'Irma Gawd', factions: ['Rooster'], displayName: 0 },
        { name: 'Big Bertha', displayName: 0 },
        { name: 'Ivy Wood' },
    ],
    abbyduren: [
        { name: 'Khrystal Vibez' },
    ],
    AbdulHD: [
        { name: 'Abdul AlRahim', nicknames: ['Yellow Flash'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Omar Stryker', factions: ['Police'], displayName: 1 },
        { name: '[Judge] Ali Habibi', factions: ['DoJ'], nicknames: ['Al'] },
        { name: '[Officer] Basha Habibi', factions: ['Police'], assumeServer: 'public' },
        { name: 'Mustafa Habibi' },
        { name: 'Fahad AlArabi', factions: ['DoC'] },
    ],
    Abou_: [
        { name: 'Modi Janta', factions: ['NBC'] },
    ],
    abrvxas: [
        { name: 'Alexei Pavlovich', factions: ['Royal Mafia'], nicknames: ['Chicken Head'], displayName: 3 },
    ],
    Acaibear: [
        { name: '[Peacekeeper] Emily Reinhart', factions: ['Police'] },
        { name: 'Jolene Mushkin', nicknames: ['Little Red'] },
    ],
    AcezProduction: [
        { name: 'Achez Perez', factions: ['Hades'], nicknames: ['Ace'], displayName: 2 },
    ],
    adamsmiley96: [
        { name: "Sebastian Von Di'Quad", factions: ['Wastelanders'], displayName: 0 },
    ],
    adeptthebest: [
        { name: 'Mari Posa', factions: ['Chang Gang', 'Hydra Gang', 'Chaos'], nicknames: ['Wari', 'Lari'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Trooper] Selena Mendoza', nicknames: [reg(/\bmendoz/)], factions: ['Police'] },
        { name: 'Hannah Hiltop' },
        { name: 'Maria Poser', factions: ['Independent'], displayName: 0, assumeServer: 'public' },
    ],
    AdinRoss: [
        { name: 'David ?' },
    ],
    ADKGuy: [
        { name: '[EMS] Ron Farva', factions: ['Medical'], displayName: 1 },
    ],
    adnormaltv: [
        { name: 'Ivan Gorbahtjov', assume: 'assumeOther' },
    ],
    adzno: [
        { name: 'Aaron Melarky', factions: ['Mayhem MC'], displayName: 0 },
    ],
    Adzzstarr: [
        { name: 'Adam Prince', factions: ['Saints'], displayName: 0 },
        { name: '[Dr.] Valentine', factions: ['Medical'] },
    ],
    aezke: [
        { name: 'Khalid Hussain', factions: ['Dons'], displayName: 1 },
    ],
    AFCB78: [
        { name: 'Dick Dudley', displayName: 2 },
    ],
    AfricanSnowball: [
        { name: '[Trooper] Dwayne Carter IV', factions: ['Police'], nicknames: [reg(/good [a*][s*]+ day/)], displayName: 2 },
        { name: 'Buck Stanton', displayName: 2 },
        { name: 'Leland "LJ" Jones', factions: ['RUST', 'Pegasus'] },
        { name: 'Taylor Africansnowball', factions: ['Self Insert'], displayName: 0 },
    ],
    Afro: [
        { name: 'Dexx Martin', factions: ['GSF'], leader: true },
        { name: 'Jacob Harth', factions: ['Dark Web'], leader: true },
        { name: 'Chris "CP" Porter' },
        { name: 'Sayid Mitra', nicknames: ['Sayeet'], displayName: 0 },
        { name: 'David "The Mime" Wonders', nicknames: ['Concrete', 'Mime'], factions: ['ASRR'] },
        { name: 'Gordon Parks', nicknames: ['DoorLord'] },
        { name: 'Jay Afro', factions: ['Self Insert'], displayName: 0 },
    ],
    AidenNortha: [
        { name: '[Peacekeeper] Kevin Keyte', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Melvin Graves', factions: ['Police'], displayName: 0, assumeServer: 'public' },
        { name: 'Jase Dawson', displayName: 0 },
    ],
    aimbotcalvin: [
        { name: '? ?', factions: ['LARPers', 'Cleanbois'] },
    ],
    aintitadam: [
        { name: 'Scruffy Doodle', factions: ['Burger Shot'] },
    ],
    Airborne: [
        { name: 'Dennis LaBarre', factions: ['DoJ'] },
        { name: '[Officer] Blaine Miller', factions: ['Police'], nicknames: ['Cow Killer'] },
        { name: 'Unity', nicknames: ['Cat'] },
    ],
    akaMONKEY: [
        { name: 'Arturo Ortiz', factions: ['Vagos'], nicknames: [reg(/\bar(?:tu|2)/), reg(/\barchu+r/)] },
        { name: 'CamRon "Peanut" Giles', factions: ['SSB'] },
        { name: 'Timoteo "TT" Bushnell', nicknames: ['Rasta'] },
    ],
    aKartt: [
        { name: 'Harold ‘H-Dawg’ Bishop', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    aleks: [
        { name: 'Vasily "V" Sazkaljovich', factions: ['CBPD', 'Rooster'] },
        { name: '[Officer] Bob Smith', factions: ['Police'], nicknames: ['Bobby', 'Chief'], displayName: 1 },
        { name: 'Alex Marshall', factions: ['Frat'], displayName: 0 },
        { name: '[FIB Agent] Heath Mercer', factions: ['Police'] },
    ],
    alexhasg2g: [
        { name: 'Liz Anya', displayName: 0 },
    ],
    alexten0909: [
        { name: 'Alexander Campbell', factions: ['Angels'], nicknames: ['Alex'], displayName: 3, assumeServer: 'whitelist' },
        { name: '[Officer] Jeff Boiardi', factions: ['Police'] },
        { name: '[Officer] Alex Campbell', factions: ['Police'], assumeServer: 'public' },
    ],
    Alisha: [
        { name: 'Alisha Wuornos' },
    ],
    AllHailGoon: [
        { name: 'Father Dinker', factions: ['ASRR'], nicknames: ['god', 'block'], displayName: 0 },
    ],
    Alonelyhawk: [
        { name: '[Deputy] Allison Thomas', factions: ['Police'] },
        { name: '[Lawyer] Claudia Gartner', factions: ['DoJ'], displayName: 1 },
    ],
    alpacagurl92: [
        { name: 'April Fooze', factions: ['Chang Gang'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Connie Clark', factions: ['Police'], nicknames: ['cop'], displayName: 2 },
        { name: '[Officer] Connie Clark', factions: ['Police'], nicknames: ['cop'], displayName: 2, assumeServer: 'public' },
    ],
    AlyPlayNinja: [
        { name: '[Officer] Amelia Frost', factions: ['Police'] },
    ],
    amakingswp: [
        { name: 'Braden Kingz', factions: ['Manor'], nicknames: ['Braden'], displayName: 1 },
    ],
    ambientsurprise: [
        { name: 'Terry LaBuff', factions: ['BSK'], displayName: 0 },
    ],
    Amouranth: [
        { name: 'Amy Rain', nicknames: ['Ammy'], displayName: 0 },
    ],
    amsyz: [
        { name: 'Zayn Ahmed', factions: ['BSK'], displayName: 0 },
    ],
    AnarchoSyn: [
        { name: 'Hess Blade', factions: ['CBPD', 'Rooster'] },
    ],
    Anchoras: [
        { name: 'Eethan Gaine-Prince', factions: ['Saints'], nicknames: ['EGP', 'Erebos'] },
    ],
    AndyMilonakis: [
        { name: 'Lil Erf', factions: ['Chang Gang'], displayName: 0 },
        { name: 'Carmen Amuso' },
    ],
    AngelKnivez: [
        { name: 'Giavanna "GiGi" Costello', factions: ['Manor'], nicknames: ['Gigi'], displayName: 1 },
    ],
    Angrysquirlz: [
        { name: 'Lizard Block', factions: ['ASRR'] },
    ],
    AnimatedJF: [
        { name: 'Cameron Dupres', factions: ['DoJ'] },
    ],
    AnneMunition: [
        { name: 'Sequoia Springs' },
    ],
    Anomaly: [
        { name: 'Ping Ping Samuelson', nicknames: ['Ping Ping'], displayName: 4 },
        { name: 'Larry Papidopoulos', nicknames: ['Papi'] },
    ],
    AnthonyZ: [
        { name: 'Tony Corleone', factions: ['North Cypress', 'Cleanbois', 'Clean Cartel', 'Rooster'], nicknames: ['Tonish', 'Racing'], assumeServer: 'whitelist' },
        { name: '[Peacekeeper] Anthony Copleone', factions: ['Police'], nicknames: ['reporting for duty'] },
        { name: 'Tonish Corleone', assumeServer: 'public' },
    ],
    Anv1Ltv: [
        { name: 'Brooklyn "BK" Davis', factions: ['GSF'] },
    ],
    Apitoxin11: [
        { name: 'Trigger Freebird', factions: ['Harmony'] },
    ],
    APPLESHAMPOO: [
        { name: '[Peacekeeper] Nancy Ree', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[EMS] Gioconda "Gio" Coppola', factions: ['Medical'], nicknames: ['T-17'] },
        { name: 'Apple Schampu', factions: ['Self Insert', 'One Life'], displayName: 0 },
        { name: '[Officer] Gio Coppola', factions: ['Police'], nicknames: ['466'], displayName: 1, assumeServer: 'public' },
    ],
    appyturk: [
        { name: 'Appie Turk', factions: ['Independent'], displayName: 2, assumeServer: 'whitelist' },
        { name: 'Appie Turk', factions: ['Independent'], displayName: 2, assumeServer: 'public' },
    ],
    ArboYT: [
        { name: 'Jimmy Sprinkle', factions: ['DoC'], displayName: 0 },
    ],
    Arcadum: [
        { name: 'Svelt Tlevs', nicknames: ['Wizard'] },
    ],
    arckon_: [
        { name: '[Peacekeeper] Beric Johnson', factions: ['Police'] },
    ],
    ArmandMorte: [
        { name: 'Lucky Cox', factions: ['Mayhem MC'], displayName: 0 },
    ],
    Armeeof1: [
        { name: 'Milton Pointdexter' },
    ],
    Arnie: [
        { name: 'Vincent Carl', factions: ['Hydra Gang', 'BCG'], nicknames: ['Arnie', reg(/\b(?:vincent|carl)/)], displayName: 3 },
    ],
    arro2k: [
        { name: 'Rico Barbosa', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    ArsenaI: [
        { name: 'James Arsenal', factions: ['NBC'], displayName: 0 },
    ],
    ArtByBaha: [
        { name: 'Cuddles Fish', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    AscensionLive: [
        { name: 'James Malding', factions: ['Street Team'], displayName: 0 },
    ],
    ash: [
        { name: 'Ash Ketchup', factions: ['Hydra Gang'], displayName: 1, assumeChar: true },
    ],
    Ashaweebaby78: [
        { name: 'Frankiie Fletcher', factions: ['BSK'], displayName: 0 },
    ],
    Ashi: [
        { name: 'Fiona Stewart', nicknames: ['Fi-ho-na', 'Fifi'], factions: ['LARPers', 'Cleanbois', 'Rooster'] },
        { name: '[Officer] Annie May', factions: ['Police'], displayName: 2 },
    ],
    ashlynn: [
        { name: 'Cassie Cupcakes', factions: ['Angels'] },
        { name: '[Officer] Brenda Pancake', factions: ['Police'], displayName: 1, nicknames: ['Pancakes'] },
    ],
    Ashurikun: [
        { name: 'Rose Morrison', factions: ['DoC'], displayName: 0 },
    ],
    Asteroba: [
        { name: '[Deputy] Aaron Byson', factions: ['Police'] },
        { name: '[Lawyer] Larry Hallow', factions: ['DoJ'] },
        { name: 'Kermy Fulker', factions: ['HOA'] },
        { name: '[EMS] Boba Stone', factions: ['Medical'] },
    ],
    Audili: [
        { name: 'Mordell Caldwell', factions: ['SSB'], nicknames: ['MD'], displayName: 1 },
    ],
    AuriEllis: [
        { name: 'Ursula Leichenberg', factions: ['Royal Mafia', 'Burger Shot', 'News'], displayName: 1 },
        { name: 'Gracie ?' },
    ],
    aurvinR: [
        { name: '[Peacekeeper] John Doe', factions: ['Police'] },
    ],
    Aus24: [
        { name: '[Officer] Jack Davenport', factions: ['Police'] },
        { name: 'Jordan Walker', factions: ['Hydra Gang', 'Harmony'] },
        { name: 'Braxton Walker', nicknames: ['Brax'], displayName: 0 },
    ],
    Austin_Bean: [
        { name: '[Deputy] ? Bean', factions: ['Police'], displayName: 2, assumeServer: 'public' },
    ],
    AustinCreed: [
        { name: 'Austin Creed', displayName: 0 },
    ],
    Autumn: [
        { name: 'Autumn Rhodes', factions: ['Chang Gang'], assumeServer: 'whitelist' },
        { name: '[Officer] May Maple', factions: ['Police'] },
        { name: '[Ranger] May Maple', factions: ['Police'], assumeServer: 'public' },
    ],
    Auxidental: [
        { name: 'Trey Romano', factions: ['Pegasus', 'Rooster'] },
    ],
    AvaGG: [
        { name: 'Karen Dahmer', factions: ['Chang Gang'], affiliate: true, nicknames: ['Kawen'] },
    ],
    awildzust: [
        { name: 'Ryan Miller', factions: ['BCG'], displayName: 0 },
    ],
    awkwardsausesteph: [
        { name: '[Officer] Rebecka Lovejoy', factions: ['Police'], nicknames: ['Beck', 'Becks', '521'] },
    ],
    aXed_U: [
        { name: 'Hans Snitzel' },
    ],
    AyeGavMF: [
        { name: '[Peacekeeper] Dave Bird', factions: ['Police'] },
        { name: '[Deputy] Dave Bird', factions: ['Police'], assumeServer: 'public' },
        { name: 'Nash Mastersin', displayName: 1, assumeServer: 'whitelist' },
    ],
    ayubfe: [
        { name: '[EMS] Ayub Elmi', factions: ['Medical'], displayName: 2 },
    ],
    b_hoopla: [
        { name: '[Peacekeeper] Bryan Davids', factions: ['Police'], displayName: 2 },
    ],
    b0wditch: [
        { name: 'Gene Auber', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    Baabeology: [
        { name: 'Lola White', factions: ['BBMC'], displayName: 0, assumeServer: 'public' },
    ],
    Baddy: [
        { name: 'Liya Farah', factions: ['North Cypress'], nicknames: [], displayName: 1 },
    ],
    badgerClaws_: [
        { name: 'Cassidy Clearwater', factions: ['DoC'], displayName: 0 },
    ],
    baguettegirI: [
        { name: 'France Gall', nicknames: ['French', 'French Lady', 'France Girl', 'French Girl'], displayName: 0 },
        { name: 'Ange VanLaeken', factions: ['Prison'], nicknames: ['French', 'French Girl'] },
    ],
    Baki961: [
        { name: 'Yoshimoto Nakanishi', assumeServer: 'whitelist' },
        { name: '[Officer] Fernando Diego Pablo Juan Esteban Luis Cortez Bonanza II', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    BamiePlays: [
        { name: '[Officer] Ryan Kolinsky', factions: ['Police'], nicknames: ['591'], displayName: 2 },
    ],
    bananabrea: [
        { name: 'Claire Seducer', factions: ['Angels', 'Tuner Shop'], assumeServer: 'whitelist' },
        { name: '[Officer] Tyme Reducer', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Officer] Claire Seducer', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Becky Hopper', displayName: 0 },
        { name: 'Joann Banana', factions: ['Self Insert'], displayName: 0 },
        { name: 'Juanita Carlita Hernandez', nicknames: ['Flippa'] },
    ],
    BananaDuck: [
        { name: 'Billy Sprinkle', factions: ['GSF'], displayName: 0 },
        { name: 'Jimmy Limbs', displayName: 0 },
        { name: 'Al Connelly', displayName: 0 },
        { name: 'Stealie Yasuffi', displayName: 1 },
        { name: 'Dick Fillet', displayName: 0 },
        { name: 'Ravi Ravson', displayName: 0 },
    ],
    Bananalover115: [
        { name: 'Mamaita "Mama" Jehmimi', factions: ['Britney Gang'] },
    ],
    banditobrown1: [
        { name: "Shankeal O'Neal", nicknames: ['Shank', 'Shankyou'] },
    ],
    barryscottlive: [
        { name: 'Barry Scott' },
    ],
    Basyk: [
        { name: '[Deputy] Marcellus Mikaelson', factions: ['Police'], displayName: 1 },
        { name: 'Sai Carter', factions: ['Lost MC'], displayName: 0 },
    ],
    BazzaGazza: [
        { name: 'Barry Benson', factions: ['BBMC'], displayName: 0 },
    ],
    bbyruthless: [
        { name: 'Saint Gomez' },
    ],
    BCBeastly: [
        { name: 'Herbert The Pervert' },
    ],
    BeardedGuysGaming: [
        { name: 'Jose Pincha' },
    ],
    Beast_: [
        { name: '[Deputy] Ruger Daniels', factions: ['Police'] },
    ],
    Beerman155: [
        { name: 'Abner Vaca', factions: ['Stable'] },
    ],
    beetricetv: [
        { name: 'Benny Davis', factions: ['SSB'], displayName: 0 },
    ],
    BelowTheWaves: [
        { name: '[Dispatch] L Lovesick', factions: ['Police'], displayName: 2 },
    ],
    Benni: [
        { name: 'Santiago "Santi" Madrid', factions: ['Vagos'], nicknames: [reg(/\bSanti/)] },
        { name: 'Antonio Reyes', nicknames: [reg(/\bAntonio/)] },
        { name: 'Pablo Madrid', factions: ['Vagos'], nicknames: ['Diablo'] },
    ],
    BerryyBoo: [
        { name: '[Officer] Vivienne Grey', factions: ['Police'] },
    ],
    BFLY: [
        { name: '[Dr.] Torah Andrews', factions: ['Medical'] },
    ],
    Bgrafix: [
        { name: 'Billy "Bloodbath" Senora', factions: ['ASRR'], nicknames: ['Bloodbath'], assumeServer: 'whitelist' },
    ],
    biboskills: [
        { name: 'Louis Blanc', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    bigbussynik: [
        { name: 'Armani Macaroni' },
    ],
    biggieferreira: [
        { name: 'Shevy Santanna', factions: ['Vagos'], assumeServer: 'whitelist' },
        { name: '[Officer] Jamal Ferreira', factions: ['Police'], assumeServer: 'public' },
        { name: 'Dominic "Lil D" Chester', nicknames: ['Sabado de Sol'] },
    ],
    BigRichardRP: [
        { name: "Richard O'Conner", factions: ['Independent'], nicknames: ['Richie'], displayName: 1, assume: 'assumeOther' },
        { name: "[Officer] Rupert O'Copper", factions: ['Police'], displayName: 1 },
    ],
    BigSkenger: [
        { name: 'Zaceed Skengerton', factions: ['Lang Gang', 'Rooster'], nicknames: [reg(/\b[zs]a[skc]+[ei]*y?d/)], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Zacood Skengerson', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    BikeMan: [
        { name: 'Chet Summerset', assume: 'assumeNpNoOther' },
    ],
    binoversion: [
        { name: '? "O Dogg" ?', factions: ['SSB'] },
    ],
    Biotoxz_: [
        { name: 'Lars "Bjorn" Haverford', factions: ['LARPers', 'Cleanbois', 'Clean Cartel', 'Rooster'], nicknames: ['Barbarian'], assumeServer: 'whitelist' },
        { name: 'Lars "Bjorn" Haverford', factions: ['Police', 'LARPers'], nicknames: ['Barbarian'], assumeServer: 'public' },
    ],
    BJPofficial: [
        { name: '[Lawyer] Buford J. Preston', factions: ['DoJ'] },
    ],
    blau: [
        { name: 'Mickey Sinclaire', factions: ['Hades', 'Cleanbois', 'Clean Cartel'], nicknames: ['Michael', 'Downbad', 'Downrat'], assumeServer: 'whitelist' },
        { name: '[Deputy] Klay Kona', factions: ['Police'], displayName: 2 },
        { name: 'Michael S.', factions: ['Independent'], assumeServer: 'public' },
    ],
    bldrs: [
        { name: 'Kaleb "Kleb" Rush', factions: ['HOA', 'Frat'] },
        { name: '[Officer] Ryan Wright', factions: ['Police'] },
    ],
    bledorable: [
        { name: 'Billy Thorne', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    BLooD_MoNeY_: [
        { name: '[Lawyer] Griz ?', factions: ['DoJ'], displayName: 1 },
    ],
    BloomOnline: [
        { name: 'Dillon Dubbs', factions: ['News'], displayName: 0 },
    ],
    Blown: [
        { name: 'Taylor "Spaceman" Briggs' },
    ],
    bLuE622: [
        { name: 'Boe Jangles', factions: ['Chang Gang'], affiliate: true },
    ],
    blunt_20202020: [
        { name: 'Dub Blunt', factions: ['Tuner Shop'], displayName: 0 },
    ],
    bmcloughlin22: [
        { name: '[Lawyer] Lachlan Pike', factions: ['DoJ'] },
    ],
    Bomaah: [
        { name: 'Viper Rodriguez', assume: 'assumeOther' },
    ],
    BoogieTD: [
        { name: 'Xavier Valentine', factions: ['Stable', 'Clean Cartel'] },
    ],
    BoschMerchant: [
        { name: 'Anto Murphy', factions: ['Chang Gang'] },
    ],
    boss_zulu: [
        { name: 'Zulu Thendani', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    boxbox: [
        { name: 'Bo Xbox', factions: ['Rooster'] },
    ],
    bradahjune: [
        { name: 'Kapono Kahananui', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    Braders: [
        { name: 'Jeff Arnold' },
    ],
    Braenstus: [
        { name: '[Lawyer] Adam Nielsen', factions: ['DoJ', 'Rooster'], displayName: 1 },
    ],
    Brakketts: [
        { name: '[Peacekeeper] Tommy Horver', factions: ['Police'] },
    ],
    breakyx: [
        { name: 'Aleks Harris', factions: ['Hades'], nicknames: [], displayName: 1 },
        { name: 'Dris Peters', factions: ['SSB'] },
    ],
    Breehzee: [
        { name: 'Wullie Mcdonnel', factions: ['DoC'], displayName: 0 },
        { name: 'Pedro Frank', displayName: 0 },
    ],
    BrettGambit: [
        { name: 'Leo Hayes', factions: ['Burger Shot'], nicknames: ['DJ Leo'], displayName: 3 },
        { name: 'Skele Tor', nicknames: ['Skeletor'], displayName: 3 },
    ],
    BRIT: [
        { name: 'Tori Corleone', factions: ['Britney Gang', 'Rooster'], nicknames: ['Bologna'] },
    ],
    British_Bulldog: [
        { name: 'Jayden Cooper', factions: ['GSF'], displayName: 0 },
    ],
    BrodyCurtis_: [
        { name: 'Max Power', displayName: 0, assumeServer: 'whitelist' },
        { name: '[Deputy] Sean Duncan', factions: ['Police'], assumeServer: 'public' },
    ],
    Brofain: [
        { name: 'Kodak Bodega' },
    ],
    BronzeRP: [
        { name: 'Gary Adams', factions: ['Lost MC'] },
    ],
    BrookeAB: [
        { name: 'Abby Brooks', factions: ['Angels'], displayName: 0 },
    ],
    broxh_: [
        { name: 'Broxh Kava', displayName: 1 },
    ],
    BucketSt: [
        { name: 'Gheto Kaiba', factions: ['BBMC'], displayName: 2 },
    ],
    buddha: [
        {
            name: 'Lang Buddha',
            factions: ['North Cypress', 'Cleanbois', 'Lang Gang', 'Clean Cartel', 'Rooster'],
            leader: true,
            nicknames: ['Circle Andy', 'Timelord'],
            assumeChar: true,
            assumeServer: 'whitelist',
        },
        { name: '[Trooper] LeBron James', factions: ['Police'], nicknames: ['623'], displayName: 1 },
        { name: '[Ranger] Lang Buddha', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Esteban Julio-Ricardo-Montoya-De-La-Rosa Ramirez', factions: ['Police'] },
        { name: '[Deputy] Kevin Kona', factions: ['Police'] },
    ],
    Bundie: [
        { name: 'Tane Mahuta', factions: ['RUST'], nicknames: ['Kiwi'], displayName: 3 },
        { name: 'Charles Hendrix', nicknames: ['Charlie'], displayName: 0 },
    ],
    bunicular: [
        { name: 'Layla Lockhart', factions: ['Wastelanders'], displayName: 0 },
    ],
    BurgSZN: [
        { name: 'Tyler Heisanburg', factions: ['Royal Mafia'], nicknames: ['Burg'], displayName: 3 },
    ],
    Burn: [
        { name: 'Johnny Silverhand', displayName: 0 },
        { name: '[Deputy] Brocky Potage', factions: ['Police'], displayName: 2 },
        { name: 'Asmon Bronze', displayName: 0, nicknames: ['AsmonBronze', 'Transmog'] },
        { name: 'Norman "Norm" Yoder' },
        { name: 'Moe Nopoli', displayName: 0 },
        { name: 'Michael Myers', displayName: 0 },
        { name: 'Mentle Block', factions: ['ASRR'] },
        { name: 'Sasuke Johnson' },
        { name: 'Jack Napiere', nicknames: ['"Kyle Pred"', 'Sheriff', 'Pred'], displayName: 3 },
        { name: 'Bojack Horseman', displayName: 0 },
        { name: 'Bob Penta', displayName: 0 },
        { name: 'Blau Jobs', displayName: 1 },
        { name: '? "TTS" ?' },
        { name: 'Sanic Speedrun' },
        { name: 'Burn Burnington', nicknames: [reg(/self\W*insert/), 'me', 'myself'], displayName: 1 },
        { name: '? "BSauce" Sauce', nicknames: ['VSauce'] },
        { name: 'Chi "Chi-ku" Ku' },
        { name: 'Plankton ?' },
        { name: 'Devan Almighty', nicknames: ['Bruce', 'Evan'], displayName: 0 },
        { name: 'Bruce "The Dank Knight" Strayne' },
        { name: 'Gordo Ramsay', nicknames: ['Gorden', 'Gordon'], displayName: 0 },
    ],
    ButterRoyaleTV: [
        { name: 'Deejay Bartello' },
    ],
    Buzterwow: [
        { name: '? "Brother Mehof" ?' },
    ],
    bythybeard: [
        { name: '[Peacekeeper] Sexton Hardcastle', factions: ['Police'], displayName: 2 },
        { name: 'Wade Willson', factions: ['HOA'] },
    ],
    C0smiik: [
        { name: 'Stolly ?', factions: ['GSF'] },
    ],
    CallMeGrub: [
        { name: '[Deputy] Isaac Richardson', factions: ['Police'] },
    ],
    CallMeKevin: [
        { name: 'Grognak The Destroyer', assume: 'assumeNpNoOther' },
    ],
    CanadianYETI_: [
        { name: 'Tee ?', factions: ['SSB'], assumeServer: 'public' },
    ],
    Capped: [
        { name: 'Capped Tarranova', factions: ['Street Team', 'Chang Gang'], nicknames: ['Pigeon', 'Terranova', 'Nova'], displayName: 3 },
    ],
    Capshion: [
        { name: 'Pauli Maglioni', factions: ['SOS'], displayName: 0 },
    ],
    capsure: [
        { name: 'Dimitri Nekola', factions: ['Pegasus'] },
    ],
    CaptainBarb: [
        { name: 'Mattias Nilson', factions: ['Mayhem MC'], displayName: 0 },
    ],
    Caramel: [
        { name: 'Lovemore Dlamini', factions: ['Besties'], displayName: 1 },
    ],
    Carbonoid: [
        { name: 'Han Machiavelli', factions: ['BSK'], displayName: 0 },
    ],
    Carmen: [
        { name: 'Carmella Corset', factions: ['Rooster'] },
    ],
    Carter: [
        { name: 'Spencer Smith', nicknames: ['Mormon'] },
    ],
    CasadyOG: [
        { name: '[Peacekeeper] Zach Casady', factions: ['Police'], displayName: 2 },
    ],
    Cascadian_: [
        { name: '[Deputy] Michael Pike', factions: ['Police'], nicknames: ['313'], displayName: 2 },
    ],
    casek_: [
        { name: 'Cesar Conchas', factions: ['Vagos'], displayName: 0 },
    ],
    casualbaesu: [
        { name: 'Baesu Heartless', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    CathFawr: [
        { name: '[Officer] Lydia Vale', factions: ['Police'] },
        { name: 'Summer Mersion', factions: ['GSF', 'Mersions'], displayName: 0 },
        { name: 'Natya Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Catrin Fawr', factions: ['Self Insert', 'One Life'], displayName: 0 },
        { name: "[Lawyer] Shannon O'Banion", factions: ['DoJ'], displayName: 0 },
    ],
    Cathie: [
        { name: '[Peacekeeper] Anita May', factions: ['Police'], displayName: 1 },
        { name: 'Ninacska Mihkala', factions: ['Russians'], nicknames: ['Nina'], displayName: 3 },
        { name: 'Kaelyn "Kae" East', factions: ['SSB'] },
    ],
    CaussiePreacher: [
        { name: '[EMS] Jack Preacher', factions: ['Medical'] },
    ],
    CazeyTV: [
        { name: 'Sam Simmons', factions: ['Hydra Gang'], displayName: 0 },
        { name: '[Trooper] Jeffrey Bones', factions: ['Police'], displayName: 2 },
    ],
    CbasRP: [
        { name: 'Cbas ?', factions: ['Dons'] },
    ],
    cennah: [
        { name: 'Camila Sulan', factions: ['Manor'], nicknames: ['Cami'], displayName: 1 },
    ],
    CFirst93: [
        { name: 'Mac Jones', factions: ['GSF'], nicknames: ['MJ'], displayName: 0 },
    ],
    chairhandler: [
        { name: 'Carl Crimes' },
    ],
    Chalupa_Pants: [
        { name: 'Julio Thomas', factions: ['HOA'] },
        { name: '[Deputy] Marco Holliday', factions: ['Police'], nicknames: ['683', 'Holiday'] },
    ],
    chandraviperdae: [
        { name: 'Mari McKay', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    Chanpu: [
        { name: 'Justin "Victor" Bridges', factions: ['Angels'] },
    ],
    Chap: [
        { name: 'Bryan Chapman', nicknames: ['Chap', 'Orange'], displayName: 0, assumeChar: true },
    ],
    charlieblossom: [
        { name: 'Georgina "Windsong" Williams' },
    ],
    charlieteevee: [
        { name: '[Officer] Charlie Cox', factions: ['Police'], assumeServer: 'public' },
    ],
    Chaseman7GG: [
        { name: 'Miguel Guerrero', factions: ['Vagos'] },
    ],
    Chatterbox: [
        { name: 'Jagger "Chatterbox" Gerardy' },
    ],
    ChavRP: [
        { name: 'Thai Chav', factions: ['Street Team'], displayName: 2 },
    ],
    Cheever7: [
        { name: 'River Cheever', nicknames: ['River'], factions: ['ASRR'], assumeServer: 'whitelist' },
    ],
    cheezrp: [
        { name: 'Terry Linkston', factions: ['Seaside'] },
    ],
    Chelb: [
        { name: 'Alan Kyles', factions: ['Hydra Gang'], displayName: 0 },
        { name: '[Officer] Josh Kade', factions: ['Police'], displayName: 2 },
    ],
    ChelbMyster: [
        { name: 'Alan Kyles', factions: ['Hydra Gang'], displayName: 0, facebook: true },
    ],
    chichjr: [
        { name: 'Jared Creed', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    Chief: [
        { name: 'Baada Ka', factions: ['GSF'], nicknames: ['Chief'], displayName: 3, assume: 'assumeNpNoOther' },
    ],
    Chitman: [
        { name: 'Jax Fury', factions: ['Wastelanders'], displayName: 0 },
    ],
    ChloeLock: [
        { name: 'Chloe Blanc', factions: ['Hydra Gang'], nicknames: ['Chloé'], displayName: 0 },
    ],
    Choi: [
        { name: '[Dr.] Choi Zhangsun', factions: ['Medical'], assume: 'assumeOther' },
    ],
    ChrisTombstone: [
        { name: '[Peacekeeper] Flop Dugong', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
    ],
    CHUDOCKEN: [
        { name: 'Orpheus Dawson', factions: ['Burger Shot'], displayName: 1 },
    ],
    CinnamonToastKen: [
        { name: 'Chuck Colton' },
        { name: 'Buck Colton', factions: ['BBMC'], nicknames: ['Book', 'Bucky', 'Cultan'] },
    ],
    Citizen_Cannon: [
        { name: 'Marco Richter', factions: ['Prison'], displayName: 0 },
    ],
    Clammy: [
        { name: '[Peacekeeper] Derek Monroe', factions: ['Police'], displayName: 2 },
        { name: 'AK', factions: ['SSB'], assumeServer: 'whitelist' },
        { name: '[Officer] Derek Monroe', factions: ['Police'], assumeServer: 'public' },
    ],
    clapemupgg: [
        { name: 'Zee Davis', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    ClassyPax: [
        { name: 'Madam Ming', displayName: 0 },
        { name: '[Dr.] Ethan Maw', factions: ['Medical'], displayName: 2 },
    ],
    cleaneu: [
        { name: 'Michael Robinson', factions: ['DoC'], displayName: 0 },
        { name: 'Pete Bourke', factions: ['Prison'], displayName: 0 },
    ],
    cleanstrikes: [
        { name: 'Alex Fibbler', factions: ['BSK'], displayName: 0 },
    ],
    Client: [
        { name: 'Daquan "Peanut" Dumas', factions: ['NBC'] },
        { name: '[Officer] Alejandro Picadillo', factions: ['Police'], nicknames: ['World Wide', 'Worldwide'] },
    ],
    CloudyDL: [
        { name: 'Scotty Dixon', factions: ['Italian Mafia'], displayName: 0 },
    ],
    CoconutB: [
        { name: '? ?' },
    ],
    CodeMiko: [
        { name: 'Code Psyko', nicknames: ['CodePsyko'], displayName: 0 },
    ],
    ConfigVAL: [
        { name: '? ?', assume: 'neverNp' },
    ],
    ConfusedDevil: [
        { name: '[Deputy] Travis Tribble', factions: ['Police'] },
    ],
    ConnorCronus: [
        { name: 'Roman Sionis', nicknames: ['Mask', 'Black Mask'], displayName: 0 },
        { name: '[Dr.] Isaac Smith', factions: ['Medical'] },
    ],
    Coolio: [
        { name: 'Dequarius "Big D" Johnson', factions: ['Chang Gang'] },
        { name: '[Deputy] Adam Hopping', factions: ['Police'] },
    ],
    cosmic_chimp: [
        { name: 'John Gray', factions: ['Manor'], nicknames: ['John'], displayName: 1 },
    ],
    Cosmic: [
        { name: '[Officer] Alex Casterman', factions: ['Police'], nicknames: [reg(/as+terman\b/)] },
        { name: 'Finlay' },
    ],
    CowsMooingNSuch: [
        { name: '[Clerk] Sophia McMoo', factions: ['DoJ'], displayName: 1 },
    ],
    CptCheeto: [
        { name: '[Peacekeeper] Ridley Adams', factions: ['Police'] },
        { name: '[Officer] Scott Ridley', factions: ['Police'] },
    ],
    CraigySmith: [
        { name: 'Frank Junior-Smith', factions: ['Lang Gang'], nicknames: ['Frank Jr Smith', 'Franky', 'Frankie', 'Scottish'], displayName: 4 },
    ],
    CrayonPonyfish: [
        { name: '[Officer] Wynona Fontaine', factions: ['Police'], displayName: 2 },
        { name: 'Sadie Thistle' },
        { name: 'Wilhelmina Copperpot', displayName: 2 },
    ],
    crimsonswordsman: [
        { name: 'Raphael Kristof', factions: ['HOA'] },
    ],
    Crix: [
        { name: '[Deputy] Nick Obrien', factions: ['Police'], nicknames: ['557'] },
    ],
    crocc: [
        { name: 'Vittorio "Vito" DiCenzo', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    Crunchy: [
        { name: '[Dr.] Agnes Ranbough', factions: ['Medical'] },
        { name: 'Grimoire "Gremlin" Hauttogs' },
    ],
    cruzare: [
        { name: 'Alfie Cruz', factions: ['Marabunta'] },
    ],
    CrystalMushroom: [
        { name: 'Regina Bunny' },
    ],
    Crystalst: [
        { name: '[Peacekeeper] Crystal Clear', factions: ['Police'], nicknames: ['370'], displayName: 1 },
        { name: 'Four "4T" Tee', factions: ['ASRR'], displayName: 0 },
        { name: 'Swan DeLeur', displayName: 0 },
        { name: 'Amie Rush' },
    ],
    CurtisRyan: [
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt', 'Citrus'], factions: ['Chang Gang', 'Chaos'], assumeServer: 'whitelist' },
        { name: 'Curtis Swoleroid', factions: ['Gangton'], nicknames: ['2.0'], leader: true },
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt', 'Citrus'], factions: ['Independent'], assumeServer: 'public' },
        { name: '[Officer] Stephen McClane', factions: ['Police'] },
        { name: 'Cornelius "Cornbread" Scott', factions: ['GSF'] },
    ],
    curvyelephant: [
        { name: '[Peacekeeper] Matt Rhodes', factions: ['Police'], nicknames: ['petty'] },
        { name: 'Brad ?', factions: ['Frat'], nicknames: ['B-Rad'], displayName: 3 },
        { name: 'Ryan Parker', factions: ['Lost MC'] },
        { name: '[Lawyer] Kevin Shaw', factions: ['DoJ'] },
    ],
    Curvyllama: [
        { name: '[Deputy] Lorenzo Lezar', factions: ['Police'], displayName: 1 },
        { name: 'Freya Manning' },
    ],
    CydRose: [
        { name: 'Cydney Lune', factions: ['Lang Gang'], nicknames: ['Cyd'], displayName: 1 },
    ],
    cynbubs: [
        { name: 'Charli Woods', displayName: 0 },
    ],
    cyr: [
        { name: 'Joe Caine', displayName: 0 },
        { name: "Khan Di'Sendo", displayName: 0 },
        { name: 'Uchiha Jones', factions: ['Chang Gang'] },
        { name: 'Fred Hurst', nicknames: [reg(/Lim.\s?Bizkif/)] },
    ],
    cyter: [
        { name: 'Demetrius "Draco" Jones', factions: ['Seaside'], nicknames: ['DJ'] },
    ],
    D4N1ELLE: [
        { name: 'Quimbley Hayabusa', factions: ['CBPD', 'Rooster'], nicknames: ['Q'], displayName: 3 },
    ],
    dabsorlabs: [
        { name: 'Pablo Cortez', factions: ['Saints'], displayName: 0 },
    ],
    DadDoesDrag: [
        { name: 'Kray-Tor Skullfondler', factions: ['HOA'], facebook: true },
    ],
    Dadulio: [
        { name: '[Deputy] Franky Dulio', factions: ['Police'] },
    ],
    dafran: [
        { name: 'Thor Bjorn', factions: ['Independent'], displayName: 0, assumeServer: 'public', wlBias: 1 },
    ],
    daisykiss: [
        { name: 'Molly Rollin', displayName: 0, assume: 'assumeNpNoOther' },
    ],
    dandorac: [
        { name: 'Dan Mclean', factions: ['Saints'], displayName: 0 },
    ],
    DanGheesling: [
        { name: 'Tanner Buttermaker', displayName: 1 },
    ],
    DanHawk1ns: [
        { name: 'Benny Gomez', factions: ['Burger Shot'] },
    ],
    Dark0verseer: [
        { name: '[Development] Dark0', factions: ['Development'], nicknames: ['3D', 'manor'] },
        { name: 'Alfred D. Arko' },
    ],
    DarkestRoast_: [
        { name: '? Scotts', factions: ['DoC'], displayName: 2 },
    ],
    Darthbobo77: [
        { name: 'Rudi Rinsen', factions: ['Lost MC'], leader: true },
    ],
    dasMEHDI: [
        { name: '[Officer] Brian Knight', factions: ['Police'], nicknames: ['495'] },
        { name: 'Nino Chavez', factions: ['Cleanbois', 'Pegasus', 'Rooster'] },
        { name: 'Ryan Kindle', factions: ['HOA'] },
        { name: 'Reema', nicknames: ['The "Whorelord"'] },
    ],
    DavidB_NP: [
        { name: 'Vladimir "Vlad" Ivanov', factions: ['Russians'] },
    ],
    Dawntlyss: [
        { name: 'Don Chord' },
    ],
    Daxxtr: [
        { name: '[Peacekeeper] Vincent Cannoli', factions: ['Police'], nicknames: ['V'], assumeServer: 'whitelist' },
        { name: '[Officer] Vincent Cannoli', factions: ['Police'], nicknames: ['V'], assumeServer: 'public' },
    ],
    dcozmo: [
        { name: 'Spiro Cozmopolidis', factions: ['Saints'] },
    ],
    DDPeter: [
        { name: '[Officer] Benjamin Peppers', factions: ['Police'], assumeServer: 'public' },
    ],
    Deansocool: [
        { name: 'Dean Quincy', displayName: 1, assume: 'assumeNpNoOther', assumeServer: 'whitelist' },
        { name: '[Deputy] Den Shiesty', factions: ['Police'], displayName: 1 },
        // { name: 'Dean Shiesty', factions: ['SSB'], displayName: 0, assumeServer: 'public' },
    ],
    Deejayus: [
        { name: 'Albert Intelligence', factions: ['CBPD', 'Rooster'], nicknames: ['A.I.'] },
    ],
    DEFAC3D: [
        { name: 'Denzel Wallace', displayName: 0 },
    ],
    Dehxter: [
        { name: 'Mark Jango', factions: ['Clean Cartel'], displayName: 0 },
    ],
    DeLucaRP: [
        { name: 'James DeLuca', factions: ['Tuner Shop'], displayName: 0 },
    ],
    Denior13: [
        { name: 'Keith "Bulldog" Dooger', factions: ['Lost MC'] },
    ],
    Denis3D: [
        { name: '[Development] Denis3D', factions: ['Development'], nicknames: ['3D'] },
        { name: 'Bob "Bob the Builder" Carter', factions: ['Seaside'], nicknames: ['The Builder'] },
    ],
    deputydangerdan: [
        { name: "D'Brickashaw King", factions: ['GSF', 'CBPD'], nicknames: ['Brick'], displayName: 3 },
        { name: "Robert O'Shay", nicknames: ['Rob'], displayName: 0 },
    ],
    DerpFront: [
        { name: '[EMS] Rivington Rivera', factions: ['Medical'], nicknames: ['Riv', 'E-78'], displayName: 3 },
    ],
    Despooo_: [
        { name: 'Alex Datum', displayName: 0 },
    ],
    devolore: [
        { name: '[Officer] Cassius Kennedy', factions: ['Police'], nicknames: ['Cash'] },
    ],
    dew_ski: [
        { name: 'Alem Barghouthi', factions: ['NBC'], displayName: 0 },
    ],
    DexGod: [
        { name: 'JJ Bradley', factions: ['BCG'], nicknames: ['Dex'], displayName: 0 },
    ],
    dibitybopty: [
        { name: '[Officer] Gus Gorman', factions: ['Police'] },
    ],
    DiewithLivv: [
        { name: 'Cindy Tipton', factions: ['Burger Shot'], nicknames: ['Girlboss'] },
    ],
    DigbyTathamWarter: [
        { name: 'Nigel Edwardson', factions: ['News'], displayName: 0 },
    ],
    DigiiTsuna: [
        { name: '[Dr.] Kai King', factions: ['Medical'], displayName: 2 },
        { name: 'Maxy Mersion', factions: ['Mersions'], displayName: 0 },
    ],
    DisbeArex: [
        { name: 'Oki Doki', factions: ['CBPD', 'Burger Shot'], displayName: 0 },
    ],
    DisguisedToast: [
        { name: 'Amon Gus', displayName: 0 },
        { name: '[Officer] Al Rashio', factions: ['Police'], displayName: 2 },
    ],
    DivaJilly: [
        { name: '[Judge] Siobhan Fitzpatrick', factions: ['DoJ'], displayName: 1 },
    ],
    DKane: [
        { name: 'Cletus McCoy' },
    ],
    DocWizard: [
        { name: '[Judge] John Bailey', factions: ['DoJ'] },
        { name: 'Terrance "TJ" Walker', factions: ['BBMC'] },
        { name: 'Preston Landor' },
    ],
    Dogbert: [
        { name: '[Deputy] Rocko Colombo', factions: ['Police'], nicknames: [reg(/\bcol.mb./)] },
        { name: 'Luther Caine', factions: ['HOA'] },
        { name: 'Wyatt Mersion', factions: ['Limelight', 'Mersions'] },
    ],
    DoluTattoo: [
        { name: '[Development] Dolu', factions: ['Development'] },
    ],
    DongerDayz: [
        { name: 'Kelly Camellia', factions: ['Wastelanders'], displayName: 0 },
    ],
    Donut3venTryMe: [
        { name: 'Joey Pepperoni', factions: ['Tuner Shop'], displayName: 0 },
    ],
    Dorken: [
        { name: 'Valentina Hops', factions: ['Burger Shot'] },
        { name: 'Debby Doodle' },
        { name: 'Nicholine Quinn', displayName: 0 },
    ],
    DotoDoya: [
        { name: 'Landon Campbell', displayName: 0, assume: 'assumeNpNoOther' },
    ],
    Doug: [
        { name: 'Gazpacho Prince', factions: ['Independent'], nicknames: ['Spachi', 'Pachi', reg(/[sz]pach/)], displayName: 3 },
        { name: 'William "W" Told', nicknames: ['Lil Pump'] },
    ],
    DougisRaw: [
        { name: 'Jason Sharpe', displayName: 0 },
    ],
    DozaRP: [
        { name: 'Edgar Mendoza', displayName: 1 },
    ],
    Dr_Knope: [
        { name: 'Patrit "Mete" Metemahaan', factions: ['HOA'] },
    ],
    Dragecia: [
        { name: 'Bunnie Bunsworth', factions: ['HOA'] },
    ],
    Dripp: [
        { name: 'Future Cortair', factions: ['Besties'] },
        { name: '[Officer] Jamarius Quangle', factions: ['Police'], nicknames: ['Jamar'], displayName: 2 },
    ],
    DROwSeph420: [
        { name: 'John "Geno" Collins', factions: ['GSF'] },
    ],
    Drwz: [
        { name: 'George Cartier', factions: ['Saints'], displayName: 0 },
    ],
    DTalmer: [
        { name: 'Jackson Wilson', factions: ['Harmony'], nicknames: ['Blacksteel'], displayName: 0 },
    ],
    DummyWack: [
        { name: 'Nathan Peters', factions: ['Dons'], nicknames: ['Nate', 'Turtleneck'] },
    ],
    Dunrunnin12: [
        { name: 'Thomas Dwayne', factions: ['Stable'], nicknames: ['The Narrator'], displayName: 0 },
        { name: '[Ride Along] Talgar Blootonn', factions: ['Police'], displayName: 1 },
        { name: 'Talgar Goldtooth', displayName: 0 },
        { name: 'Nay "Delamain" Rater' },
    ],
    Duroode: [
        { name: '[Peacekeeper] James McTavish', factions: ['Police'], displayName: 2 },
    ],
    durptastic: [
        { name: 'Otis Goody', factions: ['Burger Shot'] },
    ],
    dustbinflowers: [
        { name: 'Cara Lynn', factions: ['Burger Shot'], displayName: 0 },
    ],
    dwagonlvl: [
        { name: 'Dragon Rush', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    dwjft: [
        { name: 'Dean Watson', factions: ['Limelight', 'Cleanbois', 'Development'], nicknames: ['El Deano', 'El Deano (Dean)', 'Dev stuff'], displayName: 1 },
        { name: '[Senator] D.W.', factions: ['DoJ'], leader: true, nicknames: ['DW', 'Senate'], displayName: 3 },
        { name: '[Watch Party] dwjft', factions: ['Watch Party'] },
        { name: 'Terminator ?' },
        { name: 'Batman ?' },
        { name: 'Lucious Francer', nicknames: ['bwo'], displayName: 0 },
        { name: '[Trooper] Derby West Bromwich', factions: ['Police'], displayName: 1 },
        { name: '[Development] DW', factions: ['Development'], nicknames: ['tinkering'] },
    ],
    Dyoti: [
        { name: '[Deputy] Winston Walker', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Deputy] Wyatt Cole', factions: ['Police'], assumeServer: 'public' },
        { name: 'Dawson Whitehead', factions: ['HOA'], assumeServer: 'public' },
    ],
    Dyrus: [
        { name: 'Louis Hill', displayName: 0 },
    ],
    DzarekK: [
        { name: 'Lulu ?', displayName: 1 },
    ],
    EagleAye: [
        { name: 'Eve Summers', factions: ['Lang Gang', 'LARPers', 'Rooster'] },
    ],
    eaJParkOfficial: [
        { name: 'Park Parker', factions: ['Rooster'], nicknames: ['Santa'], displayName: 0, assumeChar: true },
    ],
    edisonparklive: [
        { name: 'Michael Hawkins', factions: ['Royal Mafia'], displayName: 0 },
    ],
    Edonxd: [
        { name: 'Jordan Elmore', factions: ['Saints'], displayName: 0 },
    ],
    EdwardVanmanz: [
        { name: 'Leon Edwards', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    eebern: [
        { name: 'Huck Guthrie', factions: ['HOA'], nicknames: ['Huckleberry'] },
    ],
    eHulzy: [
        { name: 'Carmine Mosca', factions: ['Italian Mafia'], displayName: 0 },
    ],
    EiSEU: [
        { name: 'Jonathan Hoig', factions: ['SOS'], displayName: 0 },
    ],
    either: [
        { name: 'Jaden Christopher' },
    ],
    EliotJuun: [
        { name: '[Officer] Douglas Fir', factions: ['Police'], displayName: 1 },
    ],
    ellegrenn: [
        { name: 'Sofia Castellano', displayName: 1 },
    ],
    Elochai: [
        { name: 'Tao Chen', factions: ['Rooster'], assumeServer: 'whitelist' },
        { name: '[Development] Elochai', factions: ['Development'], nicknames: ['finishing', 'working on', reg(/\b(?:cloth\w+|shirt|outfit|pants|helmet|hat)s?\b/)] },
        { name: 'Leyin Jhail', assumeServer: 'public' },
        { name: 'Damien Grey', factions: ['Mayhem MC'], displayName: 0 },
    ],
    ElvisRP: [
        { name: '[Deputy] John Dorian', factions: ['Police'] },
    ],
    EmmyWithLove: [
        { name: 'Peaches Hayabusa', factions: ['NBC', 'Burger Shot'] },
    ],
    Enanoot: [
        { name: 'Evan Deckard', factions: ['Saints'], displayName: 0 },
    ],
    erickeK: [
        { name: 'Frederick Dutton', factions: ['Lost MC'], displayName: 1 },
    ],
    erobb221: [
        { name: 'Ricky Borby', displayName: 0 },
    ],
    EsfandTV: [
        { name: '[Peacekeeper] Cletus Cornwood', factions: ['Police'] },
        { name: 'Ali Farmand', displayName: 0 },
    ],
    Evee: [
        { name: '[Peacekeeper] Demi Black', factions: ['Police'], nicknames: ['492'] },
        { name: 'Antigone Weston', factions: ['DoJ'], assumeServer: 'whitelist' },
        { name: '[Officer] Antigone Weston', factions: ['Police'], assumeServer: 'public' },
        { name: 'Whitney Crawford', factions: ['DoJ'] },
        { name: 'Adrienne West' },
        { name: 'Meggie "Megan" Right' },
        { name: 'Bree Matthews' },
    ],
    EvilShatner: [
        { name: '[Lawyer] Anna Swallows', factions: ['DoJ', 'ASRR'], nicknames: ['Law'], displayName: 1, assumeChar: true },
    ],
    ExNinja_: [
        { name: '[Deputy] Paul String', factions: ['Police'], assumeServer: 'public' },
    ],
    explicitx_: [
        { name: 'Jason Sanchez', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    explodicy: [
        { name: 'Ted Kindly' },
    ],
    extralivia: [
        { name: 'Jessica Bays', factions: ['SSB'] },
        { name: 'Maia Berkeley' },
    ],
    ExtraM1nty: [
        { name: 'Jason "JT" Teen', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    F3ARzZ: [
        { name: 'Ranjit Raventish' },
    ],
    f3nrirsgaming: [
        { name: 'Francis Angel Luis', factions: ['Wastelanders'], displayName: 0 },
    ],
    Fahrenheit: [
        { name: 'Ilya Karishnikov', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    Fairlight_Excalibur: [
        { name: 'Raja Bahadur', factions: ['QuickFix'], leader: true },
        { name: '[Officer] Alexander "Fox" Fawkes', factions: ['Police'] },
    ],
    Fairzz: [
        { name: 'Huxley Johnson', factions: ['DoC'], assumeServer: 'whitelist' },
        { name: '[Deputy] Huxley Johnson', factions: ['Police'], assumeServer: 'public' },
        { name: 'Paddy Patrickson', factions: ['Lost MC'] },
    ],
    fakejdn: [
        { name: '[Deputy] Jaden Bane', factions: ['Police'], displayName: 2 },
    ],
    FalconryGal: [
        { name: 'Jenna Tuttle', displayName: 2 },
    ],
    FalloftheSeason: [
        { name: 'Ophelia Quinn', nicknames: ['Ophie'] },
        { name: 'Odiment Sparrow', factions: ['DoC'] },
        { name: '[EMS] Orianna "Ori" Frost', factions: ['Medical'], nicknames: ['Olive'] },
    ],
    Familybanter: [
        { name: '[Dr.] Jayce Petra', factions: ['Medical'], displayName: 0 },
        { name: 'Taran Raid', factions: ['Lost MC'], displayName: 0 },
    ],
    fanfan: [
        { name: 'Fan "Fanny" Fan', factions: ['Besties'] },
    ],
    Farmhouse78: [
        { name: 'Jane Farmer' },
        { name: 'Steven Hayes', factions: ['Burger Shot'], displayName: 0 },
    ],
    fatboislimyo: [
        { name: 'Fin Win', factions: ['SSB'], displayName: 0 },
    ],
    FeliciaDay: [
        { name: 'Cherryclarie Dinwittie', nicknames: ['CherryClaire'], displayName: 3 },
    ],
    FelixLeLoup: [
        { name: 'Felix Volk', factions: ['Tuner Shop'] },
    ],
    FerretRP: [
        { name: 'Alberto Weaselton', factions: ['Lost MC'], nicknames: ['Al', reg(/\balb/)] },
    ],
    Ferst711: [
        { name: 'Tom Ryan', factions: ['Wastelanders'], displayName: 0 },
        { name: '[Lawyer] Ferst Temple', factions: ['DoJ'] },
    ],
    Fiendota: [
        { name: '[Officer] Booga "Booba" Ooga', factions: ['Police', 'Burger Shot'], nicknames: ['651'], displayName: 1 },
        { name: 'Jonathan "Magnum" Humes', nicknames: [reg(/\bP\.?\s*I\b/)] },
        { name: 'Boobingle Dan', factions: ['Dans'] },
    ],
    Five0AnthO: [
        { name: '[Trooper Chief] Tony Andrews', factions: ['Police'], highCommand: true, leader: true },
        { name: 'Rhode Block', factions: ['ASRR'], displayName: 0 },
    ],
    FiveMArena: [
        { name: 'FiveM "Arena Tournament" Arena', factions: ['Watch Party'], displayName: 2 },
    ],
    fleureo: [
        { name: 'Quinn Naiper', factions: ['DoC'], displayName: 0 },
    ],
    flnlayy: [
        { name: 'Mick Amari', factions: ['Manor'], nicknames: ['Mick-9'], displayName: 1 },
    ],
    Flocko1400: [
        { name: 'Aaron Flocko', displayName: 0 },
    ],
    FloMcNasty_TV: [
        { name: 'Richard Chiclets', factions: ['GSF', 'Burger Shot'], nicknames: ['Dick Chiclets'], displayName: 3, assumeServer: 'whitelist' },
        { name: 'Lilith Sponge', nicknames: ['Lil Sponge'], displayName: 3 },
        { name: '[Officer] William Clubb', factions: ['Police'], nicknames: ['Billy'], displayName: 2 },
        { name: 'Doc Chocolates', displayName: 0, assumeServer: 'public' },
    ],
    Flynno: [
        { name: '[Officer] Mickey Reynolds', factions: ['Police'], displayName: 2, assume: 'assumeNpNoOther' },
    ],
    Foolish_Gamers: [
        { name: 'Morty Karlson', displayName: 0 },
    ],
    Forlorn79: [
        { name: '[EMS] Amoris Pax', factions: ['Medical'] },
    ],
    forsen: [
        { name: 'Sven Snusberg', factions: ['Cleanbois'] },
        { name: 'Mason Foorhees' },
    ],
    FortyOne: [
        { name: 'Lucas Ortiz', factions: ['Tuner Shop'] },
        { name: '[Peacekeeper] John Archer', factions: ['Police'] },
        { name: 'Jose Martin Perez', nicknames: ['JMP'] },
        { name: 'Don Russo', displayName: 0 },
        { name: 'Jacob "Funny Man" Storm' },
        { name: 'Arious "Breezy" Campbell' },
    ],
    FourMilli: [
        { name: 'Brad Bett', factions: ['NBC'] },
        { name: '[Deputy] Preston Hale', factions: ['Police'] },
    ],
    FragZone: [
        { name: 'Derek Bogart', factions: ['Mayhem MC'], displayName: 0 },
    ],
    frank_ladd: [
        { name: 'Frank Scaletta', factions: ['Manor'], nicknames: ['Morning Crew 2IC'], displayName: 1 },
    ],
    FredosRP: [
        { name: 'Fredo Sanchez', factions: ['Seaside'], displayName: 1 },
    ],
    frightval: [
        { name: 'Berry ?', displayName: 1, assumeServer: 'public' },
    ],
    Frobotic: [
        { name: 'Dizzy Bluffins', factions: ['SSB'], displayName: 1 },
    ],
    frogbound: [
        { name: '[Officer] Edward Nygma', factions: ['Police'] },
        { name: 'Alexander Egorov' },
    ],
    Frshnesss: [
        { name: 'Tyrell Fresh', factions: ['Hydra Gang'], nicknames: ['Ty'], displayName: 0 },
    ],
    Frynaut: [
        { name: 'Kratos Of Sparta', factions: ['Rooster'], nicknames: ['God of War', 'God'] },
    ],
    fuslie: [
        { name: 'April Fooze', factions: ['Chang Gang'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Connie Clark', factions: ['Police'], nicknames: ['cop'], displayName: 2 },
        { name: '[Officer] Connie Clark', factions: ['Police'], nicknames: ['cop'], displayName: 2, assumeServer: 'public' },
    ],
    Fyzicul: [
        { name: 'Keith "Lando" Wanderlust', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Stormborn', 'Shaman', 'Mountain Kingdom'], displayName: 0 },
        { name: 'Fyz', factions: ['Self Insert'], displayName: 1 },
    ],
    Gabz: [
        { name: '[Development] Gabz', factions: ['Development'], nicknames: ['3D'] },
    ],
    Galackxyz: [
        { name: 'Annie Quigley', factions: ['Wastelanders'], displayName: 0 },
    ],
    GalacticDPN: [
        { name: 'Roman Shacks', nicknames: ['Professor Galactic', 'The Doctor', 'Professor'], displayName: 0 },
    ],
    GameDemented: [
        { name: '[Deputy] Peter Johnson', factions: ['Police'] },
    ],
    Garek: [
        { name: 'Burt "Gloryon" Beans', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Cleric'] },
        { name: 'Garek', factions: ['Self Insert'], displayName: 1 },
    ],
    GattisTV: [
        { name: 'Carlos Guzman', factions: ['Vagos'], displayName: 0 },
    ],
    Gavbin_: [
        { name: 'Gavin Holliday', factions: ['DoJ'] },
    ],
    geenelly: [
        { name: 'Misty Bloom', displayName: 0 },
    ],
    gekgemu: [
        { name: 'Serena Riven', factions: ['Rooster'] },
    ],
    GeneralEmu: [
        { name: '[Commissioner] Lance Malton', factions: ['Police'] },
    ],
    ggqf: [
        { name: 'Stanly "Stag" Lessfield', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Stagdancer', 'Gea', 'Paladin'] },
        { name: 'Garth Gregory Quincy Fafnir', nicknames: ['vlog'], displayName: 1 },
        { name: 'Daniel Hopper', displayName: 0 },
        { name: '[Officer] Bennett Calhoun', factions: ['Police'] },
    ],
    ghost_medic: [
        { name: 'Luke Riley', factions: ['Saints'], displayName: 0 },
    ],
    gibbs_gg: [
        { name: 'Walter Franks', factions: ['Mayhem MC'], displayName: 0 },
    ],
    gigiactually: [
        { name: ' Blondie Banks', factions: ['Manor'], nicknames: ['Treasurer'], displayName: 1 },
    ],
    Gilthflo: [
        { name: 'Percy Perkins', factions: ['Burger Shot'], displayName: 0 },
    ],
    gingersnap___: [
        { name: 'Sophie Sanders', displayName: 0 },
    ],
    Giosooo: [
        { name: 'Gioso King', nicknames: ['Gio'], displayName: 3 },
    ],
    gnaw: [
        { name: 'Maverick Adler', factions: ['Saints'] },
    ],
    Gnomey_au: [
        { name: 'Max Moody', factions: ['Wastelanders'], displayName: 0 },
    ],
    goldelena: [
        { name: 'August Vakarian' },
        { name: '[Deputy] Manuela Santos', factions: ['Police'] },
    ],
    Golden_Laurel: [
        { name: 'Gillea Taylor', factions: ['HOA'] },
    ],
    GoldGlove: [
        { name: 'Marvin King', nicknames: ['Marv'], displayName: 3 },
    ],
    goodnightjackalope: [
        { name: 'Stevie McQueen', factions: ['BBMC'], displayName: 0 },
    ],
    goose_thegreat: [
        { name: 'Thad Owens', factions: ['HOA'], displayName: 0 },
    ],
    gorgakuma: [
        { name: 'Akuma Gorg' },
    ],
    Graewan: [
        { name: '[Peacekeeper] Bobbi Russel', factions: ['Police'], displayName: 2 },
    ],
    GrandPOObear: [
        { name: 'Mick Jhonson', factions: ['Stable'], displayName: 1 },
    ],
    Greekgodx: [
        { name: '"Tay Tay" Tyrone', nicknames: ['TayTay'] },
        { name: 'Tea Tea', factions: ['Police'], displayName: 0 },
    ],
    GreenishMonkey: [
        { name: 'Bobby Brown', factions: ['Chang Gang'] },
        { name: '[Officer] James Brown', factions: ['Police'], displayName: 2 },
    ],
    GrimzyFFG: [
        { name: 'Sly Santana' },
    ],
    GTAWiseGuy: [
        { name: 'Eddie Marshall', factions: ['Tuner Shop'] },
        { name: '[Deputy] Jim Underwood', factions: ['Police'], nicknames: ['337', reg(/\w+wood\b/)] },
        {
            name: '[Development] GTAWiseGuy',
            factions: ['Development', 'Tuner Shop'],
            nicknames: ['Handling', 'Fixes', 'Fixing', 'Tuning', reg(/\btuners?(?:\s*\w*)*leaks/), reg(/\bnew\s+\w+\s*stuff/)],
        },
        { name: 'Igor Skovacic', nicknames: ['GOR'] },
        { name: 'Robin Williams', factions: ['Self Insert', 'One Life'], displayName: 0 },
        { name: 'Terminator T777', displayName: 0 },
        { name: 'Big M', displayName: 0 },
        { name: 'Earl ?', displayName: 1 },
        { name: 'Daequan "Double D" DeMarco', factions: ['SSB'] },
        { name: 'RayRay' },
        { name: 'Maury Mersion', factions: ['Mersions'] },
    ],
    GumbyMMA: [
        { name: 'Gumbus McGoo', factions: ['HOA'], nicknames: [reg(/\bgumb/)] },
    ],
    GutturalSteve: [
        { name: 'Tomathy Steampipe', factions: ['Burger Shot'] },
    ],
    HAchubby: [
        { name: 'Ha Chu', displayName: 0 },
    ],
    HalifamousNS: [
        { name: 'Devon Davidson', factions: ['BSK'], nicknames: ['DD'], displayName: 0 },
    ],
    hallon156: [
        { name: 'Hanh Do', factions: ['Seaside'] },
    ],
    hannerb_naner: [
        { name: '[EMS] Jenny Schildt', factions: ['Medical'] },
    ],
    HannibalSeca: [
        { name: 'Willy Wong', factions: ['Tuner Shop'], displayName: 0 },
    ],
    hansgaming08: [
        { name: '[Chief of Police] M Hans', factions: ['Police'], assumeServer: 'international' },
    ],
    Harbinger2183: [
        { name: '[Peacekeeper] Ethan Maxwell', factions: ['Police'], nicknames: ['505'], displayName: 2 },
    ],
    Harmless: [
        { name: 'Maynard "Idiot" Schmidt', factions: ['Besties'] },
    ],
    HARMSwahy: [
        { name: 'Blaine Burke', factions: ['Angels'] },
        { name: '[Officer] Wilson Burke', factions: ['Police'] },
    ],
    Harry: [
        { name: 'Harry Brown', factions: ['South Cypress', 'Cleanbois', 'Lang Gang', 'Limelight', 'Pegasus', 'Rooster'] },
        { name: '[Deputy] Kevin Little', factions: ['Police'], nicknames: ['Lil Kev', 'Kev'], displayName: 2 },
    ],
    HasanAbi: [
        { name: 'Humberto Antonio Donato Pecorino', factions: ['Cleanbois', 'Rooster'], nicknames: ['Don', 'Donnie', reg(/\bOva[h']? here\b/)], displayName: 5 },
    ],
    HaydenLeBFN: [
        { name: 'Hayden Smith', factions: ['Saints'], displayName: 1 },
    ],
    HayeDel: [
        { name: 'Del Boy', nicknames: ['DB'], displayName: 0 },
    ],
    Hedisaurus: [
        { name: '[Ranger] Ramona Celeste', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: '[EMS] Hedi Saurus', factions: ['Medical'], assume: 'assumeNpNoOther', assumeServer: 'whitelist' },
        { name: '[Deputy] Ramona Celeste', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
    ],
    heyimzed: [
        { name: 'Edbert Ropeburn', factions: ['BBMC'] },
    ],
    // heymuuni: [
    //     { name: 'Muuni Luna', factions: ['Independent'] },
    // ],
    HeyOrbz: [
        { name: '[Officer] Casey Valentine', factions: ['Police'] },
        { name: 'Richie Mersion', factions: ['Mersions'], displayName: 0 },
    ],
    hidaruma: [
        { name: 'Nico Kanto', factions: ['HOA'] },
    ],
    himadi: [
        { name: 'Madi Badi', factions: ['SOS'], displayName: 0 },
    ],
    HiredGunRP: [
        { name: '[Deputy] Colt Shepherd', factions: ['Police'] },
    ],
    Hirona: [
        { name: '[Trooper] Olivia Copper', factions: ['Police'] },
        { name: 'Emily Maw', factions: ['Harmony'] },
        { name: 'Jenny Hawk', displayName: 0 },
        { name: 'Onya Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Debbie Hopper', displayName: 0 },
        { name: 'Kristen Rules', factions: ['Self Insert'], displayName: 0 },
        { name: 'Griselda "Zelda" Harth', factions: ['HOA'] },
        { name: 'Olga Sazkaljovich', factions: ['Pegasus'], nicknames: ['Olgaa', 'Olgaaa', 'Olgaaaa'] },
    ],
    hobbittrash: [
        { name: '[Peacekeeper] Tracy Martell', factions: ['Police'], nicknames: ['Cop', 'Captain', reg(/\b\w+tell/)] },
        { name: '[Judge] Katya Zamalodchikova', factions: ['DoJ'], displayName: 1 },
        { name: 'Jane Obama', nicknames: ['jesus', 'christ'], displayName: 0 },
        { name: 'Aja Monet', displayName: 0 },
        { name: 'Jane Souls', displayName: 0 },
        { name: 'Rounda Block', factions: ['ASRR'], displayName: 0 },
        { name: "Kayden Dell'Anno" },
    ],
    hobosrust: [
        { name: 'Hei Zeus', factions: ['Lost MC'], displayName: 0, assumeServer: 'public' },
    ],
    HonathanTV: [
        { name: '[Deputy] Honathan Yolo', factions: ['Police'] },
    ],
    Hoss: [
        { name: 'Chip Wheeler', factions: ['BBMC', 'Tuner Shop'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Rocky Balboner', displayName: 0, assumeServer: 'public' },
    ],
    Hotted89: [
        { name: '[Peacekeeper] Matthew Espinoz', factions: ['Police'], nicknames: ['Airspinoz', 'Air 1 Andy'] },
        { name: 'Joaquin "JJ" Jimenes' },
        { name: 'Allen Widemann', factions: ['Chang Gang', 'Tuner Shop'] },
    ],
    HPD007: [
        { name: 'Joe Flatley', factions: ['BSK'], nicknames: ['Fat Joe'], displayName: 3 },
    ],
    huddy_nz: [
        { name: 'Ash Huddy Hudson', factions: ['Lunatix'] },
    ],
    HulzyRP: [
        { name: 'Joseph "Big Joe" Gambini', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    Huntag: [
        { name: 'Freddy Fastfingers', factions: ['HOA'], displayName: 0 },
    ],
    Hurnani: [
        { name: 'Bruno Brown', factions: ['RUST'], displayName: 1 },
        { name: 'Borat ?' },
        { name: 'James-Kamea Brown', factions: ['Vagos'] },
    ],
    HutchMF: [
        { name: 'Hutch Hutcherson', factions: ['Chang Gang'], nicknames: [reg(/\bkilled a man/), 'racing', 'business', 'paintball', 'h&o', reg(/\bwar/)] },
        { name: '[Peacekeeper] Jaryd Peak', factions: ['Police'] },
        { name: 'Drew "Dead Eye Drew"', nicknames: ['DeadEye'] },
        { name: 'Hutch Hendrickson' },
    ],
    HydraPlz: [
        { name: 'Gandalf "Stankyleg" Butters', factions: ['ASRR'] },
        { name: '[Deputy] John Hydra', factions: ['Police'], displayName: 2 },
    ],
    iamnxera: [
        { name: '[Officer] Tommy Tinker', factions: ['Police'], displayName: 2, assumeServer: 'whitelist' },
        { name: '[Officer] Tommy Tinker', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    IAmSoul_RP: [
        { name: 'Johnathen Riker' },
    ],
    IanDavis: [
        { name: 'Reginald Watson', factions: ['Royal Mafia'], nicknames: ['Sir'], displayName: 0 },
    ],
    iballzach: [
        { name: '[EMS] Zachary Kellogg', factions: ['Medical'] },
    ],
    IbbyRed: [
        { name: 'Jose "Fat Joe" Santini', factions: ['Vagos'] },
    ],
    IcyMindRacer: [
        { name: '[Dispatch] Iris Nivira', factions: ['Police'], displayName: 1 },
    ],
    iddqd: [
        { name: 'Jesse Reed', factions: ['BBMC'], nicknames: ['Cree'] },
    ],
    idksean: [
        { name: 'Sean Deane', displayName: 0 },
    ],
    IG_Raptor: [
        { name: '[Ranger] Matt Cordell', factions: ['Police'], assumeServer: 'international' },
    ],
    iGumdrop: [
        { name: 'Emi Drop' },
    ],
    IHeartGaming: [
        { name: 'Markuz Jackelson', factions: ['GSF'], nicknames: ['Meatball', 'Meat', 'Meatwad'] },
    ],
    iiMancini: [
        { name: 'John Mancini', factions: ['NBC'], displayName: 0 },
    ],
    IJuanAWin: [
        { name: 'Machete Cortez', factions: ['Marabunta'] },
    ],
    ikitty: [
        { name: 'Kitty Dream', factions: ['Britney Gang', 'Burger Shot', 'Rooster'] },
    ],
    ilenol: [
        { name: 'Max Larson', factions: ['CBPD', 'Rooster'], displayName: 0 },
    ],
    illwac: [
        { name: 'Bob Moss', factions: ['Burger Shot'], displayName: 0 },
    ],
    ILYCappiCat: [
        { name: 'SunMoon Lee', factions: ['RUST'], displayName: 1 },
    ],
    ilyjordi: [
        { name: 'Ralphie Ralphs', factions: ['Independent'], displayName: 1 },
        { name: 'Ralphie Ralphs', factions: ['Gangton'], nicknames: ['2.0'] },
    ],
    imdevyn: [
        { name: 'Daniel Khol', factions: ['Manor'], nicknames: ['DeeK'], displayName: 1 },
    ],
    ImFluffinJiggly: [
        { name: '[Deputy] ? Wilkons', factions: ['Police'], assumeServer: 'public' },
    ],
    indur: [
        { name: '[Deputy] Dea Bane', factions: ['Police'], assumeServer: 'public' },
    ],
    INFLUXPictures: [
        { name: 'Tony Venucci', displayName: 0 },
    ],
    inix: [
        { name: 'Mortimer Scottsfold', nicknames: ['Yung Fierro'], displayName: 3 },
    ],
    Intelleqt: [
        { name: 'Donovan "DK" King', factions: ['GSF'] },
    ],
    iqkev: [
        { name: 'Kev In', factions: ['SOS'], displayName: 0 },
    ],
    ironmonkeytv: [
        { name: 'Winston Bolt' },
        { name: 'Dragon' },
    ],
    itmeJP: [
        { name: 'Wilbur Higgins' },
    ],
    itsElleCee: [
        { name: 'Elle Queenie', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    itsfragss: [
        { name: 'Maxwell Connorth', factions: ['SOS'], nicknames: ['Max'], displayName: 1 },
    ],
    ItsHighsky: [
        { name: 'Sky Parks', factions: ['Royal Mafia'], displayName: 0 },
    ],
    itsjustasummerjob: [
        { name: 'Sabith "Bunny" Cohen', factions: ['Stable'] },
    ],
    ItsJustJosh: [
        { name: 'Levi Dawson', factions: ['SSB'] },
    ],
    ItsLeslie: [
        { name: 'KyrinChan "Leyla" WeuhBou', factions: ['LARPers', 'Cleanbois', 'Britney Gang', 'Rooster'], nicknames: ['Nightingale', 'Wizard', 'Embervale', reg(/\bley+l+a/)] },
    ],
    ItsLSG: [
        { name: '[Officer] Jack Miller', factions: ['Police'] },
    ],
    itsmejjroleplay: [
        { name: 'Johnny Jacksun', factions: ['BSK'], nicknames: ['JJ'], displayName: 0 },
    ],
    ItsNowas: [
        { name: 'Trequan Jenkins', factions: ['Street Team', 'Chang Gang'], nicknames: ['Ashtray'], displayName: 3 },
        { name: '[Deputy] Eli Hawkins', factions: ['Police'] },
    ],
    itspulipa: [
        { name: 'Princess Rin Reyes', displayName: 1 },
    ],
    ItsSammyP: [
        { name: 'Mando Thompson', factions: ['Vagos'], nicknames: ['Mango'] },
        { name: 'Tyrone "Big T" Thompson', factions: ['SSB'] },
    ],
    itsSANDR: [
        { name: 'Asher Brown' },
        { name: 'Lucas Shadow', factions: ['DoC'], displayName: 0 },
    ],
    ItsSlikeR: [
        { name: 'Chris Turtle', nicknames: ['Lil Sneach', 'Lil Sneech', 'Sneach'], displayName: 3 },
        { name: 'Hershall Turtle', nicknames: ['Hershal'] },
        { name: 'Abe Makaveli', displayName: 0, assumeServer: 'whitelist' },
        { name: 'Abe Moe', displayName: 0, assumeServer: 'public' },
        { name: 'Abraham Mohammed' },
    ],
    IzaEleonora: [
        { name: 'Ylva Sjögren', factions: ['Saints'], nicknames: ['Sjogren'], displayName: 1 },
    ],
    izzidizzy: [
        { name: '[Deputy] Ruby Hope', factions: ['Police'], displayName: 2 },
    ],
    Jaakuvt: [
        { name: 'Klaus Kane', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    JaboodyShow: [
        { name: 'Jerry Curl', displayName: 0 },
        { name: 'Derrick Derpman' },
        { name: 'Vincent' },
    ],
    Jack: [
        { name: 'Jack Cortair', factions: ['Besties'], nicknames: ['Cookie', 'Galleta'], assumeServer: 'whitelist' },
        { name: 'Jack Cortair', factions: ['Gangton'], nicknames: ['2.0', reg(/\bpimp|pimp\b/)] },
        { name: 'Dez Wright', factions: ['Besties'], nicknames: ['Doofy', reg(/\bdez/)], displayName: 1 },
    ],
    Jackhuddo: [
        { name: 'Shane Powers', factions: ['Seaside'], nicknames: ['ShaneO', 'ShanO'] },
        { name: 'Hubbo Samson' },
    ],
    Jadez: [
        { name: '? "Mother Midnight" ?' },
    ],
    jakenbakeLIVE: [
        { name: 'Ryu Tenga' },
    ],
    Jakson: [
        { name: 'James Malding', factions: ['Manor'], nicknames: ['Jim'], displayName: 1 },
    ],
    JarJarBloo: [
        { name: '[Officer] Marcus Miller', factions: ['Police'], assumeServer: 'public' },
    ],
    jason_plays_games: [
        { name: '[Judge] Norman Adams', factions: ['DoJ', 'Rooster'], displayName: 2 },
    ],
    jastatank: [
        { name: 'Larry Jonson', factions: ['Italian Mafia'], displayName: 0 },
    ],
    Javaaaa: [
        { name: 'Joseph Yorinobu', nicknames: ['Majima', 'Goro'], displayName: 3 },
        { name: 'Lillia Claurel' },
    ],
    JavaShorty: [
        { name: '[Deputy] Shelby Lane', factions: ['Police'], nicknames: ['588'], displayName: 1 },
    ],
    jay4871: [
        { name: 'Dave Perry', displayName: 0 },
    ],
    JayAitch: [
        { name: 'Alex "Lil Cap" Söderberg', factions: ['BBMC'], nicknames: ['Soderberg', 'Cap'], displayName: 0, assumeServer: 'whitelist' },
        { name: '[Deputy] Roger S', factions: ['Police'], nicknames: ['546'], displayName: 1 },
        { name: 'Lil Strap', displayName: 0, assumeServer: 'public' },
    ],
    JayAye: [
        { name: "James O'Neil", factions: ['Saints'], nicknames: ['Jay'], displayName: 0 },
    ],
    Jayce: [
        { name: 'Lil Loco', factions: ['Vagos'], displayName: 0 },
        { name: 'Riley Johnson' },
        { name: 'Pepe Roni', displayName: 0 },
        { name: 'Molly Minaj', displayName: 0 },
        { name: 'Robert "Mr. Rodgers" Rodgers' },
    ],
    jayplays: [
        { name: 'Jay Martin', factions: ['Manor'], nicknames: ['Jay'], displayName: 1 },
    ],
    jdot: [
        { name: 'Andrew "Drew" Jackson', factions: ['GSF'] },
        { name: 'Miles Landon', factions: ['Pegasus'], assumeServer: 'whitelist' },
        { name: 'Miles Landon', nicknames: ['451'], assumeServer: 'public' },
        { name: 'Jake LaMotta', displayName: 0 },
    ],
    jeimiru: [
        { name: 'David Jackson', factions: ['Hydra Gang', 'Harmony'], nicknames: ['Benz'], displayName: 3 },
    ],
    Jellypeanut: [
        { name: 'Rai "Juuls" Cumberwoood' },
        { name: '[Prince] Habib Khalid' },
    ],
    Jennybeartv: [
        { name: '[Peacekeeper] Peach Chee', factions: ['Police'], displayName: 1 },
        { name: 'Peachingle Dan', factions: ['Dans'] },
    ],
    jennylouise1997: [
        { name: '[Deputy] Louise Campbell', factions: ['Police'] },
        { name: 'Jenny Smith', displayName: 0 },
    ],
    JerseysGhost: [
        { name: 'Antonio \'KOLD\' Valentino', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    jess_tation: [
        { name: 'CJ Parker' },
    ],
    jessbleck: [
        { name: '[Deputy] Jessie Dallas', factions: ['Police'], assumeServer: 'public' },
    ],
    jessimiyaseo: [
        { name: 'Jessi Adler', factions: ['ASRR'], displayName: 0 },
    ],
    jettskiiee: [
        { name: 'Xavier "Xay" Sin', factions: ['Independent', 'CBPD', 'Rooster'] },
    ],
    Jfourmess: [
        { name: 'Vince Watson', displayName: 0 },
    ],
    jimmytulip: [
        { name: 'Wayne Biggaz', factions: ['Street Team', 'Chang Gang'], nicknames: [reg(/\bwe+y+n/), reg(/\bwayne/)], leader: true },
        { name: 'Wayne Biggaz', factions: ['Gangton'], nicknames: ['2.0'] },
    ],
    JinxerTTY: [
        { name: 'Brandon Bowers', nicknames: [String.fromCharCode(68, 117, 109, 98, 102, 117, 99, 107)], displayName: 3 }, // -_-
    ],
    JJFried: [
        { name: '[Peacekeeper] Jace Barter', factions: ['Police'] },
        { name: 'Ace Carter', factions: ['Hydra Gang', 'BCG'] },
    ],
    JJLakee: [
        { name: 'Jay Jarvis', factions: ['Hydra Gang', 'Harmony', 'Pegasus'], nicknames: ['JJ', 'MG'], displayName: 0 }, // facebook
    ],
    JoblessGarrett: [
        { name: 'Garrett Jobless', factions: ['Chang Gang'] },
        { name: '[Officer] Garry Berry', factions: ['Police'] },
    ],
    Joeeigel: [
        { name: '[Officer] Arthur MacNee', factions: ['Police', 'Rooster'], displayName: 1 },
    ],
    JoeSmitty123: [
        { name: '[Officer] Michael Murphy', factions: ['Police'] },
    ],
    Jogiiee: [
        { name: 'Emma Gaine', factions: ['Medical'], displayName: 1 },
        { name: '[Officer] Piper Paisley', factions: ['Police'] },
        { name: 'Jessie Jugg' },
        { name: '[Dispatch] Penny Schildt', factions: ['Police'] },
        { name: 'Eva Wall' },
        { name: '[Lawyer] Maggie Kayden', factions: ['DoJ'] },
    ],
    JonLaw_: [
        { name: 'Jon Joyce', factions: ['Manor'], nicknames: ['Kong', 'Kong Joyce', 'Pookie'], displayName: 0 },
    ],
    jonnoruk: [
        { name: 'Max Brown', factions: ['Manor'], nicknames: ['Stoner'], displayName: 0 },
    ],
    JonnyRotten: [
        { name: 'Billy Phresh', factions: ['Street Team', 'Chang Gang'], displayName: 0 },
    ],
    Jonthebroski: [
        { name: 'Denzel Williams', factions: ['Cleanbois', 'Lang Gang', 'Limelight', 'Pegasus', 'Rooster'], nicknames: ['The "Cleaner"', 'Presidente'] },
        { name: '[Deputy] Johnny Divine', factions: ['Police'], displayName: 0 },
        { name: 'Broskingle Dan', factions: ['Dans'] },
        { name: '[Senator] Sean Davis', factions: ['DoJ'], leader: true, nicknames: ['Senate'] },
        { name: 'Dio Ivanov', factions: ['Russians'] },
        { name: 'Holden D. Block', factions: ['ASRR'], displayName: 0 },
    ],
    JoshOG: [
        { name: 'Mario Le-Pipe', factions: ['Chang Gang'], affiliate: true, displayName: 0 },
    ],
    JostQQ: [
        { name: 'Jost Zueger', factions: ['Rooster', 'Tuner Shop'], displayName: 0 },
    ],
    JOVIAN: [
        { name: '[Deputy] Billiam Williams', factions: ['Police'], displayName: 1 },
    ],
    JPeavy: [
        { name: 'Dante Thomas', factions: ['HOA'], displayName: 0 },
    ],
    JPF_14: [
        { name: 'Jay Martin', factions: ['Manor'], displayName: 0 },
    ],
    JPKMoto: [
        { name: '[Clerk] Odessa Pearson', factions: ['DoJ'], displayName: 1 },
        { name: 'Nora Dupres' },
        { name: 'Zee Nanakaze Mathers' },
    ],
    JR__H: [
        { name: '[Lawyer] Lou Pohl', factions: ['DoJ'], displayName: 1 },
    ],
    JRandyDL: [
        { name: 'Wyatt Jones', factions: ['BBMC'], displayName: 0 },
    ],
    Jubby: [
        { name: '[Deputy] Ricardo Perez', factions: ['Police', 'Burger Shot'], displayName: 1 },
    ],
    Judd: [
        { name: 'Judd Lincoln', factions: ['Chang Gang'] },
        { name: '[Judge] Coyote Russell', factions: ['DoJ'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Judd Lincoln', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Reverend I.M. Voland', factions: ['Dark Web'] },
    ],
    juelzzz: [
        { name: 'Maria Estrella Duarte', factions: ['Vagos'], nicknames: [reg(/\be+s+t+r+e+l/)], displayName: 2 },
    ],
    Juggs: [
        { name: 'Sidwig Crawshank', factions: ['Royal Mafia'], nicknames: [reg(/\bsidwig/)], displayName: 1, leader: true },
        { name: 'Lenny Large', nicknames: [reg(/\blenny/)], displayName: 0 },
        { name: 'Traevon Williams', nicknames: ['The Barber'], displayName: 3 },
    ],
    JukeBoxEM: [
        { name: 'Tony Foster' },
        { name: 'Shane Jones', factions: ['DoC'] },
    ],
    Julian: [
        { name: 'Julian Santorno', factions: ['Besties'], assumeServer: 'whitelist' },
        { name: '[Officer] Octavius Scarpetta', factions: ['Police'], nicknames: ['Octo', 'Scar', 'Oct'], displayName: 3 },
        { name: 'Julian Santorno', factions: ['Independent'], assumeServer: 'public' },
        { name: '[Officer] Jules Scarpetta', factions: ['Police'], nicknames: [reg(/\bscar/)], displayName: 1, assumeServer: 'public' },
    ],
    JustaMinx: [
        { name: 'Mercy Peggers' },
    ],
    JustDurant: [
        { name: 'Toni Balbani', factions: ['Dons'], displayName: 0 },
    ],
    JustenTymes: [
        { name: 'Blanden Haster', factions: ['HOA'], displayName: 1 },
    ],
    justFritz: [
        { name: 'Fritz Ericson', factions: ['Mayhem MC'] },
    ],
    JustJambaa: [
        { name: 'La Flare Davis', factions: ['RUST'], nicknames: ['La Flare'], displayName: 4 },
    ],
    JustJamie: [
        { name: '[Peacekeeper] George Lawson', factions: ['Police'], nicknames: ['592'] },
        { name: 'Tommy Cruizer', factions: ['Tuner Shop'] },
        { name: 'Jamie Bee', factions: ['Self Insert'], displayName: 0 },
    ],
    JustPenchi: [
        { name: 'Casper Clock', factions: ['Prison'], nicknames: ['Plague Doctor'], displayName: 3 },
    ],
    K3NJ1N: [
        { name: '[Deputy] Kenji Hatake', factions: ['Police'], displayName: 2, assumeServer: 'public' },
    ],
    Kaceytron: [
        { name: 'Bobbi Jo', displayName: 0 },
    ],
    Kainalo: [
        { name: 'Risto Suolamies' },
    ],
    kalebtheketoguido: [
        { name: 'Martin Haribo', factions: ['Manor'], nicknames: ['Marty'], displayName: 0 },
    ],
    KamEU: [
        { name: 'Jack Bates', factions: ['Independent'], nicknames: ['Billy'], displayName: 3 },
    ],
    Kangaro0: [
        { name: '[Peacekeeper] Jimmy Frost', factions: ['Police'] },
    ],
    KaoruHare: [
        { name: '[Therapist] Kizzy Neveah', factions: ['Medical'] },
    ],
    KaoticaXD: [
        { name: 'Victoria "Vivi" Veine', factions: ['HOA'] },
    ],
    kappatalmoose: [
        { name: 'Rick Tames', factions: ['GSF'], nicknames: ['Microphone'], displayName: 0 },
    ],
    Kari: [
        { name: 'Karina Dawn', factions: ['Harmony'], nicknames: ['crim', 'criminal', 'robbing', reg(/\bkarina/)] },
        { name: '[Deputy] Mina Price', factions: ['Police'] },
        { name: '[EMS] Khloe Brooks', factions: ['Medical'] },
    ],
    karlnetwork: [
        { name: 'Jacob Karlson', displayName: 0 },
    ],
    Karma: [
        { name: 'Bobby Johnson', displayName: 0 },
    ],
    karnt1: [
        { name: 'Arush', factions: ['GSF'] },
    ],
    KatAudeo: [
        { name: '[Dr.] Lucy Janis', factions: ['Medical'] },
        { name: 'Charlotte Thomas', nicknames: ['Lottie'], displayName: 3 },
    ],
    Kate: [
        { name: 'Nancy Drew', factions: ['Lang Gang', 'Britney Gang'] },
        { name: '[Officer] Veronica Mars', factions: ['Police'], nicknames: ['593'] },
        { name: 'Muriel Gallstaff', displayName: 1 },
    ],
    KateC: [
        { name: 'Kit Archer', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    KatFires: [
        { name: 'Novah Walker', factions: ['Chang Gang'] },
        { name: '[Deputy] Ensley Alton', factions: ['Police'], nicknames: ['521'], displayName: 1 },
    ],
    KatieBunny94: [
        { name: '[Dr.] Luna Rivera', factions: ['Medical'], displayName: 1 },
        { name: 'Bree McNab', displayName: 0 },
    ],
    KattValkyrie: [
        { name: '[EMS] Valkyrie Sunshot', factions: ['Medical'] },
        { name: 'Katt Vincent' },
    ],
    kaylynstagram: [
        { name: 'Eleanor West', displayName: 1 },
    ],
    Keeno: [
        { name: 'Kyle Brovloski', displayName: 0, assume: 'assumeOther' },
    ],
    kels_corner: [
        { name: 'Victor Blaze', factions: ['SSB'], displayName: 0, assumeServer: 'public' },
    ],
    KelsKatz: [
        { name: 'Lilian "Lily" Mackenzie', factions: ['GSF'] },
    ],
    Kemony: [
        { name: 'Susie Carmichael', factions: ['Hydra Gang'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Ride Along] Alice Watson', factions: ['Police'], displayName: 2 },
        { name: '[Officer] Susie Carmichael', factions: ['Police'], nicknames: ['Copmichael'], assumeServer: 'public' },
    ],
    Kennasofly: [
        { name: 'Jupiter Adams', factions: ['Tuner Shop'], displayName: 0 },
    ],
    KevinRamm: [
        { name: 'Kevin Ram', factions: ['Besties'], displayName: 0 },
    ],
    KezieEve: [
        { name: 'Ghost Storm', factions: ['GSF'] },
    ],
    KguGaming: [
        { name: 'Mr. Ratchet', displayName: 2 },
        { name: 'Pablo Loco', factions: ['Vagos'], displayName: 0 },
        { name: 'Ruckus ?', factions: ['SSB'], nicknames: ['Uncle Ruckus'], displayName: 3 },
    ],
    KhaosAdam: [
        { name: 'Adam Ababwa', assume: 'assumeOther', displayName: 0 },
    ],
    KielbasaOP: [
        { name: 'Jayden Dennis', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    KiingJoee: [
        { name: '? ?', assume: 'neverNp' },
    ],
    KillrBeauty: [
        { name: 'Catherine Scratch', factions: ['Lost MC'], nicknames: ['Cat'], displayName: 3 },
        { name: '[Deputy] Ada Grille', factions: ['Police'], nicknames: ['Gril', 'Grill'] },
    ],
    KiloAU: [
        { name: '[Deputy] Robert Anderson', factions: ['Police'] },
        { name: '[Lawyer] Jason Ledson', factions: ['DoJ'] },
    ],
    Kimchi: [
        { name: 'Sun Moon', nicknames: [reg(/\bsun/), 'Korean Gang'], displayName: 0 },
    ],
    Kimmykix: [
        { name: 'April Thompson', factions: ['Pegasus'] },
    ],
    Kinamazing: [
        { name: '[Officer] Emma Dupont', factions: ['Police'], nicknames: ['Dupog'], assumeChar: true },
    ],
    kindagloomy: [
        { name: 'Vera Tea', factions: ['Vagos'] },
    ],
    King_1455: [
        { name: 'Cooch Cassidy', factions: ['Lost MC'] },
    ],
    Kingothestone: [
        { name: 'Steven Stone III', displayName: 2 },
    ],
    KinkyHobo: [
        { name: '[Lawyer] Gill Schultz', factions: ['DoJ'], displayName: 1 },
        { name: '[Officer] Max Muller', factions: ['Police'], displayName: 2 },
    ],
    KinslayerxX: [
        { name: '[Dispatch] Youjimaru Takimura', factions: ['Police'], displayName: 2 },
    ],
    kioShiMa_ff: [
        { name: 'Kio Shima', factions: ['Hydra Gang'] },
    ],
    Kitboga: [
        { name: 'Edna Moose' },
        { name: '[Deputy] Claire Annette Reed', factions: ['Police'] },
    ],
    Kite61: [
        { name: 'Rusty Johnson' },
    ],
    Kiva: [
        { name: 'Andi Jones', factions: ['South Cypress', 'HOA'], nicknames: ['Ant'], displayName: 1 },
        { name: 'Natalie ?', nicknames: ['not andi', 'not ant'], displayName: 1 },
        { name: 'Navi Gates' },
    ],
    Kiwo: [
        { name: '[Peacekeeper] Lauren Forcer', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Officer] Maisy Graves', factions: ['Police'], assumeServer: 'public' },
        { name: 'Mia Mersion', factions: ['Pegasus'] },
        { name: 'Trish Baggs', displayName: 1 },
        { name: 'Nah Vee', displayName: 0 },
        { name: 'Evita "Mother" Nimm', factions: ['Dark Web'] },
        { name: 'Ava Ridge', nicknames: ['Silence', reg(/darkness/)] },
        { name: 'Marta Volkov' },
    ],
    Kiyocks: [
        { name: 'Kyo Lokks', displayName: 1 },
    ],
    KL33Si: [
        { name: '[Dr.] Emily Ducksworth', factions: ['Medical'], displayName: 0 },
    ],
    Klutch: [
        { name: 'Eli Porter', factions: ['Manor'], nicknames: ['Elz'], displayName: 1 },
    ],
    Kmils_: [
        { name: 'Kristian Mils', factions: ['Saints'], displayName: 0 },
    ],
    Knight_Xero: [
        { name: 'Kai B. Knight', factions: ['DoC'], displayName: 0 },
    ],
    Knotty: [
        { name: 'Guy Jones', factions: ['NBC'], displayName: 0, leader: true },
    ],
    KnuckleheadGaming: [
        { name: 'Marty Holiday', factions: ['Prison'], displayName: 0 },
    ],
    Knut: [
        { name: 'Bjorn Eiriksson' },
    ],
    koil: [
        { name: 'Otto Delmar', nicknames: ['race', 'racing'] },
        { name: 'Francis Francer', factions: ['Chang Gang'], nicknames: ['franic', 'franer', 'bwo', reg(/\bfr.n.{1,2}s|\bfran/)], displayName: 0 },
        { name: '[Trooper Chief] Kael Soze', factions: ['Police'], highCommand: true, leader: true, nicknames: ['are illegal'] },
        { name: '[Senator] Steven Barosi', factions: ['DoJ'], leader: true, nicknames: ['Senate', 'Steve'], displayName: 1 },
        { name: '[Development] Koil', factions: ['Development'], nicknames: ['Code'] },
        { name: 'Saint Jospeh', nicknames: ['Jesus', 'Joseph', 'XUJIA', 'EMC'], displayName: 0 },
        { name: 'Ray Ray', factions: ['ASRR'], displayName: 0 },
    ],
    kojoXD: [
        { name: 'Kojo ?', factions: ['Independent'], assumeServer: 'international', assumeChar: true },
        { name: 'Kojo ?', factions: ['Independent'], assumeServer: 'public' },
    ],
    KokoBananaMan: [
        { name: 'Tex Graves', factions: ['Lang Gang'] },
    ],
    Kongfue: [
        { name: 'Karl "KJ" Johnny Black', factions: ['Hades'] },
    ],
    Kookie: [
        { name: 'Kookie Louw', factions: ['Independent'] },
    ],
    Kripted: [
        { name: 'Antonio Rodrigues', factions: ['BBMC'], displayName: 0 },
    ],
    KristoferYee: [
        { name: 'Jay Que', factions: ['Rooster'], displayName: 0 },
        { name: '[Peacekeeper] Ka Chao', factions: ['Police'], displayName: 2 },
        { name: 'Kristofer Yee', factions: ['Self Insert'], displayName: 0 },
    ],
    KrisTWOfer: [
        { name: 'Jay Que', factions: ['Rooster'], displayName: 0 },
        { name: '[Deputy] Ka Chao', factions: ['Police'], displayName: 2 },
    ],
    kritacul: [
        { name: 'Devon "Dev" Jones', factions: ['GSF'] },
    ],
    KrizFrost: [
        { name: 'Kriz Khaoz', factions: ['DoC'] },
    ],
    Kunaives: [
        { name: 'Wally Veloce', factions: ['BSK'] },
    ],
    KuroKunoichi13: [
        { name: 'Natalia Omar' },
    ],
    Kurupt: [
        { name: 'Tyreke Knox', factions: ['Independent'], displayName: 0 },
        { name: 'Arthur Itis', factions: ['Gangton'], nicknames: ['2.0'] },
    ],
    Kydos___: [
        { name: "Baby O'Conner", factions: ['Wastelanders'], displayName: 0 },
    ],
    Kyle: [
        { name: 'Kyle Pred', assumeServer: 'whitelist' },
        { name: '[Officer] James Hanna', factions: ['Police'] },
        { name: '[Officer] Kyle Pred', factions: ['Police'], assumeServer: 'public' },
        { name: 'Dominic Toretti', displayName: 0 },
        { name: 'Jaguar Toretti', displayName: 0 },
        { name: 'Alabaster Slim', nicknames: ['Pimp'], displayName: 2 },
        { name: 'Kegal Dan', factions: ['Dans'] },
        { name: 'Brett Biggledoinks' },
        { name: 'Notta Local', factions: ['SSB'], nicknames: ['Balla Gang'], displayName: 3 },
        { name: 'Marty Oldmen', displayName: 0 },
        { name: 'Lee Harvey Tinker', displayName: 0 },
        // { name: 'Cop Killa', displayName: 0 },
        { name: 'Kyle Kyle', factions: ['Self Insert', 'One Life'], displayName: 1 },
        { name: 'Sigfried Porsche', nicknames: ['porshe'], displayName: 0 },
        { name: 'Hampton Brandon', nicknames: ['TTD', 'Ten Toes Down'] },
        { name: 'Tame "The Mandalorian" Saxon', nicknames: ['Mandolorian'] },
        { name: 'Hat Carl', nicknames: ['The Matador'], displayName: 0 },
        { name: "[Lawyer] Rory O'Banion", factions: ['DoJ'], displayName: 0 },
        { name: 'Wyatt Derp', factions: ['Lost MC'] },
        { name: 'Pal Gore' },
    ],
    KylendOnTwitch: [
        { name: 'Kylend LaCroix', factions: ['GSF'], assumeServer: 'public' },
    ],
    kyliebitkin: [
        { name: '[Peacekeeper] Brittany Angel', factions: ['Police'], nicknames: ['Angle', 'Captain'] },
        { name: 'Mary Mushkin', factions: ['Tuner Shop'], nicknames: ['Red Devil', 'R3d Devil'], displayName: 1 },
        { name: 'Sarah Reynolds', displayName: 0 },
        { name: 'Kylie Bitcoin', factions: ['Self Insert'], displayName: 0 },
    ],
    KYR_SP33DY: [
        { name: 'Moe Litman', displayName: 0, assume: 'assumeOther' },
    ],
    kytolee: [
        { name: 'Juan Cuervo', factions: ['Vagos'], displayName: 0 },
    ],
    LadyHope: [
        { name: '[Peacekeeper] Lily Pond', factions: ['Police'] },
        { name: 'Isabella "Izzy" Carrington', factions: ['Harmony'] },
    ],
    LadyLynxx: [
        { name: 'Jaed Smith', factions: ['Saints'], displayName: 0 },
        { name: '[Officer] Saphira Sinclair', factions: ['Police'], nicknames: ['Saph', '597'] },
    ],
    LAGTVMaximusBlack: [
        { name: 'Outto-Tune "OTT" Tyrone', factions: ['BSK'], nicknames: [reg(/\b[O0]\S?TT/)], leader: true, assumeServer: 'whitelist' },
        { name: '[Deputy] Max Prime', factions: ['Police'], nicknames: ['Twija'], displayName: 2 },
        { name: 'Outto-Tune "OTT" Tyrone', factions: ['Independent'], nicknames: [reg(/\b[O0]\S?TT/)], assumeServer: 'public' },
        { name: '[Officer] Twija Prime', factions: ['Police'], assumeServer: 'public' },
    ],
    Lairdo_: [
        { name: 'Henry King', factions: ['Rooster'] },
    ],
    lancerofficial: [
        { name: 'Lance Silva', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    LargeSalt: [
        { name: 'Ivan Samarsky', factions: ['Seaside'], displayName: 0 },
    ],
    LarryX7: [
        { name: 'Jose "Cousin" Luis Santana', factions: ['Vagos'] },
    ],
    LaS_: [
        { name: 'Jesse "Baby Joker" Morales', assume: 'assumeOther' },
    ],
    Lastbrokenoath: [
        { name: '[Dr.] Alexander Blake', factions: ['Medical'], displayName: 2 },
        { name: '[Dispatch] L Tailor', factions: ['Police'], nicknames: ['D-21'], displayName: 2 },
    ],
    Leg0s: [
        { name: 'Clarke Bishop' },
    ],
    LetterJaye: [
        { name: 'Posy Florian', factions: ['Burger Shot'], nicknames: ['P O S Y'] },
        { name: '[Dr.] Dahlia Fey', factions: ['Medical'] },
    ],
    LeWolfy: [
        { name: '[Officer] Dante Wolf', factions: ['Police', 'Stable'] },
    ],
    liamdpt: [
        { name: 'Kai Martin', factions: ['Manor'], nicknames: ['ERP King'], displayName: 1 },
    ],
    LiftedGN: [
        { name: 'Walter Melon', factions: ['GSF', 'Burger Shot'], displayName: 0 },
    ],
    Likochka71: [
        { name: '[Lawyer] Juno Lemieux', factions: ['DoJ'], displayName: 2 },
    ],
    LillyTenshine: [
        { name: '[Officer] Lilly Wills', factions: ['Police'], displayName: 2 },
    ],
    lilypichu: [
        { name: 'Tulip Peach' },
    ],
    LINK_EZ: [
        { name: 'Linkle Jones', displayName: 1 },
    ],
    LIRIK: [
        { name: 'Clayvon Barksdale', factions: ['Cleanbois', 'Rooster'] },
        { name: '[Officer] Bayvon Barksdale', factions: ['Police'], nicknames: ['555'], displayName: 2 },
        { name: 'Abe Vaughn', displayName: 0 },
        { name: 'Avon Barksdale', factions: ['Cleanbois'], leader: true },
    ],
    LisaMunchy: [
        { name: '[Officer] Lisa Adkins', factions: ['Police'] },
        { name: '[Therapist] Thalia Hayes', factions: ['Medical'] },
        { name: '[Lawyer] Lees Grey', factions: ['DoJ'] },
    ],
    Lisilsanya: [
        { name: '[EMS] Lei Sanya', factions: ['Medical'], nicknames: ['Lasagna'], displayName: 0 },
    ],
    LJHUNCHO: [
        { name: 'Leon Johnson', nicknames: ['LJ'], displayName: 0 },
    ],
    Llikthead: [
        { name: 'Garion Noble', factions: ['BBMC', 'CBPD', 'Rooster'], displayName: 1 },
    ],
    lolJukebox: [
        { name: '[Officer] Shane Jones', factions: ['Police'], displayName: 2 },
    ],
    Loorara: [
        { name: 'Olivia Garcia', nicknames: ['Liv', 'Livvy', 'Olives'], displayName: 0 },
    ],
    Loqrin: [
        { name: '[Development] Loqrin', factions: ['Development'] },
    ],
    Lord_Kebun: [
        { name: 'Mr. K', factions: ['Chang Gang'], leader: true, displayName: 0, nicknames: ['Chang', 'The "Dragon"'] },
        { name: '[Deputy] Richard Richardson', factions: ['Police'], nicknames: ['585'] },
    ],
    LordJasta: [
        { name: 'Chris McGrawl' },
    ],
    LordNetloc: [
        { name: 'Carter Banx', factions: ['GSF'], displayName: 0 },
    ],
    LordSnowRP: [
        { name: 'PillBot XP', factions: ['Medical', 'Burger Shot'], displayName: 1 },
    ],
    Loserfruit: [
        { name: '[EMS] Lizzie Bien', factions: ['Medical'], assume: 'assumeOther' },
    ],
    Louuis: [
        { name: 'Sparky "SK" Kane', factions: ['Manor'], displayName: 1, leader: true },
    ],
    loveANG3L: [
        { name: 'Kendra Davis', factions: ['Vagos'] },
    ],
    Lovinurstyle: [
        { name: '[Officer] Leah Strong', factions: ['Police'], nicknames: ['531'], assumeServer: 'whitelist' },
        { name: 'Rose Edwards' },
        { name: 'Darlene ?', factions: ['DoC'], displayName: 1 },
        { name: '[Officer] Leah Strong', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    lozdog: [
        { name: 'Lilith Ailhart', factions: ['HOA'] },
    ],
    lstrictlylogicl: [
        { name: 'Ricardo Valdez', factions: ['RUST'] },
        { name: '[Peacekeeper] John Spartan', factions: ['Police'], displayName: 2 },
    ],
    Lt_Custard: [
        { name: 'Collin McKinley', factions: ['BBMC'], displayName: 0 },
        { name: '[Officer] Jerry Sweets', factions: ['Police'], nicknames: ['561'], displayName: 2 },
        { name: 'Cougar Dolly', displayName: 0 },
    ],
    Lt_Raven: [
        { name: '[Deputy] Vladimir Raven', factions: ['Police'], highCommand: true },
        { name: 'Hellfire Holden', factions: ['Lost MC'], nicknames: ['biker', reg(/hell\W*fire/)] },
    ],
    LtSerge: [
        { name: '[Judge] Serge Cross', factions: ['DoJ'], displayName: 2 },
    ],
    Lucky_RP: [
        { name: 'Marlo Stanfield', factions: ['Hades'], nicknames: [reg(/ma?rlo/)] },
    ],
    LuckyPaddy: [
        { name: '[Deputy] Paddy Luke', factions: ['Police'], displayName: 1 },
    ],
    LuckyxMoon: [
        { name: '[Peacekeeper] Blair Sutton', factions: ['Police'] },
        { name: '[Lawyer] Elizabeth Devereaux', factions: ['DoJ'] },
        { name: 'Jessica Wesker', factions: ['DoJ'] },
    ],
    ludwig: [
        { name: 'Klevin Ballsworth' },
    ],
    luka_aus: [
        { name: '[Officer] Luka Kozlov', factions: ['Police'] },
        { name: 'DeAndre Flocko', factions: ['GSF'], displayName: 0 },
        { name: 'Gazza Maloo', factions: ['Lost MC'] },
    ],
    LukeDimond: [
        { name: 'Jackson Creed', nicknames: ['Wheelchair', 'Legs'], displayName: 0 },
    ],
    Lullichiiqa: [
        { name: 'Liv Lassen' },
    ],
    luminariarayne: [
        { name: 'Ekaterina Alekseyevna', nicknames: ['Trina'], displayName: 1 },
        { name: 'Barbie Chan' },
    ],
    lunaomi: [
        { name: '[Peacekeeper] Jessie Kane', factions: ['Police'], displayName: 1 },
    ],
    LunaOni: [
        { name: '[Peacekeeper] Claire Everly', factions: ['Police'], displayName: 1 },
        { name: 'Mayumi Himura', factions: ['HOA', 'Tuner Shop'], nicknames: ['May'] },
        { name: 'Paige Luna', factions: ['Self Insert'], displayName: 0 },
    ],
    Lyndi: [
        { name: 'Violet Van Housen', factions: ['Angels'], assumeServer: 'whitelist' },
        { name: '[Officer] Willow Wolfhart', factions: ['Police'], displayName: 1 },
        { name: '[Officer] Violet Van Housen', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    Lysium: [
        { name: 'Benji Ramos', factions: ['Hades'], leader: true, nicknames: ['B'] },
        { name: '[Peacekeeper] Dean Duncan', factions: ['Police'] },
        { name: 'Maxim Pochinki' },
    ],
    M0Dmr: [
        { name: 'David Rusky', factions: ['SSB'] },
    ],
    Macaiyla: [
        { name: 'Jolene Grace', nicknames: ['Savannah'] },
    ],
    MaceyMclovin: [
        { name: 'Floki Bartram', factions: ['Lost MC'] },
    ],
    MacL0ven: [
        { name: 'Negan Graham', factions: ['Lost MC'] },
    ],
    MadameGandalf: [
        { name: 'Stephanie "Sooty" Gamwich', factions: ['Burger Shot'] },
    ],
    madbush: [
        { name: '[Lawyer] James Haze', factions: ['DoJ'], nicknames: ['Jim'], displayName: 2 },
    ],
    Madmoiselle: [
        { name: '[Therapist] Pixie Plum', factions: ['Medical'] },
    ],
    Madoreline: [
        { name: '[Officer] Elizabeth Reed', factions: ['Police'] },
    ],
    MaestroPD: [
        { name: 'Muten "Roshi" Roushi', factions: ['Burger Shot', 'Clean Cartel'] },
    ],
    MagentaTM: [
        { name: 'Russel Harrington', factions: ['Clean Cartel'], displayName: 0 },
    ],
    Maggna: [
        { name: '[EMS] Mari Jones', factions: ['Medical'], nicknames: ['MJ'], displayName: 3 },
    ],
    MalevolentReisu: [
        { name: 'Trey Walker', factions: ['Mayhem MC'], displayName: 0 },
    ],
    MaliciousRP: [
        { name: 'Jericho Black', factions: ['DoC'] },
    ],
    malikouthere: [
        { name: 'Tito Conchas', factions: ['Vagos'] },
    ],
    manax: [
        { name: 'Michael "Mike" Manx', factions: ['Besties'] },
    ],
    ManteegoTV: [
        { name: 'Dougie Mane', factions: ['NBC'], displayName: 0 },
    ],
    Mantis: [
        { name: '[Sheriff] Domenic Toretti', factions: ['Police'], leader: true },
        { name: 'Jackson Caldwell', factions: ['Frat'], displayName: 0 },
        { name: 'Ike Block', factions: ['ASRR'], displayName: 0 },
        { name: '[Lawyer] Jerry Callow', factions: ['DoJ'], displayName: 1 },
        { name: 'Pepe Silvia' },
    ],
    mAnYw: [
        { name: '[Peacekeeper] Jonathan Hale', factions: ['Police'] },
    ],
    marcobc: [
        { name: '? ?', assumeServer: 'international' },
    ],
    Markiplier: [
        { name: 'Stan Wheeler' },
    ],
    markuu: [
        { name: '[EMS] Leonardo Sand', factions: ['Medical'], nicknames: ['Leo'], displayName: 3 },
    ],
    Marsziipan: [
        { name: '[Deputy] Misa Price', factions: ['Police'] },
    ],
    MartinCreek: [
        { name: 'Bertha Clark', factions: ['Saints'] },
    ],
    MasonShortland: [
        { name: 'Clark Mason', factions: ['South Cypress'], nicknames: ['Flash'], displayName: 1 },
    ],
    MasterMisuri: [
        { name: 'Jesus Antonio Lopez Contreras', factions: ['HOA', 'Tuner Shop'] },
        { name: '[Deputy] Jeremias Jimenes', factions: ['Police'] },
    ],
    MatchaSmash: [
        { name: '[EMS] Rowan Hunter', factions: ['Medical'] },
    ],
    MattEU: [
        { name: 'Matthew "Matt" Antov', factions: ['Manor'], nicknames: ['Matt'], displayName: 0 },
    ],
    Mattie: [
        { name: '[Dr.] Mikhail Keehl', factions: ['DoC', 'Medical'], displayName: 2 },
        { name: 'Titus Tsukasa', factions: ['BSK'], displayName: 0 },
    ],
    MattRP: [
        { name: '[Trooper] Jack Ripley', factions: ['Police'] },
    ],
    McconnellRet: [
        { name: '[Agent] Rhett "Bench Guy" McConnell', factions: ['Police'], nicknames: [reg(/\bbench/)] },
    ],
    mdrakoo: [
        { name: 'Drake "OP" Morgan' },
    ],
    Meatwrist: [
        { name: 'Chad "Chodie" Brodie', factions: ['Chang Gang'] },
        { name: '[Deputy] Marshall Gustavsen', factions: ['Police'], nicknames: ['Gustav', '503', 'Chodie Cop'], displayName: 2 },
    ],
    meeka_a: [
        { name: '[EMS] William "Middy" Haze', factions: ['Medical'] },
    ],
    MegaTruong: [
        { name: '[Deputy] Roy Armstrong', factions: ['Police'], displayName: 1 },
    ],
    MEKABEAR: [
        { name: '[Peacekeeper] Amber Gold', factions: ['Police'] },
        { name: 'Erin Cox', nicknames: ['c:', 'E R I N', 'C O X'], displayName: 1 },
        { name: 'Ari Tistu', displayName: 0 },
        { name: 'Amber ?', factions: ['Self Insert'], displayName: 1 },
    ],
    Melly_Mae: [
        { name: '[Dispatch] Jessica Easton', factions: ['Police'] },
    ],
    MeMayoi: [
        { name: 'Yoi Tsukita', assume: 'assumeOther' },
    ],
    MeowBez: [
        { name: 'Bella Lux', factions: ['Manor'], nicknames: ['Bez'], displayName: 1 },
    ],
    Merald: [
        { name: 'Jaylen Carter', factions: ['Street Team', 'Chang Gang'], nicknames: ['LampPost', 'Lamp Post'], displayName: 1 },
    ],
    Merrcy: [
        { name: 'Cody Palmer', factions: ['CBPD', 'Rooster'], displayName: 0 },
    ],
    Mervin: [
        { name: 'Mervin Potts' },
    ],
    Mexi: [
        { name: '[Deputy] Clarence Williams', factions: ['Police'], displayName: 1 },
    ],
    mfWarlock: [
        { name: 'Skipper Jones', factions: ['North Cypress'], nicknames: [], displayName: 1 },
    ],
    MiamiPepe: [
        { name: '[Dispatch] Drake Wax', factions: ['Police'], displayName: 1 },
    ],
    michaelreeves: [
        { name: 'NoPixel ?' },
    ],
    Mick: [
        { name: 'Gladys Berry' },
        { name: '[Deputy] Sheldon Jones', factions: ['Police'], nicknames: ['572'], displayName: 1 },
    ],
    Middleditch: [
        { name: 'Stanley Tuttles' },
    ],
    Miggitymaan: [
        { name: '[Officer] Miguel Maan', factions: ['Police'], displayName: 1 },
        { name: 'Jayce Wyatt' },
        { name: '[Officer] Damien Alexander', factions: ['Police'] },
        { name: '[Deputy] Kurt Leonard', factions: ['Police'], assume: 'assumeNpNoOther' },
    ],
    Mikeemod: [
        { name: '[Development] Mikeemod', factions: ['Development'] },
        { name: 'Ratlord', nicknames: ['Raccoon', 'Racoon', 'Rat Lord'] },
    ],
    MikeTheBard: [
        { name: 'Hubcap Jones', factions: ['Lost MC'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jack Nova', displayName: 0 },
        { name: '[Ranger] Manny Multchbottom', factions: ['Police'], displayName: 0, assumeServer: 'public' },
    ],
    MikeTheMarksman: [
        { name: '? ?', assume: 'neverNp' },
    ],
    mikezout14: [
        { name: '[Peacekeeper] Michael Rodgers', factions: ['Police'], assume: 'assumeNpNoOther' },
    ],
    MikkisaurusRex: [
        { name: 'Jessica Hilton', factions: ['Medical'] },
    ],
    Milsera: [
        { name: 'Mono Block', factions: ['ASRR'] },
    ],
    MiltonTPike1: [
        { name: 'Kiki Chanel', assumeServer: 'whitelist' },
        { name: '[Officer] Kiki Chanel', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Dob Darker', nicknames: ['Dice is Right', 'Right Dice'], displayName: 0 },
        { name: 'Giovanni Atello', displayName: 1 },
        { name: 'Hazel Nutte' },
        { name: 'G.G. Nolan', displayName: 0 },
        { name: 'Maybelle Ippi' },
        { name: 'Merlin Edmondstoune' },
        { name: 'William "Bill Ding" Ding', nicknames: ['Bill'] },
    ],
    MiN1Moo: [
        { name: 'Wong Hung', displayName: 1 },
    ],
    Minakorocket: [
        { name: 'Mina Rocket', factions: ['Rooster'], displayName: 0 },
    ],
    MinervaMaat: [
        { name: '[Peacekeeper] Minerva Maat', factions: ['Police'], displayName: 1 },
    ],
    Ming: [
        { name: 'Ming Jingtai', factions: ['Besties'], assumeServer: 'whitelist' },
        { name: 'Ming Jingtai', factions: ['Gangton'], nicknames: ['2.0'] },
        { name: 'Ming Jingtai', factions: ['Besties'], leader: true, assumeServer: 'public' },
        { name: 'Boon Bundy', displayName: 0, assumeServer: 'public' },
        { name: '[Officer] Jing Mingtai', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    miniminter: [
        { name: 'Peter Shufflebottom', displayName: 0, assume: 'assumeOther' },
    ],
    Minky: [
        { name: 'Zoey Marie', displayName: 0 },
    ],
    MinusFive: [
        { name: '[Officer] Jason Bidwell', factions: ['Police'] },
    ],
    MIQQA: [
        { name: '[EMS] Janus Lee', factions: ['Medical'] },
    ],
    MissBombastic: [
        { name: '[Deputy] Ruby York', factions: ['Police'] },
    ],
    Moboking: [
        { name: '[Officer] Ellis Pinzon', factions: ['Police'], nicknames: ['Ronaldo'], assumeServer: 'whitelist' },
        { name: 'Aleksander Bogorov', factions: ['Hydra Gang'], nicknames: ['Aleks', 'Bogo'], displayName: 3, assumeServer: 'whitelist' },
        { name: '[Trooper] Aleks Sazkaljovich', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Elijiah "Middle E" Parks', factions: ['SSB'] },
    ],
    Moesabai: [
        { name: 'Mami Ko', factions: ['ASRR'], nicknames: ['Blue Storm'] },
    ],
    moistcr1tikal: [
        { name: 'Charles White', displayName: 0 },
    ],
    mollyrollinxo: [
        { name: 'Molly Rollin', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    mollyruu: [
        { name: 'Elizabeth "Lizzie" Byrne', factions: ['BBMC', 'Clean Cartel'], assumeServer: 'whitelist', wlBias: -1 },
        { name: '[Peacekeeper] Scarlett Royal', factions: ['Police'], displayName: 2 },
        { name: '[Deputy] Elizabeth Byrne', factions: ['Police'], nicknames: ['Lizzie'], displayName: 3, assumeServer: 'public' },
        { name: 'Aishi Ayano', nicknames: ['Yandere'], displayName: 0 },
    ],
    MOONMOON: [
        { name: '[Officer] Lenny Hawk', factions: ['Police'], nicknames: ['Renegade'], displayName: 1, assume: 'assumeNp' },
        { name: 'Bernice "Shadowlord" Caldershot', factions: ['LARPers'] },
        { name: 'Ro Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Mitch Moonmoon', factions: ['Self Insert'], nicknames: [reg(/\witch\.tv\/moonmoon\b/)], displayName: 0 },
        { name: 'Maximilian "Yung Dab" Thoroughbred', nicknames: ['The "Gnome"', 'Yung', 'Dab', 'Max'], displayName: 0 },
    ],
    Moosebrother: [
        { name: '[Peacekeeper] Louis Bloom', factions: ['Police'] },
        { name: 'Laura Gapes', factions: ['ASRR'], nicknames: ['Hooker Block', 'Hooker', 'Block'], displayName: 3 },
    ],
    MooseTaffy: [
        { name: 'Patar Bellosh', factions: ['Chang Gang'] },
        { name: '[Ride Along] Mantar Mellosh', factions: ['Police'] },
    ],
    morgeu: [
        { name: 'Morgan Jay', factions: ['BBMC'], nicknames: ['Blade'], displayName: 0 },
    ],
    moxier4wr: [
        { name: 'Mercury Frost', factions: ['Street Team'], displayName: 1 },
    ],
    mr_grimreaper_: [
        { name: '[Officer] Joe Fish', factions: ['Police'], assumeServer: 'public' },
    ],
    mrborealislive: [
        { name: 'Rudolph ?', factions: ['Burger Shot'] },
    ],
    MrFestX: [
        { name: 'Dow Jones', factions: ['BSK'] },
    ],
    MrMoonsHouse: [
        { name: '[Officer] Freddy Price', factions: ['Police', 'Burger Shot'], displayName: 2 },
    ],
    MrMouton: [
        { name: 'Chuck Mouton', displayName: 0 },
        { name: 'Han Pandler' },
    ],
    mrtimeee: [
        { name: 'Lennon "Bane" Lee', factions: ['Prison'] },
    ],
    mrwobblestwitch: [
        { name: 'Sly Lion', displayName: 0 },
        { name: 'Axel Simpleton' },
        { name: 'Garth Crooks', displayName: 0 },
    ],
    ms_star: [
        { name: 'Cora Star', displayName: 0 },
        { name: '[Peacekeeper] Skye Faye', factions: ['Police'], wlBias: -1 },
    ],
    MsTeamKK: [
        { name: 'Riley Carter', factions: ['CBPD', 'Britney Gang', 'Rooster'] },
        { name: '[Officer] Sunny Brooks', factions: ['Police'], nicknames: ['509'] },
    ],
    MurderCrumpet: [
        { name: 'Cindy Lou' },
    ],
    MurphyBraun: [
        { name: '[Judge] Judge Holden', factions: ['DoJ'] },
        { name: 'Marvin Peanut', nicknames: ['Marv'] },
        { name: '[Lawyer] Murphy Braun', factions: ['Chang Gang', 'DoJ'], displayName: 1 },
    ],
    mwat_: [
        { name: 'Storm Creed', factions: ['Wastelanders'], displayName: 0 },
    ],
    mycahpittman: [
        { name: 'Mycah Pittman', factions: ['Pink Gang'], displayName: 0 },
    ],
    Myladyballs: [
        { name: 'Veronica Garcia', factions: ['Vagos'] },
    ],
    Myles_Away: [
        { name: '[Peacekeeper] Connor Stubble', factions: ['Police'], nicknames: ['514'], displayName: 2 },
        { name: 'Whitley Booth', factions: ['Burger Shot', 'Rooster'], nicknames: ['Pirate'] },
        { name: 'Jim Littleman', displayName: 0 },
    ],
    Myth: [
        { name: 'Kyle Clements', nicknames: ['Clem', 'Clemens'], displayName: 0 },
        { name: 'Damea ?', displayName: 1 },
        { name: 'Johny Burroh', nicknames: ['Burrow', 'Burrohs'], displayName: 0 },
    ],
    Mythematic: [
        { name: 'Mike Rosoftsam', affiliate: true },
    ],
    Nakkida: [
        { name: '[Ranger] Tessa Lamb', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Tessa Lamb', factions: ['Independent'], assumeServer: 'public' },
        { name: 'Taylor "Onyx" White', factions: ['Police'] },
        { name: 'Rachel Parker' },
        { name: 'Stacy Myers', displayName: 0 },
    ],
    Natettvrp: [
        { name: 'Carlos "Carlitos" Loco', factions: ['Independent'] },
    ],
    nathankb_: [
        { name: '[Chief Judge] Alan Crane', factions: ['DoJ'], displayName: 2 },
        { name: '[Deputy] Wesley Arnold', factions: ['Police'], displayName: 2 },
        { name: 'Jov Diavol', displayName: 0 },
    ],
    Natsumiii: [
        { name: 'Natalie Sumi', factions: ['Rooster'] },
    ],
    nattfasa_: [
        { name: 'Max Wazowski', factions: ['Independent'], nicknames: ['Maxwell'], displayName: 0 },
    ],
    Navajo: [
        { name: 'Clarence Carter' },
    ],
    NebelNiek: [
        { name: 'Konrad Kraut Dogenschmirz', factions: ['RUST'] },
    ],
    neeko: [
        { name: 'Cherry ?' },
    ],
    NefariousCharm: [
        { name: '[EMS] Maya Jane', factions: ['Medical'] },
    ],
    Neloc_: [
        { name: 'Moses Khan', displayName: 1 },
    ],
    Nerdandi: [
        { name: '[Deputy] Philomena Hawthorne', factions: ['Police'], nicknames: ['Luna', 'Me'] },
        { name: 'Petunia Susan Brookshire', factions: ['Rooster'] },
    ],
    Nescoh: [
        { name: '[Dispatch] Tristan C', factions: ['Police'], displayName: 1 },
        { name: 'Deshawn King', factions: ['SSB'], displayName: 0 },
    ],
    neskRP: [
        { name: 'Oliver Crawford', displayName: 0 },
    ],
    netsirk: [
        { name: '[EMS] Nettie Machete', factions: ['Medical'] },
    ],
    neutreN: [
        { name: 'Octavio Vettel', factions: ['South Cypress'], nicknames: ['Octo', 'Goofy', 'Hypergoof', 'Octane'], displayName: 3 },
    ],
    NeveRossa: [
        { name: 'Dawn Hearte', factions: ['Lost MC', 'Medical'] },
        { name: '[Peacekeeper] Brandy Kaas', factions: ['Police'] },
    ],
    NewFaceSuper: [
        { name: 'Davey Doherty' },
    ],
    Nexa9: [
        { name: 'Meelo Graves', factions: ['RUST', 'Rooster', 'Tuner Shop'], nicknames: ['Nex'], displayName: 1 },
    ],
    Niccorazi: [
        { name: 'Douglas James', nicknames: ['Dougie', 'Fresh', 'Dougie Fresh', 'Bobcat'], displayName: 5 },
        { name: 'Eyam Job', displayName: 0 },
    ],
    Nidas: [
        { name: 'Ingevar "AK" Falk', factions: ['Besties'] },
        { name: 'Leslie Lingberg', factions: ['Lang Gang', 'Limelight', 'Cleanbois'], leader: true, nicknames: ['Ling', 'Cerberus'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Rat Boy', nicknames: ['Ratboy'], displayName: 3 },
        { name: 'Robin ?', nicknames: ['Boy Wonder'] },
        { name: 'Steve "Stiv" Adamescu', assumeServer: 'public' },
    ],
    Nikez: [
        { name: '[Development] Nikez', factions: ['Development'] },
        { name: '[Deputy] Cody Sharp', factions: ['Police'], nicknames: [reg(/\bpolice\s*m.n/)] },
        { name: 'Nicholas Simone', factions: ['Seaside'], nicknames: ['Nick', 'Nico', 'Simon'], displayName: 0 },
    ],
    NikkisARiot: [
        { name: '[Peacekeeper] Jenny Hall', factions: ['Police'], nicknames: [reg(/\bje\S{1,3}y/)], displayName: 1 },
    ],
    nismodoma: [
        { name: 'Tony Leung', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    niztopia: [
        { name: 'Aziz Abdallah', factions: ['Independent'] },
    ],
    Nmplol: [
        { name: 'Buddy Black' },
    ],
    nnsLUL: [
        { name: '[Development] nns', factions: ['Development'], assumeChar: true },
    ],
    No_Atonement: [
        { name: 'Mack Lando', factions: ['Saints'], displayName: 0 },
    ],
    nobeljt: [
        { name: 'Lucas Spade', factions: ['SOS'], displayName: 0 },
    ],
    NoElusionz: [
        { name: 'Tank Tames', factions: ['GSF'], displayName: 1 },
    ],
    noKingu: [
        { name: '[Peacekeeper] Henri King', factions: ['Police'] },
        { name: 'DaMarcus Lewis', factions: ['Tuner Shop'] },
        { name: 'Big K', factions: ['Self Insert'], displayName: 0 },
    ],
    NoraExplorer: [
        { name: 'Nunu El Nene', displayName: 1 },
    ],
    notGEEGA: [
        { name: 'Giovanna "Gigi" Gambino', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    notmerrick: [
        { name: 'Levi Rotti', factions: ['Independent'], displayName: 1 },
    ],
    NotoriousNorman: [
        { name: 'Chips Ahoy', factions: ['Rooster'] },
    ],
    Nottics: [
        { name: 'Raymundo Ortiz', factions: ['Vagos', 'Tuner Shop'], nicknames: [reg(/\br+ay/), reg(/\bmundo/)] },
        { name: 'Raul Rodriguez', nicknames: [reg(/\br+au+l/)] },
    ],
    NovalokHD: [
        { name: '[Officer] Ben Casanova', factions: ['Police'] },
    ],
    novazfov: [
        { name: 'Zeek "Apple" Kacem', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    NovellusDea: [
        { name: 'Jacyn Todd', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    NRG_Hamlinz: [
        { name: 'Darnell Simmons', displayName: 0 },
    ],
    Ntviiper: [
        { name: 'Kian Mercer', factions: ['HOA'] },
    ],
    NuFahrenheit: [
        { name: 'Boris Karishnikov', factions: ['Italian Mafia'], displayName: 0 },
    ],
    NunnYaBiznezz: [
        { name: '[Deputy] Hingle McCringleberry', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    NurEinDarki: [
        { name: 'Nolan Nicholson', factions: ['Wastelanders'], displayName: 0 },
    ],
    nxsiah: [
        { name: 'Zelaya Fernando', factions: ['Prison'], nicknames: ['Z', 'Laya'] },
    ],
    NymN: [
        { name: 'Owen Lottes' },
        { name: 'Frank Fritugo', assume: 'assumeOther' },
    ],
    NyokoSato: [
        { name: 'Skye Shields', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    o_Oakleyz_o: [
        { name: '[Deputy] Samuel Holtz', factions: ['Police'] },
    ],
    OccamsSabre: [
        { name: '[Officer] Jeffrey Bundy', factions: ['Police'], nicknames: ['451'] },
        { name: '[Lawyer] Benjamin Crane', factions: ['DoJ'], displayName: 0 },
        { name: '[Judge] Ray Montag', factions: ['DoJ'] },
        { name: 'Busta Block', factions: ['ASRR'], displayName: 0 },
    ],
    Octopimp: [
        { name: 'Chut McMillan', factions: ['LARPers', 'Rooster'], nicknames: ['Chut The Magnificent', 'Sorcerer'] },
    ],
    Odablock: [
        { name: 'Lil Baldy', displayName: 0, assume: 'assumeOther' },
        { name: 'Big O', displayName: 0 },
    ],
    OfficialTaco: [
        { name: 'Charles "Taco" Prince', factions: ['Chang Gang'], assumeServer: 'whitelist', facebook: true },
        { name: 'Charles "Taco" Prince', factions: ['Independent'], assumeServer: 'public' },
    ],
    offlinezaceed: [
        { name: 'Zaceed Skengerton', factions: ['Lang Gang'], nicknames: [reg(/\b[zs]a[skc]+[ei]*y?d/)], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Zacood Skengerson', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    OG_Tyger: [
        { name: '[Officer] Peter Frost', factions: ['Police'] },
    ],
    ogastrx: [
        { name: 'Antonio \'Diablo\' Diaz', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    ogk3nz: [
        { name: 'Marko Russetto', factions: ['Marabunta'], displayName: 0, leader: true },
    ],
    OhJayzzy: [
        { name: 'Jay "JJ" Gamble', factions: ['Hades'] },
    ],
    OhMadOne: [
        { name: '[Lawyer] Ginzu Okada', factions: ['DoJ'] },
    ],
    OllyPop: [
        { name: 'Ivy Poppins' },
        { name: 'Evee Poppins' },
    ],
    omareloff: [
        { name: 'Omar Dedon', factions: ['Independent', 'Dons'], displayName: 1, facebook: true },
    ],
    omie: [
        { name: 'Marty Banks', factions: ['North Cypress'], assumeServer: 'whitelist' },
        { name: 'Marty Banks', factions: ['Gangton'], nicknames: ['2.0'] },
        { name: '[Deputy] Sharty Banks', factions: ['Police'], displayName: 1 },
        { name: 'Marty Shanks', factions: ['Independent', 'Burger Shot'], nicknames: [reg(/\bburger/)], assumeServer: 'public' },
        { name: '[Officer] Sharty Manks', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    onebaw: [
        { name: 'Arthur Morgan', factions: ['Mayhem MC'], displayName: 0 },
    ],
    OneProtectiveFox: [
        { name: 'Hanna Baker', factions: ['DoC'], displayName: 0 },
        { name: 'Cassie Hoyt', displayName: 0 },
    ],
    OneSmolBumble: [
        { name: '[Deputy] Brielle Snowmin', factions: ['Police'], nicknames: ['594'], displayName: 1 },
        { name: '[EMS] Emery Ore', factions: ['Medical'], nicknames: ['E-55'], displayName: 1 },
        { name: 'Clover Bloom', displayName: 0 },
        { name: '[EMS] Rory Borealis', factions: ['Medical'], displayName: 1 },
    ],
    OneTapBingus: [
        { name: 'Bodhi Mack', factions: ['Seaside'] },
    ],
    ooknumber15: [
        { name: 'GGC Dev', factions: ['Independent', 'Development'], nicknames: ['Xmart', 'Mart'], displayName: 0, assumeChar: true },
    ],
    Osakanoodles: [
        { name: '[Officer] Antoine Sigel', factions: ['Police'] },
    ],
    OwenSeven: [
        { name: '[Deputy] Owen Svensen', factions: ['Police'] },
        { name: 'Tyler Dabrowski', factions: ['Frat'], nicknames: ['Bro', 'Brow', 'Brah', 'Broski', 'Browski', 'Brahski'], displayName: 0 },
    ],
    PacifistV: [
        { name: 'Merry Achi', factions: ['Rooster'], displayName: 0 },
    ],
    palin999: [
        { name: '[Peacekeeper] Chad Gable', factions: ['Police'] },
    ],
    Pancakehumper: [
        { name: 'Deacon Frost' },
        { name: 'Deacon Frost', factions: ['Gangton'] },
    ],
    panpawn1: [
        { name: '[Officer] Adam Swanson', factions: ['Police'], assumeServer: 'public' },
    ],
    Papa_Capes: [
        { name: 'Dominic Kavanagh', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    PapaChip: [
        { name: 'Channing "Chain" Turner', factions: ['BBMC'] },
    ],
    PapaDrgnz: [
        { name: 'Thur Teen', factions: ['Prison'], displayName: 0 },
    ],
    paperstackerj: [
        { name: 'Jordan Bones', factions: ['Manor'], nicknames: ['Batman'], displayName: 1 },
    ],
    Pasty: [
        { name: '[Officer] Ernest Kaminski', factions: ['Police'], displayName: 2 },
    ],
    PeachyLivv: [
        { name: 'Bambi Joyce', factions: ['Manor'], nicknames: ['Bambi'], displayName: 1 },
    ],
    Peeks: [
        { name: 'Pluto Rivers', factions: ['Independent'], displayName: 1 },
    ],
    Pengwin: [
        { name: '[Deputy] Jerry Perkins', factions: ['Police'] },
        { name: 'Stanley Wilkinson', factions: ['HOA'], nicknames: ['Stan', 'White Devil'] },
        { name: 'Dustin "Dark Shadow" Manson' },
        { name: 'Kenneth "Ken-sama" Foreman', factions: ['Burger Shot'] },
    ],
    PENTA: [
        { name: '[Peacekeeper] Randy Wrangler', factions: ['Police'], nicknames: [reg(/\bwrang/), 'Court', 'CPD'] },
        { name: '[Deputy] John Copperton', factions: ['Police'], nicknames: ['John Cop', 'SDSO'], displayName: 2 },
        { name: 'Jordan Steele', displayName: 0, nicknames: ['"Parking" God', 'Phoenix Messiah'] },
        { name: 'Ricky Robins' },
        { name: 'Bully Maguire', displayName: 0 },
        { name: 'Jimmy "El Gambino" Yougman', nicknames: ['Gamba', 'Gambling', 'Turbo', 'Spins', 'Snowball', 'Magic Hands', 'Jackie Snow', 'Jimmy Bricks', 'Plough Man'] },
        { name: 'Bob Smith', factions: ['Vagos'], nicknames: ['B0b Smith', 'B0b'], displayName: 3 },
        { name: 'Mike Block', factions: ['ASRR'], leader: true, displayName: 0 },
        { name: 'Chase Clouter', displayName: 0 },
        { name: 'Karen Karenly' },
        { name: 'Robert Penta', factions: ['Self Insert'], displayName: 0 },
        { name: 'Jane Obama', displayName: 0 },
    ],
    perqe: [
        { name: 'Peter Percocet', factions: ['BBMC'], nicknames: ['PP'] },
    ],
    peruze: [
        { name: 'Ronald "Scuffed Tony" Legarski', factions: ['ASRR'], nicknames: ['Tony', 'Ron', 'Block'] },
        { name: '[Peacekeeper] Anthony Beans', factions: ['Police'], displayName: 2 },
        { name: 'John Hobo', displayName: 0 },
    ],
    peterpark: [
        { name: 'Peener Pogue', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    peterparkTV: [
        { name: 'Peener Pogue', factions: ['Rooster'] },
    ],
    Pezz: [
        { name: '[Officer] Pez Speedwagon', factions: ['Police'], displayName: 1 },
        { name: 'Pezzy Pee' },
    ],
    phantomzz_ow: [
        { name: 'Connell MacGregor', displayName: 2 },
    ],
    Philderbeast: [
        { name: '[Dispatch] Owen Fitz-Gibbon', factions: ['Police'], displayName: 2 },
    ],
    pinkchyu: [
        { name: 'Selena Martinez', factions: ['Independent'], displayName: 1 },
        { name: 'Tiffany Smith', nicknames: [reg(/\btiff/)], displayName: 0 },
        { name: 'Sakura Haruwho', displayName: 1 },
        { name: 'Ash Scuffem', displayName: 0 },
        { name: 'Ashley Pinktrilobite', factions: ['Self Insert'], displayName: 0 },
    ],
    Plashir: [
        { name: 'Thom Yung', factions: ['Stable'], displayName: 0 },
    ],
    PlasticLittle: [
        { name: 'Parson "Frosty" Brown', factions: ['Lost MC'] },
    ],
    PMoney: [
        { name: 'P Money', factions: ['Chang Gang', 'Chaos'], displayName: 0 },
    ],
    PmsProxy: [
        { name: '[Officer] Kira Light', factions: ['Police'] },
        { name: 'Ella Stone' },
    ],
    pochesVides: [
        { name: 'Bruno LeMons', factions: ['Rooster'] },
    ],
    pokelawls: [
        { name: 'Bogg Dann' },
        { name: 'Bart Batchest', displayName: 0 },
        { name: 'Lacari Anemay' },
    ],
    pokeyou5016: [
        { name: 'Delaney Jane', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    pokimane: [
        { name: 'Jolie Paul', displayName: 0 },
        { name: 'Celine LaCroix' },
    ],
    Polaflex: [
        { name: 'Lewis Marsden', factions: ['Tuner Shop'], displayName: 0 },
    ],
    Polen: [
        { name: 'Adam "AP" Peterson', factions: ['Tuner Shop'], displayName: 0 },
        { name: '[Peacekeeper] Adrian Pearce', factions: ['Police'], displayName: 2 },
        { name: 'Martin Polen', factions: ['Self Insert'], displayName: 0 },
    ],
    Ponnhub: [
        { name: '[Therapist] Rexford Yeung', factions: ['Medical'], nicknames: ['Rex'], displayName: 3 },
    ],
    Pons: [
        { name: 'Harry Martinez', displayName: 0 },
        { name: '[Deputy] Otis Tucker', factions: ['Police'] },
        { name: '[Officer] Chet Manley', factions: ['Police'], displayName: 1, assume: 'assumeOther' },
        { name: '[Officer] Bodean Tucker', factions: ['Police'], nicknames: ['Bo'] },
    ],
    PotterTV: [
        { name: 'Ali Ababwa', displayName: 0 },
    ],
    PriddyFresh: [
        { name: 'Tupac Shakur' },
    ],
    Primal: [
        { name: '[Officer] Kareem Lyon', factions: ['Police'], displayName: 1 },
    ],
    PROD: [
        { name: 'Prod Ween', factions: ['Independent'], nicknames: ['P', 'Rod'], displayName: 1 },
    ],
    prof_frosty: [
        { name: 'Clive Anderson', factions: ['Manor'], nicknames: ['C2C'], displayName: 1 },
    ],
    Protay10: [
        { name: 'James Thompson', factions: ['Hydra Gang', 'Harmony'], nicknames: ['James "Phantom" Thompson', 'Phantom'], displayName: 4 },
        { name: '[Deputy] Jacob Specter', factions: ['Police'] },
    ],
    PsiSyn: [
        { name: '[Officer] Lucio Panini', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    Pssychotic: [
        { name: 'Jason Paul', factions: ['Lost MC'], nicknames: ['JP'] },
        { name: 'Hades', nicknames: ['Dog'] },
    ],
    ptjones: [
        { name: 'C Rock', displayName: 0 },
    ],
    PuckNatorGaming: [
        { name: 'Jack Higgins', factions: ['DoC'], displayName: 0, assume: 'assumeOther' },
        { name: 'Tate Urchips', factions: ['Prison'], displayName: 0 },
    ],
    puddledux: [
        { name: 'Jake Rake', factions: ['Prison'], displayName: 0 },
    ],
    PureToTheSport: [
        { name: 'Scooter McQueeny', factions: ['Street Team', 'Chang Gang', 'Tuner Shop'], nicknames: ['Sport'], displayName: 3 },
    ],
    Purge9090: [
        { name: 'Jack Frent', factions: ['DoC'], displayName: 0 },
    ],
    Purpose2: [
        { name: '[Officer] Percy Weaver', factions: ['Police'] },
    ],
    Pydrex: [
        { name: '[Peacekeeper] James Doakes', factions: ['Police'], displayName: 2 },
    ],
    qift: [
        { name: 'Winter Sison', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    qMARIOx: [
        { name: 'Fernando "Mario" Reyes', factions: ['Chang Gang', 'Hydra Gang', 'Chaos'], nicknames: ['"Mario" from the Barrio'] },
        { name: '[Officer] Rob Uncle', factions: ['Police'], nicknames: ['Robert'], displayName: 2 },
    ],
    Quru: [
        { name: '[Officer] Vladimir Reznik', factions: ['Police'] },
        { name: 'Pepe Ramos', factions: ['Seaside'], displayName: 0 },
    ],
    RafBull: [
        { name: 'Matthew Heisenbell', factions: ['Independent'], displayName: 0, assumeServer: 'public' },
    ],
    Ragonath: [
        { name: '[Officer] Leif Norgaard', factions: ['Police'], displayName: 2 },
        { name: 'Maxwell Devitt', displayName: 0 },
        { name: 'Ezekiel "Zeke" Stahl', factions: ['Prison'], displayName: 0 },
    ],
    Raided: [
        { name: '[Officer] Gage Draider', factions: ['Police'], nicknames: ['Dev', 'Developer', 'Development'] },
        { name: 'Wren Draider', displayName: 1 },
        { name: '[Development] Raided', factions: ['Development'] },
    ],
    raine: [
        { name: 'Penny Farthing', factions: ['Britney Gang', 'Rooster'] },
    ],
    RALLY728: [
        { name: 'Armando Hernandez', factions: ['Tuner Shop'] },
    ],
    Ramee: [
        { name: 'Ramee El-Rahman', factions: ['Chang Gang', 'BCG', 'Tuner Shop'], nicknames: ['The "Warlord"', 'The "Vulture"', 'SBS Patient-0'] },
        { name: '[Ranger] Conan Clarkson', factions: ['Police'] },
    ],
    Randeep10: [
        { name: 'Cain Bridges', factions: ['Saints'], displayName: 0 },
    ],
    Randolph: [
        { name: 'Don Dolph', displayName: 0 },
    ],
    Rasta: [
        { name: 'Dunn Robinson', assume: 'assumeOther', assumeServer: 'whitelist' },
        { name: '[Deputy] Dean Dimes III', factions: ['Police'], displayName: 2, assumeServer: 'public' },
        { name: 'Mary Livingston', displayName: 0 },
    ],
    RatedEpicz: [
        { name: 'Randy Bullet', factions: ['Chang Gang'], nicknames: ['Lazy-Eye', 'Shankz'], assumeServer: 'whitelist', facebook: false, assume: 'assumeOther' },
        { name: 'Randy Bullet', factions: ['Gangton'], nicknames: ['2.0'] },
        { name: 'Roundy Buffet', factions: ['Independent'], nicknames: ['Randy', 'Bullet'], assumeServer: 'public' },
        { name: '[Trooper] AJ Hunter', factions: ['Police'], nicknames: ['207'] },
    ],
    Raveesh1: [
        { name: 'Yahya "Yaya" Ahmed', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    Ray__C: [
        { name: 'Raymond "Ray" Romanov', factions: ['Hades', 'Cleanbois'], leader: true, nicknames: ['Ray', reg(/\brussia/)], assumeChar: true, assumeServer: 'whitelist' },
        { name: '[Officer] Raycardo Flick', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Raycardo Flick', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    Ray308win: [
        { name: '[Officer] Craig Barrett', factions: ['Police'] },
        { name: '[FIB Agent] Lyonel Winchester', factions: ['Police'] },
    ],
    RayvenEyed: [
        { name: 'Milo King', factions: ['Rooster'], displayName: 0 },
    ],
    Realzman: [
        { name: '[EMS] Connor', factions: ['Medical'] },
        { name: 'Malakai' },
    ],
    RedPotatoPlays: [
        { name: '[Officer] Rudy Romano', factions: ['Police'], assumeServer: 'public' },
    ],
    Reedy: [
        { name: 'Raul Luis-Blanco', factions: ['Hydra Gang'], displayName: 0 },
    ],
    ReelSalty: [
        { name: '[Deputy] Frank Giuliani', factions: ['Police'], assumeServer: 'public' },
    ],
    Reina: [
        { name: 'Mona Sanchez', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    Reklez: [
        { name: 'Chico Guzman', factions: ['Hades'], nicknames: [], displayName: 1 },
        { name: 'AJ', factions: ['SSB'] },
    ],
    RemdogG: [
        { name: '[Officer] Alex Suarez', factions: ['Police'], nicknames: ['549'] },
    ],
    RemiTheSiren: [
        { name: '[Dr.] Lily Harte', factions: ['Medical'], displayName: 2 },
        { name: 'Wednesday Mushkin', factions: ['HOA'] },
    ],
    Renegade93TV: [
        { name: 'Draxon Payne', factions: ['Wastelanders'], displayName: 1 },
    ],
    reno_raines: [
        { name: 'Manny McDaniels', factions: ['HOA'] },
    ],
    rerolldota: [
        { name: '[Peacekeeper] Lea Nova', factions: ['Police'], nicknames: ['Enforcer'] },
    ],
    Resurrex: [
        { name: '[Officer] Ace Crow', factions: ['Police'] },
    ],
    ReverendCatino: [
        { name: 'Rocky Topps', factions: ['Stable'], displayName: 1 },
    ],
    RevRoach: [
        { name: "Happy D'Klown" },
    ],
    Rexsair: [
        { name: 'Rexarius Bracchimus', factions: ['Hydra Gang'], nicknames: ['Rex'], displayName: 3 },
    ],
    Reychel: [
        { name: 'Aubrey Adams', factions: ['BBMC'] },
    ],
    RhiTexxy: [
        { name: 'Brook Lexi', factions: ['Lost MC'] },
    ],
    richyrevolver: [
        { name: 'Axel Drake', factions: ['Seaside'] },
    ],
    RickMongoLIVE: [
        { name: '[D.A.] Rick Mongo', factions: ['DoJ'], assume: 'assumeOther' },
    ],
    RileyRP: [
        { name: 'Bubbles Smith', factions: ['Royal Mafia'] },
    ],
    ripoozi: [
        { name: 'Larry Knox', factions: ['North Cypress'], displayName: 1 },
    ],
    Riseblap: [
        { name: 'Saleem Shakib', factions: ['RUST'] },
    ],
    RissahBear: [
        { name: 'Rissa Berry', factions: ['Besties'] },
    ],
    RiZRP: [
        { name: 'Nikita Reznikov', factions: ['Pegasus'] },
    ],
    rlly: [
        { name: '[Officer] Shelly Targaryen Smith', factions: ['Police', 'Burger Shot'], nicknames: ['Shelleh', 'Queen', '523'], displayName: 1 },
        { name: 'Kelly Smith' },
    ],
    Robbeaxe: [
        { name: '[Peacekeeper] Sally Avvocata', factions: ['Police'], displayName: 2 },
    ],
    RobotNinjaPants: [
        { name: '[Peacekeeper] Hunter Cross', factions: ['Police'] },
        { name: 'Jacob Slate', factions: ['DoJ'], displayName: 0 },
    ],
    roflgator: [
        { name: 'Robert Spowylamywanowski', factions: ['Burger Shot'], nicknames: ['Rob', 'Polish', 'Night Manager'], displayName: 3 },
    ],
    ronladd: [
        { name: 'Vince Cuzzo', factions: ['Saints'], nicknames: ['Jeffrey', 'Paint'], displayName: 0 },
    ],
    RookTM: [
        { name: '[Peacekeeper] Deacon Frye', factions: ['Police'], nicknames: ['564'] },
    ],
    Rose: [
        { name: '[Peacekeeper] Perrie Lane', factions: ['Police'] },
        { name: '[Deputy] Maggie Dean', factions: ['Police'] },
    ],
    Roxmiral: [
        { name: 'Sherry Paie', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Peacekeeper] Nikki Drewel', factions: ['Police'], nicknames: ['Drools'], displayName: 2 },
        { name: '[Ranger] Sherry Paie', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Ruby Morris' },
        { name: 'Sherry Lee' },
    ],
    royalbluesmile: [
        { name: 'Ell LeFant', factions: ['Wastelanders'], displayName: 0 },
    ],
    RudeNoodleNPC: [
        { name: 'Tee Veeman', factions: ['Burger Shot'] },
    ],
    Runyon11: [
        { name: 'Luk Zwiebel', factions: ['Wastelanders'], displayName: 0 },
    ],
    RyanRV: [
        { name: 'Jay Jones', factions: ['Rooster'], nicknames: ['JJ'], displayName: 0 },
    ],
    RyuRPG: [
        { name: 'Rafael "Raffa" Sanchez', factions: ['Marabunta'] },
    ],
    S_Palms: [
        { name: 'Kimmy Youngirl', displayName: 1 },
        { name: 'Mina Kwon', displayName: 0 },
    ],
    s0upes: [
        { name: '[Deputy] Silas Grimmer', factions: ['Police'] },
        { name: 'James "Apples" Apeller' },
        { name: 'Chadley ?' },
        { name: 'Ryder S. Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Ezekiel "Zero" Rogaine' },
    ],
    Saiiren: [
        { name: 'Ai "Egg" Musori', nicknames: ['Bitch'], factions: ['LARPers', 'Cleanbois', 'Rooster'], displayName: 0 },
        { name: '[Deputy] Yuu Gondai', factions: ['Police'], nicknames: ['Yu', 'Yoo', 'Gon Die'] },
    ],
    SAkiller: [
        { name: 'Pablo Wealth', factions: ['Chang Gang'], displayName: 0 },
    ],
    Sal_Rosenberg: [
        { name: 'Sal Rosenberg' },
        { name: 'Debo Davis', factions: ['GSF'] },
    ],
    Sams: [
        { name: 'Dimitri Barkov' },
    ],
    samtbull23: [
        { name: 'Sammy B', factions: ['Harmony'], displayName: 0 },
    ],
    saNhje: [
        { name: '[Development] saNhje', factions: ['Development'], nicknames: ['MLO'] },
    ],
    Sannmann_: [
        { name: 'Finley Milton', factions: ['BBMC'], displayName: 0 },
    ],
    Sarah_Digitally: [
        { name: 'Anna Jørgensen', factions: ['Harmony'], nicknames: ['Lilac', 'Illac', 'Jorgensen'], displayName: 3 },
    ],
    Sareff: [
        { name: '[Peacekeeper] Ashley Smith', factions: ['Police'] },
        { name: 'Paige Green' },
        { name: 'Ophelia Dawson', factions: ['BBMC'], nicknames: ['Fey'], displayName: 3 },
        { name: 'Jocelyn Wayne' },
        { name: 'Violet Noreguarde', factions: ['Vagos'], assumeServer: 'whitelist' },
        { name: '[Deputy] Paige Green', factions: ['Police'], assumeServer: 'public' },
        { name: 'Chasity Dawes' },
    ],
    sashagrey: [
        { name: 'Enza Zissou' },
    ],
    saturneighteen: [
        { name: '[Peacekeeper] Juno Sweeney', factions: ['Police'], displayName: 1 },
        { name: 'Cleo Shaw', nicknames: ['Coleslaw'], displayName: 1, assumeServer: 'whitelist' },
    ],
    SAVx: [
        { name: 'Johnny Cassle' },
    ],
    Sax850: [
        { name: 'Motya Satovksy', factions: ['Russians'] },
        { name: '[Officer] Olof Gunnarsson', factions: ['Police'] },
    ],
    Sayeed: [
        { name: 'Arush "Speedy" Patel Santana', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    SayeedBlack: [
        { name: 'Arush Patel "Speedy" Santana', factions: ['Lang Gang', 'Cleanbois'], leader: true, nicknames: ['El Jefe'] },
        { name: '[Deputy] Sayeed White', factions: ['Police'], nicknames: ['Mr. White'], displayName: 2 },
    ],
    scenri: [
        { name: 'Reno Panic', factions: ['Dons'] },
    ],
    Sciencegun: [
        { name: 'John "Turbo" Miller' },
    ],
    scotism: [
        { name: 'Mike Baldwin', factions: ['Tuner Shop'], displayName: 0 },
    ],
    ScytheX: [
        { name: 'Frankie Lorenzo', factions: ['GSF'], displayName: 0 },
    ],
    SeaNanners: [
        { name: 'Ronjulio Escjulio' },
    ],
    Selvek: [
        { name: '[Officer] Jeffrey Price', factions: ['Police', 'Burger Shot'], displayName: 1 },
        { name: '[Officer] Jack Sawyer', factions: ['Police'] },
    ],
    SerialKillerRP: [
        { name: 'Ezio Kafereska', factions: ['Street Team'] },
    ],
    Sgt_Apollo: [
        { name: 'Salem Barghouthi', factions: ['NBC'], facebook: true },
        { name: '[Officer] Aziz Sultan', factions: ['Police'], nicknames: ['Za Nose'], displayName: 1 },
    ],
    SgtApollo: [
        { name: 'Salem Barghouthi', factions: ['NBC'] },
        { name: '[Officer] Aziz Sultan', factions: ['Police'], nicknames: ['Za Nose'], displayName: 1 },
    ],
    shadiko: [
        { name: 'Alex Domino', factions: ['LARPers', 'Rooster'], displayName: 0 },
    ],
    shadowedkayla: [
        { name: 'Kayla Rose', factions: ['Royal Mafia'], displayName: 1 },
    ],
    shadowgam3rx: [
        { name: 'Jenny Ondamic', factions: ['BSK'], nicknames: ['BSQueen'], displayName: 0 },
    ],
    shafabeats: [
        { name: 'Lance "Shafa" Edwards', factions: ['Independent'] },
    ],
    shaggy_steve: [
        { name: '[Deputy] Jimmy Gordon', factions: ['Police'] },
    ],
    Sharaadrick: [
        { name: '[Peacekeeper] Marcel King', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: "W'Kabi Aku", displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Marcel King', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    ShawW0w: [
        { name: 'Garry Roche', factions: ['Burger Shot'], displayName: 0 },
    ],
    Shayeno: [
        { name: 'Ryder James Flint', factions: ['Royal Mafia'], nicknames: ['RJ'], displayName: 4 },
    ],
    SheepDog59: [
        { name: '[Officer] Mason Kennedy', factions: ['Police'], nicknames: ['545'], displayName: 2 },
    ],
    SheepieMezz: [
        { name: '[Peacekeeper] Shiran Quinn', factions: ['Police'] },
    ],
    Shiki: [
        { name: 'Vivian Vale', factions: ['CBPD', 'Clean Cartel'], displayName: 0 },
    ],
    Shindur: [
        { name: '[Deputy] Joey Keys', factions: ['Police'] },
    ],
    shiny: [
        { name: '[Officer] Honey Buns', factions: ['Police'], nicknames: ['D-21'] },
        { name: 'Pebbles ?', nicknames: ['Dog', reg(/\b(?:wee+\s*woo+)+\b/)] },
        { name: 'Clyde "Meowfurryon" Eastside', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Druid', 'Archdruid', 'Malfurryon'] },
    ],
    shlomi: [
        { name: 'Shlomi Specter', factions: ['Manor'], nicknames: ['Shmulik'], displayName: 1 },
    ],
    Shnag: [
        { name: 'Keyvon "Key" Cartier', factions: ['SSB'] },
    ],
    shodtwo: [
        { name: 'Kishawn Baker', factions: ['Street Team', 'Chang Gang'], nicknames: ['Lil Blicky'], displayName: 3 },
    ],
    Shortyyguy: [
        { name: 'Eddie Delish' },
    ],
    Shotz: [
        { name: 'Vinny Pistone', factions: ['Chang Gang', 'Chaos', 'Tuner Shop'], assumeServer: 'whitelist' },
        // { name: 'Vinny Pistone', factions: ['Independent'], assumeServer: 'public' },
        { name: '[Ranger] John Mineo', factions: ['Police'], nicknames: ['Corporal'] },
        { name: 'Mr J', factions: ['Chang Gang'], displayName: 0 },
    ],
    Shrimp_: [
        { name: 'Bradley Kickass', factions: ['Burger Shot'], displayName: 0 },
        { name: 'Jimmy Bending', displayName: 0 },
        { name: '[Mr.] Watt Son', displayName: 0 },
    ],
    shroud: [
        { name: 'Richard Hard' },
    ],
    ShrykeLP: [
        { name: 'Patrick Shryke', factions: ['Wastelanders'], displayName: 0 },
    ],
    shush_x3: [
        { name: 'Devon Shy', factions: ['SSB'], displayName: 1 },
    ],
    ShutupWave: [
        { name: '[Peacekeeper] Richard Tips', factions: ['Police'], displayName: 2 },
    ],
    Shxcky: [
        { name: 'Jay Breezy', factions: ['Seaside'], displayName: 0 },
    ],
    Sidefxmayinclde: [
        { name: 'Kerm Henson', factions: ['Burger Shot', 'Rooster'], displayName: 0 },
    ],
    sierraxmyst: [
        { name: 'Lukas Myst', factions: ['DoC'], displayName: 0 },
    ],
    SiirToast: [
        { name: 'Anton Belov', factions: ['Russians'] },
    ],
    Silent: [
        {
            name: 'Juan Carlos "Flippy" Hernandez',
            factions: ['Hydra Gang', 'Chang Gang', 'Chaos'],
            nicknames: [reg(/\bflip/), reg(/\bcrim\w*\b(?!.+\bcop)/), 'not cop', 'trying out crim', reg(/\bclaire'?s?\s*(?:boy|husb)/)],
            leader: true,
        },
        { name: '[Officer] Joel Garcia', factions: ['Police'], nicknames: [reg(/\bcop\b(?!.+\bcrim)/), reg(/\bcop\b(?:.+\bnerf)/), 'trying out cop'] },
    ],
    SilentSentry: [
        { name: 'Ron Otterman', factions: ['News'], nicknames: [reg(/🎥/)], displayName: 0 },
        { name: 'Michael Michaels Jr.', nicknames: ['MMJR'], displayName: 0 },
        { name: 'Iroquois "Snake" Plisken', displayName: 0 },
        { name: 'Ziggy Flint', nicknames: [reg(/🌿/)], displayName: 0 },
    ],
    silky_rp: [
        { name: 'Darnell "Baby D" Davis', factions: ['SSB'] },
        { name: 'Spooky Conchas', factions: ['Marabunta'] },
        { name: 'Po ?', nicknames: ['Uncle Po'], displayName: 3 },
    ],
    Simo: [
        { name: 'Reggie Might', factions: ['Hades'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Lawyer] Blake Specter', factions: ['DoJ'] },
        { name: '[Officer] Rodney Fuel', factions: ['Police'] },
        { name: '[Officer] Reggie Might', factions: ['Police'], assumeServer: 'public' },
    ],
    SimplessR6: [
        { name: 'Andino Vidal', factions: ['Independent'], displayName: 1 },
    ],
    Simplyje2ns: [
        { name: 'Jean Steele', displayName: 0 },
    ],
    SINCLVIR: [
        { name: 'Saint Clair', factions: ['Saints'], displayName: 0 },
    ],
    sips_: [
        { name: 'Tito Higgins' },
    ],
    SirPink: [
        { name: 'Reginald "Reggie" Bigglesby', factions: ['Burger Shot', 'Rooster'] },
    ],
    sirryman: [
        { name: 'Levi Colton', factions: ['Clean Cartel'], displayName: 0 },
    ],
    Skannerz_: [
        { name: 'Wayne Kerr', factions: ['Tuner Shop'], displayName: 0 },
        { name: '[Peacekeeper] Pual Greenway', factions: ['Police'], displayName: 2 },
    ],
    Skelasoldier: [
        { name: 'Raymond "Xray" Delprince', factions: ['SSB'], displayName: 0 },
    ],
    Skiliyo: [
        { name: 'Derek Thomson', factions: ['RUST', 'CBPD', 'Rooster'], displayName: 1 },
    ],
    SkiMask0n: [
        { name: 'Von Westbrook', factions: ['SSB'], nicknames: ['Vonn'], displayName: 0 },
    ],
    SkipGently: [
        { name: '[Officer] John Riggs', factions: ['Police'] },
    ],
    skippypoppin: [
        { name: 'Kevin Whipaloo', factions: ['Burger Shot'], displayName: 0 },
    ],
    Skitx0: [
        { name: 'Smino "Hitta" Brown', factions: ['GSF'], assume: 'assumeNpNoOther' },
    ],
    Skud_Oftr: [
        { name: 'Skud Oftr', displayName: 1 },
    ],
    Skushyy: [
        { name: 'Joey Violento', factions: ['Dons'], displayName: 1 },
        { name: 'Luka Malarkey', factions: ['Italian Mafia'], displayName: 0 },
    ],
    skxd07: [
        { name: '[Officer] Joshi Drake', factions: ['Police'], assumeServer: 'international' },
    ],
    sl1meW: [
        { name: 'Tommy "TicTac" Olliver', nicknames: ['Tic Tac'] },
    ],
    Slasher2099: [
        { name: '[Officer] Darrel McCormik', factions: ['Police'] },
        { name: '[K9 Trooper] Fenton', factions: ['Police'], nicknames: ['Fentons'] },
    ],
    SlightlyPoetic: [
        { name: 'Poe Dempsey', factions: ['Besties'] },
    ],
    slimeoz: [
        { name: 'Tommy “TicTac” Oliver', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    SlixGamingTV: [
        { name: 'Nico August', factions: ['RUST'] },
    ],
    SlummpyJ: [
        { name: 'Javier Diaz', factions: ['Seaside'], nicknames: ['Javi'] },
    ],
    Smaczny: [
        { name: 'Conrad Gross', assume: 'assumeOther' },
    ],
    SmithyFPS: [
        { name: 'Craig Munson', factions: ['NBC'], nicknames: ['Crackhead Craig'], displayName: 3, assume: 'assumeNpNoOther' },
    ],
    SmithyPlaysUK: [
        { name: 'Reginald Parker', factions: ['DoC'] },
        { name: 'Duke Wiggles', displayName: 0 },
    ],
    smo_och: [
        { name: 'Mike Smoore', factions: ['RUST'], displayName: 0 },
    ],
    SmokySloth: [
        { name: 'Bovice Wilkinson', factions: ['Prison'] },
        { name: 'Tayvadius "Chef" Jamarcus Livingston III', factions: ['GSF'] },
    ],
    SnekoGebiko: [
        { name: '[Deputy] Perry Willis', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    SniperNamedG: [
        { name: 'G Baby', factions: ['RUST'], displayName: 0 },
    ],
    so_sneaky: [
        { name: 'Jessie Dagger', factions: ['Wastelanders'], displayName: 0 },
    ],
    SoapFPS: [
        { name: 'Soap ?', factions: ['Royal Mafia'] },
    ],
    sock22: [
        { name: '[Peacekeeper] Richard Dark', factions: ['Police'] },
        { name: 'Napolean Dankleaf', nicknames: ['Napoleon'], displayName: 0 },
    ],
    SodaKite: [
        { name: 'Ellie Dono', factions: ['Cleanbois', 'Rooster'] },
        { name: 'Chell Phish', displayName: 0 },
    ],
    sodapoppin: [
        { name: 'Kevin Whipaloo', factions: ['Burger Shot'], leader: true, displayName: 0 },
        { name: 'Tappy "Cat" Nippers', nicknames: ['Cat'], displayName: 0 },
    ],
    Sokka_x: [
        { name: 'Finn O\'Connor', factions: ['Manor'], nicknames: ['Finn'], displayName: 1 },
    ],
    soleKEFS: [
        { name: 'Junior Meats', factions: ['BBMC'], displayName: 0 },
    ],
    SoMuchOregano: [
        { name: 'Vincent Genovese', factions: ['Rooster'], displayName: 0 },
    ],
    Soniic808: [
        { name: 'Jack Stone', factions: ['SOS'], displayName: 0 },
    ],
    SonKnuck: [
        { name: 'Patrick Desseault', factions: ['Rooster'], displayName: 0 },
    ],
    soysavy: [
        { name: 'Marissa Manicure', factions: ['Saints'], displayName: 1 },
    ],
    Sp00nerism: [
        { name: 'Harry Phartz', displayName: 0 },
    ],
    Spaceboy: [
        { name: 'James Randal', displayName: 0 },
        { name: 'Melbert "Mel" Rickenbacker' },
        { name: 'Joseph "Self Insert" Bobkylecyrmitch', displayName: 0 },
        { name: 'Adrian Block', factions: ['ASRR'], displayName: 0 },
        { name: '[Deputy] Patrick Downing', factions: ['Police'], nicknames: ['Pat'] },
        { name: 'Casey Boyd', nicknames: ['Caseboy', 'L8PD'], displayName: 0 },
    ],
    SpekCypher: [
        { name: 'Luis Fernandez', factions: ['HOA'], displayName: 0 },
    ],
    Spekel: [
        { name: 'Sonya Summers', nicknames: ['Black Betty'] },
        { name: 'Chloe Lesterol' },
        { name: '[Officer] Scarlett Winters', factions: ['Police'] },
    ],
    spicybackpain: [
        { name: 'Kray-Tor Skullfondler', factions: ['HOA'] },
    ],
    SpiderPigEthan: [
        { name: 'Marvin Chunder', factions: ['HOA'], nicknames: ['Hades'], displayName: 3 },
    ],
    SpitfireQG: [
        { name: 'Billy Walker', factions: ['Wastelanders'], displayName: 0 },
    ],
    spoty09: [
        { name: 'Staniel Raymond', factions: ['SOS'], nicknames: ['Elfie', 'Alfie'], displayName: 3 },
    ],
    Sput: [
        { name: 'Garry Smod', factions: ['DoC'], displayName: 0, assume: 'assumeOther' },
    ],
    Ssaab: [
        { name: 'Alfonso "Saab" Sebastian', factions: ['North Cypress', 'Cleanbois'], nicknames: ['Al'], displayName: 2 },
        // { name: '[Trooper] Sam Baas', factions: ['Police'], nicknames: ['Samir', 'Baasem'], displayName: 2 },
        { name: 'Ray Singha', displayName: 0 },
    ],
    SSLLAB: [
        { name: 'Ant Gaboosh', factions: ['Street Team'], displayName: 1 },
    ],
    StalwartNightmare: [
        { name: '[Deputy] Alex Night', factions: ['Police'], nicknames: ['Speedster'], assumeServer: 'public' },
        { name: '[Dispatch] Alex Night', factions: ['Police'], nicknames: ['Delta-39T', 'D-39T'], displayName: 2, assumeServer: 'whitelist' },
    ],
    StankXO: [
        { name: 'Raccoon ?', factions: ['BCG'], displayName: 1 },
    ],
    stanwilis: [
        { name: 'Trina Bergström', factions: ['Rooster'], nicknames: ['Bergstrom'], displayName: 0 },
    ],
    Stavy2hotty: [
        { name: 'Chip Green', factions: ['BCG'], nicknames: ['Tails'], displayName: 3 },
    ],
    STE_Eire: [
        { name: 'Stephen "STE" O\'Connor', factions: ['Manor'], nicknames: ['STE', 'STD', 'Irish Nightmare'], displayName: 3, leader: true },
    ],
    steamcharlie: [
        { name: '[Deputy] Sydney Bearmont', factions: ['Police'], displayName: 1 },
    ],
    Stephanerys: [
        { name: '[Peacekeeper] Patricia Mayonnaise', factions: ['Police'], nicknames: ['Patty'], displayName: 1 },
    ],
    ster: [
        { name: 'Guy Dance' },
        { name: 'Gerald Wagner', displayName: 0 },
    ],
    Sterling_live: [
        { name: '[Officer] Sterling Silver', factions: ['Police'], assumeServer: 'public' },
    ],
    StevetheEmo: [
        { name: 'Eddie Baker', factions: ['Prison'], displayName: 0 },
    ],
    StinkusKrys: [
        { name: 'Dean Gullberry', factions: ['Italian Mafia'], displayName: 0 },
    ],
    StinneKay: [
        { name: 'Sassa Raven', factions: ['Lost MC'], displayName: 0 },
    ],
    stitchybird: [
        { name: 'Daphne Tillamuck Valentino', factions: ['Lunatix'] },
        { name: 'Abigail "Abi" Sharp' },
    ],
    Stoner_Minded: [
        { name: '[Chief of Police] Frank Williams', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: '[Peacekeeper] Frank Williams', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Frankie Eastwood', displayName: 0, assumeServer: 'public' },
    ],
    StoneYEE: [
        { name: 'Stone Malone', factions: ['Street Team', 'BCG'], displayName: 1 },
    ],
    Stork1e: [
        { name: '[Officer] Luis Montoya', factions: ['Police'], displayName: 2 },
    ],
    StrawHatlol: [
        { name: 'Angel Jiménez', factions: ['SOS'], nicknames: ['Jimenez'], displayName: 0 },
    ],
    Striking_Fast: [
        { name: 'Gerard "Dewey" Hawthorne', nicknames: ['Dewie'], factions: ['Rooster'] },
    ],
    StrikingContact: [
        { name: 'Seano "The Chemist" Blackthorne', factions: ['Hades'], nicknames: ['Chemist'] },
    ],
    Stuply: [
        { name: 'Salvatore "Big Pussy" Tamburlini' },
        { name: '[Deputy] Willy Glory', factions: ['Police'] },
    ],
    SullyRP: [
        { name: 'Jack "Sully" Sullivan' },
    ],
    summit1g: [
        { name: 'Charles "Chawa" Johnson', factions: ['Chang Gang', 'Tuner Shop'] },
        { name: '[Peacekeeper] John Charleston', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Trooper] Charles Johnson', factions: ['Police'], nicknames: ['Chawa'], assumeServer: 'public' },
    ],
    Sunni: [
        { name: 'Hilda Bulking', factions: ['Tuner Shop'] },
    ],
    SuperBunneh: [
        { name: '[EMS] Mila Smoak', factions: ['Medical'] },
        { name: 'Madison "Maddy" Fox', factions: ['GSF'] },
        { name: '[Officer] Lexus Lane', factions: ['Police'], displayName: 1 },
    ],
    Sur_Lee: [
        { name: 'Mitch "Dumbass" Bader' },
    ],
    Surefour: [
        { name: 'Fred "Necrolord" Fredrick', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Necrolord', 'Ranger'] },
        { name: 'Chute D. Block', factions: ['ASRR'] },
        { name: '[Officer] Kenny Hawk', factions: ['Police'], nicknames: ['Powice'], displayName: 1 },
    ],
    Suspect: [
        { name: 'Marcos Da Silva' },
    ],
    suzster: [
        { name: 'Michael Kowalski', factions: ['BSK'], displayName: 0 },
    ],
    suzy_q: [
        { name: 'Dreah Johnson', factions: ['Britney Gang', 'Rooster'] },
    ],
    Svennoss: [
        { name: 'Barry Svensson', factions: ['LARPers', 'Cleanbois', 'Rooster'] },
    ],
    SwaggerSouls: [
        { name: 'Ace Hull', displayName: 0 },
    ],
    Sweatyx420: [
        { name: 'Darryl Gamin', factions: ['SSB'], displayName: 0 },
    ],
    SweeetTails: [
        { name: 'Sweetie Jones', displayName: 1 },
    ],
    Sweet_Anita: [
        { name: 'Marylin Hilton' },
    ],
    Swett: [
        { name: '[EMS] Keith Harris', factions: ['Medical'], displayName: 0 },
    ],
    SwiftRP: [
        { name: 'Ty Jones', factions: ['SSB'], nicknames: ['xray'], displayName: 0 },
    ],
    SwizzMB: [
        { name: 'Miguel Almerion', factions: ['Hydra Gang', 'Chang Gang'] },
        { name: '[Officer] Mervin Napoli', factions: ['Police'], nicknames: ['Merv', 'Big Merv', 'Big M', reg(/\bmerv/)], displayName: 1 },
    ],
    Sykkuno: [
        { name: 'Yuno Sykk', factions: ['North Cypress', 'Cleanbois', 'Clean Cartel', 'Rooster'], displayName: 1, assumeServer: 'whitelist', assumeChar: true },
        { name: '[Deputy] Uno Reverse', factions: ['Police'], displayName: 1 },
        { name: '[Ranger] Yuno Sykk', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    Symfuhny: [
        { name: 'Simon Fuhny', displayName: 0 },
    ],
    SyncedGamingTV: [
        { name: '[Development] Synced', factions: ['Development'] },
    ],
    Syndicate: [
        { name: 'Seven Lighthouse', displayName: 0 },
        { name: 'Alfie Hunter', displayName: 0 },
    ],
    synkuraa: [
        { name: 'Alfredo ?', factions: ['BBMC'], assumeServer: 'public' },
    ],
    SynthHunter: [
        { name: 'Hunter "Wingman" Skye', factions: ['Rooster'] },
    ],
    syph3rau: [
        { name: 'Lyon Martinez' },
    ],
    Syraphic: [
        { name: 'Elena Marilyn Vega', factions: ['Independent'] },
        { name: '[Deputy] Kyra Pierce', factions: ['Police'] },
        { name: 'Emilia Salvatore' },
    ],
    t3r0: [
        { name: '[Dr.] Andrew Ducksworth', factions: ['Medical'], displayName: 2 },
    ],
    TakanoriRuki: [
        { name: 'Allen Jones', factions: ['Prison'], displayName: 0 },
    ],
    TaliaMar: [
        { name: 'Mya ?' },
    ],
    tara_: [
        { name: 'Sarah Ableton', factions: ['RUST'] },
    ],
    Tasara22: [
        { name: 'Tuesday Phillips' },
        { name: 'Milena' },
    ],
    TashiRP: [
        { name: 'Zelda Johansson', displayName: 0 },
    ],
    TastyMintsNA: [
        { name: '[Peacekeeper] Eric Wong', factions: ['Police'] },
        { name: '[Officer] Eric Wong', factions: ['Police'], assumeServer: 'public' },
    ],
    tehbigmadbarbarian: [
        { name: '[Deputy] ? "JJ" ?', factions: ['Police'], assumeServer: 'public' },
    ],
    Tehrani: [
        { name: 'Boris Ivanov', factions: ['Russians'], leader: true },
        { name: 'Hector Guzman', factions: ['Vagos'] },
    ],
    tenGreg: [
        { name: 'Henry Goodman', factions: ['Harmony'], nicknames: ['Dinoco'], displayName: 0 },
    ],
    TenguOP: [
        { name: 'Wally Veloce' },
    ],
    TerribleJamie: [
        { name: 'Lavante "L" Lamano', factions: ['GSF'] },
        { name: 'Rob Farley', displayName: 0 },
    ],
    Test: [
        { name: 'Test6' },
    ],
    Tezibtw: [
        { name: 'Rocco Smith', factions: ['BCG'], nicknames: ['Fury'], displayName: 3 },
    ],
    TezMate: [
        { name: '[Deputy] Nicholas Riggs', factions: ['Police'] },
    ],
    TFNeraZe: [
        { name: '[Deputy] Michael Dunning', factions: ['Police'] },
    ],
    Tfue: [
        { name: 'Tucker Johnson', factions: ['Chang Gang'] },
    ],
    thaCOOP: [
        { name: '[Officer] Luke Holliday', factions: ['Police'] },
        { name: 'Coop Holliday', factions: ['DoJ'], displayName: 1 },
        { name: 'Matthew Payne', displayName: 2 },
        { name: 'Remee El-Rahman' },
    ],
    Thadrius: [
        { name: '[Deputy] Jonathan Dazzler', factions: ['Police'], nicknames: ['Johnny'], displayName: 2 },
        { name: 'Slappy McGaffey' },
    ],
    Thatblokeryan: [
        { name: 'Jaxxon Jones', factions: ['CBPD'] },
    ],
    ThatEmoPunk: [
        { name: 'Ezreal Kay-Hoss', factions: ['CBPD', 'Rooster'], nicknames: ['EZ', 'E.Z'] },
    ],
    ThatGuyGP: [
        { name: 'Jamal Abdul Jabbar', factions: ['Independent'], displayName: 1 },
        { name: 'Maz Razi', factions: ['Dons'], nicknames: ['Uncle Tony', 'Uncle T'], displayName: 3 },
    ],
    the_halfhand: [
        { name: 'Jack "Sully" Sullivan', factions: ['Rooster'] },
        { name: '[Officer] Oscar Fitzpatrick', factions: ['Police'], nicknames: ['Fitz', 'Patrick'] },
    ],
    TheAaronShaq: [
        { name: 'Ebeneezer Mackaral Botanacus IV', factions: ['Burger Shot'], nicknames: ['Glue Guy'], displayName: 5 },
    ],
    TheAmelina: [
        { name: '[Peacekeeper] Alexandra Carlson', factions: ['Police'], nicknames: ['588'], displayName: 2 },
        { name: '[Dr.] Meredith Jenkins', factions: ['Medical'], displayName: 1 },
    ],
    TheBigMeech: [
        { name: 'Pilbis Shonly', factions: ['NBC'] },
        { name: '[Officer] Chris Kross', factions: ['Police'], nicknames: ['Krossy'] },
        { name: 'Tyler Kwando', displayName: 0 },
    ],
    TheBigXH: [
        { name: 'Jose Rodriguez', factions: ['Vagos'], nicknames: ['Lil Ese'], displayName: 3 },
    ],
    TheChief1114: [
        { name: '[Deputy] Fingle Dan', factions: ['Police', 'Dans'], displayName: 1 },
        { name: 'Chief', factions: ['Self Insert'], displayName: 1 },
    ],
    TheDasTony: [
        { name: 'Matteo Salerno', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    TheDogfather82: [
        { name: 'Lucas "Wolfy" Frank', factions: ['Vagos'] },
    ],
    TheDondi: [
        { name: 'Arthur Hammond', nicknames: ['The "Doctor"'] },
        { name: '[Officer] Delaney', factions: ['Police'] },
    ],
    TheDoubles: [
        { name: 'Peter Johnsen', factions: ['Besties'] },
    ],
    TheEazyLife: [
        { name: 'Tyler "Ty" Thompson', factions: ['Dons'] },
        { name: 'Brandon Valentino', factions: ['Pegasus'], displayName: 0 },
    ],
    theeYAIR: [
        { name: 'Yair Lamas', factions: ['Seaside'], displayName: 0 },
    ],
    TheGeekEntry: [
        { name: 'Stacey Doyle', displayName: 1 },
        { name: 'Jenn Bordeaux', nicknames: ['Frenchie', 'French'] },
    ],
    TheGoldenDunsparce: [
        { name: 'Phueng Madee', factions: ['RUST'], nicknames: ['Bee'] },
    ],
    TheHexagonist: [
        { name: '[Peacekeeper] Vincent Glass', factions: ['Police'], displayName: 2 },
        { name: 'Denis Blatovich', factions: ['CBPD'], nicknames: ['Boris'], displayName: 0 },
    ],
    Thekegs: [
        { name: 'Charles Raymond', factions: ['SOS'], displayName: 0 },
    ],
    TheKozak_: [
        { name: '[EMS] Chad Chaddington III', factions: ['Medical'] },
    ],
    theLGX: [
        { name: 'Bryce Miller', nicknames: ['BDawg'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Diego Marquez' },
        { name: 'Dave Myers', displayName: 0 },
        { name: 'Roland Nelson', assumeServer: 'whitelist' },
        { name: '[Deputy] Neil McReal', factions: ['Police'] },
        { name: '[Officer] Roland Nelson', factions: ['Police'], assumeServer: 'public' },
    ],
    TheMLGenies: [
        { name: 'Shivananand "Shivvy" Sunandrankumar', factions: ['Royal Mafia', 'Burger Shot'] },
        { name: 'Sinbad Thoor', factions: ['DoC'], displayName: 0 },
    ],
    TheMrKatMar: [
        { name: '[Ranger] Noah White', factions: ['Police'], displayName: 2, assumeServer: 'international' },
    ],
    TheOnlyWendigo: [
        { name: 'Alexandru Vasquez', factions: ['Rooster'] },
    ],
    TheRonineh: [
        { name: '[Officer] Ash Anderson', factions: ['Police'], assumeServer: 'international' },
    ],
    TheRudyDuck: [
        { name: 'Felix Klein', factions: ['Burger Shot'], displayName: 0 },
    ],
    TheStarRoom: [
        { name: 'Tommy Puff', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    thicbootyconspiracyshorty: [
        { name: 'Karli Marx', factions: ['BBMC'], displayName: 0, assumeServer: 'public' },
    ],
    Thio: [
        { name: 'Kirk Jerkems', factions: ['Stable', 'Rooster'], displayName: 0 },
    ],
    Thirteen9N: [
        { name: 'Arya Shah', factions: ['Street Team'], displayName: 1 },
    ],
    Timmac: [
        { name: '[Peacekeeper] T.J. Mack', factions: ['Police'], assumeServer: 'whitelist' },
        { name: 'Gomer Colton', nicknames: ['Gomey'], assumeServer: 'whitelist' },
        { name: 'Shaggy Dankweed', displayName: 0 },
        { name: '[Trooper] T.J. Mack', factions: ['Police'], assumeServer: 'public' },
    ],
    timmy: [
        { name: 'Orlando Jones', factions: ['Seaside'], nicknames: ['OJ'], displayName: 3 },
        { name: 'Chino G' },
        { name: 'Cardell "CJ" Jones', factions: ['SSB'] },
    ],
    TinaKitten: [
        { name: '? ?' },
    ],
    Tinker: [
        { name: '[Deputy] Theodore Tinker', factions: ['Police'] },
        { name: 'Sean Tinker', factions: ['Pegasus'], displayName: 0 },
    ],
    TinySpark: [
        { name: '[Peacekeeper] Daisy Dukakis', factions: ['Police'] },
        { name: 'Kassandra Kage', nicknames: ['Kass'] },
    ],
    TinyStunt: [
        { name: '[EMS] Bailey Jade', factions: ['Medical'] },
    ],
    tjnv_: [
        { name: 'Charli "CJ" Jones', factions: ['North Cypress'], nicknames: [], displayName: 1 },
    ],
    ToastRP: [
        { name: 'Paulie' },
    ],
    Tobii: [
        { name: '[Development] Tobii', factions: ['Development'], nicknames: [reg(/\bdev\s*(?:stuff|things|fixing|work)/)] },
        { name: 'Michael Simone', factions: ['Seaside'], nicknames: ['Architect', 'RP'], displayName: 0 },
    ],
    Tommy5oh: [
        { name: 'Pablo Santiago', factions: ['NBC'], displayName: 0 },
    ],
    Tomovids: [
        { name: 'Toe Moh', nicknames: ['Big Toe'], displayName: 3 },
    ],
    Townie: [
        { name: 'Teddy Booker', factions: ['BBMC', 'Mechanic'], displayName: 1 },
    ],
    TPLivewire: [
        { name: 'Timmy Yougman', displayName: 0 },
    ],
    Trainwreckstv: [
        { name: 'Douglas "Doug Buck" Buck', displayName: 0 },
    ],
    TranquilKJ: [
        { name: 'KJ Taylor', factions: ['Pink Gang'], displayName: 0 },
    ],
    trashedpotatopie: [
        { name: '[Officer] Cherri Blossom', factions: ['Police'], nicknames: ['512'], displayName: 2 },
        { name: 'Marie Ortiz', factions: ['Stable'], displayName: 0 },
    ],
    Traumz: [
        { name: '[Peacekeeper] Edward Thatch', nicknames: ['Captain Moosebeard', 'Moosebeard'], factions: ['Police'], displayName: 2 },
        { name: 'Tim Littleman', displayName: 0 },
    ],
    travpiper: [
        { name: 'Dhead Webster', factions: ['Besties'], nicknames: [reg(/head\b/)] },
        { name: '[Peacekeeper] William Gunner', factions: ['Police'], nicknames: ['Willy'], displayName: 2 },
        { name: 'Carlos "Cheddar" Sanchez', factions: ['HOA'] },
        { name: 'Carlos "Cheddar" Sanchez', factions: ['Gangton'], nicknames: ['2.0'] },
        { name: '[Deputy] Jason Hannah', factions: ['Police'], displayName: 1 },
        { name: 'Warren Wallace' },
        { name: '[Watch Party] travpiper', factions: ['Watch Party'], nicknames: ['monday night sports'] },
        { name: 'Charlie Colcord' },
        { name: 'Hazard' },
    ],
    traycee: [
        { name: 'Lexi Law', factions: ['Angels'] },
        { name: '[Officer] Aspen Gray', factions: ['Police'], nicknames: [reg(/a[s$]pen\b/)] },
    ],
    TTV_CaptMcGee1818: [
        { name: 'Leroy Smith', factions: ['SSB'], displayName: 1, assumeServer: 'public' },
    ],
    Turkaderk: [
        { name: 'Benji Carter', factions: ['BSK'], displayName: 0 },
    ],
    TurtleActually: [
        { name: 'Jordan Lee', factions: ['BBMC'], displayName: 0 },
    ],
    Turtledoves: [
        { name: 'Hung Jae-Min', factions: ['Rooster'], displayName: 0 },
    ],
    Turtlenumber13: [
        { name: 'Chance Zero', factions: ['Wastelanders'], displayName: 0 },
    ],
    twiggycow: [
        { name: 'Viola Ends', factions: ['Saints'], displayName: 1 },
    ],
    TwistedBones: [
        { name: 'Mark White', displayName: 0 },
        { name: 'Hank Marston', factions: ['Mayhem MC'], leader: true, displayName: 0 },
        { name: 'Marcus Black', factions: ['GSF'], displayName: 0 },
    ],
    TwistedManifest: [
        { name: 'Jack Valentino', factions: ['Lunatix'] },
    ],
    Txylorzz: [
        { name: 'Taylor Lott', factions: ['Manor'], nicknames: ['TayTay'], displayName: 1 },
    ],
    Tyger: [
        { name: "Chase O'Dell", factions: ['Street Team', 'Chang Gang'], nicknames: ['Lil Bleach', 'Bleach'], displayName: 3 },
    ],
    TylerNotNamed: [
        { name: 'Beau Bummer', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    UberHaxorNova: [
        { name: 'Siz Fulker', factions: ['HOA'], leader: true, nicknames: ['Zis', 'Ziz', 'uhnSuffer', 'mechanic', reg(/\bloans?\b/), reg(/\bsiz/)] },
        { name: '[Deputy] Barry Briddle', factions: ['Police'], nicknames: [reg(/\bbriddl/)] },
        { name: 'Toh Biggles Fitzcharles', displayName: 0, nicknames: ['Yaes'] },
    ],
    uhhMort: [
        { name: 'Morty Shaw', factions: ['Independent'], assumeServer: 'whitelist' },
        { name: 'Morty Shaw', factions: ['Independent'], assumeServer: 'public' },
    ],
    uhLuvi: [
        { name: 'Treyvon Williams', factions: ['GSF'], nicknames: ['Trey'], assume: 'assumeOther' },
    ],
    uhSnow: [
        { name: '[Trooper] Jackie Snow', factions: ['Police'] },
        { name: 'Mikey Mersion', displayName: 0 },
    ],
    Umadbrahlive: [
        { name: 'Sergio Lopez', factions: ['Marabunta'], leader: true },
        { name: 'Leonel Martinez', factions: ['Vagos'], nicknames: ['lion'], displayName: 2 },
        { name: 'Big E', factions: ['SSB'], leader: true, nicknames: ['Big L'], displayName: 0 },
    ],
    unmutedshow: [
        { name: 'Johnny Paps', factions: ['Manor'], nicknames: ['Shadow Member'], displayName: 1 },
    ],
    Vader: [
        { name: 'Eugene Zuckerberg', factions: ['Chang Gang'], nicknames: ['Old Man'] },
        { name: 'Nacho Block', factions: ['ASRR'], displayName: 0 },
        { name: '[Deputy] Rob Banks', factions: ['Police'] },
        { name: 'Tuong Ru Kim' },
    ],
    VaderLive: [
        { name: 'Eugene Zuckerberg', factions: ['Chang Gang'], nicknames: ['Old Man'], facebook: true },
        { name: 'Nacho Block', factions: ['ASRR'], displayName: 0 },
        { name: '[Deputy] Rob Banks', factions: ['Police'] },
        { name: 'Tuong Ru Kim' },
    ],
    VADIKUS007: [
        { name: 'Yuri Grozniy', displayName: 0 },
    ],
    Vaerinis: [
        { name: '[Deputy] Thomas Metzger', factions: ['Police'] },
    ],
    VaguePWNage: [
        { name: 'Ramsay', factions: ['SSB'] },
    ],
    valkyrion___: [
        { name: '[Peacekeeper] Lewis Collins', factions: ['Police'] },
    ],
    ValorWasTaken: [
        { name: 'Esteban Julio-Cruz-Perez-Rodriguez', factions: ['Marabunta'] },
    ],
    vanyaa_3D: [
        { name: '[Development] Vanya', factions: ['Development'], nicknames: ['clothes', 'clothing'], assumeChar: true },
    ],
    varsts: [
        { name: 'Danny Cox', displayName: 0 },
    ],
    Vedstar: [
        { name: 'Ved Jiggyjoglue' },
    ],
    vee_v: [
        { name: 'Antonio Chorizo', factions: ['Seaside'], displayName: 0 },
    ],
    Venomfly: [
        { name: 'Babe Calloway', factions: ['Rooster'], displayName: 0 },
        { name: 'Carolina Reaper' },
    ],
    veriomonen_: [
        { name: 'Dimitri Azmanov', factions: ['SSB'], displayName: 0 },
    ],
    Vigors: [
        {
            name: 'Kayn "Yager" Larp',
            factions: ['LARPers', 'Cleanbois', 'Rooster', 'Tuner Shop'],
            nicknames: ['Warlock', 'Fighter', 'Yager', 'Demonblood', 'Demon'],
            displayName: 0,
        },
    ],
    Vindichee: [
        { name: '[Peacekeeper] Oliver Fury', factions: ['Police'] },
    ],
    VinterPhoenix: [
        { name: 'Raymond Frost', factions: ['Vagos'], displayName: 0 },
    ],
    VioletCutie: [
        { name: 'Maisie Hart', factions: ['Britney Gang', 'Rooster', 'Tuner Shop'], displayName: 0 },
    ],
    viscosepower: [
        { name: 'Joshua "JB" Berretta', factions: ['Saints'], displayName: 1 },
    ],
    Viviana: [
        { name: 'Griselda Ambrose', nicknames: ['Granny'] },
        { name: 'Lana Valentine' },
    ],
    vizion: [
        { name: 'Soh Fan Nie', displayName: 0 },
    ],
    VNDRIZZLE: [
        { name: 'Basem Shahin' },
    ],
    Voladin17: [
        { name: '[Lawyer] Tidus Schwinghammer', factions: ['DoJ'] },
        { name: 'Ron DeCloque' },
        { name: '? "Wolfbiter" ?' },
    ],
    vonderweisz: [
        { name: 'Lucian Weisz', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    Vondill: [
        { name: 'Samantha Snake', factions: ['BSK'], nicknames: ['Sammy', 'Sammy Snake'], displayName: 4 },
        { name: 'Otis Campbell', displayName: 0 },
    ],
    vsperance: [
        { name: '[Officer] Rustin Cooper', factions: ['Police'] },
    ],
    VTechas: [
        { name: 'Daryl Dixon', factions: ['HOA'], nicknames: ['DRL', 'GRL'] },
    ],
    w00ter: [
        { name: '[Peacekeeper] Peter Rogers', factions: ['Police'] },
    ],
    walnutcast: [
        { name: '[Deputy] Brick James', factions: ['Police'], displayName: 1 },
    ],
    warpovturk: [
        { name: 'Appie Turk', factions: ['Independent'], displayName: 2, assumeServer: 'whitelist' },
        { name: 'Appie Turk', factions: ['Independent'], displayName: 2, assumeServer: 'public' },
        { name: 'Appie Turk', displayName: 2, assumeServer: 'international' },
    ],
    Warrick88: [
        { name: 'Zayn Hunter', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    WaterGotHim: [
        { name: 'Alessio "AJ" Jilani', factions: ['Clean Cartel'] },
    ],
    Wayward: [
        { name: '[Judge] Wayne Ardson', factions: ['DoJ'], assumeServer: 'whitelist' },
        { name: 'Angelo "Leo Nardo" Nardo', nicknames: ['Leo'] },
        { name: 'Jack "The Joker" Knaves', nicknames: ['The "Joker"'] },
        { name: '[Deputy] Michael Colt', factions: ['Police'], assumeServer: 'public' },
        { name: 'Bowser' },
    ],
    WeCameAsBecca: [
        { name: 'Kennedy Adams', factions: ['RUST'], displayName: 0 },
    ],
    Wehtuns: [
        { name: '[Lawyer] Lawrence Splainer', factions: ['DoJ'], displayName: 2 },
    ],
    weStern: [
        { name: 'Marcel ?', factions: ['Gangton'], nicknames: ['2.0'] },
    ],
    Whippy: [
        { name: 'Irwin Dundee', factions: ['Hades'], nicknames: [reg(/\b(?:dundee|irwin)|(?:dundee|irwin)\b/)], displayName: 2 },
        { name: '[Officer] Crocodile "Croc" Steve', factions: ['Police'], nicknames: ['Cop', reg(/\bcroc|croc\b/)] },
        { name: 'James Tinklebottom' },
    ],
    whosremz: [
        { name: 'Remy Brown', displayName: 1 },
    ],
    Wiked: [
        { name: 'Dwayne Flores', nicknames: ['Golden Boy'], displayName: 0 },
        { name: 'Kyrus Langley', factions: ['SSB'], displayName: 1 },
    ],
    WildJing: [
        { name: 'Wilmer "Azul" Guzman', factions: ['Marabunta'] },
    ],
    WillerZ: [
        { name: 'Will Earnz', displayName: 0 },
    ],
    willneff: [
        { name: '"James Marco" St. Marco', nicknames: ['marko', 'marcoing', 'markoing'] },
        { name: "? \"Don's Mother\" ?", nicknames: ['Mama', 'Donna'] },
    ],
    WithExtraSauce: [
        { name: '[Deputy] Budweiser Malarky', factions: ['Police'], nicknames: ['Bud'], displayName: 2 },
        { name: '[Dr.] Jeffy Coldiron', factions: ['Medical'], displayName: 2 },
    ],
    withoutSunshine: [
        { name: 'Lola Sunshine', displayName: 1 },
    ],
    Wizop: [
        { name: 'Dreyvon Cartier', factions: ['Independent'], nicknames: ['Drip'], displayName: 3, assume: 'assumeOther' },
    ],
    WLVSx: [
        { name: 'Wolfe McCreedy', nicknames: ['Wolfie'], displayName: 3 },
    ],
    Wolfabelle: [
        { name: '[Peacekeeper] Candice Defitt', factions: ['Police'], nicknames: ['393'], displayName: 1 },
        { name: 'Scarlett Skye', displayName: 1 },
        { name: 'Bianca Walters' },
    ],
    Wootpiegames: [
        { name: 'Rick Szhae', displayName: 0 },
    ],
    WTFGameNation: [
        { name: '[Dr.] Noah Drake', factions: ['Medical'] },
    ],
    wtfmoses: [
        { name: '[Officer] Derek McNulty', factions: ['Police'] },
        { name: 'Smooth Williams', factions: ['Stable'] },
    ],
    WuPingNOTEggRoll: [
        { name: 'Wu "Egg Roll" Ping' },
    ],
    wvngie: [
        { name: 'Le Wang', factions: ['Vagos'], nicknames: [reg(/\bwang/)], displayName: 0 },
    ],
    xcrayg: [
        { name: 'Sauce Williams', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    xD_Ghost_Recon_xD: [
        { name: 'Simon Riley', factions: ['Saints'], displayName: 0 },
    ],
    XenVers: [
        { name: 'Xen Verse', factions: ['Pink Gang'], displayName: 0 },
    ],
    xholty: [
        { name: 'Kenny Hopkins', factions: ['Manor'], nicknames: ['Kenneh'], displayName: 1 },
    ],
    Xiceman: [
        { name: '[Deputy] Mike Bayo', factions: ['Police'] },
        { name: 'Mike Wadum', factions: ['Hydra Gang'], nicknames: ['El Gringo'], displayName: 0 },
    ],
    Xiorx: [
        { name: 'Jimmy "Fiddlesticks" Brown', factions: ['Burger Shot'] },
    ],
    XMOTHATRUCKAX: [
        { name: 'Ronald "Red" Juggler' },
    ],
    xNittyGritty: [
        { name: 'Donny ?', factions: ['Rooster'] },
    ],
    xPytu: [
        { name: 'Mario Hernandez', factions: ['Street Team', 'Chang Gang'], nicknames: ['Hernández', 'PandaHoe'], displayName: 0 },
    ],
    xQc: [
        {
            name: 'Jean "X" Paul',
            factions: ['Independent', 'Cleanbois', 'Burger Shot'],
            nicknames: ['Ghost Rider', 'Rider', 'Casino', 'News'],
            displayName: 0,
            assumeServer: 'whitelist',
            leader: true,
        },
        { name: 'Jean "X" Paul', factions: ['Independent', 'Burger Shot'], nicknames: ['Ghost Rider', 'Rider'], displayName: 0, assumeServer: 'public', leader: true },
        { name: '[Deputy] Pierre "PP" Paul', factions: ['Police'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jean Pierre', displayName: 0 },
    ],
    XxAshleyxX: [
        { name: 'Sparkle Lee', factions: ['Burger Shot'] },
        { name: 'Tiffany Valentine', displayName: 0 },
        { name: '[Dispatch] Shyrell Larson', factions: ['Police'], nicknames: ['D-17'], displayName: 1 },
        { name: 'Naomi Kent', factions: ['Burger Shot'] },
    ],
    yaboiSavageG: [
        { name: 'Salvaje "Savage" Mendoza', factions: ['Vagos'] },
    ],
    Yawger: [
        { name: '[Lawyer] Robert Locksley', factions: ['Chang Gang', 'DoJ'], displayName: 2 },
    ],
    Yeahitsjodi: [
        { name: '[Dr.] Lennon McDermitt', factions: ['Medical'], displayName: 1 },
    ],
    YeetabixGaming: [
        { name: 'James Oxley', factions: ['News'], displayName: 0 },
    ],
    yickster: [
        { name: 'Alexandra Yang', factions: ['CBPD', 'Rooster'], nicknames: ['Alex'], displayName: 0 },
    ],
    YoinksOG: [
        { name: '[Development] YoinksOG', factions: ['Development'], nicknames: ['3D', 'Clothes', 'Clothing'] },
        { name: 'Doug Canada', factions: ['ASRR'] },
    ],
    YoMarty: [
        { name: 'Lil Marty', factions: ['SSB'], displayName: 0, assumeServer: 'public' },
    ],
    yooApollo: [
        { name: 'Martin Julio-Perez-Cruz-Rodriguez', factions: ['Marabunta'] },
    ],
    YourFriendKermit: [
        { name: 'Leslie Jenkins', factions: ['Independent'], displayName: 0 },
    ],
    yungxaquafina: [
        { name: 'Antonio Carter Jr', factions: ['SSB'], nicknames: ['AJ'], displayName: 4 },
    ],
    yuukidav: [
        { name: 'Oakley Stallion', factions: ['Angels'], displayName: 1 },
        { name: '[Officer] Lukas Lavender', factions: ['Police'], displayName: 2 },
    ],
    zackattackatk: [
        { name: 'Xalvedor Lorenhart', factions: ['Saints'], nicknames: ['Xav'], displayName: 1 },
    ],
    Zaitohro: [
        { name: '[Deputy] Cameran Shaw', factions: ['Police'], nicknames: ['Cam'], displayName: 2 },
        { name: 'Damien Tinkerman', factions: ['BBMC'], displayName: 0 },
        { name: 'Oswald Tinkerman', factions: ['Lost MC'], displayName: 1 },
    ],
    zandr400: [
        { name: 'Vance Vixen', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    ZapremeTV: [
        { name: 'Kai Alexander', factions: ['SSB'], displayName: 1 },
        { name: 'Jacob Pibb', factions: ['Vagos'], displayName: 0 },
    ],
    Zaquelle: [
        { name: '[Peacekeeper] Mackenzie Hayes', factions: ['Police'], assume: 'assumeNp' },
    ],
    ZayTyree: [
        { name: 'Renato "Bubbles" Ortiz', factions: ['North Cypress'], nicknames: [], displayName: 1 },
    ],
    zeco1: [
        { name: 'Kole Selaw', factions: ['RUST'], displayName: 0 },
    ],
    Zee_RP: [
        { name: 'Zee Carbone', factions: ['Dons'], displayName: 1 },
    ],
    zerhxy: [
        { name: 'Prince Tate', factions: ['Marabunta'], nicknames: ['Sicario'], displayName: 1 },
    ],
    Zerkaa: [
        { name: 'Tommy Tate', nicknames: ['Tommy T'], displayName: 3 },
        { name: 'Josh Zerker', factions: ['Self Insert', 'One Life'], displayName: 0 },
    ],
    Zetark: [
        { name: 'Luciano DiCenzo', factions: ['South Cypress'], nicknames: [], displayName: 1 },
    ],
    Zettafrag: [
        { name: 'Kimberly Daniels', factions: ['Mayhem MC'], displayName: 0 },
    ],
    zhifven: [
        { name: 'Kai Pond', factions: ['Rooster'], displayName: 0 },
    ],
    Zidsy: [
        { name: 'Zane Jackson', nicknames: ['Rat'], displayName: 3 },
    ],
    Ziggy: [
        { name: '[Ranger] Ziggy Buggs', factions: ['Police'], displayName: 1, assumeChar: true },
        { name: 'Norman Bones', displayName: 0 },
    ],
    Zimboobwe: [
        { name: '[Peacekeeper] Jimbo Sutton', factions: ['Police'], displayName: 2, assumeServer: 'whitelist' },
        { name: '[Deputy] Jimbo Sutton', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    zirnrp: [
        { name: 'Malcador Sigilite', factions: ['DoJ'] },
        { name: 'Solomon Seerson' },
    ],
    Zixtah: [
        { name: 'DJ Cooper', factions: ['Manor'], nicknames: ['DJ'], displayName: 1 },
    ],
    Zoil: [
        { name: 'Skunkz Wallace' },
    ],
    Zoomaa: [
        { name: 'Tomassi Paparatto', factions: ['Royal Mafia'], displayName: 1, assume: 'assumeOther' },
    ],
    Zotbot: [
        { name: '[Physiotherapist] Leon Marks', factions: ['Medical'] },
    ],
    ZPapz: [
        { name: '[Officer] Joseph Oxlong', factions: ['Police'] },
        { name: 'Liam Law', factions: ['Angels'] },
    ],
    zSillverx: [
        { name: '[Peacekeeper] Shawn Richards', factions: ['Police'] },
    ],
    zuck: [
        { name: 'Zuck Cuc', factions: ['Besties'] },
    ],
    Zumapwn: [
        { name: 'James Laughton', nicknames: ['Fall Guy'], factions: ['Independent'], displayName: 3, assumeServer: 'public' },
    ],
};
