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
        { name: 'Aubrey "4HEAD" Webster', factions: ['Pawn Addicts', 'Besties'], leader: true },
    ],
    '4hBunger': [
        { name: 'Fred ?', displayName: 1 },
    ],
    '52chains': [
        { name: '[Officer] Carmine Costello', factions: ['Pawn Addicts', 'Gruppe6'], nicknames: ['Mouse'], displayName: 1 },
        { name: 'Fidel Guevara', nicknames: ['Don', 'Cabron'] },
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
        { name: 'Shazza Wazza', factions: ['Rooster'], nicknames: ['Shazzam'] },
    ],
    aaron_rp: [
        { name: 'Aaron Alexander', factions: ['GSF'], nicknames: ['Double A', reg(/double.?a/)], displayName: 3 },
    ],
    AaronOnAir: [
        { name: '[Deputy] Dan Faily', nicknames: ['485'], facebook: true },
        { name: 'Sal T. Block', factions: ['ASRR'], displayName: 0 },
    ],
    abbay: [
        { name: 'Olivia Harvey', factions: ['Rooster'] },
    ],
    abbbz: [
        { name: 'Sanjay Patel' },
    ],
    AbbottJake: [
        { name: 'Luke Atar', factions: ['Manor', 'MMC'], nicknames: ['Morning Crew Leader'], displayName: 1 },
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
        { name: 'Abdul AlRahim', factions: ['Gruppe6', 'Police'], nicknames: ['Yellow Flash'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Omar Stryker', displayName: 1 },
        { name: '[Judge] Ali Habibi', nicknames: ['Al'] },
        { name: '[Officer] Basha Habibi', assumeServer: 'public' },
        { name: 'Mustafa Habibi' },
        { name: 'Fahad AlArabi' },
    ],
    Abou_: [
        { name: 'Modi Janta', factions: ['NBC'] },
    ],
    abrvxas: [
        { name: 'Alexei Pavlovich', factions: ['Royal Mafia'], nicknames: ['Chicken Head'], displayName: 3 },
    ],
    Acaibear: [
        { name: '[Deputy] Emily Reinhart' },
        { name: 'Jolene Mushkin', nicknames: ['Little Red'] },
    ],
    AcezProduction: [
        { name: 'Achez Perez', factions: ['Habibis'], nicknames: ['Ace'], displayName: 2 },
    ],
    adamsmiley96: [
        { name: "Sebastian Von Di'Quad", factions: ['Wastelanders'], displayName: 0 },
    ],
    adeptthebest: [
        { name: 'Mari Posa', factions: ['Chang Gang', 'Hydra Gang', 'Chaos'], nicknames: ['Wari', 'Lari'], displayName: 1, assumeServer: 'whitelist' },
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
        { name: '[Trooper] Dwayne Carter IV', nicknames: [reg(/good [a*][s*]+ day/)], displayName: 2 },
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
        { name: '? ?', factions: ['LARPers', 'Cleanbois'] },
    ],
    aintitadam: [
        { name: 'Scruffy Doodle' },
    ],
    Airborne: [
        { name: 'Dennis LaBarre' },
        { name: '[Officer] Blaine Miller', nicknames: ['Cow Killer'] },
        { name: 'Unity', nicknames: ['Cat'] },
    ],
    AJumpin: [
        { name: 'Aziz Shaw', factions: ['MMC'] },
    ],
    akaMONKEY: [
        { name: 'Arturo Ortiz', factions: ['Vagos'], nicknames: [reg(/\bar(?:tu|2)/), reg(/\barchu+r/)] },
        { name: 'CamRon "Peanut" Giles', factions: ['SSB'] },
        { name: 'Timoteo "TT" Bushnell', nicknames: ['Rasta'] },
    ],
    aKartt: [
        { name: 'Harold "H-Dawg" Bishop', factions: ['Habibis'], nicknames: ["H-Dawg", "Hdawg"], displayName: 0 },
    ],
    aleks: [
        { name: 'Vasily "V" Sazkaljovich', factions: ['CBPD', 'Rooster'] },
        { name: '[Officer] Bob Smith', nicknames: ['Bobby', 'Chief'], displayName: 1 },
        { name: 'Alex Marshall', factions: ['Frat'], displayName: 0 },
        { name: '[FIB Agent] Heath Mercer' },
    ],
    Alex_3MM: [
        { name: 'Leo Sparks', factions: ['Police'], displayName: 0 },
    ],
    alexhasg2g: [
        { name: 'Liz Anya', displayName: 0 },
    ],
    alexten0909: [
        { name: 'Alexander Campbell', factions: ['Angels'], nicknames: ['Alex'], displayName: 3, assumeServer: 'whitelist' },
        { name: '[Officer] Jeff Boiardi' },
        { name: '[Officer] Alex Campbell', assumeServer: 'public' },
    ],
    Alisha: [
        { name: 'Alisha Wuornos' },
    ],
    AllHailGoon: [
        { name: 'Father Dinker', factions: ['ASRR'], nicknames: ['god', 'block'], displayName: 0 },
    ],
    allium: [
        { name: 'Alice Liddell', factions: ['Police'], displayName: 0 },
    ],
    Alonelyhawk: [
        { name: '[Deputy] Allison Thomas' },
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
    ambientsurprise: [
        { name: 'Terry LaBuff', factions: ['BSK'], displayName: 0 },
    ],
    Ambush: [
        { name: 'Freya Almerion', factions: ['SOB'], displayName: 1 },
    ],
    americansneakers: [
        { name: 'Cassidy Collins', factions: ['Order'], displayName: 0 },
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
    angelina: [
        { name: '[Deputy] Brandi Lynn', factions: ['Police'], displayName: 1 },
        { name: 'Tatianna Donatacci', factions: ['Brick House'], displayName: 0 },
    ],
    AngelKnivez: [
        { name: 'Giavanna "GiGi" Costello', factions: ['DoC', 'Casino', 'Gruppe6', 'Manor'], nicknames: ['Gigi'], displayName: 1 },
    ],
    Angrysquirlz: [
        { name: 'Lizard Block', factions: ['ASRR'] },
    ],
    AnimatedJF: [
        { name: 'Cameron Dupres' },
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
            factions: ['Brick Bois', 'Brick House', 'New Babylon', 'Cleanbois', 'Clean Cartel', 'Rooster'],
            nicknames: ['Tonish', 'Racing'],
            assumeServer: 'whitelist',
        },
        { name: '[Deputy] Anthony Copleone', nicknames: ['reporting for duty'] },
        { name: 'Tonish Corleone', assumeServer: 'public' },
    ],
    Anv1Ltv: [
        { name: 'Brooklyn "BK" Davis', factions: ['GSF'] },
    ],
    Apitoxin11: [
        { name: 'Trigger Freebird', factions: ['Harmony'] },
    ],
    APPLESHAMPOO: [
        { name: '[Deputy] Nancy Ree', displayName: 1, assumeServer: 'whitelist' },
        { name: '[EMS] Gioconda "Gio" Coppola', factions: ['Medical'], nicknames: ['T-17'] },
        { name: 'Apple Schampu', factions: ['Self Insert', 'One Life'], displayName: 0 },
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
        { name: 'Timo Korhonen', factions: ['Pawn Addicts', 'Gruppe6'], displayName: 0 },
    ],
    ArsenaI: [
        { name: 'James Arsenal', factions: ['NBC'], displayName: 0 },
    ],
    ArtByBaha: [
        { name: 'Cuddles Fish', factions: ['New Babylon'], nicknames: [], displayName: 1 },
    ],
    AscensionLive: [
        { name: 'James Malding', factions: ['Street Team'], displayName: 0 },
    ],
    ash: [
        { name: 'Ash Ketchup', factions: ['Burger Shot', 'Gruppe6', 'Hydra Gang'], displayName: 1, assumeChar: true },
        { name: 'Jenna Mustard', factions: ['Police'], displayName: 0 },
    ],
    Ashaweebaby78: [
        { name: 'Frankiie Fletcher', factions: ['BSK'], displayName: 0 },
    ],
    Ashi: [
        { name: 'Fiona Stewart', nicknames: ['Fi-ho-na', 'Fifi'], factions: ['LARPers', 'Cleanbois', 'Rooster'] },
        { name: '[Officer] Annie May', displayName: 2 },
    ],
    ashlynn: [
        { name: 'Cassie Cupcakes', factions: ['Angels'] },
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
    Audili: [
        { name: 'Mordell Caldwell', factions: ['SSB'], nicknames: ['MD'], displayName: 1 },
    ],
    AuriEllis: [
        { name: 'Ursula Leichenberg', factions: ['Royal Mafia', 'News'], displayName: 1 },
        { name: 'Gracie ?' },
        { name: 'Drusilla Grant', factions: ['DoJ', 'Brick House', 'Gruppe6'], displayName: 0 },
    ],
    aurvinR: [
        { name: '[Deputy] John Doe' },
    ],
    Aus24: [
        { name: '[Officer] Jack Davenport' },
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
        { name: '[Officer] May Maple' },
        { name: '[Ranger] May Maple', assumeServer: 'public' },
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
        { name: 'Gene Auber', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    Baabeology: [
        { name: 'Lola White', factions: ['ADMC'], displayName: 0, assumeServer: 'public' },
    ],
    Baddy: [
        { name: 'Liya Farah', factions: ['New Babylon'], nicknames: [], displayName: 1 },
    ],
    badgerClaws_: [
        { name: 'Cassidy Clearwater', displayName: 0 },
    ],
    Baffty: [
        { name: 'Matthew Colby', factions: ['Prison', 'Faceless'], displayName: 0 },
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
        { name: 'Claire Seducer', factions: ['Angels', 'Tuner Shop'], assumeServer: 'whitelist' },
        { name: '[Officer] Tyme Reducer', assumeServer: 'whitelist' },
        { name: '[Officer] Claire Seducer', displayName: 1, assumeServer: 'public' },
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
    bananahead_og: [
        { name: 'Nana Banana', factions: ['DoJ'], displayName: 0 },
    ],
    Bananalover115: [
        { name: 'Mamaita "Mama" Jehmimi', factions: ['Britney Gang'] },
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
    ],
    beard: [
        { name: 'Wade Wilson', factions: ['Raiders', 'Faceless'] },
    ],
    BeardedGuysGaming: [
        { name: 'Jose Pincha' },
    ],
    Beast_: [
        { name: '[Deputy] Ruger Daniels' },
    ],
    Beerman155: [
        { name: 'Abner Vaca', factions: ['Stable'] },
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
        { name: 'Billy "Bloodbath" Senora', factions: ['ASRR'], nicknames: ['Bloodbath'], assumeServer: 'whitelist' },
    ],
    biboskills: [
        { name: 'Louis Blanc', factions: ['Hades'], nicknames: [], displayName: 1 },
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
        { name: 'Zaceed Skengerton', factions: ['Lang Gang', 'Rooster'], nicknames: [reg(/\b[zs]a[skc]+[ei]*y?d/)], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Zacood Skengerson', displayName: 1, assumeServer: 'public' },
    ],
    BikeMan: [
        { name: 'Chet Summerset', assume: 'assumeNpNoOther' },
    ],
    binoversion: [
        { name: '? "O Dogg" ?', factions: ['SSB'] },
    ],
    Biotoxz_: [
        { name: 'Lars "Bjorn" Haverford', factions: ['LARPers', 'Cleanbois', 'Clean Cartel', 'Rooster'], nicknames: ['Barbarian'], assumeServer: 'whitelist' },
        { name: 'Lars "Bjorn" Haverford', factions: ['LARPers'], nicknames: ['Barbarian'], assumeServer: 'public' },
    ],
    BJPofficial: [
        { name: '[Lawyer] Buford J. Preston' },
    ],
    blau: [
        { name: 'Mickey Sinclaire', factions: ['BPM', 'DoJ', 'Cleanbois', 'Clean Cartel'], nicknames: ['Michael', 'Downbad', 'Downrat'], assumeServer: 'whitelist' },
        { name: '[Deputy] Klay Kona', displayName: 2 },
        { name: 'Michael S.', factions: ['Independent'], assumeServer: 'public' },
    ],
    bldrs: [
        { name: 'Kaleb "Kleb" Rush', factions: ['HOA', 'Frat'] },
        { name: '[Officer] Ryan Wright' },
    ],
    bledorable: [
        { name: 'Billy Thorne', factions: ['Hades'], nicknames: [], displayName: 0 },
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
        { name: 'Dub Blunt', factions: ['Tuner Shop'], displayName: 0 },
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
        { name: 'Zulu Thendani', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    boxbox: [
        { name: 'Bo Xbox', factions: ['Rooster'] },
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
        { name: '[Lawyer] Adam Nielsen', factions: ['Rooster'], displayName: 1 },
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
        { name: 'Tori Corleone', factions: ['Britney Gang', 'Rooster'], nicknames: ['Bologna'] },
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
        { name: 'Abby Brooks', factions: ['Slim', 'Angels'], displayName: 0 },
    ],
    broxh_: [
        { name: 'Broxh Kava', displayName: 1 },
    ],
    bubblesrp: [
        { name: 'Peter Ross', factions: ['SOB'], displayName: 0 },
    ],
    BucketSt: [
        { name: 'Gheto Kaiba', factions: ['ADMC'], displayName: 2 },
    ],
    buddha: [
        {
            name: 'Lang Buddha',
            factions: ['Brick Bois', 'Brick House', 'Piss Boiz', 'Casino', 'New Babylon', 'Cleanbois', 'Lang Gang', 'Clean Cartel', 'Rooster'],
            leader: true,
            nicknames: ['Circle Andy', 'Timelord'],
            assumeChar: true,
            assumeServer: 'whitelist',
        },
        { name: '[Trooper] LeBron James', nicknames: ['623'], displayName: 1 },
        { name: '[Ranger] Lang Buddha', displayName: 1, assumeServer: 'public' },
        { name: 'Esteban Julio-Ricardo-Montoya-De-La-Rosa Ramirez' },
        { name: '[Deputy] Kevin Kona' },
    ],
    bunbunss_: [
        { name: 'Britney Sears', factions: ['Police'], displayName: 0 },
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
        { name: '[Deputy] Brocky Potage', displayName: 2 },
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
        { name: 'Capped Tarranova', factions: ['Street Team', 'Chang Gang'], nicknames: ['Pigeon', 'Terranova', 'Nova'], displayName: 3 },
        { name: 'Robert De Souza', factions: ['Locksmiths'], displayName: 0 },
        { name: 'Anthony Breakwood', factions: ['NEST'], displayName: 0 },
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
    carbie: [
        { name: 'Zephyr Kane', factions: ['BPM', 'Order'], displayName: 0 },
    ],
    Carbonoid: [
        { name: 'Han Machiavelli', factions: ['BSK'], displayName: 0 },
    ],
    carlos: [
        { name: 'Naomi Scott', factions: ['Burger Shot'], displayName: 0 },
    ],
    Carmen: [
        { name: 'Carmella Corset', factions: ['Casino', 'Rooster'] },
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
        { name: 'Baesu Heartless', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    CatherineReel: [
        { name: 'Nancy Oksana', factions: ['Sinner Pawn', 'DoC'], displayName: 0 },
    ],
    CathFawr: [
        { name: '[Officer] Lydia Vale' },
        { name: 'Summer Mersion', factions: ['GSF', 'Mersions'], displayName: 0 },
        { name: 'Natya Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Catrin Fawr', factions: ['Self Insert', 'One Life'], displayName: 0 },
        { name: "[Lawyer] Shannon O'Banion", displayName: 0 },
    ],
    Cathie: [
        { name: '[Deputy] Anita May', displayName: 1 },
        { name: 'Ninacska Mihkala', factions: ['Russians'], nicknames: ['Nina'], displayName: 3 },
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
        { name: '[Deputy] Marco Holliday', nicknames: ['683', 'Holiday'] },
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
    charli: [
        { name: 'Dee Mented', factions: ['Burger Shot'], displayName: 0 },
    ],
    charlieblossom: [
        { name: 'Georgina "Windsong" Williams' },
    ],
    charlieteevee: [
        { name: '[Officer] Charlie Cox', assumeServer: 'public' },
    ],
    Chaseman7GG: [
        { name: 'Miguel Guerrero', factions: ['Vagos'] },
    ],
    Chatterbox: [
        { name: 'Jagger "Chatterbox" Gerardy' },
        { name: 'Chatterbox', factions: ['Burger Shot', 'Clowns'], displayName: 0 },
    ],
    ChavRP: [
        { name: 'Thai Chav', factions: ['Street Team'], displayName: 2 },
    ],
    Cheever7: [
        { name: 'River Cheever', nicknames: ['River'], factions: ['ASRR'], assumeServer: 'whitelist' },
        { name: 'Coral Hale', factions: ['Police'], displayName: 0 },
        { name: 'Marina Hart', factions: ['HK Pawn', 'Gruppe6'], displayName: 0 },
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
        { name: 'Jared Creed', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    chidori_senpai: [
        { name: 'Sabrina Tremblay', factions: ['Police'], displayName: 0 },
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
        { name: 'Zee Davis', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    ClassyPax: [
        { name: 'Madam Ming', displayName: 0 },
        { name: '[Dr.] Ethan Maw', factions: ['Medical'], displayName: 2 },
    ],
    claytonerp: [
        { name: 'Jebediah Jenkins', factions: ['Police'], displayName: 0 },
    ],
    cleaneu: [
        { name: 'Michael Robinson', displayName: 0 },
        { name: 'Pete Bourke', factions: ['Prison'], displayName: 0 },
    ],
    cleanstrikes: [
        { name: 'Alex Fibbler', factions: ['BSK'], displayName: 0 },
    ],
    Client: [
        { name: 'Daquan "Peanut" Dumas', factions: ['NBC'] },
        { name: '[Officer] Alejandro Picadillo', nicknames: ['World Wide', 'Worldwide'] },
    ],
    cloakrp: [
        { name: 'Gilly Griffin', factions: ['Police'], displayName: 0 },
        { name: 'Cleo Cloak', factions: ['DoJ'], displayName: 0 },
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
        { name: 'Nils Falk', factions: ['MMC'] },
    ],
    CraigySmith: [
        { name: 'Frank Junior-Smith', factions: ['Lang Gang'], nicknames: ['Frank Jr Smith', 'Franky', 'Frankie', 'Scottish'], displayName: 4 },
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
        { name: 'Four "4T" Tee', factions: ['ASRR'], displayName: 0 },
        { name: 'Swan DeLeur', factions: ['Brick House', 'Sweepers', 'Casino', 'Gruppe6'], displayName: 0 },
        { name: 'Amie Rush' },
    ],
    CurtisRyan: [
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt', 'Citrus'], factions: ['Chang Gang', 'Chaos'], assumeServer: 'whitelist' },
        { name: 'Curtis Swoleroid', factions: ['Gangton'], nicknames: ['2.0'], leader: true },
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt', 'Citrus'], factions: ['Independent'], assumeServer: 'public' },
        { name: '[Officer] Stephen McClane' },
        { name: 'Cornelius "Cornbread" Scott', factions: ['GSF'] },
    ],
    curvyelephant: [
        { name: '[Deputy] Matt Rhodes', factions: ['Police'], nicknames: ['petty'] },
        { name: 'Brad ?', factions: ['Frat'], nicknames: ['B-Rad'], displayName: 3 },
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
        { name: 'Cydney Lune', factions: ['Lang Gang'], nicknames: ['Cyd'], displayName: 1 },
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
        { name: 'Demetrius "Draco" Jones', factions: ['Seaside'], nicknames: ['DJ'] },
    ],
    d00dskoot: [
        { name: 'Axel Crow', factions: ['Police'], displayName: 0 },
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
        { name: 'Oscar Perez', factions: ['SOB'], nicknames: ['OP'], displayName: 0 },
    ],
    Dar_: [
        { name: 'Deco Murphy', factions: ['Ravens'], displayName: 0 },
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
        { name: 'Nino Chavez', factions: ['Sinner Pawn', 'Faceless', 'Cleanbois', 'Pegasus', 'Rooster'] },
        { name: 'Ryan Kindle', factions: ['HOA'] },
        { name: 'Reema', nicknames: ['The "Whorelord"'] },
    ],
    DavidB_NP: [
        { name: 'Vladimir "Vlad" Ivanov', factions: ['Russians'] },
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
        { name: '[Officer] Cassius Kennedy', nicknames: ['Cash'] },
    ],
    dew_ski: [
        { name: 'Alem Barghouthi', factions: ['NBC'], displayName: 0 },
    ],
    DexGod: [
        { name: 'JJ Bradley', factions: ['BCG'], nicknames: ['Dex'], displayName: 0 },
    ],
    diables: [
        { name: 'Adam Adamczyk', factions: ['Polish'], displayName: 0 },
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
        { name: 'Oki Doki', factions: ['CBPD', 'Burger Shot'], displayName: 0 },
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
        { name: 'Jackson Wilson', factions: ['Harmony'], nicknames: ['Blacksteel'], displayName: 0 },
    ],
    DummyWack: [
        { name: 'Nathan Peters', factions: ['Dons'], nicknames: ['Nate', 'Turtleneck'] },
    ],
    Dunrunnin12: [
        { name: 'Thomas Dwayne', factions: ['Stable'], nicknames: ['The Narrator'], displayName: 0 },
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
        { name: 'Dragon Rush', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    dwjft: [
        { name: 'Dean Watson', factions: ['Limelight', 'Cleanbois', 'Development'], nicknames: ['El Deano', 'El Deano (Dean)', 'Dev stuff'], displayName: 1 },
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
        { name: 'Bek Irving', factions: ['SOB'] },
    ],
    EagleAye: [
        { name: 'Eve Summers', factions: ['DoJ', 'Lang Gang', 'LARPers', 'Rooster'] },
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
        { name: 'Leon Edwards', factions: ['New Babylon'], nicknames: [], displayName: 1 },
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
        { name: '[Officer] Douglas Fir', displayName: 1 },
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
        { name: '[Deputy] John Dorian' },
    ],
    EmmyWithLove: [
        { name: 'Peaches Hayabusa', factions: ['NBC'] },
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
        { name: '[Lawyer] Anna Swallows', factions: ['ASRR'], nicknames: ['Law'], displayName: 1, assumeChar: true },
    ],
    ewroon: [
        { name: 'Erwin Knuckles', factions: ['BPM'], displayName: 0 },
    ],
    ExNinja_: [
        { name: '[Deputy] Paul String', assumeServer: 'public' },
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
        { name: 'Ilya Karishnikov', nicknames: [], displayName: 1 },
    ],
    Fairlight_Excalibur: [
        { name: 'Raja Bahadur', factions: ['QuickFix'], leader: true },
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
        { name: 'Fan "Fanny" Fan', factions: ['Pawn Addicts', 'Besties'] },
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
        { name: 'Felix Volk', factions: ['Tuner Shop'] },
    ],
    FerretRP: [
        { name: 'Alberto Weaselton', factions: ['Lost MC'], nicknames: ['Al', reg(/\balb/)] },
    ],
    Ferst711: [
        { name: 'Tom Ryan', factions: ['Wastelanders'], displayName: 0 },
        { name: '[Lawyer] Ferst Temple' },
    ],
    Fiendota: [
        { name: '[Officer] Booga "Booba" Ooga', nicknames: ['651'], displayName: 1 },
        { name: 'Jonathan "Magnum" Humes', nicknames: [reg(/\bP\.?\s*I\b/)] },
        { name: 'Boobingle Dan', factions: ['Dans'] },
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
        { name: 'Rhode Block', factions: ['ASRR'], displayName: 0 },
    ],
    FiveMArena: [
        { name: 'FiveM "Arena Tournament" Arena', factions: ['Watch Party'], displayName: 2 },
    ],
    flakkoflakko: [
        { name: 'Romeo "Z" Zaharias Cruz', factions: ['SOB'] },
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
        { name: 'Sven Snusberg', factions: ['Cleanbois'] },
        { name: 'Mason Foorhees' },
    ],
    FortyOne: [
        { name: 'Lucas Ortiz', factions: ['Tuner Shop'] },
        { name: '[Deputy] John Archer' },
        { name: 'Jose Martin Perez', nicknames: ['JMP'] },
        { name: 'Don Russo', displayName: 0 },
        { name: 'Jacob "Funny Man" Storm' },
        { name: 'Arious "Breezy" Campbell' },
    ],
    FourMilli: [
        { name: 'Brad Bett', factions: ['NBC'] },
        { name: '[Deputy] Preston Hale' },
    ],
    fragss: [
        { name: 'Wade Bradford', factions: ['Gruppe6', 'Police'], displayName: 0 },
    ],
    FragZone: [
        { name: 'Derek Bogart', factions: ['Mayhem MC'], displayName: 0 },
    ],
    frank_ladd: [
        { name: 'Frank Scaletta', factions: ['Manor', 'MMC'], nicknames: ['Morning Crew 2IC'], displayName: 1 },
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
        { name: 'Kratos Of Sparta', factions: ['Rooster'], nicknames: ['God of War', 'God'] },
    ],
    fuslie: [
        { name: 'April Fooze', factions: ['Chang Gang'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Connie Clark', nicknames: ['cop'], displayName: 2 },
        { name: '[Officer] Connie Clark', nicknames: ['cop'], displayName: 2, assumeServer: 'public' },
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
        { name: '[Deputy] Peter Johnson' },
    ],
    Garek: [
        { name: 'Burt "Gloryon" Beans', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Cleric'] },
        { name: 'Garek', factions: ['Self Insert'], displayName: 1 },
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
        { name: 'Serena Riven', factions: ['Rooster'] },
    ],
    GeneralEmu: [
        { name: '[Commissioner] Lance Malton' },
    ],
    ggqf: [
        { name: 'Stanly "Stag" Lessfield', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Stagdancer', 'Gea', 'Paladin'] },
        { name: 'Garth Gregory Quincy Fafnir', nicknames: ['vlog'], displayName: 1 },
        { name: 'Daniel Hopper', displayName: 0 },
        { name: '[Officer] Bennett Calhoun' },
    ],
    ghost_medic: [
        { name: 'Luke Riley', factions: ['Saints'], displayName: 0 },
    ],
    ghotties: [
        { name: 'Dixie Dempsey', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    gibbs_gg: [
        { name: 'Walter Franks', factions: ['Mayhem MC'], displayName: 0 },
    ],
    gigiactually: [
        { name: ' Blondie Banks', factions: ['Manor'], nicknames: ['Treasurer'], displayName: 1 },
    ],
    Gilthflo: [
        { name: 'Percy Perkins', displayName: 0 },
    ],
    gingersnap___: [
        { name: 'Sophie Sanders', displayName: 0 },
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
        { name: 'Max Moody', factions: ['Wastelanders'], displayName: 0 },
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
        { name: 'Mick Jhonson', factions: ['Stable'], displayName: 1 },
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
        { name: 'Eddie Marshall', factions: ['Tuner Shop'] },
        { name: '[Deputy] Jim Underwood', nicknames: ['337', reg(/\w+wood\b/)] },
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
        { name: 'Tomathy Steampipe' },
    ],
    gzx63: [
        { name: 'Alex Tankian', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
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
        { name: '[Chief of Police] M Hans', assumeServer: 'international' },
    ],
    Harbinger2183: [
        { name: '[Deputy] Ethan Maxwell', nicknames: ['505'], displayName: 2 },
    ],
    Harmless: [
        { name: 'Maynard "Idiot" Schmidt', factions: ['Pawn Addicts', 'Burger Shot', 'Besties', 'MMC'] },
        { name: 'Alvis Pulley', factions: ['Police'], displayName: 0 },
    ],
    HARMSwahy: [
        { name: 'Blaine Burke', factions: ['Angels'] },
        { name: '[Officer] Wilson Burke' },
    ],
    Harry: [
        { name: 'Harry Brown', factions: ['Piss Boiz', 'Casino', 'New Babylon', 'Cleanbois', 'Lang Gang', 'Limelight', 'Pegasus', 'Rooster'] },
        { name: '[Deputy] Kevin Little', nicknames: ['Lil Kev', 'Kev'], displayName: 2 },
    ],
    HasanAbi: [
        { name: 'Humberto Antonio Donato Pecorino', factions: ['Cleanbois', 'Rooster'], nicknames: ['Don', 'Donnie', reg(/\bOva[h']? here\b/)], displayName: 5 },
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
        { name: 'Idris Kingsley', factions: ['Police'], displayName: 0 },
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
        { name: 'Madi Badi', factions: ['SOS'], displayName: 0 },
    ],
    HiredGunRP: [
        { name: '[Deputy] Colt Shepherd' },
    ],
    Hirona: [
        { name: '[Trooper] Olivia Copper' },
        { name: 'Emily Maw', factions: ['Harmony'] },
        { name: 'Jenny Hawk', displayName: 0 },
        { name: 'Onya Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Debbie Hopper', displayName: 0 },
        { name: 'Kristen Rules', factions: ['Self Insert'], displayName: 0 },
        { name: 'Griselda "Zelda" Harth', factions: ['HOA'] },
        { name: 'Olga Sazkaljovich', factions: ['Pegasus'], nicknames: ['Olgaa', 'Olgaaa', 'Olgaaaa'] },
    ],
    hobbittrash: [
        { name: '[Deputy] Tracy Martell', nicknames: ['Cop', 'Captain', reg(/\b\w+tell/)] },
        { name: '[Judge] Katya Zamalodchikova', displayName: 1 },
        { name: 'Jane Obama', nicknames: ['jesus', 'christ'], displayName: 0 },
        { name: 'Aja Monet', displayName: 0 },
        { name: 'Jane Souls', displayName: 0 },
        { name: 'Rounda Block', factions: ['ASRR'], displayName: 0 },
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
        { name: 'Chip Wheeler', factions: ['ADMC', 'Tuner Shop'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Rocky Balboner', displayName: 0, assumeServer: 'public' },
    ],
    Hotted89: [
        { name: '[Deputy] Matthew Espinoz', nicknames: ['Airspinoz', 'Air 1 Andy'] },
        { name: 'Joaquin "JJ" Jimenes', factions: ['KC', 'Faceless'] },
        { name: 'Allen Widemann', factions: ['Chang Gang', 'Tuner Shop'] },
    ],
    HPD007: [
        { name: 'Joe Flatley', factions: ['BSK'], nicknames: ['Fat Joe'], displayName: 3 },
    ],
    huddy_nz: [
        { name: 'Ash Huddy Hudson', factions: ['Lunatix'] },
    ],
    HulzyRP: [
        { name: 'Joseph "Big Joe" Gambini', nicknames: [], displayName: 1 },
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
        { name: '[Deputy] Jaryd Peak' },
        { name: 'Drew "Dead Eye Drew"', nicknames: ['DeadEye'] },
        { name: 'Hutch Hendrickson' },
    ],
    HydraPlz: [
        { name: 'Gandalf "Stankyleg" Butters', factions: ['ASRR'] },
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
        { name: 'Reginald Watson', factions: ['Royal Mafia'], nicknames: ['Sir'], displayName: 0 },
    ],
    iballzach: [
        { name: '[EMS] Zachary Kellogg', factions: ['Medical'] },
    ],
    IbbyRed: [
        { name: 'Jose "Fat Joe" Santini', factions: ['Vagos'] },
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
        { name: 'John Mancini', factions: ['NBC'], displayName: 0 },
    ],
    IJuanAWin: [
        { name: 'Machete Cortez', factions: ['Marabunta'] },
    ],
    ikitty: [
        { name: 'Kitty Dream', factions: ['Casino', 'Gruppe6', 'Britney Gang', 'Rooster'] },
    ],
    ilenol: [
        { name: 'Max Larson', factions: ['CBPD', 'Rooster'], displayName: 0 },
    ],
    illwac: [
        { name: 'Bob Moss', displayName: 0 },
        { name: 'Robyn Banks', factions: ['Police'], displayName: 0 },
    ],
    ILYCappiCat: [
        { name: 'SunMoon Lee', factions: ['RUST'], displayName: 1 },
    ],
    ilyjordi: [
        { name: 'Ralphie Ralphs', factions: ['Independent'], displayName: 1 },
        { name: 'Ralphie Ralphs', factions: ['Gangton'], nicknames: ['2.0'] },
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
        { name: 'Kev In', factions: ['SOS'], displayName: 0 },
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
        { name: 'Elle Queenie', factions: ['HK Pawn', 'Old Country', 'New Babylon'], nicknames: [], displayName: 1 },
    ],
    itsfragss: [
        { name: 'Maxwell Connorth', factions: ['SOS'], nicknames: ['Max'], displayName: 1 },
    ],
    ItsHighsky: [
        { name: 'Sky Parks', factions: ['Royal Mafia'], displayName: 0 },
    ],
    itsHolmes: [
        { name: 'Andre Tyson', factions: ['Pawn Addicts', 'Gruppe6', 'SSB', 'Faceless'], displayName: 1 },
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
        { name: '[Officer] Jack Miller' },
    ],
    itsmedeimo: [
        { name: 'Damian Greco', factions: ['MMC'], displayName: 0 },
    ],
    itsmejjroleplay: [
        { name: 'Johnny Jacksun', factions: ['BSK'], nicknames: ['JJ'], displayName: 0 },
    ],
    ItsNowas: [
        { name: 'Trequan Jenkins', factions: ['Street Team', 'Chang Gang'], nicknames: ['Ashtray'], displayName: 3 },
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
    IzaEleonora: [
        { name: 'Ylva Sjögren', factions: ['Saints'], nicknames: ['Sjogren'], displayName: 1 },
    ],
    izzidizzy: [
        { name: '[Deputy] Ruby Hope', displayName: 2 },
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
        { name: 'Jack Cortair', factions: ['Pawn Addicts', 'Besties'], nicknames: ['Cookie', 'Galleta'], assumeServer: 'whitelist' },
        { name: 'Jack Cortair', factions: ['Gangton'], nicknames: ['2.0', reg(/\bpimp|pimp\b/)] },
        { name: 'Dez Wright', factions: ['Slim', 'Besties'], nicknames: ['Doofy', reg(/\bdez/)], displayName: 1 },
    ],
    Jackhuddo: [
        { name: 'Shane Powers', factions: ['Seaside'], nicknames: ['ShaneO', 'ShanO'] },
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
        { name: '[Judge] Norman Adams', factions: ['Rooster'], displayName: 2 },
    ],
    jastatank: [
        { name: 'Larry Jonson', factions: ['Italian Mafia'], displayName: 0 },
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
        { name: 'Lil Cap', factions: ['Sinner Pawn', 'Gruppe6'], displayName: 0 },
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
        { name: '[Deputy] Peach Chee', factions: ['Police'], displayName: 1 },
        { name: 'Peachingle Dan', factions: ['Dans'] },
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
        { name: 'Antonio \'KOLD\' Valentino', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    jess_tation: [
        { name: 'CJ Parker' },
    ],
    jessbleck: [
        { name: '[Deputy] Jessie Dallas', assumeServer: 'public' },
    ],
    jessimiyaseo: [
        { name: 'Jessi Adler', factions: ['ASRR'], displayName: 0 },
    ],
    jettskiiee: [
        { name: 'Xavier "Xay" Sin', factions: ['Independent', 'CBPD', 'Rooster'] },
    ],
    jettt: [
        { name: 'Ethan Cross', factions: ['Police'], displayName: 0 },
    ],
    Jfourmess: [
        { name: 'Vince Watson', displayName: 0 },
    ],
    jimmytulip: [
        { name: 'Wayne Biggaz', factions: ['Street Team', 'Chang Gang'], nicknames: [reg(/\bwe+y+n/), reg(/\bwayne/)] },
        { name: 'Wayne Biggaz', factions: ['Gangton'], nicknames: ['2.0'] },
    ],
    JinxerTTY: [
        { name: 'Brandon Bowers', nicknames: [String.fromCharCode(68, 117, 109, 98, 102, 117, 99, 107)], displayName: 3 }, // -_-
    ],
    JJFried: [
        { name: '[Deputy] Jace Barter' },
        { name: 'Ace Carter', factions: ['Hydra Gang', 'BCG'] },
    ],
    JJLakee: [
        { name: 'Jay Jarvis', factions: ['Hydra Gang', 'Harmony', 'Pegasus'], nicknames: ['JJ', 'MG'], displayName: 0 }, // facebook
    ],
    JoblessGarrett: [
        { name: 'Garrett Jobless', factions: ['Chang Gang'] },
        { name: '[Officer] Garry Berry' },
    ],
    Joeeigel: [
        { name: '[Officer] Arthur MacNee', factions: ['Rooster'], displayName: 1 },
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
        { name: 'Billy Phresh', factions: ['Street Team', 'Chang Gang'], displayName: 0 },
    ],
    Jonthebroski: [
        { name: 'Denzel Williams', factions: ['Cleanbois', 'Lang Gang', 'Limelight', 'Pegasus', 'Rooster'], nicknames: ['The "Cleaner"', 'Presidente'] },
        { name: '[Deputy] Johnny Divine', displayName: 0 },
        { name: 'Broskingle Dan', factions: ['Dans'] },
        { name: '[Senator] Sean Davis', leader: true, nicknames: ['Senate'] },
        { name: 'Dio Ivanov', factions: ['Russians', 'Faceless'] },
        { name: 'Holden D. Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Thomas DeAngelo', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
    ],
    JoshOG: [
        { name: 'Mario Le-Pipe', factions: ['Chang Gang'], affiliate: true, displayName: 0 },
    ],
    JostQQ: [
        { name: 'Jost Zueger', factions: ['Rooster', 'Tuner Shop'], displayName: 0 },
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
        { name: '[Deputy] George Lawson', nicknames: ['592'] },
        { name: 'Tommy Cruizer', factions: ['Tuner Shop'] },
        { name: 'Jamie Bee', factions: ['Self Insert'], displayName: 0 },
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
        { name: 'Karina Dawn', factions: ['Harmony'], nicknames: ['crim', 'criminal', 'robbing', reg(/\bkarina/)] },
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
        { name: 'Mikal Bazin', factions: ['DoJ', 'Pawn Addicts'], displayName: 0 },
    ],
    KatAudeo: [
        { name: '[Dr.] Lucy Janis', factions: ['Medical'] },
        { name: 'Charlotte Thomas', nicknames: ['Lottie'], displayName: 3 },
        { name: 'Elena Sinclair', factions: ['Order'], displayName: 0 },
    ],
    Kate: [
        { name: 'Nancy Drew', factions: ['Lang Gang', 'Britney Gang'] },
        { name: '[Officer] Veronica Mars', nicknames: ['593'] },
        { name: 'Muriel Gallstaff', displayName: 1 },
    ],
    KateC: [
        { name: 'Kit Archer', factions: ['Hades'], nicknames: [], displayName: 1 },
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
        { name: 'Jupiter Adams', factions: ['Tuner Shop'], displayName: 0 },
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
        { name: 'Jayden Dennis', factions: ['Hades'], nicknames: [], displayName: 1 },
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
        { name: 'Kio Shima', factions: ['SOB'] },
    ],
    Kitboga: [
        { name: 'Edna Moose' },
        { name: '[Deputy] Claire Annette Reed' },
    ],
    Kite61: [
        { name: 'Rusty Johnson' },
    ],
    Kiva: [
        { name: 'Andi Jones', factions: ['New Babylon', 'HOA'], nicknames: ['Ant'], displayName: 1 },
        { name: 'Natalie ?', nicknames: ['not andi', 'not ant'], displayName: 1 },
        { name: 'Navi Gates' },
        { name: 'Ria Lee', factions: ['Locksmiths'], displayName: 0 },
    ],
    Kiwo: [
        { name: '[Deputy] Lauren Forcer', assumeServer: 'whitelist' },
        { name: '[Officer] Maisy Graves', assumeServer: 'public' },
        { name: 'Mia Mersion', factions: ['Pegasus'] },
        { name: 'Trish Baggs', displayName: 1 },
        { name: 'Nah Vee', displayName: 0 },
        { name: 'Evita "Mother" Nimm', factions: ['Dark Web'] },
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
        { name: 'Guy Jones', factions: ['NBC'], displayName: 0 },
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
        { name: '[Senator] Steven Barosi', leader: true, nicknames: ['Senate', 'Steve'], displayName: 1 },
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
        { name: 'John Carver', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    Kongfue: [
        { name: 'Karl "KJ" Johnny Black', factions: ['Hades'] },
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
        { name: 'Jay Que', factions: ['Rooster'], displayName: 0 },
        { name: '[Deputy] Ka Chao', displayName: 2 },
        { name: 'Kristofer Yee', factions: ['Self Insert'], displayName: 0 },
    ],
    KrisTWOfer: [
        { name: 'Jay Que', factions: ['Rooster'], displayName: 0 },
        { name: '[Deputy] Ka Chao', displayName: 2 },
    ],
    kritacul: [
        { name: 'Devon "Dev" Jones', factions: ['GSF'] },
    ],
    KrizFrost: [
        { name: 'Kriz Khaoz' },
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
        { name: 'Mary Mushkin', factions: ['KC', 'Tuner Shop'], nicknames: ['Red Devil', 'R3d Devil'], displayName: 1 },
        { name: 'Sarah Reynolds', displayName: 0 },
        { name: 'Kylie Bitcoin', factions: ['Self Insert'], displayName: 0 },
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
        { name: 'Isabella "Izzy" Carrington', factions: ['Harmony'] },
    ],
    LadyLynxx: [
        { name: 'Jaed Smith', factions: ['Saints'], displayName: 0 },
        { name: '[Officer] Saphira Sinclair', nicknames: ['Saph', '597'] },
    ],
    LAGTVMaximusBlack: [
        { name: 'Outto-Tune "OTT" Tyrone', factions: ['BSK'], nicknames: [reg(/\b[O0]\S?TT/)], leader: true, assumeServer: 'whitelist' },
        { name: '[Deputy] Max Prime', nicknames: ['Twija'], displayName: 2 },
        { name: 'Outto-Tune "OTT" Tyrone', factions: ['Independent'], nicknames: [reg(/\b[O0]\S?TT/)], assumeServer: 'public' },
        { name: '[Officer] Twija Prime', assumeServer: 'public' },
    ],
    Lairdo_: [
        { name: 'Henry King', factions: ['Rooster'] },
    ],
    lancerofficial: [
        { name: 'Lance Silva', factions: ['Habibis'], nicknames: [], displayName: 1 },
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
        { name: '[Dispatch] L Tailor', nicknames: ['D-21'], displayName: 2 },
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
        { name: '[Officer] Dante Wolf', factions: ['Stable'] },
    ],
    liamdpt: [
        { name: 'Kai Martin', factions: ['Manor'], nicknames: ['ERP King'], displayName: 1 },
    ],
    LiftedGN: [
        { name: 'Walter Melon', factions: ['GSF'], displayName: 0 },
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
        { name: 'Clayvon Barksdale', factions: ['Cleanbois', 'Rooster'] },
        { name: '[Officer] Bayvon Barksdale', nicknames: ['555'], displayName: 2 },
        { name: 'Abe Vaughn', displayName: 0 },
        { name: 'Avon Barksdale', factions: ['Cleanbois'], leader: true },
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
        { name: 'Garion Noble', factions: ['ADMC', 'CBPD', 'Rooster'], displayName: 1 },
    ],
    lolJukebox: [
        { name: '[Officer] Shane Jones', displayName: 2 },
    ],
    lonnielightning: [
        { name: 'Donnie Dunn', factions: ['HK Pawn', 'Slim'], displayName: 0 },
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
    Louuis: [
        { name: 'Sparky "SK" Kane', factions: ['Faceless'], displayName: 1 },
    ],
    loveANG3L: [
        { name: 'Kendra Davis', factions: ['Vagos'] },
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
        { name: 'Ricardo Valdez', factions: ['RUST'] },
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
        { name: 'Mayumi Himura', factions: ['HOA', 'Tuner Shop'], nicknames: ['May'] },
        { name: 'Paige Luna', factions: ['Self Insert'], displayName: 0 },
    ],
    lunchyrp: [
        { name: 'Danny Goomba', factions: ['MMC'], displayName: 2 },
    ],
    lycanstory: [
        { name: 'William Hunter', factions: ['Faceless'], displayName: 0 },
    ],
    Lyndi: [
        { name: 'Violet Van Housen', factions: ['Angels'], assumeServer: 'whitelist' },
        { name: '[Officer] Willow Wolfhart', displayName: 1 },
        { name: '[Officer] Violet Van Housen', displayName: 1, assumeServer: 'public' },
    ],
    Lysium: [
        { name: 'Benji Ramos', factions: ['BPM', 'Sweepers', 'Burger Shot', 'Hades', 'Faceless'], leader: true, nicknames: ['B'] },
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
        { name: 'Muten "Roshi" Roushi', factions: ['Clean Cartel'] },
    ],
    MagentaTM: [
        { name: 'Russel Harrington', factions: ['Clean Cartel'], displayName: 0 },
    ],
    Maggna: [
        { name: '[EMS] Mari Jones', factions: ['Medical'], nicknames: ['MJ'], displayName: 3 },
    ],
    MalcolmGlass: [
        { name: 'Malcolm Nekoda', factions: ['DoJ'], displayName: 0 },
    ],
    MalevolentReisu: [
        { name: 'Trey Walker', factions: ['Mayhem MC'], displayName: 0 },
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
        { name: 'Dougie Mane', factions: ['NBC'], displayName: 0 },
    ],
    Mantis: [
        { name: '[Sheriff] Domenic Toretti', leader: true },
        { name: 'Jackson Caldwell', factions: ['Frat'], displayName: 0 },
        { name: 'Ike Block', factions: ['ASRR'], displayName: 0 },
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
        { name: 'Margo Escargot', factions: ['MMC'] },
    ],
    maribel1998: [
        { name: 'Lucy Furr', factions: ['Burger Shot', 'DoJ'], displayName: 0 },
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
        { name: 'Clark Mason', factions: ['New Babylon'], nicknames: ['Flash'], displayName: 1 },
    ],
    MasterMisuri: [
        { name: 'Jesus Antonio Lopez Contreras', factions: ['HOA', 'Tuner Shop'] },
        { name: '[Deputy] Jeremias Jimenes' },
    ],
    MatchaSmash: [
        { name: '[EMS] Rowan Hunter', factions: ['Medical'] },
    ],
    MattEU: [
        { name: 'Matthew "Matt" Antov', factions: ['Sinner Pawn', 'Manor'], nicknames: ['Matt'], displayName: 0 },
        { name: 'Lucas Miller', factions: ['Gruppe6', 'Police'], displayName: 0 },
    ],
    Mattie: [
        { name: '[Dr.] Mikhail Keehl', factions: ['Medical'], displayName: 2 },
        { name: 'Titus Tsukasa', factions: ['BSK'], displayName: 0 },
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
        { name: 'Amber ?', factions: ['Self Insert'], displayName: 1 },
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
        { name: 'Jaylen Carter', factions: ['Street Team', 'Chang Gang'], nicknames: ['LampPost', 'Lamp Post'], displayName: 1 },
    ],
    Merrcy: [
        { name: 'Cody Palmer', factions: ['CBPD', 'Rooster'], displayName: 0 },
    ],
    Mervin: [
        { name: 'Mervin Potts' },
    ],
    Mexi: [
        { name: '[Deputy] Clarence Williams', displayName: 1 },
    ],
    mfWarlock: [
        { name: 'Skipper Jones', factions: ['Pawn Addicts', 'New Babylon'], nicknames: [], displayName: 1 },
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
        { name: 'Mono Block', factions: ['ASRR'] },
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
        { name: 'Mina Rocket', factions: ['Rooster'], displayName: 0 },
    ],
    MinervaMaat: [
        { name: '[Deputy] Minerva Maat', displayName: 1 },
    ],
    Ming: [
        { name: 'Ming Jingtai', factions: ['Besties'], assumeServer: 'whitelist' },
        { name: 'Ming Jingtai', factions: ['Gangton'], nicknames: ['2.0'] },
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
        { name: 'Mami Ko', factions: ['ASRR'], nicknames: ['Blue Storm'] },
        { name: 'Aoki Ma', factions: ['Pawn Addicts'], displayName: 0 },
    ],
    moistcr1tikal: [
        { name: 'Charles White', displayName: 0 },
    ],
    mollyrollinxo: [
        { name: 'Molly Rollin', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    mollyruu: [
        { name: 'Elizabeth "Lizzie" Byrne', factions: ['ADMC', 'Clean Cartel'], assumeServer: 'whitelist', wlBias: -1 },
        { name: '[Deputy] Scarlett Royal', displayName: 2 },
        { name: '[Deputy] Elizabeth Byrne', nicknames: ['Lizzie'], displayName: 3, assumeServer: 'public' },
        { name: 'Aishi Ayano', nicknames: ['Yandere'], displayName: 0 },
    ],
    MOONMOON: [
        { name: '[Officer] Lenny Hawk', nicknames: ['Renegade'], displayName: 1, assume: 'assumeNp' },
        { name: 'Bernice "Shadowlord" Caldershot', factions: ['LARPers'] },
        { name: 'Ro Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Mitch Moonmoon', factions: ['Self Insert'], nicknames: [reg(/\witch\.tv\/moonmoon\b/)], displayName: 0 },
        { name: 'Maximilian "Yung Dab" Thoroughbred', nicknames: ['The "Gnome"', 'Yung', 'Dab', 'Max'], displayName: 0 },
    ],
    Moosebrother: [
        { name: '[Deputy] Louis Bloom' },
        { name: 'Laura Gapes', factions: ['ASRR'], nicknames: ['Hooker Block', 'Hooker', 'Block'], displayName: 3 },
    ],
    MooseTaffy: [
        { name: 'Patar Bellosh', factions: ['Chang Gang'] },
        { name: '[Ride Along] Mantar Mellosh' },
    ],
    morgeu: [
        { name: 'Morgan Jay', factions: ['ADMC'], nicknames: ['Blade'], displayName: 0 },
    ],
    moxier4wr: [
        { name: 'Mercury Frost', factions: ['Street Team'], displayName: 1 },
    ],
    mr_grimreaper_: [
        { name: '[Officer] Joe Fish', assumeServer: 'public' },
    ],
    mrborealislive: [
        { name: 'Rudolph ?' },
    ],
    MrFestX: [
        { name: 'Dow Jones', factions: ['BSK'] },
    ],
    MrMoonsHouse: [
        { name: '[Officer] Freddy Price', displayName: 2 },
        { name: 'Tommy Roach', factions: ['Piss Boiz', 'Casino'], displayName: 0 },
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
        { name: '[Deputy] Skye Faye', factions: ['DoJ'], wlBias: -1 },
        { name: 'Rosalie Pierce', factions: ['Police'], displayName: 0 },
    ],
    MsTeamKK: [
        { name: 'Riley Carter', factions: ['CBPD', 'Britney Gang', 'Rooster'] },
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
        { name: 'Storm Creed', factions: ['Wastelanders'], displayName: 0 },
    ],
    mycahpittman: [
        { name: 'Mycah Pittman', factions: ['Pink Gang'], displayName: 0 },
    ],
    Myladyballs: [
        { name: 'Veronica Garcia', factions: ['Vagos'] },
    ],
    Myles_Away: [
        { name: '[Deputy] Connor Stubble', nicknames: ['514'], displayName: 2 },
        { name: 'Whitley Booth', factions: ['Rooster'], nicknames: ['Pirate'] },
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
        { name: '[Deputy] Philomena Hawthorne', nicknames: ['Luna', 'Me'] },
        { name: 'Petunia Susan Brookshire', factions: ['Rooster'] },
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
        { name: 'Octavio Vettel', factions: ['New Babylon'], nicknames: ['Octo', 'Goofy', 'Hypergoof', 'Octane'], displayName: 3 },
    ],
    NeveRossa: [
        { name: 'Dawn Hearte', factions: ['Lost MC', 'Medical'] },
        { name: '[Deputy] Brandy Kaas' },
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
        { name: 'Leslie Lingberg', factions: ['Lang Gang', 'Limelight', 'Cleanbois'], nicknames: ['Ling', 'Cerberus'], displayName: 1, assumeServer: 'whitelist' },
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
        { name: 'Nicholas Simone', factions: ['Seaside'], nicknames: ['Nick', 'Nico', 'Simon'], displayName: 0 },
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
        { name: 'Tony Leung', factions: ['Hades'], nicknames: [], displayName: 1 },
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
        { name: '[Deputy] Henri King' },
        { name: 'DaMarcus Lewis', factions: ['Tuner Shop'] },
        { name: 'Big K', factions: ['Self Insert'], displayName: 0 },
    ],
    NoraExplorer: [
        { name: 'Nunu El Nene', displayName: 1 },
    ],
    notGEEGA: [
        { name: 'Giovanna "Gigi" Gambino', factions: ['New Babylon'], nicknames: [], displayName: 1 },
    ],
    notjoans: [
        { name: 'Avery Daye', factions: ['Sinner Pawn'], displayName: 0 },
    ],
    notmerrick: [
        { name: 'Levi Rotti', factions: ['Independent'], displayName: 1 },
    ],
    NotoriousNorman: [
        { name: 'Chips Ahoy', factions: ['Rooster'] },
    ],
    Nottics: [
        { name: 'Raymundo Ortiz', factions: ['Sinner Pawn', 'Vagos', 'Tuner Shop'], nicknames: [reg(/\br+ay/), reg(/\bmundo/)] },
        { name: 'Raul Rodriguez', nicknames: [reg(/\br+au+l/)] },
    ],
    novaaberries: [
        { name: 'Lorelai Paige', factions: ['Sinner Pawn', 'Order'], displayName: 0 },
    ],
    NovalokHD: [
        { name: '[Officer] Ben Casanova' },
    ],
    novasobored: [
        { name: 'Dixie Renne', factions: ['Gruppe6'], displayName: 0 },
    ],
    novazfov: [
        { name: 'Zeek "Apple" Kacem', factions: ['New Babylon'], nicknames: [], displayName: 1 },
    ],
    NovellusDea: [
        { name: 'Jacyn Todd', nicknames: [], displayName: 1 },
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
        { name: '[Deputy] Hingle McCringleberry', displayName: 1, assumeServer: 'public' },
    ],
    NurEinDarki: [
        { name: 'Nolan Nicholson', factions: ['Wastelanders'], displayName: 0 },
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
        { name: '[Officer] Zacood Skengerson', displayName: 1, assumeServer: 'public' },
    ],
    offlinezeus: [
        { name: 'Ernesto Mata', factions: ['Brick House', 'The 404'], displayName: 0 },
    ],
    OG_Tyger: [
        { name: '[Officer] Peter Frost' },
    ],
    ogastrx: [
        { name: 'Antonio \'Diablo\' Diaz', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    ogk3nz: [
        { name: 'Marko Russetto', factions: ['Marabunta'], displayName: 0, leader: true },
    ],
    OhhhManItsDan: [
        { name: 'Diego Leon', factions: ['Faceless'], nicknames: ['Diego De Leon'] },
    ],
    OhJayzzy: [
        { name: 'Jay "JJ" Gamble', factions: ['Hades'] },
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
        { name: 'Omar Dedon', factions: ['Independent', 'Dons'], displayName: 1, facebook: true },
    ],
    omie: [
        { name: 'Marty Banks', factions: ['Brick Bois', 'Brick House', 'The 404', 'New Babylon'], assumeServer: 'whitelist' },
        { name: 'Marty Banks', factions: ['Gangton'], nicknames: ['2.0'] },
        { name: '[Deputy] Sharty Banks', displayName: 1 },
        { name: 'Marty Shanks', factions: ['Independent'], nicknames: [reg(/\bburger/)], assumeServer: 'public' },
        { name: '[Officer] Sharty Manks', displayName: 1, assumeServer: 'public' },
    ],
    onebaw: [
        { name: 'Arthur Morgan', factions: ['Mayhem MC'], displayName: 0 },
    ],
    OneProtectiveFox: [
        { name: 'Hanna Baker', displayName: 0 },
        { name: 'Cassie Hoyt', displayName: 0 },
    ],
    OneSmolBumble: [
        { name: '[Deputy] Brielle Snowmin', nicknames: ['594'], displayName: 1 },
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
        { name: '[Officer] Antoine Sigel' },
    ],
    OwenSeven: [
        { name: '[Deputy] Owen Svensen' },
        { name: 'Tyler Dabrowski', factions: ['Frat'], nicknames: ['Bro', 'Brow', 'Brah', 'Broski', 'Browski', 'Brahski'], displayName: 0 },
    ],
    oyamec: [
        { name: 'Rochelle Shepherd', factions: ['Order'], displayName: 0 },
    ],
    PacifistV: [
        { name: 'Merry Achi', factions: ['Rooster'], displayName: 0 },
    ],
    palin999: [
        { name: '[Deputy] Chad Gable' },
    ],
    palsean: [
        { name: 'Delver Lee', factions: ['Piss Boiz'], displayName: 0 },
    ],
    Pancakehumper: [
        { name: 'Deacon Frost' },
        { name: 'Deacon Frost', factions: ['Gangton'] },
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
        { name: 'Mike Block', factions: ['ASRR'], leader: true, displayName: 0 },
        { name: 'Chase Clouter', displayName: 0 },
        { name: 'Karen Karenly' },
        { name: 'Robert Penta', factions: ['Self Insert'], displayName: 0 },
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
        { name: 'Ronald "Scuffed Tony" Legarski', factions: ['ASRR'], nicknames: ['Tony', 'Ron', 'Block'] },
        { name: '[Deputy] Anthony Beans', displayName: 2 },
        { name: 'John Hobo', displayName: 0 },
    ],
    peterpark: [
        { name: 'Peener Pogue', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    peterparkTV: [
        { name: 'Peener Pogue', factions: ['Rooster'] },
    ],
    Pezz: [
        { name: '[Officer] Pez Speedwagon', displayName: 1 },
        { name: 'Pezzy Pee' },
    ],
    phantomzz_ow: [
        { name: 'Connell MacGregor', factions: ['SOB'], displayName: 2 },
    ],
    Philderbeast: [
        { name: '[Dispatch] Owen Fitz-Gibbon', displayName: 2 },
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
        { name: '[Officer] Kira Light' },
        { name: 'Ella Stone' },
    ],
    pochesVides: [
        { name: 'Bruno LeMons', factions: ['Rooster'] },
    ],
    pokelawls: [
        { name: 'Bogg Dann', factions: ['Burger Shot'] },
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
        { name: '[Deputy] Adrian Pearce', displayName: 2 },
        { name: 'Martin Polen', factions: ['Self Insert'], displayName: 0 },
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
        { name: 'James Thompson', factions: ['Hydra Gang', 'Harmony'], nicknames: ['James "Phantom" Thompson', 'Phantom'], displayName: 4 },
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
        { name: 'Scooter McQueeny', factions: ['Street Team', 'Chang Gang', 'Tuner Shop'], nicknames: ['Sport'], displayName: 3 },
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
        { name: 'Winter Sison', factions: ['Burger Shot', 'Hades'], nicknames: [], displayName: 1 },
    ],
    qMARIOx: [
        { name: 'Fernando "Mario" Reyes', factions: ['Chang Gang', 'Hydra Gang', 'Chaos'], nicknames: ['"Mario" from the Barrio'] },
        { name: '[Officer] Rob Uncle', nicknames: ['Robert'], displayName: 2 },
    ],
    qrowy: [
        { name: 'Elias Winchester', factions: ['Police'], displayName: 0 },
    ],
    questtk: [
        { name: 'Zizo Silva', factions: ['MMC'], nicknames: ['Zeezo'], displayName: 1 },
    ],
    Quru: [
        { name: '[Officer] Vladimir Reznik' },
        { name: 'Pepe Ramos', factions: ['Seaside'], displayName: 0 },
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
        { name: 'Penny Farthing', factions: ['Britney Gang', 'Rooster'] },
    ],
    RALLY728: [
        { name: 'Armando Hernandez', factions: ['Tuner Shop'] },
    ],
    Ramee: [
        { name: 'Ramee El-Rahman', factions: ['Chang Gang', 'BCG', 'Tuner Shop'], nicknames: ['The "Warlord"', 'The "Vulture"', 'SBS Patient-0'] },
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
        { name: 'Randy Bullet', factions: ['Gangton'], nicknames: ['2.0'] },
        { name: 'Roundy Buffet', factions: ['Independent'], nicknames: ['Randy', 'Bullet'], assumeServer: 'public' },
        { name: '[Trooper] AJ Hunter', nicknames: ['207'] },
    ],
    Raveesh1: [
        { name: 'Yahya "Yaya" Ahmed', factions: ['New Babylon'], nicknames: [], displayName: 1 },
    ],
    rawrparty: [
        { name: 'Tig Oconner', factions: ['DoC'], displayName: 0 },
    ],
    Ray__C: [
        {
            name: 'Raymond "Ray" Romanov',
            factions: ['Sinner Pawn', 'Habibis', 'Faceless', 'Cleanbois'],
            leader: true,
            nicknames: ['Ray', reg(/\brussia/)],
            assumeChar: true,
            assumeServer: 'whitelist',
        },
        { name: '[Officer] Raycardo Flick', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Raycardo Flick', displayName: 1, assumeServer: 'public' },
    ],
    Ray308win: [
        { name: '[Officer] Craig Barrett' },
        { name: '[FIB Agent] Lyonel Winchester' },
    ],
    RayvenEyed: [
        { name: 'Milo King', factions: ['Rooster'], displayName: 0 },
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
        { name: 'Raul Luis-Blanco', factions: ['SOB'], displayName: 1 },
    ],
    ReelSalty: [
        { name: '[Deputy] Frank Giuliani', assumeServer: 'public' },
    ],
    Reina: [
        { name: 'Mona Sanchez', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    Reklez: [
        { name: 'Chico Guzman', factions: ['Hades'], nicknames: [], displayName: 1 },
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
        { name: 'Draxon Payne', factions: ['Wastelanders'], displayName: 1 },
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
        { name: 'Rocky Topps', factions: ['Stable'], displayName: 1 },
    ],
    RevRoach: [
        { name: "Happy D'Klown", factions: ['Clowns'] },
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
        { name: 'Axel Drake', factions: ['Seaside'] },
    ],
    RickMongoLIVE: [
        { name: '[D.A.] Rick Mongo', assume: 'assumeOther' },
    ],
    RileyRP: [
        { name: 'Bubbles Smith', factions: ['Royal Mafia'] },
    ],
    ripoozi: [
        { name: 'Larry Knox', factions: ['The 404', 'Brick House'], displayName: 1 },
    ],
    Riseblap: [
        { name: 'Saleem Shakib', factions: ['RUST'] },
    ],
    Rissabear: [
        { name: 'Rissa Berry', factions: ['Besties'] },
    ],
    RiZRP: [
        { name: 'Nikita Reznikov', factions: ['Pegasus'] },
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
        { name: 'Ell LeFant', factions: ['Wastelanders'], displayName: 0 },
    ],
    royalcreates: [
        { name: 'Wendy Thomas', factions: ['Clowns'], displayName: 0 },
    ],
    RudeNoodleNPC: [
        { name: 'Tee Veeman' },
    ],
    ruee: [
        { name: 'Saint Martin', factions: ['SOB'], nicknames: ['Gomez'] },
    ],
    Runyon11: [
        { name: 'Luk Zwiebel', factions: ['Wastelanders'], displayName: 0 },
    ],
    rustbingames: [
        { name: 'Barney McClay', factions: ['Police'], displayName: 0 },
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
        { name: '[Deputy] Silas Grimmer' },
        { name: 'James "Apples" Apeller' },
        { name: 'Chadley ?' },
        { name: 'Ryder S. Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Ezekiel "Zero" Rogaine' },
    ],
    Saiiren: [
        { name: 'Ai "Egg" Musori', nicknames: ['Bitch'], factions: ['LARPers', 'Cleanbois', 'Rooster'], displayName: 0 },
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
        { name: 'Sammy B', factions: ['Harmony'], displayName: 0 },
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
        { name: 'Anna Jørgensen', factions: ['Harmony'], nicknames: ['Lilac', 'Illac', 'Jorgensen'], displayName: 3 },
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
        { name: 'Nori Valentine', factions: ['SOB'], displayName: 1 },
    ],
    saturneighteen: [
        { name: '[Deputy] Juno Sweeney', factions: ['Police'], displayName: 1 },
        { name: 'Cleo Shaw', nicknames: ['Coleslaw'], displayName: 1, assumeServer: 'whitelist' },
    ],
    SAVx: [
        { name: 'Johnny Cassle' },
    ],
    Sax850: [
        { name: 'Motya Satovksy', factions: ['Russians'] },
        { name: '[Officer] Olof Gunnarsson' },
    ],
    Sayeed: [
        { name: 'Arush "Speedy" Patel Santana', factions: ['Brick Bois', 'Brick House', 'New Babylon'], nicknames: [], displayName: 1 },
    ],
    SayeedBlack: [
        { name: 'Arush Patel "Speedy" Santana', factions: ['Lang Gang', 'Cleanbois'], nicknames: ['El Jefe'] },
        { name: '[Deputy] Sayeed White', nicknames: ['Mr. White'], displayName: 2 },
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
        { name: '[Officer] Jeffrey Price', displayName: 1 },
        { name: '[Officer] Jack Sawyer' },
    ],
    SerialKillerRP: [
        { name: 'Ezio Kafereska', factions: ['Street Team'] },
    ],
    sether100: [
        { name: 'Seth Castro', factions: ['SOB'], displayName: 0 },
    ],
    Sgt_Apollo: [
        { name: 'Salem Barghouthi', factions: ['NBC'], facebook: true },
        { name: '[Officer] Aziz Sultan', nicknames: ['Za Nose'], displayName: 1 },
    ],
    SgtApollo: [
        { name: 'Salem Barghouthi', factions: ['Brick House', 'The 404', 'Gruppe6', 'NBC'] },
        { name: '[Officer] Aziz Sultan', nicknames: ['Za Nose'], displayName: 1 },
        { name: 'Malik Mansori', factions: ['Police'], displayName: 0 },
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
        { name: 'Ryder James Flint', factions: ['Royal Mafia'], nicknames: ['RJ'], displayName: 4 },
    ],
    SheepDog59: [
        { name: '[Officer] Mason Kennedy', nicknames: ['545'], displayName: 2 },
    ],
    SheepieMezz: [
        { name: '[Deputy] Shiran Quinn' },
    ],
    Shiki: [
        { name: 'Vivian Vale', factions: ['CBPD', 'Clean Cartel'], displayName: 0 },
    ],
    Shindur: [
        { name: '[Deputy] Joey Keys' },
    ],
    shiny: [
        { name: '[Officer] Honey Buns', nicknames: ['D-21'] },
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
        { name: 'Patrick Shryke', factions: ['Wastelanders'], displayName: 0 },
    ],
    shush_x3: [
        { name: 'Devon Shy', factions: ['SSB'], displayName: 1 },
    ],
    ShutupWave: [
        { name: '[Deputy] Richard Tips', displayName: 2 },
    ],
    Shxcky: [
        { name: 'Jay Breezy', factions: ['Seaside'], displayName: 0 },
    ],
    Sidefxmayinclde: [
        { name: 'Kerm Henson', factions: ['Rooster'], displayName: 0 },
    ],
    sierraxmyst: [
        { name: 'Lukas Myst', displayName: 0 },
    ],
    SiirToast: [
        { name: 'Anton Belov', factions: ['Russians'] },
    ],
    silbullet: [
        { name: 'Shawn Maplethorne', factions: ['Police'], displayName: 0 },
    ],
    Silent: [
        {
            name: 'Juan Carlos "Flippy" Hernandez',
            factions: ['Hydra Gang', 'Faceless', 'Chang Gang', 'Chaos'],
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
        { name: 'Reggie Might', factions: ['Hades'], displayName: 1, assumeServer: 'whitelist' },
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
        { name: 'Reginald "Reggie" Bigglesby', factions: ['Rooster'] },
    ],
    sirryman: [
        { name: 'Levi Colton', factions: ['Clean Cartel'], displayName: 0 },
    ],
    Skannerz_: [
        { name: 'Wayne Kerr', factions: ['Tuner Shop'], displayName: 0 },
        { name: '[Deputy] Pual Greenway', displayName: 2 },
    ],
    skatebeard: [
        { name: 'Scotty Bard', factions: ['DoC'], displayName: 0 },
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
        { name: 'Joey Violento', factions: ['Dons'], displayName: 1 },
        { name: 'Luka Malarkey', factions: ['Italian Mafia'], displayName: 0 },
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
        { name: 'Tommy "TicTac" Oliver', factions: ['New Babylon'], nicknames: [], displayName: 1 },
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
        { name: 'Reginald Parker' },
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
        { name: '[Deputy] Perry Willis', displayName: 1, assumeServer: 'public' },
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
        { name: '[Deputy] Richard Dark', factions: ['Police'] },
        { name: 'Napolean Dankleaf', nicknames: ['Napoleon'], displayName: 0 },
    ],
    SodaKite: [
        { name: 'Ellie Dono', factions: ['Cleanbois', 'Rooster'] },
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
        { name: 'Billy Walker', factions: ['Wastelanders'], displayName: 0 },
    ],
    spoty09: [
        { name: 'Staniel Raymond', factions: ['SOS'], nicknames: ['Elfie', 'Alfie'], displayName: 3 },
    ],
    Sput: [
        { name: 'Garry Smod', displayName: 0, assume: 'assumeOther' },
    ],
    Ssaab: [
        { name: 'Alfonso "Saab" Sebastian', nicknames: ['Al'], displayName: 2 },
        // { name: '[Trooper] Sam Baas', factions: ['Police'], nicknames: ['Samir', 'Baasem'], displayName: 2 },
        { name: 'Ray Singha', displayName: 0 },
        { name: 'Charles Dawson', factions: ['Police'], displayName: 0 },
    ],
    SSLLAB: [
        { name: 'Ant Gaboosh', factions: ['Street Team'], displayName: 1 },
    ],
    StalwartNightmare: [
        { name: '[Deputy] Alex Night', nicknames: ['Speedster'], assumeServer: 'public' },
        { name: '[Dispatch] Alex Night', nicknames: ['Delta-39T', 'D-39T'], displayName: 2, assumeServer: 'whitelist' },
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
        { name: 'Stephen "STE" O\'Connor', factions: ['Manor'], nicknames: ['STE', 'STD', 'Irish Nightmare'], displayName: 3 },
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
    stewvrt: [
        { name: 'Junior Diaz', factions: ['Brick House', 'The 404', 'Gruppe6'], displayName: 0 },
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
        { name: '[Deputy] Frank Williams', displayName: 1, assumeServer: 'whitelist' },
        { name: 'Frankie Eastwood', displayName: 0, assumeServer: 'public' },
    ],
    StoneYEE: [
        { name: 'Stone Malone', factions: ['Street Team', 'BCG'], displayName: 1 },
    ],
    Stork1e: [
        { name: '[Officer] Luis Montoya', displayName: 2 },
    ],
    stormskii: [
        { name: 'Storm Skii', factions: ['Besties', 'MMC'], displayName: 1 },
    ],
    StrawHatlol: [
        { name: 'Angel Jiménez', factions: ['SOS'], nicknames: ['Jimenez'], displayName: 0 },
    ],
    Striking_Fast: [
        { name: 'Gerard "Dewey" Hawthorne', nicknames: ['Dewie'], factions: ['Rooster'] },
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
        { name: 'Charles "Chawa" Johnson', factions: ['Chang Gang', 'Tuner Shop'] },
        { name: '[Deputy] John Charleston', assumeServer: 'whitelist' },
        { name: '[Trooper] Charles Johnson', nicknames: ['Chawa'], assumeServer: 'public' },
    ],
    sun_bae_: [
        { name: 'Charlotte Greene-Johnson', factions: ['DoJ'], displayName: 0 },
    ],
    Sunni: [
        { name: 'Hilda Bulking', factions: ['Tuner Shop'] },
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
        { name: 'Fred "Necrolord" Fredrick', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Necrolord', 'Ranger'] },
        { name: 'Chute D. Block', factions: ['ASRR'] },
        { name: '[Officer] Kenny Hawk', nicknames: ['Powice'], displayName: 1 },
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
        { name: 'Miguel Almerion', factions: ['Besties'] },
        { name: '[Officer] Mervin Napoli', nicknames: ['Merv', 'Big Merv', 'Big M', reg(/\bmerv/)], displayName: 1 },
    ],
    Sykkuno: [
        {
            name: 'Yuno Sykk',
            factions: ['Sweepers', 'Gruppe6', 'New Babylon', 'Cleanbois', 'Clean Cartel', 'Rooster'],
            displayName: 1,
            assumeServer: 'whitelist',
            assumeChar: true,
        },
        { name: '[Deputy] Uno Reverse', displayName: 1 },
        { name: '[Ranger] Yuno Sykk', displayName: 1, assumeServer: 'public' },
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
        { name: 'Hunter "Wingman" Skye', factions: ['Rooster'] },
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
        { name: '[Deputy] Eric Wong' },
        { name: '[Officer] Eric Wong', assumeServer: 'public' },
    ],
    tehbigmadbarbarian: [
        { name: '[Deputy] ? "JJ" ?', assumeServer: 'public' },
    ],
    Tehrani: [
        { name: 'Boris Ivanov', factions: ['Russians'] },
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
        { name: 'Jaxxon Jones', factions: ['CBPD'] },
    ],
    ThatEmoPunk: [
        { name: 'Ezreal Kay-Hoss', factions: ['CBPD', 'Rooster'], nicknames: ['EZ', 'E.Z'] },
    ],
    ThatGuyGP: [
        { name: 'Jamal Abdul Jabbar', factions: ['Besties'], displayName: 1 },
        { name: 'Maz Razi', factions: ['Dons'], nicknames: ['Uncle Tony', 'Uncle T'], displayName: 3 },
    ],
    the_halfhand: [
        { name: 'Jack "Sully" Sullivan', factions: ['Rooster'] },
        { name: '[Officer] Oscar Fitzpatrick', nicknames: ['Fitz', 'Patrick'] },
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
        { name: 'Pilbis Shonly', factions: ['Pawn Addicts', 'Burger Shot', 'NBC'] },
        { name: 'Tyler Kwando', displayName: 0 },
        { name: 'Jesse Kennedy', factions: ['Police'], displayName: 0 },
    ],
    TheBigXH: [
        { name: 'Jose Rodriguez', factions: ['Vagos'], nicknames: ['Lil Ese'], displayName: 3 },
    ],
    TheChief1114: [
        { name: '[Deputy] Fingle Dan', factions: ['Dans'], displayName: 1 },
        { name: 'Chief', factions: ['Self Insert'], displayName: 1 },
    ],
    TheDasTony: [
        { name: 'Matteo Salerno', nicknames: [], displayName: 1 },
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
    ],
    TheEazyLife: [
        { name: 'Brandon Valentino', factions: ['Faceless'], displayName: 0 },
        { name: 'Tyler "Ty" Thompson' },
    ],
    theeYAIR: [
        { name: 'Yair Lamas', factions: ['Seaside'], displayName: 0 },
    ],
    TheGeekEntry: [
        { name: 'Stacey Doyle', displayName: 1 },
        { name: 'Jenn Bordeaux', nicknames: ['Frenchie', 'French'] },
    ],
    TheGeneralSmokey: [
        { name: 'Tom Crann Darach', factions: ['DoC', 'Gruppe6'], displayName: 0 },
    ],
    TheGoldenDunsparce: [
        { name: 'Phueng Madee', factions: ['RUST'], nicknames: ['Bee'] },
    ],
    TheHexagonist: [
        { name: '[Deputy] Vincent Glass', displayName: 2 },
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
        { name: '[Deputy] Neil McReal' },
        { name: '[Officer] Roland Nelson', assumeServer: 'public' },
    ],
    TheMLGenies: [
        { name: 'Shivananand "Shivvy" Sunandrankumar', factions: ['Royal Mafia'] },
        { name: 'Sinbad Thoor', displayName: 0 },
    ],
    TheMrKatMar: [
        { name: '[Ranger] Noah White', displayName: 2, assumeServer: 'international' },
    ],
    Theobrosia: [
        { name: 'Arcadia Grayson', factions: ['DoJ'], displayName: 0 },
    ],
    TheOnlyWendigo: [
        { name: 'Alexandru Vasquez', factions: ['Rooster'] },
    ],
    TheRonineh: [
        { name: '[Officer] Ash Anderson', assumeServer: 'international' },
    ],
    TheRudyDuck: [
        { name: 'Felix Klein', displayName: 0 },
    ],
    TheStarRoom: [
        { name: 'Tommy Puff', factions: ['Hades'], nicknames: [], displayName: 1 },
    ],
    thicbootyconspiracyshorty: [
        { name: 'Karli Marx', factions: ['ADMC'], displayName: 0, assumeServer: 'public' },
    ],
    Thio: [
        { name: 'Kirk Jerkems', factions: ['Clowns', 'Police', 'Stable', 'Rooster'], displayName: 0 },
    ],
    Thirteen9N: [
        { name: 'Arya Shah', factions: ['Street Team'], displayName: 1 },
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
        { name: 'Orlando Jones', factions: ['Seaside'], nicknames: ['OJ'], displayName: 3 },
        { name: 'Chino G' },
        { name: 'Cardell "CJ" Jones', factions: ['SSB'] },
    ],
    TinaKitten: [
        { name: '? ?' },
    ],
    Tinker: [
        { name: '[Deputy] Theodore Tinker' },
        { name: 'Sean Tinker', factions: ['Pegasus'], displayName: 0 },
    ],
    TinySpark: [
        { name: '[Deputy] Daisy Dukakis', factions: ['Police'] },
        { name: 'Kassandra Kage', nicknames: ['Kass'] },
    ],
    TinyStunt: [
        { name: '[EMS] Bailey Jade', factions: ['Medical'] },
    ],
    tjnv: [
        { name: 'Charli Jones', factions: ['Piss Boiz', 'Casino', 'DoC'], displayName: 0 },
    ],
    tjnv_: [
        { name: 'Charli "CJ" Jones', factions: ['New Babylon'], nicknames: [], displayName: 1 },
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
        { name: 'KJ Taylor', factions: ['Pink Gang'], displayName: 0 },
    ],
    trashedpotatopie: [
        { name: '[Officer] Cherri Blossom', nicknames: ['512'], displayName: 2 },
        { name: 'Marie Ortiz', factions: ['Stable'], displayName: 0 },
    ],
    Traumz: [
        { name: '[Deputy] Edward Thatch', nicknames: ['Captain Moosebeard', 'Moosebeard'], displayName: 2 },
        { name: 'Tim Littleman', displayName: 0 },
        { name: 'Gord Ronson', factions: ['DoC'], displayName: 0 },
    ],
    travpiper: [
        { name: 'Dhead Webster', factions: ['Besties'], nicknames: [reg(/head\b/)] },
        { name: '[Deputy] Tyler Peters', factions: ['Police'], displayName: 2 },
        { name: '[Deputy] William Gunner', nicknames: ['Willy'], displayName: 2 },
        { name: 'Carlos "Cheddar" Sanchez', factions: ['HOA'] },
        { name: 'Carlos "Cheddar" Sanchez', factions: ['Gangton'], nicknames: ['2.0'] },
        { name: '[Deputy] Jason Hannah', displayName: 1 },
        { name: 'Warren Wallace' },
        { name: '[Watch Party] travpiper', factions: ['Watch Party'], nicknames: ['monday night sports'] },
        { name: 'Charlie Colcord' },
        { name: 'Hazard' },
    ],
    traycee: [
        { name: 'Lexi Law', factions: ['Angels'] },
        { name: '[Officer] Aspen Gray', nicknames: [reg(/a[s$]pen\b/)] },
    ],
    TTV_CaptMcGee1818: [
        { name: 'Leroy Smith', factions: ['SSB'], displayName: 1, assumeServer: 'public' },
    ],
    Turkaderk: [
        { name: 'Benji Carter', factions: ['BSK'], displayName: 0 },
    ],
    TurtleActually: [
        { name: 'Jordan Lee', factions: ['ADMC'], displayName: 0 },
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
    twinkles: [
        { name: 'Twinkles', factions: ['Clowns'], displayName: 0 },
    ],
    TwistedBones: [
        { name: 'Mark White', displayName: 0 },
        { name: 'Hank Marston', factions: ['Mayhem MC'], leader: true, displayName: 0 },
        { name: 'Marcus Black', factions: ['GSF'], displayName: 0 },
    ],
    TwistedManifest: [
        { name: 'Jack Valentino', factions: ['Lunatix'] },
    ],
    TwitchUser: [
        { name: 'Dang McNabb', displayName: 0 },
    ],
    Txylorzz: [
        { name: 'Taylor Lott', factions: ['Manor'], nicknames: ['TayTay'], displayName: 1 },
    ],
    Tyger: [
        { name: "Chase O'Dell", factions: ['Street Team', 'Chang Gang'], nicknames: ['Lil Bleach', 'Bleach'], displayName: 3 },
    ],
    TylerNotNamed: [
        { name: 'Beau Bummer', factions: ['New Babylon'], nicknames: [], displayName: 1 },
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
        { name: 'Nacho Block', factions: ['ASRR'], displayName: 0 },
        { name: '[Deputy] Rob Banks' },
        { name: 'Tuong Ru Kim' },
    ],
    VaderLive: [
        { name: 'Eugene Zuckerberg', factions: ['Chang Gang'], nicknames: ['Old Man'], facebook: true },
        { name: 'Nacho Block', factions: ['ASRR'], displayName: 0 },
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
        { name: 'Eliyanna Ali', factions: ['Pawn Addicts', 'Gruppe6'], displayName: 0 },
    ],
    vanyaa_3D: [
        { name: '[Development] Vanya', factions: ['Development'], nicknames: ['clothes', 'clothing'], assumeChar: true },
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
        { name: 'Antonio Chorizo', factions: ['Seaside'], displayName: 0 },
    ],
    vei: [
        { name: 'Molly Poppins', factions: ['Casino'], displayName: 0 },
    ],
    Venomfly: [
        { name: 'Babe Calloway', factions: ['Rooster'], displayName: 0 },
        { name: 'Carolina Reaper' },
    ],
    veriomonen_: [
        { name: 'Dimitri Azmanov', factions: ['SSB'], displayName: 0 },
    ],
    versa: [
        { name: 'Carlo Marciano', factions: ['HK Pawn', 'Old Country'], displayName: 0 },
    ],
    Vigors: [
        { name: 'Vingle Dan', factions: ['Besties'], nicknames: [], displayName: 1 },
        {
            name: 'Kayn "Yager" Larp',
            factions: ['LARPers', 'Cleanbois', 'Rooster', 'Tuner Shop'],
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
        { name: 'Omar Mardini', factions: ['Brick House'], displayName: 0 },
    ],
    Voladin17: [
        { name: '[Lawyer] Tidus Schwinghammer' },
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
        { name: 'Alessio "AJ" Jilani', factions: ['Clean Cartel'] },
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
        { name: 'Kennedy Adams', factions: ['RUST'], displayName: 0 },
    ],
    Wehtuns: [
        { name: '[Lawyer] Lawrence Splainer', displayName: 2 },
    ],
    weStern: [
        { name: 'Marcel ?', factions: ['Gangton'], nicknames: ['2.0'] },
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
        { name: '"James Marco" St. Marco', nicknames: ['marko', 'marcoing', 'markoing'] },
        { name: "? \"Don's Mother\" ?", nicknames: ['Mama', 'Donna'] },
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
    ],
    wraiyf: [
        { name: 'Matt Martin', factions: ['Police'], displayName: 0 },
    ],
    WTFGameNation: [
        { name: '[Dr.] Noah Drake', factions: ['Medical'] },
    ],
    wtfmoses: [
        { name: '[Officer] Derek McNulty' },
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
        { name: 'Jimmy "Fiddlesticks" Brown' },
    ],
    XMOTHATRUCKAX: [
        { name: 'Ronald "Red" Juggler' },
    ],
    xn0rth: [
        { name: 'Albert Speedo', factions: ['BPM'], displayName: 0 },
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
            factions: ['Brick Bois', 'Brick House', 'Independent', 'Cleanbois'],
            nicknames: ['Ghost Rider', 'Rider', 'Casino', 'News'],
            displayName: 0,
            assumeServer: 'whitelist',
            leader: true,
        },
        { name: 'Jean "X" Paul', factions: ['Independent'], nicknames: ['Ghost Rider', 'Rider'], displayName: 0, assumeServer: 'public' },
        { name: '[Deputy] Pierre "PP" Paul', factions: ['Police'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jean Pierre', displayName: 0 },
    ],
    xth0rek: [
        { name: 'Hank Over', factions: ['Police'], displayName: 0 },
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
        { name: 'Oakley Stallion', factions: ['Angels'], displayName: 1 },
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
        { name: 'Vance Vixen', factions: ['Hades'], nicknames: [], displayName: 1 },
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
        { name: 'Renato "Bubbles" Ortiz', factions: ['Brick House', 'The 404', 'Gruppe6', 'New Babylon'], nicknames: [], displayName: 1 },
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
        { name: 'Luciano DiCenzo', factions: ['HK Pawn', 'Old Country', 'New Babylon'], nicknames: [], displayName: 1 },
    ],
    Zettafrag: [
        { name: 'Kimberly Daniels', factions: ['Mayhem MC'], displayName: 0 },
    ],
    ZeusLair: [
        { name: 'Teller West', factions: ['HK Pawn'], displayName: 0 },
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
        { name: 'Tomassi Paparatto', factions: ['Royal Mafia'], displayName: 1, assume: 'assumeOther' },
    ],
    Zotbot: [
        { name: '[Physiotherapist] Leon Marks', factions: ['Medical'] },
    ],
    ZPapz: [
        { name: '[Deputy] Vincent Ventura' },
        { name: 'Liam Law', factions: ['Angels'] },
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
        { name: 'Jadwiga Adamczyk', factions: ['Polish', 'Gruppe6'], displayName: 0 },
    ],
};
