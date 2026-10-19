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
        { name: 'Reed Dankleaf', factions: ['Gruppe6', 'Lost MC'] },
        { name: '[Deputy] Tommy Tribble', displayName: 1 },
    ],
    '13Stewartc': [
        { name: '[Development] Stewart', factions: ['Development'], nicknames: ['Handling', 'Fixes', 'Fixing', 'Tuning', reg(/\bnew\s+\w+\s*stuff/)] },
    ],
    '1ndiantechsupport': [
        { name: 'Kendrick Jones', factions: ['SSB'], displayName: 1 },
    ],
    '25daves': [
        { name: 'Bobby Charles', factions: ['Police'], displayName: 0 },
    ],
    '4hbunger': [
        { name: 'Frederick White', factions: ['Faceless'], displayName: 0 },
        { name: 'Joe Mathers', factions: ['Police'], displayName: 0 },
    ],
    '4HEAD': [
        { name: 'Aubrey "4HEAD" Webster', factions: ['6Chambers', 'Pawn Addicts', 'Besties'], leader: true },
    ],
    '4hBunger': [
        { name: 'Fred ?', displayName: 1 },
    ],
    '52chains': [
        { name: '[Officer] Carmine Costello', factions: ['Pawn Addicts', 'Gruppe6'], nicknames: ['Mouse'], displayName: 1 },
        { name: 'Fidel Guevara', nicknames: ['Don', 'Cabron'] },
        { name: 'Gambino Morretti', factions: ['Police'], displayName: 0 },
    ],
    '77_Nights': [
        { name: 'Damian De Santos', factions: ['Vagos'], displayName: 1 },
    ],
    '80bsaget': [
        { name: 'Tim Lee', displayName: 0 },
        { name: '[Officer] Bexar McCree' },
    ],
    '8bit_beni': [
        { name: 'Vill Ager', displayName: 0 },
    ],
    '9baller': [
        { name: 'D "D Rose" Rose', factions: ['SSB'] },
    ],
    a2guapo: [
        { name: 'Jay Hobbs', factions: ['Besties'], nicknames: ['J', 'JHobbs'], displayName: 0 },
    ],
    Aaoki: [
        { name: '[Deputy] Maddison Bancroft', displayName: 2 },
        { name: 'Shazza Wazza', nicknames: ['Shazzam'] },
    ],
    aaron_rp: [
        { name: 'Aaron Alexander', factions: ['GSF'], nicknames: ['Double A', reg(/double.?a/)], displayName: 3 },
    ],
    AaronOnAir: [
        { name: '[Deputy] Dan Faily', nicknames: ['485'], facebook: true },
        { name: 'Sal T. Block', displayName: 0 },
    ],
    abbay: [
        { name: 'Olivia Harvey' },
    ],
    abbbz: [
        { name: 'Sanjay Patel' },
    ],
    AbbottJake: [
        { name: 'Luke Atar', factions: ['Manor'], nicknames: ['Morning Crew Leader'], displayName: 1 },
        { name: 'Nip Smith', displayName: 0 },
        { name: 'Joey Grass', factions: ['Prison'], displayName: 0 },
        { name: 'Tommy Lee', displayName: 0 },
    ],
    abby: [
        { name: 'Irma Gawd', displayName: 0 },
        { name: 'Big Bertha', displayName: 0 },
        { name: 'Ivy Wood' },
    ],
    abbyduren: [
        { name: 'Khrystal Vibez' },
    ],
    AbdulHD: [
        { name: 'Abdul AlRahim', factions: ['Gruppe6', 'Police'], nicknames: ['Yellow Flash'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Omar Stryker', displayName: 1 },
        { name: '[Judge] Ali Habibi', nicknames: ['Al'] },
        { name: '[Officer] Basha Habibi', assumeServer: 'public' },
        { name: 'Mustafa Habibi' },
        { name: 'Fahad AlArabi' },
    ],
    Abou_: [
        { name: 'Modi Janta' },
    ],
    abrvxas: [
        { name: 'Alexei Pavlovich', nicknames: ['Chicken Head'], displayName: 3 },
    ],
    Acaibear: [
        { name: '[Deputy] Emily Reinhart' },
        { name: 'Jolene Mushkin', nicknames: ['Little Red'] },
    ],
    AcezProduction: [
        { name: 'Achez Perez', factions: ['Habibis'], nicknames: ['Ace'], displayName: 2 },
    ],
    acie: [
        { name: 'Vee Hernandez', factions: ['Pawn Addicts', 'Gruppe6'], displayName: 0 },
    ],
    adamsmiley96: [
        { name: "Sebastian Von Di'Quad", displayName: 0 },
    ],
    adeptthebest: [
        { name: 'Mari Posa', factions: ['Chang Gang', 'Hydra Gang'], nicknames: ['Wari', 'Lari'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Trooper] Selena Mendoza', nicknames: [reg(/\bmendoz/)] },
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
        { name: 'Aaron Melarky', displayName: 0 },
    ],
    Adzzstarr: [
        { name: 'Adam Prince', factions: ['Saints'], displayName: 0 },
        { name: '[Dr.] Valentine', factions: ['Medical'] },
    ],
    aezke: [
        { name: 'Khalid Hussain', displayName: 1 },
    ],
    AFCB78: [
        { name: 'Dick Dudley', displayName: 2 },
    ],
    AfricanSnowball: [
        { name: '[Trooper] Dwayne Carter IV', nicknames: [reg(/good [a*][s*]+ day/)], displayName: 2 },
        { name: 'Buck Stanton', displayName: 2 },
        { name: 'Leland "LJ" Jones' },
        { name: 'Taylor Africansnowball', displayName: 0 },
    ],
    Afro: [
        { name: 'Dexx Martin', factions: ['HK Pawn', 'GSF'], leader: true },
        { name: 'Jacob Harth', leader: true },
        { name: 'Chris "CP" Porter' },
        { name: 'Sayid Mitra', nicknames: ['Sayeet'], displayName: 0 },
        { name: 'David "The Mime" Wonders', nicknames: ['Concrete', 'Mime'] },
        { name: 'Gordon Parks', nicknames: ['DoorLord'] },
        { name: 'Jay Afro', displayName: 0 },
        { name: 'Gary Kebun', factions: ['DoC'], displayName: 0 },
    ],
    Aheeyuh: [
        { name: 'Normie Reece', factions: ['Brick House', 'The 404'], displayName: 0 },
    ],
    AidenNortha: [
        { name: '[Deputy] Kevin Keyte', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Melvin Graves', displayName: 0, assumeServer: 'public' },
        { name: 'Jase Dawson', displayName: 0 },
    ],
    aikobliss: [
        { name: 'Ginger Ale', factions: ['Burger Shot'], displayName: 0 },
    ],
    aimbotcalvin: [
        { name: '? ?' },
    ],
    aintitadam: [
        { name: 'Scruffy Doodle' },
    ],
    Airborne: [
        { name: 'Dennis LaBarre', factions: ['DoJ'] },
        { name: '[Officer] Blaine Miller', nicknames: ['Cow Killer'] },
        { name: 'Unity', nicknames: ['Cat'] },
    ],
    AJumpin: [
        { name: 'Aziz Shaw' },
    ],
    akaMONKEY: [
        { name: 'Arturo Ortiz', factions: ['Sinner Pawn', 'Sweepers', 'Gruppe6', 'Slim', 'Vagos'], nicknames: [reg(/\bar(?:tu|2)/), reg(/\barchu+r/)] },
        { name: 'CamRon "Peanut" Giles', factions: ['SSB'] },
        { name: 'Timoteo "TT" Bushnell', nicknames: ['Rasta'] },
    ],
    aKartt: [
        { name: 'Harold "H-Dawg" Bishop', factions: ['Habibis'], nicknames: ["H-Dawg", "Hdawg"], displayName: 0 },
    ],
    aleks: [
        { name: 'Vasily "V" Sazkaljovich' },
        { name: '[Officer] Bob Smith', nicknames: ['Bobby', 'Chief'], displayName: 1 },
        { name: 'Alex Marshall', displayName: 0 },
        { name: '[FIB Agent] Heath Mercer' },
    ],
    Alex_3MM: [
        { name: 'Leo Sparks', factions: ['Police'], displayName: 0 },
    ],
    alexhasg2g: [
        { name: 'Liz Anya', displayName: 0 },
    ],
    alexten0909: [
        { name: 'Alexander Campbell', nicknames: ['Alex'], displayName: 3, assumeServer: 'whitelist' },
        { name: '[Officer] Jeff Boiardi' },
        { name: '[Officer] Alex Campbell', assumeServer: 'public' },
    ],
    Alisha: [
        { name: 'Alisha Wuornos' },
    ],
    AllHailGoon: [
        { name: 'Father Dinker', nicknames: ['god', 'block'], displayName: 0 },
    ],
    allium: [
        { name: 'Alice Liddell', factions: ['Police'], displayName: 0 },
    ],
    alliumm: [
        { name: 'Alice Liddell', factions: ['Police'], displayName: 0 },
    ],
    Alonelyhawk: [
        { name: '[Deputy] Allison Thomas', factions: ['DoJ'] },
        { name: '[Lawyer] Claudia Gartner', displayName: 1 },
    ],
    alpacagurl92: [
        { name: 'April Fooze', factions: ['Chang Gang'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Connie Clark', nicknames: ['cop'], displayName: 2 },
        { name: '[Officer] Connie Clark', nicknames: ['cop'], displayName: 2, assumeServer: 'public' },
    ],
    alyoren: [
        { name: 'Nikki Meadows', factions: ['Police'], displayName: 0 },
    ],
    AlyPlayNinja: [
        { name: '[Officer] Amelia Frost' },
    ],
    alyssajeanaf: [
        { name: 'Daphne Malone', displayName: 0 },
    ],
    amakingswp: [
        { name: 'Braden Kingz', factions: ['Manor'], nicknames: ['Braden'], displayName: 1 },
    ],
    amanthi___: [
        { name: 'Bianca Wade', factions: ['Brick House'], displayName: 0 },
    ],
    ambientsurprise: [
        { name: 'Terry LaBuff', displayName: 0 },
    ],
    Ambush: [
        { name: 'Freya Almerion', displayName: 1 },
    ],
    americansneakers: [
        { name: 'Cassidy Collins', factions: ['Order'], displayName: 0 },
    ],
    Amouranth: [
        { name: 'Amy Rain', nicknames: ['Ammy'], displayName: 0 },
    ],
    amsyz: [
        { name: 'Zayn Ahmed', displayName: 0 },
    ],
    AnarchoSyn: [
        { name: 'Hess Blade' },
    ],
    Anchoras: [
        { name: 'Eethan Gaine-Prince', factions: ['Saints'], nicknames: ['EGP', 'Erebos'] },
    ],
    AndyMilonakis: [
        { name: 'Lil Erf', factions: ['Chang Gang'], displayName: 0 },
        { name: 'Carmen Amuso' },
    ],
    angelina: [
        { name: '[Deputy] Brandi Lynn', factions: ['Police'], displayName: 1 },
        { name: 'Tatianna Donatacci', factions: ['Brick House'], displayName: 0 },
    ],
    AngelKnivez: [
        { name: 'Giavanna "GiGi" Costello', factions: ['DoC', 'Casino', 'Gruppe6', 'Manor'], nicknames: ['Gigi'], displayName: 1 },
    ],
    Angrysquirlz: [
        { name: 'Lizard Block' },
    ],
    AnimatedJF: [
        { name: 'Cameron Dupres' },
    ],
    annamaymight: [
        { name: 'Martha May', factions: ['Gruppe6'], displayName: 0 },
    ],
    AnneMunition: [
        { name: 'Sequoia Springs' },
    ],
    Anomaly: [
        { name: 'Ping Ping Samuelson', nicknames: ['Ping Ping'], displayName: 4 },
        { name: 'Larry Papidopoulos', nicknames: ['Papi'] },
    ],
    AnthonyZ: [
        {
            name: 'Tony Corleone',
            factions: ['Brick Bois', 'Brick House'],
            nicknames: ['Tonish', 'Racing'],
            assumeServer: 'whitelist',
        },
        { name: '[Deputy] Anthony Copleone', nicknames: ['reporting for duty'] },
        { name: 'Tonish Corleone', factions: ['Brick Bois', 'Brick House'], assumeServer: 'public' },
    ],
    Anv1Ltv: [
        { name: 'Brooklyn "BK" Davis', factions: ['GSF'] },
    ],
    Apitoxin11: [
        { name: 'Trigger Freebird' },
    ],
    APPLESHAMPOO: [
        { name: '[Deputy] Nancy Ree', displayName: 1, assumeServer: 'whitelist' },
        { name: '[EMS] Gioconda "Gio" Coppola', factions: ['Medical'], nicknames: ['T-17'] },
        { name: 'Apple Schampu', displayName: 0 },
        { name: '[Officer] Gio Coppola', nicknames: ['466'], displayName: 1, assumeServer: 'public' },
        { name: 'Morgan Silver', factions: ['Police'], displayName: 0 },
    ],
    appyturk: [
        { name: 'Appie Turk', factions: ['Independent'], displayName: 2, assumeServer: 'whitelist' },
        { name: 'Appie Turk', factions: ['Independent'], displayName: 2, assumeServer: 'public' },
    ],
    ArboYT: [
        { name: 'Jimmy Sprinkle', displayName: 0 },
    ],
    Arcadum: [
        { name: 'Svelt Tlevs', nicknames: ['Wizard'] },
    ],
    arckon: [
        { name: 'Beric Johnson', factions: ['DoJ'], displayName: 0 },
    ],
    arckon_: [
        { name: '[Deputy] Beric Johnson' },
    ],
    argochris: [
        { name: 'James Macleod', factions: ['Police'], displayName: 0 },
    ],
    ArmandMorte: [
        { name: 'Lucky Cox', displayName: 0 },
    ],
    Armeeof1: [
        { name: 'Milton Pointdexter' },
    ],
    Arnie: [
        { name: 'Vincent Carl', factions: ['Hydra Gang'], nicknames: ['Arnie', reg(/\b(?:vincent|carl)/)], displayName: 3 },
    ],
    arro2k: [
        { name: 'Rico Barbosa', nicknames: [], displayName: 1 },
        { name: 'Timo Korhonen', factions: ['6Chambers', 'Pawn Addicts', 'Gruppe6'], displayName: 0 },
    ],
    ArsenaI: [
        { name: 'James Arsenal', displayName: 0 },
    ],
    ArtByBaha: [
        { name: 'Cuddles Fish', factions: ['Pawn Addicts'], nicknames: [], displayName: 1 },
    ],
    AscensionLive: [
        { name: 'James Malding', displayName: 0 },
    ],
    ash: [
        { name: 'Ash Ketchup', factions: ['Burger Shot', 'Gruppe6', 'Hydra Gang'], displayName: 1, assumeChar: true },
        { name: 'Jenna Mustard', factions: ['Police'], displayName: 0 },
    ],
    Ashaweebaby78: [
        { name: 'Frankiie Fletcher', displayName: 0 },
    ],
    Ashi: [
        { name: 'Fiona Stewart', nicknames: ['Fi-ho-na', 'Fifi'] },
        { name: '[Officer] Annie May', displayName: 2 },
    ],
    ashlynn: [
        { name: 'Cassie Cupcakes' },
        { name: '[Officer] Brenda Pancake', displayName: 1, nicknames: ['Pancakes'] },
    ],
    Ashurikun: [
        { name: 'Rose Morrison', displayName: 0 },
    ],
    Asteroba: [
        { name: '[Deputy] Aaron Byson' },
        { name: '[Lawyer] Larry Hallow' },
        { name: 'Kermy Fulker', factions: ['HOA'] },
        { name: '[EMS] Boba Stone', factions: ['Medical'] },
    ],
    atinyhorse: [
        { name: 'Anthony Ricci', factions: ['DoJ'], displayName: 0 },
    ],
    Audili: [
        { name: 'Mordell Caldwell', factions: ['SSB'], nicknames: ['MD'], displayName: 1 },
    ],
    AuriEllis: [
        { name: 'Ursula Leichenberg', factions: ['News'], displayName: 1 },
        { name: 'Gracie ?' },
        { name: 'Drusilla Grant', factions: ['DoJ', 'Brick House', 'Gruppe6'], displayName: 0 },
    ],
    aurvinR: [
        { name: '[Deputy] John Doe' },
    ],
    Aus24: [
        { name: '[Officer] Jack Davenport' },
        { name: 'Jordan Walker', factions: ['Hydra Gang'] },
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
        { name: '[Officer] May Maple' },
        { name: '[Ranger] May Maple', assumeServer: 'public' },
    ],
    Auxidental: [
        { name: 'Trey Romano' },
    ],
    AvaGG: [
        { name: 'Karen Dahmer', factions: ['Chang Gang'], affiliate: true, nicknames: ['Kawen'] },
    ],
    Avioto_: [
        { name: 'Silvio Moretti', factions: ['HK Pawn'], displayName: 0 },
    ],
    awildzust: [
        { name: 'Ryan Miller', displayName: 0 },
    ],
    awkwardsausesteph: [
        { name: '[Officer] Rebecka Lovejoy', nicknames: ['Beck', 'Becks', '521'] },
    ],
    aXed_U: [
        { name: 'Hans Snitzel' },
    ],
    AyeGavMF: [
        { name: '[Deputy] Dave Bird' },
        { name: '[Deputy] Dave Bird', assumeServer: 'public' },
        { name: 'Nash Mastersin', displayName: 1, assumeServer: 'whitelist' },
    ],
    ayubfe: [
        { name: '[EMS] Ayub Elmi', factions: ['Medical'], displayName: 2 },
    ],
    b_hoopla: [
        { name: '[Deputy] Bryan Davids', displayName: 2 },
        { name: 'Ramello Porter', factions: ['Police'], displayName: 0 },
        { name: 'Kenneth "Primo" McGriff', factions: ['Brick House', 'The 404'], displayName: 0 },
    ],
    b0wditch: [
        { name: 'Gene Auber', nicknames: [], displayName: 1 },
    ],
    Baabeology: [
        { name: 'Lola White', factions: ['ADMC'], displayName: 0, assumeServer: 'public' },
    ],
    Baddy: [
        { name: 'Liya Farah', nicknames: [], displayName: 1 },
    ],
    badgerClaws_: [
        { name: 'Cassidy Clearwater', displayName: 0 },
    ],
    Baffty: [
        { name: 'Matthew Colby', factions: ['Prison', 'Faceless'], displayName: 0 },
        { name: 'Jackson Colby', factions: ['Gruppe6'], displayName: 0 },
    ],
    baguettegirI: [
        { name: 'France Gall', nicknames: ['French', 'French Lady', 'France Girl', 'French Girl'], displayName: 0 },
        { name: 'Ange VanLaeken', factions: ['Prison'], nicknames: ['French', 'French Girl'] },
    ],
    Baki961: [
        { name: 'Yoshimoto Nakanishi', assumeServer: 'whitelist' },
        { name: '[Officer] Fernando Diego Pablo Juan Esteban Luis Cortez Bonanza II', displayName: 1, assumeServer: 'public' },
    ],
    BamiePlays: [
        { name: '[Officer] Ryan Kolinsky', nicknames: ['591'], displayName: 2 },
    ],
    bananabrea: [
        { name: 'Claire Seducer', assumeServer: 'whitelist' },
        { name: '[Officer] Tyme Reducer', assumeServer: 'whitelist' },
        { name: '[Officer] Claire Seducer', displayName: 1, assumeServer: 'public' },
        { name: 'Becky Hopper', displayName: 0 },
        { name: 'Joann Banana', displayName: 0 },
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
    bananahead_og: [
        { name: 'Nana Banana', factions: ['HK Pawn', 'DoJ'], displayName: 0 },
    ],
    Bananalover115: [
        { name: 'Mamaita "Mama" Jehmimi' },
    ],
    banditobrown1: [
        { name: "Shankeal O'Neal", nicknames: ['Shank', 'Shankyou'] },
    ],
    BarbTheKiwi: [
        { name: 'Cohen Ryker', factions: ['Police'], displayName: 0 },
    ],
    barky: [
        { name: 'Shang Liu', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    barryscottlive: [
        { name: 'Barry Scott' },
    ],
    Basyk: [
        { name: '[Deputy] Marcellus Mikaelson', displayName: 1 },
        { name: 'Sai Carter', factions: ['Lost MC'], displayName: 0 },
    ],
    bazza: [
        { name: 'Heath Russell', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    BazzaGazza: [
        { name: 'Barry Benson', factions: ['ADMC'], displayName: 0 },
    ],
    bbyruthless: [
        { name: 'Saint Gomez' },
    ],
    BCBeastly: [
        { name: 'Herbert The Pervert' },
    ],
    BeamGG__: [
        { name: 'Beamo Dempsey', factions: ['Besties'], nicknames: [], displayName: 1 },
    ],
    beanskitty: [
        { name: 'Dang McNabb', factions: ['DoC'], displayName: 0 },
        { name: 'Louis Spindle', factions: ['Police'], displayName: 0 },
    ],
    beard: [
        { name: 'Wade Wilson', factions: ['Faceless'] },
    ],
    BeardedGuysGaming: [
        { name: 'Jose Pincha' },
    ],
    Beast_: [
        { name: '[Deputy] Ruger Daniels' },
    ],
    beauish: [
        { name: 'Issa Belle', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    Beerman155: [
        { name: 'Abner Vaca' },
    ],
    beetle: [
        { name: 'Loki Skylizard', factions: ['Police'], displayName: 0 },
    ],
    beetricetv: [
        { name: 'Benny Davis', factions: ['SSB'], displayName: 0 },
    ],
    BelowTheWaves: [
        { name: '[Dispatch] L Lovesick', displayName: 2 },
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
        { name: 'Billy "Bloodbath" Senora', nicknames: ['Bloodbath'], assumeServer: 'whitelist' },
    ],
    biboskills: [
        { name: 'Louis Blanc', nicknames: [], displayName: 1 },
    ],
    bigbam: [
        { name: 'FlyRone Smith', factions: ['DoC'], displayName: 0 },
    ],
    bigbussynik: [
        { name: 'Armani Macaroni' },
    ],
    biggieferreira: [
        { name: 'Shevy Santanna', factions: ['Vagos'], assumeServer: 'whitelist' },
        { name: '[Officer] Jamal Ferreira', assumeServer: 'public' },
        { name: 'Dominic "Lil D" Chester', nicknames: ['Sabado de Sol'] },
    ],
    BigRichardRP: [
        { name: "Richard O'Conner", factions: ['Independent'], nicknames: ['Richie'], displayName: 1, assume: 'assumeOther' },
        { name: "[Officer] Rupert O'Copper", displayName: 1 },
    ],
    BigSkenger: [
        { name: 'Zaceed Skengerton', nicknames: [reg(/\b[zs]a[skc]+[ei]*y?d/)], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Zacood Skengerson', displayName: 1, assumeServer: 'public' },
    ],
    BikeMan: [
        { name: 'Chet Summerset', assume: 'assumeNpNoOther' },
    ],
    binoversion: [
        { name: '? "O Dogg" ?', factions: ['SSB'] },
    ],
    biotox: [
        { name: 'Lars Haverford', factions: ['Brick House', 'Piss Boiz'], displayName: 0 },
    ],
    Biotoxz_: [
        { name: 'Lars "Bjorn" Haverford', nicknames: ['Barbarian'], assumeServer: 'whitelist' },
        { name: 'Lars "Bjorn" Haverford', nicknames: ['Barbarian'], assumeServer: 'public' },
    ],
    BJPofficial: [
        { name: '[Lawyer] Buford J. Preston' },
    ],
    blau: [
        { name: 'Mickey Sinclaire', factions: ['BPM', 'DoJ'], nicknames: ['Michael', 'Downbad', 'Downrat'], assumeServer: 'whitelist' },
        { name: '[Deputy] Klay Kona', displayName: 2 },
        { name: 'Michael S.', factions: ['Independent'], assumeServer: 'public' },
    ],
    bldrs: [
        { name: 'Kaleb "Kleb" Rush', factions: ['HOA'] },
        { name: '[Officer] Ryan Wright' },
    ],
    bledorable: [
        { name: 'Billy Thorne', nicknames: [], displayName: 0 },
    ],
    blokeowski: [
        { name: 'Colton Fleetwood', factions: ['Police'], displayName: 0 },
    ],
    BLooD_MoNeY_: [
        { name: '[Lawyer] Griz ?', displayName: 1 },
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
    bluebonnetrp: [
        { name: 'Lee Mockerman', factions: ['Police'], displayName: 0 },
    ],
    blunt_20202020: [
        { name: 'Dub Blunt', displayName: 0 },
    ],
    bmcloughlin22: [
        { name: '[Lawyer] Lachlan Pike' },
    ],
    bobbyraygray: [
        { name: 'Bobby Gray', factions: ['Police'], displayName: 0 },
    ],
    Bodoc_: [
        { name: 'Marley', factions: ['Clowns'], displayName: 0 },
    ],
    Bomaah: [
        { name: 'Viper Rodriguez', assume: 'assumeOther' },
    ],
    boogie: [
        { name: 'Xavier Valentine', factions: ['Hydra Gang'] },
    ],
    boosted: [
        { name: 'Benny Razer', factions: ['DoJ', 'Gruppe6'], displayName: 0 },
        { name: 'Lenny Tazer', factions: ['Police'], displayName: 0 },
    ],
    BoschMerchant: [
        { name: 'Anto Murphy', factions: ['Chang Gang'] },
    ],
    boss_zulu: [
        { name: 'Zulu Thendani', nicknames: [], displayName: 1 },
    ],
    boxbox: [
        { name: 'Bo Xbox' },
    ],
    bozo: [
        { name: 'Angus Oblong II', factions: ['Clowns'], displayName: 0 },
    ],
    bradahjune: [
        { name: 'Kapono Kahananui', nicknames: [], displayName: 1 },
    ],
    Braders: [
        { name: 'Jeff Arnold' },
    ],
    Braenstus: [
        { name: '[Lawyer] Adam Nielsen', displayName: 1 },
    ],
    Brakketts: [
        { name: '[Deputy] Tommy Horver' },
    ],
    breakyx: [
        { name: 'Aleks Harris', factions: ['Habibis'], nicknames: [], displayName: 1 },
        { name: 'Dris Peters', factions: ['SSB'] },
    ],
    Breehzee: [
        { name: 'Wullie Mcdonnel', displayName: 0 },
        { name: 'Pedro Frank', displayName: 0 },
    ],
    BrettGambit: [
        { name: 'Leo Hayes', nicknames: ['DJ Leo'], displayName: 3 },
        { name: 'Skele Tor', nicknames: ['Skeletor'], displayName: 3 },
    ],
    BRIT: [
        { name: 'Tori Corleone', nicknames: ['Bologna'] },
    ],
    British_Bulldog: [
        { name: 'Jayden Cooper', factions: ['GSF'], displayName: 0 },
    ],
    BrodyCurtis_: [
        { name: 'Max Power', displayName: 0, assumeServer: 'whitelist' },
        { name: '[Deputy] Sean Duncan', assumeServer: 'public' },
    ],
    Brofain: [
        { name: 'Kodak Bodega' },
    ],
    BronzeRP: [
        { name: 'Gary Adams', factions: ['Lost MC'] },
    ],
    BrookeAB: [
        { name: 'Abby Brooks', factions: ['Slim'], displayName: 0 },
    ],
    broxh_: [
        { name: 'Broxh Kava', displayName: 1 },
    ],
    bubblesrp: [
        { name: 'Peter Ross', displayName: 0 },
    ],
    BucketSt: [
        { name: 'Gheto Kaiba', factions: ['ADMC'], displayName: 2 },
    ],
    buddha: [
        {
            name: 'Lang Buddha',
            factions: ['Brick Bois', 'Brick House', 'Piss Boiz', 'Casino'],
            leader: true,
            nicknames: ['Circle Andy', 'Timelord'],
            assumeChar: true,
            assumeServer: 'whitelist',
        },
        { name: '[Trooper] LeBron James', nicknames: ['623'], displayName: 1 },
        { name: '[Ranger] Lang Buddha', factions: ['Brick Bois', 'Brick House', 'Piss Boiz', 'Casino'], displayName: 1, assumeServer: 'public' },
        { name: 'Esteban Julio-Ricardo-Montoya-De-La-Rosa Ramirez' },
        { name: '[Deputy] Kevin Kona' },
    ],
    bunbelievable: [
        { name: 'Irish McIrish', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    bunbunss_: [
        { name: 'Britney Sears', factions: ['Police'], displayName: 0 },
    ],
    Bundie: [
        { name: 'Tane Mahuta', nicknames: ['Kiwi'], displayName: 3 },
        { name: 'Charles Hendrix', nicknames: ['Charlie'], displayName: 0 },
    ],
    bunicular: [
        { name: 'Layla Lockhart', displayName: 0 },
    ],
    BurgSZN: [
        { name: 'Tyler Heisanburg', nicknames: ['Burg'], displayName: 3 },
    ],
    Burn: [
        { name: 'Johnny Silverhand', displayName: 0 },
        { name: '[Deputy] Brocky Potage', displayName: 2 },
        { name: 'Asmon Bronze', displayName: 0, nicknames: ['AsmonBronze', 'Transmog'] },
        { name: 'Norman "Norm" Yoder' },
        { name: 'Moe Nopoli', displayName: 0 },
        { name: 'Michael Myers', displayName: 0 },
        { name: 'Mentle Block' },
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
        { name: 'Thomas Blanc', factions: ['Locksmiths', 'Casino'], displayName: 0 },
    ],
    ButterRoyaleTV: [
        { name: 'Deejay Bartello' },
    ],
    Buzterwow: [
        { name: '? "Brother Mehof" ?' },
    ],
    bythybeard: [
        { name: '[Deputy] Sexton Hardcastle', displayName: 2 },
        { name: 'Wade Willson', factions: ['HOA'] },
    ],
    C0smiik: [
        { name: 'Stolly ?', factions: ['GSF'] },
    ],
    CallMeGrub: [
        { name: '[Deputy] Isaac Richardson' },
    ],
    CallMeKevin: [
        { name: 'Grognak The Destroyer', assume: 'assumeNpNoOther' },
    ],
    CanadianYETI_: [
        { name: 'Tee ?', factions: ['SSB'], assumeServer: 'public' },
    ],
    cannayaps: [
        { name: 'Gabby Brito', factions: ['Burger Shot'], displayName: 0 },
    ],
    Capped: [
        { name: 'Charlie ?', factions: ['Faceless'], displayName: 1, leader: true },
        { name: 'Capped Tarranova', factions: ['Chang Gang'], nicknames: ['Pigeon', 'Terranova', 'Nova'], displayName: 3 },
        { name: 'Robert De Souza', factions: ['Locksmiths'], displayName: 0 },
        { name: 'Anthony Breakwood', factions: ['NEST'], displayName: 0 },
    ],
    Capshion: [
        { name: 'Pauli Maglioni', displayName: 0 },
    ],
    capsure: [
        { name: 'Dimitri Nekola' },
    ],
    CaptainBarb: [
        { name: 'Mattias Nilson', displayName: 0 },
    ],
    Caramel: [
        { name: 'Lovemore Dlamini', factions: ['Sinner Pawn', 'Collective', 'Besties'], displayName: 1 },
    ],
    carbie: [
        { name: 'Zephyr Kane', factions: ['BPM', 'Order'], displayName: 0 },
    ],
    Carbonoid: [
        { name: 'Han Machiavelli', displayName: 0 },
    ],
    carlos: [
        { name: 'Naomi Scott', factions: ['Burger Shot'], displayName: 0 },
    ],
    Carmen: [
        { name: 'Carmella Corset', factions: ['Casino'] },
    ],
    Carter: [
        { name: 'Spencer Smith', nicknames: ['Mormon'] },
    ],
    CasadyOG: [
        { name: '[Deputy] Zach Casady', displayName: 2 },
    ],
    Cascadian_: [
        { name: '[Deputy] Michael Pike', nicknames: ['313'], displayName: 2 },
    ],
    casek_: [
        { name: 'Cesar Conchas', factions: ['Vagos'], displayName: 0 },
    ],
    casualbaesu: [
        { name: 'Baesu Heartless', nicknames: [], displayName: 1 },
    ],
    CatherineReel: [
        { name: 'Nancy Oksana', factions: ['Sinner Pawn', 'DoC'], displayName: 0 },
    ],
    CathFawr: [
        { name: '[Officer] Lydia Vale' },
        { name: 'Summer Mersion', factions: ['GSF', 'Mersions'], displayName: 0 },
        { name: 'Natya Block', displayName: 0 },
        { name: 'Catrin Fawr', displayName: 0 },
        { name: "[Lawyer] Shannon O'Banion", displayName: 0 },
    ],
    Cathie: [
        { name: '[Deputy] Anita May', displayName: 1 },
        { name: 'Ninacska Mihkala', nicknames: ['Nina'], displayName: 3 },
        { name: 'Kaelyn "Kae" East', factions: ['SSB'] },
        { name: 'Jane Winters', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    CaussiePreacher: [
        { name: '[EMS] Jack Preacher', factions: ['Medical'] },
    ],
    CazeyTV: [
        { name: 'Sam Simmons', factions: ['Hydra Gang'], displayName: 0 },
        { name: '[Trooper] Jeffrey Bones', displayName: 2 },
    ],
    CbasRP: [
        { name: 'Cbas ?' },
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
        { name: '[Deputy] Marco Holliday', nicknames: ['683', 'Holiday'] },
    ],
    chandraviperdae: [
        { name: 'Mari McKay', nicknames: [], displayName: 1 },
    ],
    Chanpu: [
        { name: 'Justin "Victor" Bridges' },
    ],
    Chap: [
        { name: 'Bryan Chapman', nicknames: ['Chap', 'Orange'], displayName: 0, assumeChar: true },
    ],
    charli: [
        { name: 'Dee Mented', factions: ['Pawn Addicts', 'Burger Shot'], displayName: 0 },
    ],
    charlieblossom: [
        { name: 'Georgina "Windsong" Williams' },
    ],
    charlieteevee: [
        { name: '[Officer] Charlie Cox', assumeServer: 'public' },
    ],
    charlthemisfit: [
        { name: 'Maeve Gray', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    chaseanddogs: [
        { name: 'Tyler McDaniels', factions: ['DoC'], displayName: 0 },
    ],
    Chaseman7GG: [
        { name: 'Miguel Guerrero', factions: ['Vagos'] },
    ],
    Chatterbox: [
        { name: 'Jagger "Chatterbox" Gerardy' },
        { name: 'Chatterbox', factions: ['Burger Shot', 'Clowns'], displayName: 0 },
    ],
    ChavRP: [
        { name: 'Thai Chav', displayName: 2 },
    ],
    Cheever7: [
        { name: 'River Cheever', nicknames: ['River'], assumeServer: 'whitelist' },
        { name: 'Coral Hale', factions: ['Police'], displayName: 0 },
        { name: 'Marina Hart', factions: ['Old Country', 'HK Pawn', 'Gruppe6'], displayName: 0 },
    ],
    Cheez: [
        { name: 'Terry Linkston', factions: ['Manor'] },
    ],
    Chelb: [
        { name: 'Alan Kyles', factions: ['Besties'], displayName: 1 },
        { name: '[Officer] Josh Kade', displayName: 2 },
    ],
    ChelbMyster: [
        { name: 'Alan Kyles', factions: ['Hydra Gang'], displayName: 0, facebook: true },
    ],
    chichjr: [
        { name: 'Jared Creed', nicknames: [], displayName: 1 },
    ],
    chidori_senpai: [
        { name: 'Sabrina Tremblay', factions: ['Police'], displayName: 0 },
    ],
    Chief: [
        { name: 'Baada Ka', factions: ['GSF'], nicknames: ['Chief'], displayName: 3, assume: 'assumeNpNoOther' },
    ],
    Chitman: [
        { name: 'Jax Fury', displayName: 0 },
    ],
    ChloeLock: [
        { name: 'Chloe Blanc', factions: ['Hydra Gang'], nicknames: ['Chloé'], displayName: 0 },
    ],
    chodie: [
        { name: 'Cleg LaCroix', factions: ['Police'], displayName: 0 },
    ],
    Choi: [
        { name: '[Dr.] Choi Zhangsun', factions: ['Medical'], assume: 'assumeOther' },
    ],
    chopoNZ: [
        { name: 'Billy Strut', factions: ['Besties'], nicknames: [], displayName: 1 },
    ],
    ChrisTombstone: [
        { name: '[Deputy] Flop Dugong', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
    ],
    CHUDOCKEN: [
        { name: 'Orpheus Dawson', displayName: 1 },
    ],
    Cinna: [
        { name: 'Kalita Dub', factions: ['The 404'], displayName: 0 },
    ],
    cinnalt: [
        { name: 'Kalita Dub', factions: ['The 404'], displayName: 0 },
    ],
    CinnamonToastKen: [
        { name: 'Chuck Colton' },
        { name: 'Buck Colton', factions: ['ADMC'], nicknames: ['Book', 'Bucky', 'Cultan'] },
    ],
    Citizen_Cannon: [
        { name: 'Marco Richter', factions: ['Prison'], displayName: 0 },
    ],
    Clammy: [
        { name: '[Deputy] Derek Monroe', factions: ['Police'], displayName: 2 },
        { name: 'AK', factions: ['SSB'], assumeServer: 'whitelist' },
        { name: '[Officer] Derek Monroe', assumeServer: 'public' },
    ],
    clapemupgg: [
        { name: 'Zee Davis', nicknames: [], displayName: 1 },
    ],
    ClassyPax: [
        { name: 'Madam Ming', displayName: 0 },
        { name: '[Dr.] Ethan Maw', factions: ['Medical'], displayName: 2 },
    ],
    claytonerp: [
        { name: 'Jebediah Jenkins', factions: ['Police'], displayName: 0 },
        { name: 'Clayton Jenkins', factions: ['Gruppe6'], displayName: 0 },
    ],
    cleaneu: [
        { name: 'Michael Robinson', displayName: 0 },
        { name: 'Pete Bourke', factions: ['Prison'], displayName: 0 },
    ],
    cleanstrikes: [
        { name: 'Alex Fibbler', displayName: 0 },
    ],
    Client: [
        { name: 'Daquan "Peanut" Dumas' },
        { name: '[Officer] Alejandro Picadillo', nicknames: ['World Wide', 'Worldwide'] },
    ],
    cloakrp: [
        { name: 'Gilly Griffin', factions: ['Police'], displayName: 0 },
        { name: 'Cleo Cloak', factions: ['DoJ'], displayName: 0 },
    ],
    CloudyDL: [
        { name: 'Scotty Dixon', displayName: 0 },
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
        { name: '[Deputy] Travis Tribble' },
    ],
    ConnorCronus: [
        { name: 'Roman Sionis', nicknames: ['Mask', 'Black Mask'], displayName: 0 },
        { name: '[Dr.] Isaac Smith', factions: ['Medical'] },
    ],
    Coolio: [
        { name: 'Dequarius "Big D" Johnson', factions: ['Chang Gang'] },
        { name: '[Deputy] Adam Hopping' },
    ],
    cosmic_chimp: [
        { name: 'John Gray', factions: ['Manor'], nicknames: ['John'], displayName: 1 },
    ],
    Cosmic: [
        { name: '[Officer] Alex Casterman', nicknames: [reg(/as+terman\b/)] },
        { name: 'Finlay' },
    ],
    CowsMooingNSuch: [
        { name: '[Clerk] Sophia McMoo', displayName: 1 },
    ],
    CptCheeto: [
        { name: '[Deputy] Ridley Adams' },
        { name: '[Officer] Scott Ridley' },
    ],
    cr4mps: [
        { name: 'Nils Falk' },
    ],
    CraigySmith: [
        { name: 'Frank Junior-Smith', nicknames: ['Frank Jr Smith', 'Franky', 'Frankie', 'Scottish'], displayName: 4 },
    ],
    crayator: [
        { name: 'Craig Burn', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    CrayonPonyfish: [
        { name: '[Officer] Wynona Fontaine', displayName: 2 },
        { name: 'Sadie Thistle' },
        { name: 'Wilhelmina Copperpot', displayName: 2 },
    ],
    crimsonswordsman: [
        { name: 'Raphael Kristof', factions: ['HOA'] },
    ],
    Crix: [
        { name: '[Deputy] Nick Obrien', nicknames: ['557'] },
    ],
    crocc: [
        { name: 'Vittorio "Vito" DiCenzo', factions: ['HK Pawn', 'Old Country'], nicknames: [], displayName: 1 },
    ],
    cronocat: [
        { name: 'Tito Barnabus', factions: ['HK Pawn'], displayName: 0 },
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
        { name: '[Deputy] Crystal Clear', factions: ['Police'], nicknames: ['370'], displayName: 1 },
        { name: 'Four "4T" Tee', displayName: 0 },
        { name: 'Swan DeLeur', factions: ['Brick House', 'Sweepers', 'Casino', 'Gruppe6'], displayName: 0 },
        { name: 'Amie Rush' },
    ],
    CurtisRyan: [
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt', 'Citrus'], factions: ['Chang Gang'], assumeServer: 'whitelist' },
        { name: 'Curtis Swoleroid', leader: true },
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt', 'Citrus'], factions: ['Independent'], assumeServer: 'public' },
        { name: '[Officer] Stephen McClane' },
        { name: 'Cornelius "Cornbread" Scott', factions: ['GSF'] },
    ],
    curvyelephant: [
        { name: '[Deputy] Matt Rhodes', factions: ['Police'], nicknames: ['petty'] },
        { name: 'Brad ?', nicknames: ['B-Rad'], displayName: 3 },
        { name: 'Ryan Parker', factions: ['Lost MC'] },
        { name: '[Lawyer] Kevin Shaw' },
    ],
    Curvyllama: [
        { name: '[Deputy] Lorenzo Lezar', displayName: 1 },
        { name: 'Freya Manning' },
    ],
    cutieno: [
        { name: 'Rue Minmi', factions: ['Police'], displayName: 0 },
    ],
    CydRose: [
        { name: 'Cydney Lune', nicknames: ['Cyd'], displayName: 1 },
        { name: 'Scarlet Young', factions: ['Pawn Addicts'], displayName: 0 },
        { name: 'Maeve Wolfe', factions: ['Police'], displayName: 0 },
    ],
    cynbubs: [
        { name: 'Charli Woods', displayName: 0 },
    ],
    cyr: [
        { name: 'Joe Caine', factions: ['Casino'], displayName: 0 },
        { name: "Khan Di'Sendo", displayName: 0 },
        { name: 'Uchiha Jones', factions: ['Burger Shot', 'Gruppe6', 'Chang Gang'] },
        { name: 'Fred Hurst', nicknames: [reg(/Lim.\s?Bizkif/)] },
    ],
    cyter: [
        { name: 'Demetrius "Draco" Jones', nicknames: ['DJ'] },
    ],
    d00dskoot: [
        { name: 'Axel Crow', factions: ['Police'], displayName: 0 },
    ],
    D4N1ELLE: [
        { name: 'Quimbley Hayabusa', nicknames: ['Q'], displayName: 3 },
    ],
    dabsorlabs: [
        { name: 'Pablo Cortez', factions: ['Saints'], displayName: 0 },
    ],
    DadDoesDrag: [
        { name: 'Kray-Tor Skullfondler', factions: ['HOA'], facebook: true },
    ],
    Dadulio: [
        { name: '[Deputy] Franky Dulio' },
    ],
    dafran: [
        { name: 'Thor Bjorn', factions: ['Independent'], displayName: 0, assumeServer: 'public', wlBias: 1 },
    ],
    daisykiss: [
        { name: 'Molly Rollin', displayName: 0, assume: 'assumeNpNoOther' },
    ],
    daisyks: [
        { name: 'Daisy Ortiz', factions: ['Besties'], nicknames: [], displayName: 1 },
    ],
    dandorac: [
        { name: 'Dan Mclean', factions: ['Saints'], displayName: 0 },
    ],
    DanGheesling: [
        { name: 'Tanner Buttermaker', displayName: 1 },
    ],
    DanHawk1ns: [
        { name: 'Benny Gomez' },
    ],
    Dankdd: [
        { name: 'Oscar Perez', nicknames: ['OP'], displayName: 0 },
    ],
    Dar_: [
        { name: 'Deco Murphy', displayName: 0 },
    ],
    Dark0verseer: [
        { name: '[Development] Dark0', factions: ['Development'], nicknames: ['3D', 'manor'] },
        { name: 'Alfred D. Arko' },
    ],
    DarkestRoast_: [
        { name: '? Scotts', displayName: 2 },
    ],
    Darthbobo77: [
        { name: 'Rudi Rinsen', factions: ['Lost MC'], leader: true },
    ],
    dasMEHDI: [
        { name: '[Officer] Brian Knight', nicknames: ['495'] },
        { name: 'Nino Chavez', factions: ['Sinner Pawn', 'Faceless'] },
        { name: 'Ryan Kindle', factions: ['HOA'] },
        { name: 'Reema', nicknames: ['The "Whorelord"'] },
    ],
    DavidB_NP: [
        { name: 'Vladimir "Vlad" Ivanov' },
    ],
    dawnnnvt: [
        { name: 'Luna Purpose', factions: ['Pawn Addicts'], displayName: 0 },
        { name: 'Delaney Wynter', factions: ['Police'], displayName: 0 },
    ],
    Dawntlyss: [
        { name: 'Don Chord' },
    ],
    Daxxtr: [
        { name: '[Deputy] Vincent Cannoli', nicknames: ['V'], assumeServer: 'whitelist' },
        { name: '[Officer] Vincent Cannoli', nicknames: ['V'], assumeServer: 'public' },
    ],
    dcozmo: [
        { name: 'Spiro Cozmopolidis', factions: ['Saints'] },
    ],
    DDPeter: [
        { name: '[Officer] Benjamin Peppers', assumeServer: 'public' },
    ],
    Deansocool: [
        { name: 'Dean Quincy', displayName: 1, assume: 'assumeNpNoOther', assumeServer: 'whitelist' },
        { name: '[Deputy] Den Shiesty', factions: ['Gruppe6', 'Police'], displayName: 1 },
        // { name: 'Dean Shiesty', factions: ['SSB'], displayName: 0, assumeServer: 'public' },
    ],
    Deejayus: [
        { name: 'Albert Intelligence', nicknames: ['A.I.'] },
    ],
    DEFAC3D: [
        { name: 'Denzel Wallace', displayName: 0 },
    ],
    Dehxter: [
        { name: 'Mark Jango', displayName: 0 },
    ],
    DeLucaRP: [
        { name: 'James DeLuca', displayName: 0 },
    ],
    Denior13: [
        { name: 'Keith "Bulldog" Dooger', factions: ['Lost MC'] },
    ],
    Denis3D: [
        { name: '[Development] Denis3D', factions: ['Development'], nicknames: ['3D'] },
        { name: 'Bob "Bob the Builder" Carter', nicknames: ['The Builder'] },
    ],
    deputydangerdan: [
        { name: "D'Brickashaw King", factions: ['GSF'], nicknames: ['Brick'], displayName: 3 },
        { name: "Robert O'Shay", nicknames: ['Rob'], displayName: 0 },
    ],
    DerpFront: [
        { name: '[EMS] Rivington Rivera', factions: ['Medical'], nicknames: ['Riv', 'E-78'], displayName: 3 },
    ],
    Despooo_: [
        { name: 'Alex Datum', displayName: 0 },
    ],
    devolore: [
        { name: '[Officer] Cassius Kennedy', nicknames: ['Cash'] },
    ],
    dew_ski: [
        { name: 'Alem Barghouthi', displayName: 0 },
    ],
    DexGod: [
        { name: 'JJ Bradley', nicknames: ['Dex'], displayName: 0 },
    ],
    diables: [
        { name: 'Adam Adamczyk', factions: ['Brick House', 'Polish'], displayName: 0 },
    ],
    dibitybopty: [
        { name: '[Officer] Gus Gorman' },
    ],
    DiewithLivv: [
        { name: 'Cindy Tipton', nicknames: ['Girlboss'] },
    ],
    DigbyTathamWarter: [
        { name: 'Nigel Edwardson', factions: ['News'], displayName: 0 },
    ],
    DigiiTsuna: [
        { name: '[Dr.] Kai King', factions: ['Medical'], displayName: 2 },
        { name: 'Maxy Mersion', factions: ['Mersions'], displayName: 0 },
    ],
    DisbeArex: [
        { name: 'Oki Doki', factions: ['Burger Shot'], displayName: 0 },
    ],
    DisguisedToast: [
        { name: 'Amon Gus', displayName: 0 },
        { name: '[Officer] Al Rashio', displayName: 2 },
    ],
    DivaJilly: [
        { name: '[Judge] Siobhan Fitzpatrick', displayName: 1 },
    ],
    DKane: [
        { name: 'Cletus McCoy' },
    ],
    DocWizard: [
        { name: '[Judge] John Bailey', factions: ['DoC', 'DoJ'] },
        { name: 'Terrance "TJ" Walker', factions: ['ADMC'] },
        { name: 'Preston Landor' },
    ],
    Dogbert: [
        { name: '[Deputy] Rocko Colombo', nicknames: [reg(/\bcol.mb./)] },
        { name: 'Luther Caine', factions: ['HOA'] },
        { name: 'Wyatt Mersion', factions: ['Mersions'] },
    ],
    DoluTattoo: [
        { name: '[Development] Dolu', factions: ['Development'] },
    ],
    DongerDayz: [
        { name: 'Kelly Camellia', displayName: 0 },
    ],
    Donut3venTryMe: [
        { name: 'Joey Pepperoni', displayName: 0 },
    ],
    Dorken: [
        { name: 'Valentina Hops' },
        { name: 'Debby Doodle' },
        { name: 'Nicholine Quinn', displayName: 0 },
    ],
    DotoDoya: [
        { name: 'Landon Campbell', displayName: 0, assume: 'assumeNpNoOther' },
    ],
    Doug: [
        { name: 'Gazpacho Prince', factions: ['Independent'], nicknames: ['Spachi', 'Pachi', reg(/[sz]pach/)], displayName: 3 },
        { name: 'William "W" Told', nicknames: ['Lil Pump'] },
        { name: 'Doug Judy', factions: ['Police'], displayName: 0 },
    ],
    DougisRaw: [
        { name: 'Jason Sharpe', displayName: 0 },
    ],
    downbaddavo: [
        { name: 'Davo Gumtree', factions: ['Pawn Addicts'], displayName: 0 },
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
        { name: '[Officer] Jamarius Quangle', nicknames: ['Jamar'], displayName: 2 },
    ],
    DROwSeph420: [
        { name: 'John "Geno" Collins', factions: ['GSF'] },
    ],
    Drwz: [
        { name: 'George Cartier', factions: ['Saints'], displayName: 0 },
    ],
    DTalmer: [
        { name: 'Jackson Wilson', nicknames: ['Blacksteel'], displayName: 0 },
    ],
    DummyWack: [
        { name: 'Nathan Peters', nicknames: ['Nate', 'Turtleneck'] },
    ],
    Dunrunnin12: [
        { name: 'Thomas Dwayne', nicknames: ['The Narrator'], displayName: 0 },
        { name: '[Ride Along] Talgar Blootonn', displayName: 1 },
        { name: 'Talgar Goldtooth', displayName: 0 },
        { name: 'Nay "Delamain" Rater' },
    ],
    Duroode: [
        { name: '[Deputy] James McTavish', displayName: 2 },
    ],
    durptastic: [
        { name: 'Otis Goody' },
    ],
    dustbinflowers: [
        { name: 'Cara Lynn', displayName: 0 },
    ],
    dwagonlvl: [
        { name: 'Dragon Rush', nicknames: [], displayName: 1 },
    ],
    dwjft: [
        { name: 'Dean Watson', factions: ['Development'], nicknames: ['El Deano', 'El Deano (Dean)', 'Dev stuff'], displayName: 1 },
        { name: '[Senator] D.W.', leader: true, nicknames: ['DW', 'Senate'], displayName: 3 },
        { name: '[Watch Party] dwjft', factions: ['Watch Party'] },
        { name: 'Terminator ?' },
        { name: 'Batman ?' },
        { name: 'Lucious Francer', nicknames: ['bwo'], displayName: 0 },
        { name: '[Trooper] Derby West Bromwich', displayName: 1 },
        { name: '[Development] DW', factions: ['Development'], nicknames: ['tinkering'] },
    ],
    Dyoti: [
        { name: '[Deputy] Winston Walker', assumeServer: 'whitelist' },
        { name: '[Deputy] Wyatt Cole', assumeServer: 'public' },
        { name: 'Dawson Whitehead', factions: ['HOA'], assumeServer: 'public' },
        { name: 'Zanzibar Omen', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
        { name: 'Joe Rosner', factions: ['Police'], displayName: 0 },
    ],
    Dyrus: [
        { name: 'Louis Hill', displayName: 0 },
    ],
    DzarekK: [
        { name: 'Lulu ?', displayName: 1 },
    ],
    e1swrld: [
        { name: 'Bek Irving' },
    ],
    EagleAye: [
        { name: 'Eve Summers', factions: ['DoJ'] },
    ],
    eaJParkOfficial: [
        { name: 'Park Parker', nicknames: ['Santa'], displayName: 0, assumeChar: true },
    ],
    edisonparklive: [
        { name: 'Michael Hawkins', displayName: 0 },
    ],
    Edonxd: [
        { name: 'Jordan Elmore', factions: ['Saints'], displayName: 0 },
    ],
    EdwardVanmanz: [
        { name: 'Leon Edwards', nicknames: [], displayName: 1 },
    ],
    eebern: [
        { name: 'Huck Guthrie', factions: ['HOA'], nicknames: ['Huckleberry'] },
    ],
    eHulzy: [
        { name: 'Carmine Mosca', displayName: 0 },
    ],
    EiSEU: [
        { name: 'Jonathan Hoig', displayName: 0 },
    ],
    either: [
        { name: 'Jaden Christopher' },
    ],
    EliotJuun: [
        { name: '[Officer] Douglas Fir', displayName: 1 },
    ],
    ellegrenn: [
        { name: 'Sofia Castellano', displayName: 1 },
    ],
    Elochai: [
        { name: 'Tao Chen', assumeServer: 'whitelist' },
        { name: '[Development] Elochai', factions: ['Development'], nicknames: ['finishing', 'working on', reg(/\b(?:cloth\w+|shirt|outfit|pants|helmet|hat)s?\b/)] },
        { name: 'Leyin Jhail', assumeServer: 'public' },
        { name: 'Damien Grey', displayName: 0 },
    ],
    ElvisRP: [
        { name: '[Deputy] John Dorian' },
    ],
    EmmyWithLove: [
        { name: 'Peaches Hayabusa' },
    ],
    Enanoot: [
        { name: 'Evan Deckard', factions: ['Saints'], displayName: 0 },
    ],
    erickeK: [
        { name: 'Frederick Dutton', factions: ['Lost MC'], displayName: 1 },
    ],
    erobb221: [
        { name: 'Ricky Borby', factions: ['Slim'], displayName: 0 },
    ],
    EsfandTV: [
        { name: '[Deputy] Cletus Cornwood' },
        { name: 'Ali Farmand', displayName: 0 },
    ],
    Evee: [
        { name: '[Deputy] Demi Black', nicknames: ['492'] },
        { name: 'Antigone Weston', assumeServer: 'whitelist' },
        { name: '[Officer] Antigone Weston', assumeServer: 'public' },
        { name: 'Whitney Crawford' },
        { name: 'Adrienne West' },
        { name: 'Meggie "Megan" Right' },
        { name: 'Bree Matthews' },
    ],
    EvilShatner: [
        { name: '[Lawyer] Anna Swallows', nicknames: ['Law'], displayName: 1, assumeChar: true },
    ],
    ewanruss: [
        { name: 'Alfredo Bonucci', factions: ['6Chambers', 'Pawn Addicts'], displayName: 0 },
    ],
    ewroon: [
        { name: 'Erwin Knuckles', factions: ['BPM'], displayName: 0 },
    ],
    ExNinja_: [
        { name: '[Deputy] Paul String', assumeServer: 'public' },
    ],
    explicitx_: [
        { name: 'Jason Sanchez', nicknames: [], displayName: 1 },
    ],
    explodicy: [
        { name: 'Ted Kindly' },
    ],
    extralivia: [
        { name: 'Jessica Bays', factions: ['SSB'] },
        { name: 'Maia Berkeley' },
    ],
    ExtraM1nty: [
        { name: 'Jason "JT" Teen', nicknames: [], displayName: 1 },
    ],
    F3ARzZ: [
        { name: 'Ranjit Raventish' },
    ],
    f3nrirsgaming: [
        { name: 'Francis Angel Luis', displayName: 0 },
    ],
    Fahrenheit: [
        { name: 'Ilya Karishnikov', nicknames: [], displayName: 1 },
    ],
    Fairlight_Excalibur: [
        { name: 'Raja Bahadur', leader: true },
        { name: '[Officer] Alexander "Fox" Fawkes' },
    ],
    Fairzz: [
        { name: 'Huxley Johnson', assumeServer: 'whitelist' },
        { name: '[Deputy] Huxley Johnson', assumeServer: 'public' },
        { name: 'Paddy Patrickson', factions: ['Lost MC'] },
    ],
    fakejdn: [
        { name: '[Deputy] Jaden Bane', displayName: 2 },
    ],
    FalconryGal: [
        { name: 'Jenna Tuttle', displayName: 2 },
    ],
    FalloftheSeason: [
        { name: 'Ophelia Quinn', nicknames: ['Ophie'] },
        { name: 'Odiment Sparrow' },
        { name: '[EMS] Orianna "Ori" Frost', factions: ['Medical'], nicknames: ['Olive'] },
        { name: 'Clementine Rackham', factions: ['Police'], displayName: 0 },
    ],
    Familybanter: [
        { name: '[Dr.] Jayce Petra', factions: ['Medical'], displayName: 0 },
        { name: 'Taran Raid', factions: ['Lost MC'], displayName: 0 },
    ],
    fanfan: [
        { name: 'Fan "Fanny" Fan', factions: ['6Chambers', 'DoC', 'Pawn Addicts', 'Besties'] },
    ],
    Farmhouse78: [
        { name: 'Jane Farmer' },
        { name: 'Steven Hayes', displayName: 0 },
    ],
    fatboislimyo: [
        { name: 'Fin Win', factions: ['SSB'], displayName: 0 },
    ],
    FeliciaDay: [
        { name: 'Cherryclarie Dinwittie', nicknames: ['CherryClaire'], displayName: 3 },
    ],
    FelixLeLoup: [
        { name: 'Felix Volk' },
    ],
    FerretRP: [
        { name: 'Alberto Weaselton', factions: ['Lost MC'], nicknames: ['Al', reg(/\balb/)] },
    ],
    Ferst711: [
        { name: 'Tom Ryan', displayName: 0 },
        { name: '[Lawyer] Ferst Temple' },
    ],
    Fiendota: [
        { name: '[Officer] Booga "Booba" Ooga', nicknames: ['651'], displayName: 1 },
        { name: 'Jonathan "Magnum" Humes', nicknames: [reg(/\bP\.?\s*I\b/)] },
        { name: 'Boobingle Dan' },
    ],
    Finlay: [
        { name: 'Mick Amari', factions: ['Manor'], nicknames: ['Mick9'] },
    ],
    firecrackthat: [
        { name: 'Stumbles Fumbles', factions: ['Clowns', 'Police'], displayName: 0 },
    ],
    firthy: [
        { name: 'Beetlejuice', factions: ['Pawn Addicts', 'Gruppe6'], displayName: 0 },
    ],
    Five0AnthO: [
        { name: '[Trooper Chief] Tony Andrews', highCommand: true },
        { name: 'Rhode Block', displayName: 0 },
    ],
    FiveMArena: [
        { name: 'FiveM "Arena Tournament" Arena', factions: ['Watch Party'], displayName: 2 },
    ],
    flakkoflakko: [
        { name: 'Romeo "Z" Zaharias Cruz' },
    ],
    fleureo: [
        { name: 'Quinn Naiper', displayName: 0 },
    ],
    flnlayy: [
        { name: 'Mick Amari', factions: ['Manor'], nicknames: ['Mick-9'], displayName: 1 },
    ],
    Flocko1400: [
        { name: 'Aaron Flocko', displayName: 0 },
    ],
    FloMcNasty_TV: [
        { name: 'Richard Chiclets', factions: ['GSF'], nicknames: ['Dick Chiclets'], displayName: 3, assumeServer: 'whitelist' },
        { name: 'Lilith Sponge', nicknames: ['Lil Sponge'], displayName: 3 },
        { name: '[Officer] William Clubb', nicknames: ['Billy'], displayName: 2 },
        { name: 'Doc Chocolates', displayName: 0, assumeServer: 'public' },
    ],
    Flynno: [
        { name: '[Officer] Mickey Reynolds', displayName: 2, assume: 'assumeNpNoOther' },
    ],
    fofoplays: [
        { name: 'Adam Pike', factions: ['Police'], displayName: 0 },
    ],
    Foolish_Gamers: [
        { name: 'Morty Karlson', displayName: 0 },
    ],
    Forlorn79: [
        { name: '[EMS] Amoris Pax', factions: ['Medical'] },
    ],
    forsen: [
        { name: 'Sven Snusberg' },
        { name: 'Mason Foorhees' },
    ],
    FortyOne: [
        { name: 'Lucas Ortiz' },
        { name: '[Deputy] John Archer' },
        { name: 'Jose Martin Perez', nicknames: ['JMP'] },
        { name: 'Don Russo', displayName: 0 },
        { name: 'Jacob "Funny Man" Storm' },
        { name: 'Arious "Breezy" Campbell' },
    ],
    FourMilli: [
        { name: 'Brad Bett' },
        { name: '[Deputy] Preston Hale' },
    ],
    fragss: [
        { name: 'Wade Bradford', factions: ['Gruppe6', 'Police'], displayName: 0 },
    ],
    FragZone: [
        { name: 'Derek Bogart', displayName: 0 },
    ],
    frank_ladd: [
        { name: 'Frank Scaletta', factions: ['Manor'], nicknames: ['Morning Crew 2IC'], displayName: 1 },
    ],
    FredosRP: [
        { name: 'Fredo Sanchez', displayName: 1 },
    ],
    frightval: [
        { name: 'Berry ?', displayName: 1, assumeServer: 'public' },
    ],
    Frobotic: [
        { name: 'Dizzy Bluffins', factions: ['SSB'], displayName: 1 },
    ],
    frododachi: [
        { name: 'Woody Bumblebear', factions: ['DoC'], displayName: 0 },
        { name: 'Frodo Dacci', factions: ['Police'], displayName: 0 },
    ],
    frogbound: [
        { name: '[Officer] Edward Nygma' },
        { name: 'Alexander Egorov' },
    ],
    Frshnesss: [
        { name: 'Tyrell Fresh', factions: ['Hydra Gang'], nicknames: ['Ty'], displayName: 0 },
    ],
    Frynaut: [
        { name: 'Kratos Of Sparta', nicknames: ['God of War', 'God'] },
    ],
    fuslie: [
        { name: 'April Fooze', factions: ['Chang Gang'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Connie Clark', nicknames: ['cop'], displayName: 2 },
        { name: '[Officer] Connie Clark', nicknames: ['cop'], displayName: 2, assumeServer: 'public' },
    ],
    Fyzicul: [
        { name: 'Keith "Lando" Wanderlust', nicknames: ['Stormborn', 'Shaman', 'Mountain Kingdom'], displayName: 0 },
        { name: 'Fyz', displayName: 1 },
    ],
    Gabz: [
        { name: '[Development] Gabz', factions: ['Development'], nicknames: ['3D'] },
    ],
    Galackxyz: [
        { name: 'Annie Quigley', displayName: 0 },
    ],
    GalacticDPN: [
        { name: 'Roman Shacks', nicknames: ['Professor Galactic', 'The Doctor', 'Professor'], displayName: 0 },
    ],
    GameDemented: [
        { name: '[Deputy] Peter Johnson' },
    ],
    Garek: [
        { name: 'Burt "Gloryon" Beans', factions: ['Sinner Pawn', 'Piss Boiz', 'Casino'], nicknames: ['Cleric'] },
        { name: 'Garek', displayName: 1 },
    ],
    GattisTV: [
        { name: 'Carlos Guzman', factions: ['Vagos'], displayName: 0 },
    ],
    Gavbin_: [
        { name: 'Gavin Holliday' },
    ],
    geega: [
        { name: 'Giovanna Gambino', factions: ['Sinner Pawn', 'Casino'], displayName: 0 },
        { name: 'Maya Peanits', factions: ['Police'], displayName: 0 },
    ],
    geenelly: [
        { name: 'Misty Bloom', displayName: 0 },
    ],
    gekgemu: [
        { name: 'Serena Riven' },
    ],
    GeneralEmu: [
        { name: '[Commissioner] Lance Malton' },
    ],
    ggqf: [
        { name: 'Stanly "Stag" Lessfield', nicknames: ['Stagdancer', 'Gea', 'Paladin'] },
        { name: 'Garth Gregory Quincy Fafnir', nicknames: ['vlog'], displayName: 1 },
        { name: 'Daniel Hopper', displayName: 0 },
        { name: '[Officer] Bennett Calhoun' },
    ],
    ghost_medic: [
        { name: 'Luke Riley', factions: ['Saints'], displayName: 0 },
    ],
    ghotties: [
        { name: 'Dixie Dempsey', factions: ['6Chambers', 'Pawn Addicts'], displayName: 0 },
    ],
    gibbs_gg: [
        { name: 'Walter Franks', displayName: 0 },
    ],
    gigiactually: [
        { name: ' Blondie Banks', factions: ['Manor'], nicknames: ['Treasurer'], displayName: 1 },
    ],
    Gilthflo: [
        { name: 'Percy Perkins', displayName: 0 },
    ],
    gingersnap___: [
        { name: 'Sophie Sanders', factions: ['Collective'], displayName: 0 },
        { name: 'Quinn Decker', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
    ],
    Giosooo: [
        { name: 'Gioso King', nicknames: ['Gio'], displayName: 3 },
    ],
    givemeuhminute: [
        { name: 'Curtis LeBeaux', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
    ],
    glitterglock19: [
        { name: 'Hailey Maxwell', factions: ['Gruppe6', 'Police'], displayName: 0 },
    ],
    gnaw: [
        { name: 'Maverick Adler', factions: ['Saints'] },
    ],
    Gnomey_au: [
        { name: 'Max Moody', displayName: 0 },
    ],
    goldelena: [
        { name: 'August Vakarian' },
        { name: '[Deputy] Manuela Santos' },
    ],
    Golden_Laurel: [
        { name: 'Gillea Taylor', factions: ['HOA'] },
    ],
    GoldGlove: [
        { name: 'Marvin King', nicknames: ['Marv'], displayName: 3 },
    ],
    goodnightjackalope: [
        { name: 'Stevie McQueen', factions: ['ADMC'], displayName: 0 },
    ],
    goose_thegreat: [
        { name: 'Thad Owens', factions: ['HOA'], displayName: 0 },
    ],
    gopnikrp: [
        { name: 'Mateo Radić', factions: ['Police'], displayName: 0 },
    ],
    gorgakuma: [
        { name: 'Akuma Gorg' },
    ],
    GoufBam: [
        { name: 'Zee Bruh', factions: ['Besties'], nicknames: ['ZB'], displayName: 0 },
    ],
    Graewan: [
        { name: '[Deputy] Bobbi Russel', displayName: 2 },
        { name: 'Natascha Russel', factions: ['Police'], displayName: 0 },
    ],
    grammthegibbon: [
        { name: 'Claytone Orwell', factions: ['HK Pawn', 'Old Country', 'Gruppe6'], displayName: 0 },
    ],
    grandact: [
        { name: 'Gunner Kane', factions: ['Police'], displayName: 0 },
    ],
    GrandPOObear: [
        { name: 'Mick Jhonson', displayName: 1 },
    ],
    Greekgodx: [
        { name: '"Tay Tay" Tyrone', nicknames: ['TayTay'] },
        { name: 'Tea Tea', displayName: 0 },
    ],
    GreenishMonkey: [
        { name: 'Bobby Brown', factions: ['Chang Gang'] },
        { name: '[Officer] James Brown', displayName: 2 },
    ],
    gregsstory: [
        { name: 'Orin Daft', factions: ['Police'], displayName: 0 },
    ],
    GrimzyFFG: [
        { name: 'Sly Santana' },
    ],
    GTAWiseGuy: [
        { name: 'Eddie Marshall' },
        { name: '[Deputy] Jim Underwood', nicknames: ['337', reg(/\w+wood\b/)] },
        {
            name: '[Development] GTAWiseGuy',
            factions: ['Development'],
            nicknames: ['Handling', 'Fixes', 'Fixing', 'Tuning', reg(/\btuners?(?:\s*\w*)*leaks/), reg(/\bnew\s+\w+\s*stuff/)],
        },
        { name: 'Igor Skovacic', nicknames: ['GOR'] },
        { name: 'Robin Williams', displayName: 0 },
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
        { name: 'Tomathy Steampipe' },
    ],
    gzx63: [
        { name: 'Alex Tankian', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
    ],
    HAchubby: [
        { name: 'Ha Chu', displayName: 0 },
    ],
    HalifamousNS: [
        { name: 'Devon Davidson', nicknames: ['DD'], displayName: 0 },
    ],
    hallon156: [
        { name: 'Hanh Do' },
    ],
    hannerb_naner: [
        { name: '[EMS] Jenny Schildt', factions: ['Medical'] },
    ],
    HannibalSeca: [
        { name: 'Willy Wong', displayName: 0 },
    ],
    hansgaming08: [
        { name: '[Chief of Police] M Hans', assumeServer: 'international' },
    ],
    Harbinger2183: [
        { name: '[Deputy] Ethan Maxwell', nicknames: ['505'], displayName: 2 },
    ],
    Harmless: [
        { name: 'Maynard "Idiot" Schmidt', factions: ['6Chambers', 'Pawn Addicts', 'Burger Shot', 'Besties'] },
        { name: 'Alvis Pulley', factions: ['Police'], displayName: 0 },
    ],
    HARMSwahy: [
        { name: 'Blaine Burke' },
        { name: '[Officer] Wilson Burke' },
    ],
    Harry: [
        { name: 'Harry Brown', factions: ['Brick House', 'Piss Boiz', 'Casino'] },
        { name: '[Deputy] Kevin Little', nicknames: ['Lil Kev', 'Kev'], displayName: 2 },
    ],
    HasanAbi: [
        { name: 'Humberto Antonio Donato Pecorino', nicknames: ['Don', 'Donnie', reg(/\bOva[h']? here\b/)], displayName: 5 },
    ],
    hauce011: [
        { name: 'Stacey Recht', factions: ['Gruppe6'], displayName: 0 },
        { name: 'Constance Lee Recht', factions: ['Police'], displayName: 0 },
    ],
    HaydenLeBFN: [
        { name: 'Hayden Smith', factions: ['Saints'], displayName: 1 },
    ],
    HayeDel: [
        { name: 'Del Boy', nicknames: ['DB'], displayName: 0 },
    ],
    hazan: [
        { name: 'Zahn Zias', factions: ['Brick House', 'The 404', 'Gruppe6'], displayName: 0 },
    ],
    hdjaws: [
        { name: 'Idris Kingsley', displayName: 0 },
    ],
    Hedisaurus: [
        { name: '[Ranger] Ramona Celeste', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: '[EMS] Hedi Saurus', factions: ['Medical'], assume: 'assumeNpNoOther', assumeServer: 'whitelist' },
        { name: '[Deputy] Ramona Celeste', displayName: 1, assumeServer: 'whitelist' },
    ],
    heyimzed: [
        { name: 'Edbert Ropeburn', factions: ['ADMC', 'Faceless'] },
        { name: 'Jason Krieger', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    // heymuuni: [
    //     { name: 'Muuni Luna', factions: ['Independent'] },
    // ],
    heymadge: [
        { name: 'Elizabeth Reed', factions: ['Police'], displayName: 0 },
    ],
    HeyOrbz: [
        { name: '[Officer] Casey Valentine' },
        { name: 'Richie Mersion', factions: ['Mersions'], displayName: 0 },
    ],
    hidaruma: [
        { name: 'Nico Kanto', factions: ['HOA'] },
    ],
    hiicks_: [
        { name: 'Murray Falconer', factions: ['DoJ'], displayName: 0 },
    ],
    himadi: [
        { name: 'Madi Badi', displayName: 0 },
    ],
    HiredGunRP: [
        { name: '[Deputy] Colt Shepherd' },
    ],
    Hirona: [
        { name: '[Trooper] Olivia Copper' },
        { name: 'Emily Maw' },
        { name: 'Jenny Hawk', displayName: 0 },
        { name: 'Onya Block', displayName: 0 },
        { name: 'Debbie Hopper', displayName: 0 },
        { name: 'Kristen Rules', displayName: 0 },
        { name: 'Griselda "Zelda" Harth', factions: ['HOA'] },
        { name: 'Olga Sazkaljovich', nicknames: ['Olgaa', 'Olgaaa', 'Olgaaaa'] },
    ],
    hobbittrash: [
        { name: '[Deputy] Tracy Martell', nicknames: ['Cop', 'Captain', reg(/\b\w+tell/)] },
        { name: '[Judge] Katya Zamalodchikova', displayName: 1 },
        { name: 'Jane Obama', nicknames: ['jesus', 'christ'], displayName: 0 },
        { name: 'Aja Monet', displayName: 0 },
        { name: 'Jane Souls', displayName: 0 },
        { name: 'Rounda Block', displayName: 0 },
        { name: "Kayden Dell'Anno" },
    ],
    hobosrust: [
        { name: 'Hei Zeus', factions: ['Lost MC'], displayName: 0, assumeServer: 'public' },
    ],
    hol_stream: [
        { name: 'June Dean', factions: ['Casino', 'DoC', 'Slim'], displayName: 0 },
    ],
    HonathanTV: [
        { name: '[Deputy] Honathan Yolo' },
    ],
    Hoss: [
        { name: 'Chip Wheeler', factions: ['ADMC'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Rocky Balboner', displayName: 0, assumeServer: 'public' },
    ],
    Hotted89: [
        { name: '[Deputy] Matthew Espinoz', nicknames: ['Airspinoz', 'Air 1 Andy'] },
        { name: 'Joaquin "JJ" Jimenes', factions: ['KC', 'Faceless'] },
        { name: 'Allen Widemann', factions: ['Chang Gang'] },
    ],
    HPD007: [
        { name: 'Joe Flatley', nicknames: ['Fat Joe'], displayName: 3 },
    ],
    huddy_nz: [
        { name: 'Ash Huddy Hudson' },
    ],
    HulzyRP: [
        { name: 'Joseph "Big Joe" Gambini', factions: ['HK Pawn', 'Old Country', 'DoJ'], nicknames: [], displayName: 1 },
    ],
    Huntag: [
        { name: 'Freddy Fastfingers', factions: ['HOA'], displayName: 0 },
    ],
    Hurnani: [
        { name: 'Bruno Brown', displayName: 1 },
        { name: 'Borat ?' },
        { name: 'James-Kamea Brown', factions: ['Vagos'] },
    ],
    HutchMF: [
        { name: 'Hutch Hutcherson', factions: ['Chang Gang'], nicknames: [reg(/\bkilled a man/), 'racing', 'business', 'paintball', 'h&o', reg(/\bwar/)] },
        { name: '[Deputy] Jaryd Peak' },
        { name: 'Drew "Dead Eye Drew"', nicknames: ['DeadEye'] },
        { name: 'Hutch Hendrickson' },
    ],
    HydraPlz: [
        { name: 'Gandalf "Stankyleg" Butters' },
        { name: '[Deputy] John Hydra', displayName: 2 },
    ],
    iamnxera: [
        { name: '[Officer] Tommy Tinker', displayName: 2, assumeServer: 'whitelist' },
        { name: '[Officer] Tommy Tinker', displayName: 1, assumeServer: 'public' },
    ],
    IAmSoul_RP: [
        { name: 'Johnathen Riker' },
    ],
    IanDavis: [
        { name: 'Reginald Watson', nicknames: ['Sir'], displayName: 0 },
    ],
    iballzach: [
        { name: '[EMS] Zachary Kellogg', factions: ['Medical'] },
    ],
    IbbyRed: [
        { name: 'Jose "Fat Joe" Santini', factions: ['Vagos'] },
    ],
    icky619: [
        { name: 'Andi Coots', factions: ['DoJ'], displayName: 0 },
    ],
    IcyMindRacer: [
        { name: '[Dispatch] Iris Nivira', displayName: 1 },
    ],
    iddqd: [
        { name: 'Jesse Reed', factions: ['ADMC'], nicknames: ['Cree'] },
    ],
    idksean: [
        { name: 'Sean Deane', displayName: 0 },
    ],
    IG_Raptor: [
        { name: '[Ranger] Matt Cordell', assumeServer: 'international' },
    ],
    iGumdrop: [
        { name: 'Emi Drop' },
    ],
    IHeartGaming: [
        { name: 'Markuz Jackelson', factions: ['GSF'], nicknames: ['Meatball', 'Meat', 'Meatwad'] },
    ],
    iiMancini: [
        { name: 'John Mancini', displayName: 0 },
    ],
    IJuanAWin: [
        { name: 'Machete Cortez', factions: ['Marabunta'] },
    ],
    ikitty: [
        { name: 'Kitty Dream', factions: ['Casino', 'Gruppe6'] },
    ],
    ilenol: [
        { name: 'Max Larson', displayName: 0 },
    ],
    illwac: [
        { name: 'Bob Moss', displayName: 0 },
        { name: 'Robyn Banks', factions: ['Police'], displayName: 0 },
    ],
    ILYCappiCat: [
        { name: 'SunMoon Lee', displayName: 1 },
    ],
    ilyjordi: [
        { name: 'Ralphie Ralphs', factions: ['Independent'], displayName: 1 },
        { name: 'Ralphie Ralphs' },
    ],
    imaceinhd: [
        { name: 'Jonah Sloe', factions: ['Police'], displayName: 0 },
    ],
    imblade: [
        { name: 'Jeremy Justice', factions: ['Police'], displayName: 0 },
    ],
    imdevyn: [
        { name: 'Daniel Khol', factions: ['Manor'], nicknames: ['DeeK'], displayName: 1 },
    ],
    ImFluffinJiggly: [
        { name: '[Deputy] ? Wilkons', assumeServer: 'public' },
    ],
    indoorscream: [
        { name: 'Morag Goul', factions: ['DoC'], displayName: 0 },
    ],
    indur: [
        { name: '[Deputy] Dea Bane', assumeServer: 'public' },
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
    ipink_: [
        { name: 'Omar Samir', factions: ['Besties'], nicknames: [], displayName: 1 },
    ],
    iqkev: [
        { name: 'Kev In', displayName: 0 },
    ],
    irish_gt: [
        { name: 'Sean McQuillen', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    IrishGT: [
        { name: 'Sean McQuillen', factions: ['Hounds', 'Faceless'], nicknames: ['Irish'], displayName: 0 },
    ],
    ironmonkeytv: [
        { name: 'Winston Bolt' },
        { name: 'Dragon' },
    ],
    ishyy: [
        { name: 'Leisha De Witt', factions: ['Police'], displayName: 0 },
    ],
    itmeJP: [
        { name: 'Wilbur Higgins' },
    ],
    ItsCaitlinCarol: [
        { name: 'Kate Barlow', factions: ['DoJ', 'Order'], displayName: 0 },
        { name: 'Vanessa Rosewood', factions: ['Police'], displayName: 0 },
    ],
    itscrystaleyes: [
        { name: 'Adelaide Finch', factions: ['DoJ', 'Order'], displayName: 0 },
    ],
    itsElleCee: [
        { name: 'Elle Queenie', factions: ['HK Pawn', 'Old Country'], nicknames: [], displayName: 1 },
    ],
    ItsFabelz: [
        { name: 'Isaac Downes', factions: ['Police'], displayName: 0 },
    ],
    itsfragss: [
        { name: 'Maxwell Connorth', nicknames: ['Max'], displayName: 1 },
    ],
    ItsHighsky: [
        { name: 'Sky Parks', displayName: 0 },
    ],
    itsHolmes: [
        { name: 'Andre Tyson', factions: ['6Chambers', 'Pawn Addicts', 'Gruppe6', 'SSB', 'Faceless'], displayName: 1 },
    ],
    itsjustasummerjob: [
        { name: 'Sabith "Bunny" Cohen' },
    ],
    ItsJustJosh: [
        { name: 'Levi Dawson', factions: ['SSB'] },
    ],
    ItsLeslie: [
        { name: 'KyrinChan "Leyla" WeuhBou', nicknames: ['Nightingale', 'Wizard', 'Embervale', reg(/\bley+l+a/)] },
    ],
    ItsLSG: [
        { name: '[Officer] Jack Miller' },
    ],
    itsmedeimo: [
        { name: 'Damian Greco', displayName: 0 },
    ],
    itsmejjroleplay: [
        { name: 'Johnny Jacksun', nicknames: ['JJ'], displayName: 0 },
    ],
    ItsNowas: [
        { name: 'Trequan Jenkins', factions: ['Chang Gang'], nicknames: ['Ashtray'], displayName: 3 },
        { name: '[Deputy] Eli Hawkins' },
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
        { name: 'Lucas Shadow', displayName: 0 },
    ],
    ItsSlikeR: [
        { name: 'Chris Turtle', nicknames: ['Lil Sneach', 'Lil Sneech', 'Sneach'], displayName: 3 },
        { name: 'Hershall Turtle', nicknames: ['Hershal'] },
        { name: 'Abe Makaveli', displayName: 0, assumeServer: 'whitelist' },
        { name: 'Abe Moe', displayName: 0, assumeServer: 'public' },
        { name: 'Abraham Mohammed' },
    ],
    ittszach: [
        { name: 'Avago Bepsi', factions: ['DoC'], displayName: 0 },
    ],
    IzaEleonora: [
        { name: 'Ylva Sjögren', factions: ['Saints'], nicknames: ['Sjogren'], displayName: 1 },
    ],
    izzidizzy: [
        { name: '[Deputy] Ruby Hope', displayName: 2 },
    ],
    Jaakuvt: [
        { name: 'Klaus Kane', nicknames: [], displayName: 1 },
    ],
    JaboodyShow: [
        { name: 'Jerry Curl', displayName: 0 },
        { name: 'Derrick Derpman' },
        { name: 'Vincent' },
    ],
    Jack: [
        { name: 'Jack Cortair', factions: ['6Chambers', 'Pawn Addicts', 'Besties'], nicknames: ['Cookie', 'Galleta'], assumeServer: 'whitelist' },
        { name: 'Jack Cortair', nicknames: [reg(/\bpimp|pimp\b/)] },
        { name: 'Dez Wright', factions: ['Slim', 'Besties'], nicknames: ['Doofy', reg(/\bdez/)], displayName: 1 },
    ],
    Jackhuddo: [
        { name: 'Shane Powers', factions: ['Pawn Addicts'], nicknames: ['ShaneO', 'ShanO'] },
        { name: 'Hubbo Samson' },
    ],
    Jaden: [
        { name: 'Jaden ?', factions: ['Hydra Gang'] },
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
        { name: '[Officer] Marcus Miller', assumeServer: 'public' },
    ],
    jason_plays_games: [
        { name: '[Judge] Norman Adams', displayName: 2 },
        { name: 'Ian Sawyer', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    jastatank: [
        { name: 'Larry Jonson', displayName: 0 },
    ],
    Javaaaa: [
        { name: 'Joseph Yorinobu', nicknames: ['Majima', 'Goro'], displayName: 3 },
        { name: 'Lillia Claurel' },
    ],
    JavaShorty: [
        { name: '[Deputy] Shelby Lane', nicknames: ['588'], displayName: 1 },
    ],
    jay4871: [
        { name: 'Dave Perry', displayName: 0 },
    ],
    JayAitch: [
        { name: 'Alex "Lil Cap" Söderberg', factions: ['ADMC'], nicknames: ['Soderberg', 'Cap'], displayName: 0, assumeServer: 'whitelist' },
        { name: '[Deputy] Roger S', nicknames: ['546'], displayName: 1 },
        { name: 'Lil Strap', displayName: 0, assumeServer: 'public' },
        { name: 'Lil Cap', factions: ['Collective', 'Sinner Pawn', 'Gruppe6'], displayName: 0 },
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
    Jaygo__: [
        { name: 'Nathan Pierce', factions: ['Gruppe6'], displayName: 0 },
        { name: 'Nigel Higgins', factions: ['Police'], displayName: 0 },
    ],
    jayplays: [
        { name: 'Jay Martin', factions: ['Manor'], nicknames: ['Jay'], displayName: 1 },
    ],
    jdot: [
        { name: 'Andrew "Drew" Jackson', factions: ['GSF'] },
        { name: 'Miles Landon', assumeServer: 'whitelist' },
        { name: 'Miles Landon', nicknames: ['451'], assumeServer: 'public' },
        { name: 'Jake LaMotta', displayName: 0 },
    ],
    jeimiru: [
        { name: 'David Jackson', factions: ['Hydra Gang'], nicknames: ['Benz'], displayName: 3 },
    ],
    Jellypeanut: [
        { name: 'Rai "Juuls" Cumberwoood' },
        { name: '[Prince] Habib Khalid' },
    ],
    jenkinsss: [
        { name: 'David Gilkenly', factions: ['BPM'], displayName: 0 },
    ],
    jennaembers: [
        { name: 'Jordan Miles', factions: ['HK Pawn'], displayName: 0 },
    ],
    Jennybeartv: [
        { name: '[Deputy] Peach Chee', factions: ['Police'], displayName: 1 },
        { name: 'Peachingle Dan' },
        { name: 'Roxanne Daniels', factions: ['Casino', 'Burger Shot', 'DoC', 'Gruppe6'], displayName: 0 },
    ],
    jennylouise1997: [
        { name: 'Louise Campbell', factions: ['Saints'] },
        { name: 'Jenny Smith', displayName: 0 },
    ],
    jerma985: [
        { name: 'Donnie McDermott', factions: ['Burger Shot'], displayName: 0 },
    ],
    JerseysGhost: [
        { name: 'Antonio \'KOLD\' Valentino', nicknames: [], displayName: 1 },
    ],
    jess_tation: [
        { name: 'CJ Parker' },
    ],
    jessbleck: [
        { name: '[Deputy] Jessie Dallas', assumeServer: 'public' },
    ],
    jessimiyaseo: [
        { name: 'Jessi Adler', displayName: 0 },
    ],
    jettskiiee: [
        { name: 'Xavier "Xay" Sin', factions: ['Independent'] },
    ],
    jettt: [
        { name: 'Ethan Cross', factions: ['Police'], displayName: 0 },
    ],
    Jfourmess: [
        { name: 'Vince Watson', displayName: 0 },
    ],
    jimmytulip: [
        { name: 'Wayne Biggaz', factions: ['Chang Gang'], nicknames: [reg(/\bwe+y+n/), reg(/\bwayne/)] },
        { name: 'Wayne Biggaz' },
    ],
    JinxerTTY: [
        { name: 'Brandon Bowers', nicknames: [String.fromCharCode(68, 117, 109, 98, 102, 117, 99, 107)], displayName: 3 }, // -_-
    ],
    JJFried: [
        { name: '[Deputy] Jace Barter' },
        { name: 'Ace Carter', factions: ['Hydra Gang'] },
    ],
    JJLakee: [
        { name: 'Jay Jarvis', factions: ['Hydra Gang'], nicknames: ['JJ', 'MG'], displayName: 0 }, // facebook
    ],
    JoblessGarrett: [
        { name: 'Garrett Jobless', factions: ['Chang Gang'] },
        { name: '[Officer] Garry Berry' },
    ],
    Joeeigel: [
        { name: '[Officer] Arthur MacNee', displayName: 1 },
    ],
    JoeSmitty123: [
        { name: '[Officer] Michael Murphy' },
    ],
    Jogiiee: [
        { name: 'Emma Gaine', factions: ['Medical'], displayName: 1 },
        { name: '[Officer] Piper Paisley' },
        { name: 'Jessie Jugg' },
        { name: '[Dispatch] Penny Schildt' },
        { name: 'Eva Wall' },
        { name: '[Lawyer] Maggie Kayden' },
    ],
    JonLaw_: [
        { name: 'Jon Joyce', factions: ['Manor'], nicknames: ['Kong', 'Kong Joyce', 'Pookie'], displayName: 0 },
    ],
    jonnoruk: [
        { name: 'Max Brown', factions: ['Manor'], nicknames: ['Stoner'], displayName: 0 },
    ],
    JonnyRotten: [
        { name: 'Billy Phresh', factions: ['Chang Gang'], displayName: 0 },
    ],
    Jonthebroski: [
        { name: 'Denzel Williams', nicknames: ['The "Cleaner"', 'Presidente'] },
        { name: '[Deputy] Johnny Divine', displayName: 0 },
        { name: 'Broskingle Dan' },
        { name: '[Senator] Sean Davis', leader: true, nicknames: ['Senate'] },
        { name: 'Dio Ivanov', factions: ['Faceless'] },
        { name: 'Holden D. Block', displayName: 0 },
        { name: 'Thomas DeAngelo', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
    ],
    JoshOG: [
        { name: 'Mario Le-Pipe', factions: ['Chang Gang'], affiliate: true, displayName: 0 },
    ],
    JostQQ: [
        { name: 'Jost Zueger', displayName: 0 },
    ],
    JOVIAN: [
        { name: '[Deputy] Billiam Williams', displayName: 1 },
    ],
    JPeavy: [
        { name: 'Dante Thomas', factions: ['HOA'], displayName: 0 },
    ],
    JPF_14: [
        { name: 'Jay Martin', factions: ['Manor'], displayName: 0 },
    ],
    JPKMoto: [
        { name: '[Clerk] Odessa Pearson', displayName: 1 },
        { name: 'Nora Dupres' },
        { name: 'Zee Nanakaze Mathers' },
    ],
    JR__H: [
        { name: '[Lawyer] Lou Pohl', displayName: 1 },
    ],
    JRandyDL: [
        { name: 'Wyatt Jones', factions: ['ADMC'], displayName: 0 },
    ],
    Jubby: [
        { name: '[Deputy] Ricardo Perez', displayName: 1 },
    ],
    Judd: [
        { name: 'Judd Lincoln', factions: ['Chang Gang'] },
        { name: '[Judge] Coyote Russell', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Judd Lincoln', displayName: 1, assumeServer: 'public' },
        { name: 'Reverend I.M. Voland' },
    ],
    juelzzz: [
        { name: 'Maria Estrella Duarte', factions: ['Vagos'], nicknames: [reg(/\be+s+t+r+e+l/)], displayName: 2 },
    ],
    Juggs: [
        { name: 'Sidwig Crawshank', nicknames: [reg(/\bsidwig/)], displayName: 1, leader: true },
        { name: 'Lenny Large', nicknames: [reg(/\blenny/)], displayName: 0 },
        { name: 'Traevon Williams', nicknames: ['The Barber'], displayName: 3 },
    ],
    JukeBoxEM: [
        { name: 'Tony Foster' },
        { name: 'Shane Jones' },
    ],
    Julian: [
        { name: 'Julian Santorno', factions: ['Besties'], assumeServer: 'whitelist' },
        { name: '[Officer] Octavius Scarpetta', nicknames: ['Octo', 'Scar', 'Oct'], displayName: 3 },
        { name: 'Julian Santorno', factions: ['Independent'], assumeServer: 'public' },
        { name: '[Officer] Jules Scarpetta', nicknames: [reg(/\bscar/)], displayName: 1, assumeServer: 'public' },
    ],
    JustaMinx: [
        { name: 'Mercy Peggers' },
    ],
    JustAnotherBro: [
        { name: 'Angus Oblong II', factions: ['Clowns'], displayName: 0 },
    ],
    JustDurant: [
        { name: 'Toni Balbani', displayName: 0 },
    ],
    JustenTymes: [
        { name: 'Blanden Haster', factions: ['HOA'], displayName: 1 },
    ],
    justFritz: [
        { name: 'Fritz Ericson' },
    ],
    JustJambaa: [
        { name: 'La Flare Davis', nicknames: ['La Flare'], displayName: 4 },
    ],
    JustJamie: [
        { name: '[Deputy] George Lawson', nicknames: ['592'] },
        { name: 'Tommy Cruizer' },
        { name: 'Jamie Bee', displayName: 0 },
    ],
    JustPenchi: [
        { name: 'Casper Clock', factions: ['Prison'], nicknames: ['Plague Doctor'], displayName: 3 },
    ],
    justteetaa: [
        { name: 'Reina Jones', factions: ['Clowns'], displayName: 0 },
    ],
    K3NJ1N: [
        { name: '[Deputy] Kenji Hatake', displayName: 2, assumeServer: 'public' },
    ],
    kaaleesi: [
        { name: 'Tori Slaughter', factions: ['Police'], displayName: 0 },
    ],
    Kaceytron: [
        { name: 'Bobbi Jo', displayName: 0 },
    ],
    kaelea: [
        { name: 'Eliza Stellano', factions: ['DoJ'], displayName: 0 },
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
        { name: '[Deputy] Jimmy Frost' },
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
        { name: 'Karina Dawn', nicknames: ['crim', 'criminal', 'robbing', reg(/\bkarina/)] },
        { name: '[Deputy] Mina Price' },
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
    kastiann: [
        { name: 'Mikal Bazin', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    KatAudeo: [
        { name: '[Dr.] Lucy Janis', factions: ['Medical'] },
        { name: 'Charlotte Thomas', nicknames: ['Lottie'], displayName: 3 },
        { name: 'Elena Sinclair', factions: ['Order'], displayName: 0 },
    ],
    Kate: [
        { name: 'Nancy Drew' },
        { name: '[Officer] Veronica Mars', nicknames: ['593'] },
        { name: 'Muriel Gallstaff', displayName: 1 },
    ],
    KateC: [
        { name: 'Kit Archer', factions: ['DoJ'], nicknames: [], displayName: 1 },
        { name: 'Daisy Moss', factions: ['Police'], displayName: 0 },
    ],
    KatFires: [
        { name: 'Novah Walker', factions: ['Sinner Pawn', 'Chang Gang'] },
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
    kaysan: [
        { name: 'John Dub', factions: ['Police'], displayName: 0 },
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
        { name: 'Susie Carmichael', factions: ['Burger Shot', 'Hydra Gang'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Ride Along] Alice Watson', factions: ['Police'], displayName: 2 },
        { name: '[Officer] Susie Carmichael', nicknames: ['Copmichael'], assumeServer: 'public' },
    ],
    Kennasofly: [
        { name: 'Jupiter Adams', displayName: 0 },
    ],
    KenoN__: [
        { name: 'Michael Quinn', factions: ['Polish'], displayName: 0 },
    ],
    kerazane: [
        { name: 'Bertha Buttons', factions: ['Police'], displayName: 0 },
        { name: 'Kol Cascade', factions: ['Sinner Pawn'], displayName: 0 },
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
        { name: 'Jayden Dennis', nicknames: [], displayName: 1 },
    ],
    KiingJoee: [
        { name: '? ?', assume: 'neverNp' },
    ],
    KillrBeauty: [
        { name: 'Catherine Scratch', factions: ['Lost MC'], nicknames: ['Cat'], displayName: 3 },
        { name: '[Deputy] Ada Grille', nicknames: ['Gril', 'Grill'] },
    ],
    KiloAU: [
        { name: '[Deputy] Robert Anderson' },
        { name: '[Lawyer] Jason Ledson' },
    ],
    Kimchi: [
        { name: 'Sun Moon', nicknames: [reg(/\bsun/), 'Korean Gang'], displayName: 0 },
    ],
    Kimmykix: [
        { name: 'April Thompson' },
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
    kingjayclouted: [
        { name: 'Gregory Johnson', factions: ['Police'], displayName: 0 },
    ],
    Kingothestone: [
        { name: 'Steven Stone III', displayName: 2 },
    ],
    KinkyHobo: [
        { name: '[Lawyer] Gill Schultz', displayName: 1 },
        { name: '[Officer] Max Muller', displayName: 2 },
    ],
    KinslayerxX: [
        { name: '[Dispatch] Youjimaru Takimura', displayName: 2 },
    ],
    kioShiMa_ff: [
        { name: 'Kio Shima' },
    ],
    Kitboga: [
        { name: 'Edna Moose' },
        { name: '[Deputy] Claire Annette Reed' },
    ],
    Kite61: [
        { name: 'Rusty Johnson' },
    ],
    Kiva: [
        { name: 'Andi Jones', factions: ['HOA'], nicknames: ['Ant'], displayName: 1 },
        { name: 'Natalie ?', nicknames: ['not andi', 'not ant'], displayName: 1 },
        { name: 'Navi Gates' },
        { name: 'Ria Lee', factions: ['Locksmiths'], displayName: 0 },
    ],
    Kiwo: [
        { name: '[Deputy] Lauren Forcer', assumeServer: 'whitelist' },
        { name: '[Officer] Maisy Graves', assumeServer: 'public' },
        { name: 'Mia Mersion', factions: ['Pawn Addicts'] },
        { name: 'Trish Baggs', displayName: 1 },
        { name: 'Nah Vee', displayName: 0 },
        { name: 'Evita "Mother" Nimm' },
        { name: 'Ava Ridge', nicknames: ['Silence', reg(/darkness/)] },
        { name: 'Marta Volkov' },
        { name: 'Holly Day', factions: ['Burger Shot'], displayName: 0 },
    ],
    Kiyocks: [
        { name: 'Kyo Lokks', displayName: 1 },
    ],
    kkrackd: [
        { name: 'Alex Shields', factions: ['Police'], displayName: 0 },
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
        { name: 'Kai B. Knight', displayName: 0 },
    ],
    Knotty: [
        { name: 'Guy Jones', displayName: 0 },
    ],
    KnuckleheadGaming: [
        { name: 'Marty Holiday', factions: ['Prison'], displayName: 0 },
    ],
    Knut: [
        { name: 'Bjorn Eiriksson' },
        { name: 'Harald Bluetooth', factions: ['Brick House'], displayName: 0 },
    ],
    koil: [
        { name: 'Otto Delmar', nicknames: ['race', 'racing'] },
        { name: 'Francis Francer', factions: ['Chang Gang'], nicknames: ['franic', 'franer', 'bwo', reg(/\bfr.n.{1,2}s|\bfran/)], displayName: 0 },
        { name: '[Trooper Chief] Kael Soze', factions: ['Police'], highCommand: true, leader: true, nicknames: ['are illegal'] },
        { name: '[Senator] Steven Barosi', leader: true, nicknames: ['Senate', 'Steve'], displayName: 1 },
        { name: '[Development] Koil', factions: ['Development'], nicknames: ['Code'] },
        { name: 'Saint Jospeh', nicknames: ['Jesus', 'Joseph', 'XUJIA', 'EMC'], displayName: 0 },
        { name: 'Ray Ray', displayName: 0 },
    ],
    kojoXD: [
        { name: 'Kojo ?', factions: ['Independent'], assumeServer: 'international', assumeChar: true },
        { name: 'Kojo ?', factions: ['Independent'], assumeServer: 'public' },
    ],
    KokoBananaMan: [
        { name: 'Tex Graves' },
        { name: 'John Carver', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    Kongfue: [
        { name: 'Karl "KJ" Johnny Black' },
    ],
    Kookie: [
        { name: 'Kookie Louw', factions: ['Independent'] },
    ],
    koszull: [
        { name: 'Jack Vos', factions: ['Police'], displayName: 0 },
    ],
    Kripted: [
        { name: 'Antonio Rodrigues', factions: ['Pawn Addicts', 'ADMC'], displayName: 0 },
        { name: 'Jimmy Peppers', factions: ['Police'], displayName: 0 },
    ],
    KristoferYee: [
        { name: 'Jay Que', displayName: 0 },
        { name: '[Deputy] Ka Chao', displayName: 2 },
        { name: 'Kristofer Yee', displayName: 0 },
    ],
    KrisTWOfer: [
        { name: 'Jay Que', displayName: 0 },
        { name: '[Deputy] Ka Chao', displayName: 2 },
    ],
    kritacul: [
        { name: 'Devon "Dev" Jones', factions: ['GSF'] },
    ],
    KrizFrost: [
        { name: 'Kriz Khaoz' },
    ],
    ksinz: [
        { name: 'Keiji Imori', factions: ['Sweepers', 'BPM'], displayName: 0 },
    ],
    Kunaives: [
        { name: 'Wally Veloce' },
    ],
    KuroKunoichi13: [
        { name: 'Natalia Omar' },
    ],
    Kurupt: [
        { name: 'Tyreke Knox', factions: ['Independent'], displayName: 0 },
        { name: 'Arthur Itis' },
    ],
    Kydos___: [
        { name: "Baby O'Conner", displayName: 0 },
    ],
    Kyle: [
        { name: 'Kyle Pred', assumeServer: 'whitelist' },
        { name: '[Officer] James Hanna' },
        { name: '[Officer] Kyle Pred', assumeServer: 'public' },
        { name: 'Dominic Toretti', displayName: 0 },
        { name: 'Jaguar Toretti', displayName: 0 },
        { name: 'Alabaster Slim', factions: ['Slim'], nicknames: ['Pimp'], displayName: 2 },
        { name: 'Kegal Dan' },
        { name: 'Brett Biggledoinks' },
        { name: 'Notta Local', nicknames: ['Balla Gang'], displayName: 3 },
        { name: 'Marty Oldmen', displayName: 0 },
        { name: 'Lee Harvey Tinker', displayName: 0 },
        // { name: 'Cop Killa', displayName: 0 },
        { name: 'Kyle Kyle', displayName: 1 },
        { name: 'Sigfried Porsche', nicknames: ['porshe'], displayName: 0 },
        { name: 'Hampton Brandon', nicknames: ['TTD', 'Ten Toes Down'] },
        { name: 'Tame "The Mandalorian" Saxon', nicknames: ['Mandolorian'] },
        { name: 'Hat Carl', nicknames: ['The Matador'], displayName: 0 },
        { name: "[Lawyer] Rory O'Banion", displayName: 0 },
        { name: 'Wyatt Derp' },
        { name: 'Pal Gore' },
        { name: 'Jack Barker', factions: ['Police'], displayName: 0 },
    ],
    KylendOnTwitch: [
        { name: 'Kylend LaCroix', factions: ['GSF'], assumeServer: 'public' },
    ],
    kyliebitkin: [
        { name: '[Deputy] Brittany Angel', nicknames: ['Angle', 'Captain'] },
        { name: 'Mary Mushkin', factions: ['KC'], nicknames: ['Red Devil', 'R3d Devil'], displayName: 1 },
        { name: 'Sarah Reynolds', displayName: 0 },
        { name: 'Kylie Bitcoin', displayName: 0 },
        { name: 'Valerie Angel', factions: ['Police'], displayName: 0 },
    ],
    KYR_SP33DY: [
        { name: 'Moe Litman', displayName: 0, assume: 'assumeOther' },
    ],
    kyrienolife: [
        { name: 'Coop Torres', factions: [ 'Besties'], displayName: 1 },
    ],
    kytolee: [
        { name: 'Juan Cuervo', factions: ['Vagos'], displayName: 0 },
    ],
    LadyDima: [
        { name: '[Deputy] Raia Kaine', factions: ['HK Pawn', 'Sinner Pawn', 'Gruppe6'] },
    ],
    LadyHope: [
        { name: '[Deputy] Lily Pond' },
        { name: 'Isabella "Izzy" Carrington' },
    ],
    LadyLynxx: [
        { name: 'Jaed Smith', factions: ['Saints'], displayName: 0 },
        { name: '[Officer] Saphira Sinclair', nicknames: ['Saph', '597'] },
    ],
    LAGTVMaximusBlack: [
        { name: 'Outto-Tune "OTT" Tyrone', nicknames: [reg(/\b[O0]\S?TT/)], leader: true, assumeServer: 'whitelist' },
        { name: '[Deputy] Max Prime', nicknames: ['Twija'], displayName: 2 },
        { name: 'Outto-Tune "OTT" Tyrone', factions: ['Independent'], nicknames: [reg(/\b[O0]\S?TT/)], assumeServer: 'public' },
        { name: '[Officer] Twija Prime', assumeServer: 'public' },
    ],
    Lairdo_: [
        { name: 'Henry King' },
    ],
    lancerofficial: [
        { name: 'Lance Silva', factions: ['Habibis'], nicknames: [], displayName: 1 },
    ],
    LargeSalt: [
        { name: 'Ivan Samarsky', displayName: 0 },
    ],
    LarryX7: [
        { name: 'Jose "Cousin" Luis Santana', factions: ['Vagos'] },
    ],
    LaS_: [
        { name: 'Jesse "Baby Joker" Morales', assume: 'assumeOther' },
    ],
    Lastbrokenoath: [
        { name: '[Dr.] Alexander Blake', factions: ['Medical'], displayName: 2 },
        { name: '[Dispatch] L Tailor', nicknames: ['D-21'], displayName: 2 },
    ],
    lawekyt: [
        { name: 'Pierre Doletz', factions: ['BPM'], displayName: 0 },
    ],
    leahstoo: [
        { name: 'Princess Felicity', factions: ['Sinner Pawn', 'Sweepers'], displayName: 0 },
    ],
    leelithato: [
        { name: 'Lilly Dubois', factions: ['DoC', 'Gruppe6'], displayName: 0 },
    ],
    Leg0s: [
        { name: 'Clarke Bishop' },
    ],
    leonarwho: [
        { name: 'Jack Bilby', factions: ['Police'], displayName: 0 },
        { name: 'Kelly Dean', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    LetterJaye: [
        { name: 'Posy Florian', factions: ['Sinner Pawn'], nicknames: ['P O S Y'] },
        { name: '[Dr.] Dahlia Fey', factions: ['Medical'] },
    ],
    LeWolfy: [
        { name: '[Officer] Dante Wolf' },
    ],
    liamdpt: [
        { name: 'Kai Martin', factions: ['Manor'], nicknames: ['ERP King'], displayName: 1 },
    ],
    LiftedGN: [
        { name: 'Walter Melon', factions: ['Pawn Addicts', 'GSF'], displayName: 0 },
    ],
    Likochka71: [
        { name: '[Lawyer] Juno Lemieux', displayName: 2 },
    ],
    LillyTenshine: [
        { name: '[Officer] Lilly Wills', factions: ['Besties'], displayName: 2 },
    ],
    lilypichu: [
        { name: 'Tulip Peach' },
    ],
    LINK_EZ: [
        { name: 'Linkle Jones', displayName: 1 },
    ],
    LIRIK: [
        { name: 'Clayvon Barksdale' },
        { name: '[Officer] Bayvon Barksdale', nicknames: ['555'], displayName: 2 },
        { name: 'Abe Vaughn', displayName: 0 },
        { name: 'Avon Barksdale', leader: true },
    ],
    lisajfc: [
        { name: 'Opal Pryce', factions: ['Police'], displayName: 0 },
    ],
    LisaMunchy: [
        { name: '[Officer] Lisa Adkins' },
        { name: '[Therapist] Thalia Hayes', factions: ['Medical'] },
        { name: '[Lawyer] Lees Grey' },
    ],
    Lisilsanya: [
        { name: '[EMS] Lei Sanya', factions: ['Medical'], nicknames: ['Lasagna'], displayName: 0 },
    ],
    LJHUNCHO: [
        { name: 'Leon Johnson', nicknames: ['LJ'], displayName: 0 },
    ],
    Llikthead: [
        { name: 'Garion Noble', factions: ['ADMC'], displayName: 1 },
    ],
    lolJukebox: [
        { name: '[Officer] Shane Jones', displayName: 2 },
    ],
    lonnielightning: [
        { name: 'Donnie Dunn', factions: ['Slim'], displayName: 0 },
    ],
    Loorara: [
        { name: 'Olivia Garcia', nicknames: ['Liv', 'Livvy', 'Olives'], displayName: 0 },
    ],
    Loovelys1: [
        { name: 'Léonie Beaumont', factions: ['Burger Shot'], displayName: 0 },
    ],
    Loqrin: [
        { name: '[Development] Loqrin', factions: ['Development'] },
    ],
    Lord_Kebun: [
        { name: 'Mr. K', factions: ['Chang Gang'], leader: true, displayName: 0, nicknames: ['Chang', 'The "Dragon"'] },
        { name: '[Deputy] Richard Richardson', nicknames: ['585'] },
    ],
    LordJasta: [
        { name: 'Chris McGrawl' },
    ],
    LordNetloc: [
        { name: 'Carter Banx', factions: ['GSF'], displayName: 0 },
    ],
    LordSnowRP: [
        { name: 'PillBot XP', factions: ['Medical'], displayName: 1 },
    ],
    Loserfruit: [
        { name: '[EMS] Lizzie Bien', factions: ['Medical'], assume: 'assumeOther' },
    ],
    louu: [
        { name: 'Sparky "SK" Kane', factions: ['Sinner Pawn', 'Collective', 'Faceless'], displayName: 1 },
    ],
    loveANG3L: [
        { name: 'Kendra Davis', factions: ['Vagos'] },
    ],
    lovendor: [
        { name: 'Aria Onitsuka', factions: ['Brick House'], displayName: 0 },
    ],
    Lovinurstyle: [
        { name: '[Officer] Leah Strong', nicknames: ['531'], assumeServer: 'whitelist' },
        { name: 'Rose Edwards' },
        { name: 'Darlene ?', displayName: 1 },
        { name: '[Officer] Leah Strong', displayName: 1, assumeServer: 'public' },
    ],
    lozdog: [
        { name: 'Lilith Ailhart', factions: ['HOA'] },
    ],
    lstrictlylogicl: [
        { name: 'Ricardo Valdez' },
        { name: '[Deputy] John Spartan', displayName: 2 },
    ],
    Lt_Custard: [
        { name: 'Collin McKinley', factions: ['ADMC'], displayName: 0 },
        { name: '[Officer] Jerry Sweets', nicknames: ['561'], displayName: 2 },
        { name: 'Cougar Dolly', displayName: 0 },
        { name: 'Raylin Shepard', factions: ['Police'], displayName: 0 },
    ],
    Lt_Raven: [
        { name: '[Deputy] Vladimir Raven', highCommand: true },
        { name: 'Hellfire Holden', factions: ['Lost MC'], nicknames: ['biker', reg(/hell\W*fire/)] },
    ],
    LtSerge: [
        { name: '[Judge] Serge Cross', displayName: 2 },
    ],
    Lucky_RP: [
        { name: 'Marlo Stanfield', factions: ['Habibis'], nicknames: [reg(/ma?rlo/)] },
    ],
    LuckyPaddy: [
        { name: '[Deputy] Paddy Luke', displayName: 1 },
    ],
    luckywins: [
        { name: 'Mylo Goodman', factions: ['DoC', 'DoJ', 'Gruppe6'], displayName: 0 },
    ],
    LuckyxMoon: [
        { name: '[Deputy] Blair Sutton' },
        { name: '[Lawyer] Elizabeth Devereaux' },
        { name: 'Jessica Wesker' },
    ],
    ludwig: [
        { name: 'Klevin Ballsworth' },
    ],
    luka_aus: [
        { name: '[Officer] Luka Kozlov' },
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
        { name: '[Deputy] Jessie Kane', displayName: 1 },
    ],
    LunaOni: [
        { name: '[Deputy] Claire Everly', displayName: 1 },
        { name: 'Mayumi Himura', factions: ['HOA'], nicknames: ['May'] },
        { name: 'Paige Luna', displayName: 0 },
    ],
    lunchyrp: [
        { name: 'Danny Goomba', displayName: 2 },
    ],
    lycanstory: [
        { name: 'William Hunter', factions: ['Sinner Pawn', 'Faceless'], displayName: 0 },
        { name: 'Alistair Kingsley', factions: ['Police'], displayName: 0 },
    ],
    Lyndi: [
        { name: 'Violet Van Housen', assumeServer: 'whitelist' },
        { name: '[Officer] Willow Wolfhart', displayName: 1 },
        { name: '[Officer] Violet Van Housen', displayName: 1, assumeServer: 'public' },
    ],
    Lysium: [
        { name: 'Benji Ramos', factions: ['BPM', 'Sweepers', 'Burger Shot', 'Faceless'], leader: true, nicknames: ['B'] },
        { name: '[Deputy] Dean Duncan' },
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
    mackaelroni: [
        { name: 'Clyde Wilson', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    MacL0ven: [
        { name: 'Negan Graham', factions: ['Lost MC'] },
    ],
    MadameGandalf: [
        { name: 'Stephanie "Sooty" Gamwich' },
    ],
    madbush: [
        { name: '[Lawyer] James Haze', nicknames: ['Jim'], displayName: 2 },
    ],
    Madmoiselle: [
        { name: '[Therapist] Pixie Plum', factions: ['Medical'] },
    ],
    Madoreline: [
        { name: '[Officer] Elizabeth Reed' },
    ],
    MaestroPD: [
        { name: 'Muten "Roshi" Roushi' },
    ],
    MagentaTM: [
        { name: 'Russel Harrington', displayName: 0 },
    ],
    Maggna: [
        { name: '[EMS] Mari Jones', factions: ['Medical'], nicknames: ['MJ'], displayName: 3 },
    ],
    MalcolmGlass: [
        { name: 'Malcolm Nekoda', factions: ['DoJ'], displayName: 0 },
    ],
    MalevolentReisu: [
        { name: 'Trey Walker', displayName: 0 },
    ],
    MaliciousRP: [
        { name: 'Jericho Black' },
    ],
    malikouthere: [
        { name: 'Tito Conchas', factions: ['Vagos'] },
    ],
    manax: [
        { name: 'Michael "Mike" Manx', factions: ['Besties'] },
    ],
    ManteegoTV: [
        { name: 'Dougie Mane', displayName: 0 },
    ],
    Mantis: [
        { name: '[Sheriff] Domenic Toretti', leader: true },
        { name: 'Jackson Caldwell', displayName: 0 },
        { name: 'Ike Block', displayName: 0 },
        { name: '[Lawyer] Jerry Callow', displayName: 1 },
        { name: 'Pepe Silvia' },
    ],
    mAnYw: [
        { name: '[Deputy] Jonathan Hale' },
    ],
    marcobc: [
        { name: '? ?', assumeServer: 'international' },
    ],
    margothesnail: [
        { name: 'Margo Escargot' },
        { name: 'Becky Prescott', factions: ['DoC'], displayName: 0 },
    ],
    maribel1998: [
        { name: 'Lucy Furr', factions: ['DoC', 'Burger Shot', 'DoJ'], displayName: 0 },
    ],
    Markiplier: [
        { name: 'Stan Wheeler' },
    ],
    markuu: [
        { name: '[EMS] Leonardo Sand', factions: ['Medical'], nicknames: ['Leo'], displayName: 3 },
    ],
    Marsziipan: [
        { name: '[Deputy] Misa Price' },
    ],
    MartinCreek: [
        { name: 'Bertha Clark', factions: ['Saints'] },
    ],
    MasonShortland: [
        { name: 'Clark Mason', factions: ['Sinner Pawn'], nicknames: ['Flash'], displayName: 1 },
    ],
    MasterMisuri: [
        { name: 'Jesus Antonio Lopez Contreras', factions: ['HOA'] },
        { name: '[Deputy] Jeremias Jimenes' },
    ],
    MatchaSmash: [
        { name: '[EMS] Rowan Hunter', factions: ['Medical'] },
    ],
    MattEU: [
        { name: 'Matthew "Matt" Antov', factions: ['Collective', 'Sinner Pawn', 'Manor'], nicknames: ['Matt'], displayName: 0 },
        { name: 'Lucas Miller', factions: ['Gruppe6', 'Police'], displayName: 0 },
    ],
    Mattie: [
        { name: '[Dr.] Mikhail Keehl', factions: ['Medical'], displayName: 2 },
        { name: 'Titus Tsukasa', displayName: 0 },
    ],
    MattRP: [
        { name: '[Trooper] Jack Ripley' },
    ],
    McconnellRet: [
        { name: '[Agent] Rhett "Bench Guy" McConnell', nicknames: [reg(/\bbench/)] },
    ],
    mdrakoo: [
        { name: 'Drake "OP" Morgan', factions: ['Besties'] },
    ],
    Meatwrist: [
        { name: 'Chad "Chodie" Brodie', factions: ['Chang Gang'] },
        { name: '[Deputy] Marshall Gustavsen', nicknames: ['Gustav', '503', 'Chodie Cop'], displayName: 2 },
    ],
    meeka_a: [
        { name: '[EMS] William "Middy" Haze', factions: ['Medical'] },
    ],
    MegaTruong: [
        { name: '[Deputy] Roy Armstrong', displayName: 1 },
    ],
    MEKABEAR: [
        { name: '[Deputy] Amber Gold' },
        { name: 'Erin Cox', nicknames: ['c:', 'E R I N', 'C O X'], displayName: 1 },
        { name: 'Ari Tistu', displayName: 0 },
        { name: 'Amber ?', displayName: 1 },
        { name: 'Goldie Fisher', factions: ['Piss Boiz', 'Casino'], displayName: 0 },
    ],
    Melly_Mae: [
        { name: '[Dispatch] Jessica Easton' },
    ],
    melodymaeee: [
        { name: 'Nikova Mori', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    MeMayoi: [
        { name: 'Yoi Tsukita', assume: 'assumeOther' },
    ],
    MeowBez: [
        { name: 'Bella Lux', factions: ['Manor'], nicknames: ['Bez'], displayName: 1 },
    ],
    Merald: [
        { name: 'Jaylen Carter', factions: ['Chang Gang'], nicknames: ['LampPost', 'Lamp Post'], displayName: 1 },
    ],
    Merrcy: [
        { name: 'Cody Palmer', displayName: 0 },
    ],
    Mervin: [
        { name: 'Mervin Potts' },
    ],
    Mexi: [
        { name: '[Deputy] Clarence Williams', displayName: 1 },
    ],
    mfWarlock: [
        { name: 'Skipper Jones', factions: ['6Chambers', 'Pawn Addicts'], nicknames: [], displayName: 1 },
    ],
    mg4r: [
        { name: 'Ricardo Venezia', factions: ['Police'], displayName: 0 },
    ],
    MiamiPepe: [
        { name: '[Dispatch] Drake Wax', displayName: 1 },
    ],
    michaelreeves: [
        { name: 'NoPixel ?' },
    ],
    Mick: [
        { name: 'Gladys Berry' },
        { name: '[Deputy] Sheldon Jones', nicknames: ['572'], displayName: 1 },
    ],
    Middleditch: [
        { name: 'Stanley Tuttles' },
    ],
    Miggitymaan: [
        { name: '[Officer] Miguel Maan', displayName: 1 },
        { name: 'Jayce Wyatt' },
        { name: '[Officer] Damien Alexander' },
        { name: '[Deputy] Kurt Leonard', assume: 'assumeNpNoOther' },
    ],
    Mikeemod: [
        { name: '[Development] Mikeemod', factions: ['Development'] },
        { name: 'Ratlord', nicknames: ['Raccoon', 'Racoon', 'Rat Lord'] },
    ],
    MikeTheBard: [
        { name: 'Hubcap Jones', factions: ['Burger Shot', 'Lost MC'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jack Nova', displayName: 0 },
        { name: '[Ranger] Manny Multchbottom', displayName: 0, assumeServer: 'public' },
    ],
    MikeTheMarksman: [
        { name: '? ?', assume: 'neverNp' },
    ],
    mikezout14: [
        { name: '[Deputy] Michael Rodgers', assume: 'assumeNpNoOther' },
    ],
    mikfoolery: [
        { name: 'Helen Highwater', factions: ['DoJ', 'Gruppe6'], displayName: 0 },
        { name: 'Jean Jorts', factions: ['Police'], displayName: 0 },
    ],
    MikkisaurusRex: [
        { name: 'Jessica Hilton', factions: ['Medical'] },
    ],
    Milsera: [
        { name: 'Mono Block' },
    ],
    MiltonTPike1: [
        { name: 'Kiki Chanel', assumeServer: 'whitelist' },
        { name: '[Officer] Kiki Chanel', displayName: 1, assumeServer: 'public' },
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
        { name: 'Mina Rocket', displayName: 0 },
    ],
    MinervaMaat: [
        { name: '[Deputy] Minerva Maat', displayName: 1 },
    ],
    Ming: [
        { name: 'Ming Jingtai', factions: ['Besties'], assumeServer: 'whitelist' },
        { name: 'Ming Jingtai' },
        { name: 'Ming Jingtai', factions: ['Besties'], assumeServer: 'public' },
        { name: 'Boon Bundy', displayName: 0, assumeServer: 'public' },
        { name: '[Officer] Jing Mingtai', displayName: 1, assumeServer: 'public' },
    ],
    miniminter: [
        { name: 'Peter Shufflebottom', displayName: 0, assume: 'assumeOther' },
    ],
    MinksOfMars: [
        { name: 'Olive Corvo', factions: ['Police'], displayName: 0 },
    ],
    Minky: [
        { name: 'Zoey Marie', displayName: 0 },
    ],
    MinusFive: [
        { name: '[Officer] Jason Bidwell' },
    ],
    MIQQA: [
        { name: '[EMS] Janus Lee', factions: ['Medical'] },
    ],
    MissBombastic: [
        { name: '[Deputy] Ruby York', factions: ['Police'] },
    ],
    Moboking: [
        { name: '[Officer] Ellis Pinzon', nicknames: ['Ronaldo'], assumeServer: 'whitelist' },
        { name: 'Aleksander Bogorov', factions: ['Hydra Gang'], nicknames: ['Aleks', 'Bogo'], displayName: 3, assumeServer: 'whitelist' },
        { name: '[Trooper] Aleks Sazkaljovich', displayName: 1, assumeServer: 'public' },
        { name: 'Elijiah "Middle E" Parks', factions: ['SSB'] },
    ],
    Moesabai: [
        { name: 'Mami Ko', nicknames: ['Blue Storm'] },
        { name: 'Aoki Ma', factions: ['6Chambers', 'Pawn Addicts'], displayName: 0 },
    ],
    moistcr1tikal: [
        { name: 'Charles White', displayName: 0 },
    ],
    mollyrollinxo: [
        { name: 'Molly Rollin', nicknames: [], displayName: 1 },
    ],
    mollyruu: [
        { name: 'Elizabeth "Lizzie" Byrne', factions: ['ADMC'], assumeServer: 'whitelist', wlBias: -1 },
        { name: '[Deputy] Scarlett Royal', displayName: 2 },
        { name: '[Deputy] Elizabeth Byrne', nicknames: ['Lizzie'], displayName: 3, assumeServer: 'public' },
        { name: 'Aishi Ayano', nicknames: ['Yandere'], displayName: 0 },
    ],
    MOONMOON: [
        { name: '[Officer] Lenny Hawk', nicknames: ['Renegade'], displayName: 1, assume: 'assumeNp' },
        { name: 'Bernice "Shadowlord" Caldershot' },
        { name: 'Ro Block', displayName: 0 },
        { name: 'Mitch Moonmoon', nicknames: [reg(/\witch\.tv\/moonmoon\b/)], displayName: 0 },
        { name: 'Maximilian "Yung Dab" Thoroughbred', nicknames: ['The "Gnome"', 'Yung', 'Dab', 'Max'], displayName: 0 },
    ],
    Moosebrother: [
        { name: '[Deputy] Louis Bloom' },
        { name: 'Laura Gapes', nicknames: ['Hooker Block', 'Hooker', 'Block'], displayName: 3 },
    ],
    MooseTaffy: [
        { name: 'Patar Bellosh', factions: ['Chang Gang'] },
        { name: '[Ride Along] Mantar Mellosh' },
    ],
    morgeu: [
        { name: 'Morgan Jay', factions: ['ADMC'], nicknames: ['Blade'], displayName: 0 },
    ],
    moxier4wr: [
        { name: 'Mercury Frost', displayName: 1 },
    ],
    mr_grimreaper_: [
        { name: '[Officer] Joe Fish', assumeServer: 'public' },
    ],
    mrborealislive: [
        { name: 'Rudolph ?' },
    ],
    MrFestX: [
        { name: 'Dow Jones' },
    ],
    MrMoonsHouse: [
        { name: '[Officer] Freddy Price', displayName: 2 },
        { name: 'Tommy Roach', factions: ['Piss Boiz', 'Casino'], displayName: 0 },
    ],
    MrMouton: [
        { name: 'Chuck Mouton', displayName: 0 },
        { name: 'Han Pandler' },
    ],
    mrtibbs268: [
        { name: 'Jay Jeffers', factions: ['Sweepers', 'BPM'], displayName: 0 },
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
        { name: 'Cora Star', factions: ['Pawn Addicts'], displayName: 0 },
        { name: '[Deputy] Skye Faye', factions: ['DoJ'], wlBias: -1 },
        { name: 'Rosalie Pierce', factions: ['Police'], displayName: 0 },
    ],
    MsTeamKK: [
        { name: 'Riley Carter' },
        { name: '[Officer] Sunny Brooks', nicknames: ['509'] },
    ],
    mungo: [
        { name: 'Dominic Moreno', factions: ['Piss Boiz'], displayName: 0 },
        { name: 'Deek Magnum', factions: ['Police'], displayName: 0 },
    ],
    MurderCrumpet: [
        { name: 'Cindy Lou' },
    ],
    MurphyBraun: [
        { name: '[Judge] Judge Holden' },
        { name: 'Marvin Peanut', nicknames: ['Marv'] },
        { name: '[Lawyer] Murphy Braun', factions: ['Chang Gang'], displayName: 1 },
    ],
    mwat_: [
        { name: 'Storm Creed', displayName: 0 },
    ],
    mycahpittman: [
        { name: 'Mycah Pittman', displayName: 0 },
    ],
    Myladyballs: [
        { name: 'Veronica Garcia', factions: ['Vagos'] },
    ],
    Myles_Away: [
        { name: '[Deputy] Connor Stubble', nicknames: ['514'], displayName: 2 },
        { name: 'Whitley Booth', nicknames: ['Pirate'] },
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
        { name: 'Tessa Lamb', factions: ['Clowns', 'Independent'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Tessa Lamb', factions: ['Independent'], assumeServer: 'public' },
        { name: 'Taylor "Onyx" White' },
        { name: 'Rachel Parker' },
        { name: 'Stacy Myers', displayName: 0 },
    ],
    nareus: [
        { name: 'Arlo Cade', factions: ['Order'], displayName: 0 },
    ],
    NateKarama: [
        { name: 'Nate "Sneaky" Karama', factions: ['Clowns', 'Faceless'] },
    ],
    Natettvrp: [
        { name: 'Carlos "Carlitos" Loco', factions: ['Slim', 'Independent'] },
    ],
    nathankb_: [
        { name: '[Chief Judge] Alan Crane', displayName: 2 },
        { name: '[Deputy] Wesley Arnold', displayName: 2 },
        { name: 'Jov Diavol', displayName: 0 },
    ],
    Natsumiii: [
        { name: 'Natalie Sumi' },
    ],
    nattfasa_: [
        { name: 'Max Wazowski', factions: ['Independent'], nicknames: ['Maxwell'], displayName: 0 },
    ],
    Navajo: [
        { name: 'Clarence Carter' },
    ],
    NebelNiek: [
        { name: 'Konrad Kraut Dogenschmirz' },
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
    Nels11: [
        { name: 'Cole Gunner', factions: ['HK Pawn'], displayName: 0 },
    ],
    Nerdandi: [
        { name: '[Deputy] Philomena Hawthorne', nicknames: ['Luna', 'Me'] },
        { name: 'Petunia Susan Brookshire' },
    ],
    Nescoh: [
        { name: '[Dispatch] Tristan C', displayName: 1 },
        { name: 'Deshawn King', factions: ['SSB'], displayName: 0 },
    ],
    neskRP: [
        { name: 'Oliver Crawford', displayName: 0 },
    ],
    netsirk: [
        { name: '[EMS] Nettie Machete', factions: ['Medical'] },
    ],
    neutreN: [
        { name: 'Octavio Vettel', nicknames: ['Octo', 'Goofy', 'Hypergoof', 'Octane'], displayName: 3 },
    ],
    NeveRossa: [
        { name: 'Dawn Hearte', factions: ['Lost MC', 'Medical'] },
        { name: '[Deputy] Brandy Kaas' },
    ],
    NewFaceSuper: [
        { name: 'Davey Doherty' },
    ],
    Nexa9: [
        { name: 'Meelo Graves', nicknames: ['Nex'], displayName: 1 },
    ],
    Niccorazi: [
        { name: 'Douglas James', nicknames: ['Dougie', 'Fresh', 'Dougie Fresh', 'Bobcat'], displayName: 5 },
        { name: 'Eyam Job', displayName: 0 },
    ],
    Nidas: [
        { name: 'Ingevar "AK" Falk', factions: ['Besties'] },
        { name: 'Leslie Lingberg', nicknames: ['Ling', 'Cerberus'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Rat Boy', nicknames: ['Ratboy'], displayName: 3 },
        { name: 'Robin ?', nicknames: ['Boy Wonder'] },
        { name: 'Steve "Stiv" Adamescu', assumeServer: 'public' },
    ],
    nieuczesana: [
        { name: 'Klara Adamczyk', factions: ['Polish', 'Gruppe6'], displayName: 0 },
    ],
    Nikez: [
        { name: '[Development] Nikez', factions: ['Development'] },
        { name: '[Deputy] Cody Sharp', nicknames: [reg(/\bpolice\s*m.n/)] },
        { name: 'Nicholas Simone', nicknames: ['Nick', 'Nico', 'Simon'], displayName: 0 },
        { name: 'Erik Trygg', factions: ['Police'], displayName: 0 },
    ],
    niki_iremia: [
        { name: 'Sarah Ripley', factions: ['Burger Shot', 'Police'], displayName: 0 },
    ],
    NikkisARiot: [
        { name: '[Deputy] Jenny Hall', factions: ['Police'], nicknames: [reg(/\bje\S{1,3}y/)], displayName: 1 },
    ],
    ninjajessica: [
        { name: 'Ember Quinn', factions: ['Clowns', 'DoJ'], displayName: 0 },
    ],
    nismodoma: [
        { name: 'Tony Leung', nicknames: [], displayName: 1 },
    ],
    nitemare_boba: [
        { name: 'Marilyn Brewer/4.0', factions: ['DoC'], displayName: 0 },
    ],
    nixety: [
        { name: 'John Kingsman', factions: ['Police'], displayName: 0 },
    ],
    niztopia: [
        { name: 'Aziz Abdallah', factions: ['Independent'] },
    ],
    Nmplol: [
        { name: 'Buddy Black' },
        { name: 'Jason Polam', factions: ['Sinner Pawn', 'DoC', 'Gruppe6'], displayName: 0 },
    ],
    nnsLUL: [
        { name: '[Development] nns', factions: ['Development'], assumeChar: true },
    ],
    No_Atonement: [
        { name: 'Mack Lando', factions: ['Saints'], displayName: 0 },
    ],
    nobeljt: [
        { name: 'Lucas Spade', displayName: 0 },
    ],
    NoElusionz: [
        { name: 'Tank Tames', factions: ['GSF'], displayName: 1 },
    ],
    noKingu: [
        { name: '[Deputy] Henri King' },
        { name: 'DaMarcus Lewis' },
        { name: 'Big K', displayName: 0 },
    ],
    NoraExplorer: [
        { name: 'Nunu El Nene', displayName: 1 },
    ],
    Nostroscythe: [
        { name: 'Hazel Havgreaves', factions: ['Brick House'], displayName: 0 },
    ],
    notGEEGA: [
        { name: 'Giovanna "Gigi" Gambino', factions: ['Sinner Pawn', 'Casino'], nicknames: [], displayName: 1 },
        { name: 'Maya Peanits', factions: ['Police'], displayName: 0 },
    ],
    notjoans: [
        { name: 'Avery Daye', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    notmerrick: [
        { name: 'Levi Rotti', factions: ['Independent'], displayName: 1 },
    ],
    NotoriousNorman: [
        { name: 'Chips Ahoy' },
    ],
    Nottics: [
        { name: 'Raymundo Ortiz', factions: ['Sinner Pawn', 'Vagos'], nicknames: [reg(/\br+ay/), reg(/\bmundo/)] },
        { name: 'Raul Rodriguez', nicknames: [reg(/\br+au+l/)] },
    ],
    novaaberries: [
        { name: 'Lorelai Paige', factions: ['Collective', 'Sinner Pawn', 'Order'], displayName: 0 },
    ],
    NovalokHD: [
        { name: '[Officer] Ben Casanova' },
    ],
    novasobored: [
        { name: 'Dixie Renne', factions: ['DoC', 'Gruppe6'], displayName: 0 },
    ],
    novazfov: [
        { name: 'Zeek "Apple" Kacem', factions: ['Brick House'], nicknames: [], displayName: 1 },
    ],
    NovellusDea: [
        { name: 'Jacyn Todd', factions: ['Sinner Pawn'], nicknames: [], displayName: 1 },
    ],
    NRG_Hamlinz: [
        { name: 'Darnell Simmons', displayName: 0 },
    ],
    Ntviiper: [
        { name: 'Kian Mercer', factions: ['Sinner Pawn', 'HOA'] },
    ],
    NuFahrenheit: [
        { name: 'Boris Karishnikov', displayName: 0 },
    ],
    NunnYaBiznezz: [
        { name: '[Deputy] Hingle McCringleberry', displayName: 1, assumeServer: 'public' },
    ],
    NurEinDarki: [
        { name: 'Nolan Nicholson', displayName: 0 },
    ],
    nutreo: [
        { name: 'Carla Graziano', factions: ['DoC'], displayName: 0 },
    ],
    nxsiah: [
        { name: 'Zelaya Fernando', factions: ['Prison'], nicknames: ['Z', 'Laya'] },
    ],
    nyasuuy2k: [
        { name: 'Paris Argo', factions: ['Burger Shot'], displayName: 0 },
    ],
    NymN: [
        { name: 'Owen Lottes' },
        { name: 'Frank Fritugo', assume: 'assumeOther' },
    ],
    NyokoSato: [
        { name: 'Skye Shields', factions: ['Habibis'], nicknames: [], displayName: 1 },
    ],
    o_Oakleyz_o: [
        { name: '[Deputy] Samuel Holtz' },
    ],
    OccamsSabre: [
        { name: '[Officer] Jeffrey Bundy', nicknames: ['451'] },
        { name: '[Lawyer] Benjamin Crane', displayName: 0 },
        { name: '[Judge] Ray Montag' },
        { name: 'Busta Block', displayName: 0 },
    ],
    Octopimp: [
        { name: 'Chut McMillan', nicknames: ['Chut The Magnificent', 'Sorcerer'] },
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
        { name: 'Zaceed Skengerton', nicknames: [reg(/\b[zs]a[skc]+[ei]*y?d/)], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Zacood Skengerson', displayName: 1, assumeServer: 'public' },
    ],
    offlinezeus: [
        { name: 'Ernesto Mata', factions: ['Brick House', 'The 404'], displayName: 0 },
    ],
    OG_Tyger: [
        { name: '[Officer] Peter Frost' },
    ],
    ogastrx: [
        { name: 'Antonio \'Diablo\' Diaz', nicknames: [], displayName: 1 },
    ],
    ogk3nz: [
        { name: 'Marko Russetto', factions: ['Marabunta'], displayName: 0, leader: true },
    ],
    OhhhManItsDan: [
        { name: 'Diego Leon', factions: ['Gruppe6', 'Faceless'], nicknames: ['Diego De Leon'] },
    ],
    OhJayzzy: [
        { name: 'Jay "JJ" Gamble' },
    ],
    OhMadOne: [
        { name: '[Lawyer] Ginzu Okada' },
    ],
    ollie2313: [
        { name: 'Matilda Murphy', factions: ['Police'], displayName: 0 },
    ],
    OllyPop: [
        { name: 'Ivy Poppins' },
        { name: 'Evee Poppins' },
    ],
    omareloff: [
        { name: 'Omar Dedon', factions: ['Independent'], displayName: 1, facebook: true },
    ],
    omie: [
        { name: 'Marty Banks', factions: ['Brick Bois', 'Brick House', 'The 404'], assumeServer: 'whitelist' },
        { name: 'Marty Banks' },
        { name: '[Deputy] Sharty Banks', displayName: 1 },
        { name: 'Marty Shanks', factions: ['Independent'], nicknames: [reg(/\bburger/)], assumeServer: 'public' },
        { name: '[Officer] Sharty Manks', displayName: 1, assumeServer: 'public' },
    ],
    onebaw: [
        { name: 'Arthur Morgan', displayName: 0 },
    ],
    OneProtectiveFox: [
        { name: 'Hanna Baker', displayName: 0 },
        { name: 'Cassie Hoyt', displayName: 0 },
        { name: 'Brooklyn Baker', factions: ['Police'], displayName: 0 },
    ],
    OneSmolBumble: [
        { name: '[Deputy] Brielle Snowmin', nicknames: ['594'], displayName: 1 },
        { name: '[EMS] Emery Ore', factions: ['Medical'], nicknames: ['E-55'], displayName: 1 },
        { name: 'Clover Bloom', displayName: 0 },
        { name: '[EMS] Rory Borealis', factions: ['Medical'], displayName: 1 },
    ],
    OneTapBingus: [
        { name: 'Bodhi Mack' },
    ],
    ooknumber15: [
        { name: 'GGC Dev', factions: ['Independent', 'Development'], nicknames: ['Xmart', 'Mart'], displayName: 0, assumeChar: true },
    ],
    orcish: [
        { name: 'Otis Potts', factions: ['Police'], displayName: 0 },
    ],
    Osakanoodles: [
        { name: '[Officer] Antoine Sigel' },
    ],
    OwenSeven: [
        { name: '[Deputy] Owen Svensen' },
        { name: 'Tyler Dabrowski', nicknames: ['Bro', 'Brow', 'Brah', 'Broski', 'Browski', 'Brahski'], displayName: 0 },
    ],
    oyamec: [
        { name: 'Rochelle Shepherd', factions: ['Order'], displayName: 0 },
    ],
    PacifistV: [
        { name: 'Merry Achi', displayName: 0 },
    ],
    palin999: [
        { name: '[Deputy] Chad Gable' },
    ],
    palsean: [
        { name: 'Delver Lee', factions: ['Piss Boiz'], displayName: 0 },
    ],
    Pancakehumper: [
        { name: 'Deacon Frost' },
        { name: 'Deacon Frost' },
    ],
    panpawn1: [
        { name: '[Officer] Adam Swanson', assumeServer: 'public' },
    ],
    Papa_Capes: [
        { name: 'Dominic Kavanagh', nicknames: [], displayName: 1 },
    ],
    PapaChip: [
        { name: 'Channing "Chain" Turner', factions: ['ADMC'] },
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
    paulthepunk: [
        { name: 'Bodhi Holiday', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    PeachyLivv: [
        { name: 'Bambi Joyce', factions: ['Manor'], nicknames: ['Bambi'], displayName: 1 },
    ],
    Peeks: [
        { name: 'Pluto Rivers', factions: ['Independent'], displayName: 1 },
    ],
    Pengwin: [
        { name: '[Deputy] Jerry Perkins' },
        { name: 'Stanley Wilkinson', factions: ['HOA'], nicknames: ['Stan', 'White Devil'] },
        { name: 'Dustin "Dark Shadow" Manson' },
        { name: 'Kenneth "Ken-sama" Foreman', factions: ['Burger Shot'] },
    ],
    PENTA: [
        { name: '[Deputy] Randy Wrangler', nicknames: [reg(/\bwrang/), 'Court', 'CPD'], assume: 'assumeOther' },
        { name: '[Deputy] John Copperton', nicknames: ['John Cop', 'SDSO'], displayName: 2 },
        { name: 'Jordan Steele', displayName: 0, nicknames: ['"Parking" God', 'Phoenix Messiah'] },
        { name: 'Ricky Robins' },
        { name: 'Bully Maguire', displayName: 0 },
        { name: 'Jimmy "El Gambino" Yougman', nicknames: ['Gamba', 'Gambling', 'Turbo', 'Spins', 'Snowball', 'Magic Hands', 'Jackie Snow', 'Jimmy Bricks', 'Plough Man'] },
        { name: 'Bob Smith', factions: ['Vagos'], nicknames: ['B0b Smith', 'B0b'], displayName: 3 },
        { name: 'Mike Block', leader: true, displayName: 0 },
        { name: 'Chase Clouter', displayName: 0 },
        { name: 'Karen Karenly' },
        { name: 'Robert Penta', displayName: 0 },
        { name: 'Jane Obama', displayName: 0 },
    ],
    Peppo: [
        { name: 'Edgar Del Castillo' },
        { name: 'Jack Kettleman', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
    ],
    perqe: [
        { name: 'Peter Percocet', factions: ['ADMC'], nicknames: ['PP'] },
    ],
    peruze: [
        { name: 'Ronald "Scuffed Tony" Legarski', nicknames: ['Tony', 'Ron', 'Block'] },
        { name: '[Deputy] Anthony Beans', displayName: 2 },
        { name: 'John Hobo', displayName: 0 },
    ],
    peterpark: [
        { name: 'Peener Pogue', nicknames: [], displayName: 1 },
    ],
    peterparkTV: [
        { name: 'Peener Pogue' },
    ],
    Pezz: [
        { name: '[Officer] Pez Speedwagon', displayName: 1 },
        { name: 'Pezzy Pee' },
    ],
    phantomzz_ow: [
        { name: 'Connell MacGregor', displayName: 2 },
    ],
    Philderbeast: [
        { name: '[Dispatch] Owen Fitz-Gibbon', displayName: 2 },
    ],
    pinkchyu: [
        { name: 'Selena Martinez', factions: ['Independent'], displayName: 1 },
        { name: 'Tiffany Smith', nicknames: [reg(/\btiff/)], displayName: 0 },
        { name: 'Sakura Haruwho', displayName: 1 },
        { name: 'Ash Scuffem', displayName: 0 },
        { name: 'Ashley Pinktrilobite', displayName: 0 },
    ],
    Plashir: [
        { name: 'Thom Yung', displayName: 0 },
    ],
    PlasticLittle: [
        { name: 'Parson "Frosty" Brown', factions: ['Lost MC'] },
    ],
    PMoney: [
        { name: 'P Money', factions: ['Chang Gang'], displayName: 0 },
    ],
    PmsProxy: [
        { name: '[Officer] Kira Light' },
        { name: 'Ella Stone' },
    ],
    pochesVides: [
        { name: 'Bruno LeMons' },
    ],
    pokelawls: [
        { name: 'Bogg Dann', factions: ['Burger Shot'] },
        { name: 'Bart Batchest', displayName: 0 },
        { name: 'Lacari Anemay' },
    ],
    pokeyou5016: [
        { name: 'Delaney Jane', nicknames: [], displayName: 1 },
    ],
    pokimane: [
        { name: 'Jolie Paul', displayName: 0 },
        { name: 'Celine LaCroix' },
    ],
    Polaflex: [
        { name: 'Lewis Marsden', displayName: 0 },
    ],
    Polen: [
        { name: 'Adam "AP" Peterson', displayName: 0 },
        { name: '[Deputy] Adrian Pearce', displayName: 2 },
        { name: 'Martin Polen', displayName: 0 },
    ],
    Ponnhub: [
        { name: '[Therapist] Rexford Yeung', factions: ['Medical'], nicknames: ['Rex'], displayName: 3 },
    ],
    Pons: [
        { name: 'Harry Martinez', displayName: 0 },
        { name: '[Deputy] Otis Tucker' },
        { name: '[Officer] Chet Manley', displayName: 1, assume: 'assumeOther' },
        { name: '[Officer] Bodean Tucker', nicknames: ['Bo'] },
    ],
    PotterTV: [
        { name: 'Ali Ababwa', displayName: 0 },
    ],
    PriddyFresh: [
        { name: 'Tupac Shakur' },
    ],
    Primal: [
        { name: '[Officer] Kareem Lyon', displayName: 1 },
    ],
    PROD: [
        { name: 'Prod Ween', factions: ['Independent'], nicknames: ['P', 'Rod'], displayName: 1 },
        { name: 'Champ Ion', factions: ['Slim'], displayName: 0 },
    ],
    prof_frosty: [
        { name: 'Clive Anderson', factions: ['Manor'], nicknames: ['C2C'], displayName: 1 },
    ],
    ProphTart: [
        { name: 'Lucian Lullaby', factions: ['Order'], displayName: 0 },
    ],
    Protay10: [
        { name: 'James Thompson', factions: ['Hydra Gang'], nicknames: ['James "Phantom" Thompson', 'Phantom'], displayName: 4 },
        { name: '[Deputy] Jacob Specter' },
    ],
    PsiSyn: [
        { name: '[Officer] Lucio Panini', displayName: 1, assumeServer: 'public' },
    ],
    Pssychotic: [
        { name: 'Jason Paul', factions: ['Lost MC'], nicknames: ['JP'] },
        { name: 'Hades', nicknames: ['Dog'] },
    ],
    ptjones: [
        { name: 'C Rock', displayName: 0 },
    ],
    PuckNatorGaming: [
        { name: 'Jack Higgins', displayName: 0, assume: 'assumeOther' },
        { name: 'Tate Urchips', factions: ['Prison'], displayName: 0 },
    ],
    puddledux: [
        { name: 'Jake Rake', factions: ['Prison'], displayName: 0 },
    ],
    PureToTheSport: [
        { name: 'Scooter McQueeny', factions: ['Chang Gang'], nicknames: ['Sport'], displayName: 3 },
    ],
    Purge9090: [
        { name: 'Jack Frent', displayName: 0 },
    ],
    Purpose2: [
        { name: '[Officer] Percy Weaver' },
    ],
    Pydrex: [
        { name: '[Deputy] James Doakes', displayName: 2 },
    ],
    qift: [
        { name: 'Winter Sison', factions: ['Burger Shot'], nicknames: [], displayName: 1 },
    ],
    qMARIOx: [
        { name: 'Fernando "Mario" Reyes', factions: ['Chang Gang', 'Hydra Gang'], nicknames: ['"Mario" from the Barrio'] },
        { name: '[Officer] Rob Uncle', nicknames: ['Robert'], displayName: 2 },
    ],
    qrowy: [
        { name: 'Elias Winchester', factions: ['Police'], displayName: 0 },
    ],
    questtk: [
        { name: 'Zizo Silva', nicknames: ['Zeezo'], displayName: 1 },
    ],
    Quru: [
        { name: '[Officer] Vladimir Reznik' },
        { name: 'Pepe Ramos', displayName: 0 },
    ],
    RafBull: [
        { name: 'Matthew Heisenbell', factions: ['Independent'], displayName: 0, assumeServer: 'public' },
    ],
    Ragonath: [
        { name: '[Officer] Leif Norgaard', displayName: 2 },
        { name: 'Maxwell Devitt', displayName: 0 },
        { name: 'Ezekiel "Zeke" Stahl', factions: ['Prison'], displayName: 0 },
    ],
    Raided: [
        { name: '[Officer] Gage Draider', nicknames: ['Dev', 'Developer', 'Development'] },
        { name: 'Wren Draider', displayName: 1 },
        { name: '[Development] Raided', factions: ['Development'] },
    ],
    raine: [
        { name: 'Penny Farthing' },
    ],
    RALLY728: [
        { name: 'Armando Hernandez' },
    ],
    Ramee: [
        { name: 'Ramee El-Rahman', factions: ['Chang Gang'], nicknames: ['The "Warlord"', 'The "Vulture"', 'SBS Patient-0'] },
        { name: '[Ranger] Conan Clarkson' },
    ],
    Randeep10: [
        { name: 'Cain Bridges', factions: ['Saints'], displayName: 0 },
    ],
    Randolph: [
        { name: 'Don Dolph', displayName: 0 },
    ],
    Rasta: [
        { name: 'Dunn Robinson', assume: 'assumeOther', assumeServer: 'whitelist' },
        { name: '[Deputy] Dean Dimes III', displayName: 2, assumeServer: 'public' },
        { name: 'Mary Livingston', displayName: 0 },
    ],
    RatedEpicz: [
        { name: 'Randy Bullet', factions: ['Chang Gang'], nicknames: ['Lazy-Eye', 'Shankz'], assumeServer: 'whitelist', facebook: false, assume: 'assumeOther' },
        { name: 'Randy Bullet' },
        { name: 'Roundy Buffet', factions: ['Independent'], nicknames: ['Randy', 'Bullet'], assumeServer: 'public' },
        { name: '[Trooper] AJ Hunter', nicknames: ['207'] },
    ],
    Raveesh1: [
        { name: 'Yahya "Yaya" Ahmed', nicknames: [], displayName: 1 },
    ],
    rawrparty: [
        { name: 'Tig Oconner', factions: ['DoC'], displayName: 0 },
    ],
    Ray__C: [
        {
            name: 'Raymond "Ray" Romanov',
            factions: ['Sinner Pawn', 'Habibis', 'Faceless'],
            leader: true,
            nicknames: ['Ray', reg(/\brussia/)],
            assumeChar: true,
            assumeServer: 'whitelist',
        },
        { name: '[Officer] Raycardo Flick', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Raycardo Flick', displayName: 1, assumeServer: 'public' },
        { name: 'Raymond Romanov', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    Ray308win: [
        { name: '[Officer] Craig Barrett' },
        { name: '[FIB Agent] Lyonel Winchester' },
    ],
    RayvenEyed: [
        { name: 'Milo King', displayName: 0 },
    ],
    razzy: [
        { name: 'Ryo "RJ" Junior', factions: ['Besties'], nicknames: ['Inactive'], displayName: 1 },
    ],
    Realzman: [
        { name: '[EMS] Connor', factions: ['Medical'] },
        { name: 'Malakai' },
    ],
    RedPotatoPlays: [
        { name: '[Officer] Rudy Romano', assumeServer: 'public' },
    ],
    Reedy: [
        { name: 'Raul Luis-Blanco', displayName: 1 },
    ],
    ReelSalty: [
        { name: '[Deputy] Frank Giuliani', assumeServer: 'public' },
    ],
    Reina: [
        { name: 'Mona Sanchez', nicknames: [], displayName: 1 },
    ],
    Reklez: [
        { name: 'Chico Guzman', nicknames: [], displayName: 1 },
        { name: 'AJ', factions: ['SSB'] },
    ],
    RemdogG: [
        { name: '[Officer] Alex Suarez', nicknames: ['549'] },
    ],
    RemiTheSiren: [
        { name: '[Dr.] Lily Harte', factions: ['Medical'], displayName: 2 },
        { name: 'Wednesday Mushkin', factions: ['HOA'] },
    ],
    Renegade93TV: [
        { name: 'Draxon Payne', displayName: 1 },
    ],
    reno_raines: [
        { name: 'Manny McDaniels', factions: ['HOA'] },
    ],
    rerolldota: [
        { name: '[Deputy] Lea Nova', nicknames: ['Enforcer'] },
        { name: 'Jessie Lea Gallagah', factions: ['DoJ', 'Police'], displayName: 0 },
    ],
    Resurrex: [
        { name: '[Officer] Ace Crow' },
    ],
    ReverendCatino: [
        { name: 'Rocky Topps', displayName: 1 },
    ],
    revive: [
        { name: 'Diego Montoya', factions: ['Gruppe6', 'Order'], displayName: 0 },
    ],
    RevRoach: [
        { name: "Happy D'Klown", factions: ['Clowns'] },
    ],
    rexs: [
        { name: 'Ricky Dallas', factions: ['Police'], displayName: 0 },
    ],
    Rexsair: [
        { name: 'Rexarius Bracchimus', factions: ['Hydra Gang'], nicknames: ['Rex'], displayName: 3 },
    ],
    Reychel: [
        { name: 'Aubrey Adams', factions: ['ADMC'] },
    ],
    RhiTexxy: [
        { name: 'Brook Lexi', factions: ['Lost MC'] },
    ],
    richyrevolver: [
        { name: 'Axel Drake' },
    ],
    RickMongoLIVE: [
        { name: '[D.A.] Rick Mongo', assume: 'assumeOther' },
    ],
    RileyRP: [
        { name: 'Bubbles Smith' },
    ],
    ripoozi: [
        { name: 'Larry Knox', factions: ['The 404', 'Brick House'], displayName: 1 },
    ],
    Riseblap: [
        { name: 'Saleem Shakib' },
    ],
    Rissabear: [
        { name: 'Rissa Berry', factions: ['Collective', 'Besties'] },
    ],
    RiZRP: [
        { name: 'Nikita Reznikov' },
    ],
    rlly: [
        { name: '[Officer] Shelly Targaryen Smith', factions: ['Gruppe6'], nicknames: ['Shelleh', 'Queen', '523'], displayName: 1 },
        { name: 'Kelly Smith' },
    ],
    Robbeaxe: [
        { name: '[Deputy] Sally Avvocata', displayName: 2 },
    ],
    RobotNinjaPants: [
        { name: '[Deputy] Hunter Cross' },
        { name: 'Jacob Slate', displayName: 0 },
    ],
    roflgator: [
        { name: 'Robert Spowylamywanowski', factions: ['Burger Shot'], nicknames: ['Rob', 'Polish', 'Night Manager'], displayName: 3 },
    ],
    ronladd: [
        { name: 'Vince Cuzzo', factions: ['Saints'], nicknames: ['Jeffrey', 'Paint'], displayName: 0 },
    ],
    rookgoose: [
        { name: 'Knox Beaumont', factions: ['Police'], displayName: 0 },
    ],
    RookTM: [
        { name: '[Deputy] Deacon Frye', nicknames: ['564'] },
    ],
    Rose: [
        { name: '[Deputy] Perrie Lane' },
        { name: '[Deputy] Maggie Dean' },
    ],
    Roxmiral: [
        { name: 'Sherry Paie', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Deputy] Nikki Drewel', nicknames: ['Drools'], displayName: 2 },
        { name: '[Ranger] Sherry Paie', displayName: 1, assumeServer: 'public' },
        { name: 'Ruby Morris' },
        { name: 'Sherry Lee' },
        { name: 'Nina Simmons', factions: ['Sinner Pawn'], displayName: 0 },
        { name: 'Nadia Khan', factions: ['Police'], displayName: 0 },
    ],
    royalbluesmile: [
        { name: 'Ell LeFant', displayName: 0 },
    ],
    royalcreates: [
        { name: 'Wendy Thomas', factions: ['Clowns'], displayName: 0 },
    ],
    RudeNoodleNPC: [
        { name: 'Tee Veeman' },
    ],
    ruee: [
        { name: 'Saint Martin', nicknames: ['Gomez'] },
    ],
    Runyon11: [
        { name: 'Luk Zwiebel', displayName: 0 },
    ],
    rustbingames: [
        { name: 'Barney McClay', factions: ['Police'], displayName: 0 },
    ],
    RyanRV: [
        { name: 'Jay Jones', nicknames: ['JJ'], displayName: 0 },
    ],
    RyuRPG: [
        { name: 'Rafael "Raffa" Sanchez', factions: ['Marabunta'] },
    ],
    S_Palms: [
        { name: 'Kimmy Youngirl', displayName: 1 },
        { name: 'Mina Kwon', displayName: 0 },
    ],
    s0upes: [
        { name: '[Deputy] Silas Grimmer' },
        { name: 'James "Apples" Apeller' },
        { name: 'Chadley ?' },
        { name: 'Ryder S. Block', displayName: 0 },
        { name: 'Ezekiel "Zero" Rogaine' },
    ],
    Saiiren: [
        { name: 'Ai "Egg" Musori', nicknames: ['Bitch'], displayName: 0 },
        { name: '[Deputy] Yuu Gondai', nicknames: ['Yu', 'Yoo', 'Gon Die'] },
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
        { name: 'Sammy B', displayName: 0 },
    ],
    sanauchiha: [
        { name: 'Waiata Kim', factions: ['Brick House'], displayName: 0 },
    ],
    saNhje: [
        { name: '[Development] saNhje', factions: ['Development'], nicknames: ['MLO'] },
    ],
    Sannmann_: [
        { name: 'Finley Milton', factions: ['ADMC'], displayName: 0 },
    ],
    Saphirici: [
        { name: '[Deputy] Rupert Lockridge-Fuller', displayName: 1 },
    ],
    Sarah_Digitally: [
        { name: 'Anna Jørgensen', nicknames: ['Lilac', 'Illac', 'Jorgensen'], displayName: 3 },
    ],
    Sareff: [
        { name: '[Deputy] Ashley Smith' },
        { name: 'Paige Green' },
        { name: 'Ophelia Dawson', factions: ['ADMC'], nicknames: ['Fey'], displayName: 3 },
        { name: 'Jocelyn Wayne' },
        { name: 'Violet Noreguarde', factions: ['Vagos'], assumeServer: 'whitelist' },
        { name: '[Deputy] Paige Green', assumeServer: 'public' },
        { name: 'Chasity Dawes' },
    ],
    sarkwentv: [
        { name: 'Felix Cross', factions: ['Sweepers', 'Order'], displayName: 0 },
        { name: 'Chris Peters', factions: ['Gruppe6', 'Police'], displayName: 0 },
    ],
    sashagrey: [
        { name: 'Enza Zissou' },
    ],
    sateurne: [
        { name: 'Nori Valentine', displayName: 1 },
    ],
    saturneighteen: [
        { name: '[Deputy] Juno Sweeney', factions: ['Police'], displayName: 1 },
        { name: 'Cleo Shaw', nicknames: ['Coleslaw'], displayName: 1, assumeServer: 'whitelist' },
    ],
    SAVx: [
        { name: 'Johnny Cassle' },
    ],
    Sax850: [
        { name: 'Motya Satovksy' },
        { name: '[Officer] Olof Gunnarsson' },
    ],
    Sayeed: [
        { name: 'Arush "Speedy" Patel Santana', factions: ['Brick Bois', 'Brick House'], nicknames: [], displayName: 1 },
    ],
    SayeedBlack: [
        { name: 'Arush Patel "Speedy" Santana', nicknames: ['El Jefe'] },
        { name: '[Deputy] Sayeed White', nicknames: ['Mr. White'], displayName: 2 },
    ],
    scenri: [
        { name: 'Reno Panic' },
    ],
    Sciencegun: [
        { name: 'John "Turbo" Miller' },
    ],
    scotism: [
        { name: 'Mike Baldwin', displayName: 0 },
    ],
    ScytheX: [
        { name: 'Frankie Lorenzo', factions: ['GSF'], displayName: 0 },
    ],
    SeaNanners: [
        { name: 'Ronjulio Escjulio' },
    ],
    Selvek: [
        { name: '[Officer] Jeffrey Price', displayName: 1 },
        { name: '[Officer] Jack Sawyer' },
    ],
    SerialKillerRP: [
        { name: 'Ezio Kafereska' },
    ],
    sether100: [
        { name: 'Seth Castro', displayName: 0 },
    ],
    Sgt_Apollo: [
        { name: 'Salem Barghouthi', facebook: true },
        { name: '[Officer] Aziz Sultan', nicknames: ['Za Nose'], displayName: 1 },
    ],
    SgtApollo: [
        { name: 'Salem Barghouthi', factions: ['Brick House', 'The 404', 'Gruppe6'] },
        { name: '[Officer] Aziz Sultan', nicknames: ['Za Nose'], displayName: 1 },
        { name: 'Malik Mansori', factions: ['Police'], displayName: 0 },
    ],
    shadiko: [
        { name: 'Alex Domino', displayName: 0 },
    ],
    shadowedkayla: [
        { name: 'Kayla Rose', displayName: 1 },
    ],
    shadowgam3rx: [
        { name: 'Jenny Ondamic', nicknames: ['BSQueen'], displayName: 0 },
    ],
    shafabeats: [
        { name: 'Lance "Shafa" Edwards', factions: ['Independent'] },
    ],
    shaggy_steve: [
        { name: '[Deputy] Jimmy Gordon' },
    ],
    Sharaadrick: [
        { name: '[Deputy] Marcel King', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: "W'Kabi Aku", displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Marcel King', displayName: 1, assumeServer: 'public' },
    ],
    ShawW0w: [
        { name: 'Garry Roche', displayName: 0 },
    ],
    Shayeno: [
        { name: 'Ryder James Flint', nicknames: ['RJ'], displayName: 4 },
    ],
    SheepDog59: [
        { name: '[Officer] Mason Kennedy', nicknames: ['545'], displayName: 2 },
    ],
    SheepieMezz: [
        { name: '[Deputy] Shiran Quinn' },
    ],
    Shiki: [
        { name: 'Vivian Vale', displayName: 0 },
    ],
    Shindur: [
        { name: '[Deputy] Joey Keys' },
    ],
    shiny: [
        { name: '[Officer] Honey Buns', nicknames: ['D-21'] },
        { name: 'Pebbles ?', nicknames: ['Dog', reg(/\b(?:wee+\s*woo+)+\b/)] },
        { name: 'Clyde "Meowfurryon" Eastside', nicknames: ['Druid', 'Archdruid', 'Malfurryon'] },
    ],
    shlomi: [
        { name: 'Shlomi Specter', factions: ['Manor'], nicknames: ['Shmulik'], displayName: 1 },
    ],
    Shnag: [
        { name: 'Keyvon "Key" Cartier', factions: ['SSB'] },
    ],
    shodtwo: [
        { name: 'Kishawn Baker', factions: ['Chang Gang'], nicknames: ['Lil Blicky'], displayName: 3 },
    ],
    Shortyyguy: [
        { name: 'Eddie Delish' },
    ],
    Shotz: [
        { name: 'Vinny Pistone', factions: ['Chang Gang'], assumeServer: 'whitelist' },
        // { name: 'Vinny Pistone', factions: ['Independent'], assumeServer: 'public' },
        { name: '[Ranger] John Mineo', nicknames: ['Corporal'] },
        { name: 'Mr J', factions: ['Chang Gang'], displayName: 0 },
    ],
    Shrimp_: [
        { name: 'Bradley Kickass', displayName: 0 },
        { name: 'Jimmy Bending', displayName: 0 },
        { name: '[Mr.] Watt Son', displayName: 0 },
    ],
    shroud: [
        { name: 'Richard Hard' },
    ],
    ShrykeLP: [
        { name: 'Patrick Shryke', displayName: 0 },
    ],
    shush_x3: [
        { name: 'Devon Shy', factions: ['SSB'], displayName: 1 },
    ],
    ShutupWave: [
        { name: '[Deputy] Richard Tips', displayName: 2 },
    ],
    Shxcky: [
        { name: 'Jay Breezy', displayName: 0 },
    ],
    Sidefxmayinclde: [
        { name: 'Kerm Henson', displayName: 0 },
    ],
    sierraxmyst: [
        { name: 'Lukas Myst', displayName: 0 },
    ],
    SiirToast: [
        { name: 'Anton Belov' },
    ],
    silbullet: [
        { name: 'Shawn Maplethorne', factions: ['Police'], displayName: 0 },
    ],
    Silent: [
        {
            name: 'Juan Carlos "Flippy" Hernandez',
            factions: ['Hydra Gang', 'Faceless', 'Chang Gang'],
            nicknames: [reg(/\bflip/), reg(/\bcrim\w*\b(?!.+\bcop)/), 'not cop', 'trying out crim', reg(/\bclaire'?s?\s*(?:boy|husb)/)],
            leader: true,
        },
        { name: '[Officer] Joel Garcia', nicknames: [reg(/\bcop\b(?!.+\bcrim)/), reg(/\bcop\b(?:.+\bnerf)/), 'trying out cop'] },
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
        { name: 'Reggie Might', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Lawyer] Blake Specter' },
        { name: '[Officer] Rodney Fuel' },
        { name: '[Officer] Reggie Might', assumeServer: 'public' },
    ],
    SimplessR6: [
        { name: 'Andino Vidal', factions: ['Besties'], displayName: 2 },
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
        { name: 'Reginald "Reggie" Bigglesby' },
    ],
    sirryman: [
        { name: 'Levi Colton', displayName: 0 },
    ],
    Skannerz_: [
        { name: 'Wayne Kerr', displayName: 0 },
        { name: '[Deputy] Pual Greenway', displayName: 2 },
    ],
    skatebeard: [
        { name: 'Scotty Bard', factions: ['DoC'], displayName: 0 },
    ],
    Skelasoldier: [
        { name: 'Raymond "Xray" Delprince', factions: ['SSB'], displayName: 0 },
    ],
    Skiliyo: [
        { name: 'Derek Thomson', displayName: 1 },
    ],
    SkiMask0n: [
        { name: 'Von Westbrook', factions: ['SSB'], nicknames: ['Vonn'], displayName: 0 },
    ],
    skimaskdaniel: [
        { name: 'Sheamus McCarthy', factions: ['Pawn Addicts'], displayName: 0 },
        { name: 'James Graves', factions: ['Police'], displayName: 0 },
    ],
    SkipGently: [
        { name: '[Officer] John Riggs', factions: ['Police'] },
    ],
    skippypoppin: [
        { name: 'Kevin Whipaloo', displayName: 0 },
    ],
    Skitx0: [
        { name: 'Smino "Hitta" Brown', factions: ['GSF'], assume: 'assumeNpNoOther' },
    ],
    skorbnut: [
        { name: 'Conner Oxby', factions: ['Police'], displayName: 0 },
    ],
    Skud_Oftr: [
        { name: 'Skud Oftr', displayName: 1 },
    ],
    Skushyy: [
        { name: 'Joey Violento', displayName: 1 },
        { name: 'Luka Malarkey', displayName: 0 },
    ],
    skxd07: [
        { name: '[Officer] Joshi Drake', assumeServer: 'international' },
    ],
    sl1meW: [
        { name: 'Tommy "TicTac" Olliver', nicknames: ['Tic Tac'] },
    ],
    Slasher2099: [
        { name: '[Officer] Darrel McCormik' },
        { name: '[K9 Trooper] Fenton', nicknames: ['Fentons'] },
    ],
    SlightlyPoetic: [
        { name: 'Poe Dempsey', factions: ['Besties'] },
    ],
    slimeoz: [
        { name: 'Tommy "TicTac" Oliver', nicknames: [], displayName: 1 },
    ],
    SlixGamingTV: [
        { name: 'Nico August' },
    ],
    SlummpyJ: [
        { name: 'Javier Diaz', nicknames: ['Javi'] },
    ],
    Smaczny: [
        { name: 'Conrad Gross', assume: 'assumeOther' },
    ],
    SmithyFPS: [
        { name: 'Craig Munson', nicknames: ['Crackhead Craig'], displayName: 3, assume: 'assumeNpNoOther' },
    ],
    SmithyPlaysUK: [
        { name: 'Reginald Parker' },
        { name: 'Duke Wiggles', displayName: 0 },
    ],
    smo_och: [
        { name: 'Mike Smoore', displayName: 0 },
    ],
    SmokySloth: [
        { name: 'Bovice Wilkinson', factions: ['Prison'] },
        { name: 'Tayvadius "Chef" Jamarcus Livingston III', factions: ['GSF'] },
    ],
    SnekoGebiko: [
        { name: '[Deputy] Perry Willis', displayName: 1, assumeServer: 'public' },
    ],
    SniperNamedG: [
        { name: 'G Baby', displayName: 0 },
    ],
    so_sneaky: [
        { name: 'Jessie Dagger', displayName: 0 },
    ],
    SoapFPS: [
        { name: 'Soap ?' },
    ],
    sock22: [
        { name: '[Deputy] Richard Dark', factions: ['Police'] },
        { name: 'Napolean Dankleaf', nicknames: ['Napoleon'], displayName: 0 },
    ],
    SodaKite: [
        { name: 'Ellie Dono' },
        { name: 'Chell Phish', displayName: 0 },
    ],
    sodapoppin: [
        { name: 'Kevin Whipaloo', factions: ['Casino'], leader: true, displayName: 0 },
        { name: 'Tappy "Cat" Nippers', nicknames: ['Cat'], displayName: 0 },
    ],
    Sokka_x: [
        { name: 'Finn O\'Connor', factions: ['Manor'], nicknames: ['Finn'], displayName: 1 },
    ],
    soleKEFS: [
        { name: 'Junior Meats', factions: ['ADMC'], displayName: 0 },
    ],
    SoMuchOregano: [
        { name: 'Vincent Genovese', displayName: 0 },
    ],
    Soniic808: [
        { name: 'Jack Stone', displayName: 0 },
    ],
    SonKnuck: [
        { name: 'Patrick Desseault', displayName: 0 },
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
        { name: 'Adrian Block', displayName: 0 },
        { name: '[Deputy] Patrick Downing', nicknames: ['Pat'] },
        { name: 'Casey Boyd', nicknames: ['Caseboy', 'L8PD'], displayName: 0 },
    ],
    SpekCypher: [
        { name: 'Luis Fernandez', factions: ['HOA'], displayName: 0 },
    ],
    Spekel: [
        { name: 'Sonya Summers', nicknames: ['Black Betty'] },
        { name: 'Chloe Lesterol' },
        { name: '[Officer] Scarlett Winters' },
    ],
    spicybackpain: [
        { name: 'Kray-Tor Skullfondler', factions: ['HOA'] },
    ],
    spicybarbie: [
        { name: 'Ariella Avery', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    SpiderPigEthan: [
        { name: 'Marvin Chunder', factions: ['HOA'], nicknames: ['Hades'], displayName: 3 },
    ],
    SpitfireQG: [
        { name: 'Billy Walker', displayName: 0 },
    ],
    spoty09: [
        { name: 'Staniel Raymond', nicknames: ['Elfie', 'Alfie'], displayName: 3 },
    ],
    Sput: [
        { name: 'Garry Smod', factions: ['Police'], displayName: 0, assume: 'assumeOther' },
    ],
    Ssaab: [
        { name: 'Alfonso "Saab" Sebastian', nicknames: ['Al'], displayName: 2 },
        // { name: '[Trooper] Sam Baas', factions: ['Police'], nicknames: ['Samir', 'Baasem'], displayName: 2 },
        { name: 'Ray Singha', displayName: 0 },
        { name: 'Charles Dawson', factions: ['Police'], displayName: 0 },
    ],
    SSLLAB: [
        { name: 'Ant Gaboosh', displayName: 1 },
    ],
    stalkerchic: [
        { name: 'Atlas Elwood', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    StalwartNightmare: [
        { name: '[Deputy] Alex Night', nicknames: ['Speedster'], assumeServer: 'public' },
        { name: '[Dispatch] Alex Night', nicknames: ['Delta-39T', 'D-39T'], displayName: 2, assumeServer: 'whitelist' },
    ],
    StankXO: [
        { name: 'Raccoon ?', displayName: 1 },
    ],
    stanwilis: [
        { name: 'Trina Bergström', nicknames: ['Bergstrom'], displayName: 0 },
    ],
    Stavy2hotty: [
        { name: 'Chip Green', nicknames: ['Tails'], displayName: 3 },
    ],
    STE_Eire: [
        { name: 'Stephen "STE" O\'Connor', factions: ['Sinner Pawn', 'Collective', 'Manor'], nicknames: ['STE', 'STD', 'Irish Nightmare'], displayName: 3 },
    ],
    steamcharlie: [
        { name: '[Deputy] Sydney Bearmont', displayName: 1 },
    ],
    Stephanerys: [
        { name: '[Deputy] Patricia Mayonnaise', nicknames: ['Patty'], displayName: 1 },
    ],
    ster: [
        { name: 'Guy Dance' },
        { name: 'Gerald Wagner', displayName: 0 },
    ],
    Sterling_live: [
        { name: '[Officer] Sterling Silver', assumeServer: 'public' },
    ],
    StevetheEmo: [
        { name: 'Eddie Baker', factions: ['Prison'], displayName: 0 },
    ],
    stevie_jay305: [
        { name: 'Lucian Knight', factions: ['Police'], displayName: 0 },
    ],
    stewvrt: [
        { name: 'Junior Diaz', factions: ['Brick House', 'The 404', 'Gruppe6'], displayName: 0 },
    ],
    StinkusKrys: [
        { name: 'Dean Gullberry', displayName: 0 },
    ],
    StinneKay: [
        { name: 'Sassa Raven', factions: ['Lost MC'], displayName: 0 },
    ],
    stitchybird: [
        { name: 'Daphne Tillamuck Valentino' },
        { name: 'Abigail "Abi" Sharp' },
    ],
    Stoner_Minded: [
        { name: '[Chief of Police] Frank Williams', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: '[Deputy] Frank Williams', displayName: 1, assumeServer: 'whitelist' },
        { name: 'Frankie Eastwood', displayName: 0, assumeServer: 'public' },
    ],
    StoneYEE: [
        { name: 'Stone Malone', displayName: 1 },
    ],
    Stork1e: [
        { name: '[Officer] Luis Montoya', displayName: 2 },
    ],
    stormskii: [
        { name: 'Storm Skii', factions: ['Besties'], displayName: 1 },
    ],
    StrawHatlol: [
        { name: 'Angel Jiménez', nicknames: ['Jimenez'], displayName: 0 },
    ],
    Striking_Fast: [
        { name: 'Gerard "Dewey" Hawthorne', nicknames: ['Dewie'] },
    ],
    StrikingContact: [
        { name: 'Seano "The Chemist" Blackthorne', factions: ['Habibis'], nicknames: ['Chemist'] },
    ],
    Stuply: [
        { name: 'William "12 Gauge" Glory', factions: ['Besties'] },
        { name: 'Salvatore "Big Pussy" Tamburlini' },
    ],
    Sukhi_1: [
        { name: 'Lucky Torkel', factions: ['Besties'] },
    ],
    SullyRP: [
        { name: 'Jack "Sully" Sullivan' },
    ],
    summit1g: [
        { name: 'Charles "Chawa" Johnson', factions: ['Chang Gang'] },
        { name: '[Deputy] John Charleston', assumeServer: 'whitelist' },
        { name: '[Trooper] Charles Johnson', nicknames: ['Chawa'], assumeServer: 'public' },
    ],
    sun_bae_: [
        { name: 'Charlotte Greene-Johnson', factions: ['DoJ'], displayName: 0 },
    ],
    Sunni: [
        { name: 'Hilda Bulking' },
    ],
    sunstonefire: [
        { name: 'Etta Hawthorne', factions: ['DoJ', 'Order'], displayName: 0 },
    ],
    SuperBunneh: [
        { name: '[EMS] Mila Smoak', factions: ['Medical'] },
        { name: 'Madison "Maddy" Fox', factions: ['GSF'] },
        { name: '[Officer] Lexus Lane', displayName: 1 },
    ],
    Sur_Lee: [
        { name: 'Mitch "Dumbass" Bader' },
    ],
    Surefour: [
        { name: 'Fred "Necrolord" Fredrick', nicknames: ['Necrolord', 'Ranger'] },
        { name: 'Chute D. Block' },
        { name: '[Officer] Kenny Hawk', nicknames: ['Powice'], displayName: 1 },
    ],
    Suspect: [
        { name: 'Marcos Da Silva' },
    ],
    suzster: [
        { name: 'Michael Kowalski', displayName: 0 },
    ],
    suzy_q: [
        { name: 'Dreah Johnson' },
    ],
    Svennoss: [
        { name: 'Barry Svensson' },
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
        { name: 'Miguel Almerion', factions: ['Besties'] },
        { name: '[Officer] Mervin Napoli', nicknames: ['Merv', 'Big Merv', 'Big M', reg(/\bmerv/)], displayName: 1 },
    ],
    Sykkuno: [
        {
            name: 'Yuno Sykk',
            factions: ['Sweepers', 'Gruppe6'],
            displayName: 1,
            assumeServer: 'whitelist',
            assumeChar: true,
        },
        { name: '[Deputy] Uno Reverse', displayName: 1 },
        { name: '[Ranger] Yuno Sykk', factions: ['Sweepers', 'Gruppe6'], displayName: 1, assumeServer: 'public' },
    ],
    Symfuhny: [
        { name: 'Simon Fuhny', displayName: 0 },
    ],
    synced3d: [
        { name: 'Max Watts', factions: ['Burger Shot'], displayName: 0 },
    ],
    SyncedGamingTV: [
        { name: '[Development] Synced', factions: ['Development'] },
    ],
    Syndicate: [
        { name: 'Seven Lighthouse', displayName: 0 },
        { name: 'Alfie Hunter', displayName: 0 },
    ],
    synkuraa: [
        { name: 'Alfredo ?', factions: ['ADMC'], assumeServer: 'public' },
    ],
    SynthHunter: [
        { name: 'Hunter "Wingman" Skye' },
    ],
    syph3rau: [
        { name: 'Lyon Martinez' },
    ],
    Syraphic: [
        { name: 'Elena Marilyn Vega', factions: ['Independent'] },
        { name: '[Deputy] Kyra Pierce' },
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
        { name: 'Sarah Ableton' },
    ],
    Tasara22: [
        { name: 'Tuesday Phillips' },
        { name: 'Milena' },
    ],
    TashiRP: [
        { name: 'Zelda Johansson', displayName: 0 },
    ],
    TastyMintsNA: [
        { name: '[Deputy] Eric Wong' },
        { name: '[Officer] Eric Wong', assumeServer: 'public' },
    ],
    teaneww: [
        { name: 'Sevyn Figurez', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    tehbigmadbarbarian: [
        { name: '[Deputy] ? "JJ" ?', assumeServer: 'public' },
    ],
    Tehrani: [
        { name: 'Boris Ivanov' },
        { name: 'Hector Guzman', factions: ['Vagos'] },
    ],
    tenGreg: [
        { name: 'Henry Goodman', nicknames: ['Dinoco'], displayName: 0 },
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
        { name: 'Rocco Smith', nicknames: ['Fury'], displayName: 3 },
    ],
    TezMate: [
        { name: '[Deputy] Nicholas Riggs' },
    ],
    TFNeraZe: [
        { name: '[Deputy] Michael Dunning' },
    ],
    Tfue: [
        { name: 'Tucker Johnson', factions: ['Chang Gang'] },
    ],
    thaCOOP: [
        { name: '[Officer] Luke Holliday' },
        { name: 'Coop Holliday', displayName: 1 },
        { name: 'Matthew Payne', displayName: 2 },
        { name: 'Remee El-Rahman' },
    ],
    Thadrius: [
        { name: '[Deputy] Jonathan Dazzler', nicknames: ['Johnny'], displayName: 2 },
        { name: 'Slappy McGaffey' },
    ],
    Thatblokeryan: [
        { name: 'Jaxxon Jones' },
    ],
    ThatEmoPunk: [
        { name: 'Ezreal Kay-Hoss', nicknames: ['EZ', 'E.Z'] },
    ],
    ThatGuyGP: [
        { name: 'Jamal Abdul Jabbar', factions: ['Besties'], displayName: 1 },
        { name: 'Maz Razi', nicknames: ['Uncle Tony', 'Uncle T'], displayName: 3 },
    ],
    the_halfhand: [
        { name: 'Jack "Sully" Sullivan' },
        { name: '[Officer] Oscar Fitzpatrick', nicknames: ['Fitz', 'Patrick'] },
    ],
    the_truth_jgw: [
        { name: 'Darren Carter', factions: ['Police'], displayName: 0 },
    ],
    TheAaronShaq: [
        { name: 'Ebeneezer Mackaral Botanacus IV', nicknames: ['Glue Guy'], displayName: 5 },
    ],
    TheAmelina: [
        { name: '[Deputy] Alexandra Carlson', nicknames: ['588'], displayName: 2 },
        { name: '[Dr.] Meredith Jenkins', factions: ['Medical'], displayName: 1 },
    ],
    thebbam: [
        { name: 'Santino Forte', factions: ['Police'], displayName: 0 },
    ],
    TheBigMeech: [
        { name: '[Deputy] Leonard Cassidy', nicknames: ['Leon'] },
        { name: 'Pilbis Shonly', factions: ['DoC', 'Pawn Addicts', 'Burger Shot'] },
        { name: 'Tyler Kwando', displayName: 0 },
        { name: 'Jesse Kennedy', factions: ['Police'], displayName: 0 },
    ],
    TheBigXH: [
        { name: 'Jose Rodriguez', factions: ['Vagos'], nicknames: ['Lil Ese'], displayName: 3 },
    ],
    TheChief1114: [
        { name: '[Deputy] Fingle Dan', displayName: 1 },
        { name: 'Chief', displayName: 1 },
    ],
    TheDasTony: [
        { name: 'Matteo Salerno', nicknames: [], displayName: 1 },
    ],
    thedeluxe4: [
        { name: 'Cooper Hart', factions: ['DoC'], displayName: 0 },
    ],
    TheDogfather82: [
        { name: 'Lucas "Wolfy" Frank', factions: ['Vagos'] },
    ],
    TheDondi: [
        { name: 'Arthur Hammond', nicknames: ['The "Doctor"'] },
        { name: '[Officer] Delaney' },
    ],
    TheDoubles: [
        { name: 'Peter Johnsen', factions: ['Besties'] },
    ],
    theearchitect: [
        { name: 'Quinton Quantum', factions: ['DoC', 'DoJ'], displayName: 0 },
        { name: 'Charles Dawson Jr', factions: ['Police'], displayName: 0 },
    ],
    TheEazyLife: [
        { name: 'Brandon Valentino', factions: ['Sinner Pawn', 'Collective', 'Faceless'], displayName: 0 },
        { name: 'Tyler "Ty" Thompson' },
    ],
    theeYAIR: [
        { name: 'Yair Lamas', displayName: 0 },
    ],
    TheGeekEntry: [
        { name: 'Stacey Doyle', displayName: 1 },
        { name: 'Jenn Bordeaux', nicknames: ['Frenchie', 'French'] },
    ],
    TheGeneralSmokey: [
        { name: 'Tom Crann Darach', factions: ['DoC', 'Gruppe6'], displayName: 0 },
    ],
    TheGoldenDunsparce: [
        { name: 'Phueng Madee', nicknames: ['Bee'] },
    ],
    TheHexagonist: [
        { name: '[Deputy] Vincent Glass', displayName: 2 },
        { name: 'Denis Blatovich', nicknames: ['Boris'], displayName: 0 },
    ],
    Thekegs: [
        { name: 'Charles Raymond', displayName: 0 },
    ],
    TheKozak_: [
        { name: '[EMS] Chad Chaddington III', factions: ['Medical'] },
    ],
    theLGX: [
        { name: 'Bryce Miller', nicknames: ['BDawg'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Diego Marquez' },
        { name: 'Dave Myers', displayName: 0 },
        { name: 'Roland Nelson', assumeServer: 'whitelist' },
        { name: '[Deputy] Neil McReal' },
        { name: '[Officer] Roland Nelson', assumeServer: 'public' },
    ],
    TheMLGenies: [
        { name: 'Shivananand "Shivvy" Sunandrankumar' },
        { name: 'Sinbad Thoor', displayName: 0 },
    ],
    TheMrKatMar: [
        { name: '[Ranger] Noah White', displayName: 2, assumeServer: 'international' },
    ],
    Theobrosia: [
        { name: 'Arcadia Grayson', factions: ['DoJ'], displayName: 0 },
    ],
    TheOnlyWendigo: [
        { name: 'Alexandru Vasquez' },
    ],
    TheRonineh: [
        { name: '[Officer] Ash Anderson', assumeServer: 'international' },
    ],
    TheRudyDuck: [
        { name: 'Felix Klein', displayName: 0 },
    ],
    TheStarRoom: [
        { name: 'Tommy Puff', nicknames: [], displayName: 1 },
    ],
    thicbootyconspiracyshorty: [
        { name: 'Karli Marx', factions: ['ADMC'], displayName: 0, assumeServer: 'public' },
    ],
    Thio: [
        { name: 'Kirk Jerkems', factions: ['Clowns', 'Police'], displayName: 0 },
    ],
    Thirteen9N: [
        { name: 'Arya Shah', displayName: 1 },
    ],
    thisisfinelive: [
        { name: 'Baron VonBoom', factions: ['Burger Shot', 'DoC'], displayName: 0 },
    ],
    Timmac: [
        { name: '[Deputy] T.J. Mack', assumeServer: 'whitelist' },
        { name: 'Gomer Colton', nicknames: ['Gomey'], assumeServer: 'whitelist' },
        { name: 'Shaggy Dankweed', displayName: 0 },
        { name: '[Trooper] T.J. Mack', assumeServer: 'public' },
    ],
    timmy: [
        { name: 'Orlando Jones', nicknames: ['OJ'], displayName: 3 },
        { name: 'Chino G' },
        { name: 'Cardell "CJ" Jones', factions: ['SSB'] },
    ],
    TinaKitten: [
        { name: '? ?' },
    ],
    Tinker: [
        { name: '[Deputy] Theodore Tinker' },
        { name: 'Sean Tinker', displayName: 0 },
    ],
    TinySpark: [
        { name: '[Deputy] Daisy Dukakis', factions: ['Police'] },
        { name: 'Kassandra Kage', factions: ['Pawn Addicts'], nicknames: ['Kass'] },
    ],
    TinyStunt: [
        { name: '[EMS] Bailey Jade', factions: ['Medical'] },
    ],
    tjnv: [
        { name: 'Charli Jones', factions: ['Piss Boiz', 'Casino', 'DoC'], displayName: 0 },
    ],
    tjnv_: [
        { name: 'Charli "CJ" Jones', nicknames: [], displayName: 1 },
    ],
    ToastRP: [
        { name: 'Paulie' },
    ],
    Tobii: [
        { name: '[Development] Tobii', factions: ['Development'], nicknames: [reg(/\bdev\s*(?:stuff|things|fixing|work)/)] },
        { name: 'Michael Simone', nicknames: ['Architect', 'RP'], displayName: 0 },
    ],
    Tommy5oh: [
        { name: 'Pablo Santiago', displayName: 0 },
    ],
    Tomovids: [
        { name: 'Toe Moh', nicknames: ['Big Toe'], displayName: 3 },
    ],
    totallynotbelltower: [
        { name: 'Callista Bell', factions: ['Clowns'], displayName: 0 },
        { name: 'Raven Thorne', factions: ['Police'], displayName: 0 },
    ],
    Townie: [
        { name: 'Teddy Booker', factions: ['ADMC', 'Mechanic'], displayName: 1 },
    ],
    TPLivewire: [
        { name: 'Timmy Yougman', displayName: 0 },
    ],
    Trainwreckstv: [
        { name: 'Douglas "Doug Buck" Buck', displayName: 0 },
    ],
    TranquilKJ: [
        { name: 'KJ Taylor', displayName: 0 },
    ],
    trashedpotatopie: [
        { name: '[Officer] Cherri Blossom', nicknames: ['512'], displayName: 2 },
        { name: 'Marie Ortiz', factions: ['BPM'], displayName: 0 },
    ],
    Traumz: [
        { name: '[Deputy] Edward Thatch', nicknames: ['Captain Moosebeard', 'Moosebeard'], displayName: 2 },
        { name: 'Tim Littleman', displayName: 0 },
        { name: 'Gord Ronson', factions: ['DoC'], displayName: 0 },
    ],
    travpiper: [
        { name: 'Cockington "Dhead" Webster', factions: ['6Chambers', 'Pawn Addicts', 'Besties'], nicknames: [reg(/head\b/)] },
        { name: '[Deputy] Tyler Peters', factions: ['Police'], displayName: 2 },
        { name: '[Deputy] William Gunner', nicknames: ['Willy'], displayName: 2 },
        { name: 'Carlos "Cheddar" Sanchez', factions: ['HOA'] },
        { name: 'Carlos "Cheddar" Sanchez' },
        { name: '[Deputy] Jason Hannah', displayName: 1 },
        { name: 'Warren Wallace' },
        { name: '[Watch Party] travpiper', factions: ['Watch Party'], nicknames: ['monday night sports'] },
        { name: 'Charlie Colcord' },
        { name: 'Hazard' },
    ],
    traycee: [
        { name: 'Lexi Law' },
        { name: '[Officer] Aspen Gray', nicknames: [reg(/a[s$]pen\b/)] },
    ],
    TTV_CaptMcGee1818: [
        { name: 'Leroy Smith', factions: ['SSB'], displayName: 1, assumeServer: 'public' },
    ],
    Turkaderk: [
        { name: 'Benji Carter', displayName: 0 },
    ],
    TurtleActually: [
        { name: 'Jordan Lee', factions: ['ADMC'], displayName: 0 },
    ],
    Turtledoves: [
        { name: 'Hung Jae-Min', displayName: 0 },
    ],
    Turtlenumber13: [
        { name: 'Chance Zero', displayName: 0 },
    ],
    twiggycow: [
        { name: 'Viola Ends', factions: ['Saints'], displayName: 1 },
    ],
    twinkles: [
        { name: 'Twinkles', factions: ['Clowns'], displayName: 0 },
    ],
    TwistedBones: [
        { name: 'Mark White', displayName: 0 },
        { name: 'Hank Marston', leader: true, displayName: 0 },
        { name: 'Marcus Black', factions: ['GSF'], displayName: 0 },
    ],
    TwistedManifest: [
        { name: 'Jack Valentino' },
    ],
    TwitchUser: [
        { name: 'Dang McNabb', displayName: 0 },
    ],
    Txylorzz: [
        { name: 'Taylor Lott', factions: ['Manor'], nicknames: ['TayTay'], displayName: 1 },
    ],
    Tyger: [
        { name: "Chase O'Dell", factions: ['Chang Gang'], nicknames: ['Lil Bleach', 'Bleach'], displayName: 3 },
    ],
    TylerNotNamed: [
        { name: 'Beau Bummer', factions: ['Sinner Pawn'], nicknames: [], displayName: 1 },
    ],
    UberHaxorNova: [
        { name: 'Siz Fulker', factions: ['HOA'], leader: true, nicknames: ['Zis', 'Ziz', 'uhnSuffer', 'mechanic', reg(/\bloans?\b/), reg(/\bsiz/)] },
        { name: '[Deputy] Barry Briddle', nicknames: [reg(/\bbriddl/)] },
        { name: 'Toh Biggles Fitzcharles', displayName: 0, nicknames: ['Yaes'] },
    ],
    uhhMort: [
        { name: 'Morty Shaw', factions: ['Independent'], assumeServer: 'whitelist' },
        { name: 'Morty Shaw', factions: ['Independent'], assumeServer: 'public' },
    ],
    uhLuvi: [
        { name: 'Treyvon Williams', factions: ['GSF'], nicknames: ['Trey'], assume: 'assumeOther' },
    ],
    UHN: [
        { name: 'Ekonious Chambers', factions: ['Locksmiths'], displayName: 0 },
    ],
    uhSnow: [
        { name: '[Trooper] Jackie Snow', factions: ['Police'] },
        { name: 'Mikey Mersion', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    Umadbrahlive: [
        { name: 'Sergio Lopez', factions: ['Marabunta'] },
        { name: 'Leonel Martinez', factions: ['Vagos'], nicknames: ['lion'], displayName: 2 },
        { name: 'Big E', factions: ['SSB'], nicknames: ['Big L'], displayName: 0 },
    ],
    unicornfrapp: [
        { name: 'Eloise Burton', factions: ['Police'], displayName: 0 },
    ],
    unmutedshow: [
        { name: 'Johnny Paps', factions: ['Manor'], nicknames: ['Shadow Member'], displayName: 1 },
    ],
    Vader: [
        { name: 'Eugene Zuckerberg', factions: ['Chang Gang'], nicknames: ['Old Man'] },
        { name: 'Nacho Block', displayName: 0 },
        { name: '[Deputy] Rob Banks' },
        { name: 'Tuong Ru Kim' },
    ],
    VaderLive: [
        { name: 'Eugene Zuckerberg', factions: ['Chang Gang'], nicknames: ['Old Man'], facebook: true },
        { name: 'Nacho Block', displayName: 0 },
        { name: '[Deputy] Rob Banks' },
        { name: 'Tuong Ru Kim' },
    ],
    VADIKUS007: [
        { name: 'Yuri Grozniy', displayName: 0 },
    ],
    Vaerinis: [
        { name: '[Deputy] Thomas Metzger' },
    ],
    VaguePWNage: [
        { name: 'Ramsay', factions: ['SSB'] },
    ],
    valkyrae: [
        { name: 'Ray Mond', factions: ['DoJ'], displayName: 0 },
    ],
    valkyrion___: [
        { name: '[Deputy] Lewis Collins' },
    ],
    ValorWasTaken: [
        { name: 'Esteban Julio-Cruz-Perez-Rodriguez', factions: ['Marabunta'] },
    ],
    VanillaMace: [
        { name: 'Vivienne Vegas', factions: ['Burger Shot'], displayName: 0 },
    ],
    vanillayoshee: [
        { name: 'Eliyanna Ali', factions: ['Collective', 'Pawn Addicts', 'Gruppe6'], displayName: 0 },
    ],
    vanyaa_3D: [
        { name: '[Development] Vanya', factions: ['Development'], nicknames: ['clothes', 'clothing'], assumeChar: true },
    ],
    VarakTV: [
        { name: 'Hassan Bashari', factions: ['Gruppe6'], displayName: 0 },
    ],
    varsts: [
        { name: 'Danny Cox', displayName: 0 },
    ],
    vawwn: [
        { name: 'Gavin Golf', factions: ['Pawn Addicts'], displayName: 0 },
        { name: 'Polo Wild', factions: ['Police'], displayName: 0 },
    ],
    Vedstar: [
        { name: 'Ved Jiggyjoglue' },
    ],
    vee_v: [
        { name: 'Antonio Chorizo', displayName: 0 },
    ],
    vei: [
        { name: 'Molly Poppins', factions: ['Casino'], displayName: 0 },
    ],
    Venomfly: [
        { name: 'Babe Calloway', displayName: 0 },
        { name: 'Carolina Reaper' },
    ],
    veriomonen_: [
        { name: 'Dimitri Azmanov', factions: ['SSB'], displayName: 0 },
    ],
    versa: [
        { name: 'Carlo Marciano', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
    ],
    vertex84: [
        { name: 'Nathan Wingrove', factions: ['DoJ', 'Order'], displayName: 0 },
    ],
    Vigors: [
        { name: 'Vingle Dan', factions: ['Besties'], nicknames: [], displayName: 1 },
        {
            name: 'Kayn "Yager" Larp',
            nicknames: ['Warlock', 'Fighter', 'Yager', 'Demonblood', 'Demon'],
            displayName: 0,
        },
    ],
    Vindichee: [
        { name: '[Deputy] Oliver Fury' },
    ],
    VinterPhoenix: [
        { name: 'Raymond Frost', factions: ['Vagos'], displayName: 0 },
    ],
    VioletCutie: [
        { name: 'Maisie Hart', displayName: 0 },
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
        { name: 'Omar Mardini', factions: ['Brick House'], displayName: 0 },
    ],
    Voladin17: [
        { name: '[Lawyer] Tidus Schwinghammer' },
        { name: 'Ron DeCloque' },
        { name: '? "Wolfbiter" ?' },
    ],
    vonderweisz: [
        { name: 'Lucian Weisz', nicknames: [], displayName: 1 },
    ],
    Vondill: [
        { name: 'Samantha Snake', nicknames: ['Sammy', 'Sammy Snake'], displayName: 4 },
        { name: 'Otis Campbell', displayName: 0 },
    ],
    vsperance: [
        { name: '[Officer] Rustin Cooper' },
    ],
    VTechas: [
        { name: 'Daryl Dixon', factions: ['HOA'], nicknames: ['DRL', 'GRL'] },
    ],
    w00ter: [
        { name: '[Deputy] Peter Rogers' },
    ],
    WackyTally: [
        { name: 'Leon Odowd', factions: ['BPM', 'Sweepers'], displayName: 0 },
    ],
    wakewilder: [
        { name: 'Jebediah "Beef" von Wunder', factions: ['DoJ', 'Gruppe6'], displayName: 0 },
    ],
    walnutcast: [
        { name: '[Deputy] Brick James', displayName: 1 },
        { name: 'The Shaved Man', factions: ['Burger Shot'], displayName: 0 },
    ],
    warpovturk: [
        { name: 'Appie Turk', factions: ['Independent'], displayName: 2, assumeServer: 'whitelist' },
        { name: 'Appie Turk', factions: ['Independent'], displayName: 2, assumeServer: 'public' },
        { name: 'Appie Turk', displayName: 2, assumeServer: 'international' },
    ],
    Warrick88: [
        { name: 'Zayn Hunter', nicknames: [], displayName: 1 },
    ],
    WaterGotHim: [
        { name: 'Alessio "AJ" Jilani' },
    ],
    WaveTF: [
        { name: 'Mumbles Fumbles', factions: ['Clowns'], displayName: 0 },
    ],
    Wayward: [
        { name: '[Judge] Wayne Ardson', assumeServer: 'whitelist' },
        { name: 'Angelo "Leo Nardo" Nardo', nicknames: ['Leo'] },
        { name: 'Jack "The Joker" Knaves', nicknames: ['The "Joker"'] },
        { name: '[Deputy] Michael Colt', assumeServer: 'public' },
        { name: 'Bowser' },
    ],
    WeCameAsBecca: [
        { name: 'Kennedy Adams', displayName: 0 },
    ],
    Wehtuns: [
        { name: '[Lawyer] Lawrence Splainer', displayName: 2 },
    ],
    weStern: [
        { name: 'Marcel ?' },
    ],
    wetbow: [
        { name: 'Party Hardy', factions: ['Clowns'], displayName: 0 },
    ],
    Whippy: [
        { name: 'Irwin Dundee', nicknames: [reg(/\b(?:dundee|irwin)|(?:dundee|irwin)\b/)], displayName: 2 },
        { name: '[Officer] Crocodile "Croc" Steve', nicknames: ['Cop', reg(/\bcroc|croc\b/)] },
        { name: 'James Tinklebottom' },
    ],
    whiskeymate: [
        { name: 'James Johnson', factions: ['Police'], displayName: 0 },
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
        { name: '"James Marco" St. Marco', factions: ['Burger Shot', 'Gruppe6'], nicknames: ['marko', 'marcoing', 'markoing'] },
        { name: "? \"Don's Mother\" ?", nicknames: ['Mama', 'Donna'] },
    ],
    wilsonyy: [
        { name: 'Odette Swan', factions: ['Police'], displayName: 0 },
    ],
    WithExtraSauce: [
        { name: '[Deputy] Budweiser Malarky', nicknames: ['Bud'], displayName: 2 },
        { name: '[Dr.] Jeffy Coldiron', factions: ['Medical'], displayName: 2 },
        { name: 'Owen Bradshaw', factions: ['Police'], displayName: 0 },
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
        { name: '[Deputy] Candice Defitt', nicknames: ['393'], displayName: 1 },
        { name: 'Scarlett Skye', displayName: 1 },
        { name: 'Bianca Walters' },
    ],
    wombax: [
        { name: 'Shane Moody', factions: ['Police'], displayName: 0 },
    ],
    Wootpiegames: [
        { name: 'Rick Szhae', displayName: 0 },
    ],
    workszy: [
        { name: 'William Pepe', factions: ['Police'], displayName: 0 },
        { name: 'Vert Wheeler', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    wraiyf: [
        { name: 'Matt Martin', factions: ['Police'], displayName: 0 },
    ],
    WTFGameNation: [
        { name: '[Dr.] Noah Drake', factions: ['Medical'] },
    ],
    wtfmoses: [
        { name: '[Officer] Derek McNulty' },
        { name: 'Smooth Williams' },
    ],
    WuPingNOTEggRoll: [
        { name: 'Wu "Egg Roll" Ping' },
    ],
    wvngie: [
        { name: 'Le Wang', factions: ['Vagos'], nicknames: [reg(/\bwang/)], displayName: 0 },
    ],
    xcrayg: [
        { name: 'Sauce Williams', nicknames: [], displayName: 1 },
    ],
    xD_Ghost_Recon_xD: [
        { name: 'Simon Riley', factions: ['Saints'], displayName: 0 },
    ],
    xd3licious_: [
        { name: 'Dameon Knight', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    XenVers: [
        { name: 'Xen Verse', displayName: 0 },
    ],
    xholty: [
        { name: 'Kenny Hopkins', factions: ['Manor'], nicknames: ['Kenneh'], displayName: 1 },
    ],
    Xiceman: [
        { name: '[Deputy] Mike Bayo', factions: ['Police'] },
        { name: 'Mike Wadum', factions: ['Hydra Gang'], nicknames: ['El Gringo'], displayName: 0 },
    ],
    Xiorx: [
        { name: 'Jimmy "Fiddlesticks" Brown' },
    ],
    XMOTHATRUCKAX: [
        { name: 'Ronald "Red" Juggler' },
    ],
    xn0rth: [
        { name: 'Albert Speedo', factions: ['BPM'], displayName: 0 },
    ],
    xNittyGritty: [
        { name: 'Donny ?' },
    ],
    xPytu: [
        { name: 'Mario Hernandez', factions: ['Chang Gang'], nicknames: ['Hernández', 'PandaHoe'], displayName: 0 },
    ],
    xQc: [
        {
            name: 'Jean "X" Paul',
            factions: ['Brick Bois', 'Brick House', 'Independent'],
            nicknames: ['Ghost Rider', 'Rider', 'Casino', 'News'],
            displayName: 0,
            assumeServer: 'whitelist',
            leader: true,
        },
        { name: 'Jean "X" Paul', factions: ['Brick Bois', 'Brick House', 'Independent'], nicknames: ['Ghost Rider', 'Rider'], displayName: 0, assumeServer: 'public' },
        { name: '[Deputy] Pierre "PP" Paul', factions: ['Police'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jean Pierre', displayName: 0 },
    ],
    xth0rek: [
        { name: 'Hank Over', factions: ['Police'], displayName: 0 },
        { name: 'San Thorinio', factions: ['Polish', 'Gruppe6'], displayName: 0 },
    ],
    XxAshleyxX: [
        { name: 'Sparkle Lee' },
        { name: 'Tiffany Valentine', displayName: 0 },
        { name: '[Dispatch] Shyrell Larson', nicknames: ['D-17'], displayName: 1 },
        { name: 'Naomi Kent' },
    ],
    yaboiSavageG: [
        { name: 'Salvaje "Savage" Mendoza', factions: ['Vagos'] },
    ],
    Yawger: [
        { name: '[Lawyer] Robert Locksley', factions: ['Chang Gang'], displayName: 2 },
    ],
    Yeahitsjodi: [
        { name: '[Dr.] Lennon McDermitt', factions: ['Medical'], displayName: 1 },
    ],
    YeetabixGaming: [
        { name: 'James Oxley', factions: ['News'], displayName: 0 },
    ],
    yickster: [
        { name: 'Alexandra Yang', nicknames: ['Alex'], displayName: 0 },
    ],
    YoinksOG: [
        { name: '[Development] YoinksOG', factions: ['Development'], nicknames: ['3D', 'Clothes', 'Clothing'] },
        { name: 'Doug Canada' },
    ],
    YoMarty: [
        { name: 'Lil Marty', factions: ['SSB'], displayName: 0, assumeServer: 'public' },
    ],
    yooApollo: [
        { name: 'Martin Julio-Perez-Cruz-Rodriguez', factions: ['Marabunta'] },
    ],
    youney: [
        { name: 'Hazel Grey', factions: ['Sinner Pawn', 'Clowns', 'Gruppe6'], displayName: 0 },
    ],
    YourFriendKermit: [
        { name: 'Leslie Jenkins', factions: ['Independent'], displayName: 0 },
    ],
    yungxaquafina: [
        { name: 'Antonio Carter Jr', factions: ['SSB'], nicknames: ['AJ'], displayName: 4 },
    ],
    yuukidav: [
        { name: 'Oakley Stallion', displayName: 1 },
        { name: '[Officer] Lukas Lavender', displayName: 2 },
    ],
    zackattackatk: [
        { name: 'Xalvedor Lorenhart', factions: ['Saints'], nicknames: ['Xav'], displayName: 1 },
    ],
    Zaitohro: [
        { name: '[Deputy] Cameran Shaw', nicknames: ['Cam'], displayName: 2 },
        { name: 'Damien Tinkerman', factions: ['ADMC'], displayName: 0 },
        { name: 'Oswald Tinkerman', factions: ['Lost MC'], displayName: 1 },
    ],
    zandr400: [
        { name: 'Vance Vixen', nicknames: [], displayName: 1 },
    ],
    ZapremeTV: [
        { name: 'Kai Alexander', factions: ['SSB'], displayName: 1 },
        { name: 'Jacob Pibb', factions: ['Vagos'], displayName: 0 },
    ],
    Zaquelle: [
        { name: '[Deputy] Mackenzie Hayes', assume: 'assumeNp' },
        { name: 'Bria Rodgers', factions: ['Police'], displayName: 0 },
    ],
    zaxx386: [
        { name: 'Moose Knuckles', factions: ['Clowns'], displayName: 0 },
    ],
    ZayTyree: [
        { name: 'Renato "Bubbles" Ortiz', factions: ['Brick House', 'The 404', 'Gruppe6'], nicknames: [], displayName: 1 },
    ],
    zeco1: [
        { name: 'Kole Selaw', displayName: 0 },
    ],
    Zee_RP: [
        { name: 'Zee Carbone', displayName: 1 },
    ],
    zerhxy: [
        { name: 'Prince Tate', factions: ['Marabunta'], nicknames: ['Sicario'], displayName: 1 },
    ],
    Zerkaa: [
        { name: 'Tommy Tate', nicknames: ['Tommy T'], displayName: 3 },
        { name: 'Josh Zerker', displayName: 0 },
    ],
    Zetark: [
        { name: 'Luciano DiCenzo', factions: ['HK Pawn', 'Old Country'], nicknames: [], displayName: 1 },
    ],
    Zettafrag: [
        { name: 'Kimberly Daniels', displayName: 0 },
    ],
    ZeusLair: [
        { name: 'Teller West', factions: ['HK Pawn'], displayName: 0 },
    ],
    zhifven: [
        { name: 'Kai Pond', displayName: 0 },
    ],
    Zidsy: [
        { name: 'Zane Jackson', nicknames: ['Rat'], displayName: 3 },
    ],
    Ziggy: [
        { name: '[Ranger] Ziggy Buggs', factions: ['Police'], displayName: 1, assumeChar: true },
        { name: 'Norman Bones', displayName: 0 },
    ],
    Zimboobwe: [
        { name: '[Deputy] Jimbo Sutton', displayName: 2, assumeServer: 'whitelist' },
        { name: '[Deputy] Jimbo Sutton', displayName: 1, assumeServer: 'public' },
    ],
    zirnrp: [
        { name: 'Malcador Sigilite' },
        { name: 'Solomon Seerson' },
    ],
    Zixtah: [
        { name: 'DJ Cooper', factions: ['Manor'], nicknames: ['DJ'], displayName: 1 },
    ],
    Zoil: [
        { name: 'Skunkz Wallace' },
    ],
    Zoomaa: [
        { name: 'Tomassi Paparatto', displayName: 1, assume: 'assumeOther' },
    ],
    Zotbot: [
        { name: '[Physiotherapist] Leon Marks', factions: ['Medical'] },
    ],
    ZPapz: [
        { name: '[Deputy] Vincent Ventura' },
        { name: 'Liam Law' },
    ],
    zSillverx: [
        { name: '[Deputy] Shawn Richards' },
    ],
    zuck: [
        { name: 'Zuck Cuc', factions: ['Brick House', 'The 404', 'Gruppe6', 'Besties'] },
    ],
    Zumapwn: [
        { name: 'James Laughton', nicknames: ['Fall Guy'], factions: ['Independent'], displayName: 3, assumeServer: 'public' },
    ],
    zwierzaaak: [
        { name: 'Jadwiga Adamczyk', factions: ['DoC', 'Polish', 'Gruppe6'], displayName: 0 },
    ],
};
