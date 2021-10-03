/* eslint-disable object-curly-newline */

import { FactionRealFull } from './meta';

export type AssumeOther = 'assumeNpNoOther' | 'assumeNp' | 'assumeOther' | 'someOther' | 'neverNp';

export type AssumeServer = 'whitelist' | 'public' | 'international' | 'allUsuallyWl' | 'allUsuallyOther';

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
}

export type NpCharacters = { [key: string]: Character[] };

const reg = (r: RegExp): string => `/${r.source}/`;

// Make character map

export const npCharacters: NpCharacters = {
    '0Reed': [
        { name: 'Reed Dankleaf', factions: ['Lost MC'] },
    ],
    '52chains': [
        { name: 'Fidel Guevara', nicknames: ['Don', 'Cabron'] },
        { name: 'Carmine "The Mouse" Costello' },
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
    Aaoki: [
        { name: '[Deputy] Maddison Bancroft', factions: ['Police'], displayName: 1 },
        { name: 'Shazza Wazza', factions: ['Rooster'], nicknames: ['Shazzam'] },
    ],
    aaron_rp: [
        { name: 'Aaron Alexander', nicknames: ['Double A', reg(/double.?a/)], displayName: 3 },
    ],
    AaronOnAir: [
        { name: '[Officer] Dan Faily', factions: ['Police'], nicknames: ['485'] },
        { name: 'Sal T. Block', factions: ['ASRR'], displayName: 0 },
    ],
    abbay: [
        { name: 'Olivia Harvey', factions: ['Rooster'] },
    ],
    abbbz: [
        { name: 'Sanjay Patel', factions: ['Burger Shot'] },
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
        { name: '[Mayor] Abdul AlRahim', factions: ['DoJ'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Judge] Ali Habibi', factions: ['DoJ'], nicknames: ['Al'] },
        { name: '[Officer] Basha Habibi', factions: ['Police'], assumeServer: 'public' },
        { name: 'Mustafa Habibi' },
        { name: 'Fahad AlArabi', factions: ['DoC'] },
    ],
    Abou_: [
        { name: 'Modi Janta', factions: ['NBC'] },
    ],
    Acaibear: [
        { name: '[Officer] Emily Reinhart', factions: ['Police'] },
        { name: 'Jolene Mushkin', nicknames: ['Little Red'] },
    ],
    adeptthebest: [
        { name: 'Mari Posa', factions: ['Chang Gang', 'Chaos'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Deputy] Selena Mendoza', factions: ['Police'] },
        { name: 'Hannah Hiltop' },
        { name: 'Maria Poser', factions: ['Gulag Gang'], displayName: 0, assumeServer: 'public' },
    ],
    AdinRoss: [
        { name: 'David ?' },
    ],
    adnormaltv: [
        { name: 'Ivan Gorbahtjov' },
    ],
    adzno: [
        { name: 'Aaron Melarky', factions: ['Condemned MC'], displayName: 0 },
    ],
    Adzzstarr: [
        { name: '[Judge] Adam Prince', factions: ['DoJ'] },
        { name: '[Dr.] Valentine', factions: ['Medical'] },
    ],
    AfricanSnowball: [
        { name: 'Buck Stanton', displayName: 2 },
        { name: '[Officer] Dwayne Carter IV', factions: ['Police'], displayName: 2 },
        { name: 'Leland "LJ" Jones', factions: ['GSF', 'Pegasus'] },
    ],
    Afro: [
        { name: 'Dexx Martin', factions: ['GSF'], leader: true },
        { name: 'Jacob Harth', factions: ['Dark Web'], leader: true },
        { name: 'Chris "CP" Porter' },
        { name: 'Sayid Mitra', nicknames: ['Sayeet'], displayName: 0 },
        { name: 'David "The Mime" Wonders', nicknames: ['Concrete', 'Mime'], factions: ['ASRR'] },
        { name: 'Gordon Parks', nicknames: ['DoorLord'] },
    ],
    AidenNortha: [
        { name: '[Deputy] Kevin Keyte', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Officer] Melvin Graves', factions: ['Police'], displayName: 0, assumeServer: 'public' },
        { name: 'Jase Dawson', displayName: 0 },
    ],
    aintitadam: [
        { name: 'Scruffy Doodle', factions: ['Burger Shot'] },
    ],
    Airborne: [
        { name: 'Dennis LaBarre', factions: ['DoJ'] },
        { name: 'Unity', nicknames: ['Cat'] },
    ],
    akaMONKEY: [
        { name: 'Arturo Ortiz', factions: ['Vagos'], nicknames: [reg(/\bar(?:tu|2)/), reg(/\barchu+r/)] },
        { name: 'CamRon "Peanut" Giles', factions: ['SSB'] },
        { name: 'Timoteo "TT" Bushnell', nicknames: ['Rasta'] },
    ],
    aleks: [
        { name: '[Officer] Bob Smith', factions: ['Police'], nicknames: ['Bobby', 'Chief'], displayName: 1 },
        { name: 'Alex Marshall', factions: ['Frat'], displayName: 0 },
        { name: '[FIB Agent] Heath Mercer', factions: ['Police'] },
        { name: 'Vasily "V" Sazkaljovich', factions: ['Pegasus', 'Rooster'] },
    ],
    alexhasg2g: [
        { name: 'Liz Anya', displayName: 0 },
    ],
    alexten0909: [
        { name: 'Alexander Campbell', factions: ['Angels'], nicknames: ['Alex'], displayName: 3, assumeServer: 'whitelist' },
        { name: '[Officer] Alex Campbell', factions: ['Police'], assumeServer: 'public' },
    ],
    Alisha: [
        { name: 'Alisha Wuornos' },
    ],
    AllHailGoon: [
        { name: 'Father Dinker', factions: ['ASRR'], nicknames: ['god', 'block'], displayName: 0 },
    ],
    Alonelyhawk: [
        { name: '[Judge] Allison Thomas', factions: ['DoJ'] },
    ],
    alpacagurl92: [
        { name: 'April Fooze', nicknames: ['first time'] },
    ],
    AlyPlayNinja: [
        { name: '[Officer] Amelia Frost', factions: ['Police'] },
    ],
    AndyMilonakis: [
        { name: 'Lil Erf', displayName: 0 },
        { name: 'Carmen Amuso' },
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
        { name: 'Tony Corleone', factions: ['Limelight', 'Cleanbois', 'Rooster'] },
        { name: '[Deputy] Anthony Copleone', factions: ['Police'] },
    ],
    Apitoxin11: [
        { name: 'Trigger Freebird', factions: ['Harmony'] },
    ],
    APPLESHAMPOO: [
        { name: '[Dispatch] Nancy Ree', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[EMS] Gioconda "Gio" Coppola', factions: ['Medical'], nicknames: ['T-17'] },
        { name: '[Officer] Gio Coppola', factions: ['Police'], nicknames: ['466'], displayName: 1, assumeServer: 'public' },
    ],
    appyturk: [
        { name: 'Appie Turk', displayName: 2, assumeServer: 'whitelist' },
        { name: 'Appie Turk', factions: ['SSB'], displayName: 2, assumeServer: 'public' },
    ],
    Arcadum: [
        { name: 'Svelt Tlevs', nicknames: ['Wizard'] },
    ],
    ArmandMorte: [
        { name: 'Lucky Cox', factions: ['Condemned MC'], displayName: 0 },
    ],
    Armeeof1: [
        { name: 'Milton Pointdexter' },
    ],
    Ash_on_LoL: [
        { name: 'Ash Ketchup', factions: ['Burger Shot', 'Vagos'], assumeChar: true },
    ],
    Ashi: [
        { name: 'Fiona Stewart', nicknames: ['Fi-ho-na', 'Fifi'], factions: ['Rooster'] },
        { name: 'Annie May', displayName: 0 },
    ],
    ashlynn: [
        { name: 'Cassie Cupcakes', factions: ['Angels'] },
        { name: '[Officer] Brenda Pancake', factions: ['Police'], displayName: 1, nicknames: ['Pancakes'] },
    ],
    Asteroba: [
        { name: '[Deputy] Aaron Byson', factions: ['Police'] },
        { name: '[D.A.] Larry Hallow', factions: ['DoJ'] },
        { name: 'Kermy Fulker', factions: ['HOA'] },
        { name: '[EMS] Boba Stone', factions: ['Medical'] },
    ],
    AuriEllis: [
        { name: 'Ursula Leichenberg', factions: ['Burger Shot', 'News'] },
        { name: 'Gracie ?' },
    ],
    aurvinR: [
        { name: '[Dispatch] John Doe', factions: ['Police'] },
    ],
    Aus24: [
        { name: '[Officer] Jack Davenport', factions: ['Police'] },
        { name: 'Jordan Walker', factions: ['Harmony'] },
    ],
    AustinCreed: [
        { name: 'Austin Creed', displayName: 0 },
    ],
    Autumn: [
        { name: 'Autumn Rhodes', assumeServer: 'whitelist' },
        { name: '[Officer] May Maple', factions: ['Police'] },
        { name: '[Ranger] May Maple', factions: ['Police'], assumeServer: 'public' },
    ],
    Auxidental: [
        { name: 'Trey Romano', factions: ['Pegasus', 'Rooster'] },
    ],
    AvaGG: [
        { name: 'Karen Dahmer', factions: ['Chang Gang'], affiliate: true, nicknames: ['Kawen'] },
    ],
    awkwardsausesteph: [
        { name: '[Officer] Rebecka Lovejoy', factions: ['Police'], nicknames: ['Beck', 'Becks', '521'] },
    ],
    aXed_U: [
        { name: 'Hans Snitzel' },
    ],
    AyeGavMF: [
        { name: '[Deputy] Dave Bird', factions: ['Police'], assumeServer: 'public' },
        { name: 'Nash Mastersin', displayName: 1, assumeServer: 'whitelist' },
    ],
    Baki961: [
        { name: 'Yoshimoto Nakanishi', assumeServer: 'whitelist' },
        { name: '[Officer] Fernando Diego Pablo Juan Esteban Luis Cortez Bonanza II', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    bananabrea: [
        { name: 'Claire Seducer', factions: ['Angels', 'Tuner Shop'], assumeServer: 'whitelist' },
        { name: '[Officer] Tyme Reducer', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Officer] Claire Seducer', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Becky Hopper', displayName: 0 },
        { name: 'Juanita Carlita Hernandez', nicknames: ['Flippa'] },
    ],
    BananaDuck: [
        { name: 'Billy Sprinkle', factions: ['GSF'], displayName: 0 },
        { name: 'Jimmy Limbs', displayName: 0 },
        { name: 'Stealie Yasuffi', displayName: 1 },
        { name: 'Dick Fillet', displayName: 0 },
        { name: 'Ravi Ravson', displayName: 0 },
    ],
    Bananalover115: [
        { name: 'Mamaita "Mama" Jehmimi', factions: ['Britney Gang'] },
    ],
    banditobrown1: [
        { name: "Shankeal O'Neal", factions: ['Street Team', 'Chang Gang'], nicknames: ['Shank', 'Shankyou'] },
    ],
    barryscottlive: [
        { name: 'Barry Scott' },
    ],
    Basyk: [
        { name: '[Deputy] Marcellus Mikaelson', factions: ['Police'], displayName: 2 },
    ],
    BazzaGazza: [
        { name: 'Barry Benson', factions: ['BBMC'], displayName: 0 },
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
    Benni: [
        { name: 'Santiago "Santi" Madrid', factions: ['Vagos'], nicknames: [reg(/\bSanti/)] },
        { name: 'Antonio Reyes', nicknames: [reg(/\bAntonio/)] },
        { name: 'Pablo Madrid', factions: ['Vagos'], nicknames: ['Diablo'] },
    ],
    BFLY: [
        { name: '[Dr.] Torah Andrews', factions: ['Medical'] },
    ],
    biggieferreira: [
        { name: '[Officer] Jamal Ferreira', factions: ['Police'], assumeServer: 'public' },
        { name: 'Dominic "Lil D" Chester', nicknames: ['Sabado de Sol'] },
        { name: 'Shevy Santanna', factions: ['Vagos'], assumeServer: 'whitelist' },
    ],
    BikeMan: [
        { name: 'Chet Summerset', assume: 'assumeNpNoOther' },
    ],
    binoversion: [
        { name: '? "O Dogg" ?', factions: ['SSB'] },
    ],
    Biotoxz_: [
        { name: 'Lars "Bjorn" Haverford', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Barbarian'], assumeServer: 'whitelist' },
        { name: 'Lars "Bjorn" Haverford', factions: ['Police', 'LARPers'], nicknames: ['Barbarian'], assumeServer: 'public' },
    ],
    BJPofficial: [
        { name: '[Lawyer //] Buford J. Preston', factions: ['DoJ'] },
    ],
    Blaustoise: [
        { name: 'Mickey S', factions: ['Cleanbois'], nicknames: ['Downbad', 'Downrat'], assumeServer: 'whitelist' },
        { name: 'Michael S.', factions: ['Gulag Gang'], nicknames: ['Upgood'], assumeServer: 'public' },
    ],
    bldrs: [
        { name: 'Kaleb "Kleb" Rush', factions: ['HOA', 'Frat'] },
        { name: '[Officer] Ryan Wright', factions: ['Police'] },
    ],
    BLooD_MoNeY_: [
        { name: '[Lawyer //] Griz ?', factions: ['DoJ'], displayName: 1 },
    ],
    Blown: [
        { name: 'Taylor "Spaceman" Briggs', factions: ['Burger Shot'] },
    ],
    bLuE622: [
        { name: 'Boe Jangles', factions: ['Chang Gang'], affiliate: true },
    ],
    blunt_20202020: [
        { name: 'Dub Blunt', factions: ['Tuner Shop'], displayName: 0 },
    ],
    bmcloughlin22: [
        { name: '[A.D.A.] Lachlan Pike', factions: ['DoJ'] },
    ],
    Bomaah: [
        { name: 'Viper Rodriguez', assume: 'assumeOther' },
    ],
    BoogieTD: [
        { name: 'Xavier Valentine', factions: ['Stable'] },
    ],
    BoschMerchant: [
        { name: 'Anto Murphy', factions: ['Chang Gang'] },
    ],
    boxbox: [
        { name: 'Bo Xbox', factions: ['Rooster'] },
    ],
    Braders: [
        { name: 'Jeff Arnold' },
    ],
    Braenstus: [
        { name: '[Lawyer //] Adam Nielsen', factions: ['DoJ', 'Rooster'], displayName: 1 },
    ],
    Brakketts: [
        { name: '[Dispatch] Tommy Horver', factions: ['Police'] },
    ],
    breakyx: [
        { name: 'Dris Peters', factions: ['SSB'] },
    ],
    BRIT: [
        { name: 'Tori Corleone', nicknames: ['Bologna'], factions: ['Britney Gang', 'Rooster'] },
    ],
    Brofain: [
        { name: 'Kodak Bodega' },
    ],
    BronzeRP: [
        { name: 'Gary Adams', factions: ['Lost MC'] },
    ],
    buddha: [
        { name: 'Lang Buddha', factions: ['Cleanbois', 'Rooster'], leader: true, nicknames: ['Circle Andy', 'Timelord'], assumeServer: 'whitelist' },
        { name: '[Ranger] Lang Buddha', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: '[Deputy] Kevin Kona', factions: ['Police'] },
        { name: 'Esteban Julio Ricardo Montoya De La Rosa Ramirez' },
    ],
    Burn: [
        { name: 'Johnny Silverhand', displayName: 0 },
        { name: 'Asmon Bronze', displayName: 0, nicknames: ['AsmonBronze', 'Transmog'] },
        { name: 'Norman "Norm" Yoder' },
        { name: 'Moe Nopoli', displayName: 0 },
        { name: 'Mentle Block', factions: ['ASRR'] },
        { name: 'Sasuke Johnson' },
        { name: 'Bojack Horseman', displayName: 0 },
        { name: 'Bob Penta', displayName: 0 },
        { name: '? "TTS" ?' },
        { name: 'Sanic Speedrun' },
        { name: '? "Vsauce" ?', factions: ['SSB'], nicknames: ['Bsauce'] },
        { name: 'Chi "Chi-ku" Ku' },
        { name: 'Plankton ?' },
        { name: 'Bruce "The Dank Knight" Strayne' },
        { name: 'Brocky Potage', displayName: 1 },
        { name: 'Gordo Ramsay', nicknames: ['Gorden', 'Gordon'], displayName: 0 },
    ],
    ButterRoyaleTV: [
        { name: 'Deejay Bartello' },
    ],
    Buzterwow: [
        { name: '? "Brother Mehof" ?' },
    ],
    bythybeard: [
        { name: '[Officer] Sexton Hardcastle', factions: ['Police'], displayName: 2 },
        { name: 'Wade Willson', factions: ['Lost MC'] },
    ],
    CallMeGrub: [
        { name: '[Deputy] Isaac Richardson', factions: ['Police'] },
    ],
    CallMeKevin: [
        { name: 'Grognak The Destroyer', assume: 'assumeNpNoOther' },
    ],
    capsure: [
        { name: 'Dimitri Nekola', factions: ['Pegasus'] },
    ],
    CaptainBarb: [
        { name: 'Mattias Nilson', factions: ['Condemned MC'], displayName: 0 },
    ],
    Carmen: [
        { name: 'Carmella Corset', factions: ['Rooster'] },
    ],
    Carter: [
        { name: 'Spencer Smith', nicknames: ['Mormon'] },
    ],
    casek_: [
        { name: 'Cesar Conchas', factions: ['Vagos'], displayName: 0 },
    ],
    CathFawr: [
        { name: '[Officer] Lydia Vale', factions: ['Police'] },
        { name: 'Summer Mersion', factions: ['GSF'], displayName: 0 },
        { name: 'Natya Block', factions: ['ASRR'], displayName: 0 },
        { name: "[Lawyer //] Shannon O'Banion", factions: ['DoJ'], displayName: 0 },
    ],
    Cathie: [
        { name: '[Deputy] Anita May', factions: ['Police'], displayName: 1 },
        { name: 'Ninacska Mihkala', factions: ['Russians'], nicknames: ['Nina'], displayName: 3 },
        { name: 'Kaelyn "Kae" East', factions: ['SSB'] },
    ],
    CaussiePreacher: [
        { name: '[EMS] Jack Preacher', factions: ['Medical'] },
    ],
    CFirst93: [
        { name: 'Mac Jones', factions: ['GSF'], nicknames: ['MJ'], displayName: 0 },
    ],
    Chalupa_Pants: [
        { name: 'Julio Thomas', factions: ['HOA'] },
        { name: '[Deputy] Marco Holliday', factions: ['Police'], nicknames: ['683', 'Holiday'] },
    ],
    Chap: [
        { name: 'Bryan Chapman', displayName: 0 },
    ],
    charlieblossom: [
        { name: 'Georgina "Windsong" Williams' },
    ],
    Chatterbox: [
        { name: 'Jagger "Chatterbox" Gerardy' },
    ],
    Chief: [
        { name: 'Baada Ka', nicknames: ['Chief'], displayName: 3, assume: 'assumeNpNoOther' },
    ],
    ChloeLock: [
        { name: 'Chloe Blanc', nicknames: ['Chloé'], displayName: 0 },
    ],
    Choi: [
        { name: '[Dr.] Choi Zhangsun', factions: ['Medical'], assume: 'assumeOther' },
    ],
    ChrisTombstone: [
        { name: '[Deputy] Flop Dugong', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
    ],
    chairhandler: [
        { name: 'Carl Crimes' },
    ],
    Chanpu: [
        { name: 'Justin "Victor" Bridges', factions: ['Angels'] },
    ],
    Chaseman7GG: [
        { name: 'Miguel Guerrero', factions: ['Vagos'] },
    ],
    ChelbM: [
        { name: 'Alan Kyles', factions: ['NBC'], displayName: 0 },
    ],
    CHUDOCKEN: [
        { name: 'Orpheus Dawson', factions: ['Burger Shot'], displayName: 1 },
    ],
    CinnamonToastKen: [
        { name: 'Chuck Colton' },
        { name: 'Buck Colton', nicknames: ['Book', 'Bucky', 'Cultan'] },
    ],
    Citizen_Cannon: [
        { name: 'Marco Richter', factions: ['Prison'], displayName: 0 },
    ],
    ClassyPax: [
        { name: 'Madam Ming', displayName: 0 },
        { name: '[Dr.] Ethan Maw', factions: ['Medical'], displayName: 2 },
    ],
    cleaneu: [
        { name: 'Michael Robinson', factions: ['DoC'], displayName: 0 },
        { name: 'Pete Bourke', factions: ['Prison'], displayName: 0 },
    ],
    Client: [
        { name: 'Daquan "Peanut" Dumas', factions: ['NBC'] },
        { name: '[Officer] Alejandro Picadillo', factions: ['Police'], nicknames: ['World Wide', 'Worldwide'] },
    ],
    CloudyDL: [
        { name: 'Scotty Dixon', factions: ['BSK'] },
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
        { name: '[Dr.] Isaac Smith', factions: ['Medical'] },
        { name: 'Roman "Mask" Sionis', nicknames: ['Black Mask'] },
    ],
    Coolio: [
        { name: 'Dequarius "Big D" Johnson', factions: ['Chang Gang'] },
        { name: '[Deputy] Adam Hopping', factions: ['Police'] },
    ],
    Cosmic: [
        { name: '[Officer] Alex Casterman', factions: ['Police'] },
        { name: 'Finlay' },
    ],
    CowsMooingNSuch: [
        { name: '[Clerk //] Sophia McMoo', factions: ['DoJ'], displayName: 1 },
    ],
    CptCheeto: [
        { name: '[Officer] Scott Ridley', factions: ['Police'] },
    ],
    craigysmith89: [
        { name: 'Frank Junior-Smith', factions: ['Vagos'], nicknames: ['Frank Jr Smith', 'Franky', 'Scottish'], displayName: 3 },
    ],
    CrayonPonyfish: [
        { name: 'Wynona Fontaine', factions: ['DoC'], displayName: 2 },
        { name: 'Sadie Thistle' },
        { name: 'Wilhelmina Copperpot', displayName: 2 },
    ],
    crimsonswordsman: [
        { name: 'Raphael Kristof', factions: ['HOA'] },
    ],
    Crunchy: [
        { name: '[Dr.] Agnes Ranbough', factions: ['Medical'] },
        { name: 'Grimoire "Gremlin" Hauttogs' },
    ],
    CrystalMushroom: [
        { name: 'Regina Bunny' },
    ],
    Crystalst: [
        { name: '[Deputy] Crystal Clear', factions: ['Police'], displayName: 1 },
        { name: 'Four "4T" Tee', factions: ['ASRR'], displayName: 0 },
        { name: 'Amie Rush' },
    ],
    CurtisRyan: [
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt'], factions: ['Chang Gang', 'Chaos'], assumeServer: 'whitelist' },
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt'], factions: ['Gulag Gang'], assumeServer: 'public' },
        { name: '[Officer] Stephen McClane', factions: ['Police'] },
        { name: 'Cornelius "Cornbread" Scott', factions: ['GSF'] },
    ],
    curvyelephant: [
        { name: '[Deputy] Matt Rhodes', factions: ['Police'] },
        { name: 'Brad ?', factions: ['Frat'], nicknames: ['B-Rad'], displayName: 3 },
        { name: 'Ryan Parker', factions: ['Lost MC'] },
        { name: '[Lawyer //] Kevin Shaw', factions: ['DoJ'] },
    ],
    Curvyllama: [
        { name: '[Deputy] Lorenzo Lezar', factions: ['Police'], displayName: 1 },
        { name: 'Freya Manning' },
    ],
    cyr: [
        { name: 'Joe Caine', displayName: 0 },
        { name: "Khan Di'Sendo", displayName: 0 },
        { name: 'Uchiha Jones', factions: ['Chang Gang'] },
        { name: 'Fred Hurst', nicknames: [reg(/Lim.\s?Bizkif/)] },
    ],
    cyter: [
        { name: 'Demetrius "Draco" Jones', factions: ['SSB'], nicknames: ['DJ'] },
    ],
    Dadulio: [
        { name: '[Deputy] Franky Dulio', factions: ['Police'] },
    ],
    daisykiss: [
        { name: 'Molly Rollin', displayName: 0, assume: 'assumeNpNoOther' },
    ],
    DanGheesling: [
        { name: 'Tanner Buttermaker', displayName: 1 },
    ],
    DanHawk1ns: [
        { name: 'Benny Gomez', factions: ['Burger Shot'] },
    ],
    Dark0verseer: [
        { name: '[Development //] Dark0', factions: ['Development'], nicknames: ['3D', 'manor'] },
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
    Daxxtr: [
        { name: '[Officer] V Cannoli', factions: ['Police'], assumeServer: 'public' },
    ],
    Deansocool: [
        { name: 'Dean Quincy', factions: ['Mandem'], displayName: 0, assume: 'assumeNpNoOther', assumeServer: 'whitelist' },
        { name: '[Officer] Den Shiesty', factions: ['Police'], displayName: 1 },
        { name: 'Dean Shiesty', factions: ['SSB'], displayName: 0, assumeServer: 'public' },
    ],
    Deejayus: [
        { name: 'Albert Intelligence', factions: ['Rooster'], nicknames: ['A.I.'] },
    ],
    Denior13: [
        { name: 'Keith "Bulldog" Dooger', factions: ['Lost MC'] },
    ],
    Denis3D: [
        { name: '[Development //] Denis3D', factions: ['Development'], nicknames: ['3D'] },
    ],
    devolore: [
        { name: '[Officer] Cassius Kennedy', factions: ['Police'], nicknames: ['Cash'] },
    ],
    dibitybopty: [
        { name: '[Officer] Gus Gorman', factions: ['Police'] },
    ],
    DiewithLivv: [
        { name: 'Cindy Tipton', factions: ['BBMC'], nicknames: ['Girlboss'] },
    ],
    DigbyTathamWarter: [
        { name: 'Nigel Edwardson', factions: ['News'], displayName: 0 },
    ],
    DigiiTsuna: [
        { name: '[Dr.] Kai King', factions: ['Medical'], displayName: 2 },
    ],
    DisbeArex: [
        { name: 'Oki Doki', factions: ['Burger Shot'], displayName: 0 },
    ],
    DKane: [
        { name: 'Cletus McCoy' },
    ],
    DocWizard: [
        { name: '[Judge] John Bailey', factions: ['DoJ'] },
        { name: '[Officer] Terrance "TJ" Walker', factions: ['Police'] },
        { name: 'Preston Landor' },
    ],
    Dogbert: [
        { name: '[Deputy] Rocko Colombo', factions: ['Police'], nicknames: [reg(/\bcol.mb./)] },
        { name: 'Luther Caine', factions: ['HOA'] },
        { name: 'Wyatt Mersion', factions: ['Limelight', 'Mersions'] },
    ],
    DoluTattoo: [
        { name: '[Development //] Dolu', factions: ['Development'] },
    ],
    Donut3venTryMe: [
        { name: 'Joey Pepperoni', factions: ['Tuner Shop'], displayName: 0 },
    ],
    Dorken: [
        { name: 'Valentina Hops', factions: ['Burger Shot'] },
        { name: 'Debby Doodle' },
        { name: '[Deputy] Nicholine Quinn', factions: ['Police'] },
        { name: 'Nicholine Quinn' },
    ],
    DotoDoya: [
        { name: 'Landon Campbell', displayName: 0, assume: 'assumeNpNoOther' },
    ],
    Doug: [
        { name: 'Gazpacho Prince', nicknames: ['Pachi', 'Spachi'] },
        { name: 'William "W" Told', nicknames: ['Lil Pump'] },
    ],
    DougisRaw: [
        { name: 'Jason Sharpe', displayName: 0 },
    ],
    Dr_Knope: [
        { name: 'Patrit "Mete" Metemahaan', factions: ['HOA'] },
    ],
    Dragecia: [
        { name: 'Bunnie Bunsworth', factions: ['HOA'] },
    ],
    DROwSeph420: [
        { name: 'John "Geno" Collins', factions: ['GSF'] },
    ],
    Dunrunnin12: [
        { name: 'Thomas Dwayne', factions: ['Stable'], nicknames: ['The Narrator'], displayName: 0 },
        { name: 'Nay "Delamain" Rater' },
    ],
    durptastic: [
        { name: 'Otis Goody', factions: ['Burger Shot'] },
    ],
    dustbinflowers: [
        { name: 'Cara Lynn', factions: ['Burger Shot'], displayName: 0 },
    ],
    dwjft: [
        { name: 'Dean Watson', factions: ['Limelight', 'Development'], nicknames: ['Dev stuff'] },
        { name: '[Trooper] Derby West Bromwich', factions: ['Police'], displayName: 1 },
        { name: '[Development //] DW', factions: ['Development'], nicknames: ['tinkering'] },
    ],
    Dyoti: [
        { name: '[Deputy] Wyatt Cole', factions: ['Police'], assumeServer: 'public' },
        { name: '[Deputy] Winston Walker', factions: ['Police'], assumeServer: 'whitelist' },
        { name: 'Dawson Whitehead' },
    ],
    Dyrus: [
        { name: 'Louis Hill', displayName: 0 },
    ],
    EagleAye: [
        { name: 'Eve Summers', factions: ['Rooster'] },
    ],
    eebern: [
        { name: 'Huck Guthrie', factions: ['HOA'], nicknames: ['Huckleberry'] },
    ],
    either: [
        { name: 'Jaden Christopher' },
    ],
    EliotJuun: [
        { name: '[Officer] Douglas Fir', factions: ['Police'], displayName: 1 },
    ],
    ellegrenn: [
        { name: 'Sofia Castellano', factions: ['Pegasus'], displayName: 1 },
    ],
    Elochai: [
        { name: 'Tao Chen', factions: ['Rooster'] },
        { name: 'Damien Grey', factions: ['Condemned MC'], displayName: 0 },
    ],
    ElvisRP: [
        { name: '[Deputy] John Dorian', factions: ['Police'] },
    ],
    EmmyWithLove: [
        { name: 'Peaches Hayabusa', factions: ['Burger Shot'] },
    ],
    Evee: [
        { name: 'Antigone Weston', factions: ['DoJ'], assumeServer: 'whitelist' },
        { name: '[Officer] Antigone Weston', factions: ['Police'], assumeServer: 'public' },
        { name: 'Whitney Crawford', factions: ['DoJ'] },
        { name: 'Adrienne West' },
        { name: 'Meggie "Megan" Right' },
        { name: 'Bree Matthews' },
        { name: 'Demi Black' },
    ],
    EvilShatner: [
        { name: '[Lawyer //] Anna Swallows', factions: ['DoJ'], nicknames: ['Law'], displayName: 1 },
    ],
    EsfandTV: [
        { name: '[Deputy] Cletus Cornwood', factions: ['Police'] },
        { name: 'Ali Farmand', displayName: 0 },
    ],
    ExNinja_: [
        { name: '[Deputy] Paul String', factions: ['Police'], assumeServer: 'public' },
    ],
    explodicy: [
        { name: 'Ted Kindly' },
    ],
    extralivia: [
        { name: 'Jessica Bays', factions: ['SSB'] },
        { name: 'Maia Berkeley' },
    ],
    F3ARzZ: [
        { name: 'Ranjit Raventish' },
    ],
    Fairlight_Excalibur: [
        { name: 'Raja Bahadur', factions: ['QuickFix'], leader: true },
        { name: '[Officer] Alexander "Fox" Fawkes', factions: ['Police'] },
    ],
    Fairzz91: [
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
        { name: '[EMS] Orianna "Ori" Frost', factions: ['Medical'], nicknames: ['Olive'] },
        { name: 'Ophelia Quinn' },
    ],
    Familybanter: [
        { name: '[Dr.]  Jayce Petra', factions: ['Medical'], displayName: 0 },
        { name: 'Taran Raid', factions: ['Lost MC'], displayName: 0 },
    ],
    Farmhouse78: [
        { name: 'Jane Farmer' },
        { name: 'Steven Hayes', factions: ['Burger Shot'], displayName: 0 },
    ],
    FeliciaDay: [
        { name: 'Cherryclarie Dinwittie', nicknames: ['CherryClaire'], displayName: 3 },
    ],
    FelixLeLoup: [
        { name: 'Felix Volk', factions: ['News'] },
    ],
    FerretRP: [
        { name: 'Alberto Weaselton', factions: ['Lost MC'] },
    ],
    Ferst711: [
        { name: '[Judge] Ferst Temple', factions: ['DoJ'] },
        { name: 'Tom Ryan', displayName: 0 },
    ],
    Fiendota: [
        { name: 'Jonathan "Magnum" Humes', nicknames: [reg(/\bP\.?\s*I\b/)] },
        { name: 'Booba ?' },
        { name: 'Boobingle Dan', factions: ['Dans'] },
    ],
    Five0AnthO: [
        { name: '[Trooper] Tony Andrews', factions: ['Police'], highCommand: true, leader: true },
        { name: 'Rhode Block', factions: ['ASRR'], displayName: 0 },
    ],
    FloMcNasty_TV: [
        { name: 'Richard Chiclets', factions: ['Stable', 'Burger Shot'], nicknames: ['Dick Chiclets'], displayName: 3 },
    ],
    Flynno: [
        { name: '[Officer] Mickey Reynolds', factions: ['Police'], displayName: 3, assume: 'assumeNpNoOther' },
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
        { name: '[Deputy] John Archer', factions: ['Police'] },
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
        { name: 'Derek Bogart', factions: ['Condemned MC'], displayName: 0 },
    ],
    Frobotic: [
        { name: 'Dizzy Bluffins', factions: ['SSB'], displayName: 1 },
    ],
    frogbound: [
        { name: 'Edward Nygma' },
        { name: 'Alexander Egorov' },
    ],
    Frshnesss: [
        { name: 'Tyrell Fresh', factions: ['SSB'], displayName: 0 },
    ],
    fuslie: [
        { name: 'April Fooze', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Ranger] Connie Clark', factions: ['Police'], displayName: 2, assumeServer: 'public' },
    ],
    Fyzicul: [
        { name: 'Keith "Lando" Wanderlust', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Stormborn', 'Shaman', 'Mountain Kingdom'], displayName: 0 },
    ],
    Gabz: [
        { name: '[Development //] Gabz', factions: ['Development'], nicknames: ['3D'] },
    ],
    GameDemented: [
        { name: '[Deputy] Peter Johnson', factions: ['Police'] },
    ],
    Garek: [
        { name: 'Burt "Gloryon" Beans', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Cleric'] },
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
        { name: '[Officer] Lance Malton', factions: ['Police'] },
    ],
    ggqf: [
        { name: 'Stanly "Stag" Lessfield', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Stagdancer', 'Gea', 'Paladin'] },
        { name: 'Garth Gregory Quincy Fafnir', nicknames: ['vlog'], displayName: 1 },
        { name: 'Daniel Hopper', displayName: 0 },
        { name: '[Officer] Bennett Calhoun', factions: ['Police'] },
    ],
    gibbs_gg: [
        { name: 'Walter Franks', factions: ['Condemned MC'], displayName: 0 },
    ],
    gingersnap___: [
        { name: 'Sophie Sanders', displayName: 0 },
    ],
    goldelena: [
        { name: 'August Vakarian' },
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
    GrandPOObear: [
        { name: 'Mick Jhonson', factions: ['Stable'], displayName: 1 },
    ],
    Greekgodx: [
        { name: '"Tay Tay" Tyrone', nicknames: ['TayTay'], assumeServer: 'public' },
        { name: 'Tea Tea', factions: ['Police'], displayName: 0 },
    ],
    GreenishMonkey: [
        { name: 'Bobby Brown', factions: ['Chang Gang'] },
        { name: 'James Brown', factions: ['Police'], displayName: 0 },
    ],
    GTAWiseGuy: [
        { name: 'Eddie Marshall', factions: ['Tuner Shop'] },
        { name: '[Deputy] Jim Underwood', factions: ['Police'], nicknames: ['337'] },
        { name: '[Development //] GTAWiseGuy', factions: ['Development'], nicknames: ['Handling', 'Fixes', 'Fixing', 'Tuning', reg(/\btuners?(?:\s*\w*)*leaks/)] },
        { name: 'Igor Skovacic' },
        { name: 'Big M', displayName: 0 },
        { name: 'Daequan "Double D" DeMarco', factions: ['SSB'] },
        { name: 'RayRay' },
        { name: 'Maury Mersion', factions: ['Mersions'] },
    ],
    GutturalSteve: [
        { name: 'Tomathy Steampipe', factions: ['Burger Shot'] },
    ],
    hannerb_naner: [
        { name: '[EMS] Jenny Schildt', factions: ['Medical'] },
    ],
    HARMSwahy: [
        { name: 'Blaine Burke', factions: ['Angels'] },
    ],
    Harry: [
        { name: 'Harry Brown', factions: ['Limelight', 'Cleanbois', 'Pegasus', 'Rooster'] },
    ],
    HasanAbi: [
        { name: 'Humberto Antonio Donato Pecorino', factions: ['Cleanbois', 'Rooster'], nicknames: ['Don', 'Donnie', reg(/\bOva[h']? here\b/)], displayName: 5 },
    ],
    Hedisaurus: [
        { name: '[Ranger] Ramona Celeste', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: '[EMS] Hedi Saurus', factions: ['Medical'], assume: 'assumeNpNoOther', assumeServer: 'whitelist' },
        { name: '[Dispatch] Ramona Celeste', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
    ],
    heyimzed: [
        { name: 'Edbert Ropeburn', factions: ['BBMC'] },
    ],
    HeyOrbz: [
        { name: '[Officer] Casey Valentine', factions: ['Police'] },
        { name: 'Richie Mersion', factions: ['Mersions'], displayName: 0 },
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
        { name: 'Griselda "Zelda" Harth', factions: ['HOA'] },
        { name: 'Olga Sazkaljovich', factions: ['Pegasus'], nicknames: ['Olgaa', 'Olgaaa', 'Olgaaaa'] },
    ],
    hobbittrash: [
        { name: '[Officer] Tracy Martell', factions: ['Police'], nicknames: ['Cop'] },
        { name: 'Katya Zamalodchikova', factions: ['DoJ'], displayName: 1 },
        { name: 'Jane Obama', nicknames: ['jesus', 'christ'], displayName: 0 },
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
        { name: '[Deputy] Matthew Espinoz', factions: ['Police'], nicknames: ['Airspinoz', 'Air 1 Andy'] },
        { name: 'Joaquin "JJ" Jimenes', factions: ['Vagos'] },
        { name: 'Allen Widemann', factions: ['Chang Gang', 'Tuner Shop'] },
    ],
    HPD007: [
        { name: 'Joe Flatley', factions: ['BSK'], nicknames: ['Fat Joe'], displayName: 3 },
    ],
    huddy_nz: [
        { name: 'Ash Huddy Hudson', factions: ['Lunatix'] },
    ],
    Huntag: [
        { name: 'Freddy Fastfingers', factions: ['HOA'], displayName: 0 },
    ],
    Hurnani: [
        { name: 'Borat ?' },
        { name: 'Bruno Brown', displayName: 0 },
        { name: 'James-Kamea Brown', factions: ['Vagos'] },
    ],
    HutchMF: [
        { name: '[Deputy] Jaryd Peak', factions: ['Police'] },
        { name: 'Hutch Hutcherson', factions: ['Chang Gang'], nicknames: [reg(/\bkilled a man/), 'racing', 'business', 'paintball', 'h&o'] },
        { name: 'Drew "Dead Eye Drew"', nicknames: ['DeadEye'] },
        { name: 'Hutch Hendrickson' },
    ],
    HydraPlz: [
        { name: 'Gandalf "Stankyleg" Butters', factions: ['ASRR'] },
    ],
    IAmSoul_RP: [
        { name: 'Johnathen Riker' },
    ],
    iballzach: [
        { name: '[EMS] Zachary Kellogg', factions: ['Medical'] },
    ],
    iddqd: [
        { name: 'Jesse Cree', factions: ['BBMC'] },
    ],
    IHeartGaming: [
        { name: 'Markuz Jackelson', factions: ['GSF'], nicknames: ['Meatball', 'Meat', 'Meatwad'] },
    ],
    IJuanAWin: [
        { name: 'Machete Cortez', factions: ['Marabunta'] },
    ],
    ikittyyyy: [
        { name: 'Kitty Dream', factions: ['Britney Gang', 'Burger Shot', 'Rooster'] },
    ],
    ilenol: [
        { name: 'Max Larson', factions: ['Rooster'], displayName: 0 },
    ],
    ImClammy: [
        { name: 'AK', factions: ['SSB'], assumeServer: 'whitelist' },
        { name: 'Derek Monroe' },
        { name: '[Officer] Derek Monroe', factions: ['Police'], assumeServer: 'public' },
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
    ironmonkeytv: [
        { name: 'Winston Bolt', factions: ['Pegasus'] },
        { name: 'Dragon' },
    ],
    itmeJP: [
        { name: 'Wilbur Higgins' },
    ],
    Its_Tyger: [
        { name: "Chase O'Dell", factions: ['Street Team', 'Chang Gang'], nicknames: ['Lil Bleach', 'Bleach'], displayName: 3 },
    ],
    itsjustasummerjob: [
        { name: 'Sabith "Bunny" Cohen', factions: ['Stable'] },
    ],
    ItsJustJosh: [
        { name: 'Levi Dawson', factions: ['SSB'] },
    ],
    ItsLeslie: [
        { name: 'KyrinChan "Leyla" WeuhBou', factions: ['LARPers', 'Cleanbois', 'Britney Gang', 'Rooster'], nicknames: ['Nightingale', 'Wizard', 'Embervale'] },
    ],
    ItsLSG: [
        { name: '[Officer] Jack Miller', factions: ['Police'] },
    ],
    itsmejjroleplay: [
        { name: 'Johnny Jacksun', factions: ['BSK'], nicknames: ['JJ'], displayName: 0 },
    ],
    itsnowas: [
        { name: 'Trequan Jenkins', factions: ['Street Team', 'Chang Gang'], nicknames: ['Ashtray'], displayName: 3 },
    ],
    ItsSammyP: [
        { name: 'Mando Thompson', factions: ['SSB'] },
        { name: 'Tyrone "Big T" Thompson', factions: ['SSB'] },
    ],
    itsSANDR: [
        { name: 'Asher Brown', factions: ['BBMC'] },
    ],
    ItsSlikeR: [
        { name: 'Abe Makaveli', displayName: 0, assumeServer: 'whitelist' },
        { name: 'Abe Moe', displayName: 0, assumeServer: 'public' },
        { name: 'Hershall Turtle', nicknames: ['Hershal'] },
        { name: 'Abraham Mohammed' },
    ],
    JaboodyShow: [
        { name: 'Jerry Curl', displayName: 0 },
        { name: 'Vincent' },
    ],
    Jack: [
        { name: 'Jack Cortair', factions: ['Vagos', 'NBC'], nicknames: ['Cookie', 'Galleta'] },
        { name: '[Deputy] Dez Wright', factions: ['Police'], nicknames: ['Doofy'], displayName: 3 },
    ],
    Jackhuddo: [
        { name: 'Shane Powers', nicknames: ['ShaneO', 'ShanO'] },
        { name: 'Hubbo Samson' },
    ],
    jacobpibbtv: [
        { name: 'Jacob Pibb' },
    ],
    Jadez: [
        { name: '? "Mother Midnight" ?' },
    ],
    jakenbakeLIVE: [
        { name: 'Ryu Tenga' },
    ],
    JarJarBloo: [
        { name: '[Officer] Marcus Miller', factions: ['Police'], assumeServer: 'public' },
    ],
    Javaaaa: [
        { name: 'Joseph Yorinobu', nicknames: ['Majima', 'Goro'], displayName: 3 },
        { name: 'Lillia Claurel' },
    ],
    jay4871: [
        { name: 'Dave Perry', displayName: 0 },
    ],
    JayAitch: [
        { name: 'Lil Cap', displayName: 0, assumeServer: 'whitelist' },
        { name: 'Lil Strap', displayName: 0, assumeServer: 'public' },
    ],
    Jayce: [
        { name: 'Lil Loco', factions: ['Vagos'], displayName: 0 },
        { name: 'Riley Johnson' },
        { name: 'Pepe Roni', displayName: 0 },
        { name: 'Molly Minaj', displayName: 0 },
        { name: 'Robert "Mr. Rodgers" Rodgers' },
    ],
    JdotField: [
        { name: 'Miles Landon', factions: ['Pegasus'], assumeServer: 'whitelist' },
        { name: 'Miles Landon', nicknames: ['451'], assumeServer: 'public' },
        { name: 'Jake LaMotta', displayName: 0 },
        { name: 'Andrew "Drew" Jackson', factions: ['GSF'] },
    ],
    Jellypeanut: [
        { name: 'Rai "Juuls" Cumberwoood' },
        { name: '[Prince] Habib Khalid' },
    ],
    jennylouise1997: [
        { name: '[Dispatch] Louise Campbell', factions: ['Police'] },
        { name: 'Jenny Smith', displayName: 0 },
    ],
    jettskiiee: [
        { name: 'Xavier "Xay" Sin', factions: ['Rooster'] },
    ],
    jimmytulip: [
        { name: 'Wayne Biggaz', factions: ['Chang Gang'], nicknames: [reg(/\bwe+y+n/), reg(/\bwayne/)] },
    ],
    JJLakee: [
        { name: 'Jay Jarvis', factions: ['Pegasus'], displayName: 0 },
    ],
    JoblessGarrett: [
        { name: 'Garrett Jobless', factions: ['Chang Gang'] },
        { name: '[Officer] Garry Berry', factions: ['Police'] },
    ],
    Joeeigel: [
        { name: '[Lawyer //] Arthur MacNee', factions: ['DoJ', 'Rooster'], displayName: 1 },
    ],
    JoeSmitty123: [
        { name: '[Officer] Michael Murphy', factions: ['Police'] },
    ],
    Jogiiee: [
        { name: 'Jessie Jugg' },
        { name: 'Eva Wall' },
        { name: '[Dr.] Emma Gaine', factions: ['Medical'] },
        { name: '[Lawyer //] Maggie Kayden', factions: ['DoJ'] },
    ],
    JonnyRotten: [
        { name: 'Billy Phresh', factions: ['Street Team', 'Chang Gang'], displayName: 0 },
    ],
    Jonthebroski: [
        { name: 'Denzel Williams', factions: ['Limelight', 'Cleanbois', 'Pegasus', 'Rooster'], nicknames: ['The "Cleaner"', 'Presidente'] },
        { name: '[Officer] Johnny Divine', factions: ['Police'], displayName: 0 },
        { name: 'Broskingle Dan', factions: ['Dans'] },
        { name: '[Senator] ? " " ?', factions: ['DoJ'], nicknames: ['Senate'] },
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
    JPKMoto: [
        { name: '[Clerk //] Odessa Pearson', factions: ['DoJ'], displayName: 1 },
        { name: 'Nora Dupres' },
        { name: 'Zee Nanakaze Mathers' },
    ],
    Jubby: [
        { name: 'Ricardo Perez', factions: ['Burger Shot'], displayName: 1 },
    ],
    Judd: [
        { name: '[Judge] Coyote Russell', factions: ['DoJ'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Judd Lincoln' },
        { name: '[Officer] Judd Lincoln', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Reverend I.M. Voland', factions: ['Dark Web'] },
    ],
    Juggs: [
        { name: 'Lenny Large', factions: ['Burger Shot'], nicknames: [reg(/\blenny/)], displayName: 0 },
        { name: 'Traevon Williams', nicknames: ['The Barber'], displayName: 3 },
    ],
    JukeBoxEM: [
        { name: 'Tony Foster' },
        { name: 'Shane Jones', factions: ['DoC'] },
    ],
    Julian: [
        { name: 'Julian Santorno', factions: ['Gulag Gang'], assumeServer: 'public' },
        { name: '[Officer] Jules Scarpetta', factions: ['Police'], nicknames: [reg(/\bscar/)], displayName: 1, assumeServer: 'public' },
    ],
    JustaMinx: [
        { name: 'Mercy Peggers' },
    ],
    JustenTymes: [
        { name: 'Blanden Haster', factions: ['HOA'], displayName: 1 },
    ],
    justFritz: [
        { name: 'Fritz Ericson', factions: ['Condemned MC'] },
    ],
    JustJambaa: [
        { name: 'La Flare Davis', displayName: 0 },
    ],
    JustJamie: [
        { name: '[Officer] George Lawson', factions: ['Police'], nicknames: ['592'] },
        { name: 'Tommy Cruizer', factions: ['Tuner Shop'] },
    ],
    Kaceytron: [
        { name: 'Bobbi Jo', displayName: 0 },
    ],
    Kainalo: [
        { name: 'Risto Suolamies' },
    ],
    Kangaro0: [
        { name: '[Officer] Jimmy Frost', factions: ['Police'] },
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
        { name: '[Deputy] Mina Price', factions: ['Police'] },
        { name: '[EMS] Khloe Brooks', factions: ['Medical'] },
        { name: 'Karina Dawn', nicknames: ['crim', 'criminal', 'robbing'] },
    ],
    Karma: [
        { name: 'Bobby Johnson', displayName: 0 },
    ],
    karnt1: [
        { name: 'Arush', factions: ['GSF'] },
    ],
    Kate: [
        { name: 'Nancy Drew', factions: ['Stable', 'Britney Gang'] },
    ],
    KatFires: [
        { name: 'Novah Walker', factions: ['Chang Gang'] },
        { name: '[Officer] Ensley Alton', factions: ['Police'], nicknames: ['521'], displayName: 1 },
    ],
    KattValkyrie: [
        { name: '[EMS] Valkyrie Sunshot', factions: ['Medical'] },
        { name: 'Katt Vincent' },
    ],
    KazMendalez: [
        { name: 'Kaz Mendalez', factions: ['BBMC'] },
    ],
    Keeno: [
        { name: 'Kyle Brovloski', displayName: 0 },
    ],
    KelsKatz: [
        { name: 'Lilian "Lily" Mackenzie', factions: ['GSF'] },
    ],
    Kemony: [
        { name: 'Susie Carmichael', displayName: 0 },
    ],
    Kennasofly: [
        { name: 'Jupiter Adams', factions: ['Tuner Shop'], displayName: 0 },
    ],
    KezieEve: [
        { name: 'Ghost Storm', factions: ['GSF'] },
    ],
    KGU__: [
        { name: 'Pablo Loco', factions: ['Vagos'], displayName: 0 },
    ],
    KhaosAdam: [
        { name: 'Adam Ababwa', factions: ['Mandem'], assume: 'assumeOther', displayName: 0 },
    ],
    KiingJoee: [
        { name: '? ?', assume: 'neverNp' },
    ],
    KillrBeauty: [
        { name: 'Catherine Scratch', factions: ['Lost MC'], nicknames: ['Cat'], displayName: 3 },
    ],
    KiloAU: [
        { name: '[Officer] Robert Anderson', factions: ['Police'] },
    ],
    Kimchi: [
        { name: 'Sun Moon' },
    ],
    Kimmykix: [
        { name: 'April Thompson', factions: ['Pegasus'] },
    ],
    Kinamazing: [
        { name: '[Officer] Emma Dupont', factions: ['Police'], nicknames: ['Dupog'], assumeChar: true },
    ],
    King_1455: [
        { name: 'Cooch Cassidy', factions: ['Lost MC'] },
    ],
    Kingothestone: [
        { name: 'Steven Stone III', factions: ['BBMC'], displayName: 2 },
    ],
    KingsGamingUnleashed: [
        { name: 'Pablo Loco', factions: ['Vagos'], displayName: 0 },
    ],
    KinkyHobo_: [
        { name: '[Lawyer //] Gill Schultz', factions: ['DoJ'], displayName: 1 },
        { name: '[Officer] Max Muller', factions: ['Police'], displayName: 2 },
    ],
    KinslayerxX: [
        { name: '[Dispatch] Youjimaru Takimura', factions: ['Police'], displayName: 2 },
    ],
    Kitboga: [
        { name: 'Edna Moose' },
        { name: '[Deputy] Claire Annette Reed', factions: ['Police'] },
    ],
    Kite61: [
        { name: 'Rusty Johnson' },
    ],
    Kiva: [
        { name: 'Andi Jones', factions: ['HOA', 'DoJ'], nicknames: ['Ant'], displayName: 3 },
        { name: 'Natalie ?', nicknames: ['not andi', 'not ant'], displayName: 1 },
        { name: 'Navi Gates' },
    ],
    Kiwo: [
        { name: '[Officer] Lauren Forcer', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Officer] Maisy Graves', factions: ['Police'], assumeServer: 'public' },
        { name: 'Mia Mersion', factions: ['Pegasus'] },
        { name: 'Nah Vee', displayName: 0 },
        { name: 'Evita "Mother" Nimm', factions: ['Dark Web'] },
        { name: 'Ava Ridge', nicknames: ['Silence', reg(/darkness/)] },
        { name: 'Marta Volkov' },
    ],
    KL33Si: [
        { name: '[Dr.] Emily Ducksworth', factions: ['Medical'], displayName: 0 },
    ],
    Klutch: [
        { name: 'Eli Porter', factions: ['Mandem'], nicknames: ['Elz'], displayName: 0 },
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
        { name: '[Trooper] Kael Soze', factions: ['Police'], highCommand: true, leader: true, nicknames: ['are illegal'] },
        { name: '[Deputy] Francis Francer', factions: ['Police'], nicknames: ['franic', 'franer'], displayName: 1 },
        { name: 'Otto Delmar', nicknames: ['race', 'racing'] },
        { name: '[Development //] Koil', factions: ['Development'], nicknames: ['Code'] },
        { name: 'Saint Jospeh', nicknames: ['Jesus', 'Joseph', 'XUJIA', 'EMC'], displayName: 0 },
        { name: 'Ray Ray', factions: ['ASRR'], displayName: 0 },
    ],
    Kongfue: [
        { name: 'Karl "KJ" Johnny', factions: ['Vagos', 'Burger Shot'] },
    ],
    KristoferYee: [
        { name: 'Jay Que', factions: ['Rooster'], displayName: 0 },
    ],
    KrisTWOfer: [
        { name: 'Jay Que', factions: ['Rooster'], displayName: 0 },
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
    Kyle: [
        { name: '[Sheriff] Kyle Pred', factions: ['Police'], leader: true },
        { name: 'Alabaster Slim', nicknames: ['Pimp'], displayName: 2 },
        { name: 'Kegal Dan', factions: ['Dans'] },
        { name: 'Brett Biggledoinks' },
        { name: 'Notta Local', factions: ['SSB'], nicknames: ['Balla Gang'], displayName: 3 },
        { name: 'Marty Oldmen', displayName: 0 },
        { name: 'Lee Harvey Tinker', displayName: 0 },
        { name: 'Cop Killa', displayName: 0 },
        { name: 'Sigfried Porsche', nicknames: ['porshe'], displayName: 0 },
        { name: 'Hampton Brandon', nicknames: ['TTD', 'Ten Toes Down'] },
        { name: 'Tame "The Mandalorian" Saxon', nicknames: ['Mandolorian'] },
        { name: 'Hat Carl', nicknames: ['The Matador'], displayName: 0 },
        { name: "[Lawyer //] Rory O'Banion", factions: ['DoJ'], displayName: 0 },
        { name: 'Wyatt Derp', factions: ['Lost MC'] },
        { name: 'Pal Gore' },
    ],
    KylendOnTwitch: [
        { name: 'Kylend LaCroix', factions: ['GSF'], assumeServer: 'public' },
    ],
    kyliebitkin: [
        { name: '[Deputy] Brittany Angel', factions: ['Police'], nicknames: ['Angle', 'Captain'] },
        { name: 'Mary Mushkin', factions: ['Tuner Shop'], nicknames: ['Red Devil', 'R3d Devil'], displayName: 0 },
    ],
    LadyHope: [
        { name: '[Officer] Lily Pond', factions: ['Police'] },
        { name: 'Isabella "Izzy" Carrington', factions: ['Harmony'] },
    ],
    LadyLynxx: [
        { name: '[EMS] Saphira Sinclair', factions: ['Medical'] },
        { name: 'Jaed Smith' },
    ],
    LAGTVMaximusBlack: [
        { name: 'Outto-Tune "OTT" Tyrone', factions: ['BSK'], nicknames: [reg(/\b[O0]\S?TT/)], leader: true, assumeServer: 'whitelist' },
        { name: 'Outto-Tune "OTT" Tyrone', factions: ['Gulag Gang'], nicknames: [reg(/\b[O0]\S?TT/)], assumeServer: 'public' },
        { name: '[Officer] Twija Prime', factions: ['Police'], assumeServer: 'public' },
    ],
    Lairdo_: [
        { name: 'Henry King', factions: ['Rooster'] },
    ],
    LarryX7: [
        { name: 'Jose "Cousin" Luis Santana', factions: ['Vagos'] },
    ],
    LaS_: [
        { name: 'Jesse "Baby Joker" Morales', assume: 'assumeOther' },
    ],
    LetterJaye: [
        { name: 'Posy Florian', factions: ['Burger Shot'], nicknames: ['P O S Y'] },
    ],
    LeWolfy: [
        { name: '[Deputy] Dante Wolf', factions: ['Police', 'Stable'] },
    ],
    LiftedGN: [
        { name: 'Walter Melon', factions: ['Burger Shot'], displayName: 0 },
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
        { name: '[Lawyer //] Lees Grey', factions: ['DoJ'] },
    ],
    Lisilsanya: [
        { name: '[EMS] Lei Sanya', factions: ['Medical'], nicknames: ['Lasagna'], displayName: 0 },
    ],
    Loorara: [
        { name: 'Olivia Garcia', factions: ['BBMC'], nicknames: ['Liv', 'Livvy', 'Olives'], displayName: 0 },
    ],
    Loqrin: [
        { name: '[Development //] Loqrin', factions: ['Development'] },
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
        { name: '[EMS] Lizzie Bien', factions: ['Medical'] },
    ],
    loveANG3L: [
        { name: 'Kendra Davis', factions: ['Vagos'] },
    ],
    Lovinurstyle: [
        { name: 'Leah Strong', assumeServer: 'whitelist' },
        { name: 'Rose Edwards' },
        { name: '[Officer] Leah Strong', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    lozdog: [
        { name: 'Lilith Ailhart', factions: ['HOA'] },
    ],
    Lt_Custard: [
        { name: 'Collin McKinley', factions: ['BBMC'], displayName: 0 },
    ],
    Lt_Raven: [
        { name: '[Officer] Vladimir Raven', factions: ['Police'], highCommand: true },
        { name: 'Hellfire Holden', factions: ['Lost MC'], nicknames: ['biker', reg(/hell\W*fire/)] },
    ],
    LtSerge: [
        { name: '[Deputy] Serge Cross', factions: ['Police'], displayName: 2 },
    ],
    Lucky_RP: [
        { name: 'Marlo Stanfield', nicknames: [reg(/ma?rlo/)] },
    ],
    LuckyxMoon: [
        { name: '? Devereaux', factions: ['DoJ'] },
        { name: 'Jessica Wesker', factions: ['DoJ'] },
    ],
    ludwig: [
        { name: 'Klevin Ballsworth' },
    ],
    luka_aus: [
        { name: '[Officer] Luka Kozlov', factions: ['Police'] },
        { name: 'Gazza Maloo', factions: ['Lost MC'] },
    ],
    Lullichiiqa: [
        { name: 'Liv Lassen' },
    ],
    LukeDimond: [
        { name: 'Jackson Creed', nicknames: ['Wheelchair', 'Legs'], displayName: 0 },
    ],
    luminariarayne: [
        { name: 'Ekaterina Alekseyevna', nicknames: ['Trina'], displayName: 1 },
        { name: 'Barbie Chan' },
    ],
    LunaOni: [
        { name: '[Officer] Claire Everly', displayName: 1, factions: ['Police'] },
        { name: 'Mayumi Himura', factions: ['Tuner Shop'] },
    ],
    Lyndi: [
        { name: 'Violet Van Housen', factions: ['Angels'], assumeServer: 'whitelist' },
        { name: '[Officer] Willow Wolfhart', factions: ['Police'], displayName: 1 },
        { name: '[Officer] Violet Van Housen', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    Lysium: [
        { name: 'Benji Ramos', factions: ['Vagos'], nicknames: ['B'] },
        { name: '[Deputy] Dean Duncan', factions: ['Police'] },
        { name: 'Maxim Pochinki' },
    ],
    M0Dmr: [
        { name: 'David Rusky', factions: ['SSB'] },
    ],
    Macaiyla: [
        { name: 'Jolene Grace', nicknames: ['Savannah'] },
    ],
    MacL0ven: [
        { name: 'Negan Graham', factions: ['Lost MC'] },
    ],
    Madmoiselle: [
        { name: '[Therapist] Pixie Plum', factions: ['Medical'] },
    ],
    Madoreline: [
        { name: '[Officer] Elizabeth Reed', factions: ['Police'] },
    ],
    MaestroPD: [
        { name: 'Muten "Roshi" Roushi', factions: ['Burger Shot'] },
    ],
    Maggna: [
        { name: '[EMS] Mari Jones', factions: ['Medical'], nicknames: ['MJ'], displayName: 3 },
    ],
    MalevolentReisu: [
        { name: 'Trey Walker', factions: ['Condemned MC'], displayName: 0 },
    ],
    malikouthere: [
        { name: 'Tito Conchas', factions: ['Vagos'] },
    ],
    Mantis: [
        { name: 'Jackson Caldwell', factions: ['Frat'], displayName: 0 },
        { name: '[Officer] Domenic Toretti', factions: ['Police'] },
        { name: 'Ike Block', factions: ['ASRR'], displayName: 0 },
        { name: '[Lawyer //] Jerry Callow', factions: ['DoJ'], displayName: 1 },
        { name: 'Pepe Silvia' },
    ],
    Markiplier: [
        { name: 'Stan Wheeler' },
    ],
    markuu: [
        { name: '[EMS] Leonardo Sand', factions: ['Medical'], nicknames: ['Leo'], displayName: 3 },
    ],
    Marsziipan: [
        { name: '[EMS] Misa Price', factions: ['Medical'] },
    ],
    MartinCreek: [
        { name: 'Bertha Clark' },
    ],
    MasterMisuri: [
        { name: 'Jesus Antonio Lopez Contreras', factions: ['HOA', 'Tuner Shop'] },
    ],
    MatchaSmash: [
        { name: '[EMS] Rowan Hunter', factions: ['Medical'] },
    ],
    Mattie: [
        { name: '[Dr.] Mikhail Keehl', factions: ['DoC'], displayName: 2 },
    ],
    MattRP: [
        { name: '[Trooper] Jack Ripley', factions: ['Police'] },
    ],
    McconnellRet: [
        { name: '? "Bench Guy" ?' },
    ],
    Meatwrist: [
        { name: 'Chad "Chodie" Brodie' },
    ],
    meeka_a: [
        { name: '[EMS] William "Middy" Haze', factions: ['Medical'] },
    ],
    Megatruong_: [
        { name: '[Deputy] Roy Armstrong', factions: ['Police'], displayName: 1 },
    ],
    MEKABEAR: [
        { name: '[Deputy] Amber Gold', factions: ['Police'] },
        { name: 'Erin Cox' },
        { name: 'Ari Tistu', displayName: 0 },
    ],
    Melly_Mae: [
        { name: '[Dispatch] Jessica Easton', factions: ['Police'] },
    ],
    MeMayoi: [
        { name: 'Yoi Tsukita', factions: ['Rooster'] },
    ],
    Meraldje: [
        { name: 'Jaylen Carter', factions: ['Street Team', 'Chang Gang'], nicknames: ['LampPost', 'Lamp Post'], displayName: 1 },
    ],
    Merrcy: [
        { name: 'Cody Palmer', factions: ['Rooster'], displayName: 0 },
    ],
    Mervin: [
        { name: 'Mervin Potts' },
    ],
    Mexi: [
        { name: '[Deputy] Clarence Williams', factions: ['Police'], displayName: 1 },
    ],
    MiamiPepe: [
        { name: '[Dispatch] Drake Wax', factions: ['Police'], displayName: 1 },
    ],
    michaelreeves: [
        { name: 'NoPixel ?' },
    ],
    Mick: [
        { name: 'Gladys Berry' },
    ],
    Middleditch: [
        { name: 'Stanley Tuttles' },
    ],
    Miggitymaan: [
        { name: 'Jayce Wyatt' },
        { name: '[Officer] Damien Alexander', factions: ['Police'] },
        { name: '[Deputy] Kurt Leonard', factions: ['Police'], assume: 'assumeOther' },
    ],
    Mikeemod: [
        { name: '[Development //] Mikeemod', factions: ['Development'] },
        { name: 'Ratlord', nicknames: ['Raccoon', 'Racoon', 'Rat Lord'] },
    ],
    MikeTheBard: [
        { name: 'Hubcap Jones', factions: ['Burger Shot'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jack Nova', displayName: 0 },
        { name: '[Ranger] Manny Multchbottom', factions: ['Police'], displayName: 0, assumeServer: 'public' },
    ],
    mikezout14: [
        { name: '[Deputy] Michael Rodgers', factions: ['Police'], assume: 'assumeNpNoOther' },
    ],
    MikkisaurusRex: [
        { name: '[EMS] Jessica Hilton', factions: ['Medical'] },
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
    Minakorocket: [
        { name: 'Mina Rocket', factions: ['Rooster'], displayName: 0 },
    ],
    Ming: [
        { name: 'Ming Jingtai', factions: ['Gulag Gang'], assume: 'assumeNp', assumeServer: 'public' },
        { name: '[Officer] Jing Mingtai', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    miniminter: [
        { name: 'Peter Shufflebottom', displayName: 0, assume: 'assumeOther' },
    ],
    MinusFive: [
        { name: '[Officer] Jason Bidwell', factions: ['Police'] },
    ],
    MIQQA: [
        { name: '[EMS] Janus Lee', factions: ['Medical'] },
    ],
    MistorThio: [
        { name: 'Kirk Jerkems', factions: ['Stable', 'Rooster'], displayName: 0 },
    ],
    Moboking: [
        { name: '[Officer] Ellis Pinzon', factions: ['Police'], nicknames: ['Ronaldo'], assumeServer: 'whitelist' },
        { name: 'Aleksander Bogorov', factions: ['Angels'], nicknames: ['Aleks'], displayName: 3, assumeServer: 'whitelist' },
        { name: '[Officer] Aleks Sazkaljovich', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Elijiah "Middle E" Parks', factions: ['SSB'] },
    ],
    moistcr1tikal: [
        { name: 'Charles White', displayName: 0 },
    ],
    mollyruu: [
        { name: 'Elizabeth "Lizzie" Byrne', factions: ['Stable'], assumeServer: 'whitelist' },
        { name: '[Deputy] Elizabeth Byrne', factions: ['Police'], nicknames: ['Lizzie'], displayName: 2, assumeServer: 'public' },
        { name: 'Aishi Ayano', nicknames: ['Yandere'], displayName: 0 },
    ],
    MOONMOON: [
        { name: '[Officer] Lenny Hawk', factions: ['Police'], nicknames: ['Renegade'], displayName: 1, assume: 'assumeNp' },
        { name: 'Bernice "Shadowlord" Caldershot', factions: ['LARPers'] },
        { name: 'Ro Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Maximilian "Yung Dab" Thoroughbred', nicknames: ['The "Gnome"', 'Yung', 'Dab', 'Max'], displayName: 0 },
    ],
    Moose_Taffy: [
        { name: 'Patar Bellosh', factions: ['Mandem'], assume: 'assumeNpNoOther' },
        { name: '[Ride Along] Mantar Mellosh', factions: ['Police'] },
    ],
    Moosebrother: [
        { name: '[Deputy] Louis Bloom', factions: ['Police'] },
        { name: 'Laura Gapes', factions: ['ASRR'], nicknames: ['Hooker Block', 'Hooker', 'Block'], displayName: 3 },
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
    MrMoonsHouse: [
        { name: 'Freddy Price', displayName: 0 },
    ],
    MrMouton: [
        { name: 'Chuck Mouton', displayName: 0 },
        { name: 'Han Pandler' },
    ],
    mrtimeee: [
        { name: 'Lennon "Bane" Lee', factions: ['Prison'] },
    ],
    mrwobblestwitch: [
        { name: 'Axel Simpleton' },
        { name: 'Sly Lion' },
    ],
    ms_star: [
        { name: '[Deputy] Skye Faye', factions: ['Police'] },
    ],
    MsTeamKK: [
        { name: 'Riley Carter', factions: ['Britney Gang', 'Rooster'] },
    ],
    MurderCrumpet: [
        { name: 'Cindy Lou' },
    ],
    MurphyBraun: [
        { name: 'Holden', factions: ['DoJ'] },
        { name: 'Marvin Peanut', nicknames: ['Marv'] },
        { name: '[Lawyer //] Murphy Braun', factions: ['DoJ'], displayName: 0 },
    ],
    mycahpittman: [
        { name: 'Mycah Pittman', factions: ['Pink Gang'], displayName: 0 },
    ],
    Myladyballs: [
        { name: 'Veronica Garcia', factions: ['Vagos'] },
    ],
    Myles_Away: [
        { name: 'Whitley Booth', factions: ['Burger Shot', 'Rooster'], nicknames: ['Pirate'] },
        { name: 'Connor Stubble', factions: ['DoC'], displayName: 0 },
        { name: 'Jim Littleman', displayName: 0 },
    ],
    Mythematic: [
        { name: 'Mike Rosoftsam', affiliate: true },
    ],
    Nakkida: [
        { name: '[Ranger] Tessa Lamb', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Tessa Lamb', factions: ['Gulag Gang'], assumeServer: 'public' },
        { name: 'Taylor "Onyx" White', factions: ['Police'] },
        { name: 'Rachel Parker' },
        { name: 'Stacy Myers', displayName: 0 },
    ],
    Natettvrp: [
        { name: 'Carlos "Carlitos" Loco', factions: ['Vagos'] },
    ],
    Natsumiii: [
        { name: 'Natalie Sumi', factions: ['Rooster'] },
    ],
    Navajo: [
        { name: 'Clarence Carter' },
    ],
    NefariousCharm: [
        { name: '[EMS] Maya Jane', factions: ['Medical'] },
    ],
    Neloc_: [
        { name: 'Moses Khan', factions: ['Mandem'], displayName: 1 },
    ],
    Nerdandi: [
        { name: 'Petunia Susan Brookshire', factions: ['Rooster'] },
    ],
    netsirk: [
        { name: '[EMS] Nettie Machete', factions: ['Medical'] },
    ],
    neutreN: [
        { name: 'Octavio "Goofy" Stenberg', factions: ['Tuner Shop'], nicknames: ['Hypergoof', 'Octane'] },
    ],
    NeveRossa: [
        { name: 'Dawn Hearte', factions: ['Lost MC', 'Medical'] },
    ],
    NewFaceSuper: [
        { name: 'Davey Doherty' },
    ],
    Niccorazi: [
        { name: 'Dougie Fresh', nicknames: ['Bobcat'] },
    ],
    Nidas: [
        { name: 'Leslie Lingberg', factions: ['Limelight'], nicknames: ['Ling'], displayName: 1 },
    ],
    Nikez: [
        { name: '[Development //] Nikez', factions: ['Development'] },
        { name: '[Officer] Cody Sharp', factions: ['Police'], nicknames: [reg(/\bpolice\s*m.n/)] },
        { name: 'Nick Simone', displayName: 0 },
    ],
    NikkisARiot: [
        { name: '[Deputy] Jenny Hall', factions: ['Police'], nicknames: [reg(/\bje\S{1,3}y/)], displayName: 1 },
    ],
    Nmplol: [
        { name: 'Buddy Black' },
    ],
    nnsLUL: [
        { name: '[Development //] nns', factions: ['Development'], assumeChar: true },
    ],
    NoElusionz: [
        { name: 'Bobby Schmiguel', nicknames: ['Bobby Beats'], displayName: 3 },
    ],
    noKingu: [
        { name: '[Deputy] Henri King', factions: ['Police'] },
    ],
    NotoriousNorman: [
        { name: 'Chips Ahoy' },
    ],
    Nottics: [
        { name: 'Raymundo Ortiz', factions: ['Vagos', 'Tuner Shop'], nicknames: [reg(/\br+ay/), reg(/\bmundo/)] },
        { name: 'Raul Rodriguez', nicknames: [reg(/\br+au+l/)] },
    ],
    NovalokHD: [
        { name: '[Officer] Ben Casanova', factions: ['Police'] },
    ],
    Ntviiper: [
        { name: 'Kian Mercer', factions: ['HOA'] },
    ],
    NunnYaBiznezz: [
        { name: '[Deputy] Hingle McCringleberry', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    nxsiah: [
        { name: 'Zelaya Fernando', factions: ['Prison'], nicknames: ['Z', 'Laya'] },
    ],
    NymN: [
        { name: 'Frank Fritugo' },
    ],
    o_Oakleyz_o: [
        { name: '[Deputy] Samuel Holtz', factions: ['Police'] },
    ],
    OccamsSabre: [
        { name: '[Officer] Jeffrey Bundy', factions: ['Police'], nicknames: ['451'] },
        { name: '[Lawyer //] Benjamin Crane', factions: ['DoJ'] },
        { name: '[Judge] Judge Holden', factions: ['DoJ'] },
        { name: 'Ray Montag', factions: ['DoJ'] },
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
        { name: 'Charles "Taco" Prince', factions: ['Chang Gang'], assumeServer: 'whitelist' },
        { name: 'Charles "Taco" Prince', factions: ['Gulag Gang'], assumeServer: 'public' },
    ],
    OG_Tyger: [
        { name: '[Officer] Peter Frost', factions: ['Police'] },
    ],
    ogk3nz: [
        { name: 'Marko Russetto', factions: ['BSK'], displayName: 0 },
    ],
    OhMadOne: [
        { name: '[Lawyer //] Ginzu Okada', factions: ['DoJ'] },
    ],
    OllyPop: [
        { name: 'Ivy Poppins' },
        { name: 'Evee Poppins' },
    ],
    omie: [
        { name: 'Marty Banks', assumeServer: 'whitelist' },
        { name: 'Marty Shanks', factions: ['Gulag Gang', 'Burger Shot'], nicknames: [reg(/\bburger/)], assumeServer: 'public' },
        { name: '[Officer] Sharty Manks', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    onebaw: [
        { name: 'Arthur Morgan', factions: ['Condemned MC'], displayName: 0 },
    ],
    OneTapBingus: [
        { name: 'Bodhi Mack', factions: ['Vagos'] },
    ],
    OwenSeven: [
        { name: '[Officer] Owen Svensen', factions: ['Police'] },
        { name: 'Tyler Dabrowski', factions: ['Frat'], nicknames: ['Bro', 'Brow', 'Brah', 'Broski', 'Browski', 'Brahski'], displayName: 0 },
    ],
    PacifistV: [
        { name: 'Merry Achi', factions: ['Rooster'], displayName: 0 },
    ],
    panpawn1: [
        { name: '[Officer] Adam Swanson', factions: ['Police'], assumeServer: 'public' },
    ],
    PapaChip: [
        { name: 'Channing "Chain" Turner', factions: ['BBMC'] },
    ],
    PapaDrgnz: [
        { name: 'Thur Teen', factions: ['Prison'], displayName: 0 },
    ],
    Pasty: [
        { name: '[Officer] Ernest Kaminski', factions: ['Police'], displayName: 2 },
    ],
    Pengwin: [
        { name: '[Deputy] Jerry Perkins', factions: ['Police'] },
        { name: 'Stanley Wilkinson', factions: ['HOA'], nicknames: ['Stan', 'White Devil'] },
        { name: 'Dustin "Dark Shadow" Manson' },
        { name: 'Kenneth "Ken-sama" Foreman', factions: ['Burger Shot'] },
    ],
    PENTA: [
        { name: '[Deputy] Randy Wrangler', factions: ['Police'], nicknames: [reg(/\bwrang/), 'Court'] },
        { name: 'Jordan Steele', displayName: 0, nicknames: ['"Parking" God', 'Phoenix Messiah'] },
        { name: 'Ricky Robins' },
        { name: 'Jimmy "El Gambino" Yougman', nicknames: ['Gamba', 'Gambling', 'Turbo', 'Spins', 'Snowball', 'Magic Hands', 'Jackie Snow', 'Jimmy Bricks', 'Plough Man'] },
        { name: 'Bob Smith', factions: ['Vagos'], nicknames: ['B0b Smith', 'B0b'], displayName: 3 },
        { name: 'Mike Block', factions: ['ASRR'], leader: true, displayName: 0 },
        { name: 'Chase Clouter', displayName: 0 },
        { name: 'Karen Karenly' },
        { name: 'Jane Obama', displayName: 0 },
    ],
    peruze: [
        { name: 'Ronald "Scuffed Tony" Legarski', factions: ['ASRR'], nicknames: ['Tony', 'Ron', 'Block'] },
    ],
    peterparkTV: [
        { name: 'Peener Pogue', factions: ['Rooster'] },
    ],
    Pezz: [
        { name: 'Pez Speedwagon', factions: ['BBMC'] },
        { name: 'Pezzy Pee' },
    ],
    Plashir: [
        { name: 'Thom Yung', factions: ['Stable'], displayName: 0 },
    ],
    PlasticLittle: [
        { name: 'Parson "Frosty" Brown', factions: ['Lost MC'] },
    ],
    PMoney: [
        { name: 'P Money', displayName: 0 },
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
        { name: 'Lacari Anemay' },
    ],
    pokimane: [
        { name: 'Celine LaCroix' },
    ],
    Polaflex: [
        { name: 'Lewis Marsden', factions: ['Tuner Shop'], displayName: 0 },
    ],
    Polen: [
        { name: 'Adam "AP" Peterson', factions: ['Tuner Shop'], displayName: 0 },
    ],
    Pons: [
        { name: '[Deputy] Otis Tucker', factions: ['Police'] },
        { name: '[Officer] Chet Manley', factions: ['Police'], displayName: 1, assume: 'assumeOther' },
        { name: '[Officer] Bodean Tucker', factions: ['Police'], nicknames: ['Bo'] },
    ],
    PotterTV: [
        { name: 'Ali Ababwa', factions: ['Mandem'], displayName: 0 },
    ],
    PriddyFresh: [
        { name: 'Tupac Shakur' },
    ],
    Primal: [
        { name: '[Officer] Kareem Lyon', factions: ['Police'], displayName: 1 },
    ],
    Protay10: [
        { name: '[Deputy] Jacob Specter', factions: ['Police'] },
        { name: 'James Thompson', nicknames: ['James "Phantom" Thompson', 'Phantom'], displayName: 4 },
    ],
    PsiSyn: [
        { name: '[Officer] Lucio Panini', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    Pssychotic: [
        { name: 'Jason Paul', factions: ['Lost MC'], nicknames: ['JP'] },
        { name: 'Hades', nicknames: ['Dog'] },
    ],
    PuckNatorGaming: [
        { name: 'Tate Urchips', factions: ['Prison'], displayName: 0, assume: 'assumeOther' },
    ],
    puddledux: [
        { name: 'Jake Rake', factions: ['Prison'], displayName: 0 },
    ],
    Purge9090: [
        { name: 'Jack Frent', factions: ['DoC'], displayName: 0 },
    ],
    Pydrex: [
        { name: '[Officer] James Doakes', factions: ['Police'], displayName: 2 },
    ],
    qMARIOx: [
        { name: 'Fernando "Mario" Reyes', factions: ['Chang Gang', 'Chaos'], nicknames: ['"Mario" from the Barrio'] },
    ],
    Quru: [
        { name: '[Officer] Vladimir Reznik', factions: ['Police'] },
        { name: 'Pepe Ramos', factions: ['Vagos'], displayName: 0 },
    ],
    Ragonath: [
        { name: 'Maxwell Devitt', displayName: 0 },
        { name: 'Ezekiel "Zeke" Stahl', factions: ['Prison'], displayName: 0 },
    ],
    Raided: [
        { name: '[Officer] Gage Draider', factions: ['Police'] },
        { name: '[Development //] Raided', factions: ['Development'] },
    ],
    raine: [
        { name: 'Penny Farthing', factions: ['Britney Gang', 'Rooster'] },
    ],
    RALLY728: [
        { name: 'Armando Hernandez', factions: ['Tuner Shop'] },
    ],
    Ramee: [
        { name: 'Ramee El-Rahman', factions: ['Chang Gang', 'Tuner Shop'], nicknames: ['The "Warlord"', 'The "Vulture"', 'SBS Patient-0'] },
        { name: '[Ranger] Conan Clarkson', factions: ['Police'] },
    ],
    Rasta: [
        { name: 'Dunn Robinson', assume: 'assumeOther' },
        { name: 'Mary Livingston', displayName: 0 },
    ],
    RatedEpicz: [
        { name: 'Randy Bullet', factions: ['Chang Gang'], nicknames: ['Lazy-Eye', 'Shankz'], assumeServer: 'whitelist' },
        { name: 'Roundy Buffet', factions: ['Gulag Gang'], nicknames: ['Randy', 'Bullet'], assumeServer: 'public' },
        { name: '[Trooper] AJ Hunter', factions: ['Police'], nicknames: ['207'] },
    ],
    Ray__C: [
        { name: 'Raymond "Ray" Romanov', factions: ['Limelight', 'Cleanbois', 'Rooster'], nicknames: ['Ray', reg(/\brussia/)], assumeChar: true, assumeServer: 'whitelist' },
        { name: '[Ride Along] Raycardo Flick', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Officer] Raycardo Flick', factions: ['Police'], assumeServer: 'public' },
    ],
    ray308win: [
        { name: '[FIB Agent] Lyonel Winchester', factions: ['Police'] },
    ],
    RayvenEyed: [
        { name: 'Milo King', factions: ['Rooster'], displayName: 0 },
    ],
    Realzman: [
        { name: '[EMS] Connor', factions: ['Medical'] },
        { name: 'Malakai' },
    ],
    Reina: [
        { name: 'Mona Sanchez', factions: ['SSB'], assume: 'assumeNpNoOther' },
    ],
    Reklez: [
        { name: 'Chico Guzman', factions: ['Vagos'] },
        { name: 'AJ', factions: ['SSB'] },
    ],
    RemiTheSiren: [
        { name: '[Dr.] Lily Harte', factions: ['Medical'], displayName: 2 },
        { name: 'Wednesday Mushkin', factions: ['HOA'] },
    ],
    reno_raines: [
        { name: 'Manny McDaniels', factions: ['HOA'] },
    ],
    rerolldota: [
        { name: '[Deputy] Lea Nova', factions: ['Police'] },
    ],
    ReverendCatino: [
        { name: 'Rocky Topps', factions: ['Stable'], displayName: 1 },
    ],
    RevRoach: [
        { name: "Happy D'Klown" },
    ],
    Rexsair_: [
        { name: "Rexarius Bracchimus", nicknames: ['Rex'], assumeChar: true, assumeServer: 'whitelist'},
    ],
    RhiTexxy: [
        { name: 'Brook Lexi', factions: ['Lost MC'] },
    ],
    RickMongoLIVE: [
        { name: '[D.A.] Rick Mongo', factions: ['DoJ'], assume: 'assumeNpNoOther' },
    ],
    RiZRP: [
        { name: 'Nikita Reznikov', factions: ['Pegasus'] },
    ],
    rlly: [
        { name: 'Shelly Targaryen', factions: ['Burger Shot'], nicknames: ['Shelleh', 'Queen'] },
        { name: 'Kelly Smith' },
    ],
    RobotNinjaPants: [
        { name: '[A.D.A.] Jacob Slate', factions: ['DoJ'] },
    ],
    roflgator: [
        { name: 'Robert Spowylamywanowski', nicknames: ['Rob', 'Polish', 'Night Manager'], displayName: 3 },
    ],
    Rose: [
        { name: '[Deputy] Perrie Lane', factions: ['Police'] },
        { name: '[Deputy] Maggie Dean', factions: ['Police'] },
    ],
    Roxmiral: [
        { name: 'Sherry Paie', displayName: 1, assumeServer: 'whitelist' },
        { name: '[Ranger] Sherry Paie', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Ruby Morris' },
        { name: 'Nikki Drools', factions: ['DoC'] },
        { name: 'Sherry Lee' },
    ],
    RudeNoodleNPC: [
        { name: 'Tee Veeman', factions: ['Burger Shot'] },
    ],
    RyanRV: [
        { name: 'Jay Jones', factions: ['Rooster'], displayName: 0 },
    ],
    S_Palms: [
        { name: 'Kimmy Youngirl', displayName: 1 },
    ],
    s0upes: [
        { name: '[Officer] Silas Grimmer', factions: ['Police'] },
        { name: 'James "Apples" Apeller' },
        { name: 'Chadley ?' },
        { name: 'Ryder S. Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Ezekiel "Zero" Rogaine' },
    ],
    Saiiren: [
        { name: 'Ai "Egg" Musori', nicknames: ['Bitch'], factions: ['LARPers', 'Cleanbois', 'Rooster'], displayName: 0 },
        { name: '[Deputy] Yuu Gondai', factions: ['Police'], nicknames: ['Yu', 'Yoo', 'Gon Die'] },
    ],
    Sal_Rosenberg: [
        { name: 'Sal Rosenberg' },
        { name: 'Debo Davis', factions: ['GSF'] },
    ],
    Sams: [
        { name: 'Dimitri Barkov' },
    ],
    saNhje: [
        { name: '[Development //] saNhje', factions: ['Development'], nicknames: ['MLO'] },
    ],
    Sareff: [
        { name: 'Paige Green' },
        { name: 'Jocelyn Wayne' },
        { name: 'Violet Noreguarde', factions: ['Vagos'], assumeServer: 'whitelist' },
        { name: '[Deputy] Paige Green', factions: ['Police'], assumeServer: 'public' },
        { name: 'Chasity Dawes' },
    ],
    SAVx: [
        { name: 'Johnny Cassle' },
    ],
    sashagrey: [
        { name: 'Enza Zissou' },
    ],
    Sax850: [
        { name: 'Motya Satovksy', factions: ['Russians'] },
        { name: '[Officer] Olof Gunnarsson', factions: ['Police'] },
    ],
    SayeedBlack: [
        { name: 'Arush Patel "Speedy" Santana', factions: ['Vagos'], leader: true, nicknames: ['El Jefe'] },
        { name: 'Sayeed White', factions: ['DoC'], nicknames: ['Mr. White'], displayName: 3 },
    ],
    scotism: [
        { name: 'Mike Baldwin', factions: ['Tuner Shop'], displayName: 0 },
    ],
    SeaNanners: [
        { name: 'Ronjulio Escjulio' },
    ],
    Selvek: [
        { name: 'Jeffrey Price', displayName: 0 },
        { name: '[Officer] Jack Sawyer', factions: ['Police'] },
    ],
    SgtApollo: [
        { name: 'Salem Barghouthi', factions: ['NBC'] },
        { name: '[Officer] Aziz Sultan', factions: ['Police'], nicknames: ['Za Nose'], displayName: 1 },
    ],
    shadiko: [
        { name: 'Alex Domino', factions: ['Rooster'], displayName: 0 },
    ],
    shadowgam3rx: [
        { name: 'Jenny Ondamic', factions: ['BSK'], nicknames: ['BSQueen'], displayName: 0 },
    ],
    shaggy_steve: [
        { name: '[Deputy] Jimmy Gordon', factions: ['Police'] },
    ],
    Sharaadrick: [
        { name: '[Officer] Marcel King', factions: ['Police'], assumeServer: 'public' },
    ],
    ShawW0w: [
        { name: 'Garry Roche', factions: ['Burger Shot'], displayName: 0 },
    ],
    Shindur: [
        { name: '[Deputy] Joey Keys', factions: ['Police'] },
    ],
    shiny: [
        { name: '[Officer] Honey Buns', factions: ['Police'], nicknames: ['D-21'] },
        { name: 'Pebbles ?', nicknames: ['Dog'] },
        { name: 'Clyde "Meowfurryon" Eastside', factions: ['LARPers', 'Cleanbois', 'Rooster'], nicknames: ['Druid', 'Archdruid', 'Malfurryon'] },
    ],
    shodtwo: [
        { name: 'Kishawn Baker', factions: ['Street Team', 'Chang Gang'], nicknames: ['Lil Blicky'], displayName: 3 },
    ],
    Shortyyguy: [
        { name: 'Eddie Delish' },
    ],
    Shotz: [
        { name: 'Vinny Pistone', factions: ['Chang Gang', 'Chaos', 'Tuner Shop'], assumeServer: 'whitelist' },
        { name: 'Vinny Pistone', factions: ['Gulag Gang'], assumeServer: 'public' },
        { name: 'Mr J', factions: ['Chang Gang'], displayName: 0 },
        { name: '[Ranger] John Mineo', factions: ['Police'] },
    ],
    Shrimp_: [
        { name: 'Bradley Kickass', factions: ['Burger Shot'], displayName: 0 },
        { name: 'Jimmy Bending', displayName: 0 },
        { name: '[Mr.] Watt Son', displayName: 0 },
    ],
    shroud: [
        { name: 'Richard Hard' },
    ],
    SiirToast: [
        { name: 'Anton Belov', factions: ['Russians'] },
    ],
    Silent: [
        { name: 'Juan Carlos "Flippy" Hernandez', factions: ['Chang Gang', 'Chaos'], nicknames: [reg(/\bflip/), reg(/\bcrim\w*\b(?!.+\bcop)/), 'not cop', 'trying out crim'] },
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
    ],
    Simo: [
        { name: 'Reggie', factions: ['Vagos'], displayName: 0, assumeServer: 'whitelist' },
        { name: '[A.D.A.] Blake Specter', factions: ['DoJ'] },
        { name: '[Officer] Reggie Might', factions: ['Police'], assumeServer: 'public' },
    ],
    Simplyje2ns: [
        { name: 'Jean Steele', displayName: 0 },
    ],
    sips_: [
        { name: 'Tito Higgins' },
    ],
    SirPink: [
        { name: 'Reginald "Reggie" Bigglesby', factions: ['Burger Shot', 'Rooster'] },
    ],
    Skannerz_: [
        { name: 'Wayne Kerr', factions: ['Tuner Shop'], displayName: 0 },
    ],
    Skelasoldier: [
        { name: 'Raymond "Xray" Delprince', factions: ['SSB'], displayName: 0 },
    ],
    Skiliyo: [
        { name: 'Derek Thomson', factions: ['Rooster'], displayName: 0 },
    ],
    SkipGently: [
        { name: 'John Riggs' },
    ],
    skippypoppin: [
        { name: 'Kevin Whipaloo', factions: ['Burger Shot'], displayName: 0 },
    ],
    Skitx0: [
        { name: 'Smino "Hitta" Brown', factions: ['GSF'], assume: 'assumeNpNoOther' },
    ],
    Slasher2099: [
        { name: '[Officer] Darrel McCormik', factions: ['Police'] },
        { name: '[K9 Trooper] Fenton', factions: ['Police'], nicknames: ['Fentons'] },
    ],
    SlixGamingTV: [
        { name: 'Nico August', factions: ['GSF'] },
    ],
    SlummpyJ: [
        { name: 'Javier Diaz', factions: ['Vagos'] },
    ],
    Smaczny: [
        { name: 'Conrad Gross' },
    ],
    SmithyFPS: [
        { name: 'Craig ?', factions: ['SSB'], nicknames: ['Crackhead Craig'], displayName: 3, assume: 'assumeNpNoOther' },
    ],
    SmithyPlaysUK: [
        { name: 'Reginald Parker', factions: ['DoC'] },
        { name: 'Duke Wiggles', displayName: 0 },
    ],
    smo_och: [
        { name: 'Mike Smoore', factions: ['Vagos'], displayName: 0 },
    ],
    SmokySloth: [
        { name: 'Bovice Wilkinson', factions: ['Prison'] },
        { name: 'Tayvadius "Chef" Jamarcus Livingston III', factions: ['GSF'] },
    ],
    SnekoGebiko: [
        { name: '[Deputy] Perry Willis', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    sock22: [
        { name: '[Deputy] Richard Dark', factions: ['Police'] },
    ],
    SodaKite: [
        { name: 'Ellie Dono', factions: ['Cleanbois', 'Rooster'] },
        { name: 'Chell Phish', displayName: 0 },
    ],
    sodapoppin: [
        { name: 'Kevin Whipaloo', factions: ['Burger Shot'], leader: true, displayName: 0 },
        { name: 'Tappy "Cat" Nippers', nicknames: ['Cat'], displayName: 0 },
    ],
    SoMuchOregano: [
        { name: 'Vincent Genovese', factions: ['Rooster'], displayName: 0 },
    ],
    SonKnuck: [
        { name: 'Patrick Desseault', factions: ['Rooster'], displayName: 0 },
    ],
    Sp00nerism: [
        { name: 'Harry Phartz', displayName: 0 },
    ],
    Spaceboy: [
        { name: 'Melbert "Mel" Rickenbacker' },
        { name: 'Joseph "Self Insert" Bobkylecyrmitch', displayName: 0 },
        { name: 'James Randy', displayName: 0 },
        { name: 'Adrian Block', factions: ['ASRR'], displayName: 0 },
        { name: '[Deputy] Patrick Downing', factions: ['Police'], nicknames: ['Pat'] },
        { name: 'Casey Boyd', nicknames: ['Caseboy', 'L8PD'], displayName: 0 },
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
    Ssaab: [
        { name: '[Chief of Police] Sam Baas', factions: ['Police'], nicknames: ['Samir', 'Baasem'], displayName: 2, leader: true },
        { name: 'Al Saab', factions: ['Cleanbois', 'HOA'], displayName: 2 },
        { name: 'Ray Singha', displayName: 0 },
    ],
    stanwilis: [
        { name: 'Trina Bergström', factions: ['Rooster'], nicknames: ['Bergstrom'], displayName: 0 },
    ],
    steamcharlie: [
        { name: '[Deputy] Sydney Bearmont', factions: ['Police'], displayName: 1 },
    ],
    Stephanerys: [
        { name: '[Officer] Patricia Mayonnaise', factions: ['Police'], nicknames: ['Patty'], displayName: 1 },
    ],
    ster: [
        { name: 'Guy Dance' },
        { name: 'Gerald Wagner', displayName: 0 },
    ],
    stitchybird: [
        { name: 'Daphne Tillamuck Valentino', factions: ['Lunatix'] },
        { name: 'Abigail "Abi" Sharp' },
    ],
    Stoner_Minded: [
        { name: '[Chief of Police] Frank Williams', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: '[Officer] Frank Williams', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Frankie Eastwood', displayName: 0, assumeServer: 'public' },
    ],
    Striking_Fast: [
        { name: 'Gerard "Dewey" Hawthorne', nicknames: ['Dewie'], factions: ['Rooster'] },
    ],
    Stuply: [
        { name: 'Salvatore "Big Pussy" Tamburlini' },
    ],
    SullyRP: [
        { name: 'Jack "Sully" Sullivan' },
    ],
    summit1g: [
        { name: 'Charles "Chawa" Johnson', factions: ['Chang Gang', 'Tuner Shop'] },
        { name: '[Deputy] John Charleston', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Trooper] Charles Johnson', factions: ['Police'], nicknames: ['Chawa'], assumeServer: 'public' },
    ],
    Sunni: [
        { name: 'Hilda Bulking', factions: ['Vagos'] },
    ],
    SuperBunneh: [
        { name: '[EMS] Mila Smoak', factions: ['Medical'] },
        { name: 'Madison "Maddy" Fox', factions: ['GSF'] },
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
        { name: 'Barry Svensson', factions: ['Pegasus', 'Rooster'] },
    ],
    SwaggerSouls: [
        { name: 'Ace Hull', displayName: 0 },
    ],
    Sweet_Anita: [
        { name: 'Marylin Hilton' },
    ],
    SwiftRP: [
        { name: 'Ty Jones', factions: ['SSB'], nicknames: ['xray'], displayName: 0 },
    ],
    SwizzMB: [
        { name: 'Miguel Almerion', factions: ['HOA'] },
    ],
    Sykkuno: [
        { name: 'Yuno Sykk', factions: ['Cleanbois', 'Rooster'], displayName: 1, assumeServer: 'whitelist', assumeChar: true },
        { name: '[Ranger] Yuno Sykk', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    SyncedGamingTV: [
        { name: '[Development //] Synced', factions: ['Development'] },
    ],
    Syndicate: [
        { name: 'Seven Lighthouse', displayName: 0 },
        { name: 'Alfie Hunter', displayName: 0 },
    ],
    SynthHunter: [
        { name: 'Hunter "Wingman" Skye', factions: ['Rooster'] },
    ],
    Syraphic: [
        { name: 'Elena Marilyn Vega' },
        { name: 'Emilia Salvatore' },
    ],
    t3r0: [
        { name: '[Dr.] Andrew Ducksworth', factions: ['Medical'], displayName: 2 },
    ],
    T5GJukebox: [
        { name: '[Officer] Shane Jones', factions: ['Police'], displayName: 2 },
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
    TastyMintsNA: [
        { name: '[Officer] Eric Wong', factions: ['Police'], assumeServer: 'public' },
    ],
    tehbigmadbarbarian: [
        { name: '[Deputy] ? "JJ" ?', factions: ['Police'], assumeServer: 'public' },
    ],
    Tehrani: [
        { name: 'Boris Ivanov', factions: ['Russians'], leader: true },
        { name: 'Hector Guzman', factions: ['Vagos'] },
    ],
    TenguOP: [
        { name: 'Wally Veloce' },
    ],
    TerribleJamie: [
        { name: 'Lavante "L" Lamano', factions: ['GSF'] },
    ],
    Test: [
        { name: 'Test6' },
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
        { name: 'Jaxxon Jones', factions: ['Stable'] },
    ],
    ThatEmoPunk: [
        { name: 'Ezreal Kay-Hoss', factions: ['Rooster'], nicknames: ['EZ', 'E.Z'] },
    ],
    the_halfhand: [
        { name: 'Jack "Sully" Sullivan', factions: ['Rooster'] },
        { name: '[Officer] Oscar Fitzpatrick', factions: ['Police'], nicknames: ['Fitz', 'Patrick'] },
    ],
    TheAaronShaq: [
        { name: '? "Glue Guy" ?', factions: ['Burger Shot'] },
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
        { name: 'Fingle Dan', factions: ['Dans'] },
    ],
    TheDeluxe4: [
        { name: 'Cooper Hart'},
    ],
    TheDogfather82: [
        { name: 'Lucas "Wolfy" Frank', factions: ['SSB'] },
    ],
    TheDondi: [
        { name: 'Arthur Hammond', nicknames: ['The "Doctor"'] },
        { name: '[Officer] Delaney', factions: ['Police'] },
    ],
    TheEazyLife: [
        { name: 'Brandon Valentino', factions: ['Pegasus'], displayName: 0 },
    ],
    theeYAIR: [
        { name: 'Yair Lamas', displayName: 0 },
    ],
    TheGeekEntry: [
        { name: 'Stacey Doyle', factions: ['Mandem'] },
        { name: 'Jenn Bordeaux', nicknames: ['Frenchie', 'French'] },
    ],
    TheHexagonist: [
        { name: '[Deputy] Vincent Glass', factions: ['Police'], displayName: 2 },
    ],
    TheKozak_: [
        { name: '[EMS] Chad Chaddington III', factions: ['Medical'] },
    ],
    theLGX: [
        { name: 'Bryce Miller', nicknames: ['BDawg'], assumeServer: 'whitelist' },
        { name: 'Diego Marquez' },
        { name: 'Dave Myers', displayName: 0 },
        { name: 'Roland Nelson', assumeServer: 'whitelist' },
        { name: '[Deputy] Neil McReal', factions: ['Police'] },
        { name: '[Officer] Roland Nelson', factions: ['Police'], assumeServer: 'public' },
    ],
    TheOnlyWendigo: [
        { name: 'Alexandru Vasquez', factions: ['Rooster'] },
    ],
    Timmac: [
        { name: '[Deputy] T.J. Mack', factions: ['Police'], assumeServer: 'whitelist' },
        { name: 'Gomer Colton', nicknames: ['Gomey'], assumeServer: 'whitelist' },
        { name: '[Trooper] T.J. Mack', factions: ['Police'], assumeServer: 'public' },
    ],
    Timmy2: [
        { name: 'Orlando Jones', factions: ['SSB'], nicknames: ['OJ'] },
        { name: 'Chino G', factions: ['Vagos'] },
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
        { name: '[Deputy] Daisy Dukakis', factions: ['Police'] },
        { name: 'Kassandra Kage' },
    ],
    TinyStunt: [
        { name: '[EMS] Bailey Jade', factions: ['Medical'] },
    ],
    ToastRP: [
        { name: 'Paulie' },
    ],
    Tobiii: [
        { name: '[Development //] Tobiii', factions: ['Development'] },
    ],
    Trainwreckstv: [
        { name: 'Douglas "Doug Buck" Buck', displayName: 0 },
    ],
    TranquilKJ: [
        { name: 'KJ Taylor', factions: ['Pink Gang'], displayName: 0 },
    ],
    trashedpotatopie: [
        { name: 'Marie Ortiz', factions: ['Stable'], displayName: 0 },
    ],
    Traumz: [
        { name: '[Deputy] Edward Thatch', nicknames: ['Captain Moosebeard'], factions: ['Police'], displayName: 2 },
        { name: 'Tim Littleman', displayName: 0 },
    ],
    travpiper: [
        { name: 'Carlos "Cheddar" Sanchez', factions: ['HOA'] },
        { name: '[Deputy] William Gunner', factions: ['Police'], nicknames: ['Willy'] },
        { name: 'Warren Wallace' },
        { name: 'Charlie Colcord' },
        { name: 'Hazard' },
    ],
    traycee: [
        { name: 'Lexi Law', factions: ['Angels'] },
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
    TwistedBones: [
        { name: 'Mark White', displayName: 0 },
        { name: 'Hank Marston', factions: ['Condemned MC'], leader: true, displayName: 0 },
        { name: 'Marcus Black', factions: ['GSF'], displayName: 0 },
    ],
    TwistedManifest: [
        { name: 'Jack Valentino', factions: ['Lunatix'] },
    ],
    UberHaxorNova: [
        { name: 'Siz Fulker', factions: ['HOA'], leader: true, nicknames: ['Zis', 'Ziz', 'uhnSuffer', 'mechanic', reg(/\bloans?\b/), reg(/\bsiz/)] },
        { name: '[Deputy] Barry Briddle', factions: ['Police'], nicknames: [reg(/\bbriddl/)] },
        { name: 'Toh Biggles Fitzcharles', displayName: 0, nicknames: ['Yaes'] },
    ],
    uhLuvi: [
        { name: 'Treyvon Williams', factions: ['GSF'], nicknames: ['Trey'] },
    ],
    uhSnow: [
        { name: '[Trooper] Jackie Snow', factions: ['Police'] },
        { name: 'Mikey Mersion' },
    ],
    Umadbrahlive: [
        { name: 'Leonel Martinez', factions: ['Vagos'], nicknames: ['lion'], displayName: 2 },
        { name: 'Sergio Lopez', factions: ['Marabunta'], leader: true },
        { name: 'Big E', factions: ['SSB'], leader: true, nicknames: ['Big L'], displayName: 0 },
    ],
    Vader: [
        { name: 'Eugene Zuckerberg', nicknames: ['Old Man'] },
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
        { name: '[Deputy] Lewis Collins', factions: ['Police'] },
    ],
    ValorWasTaken: [
        { name: 'Esteban Julio-Cruz-Perez-Rodriguez', factions: ['Marabunta'] },
    ],
    Venomfly: [
        { name: 'Babe Calloway', factions: ['Rooster'], displayName: 0 },
        { name: 'Carolina Reaper' },
    ],
    vanyaa_3D: [
        { name: '[Development //] Vanya', factions: ['Development'], nicknames: ['clothes', 'clothing'], assumeChar: true },
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
    VindiceLIVE: [
        { name: '[Deputy] Oliver Fury', factions: ['Police'] },
    ],
    VinterPhoenix: [
        { name: 'Raymond Frost', factions: ['Vagos'], displayName: 0 },
    ],
    VioletCutie: [
        { name: 'Maisie Hart', factions: ['Britney Gang', 'Rooster', 'Tuner Shop'], displayName: 0 },
    ],
    Viviana: [
        { name: 'Griselda Ambrose', nicknames: ['Granny'] },
        { name: 'Lana Valentine', factions: ['Rooster'] },
    ],
    VNDRIZZLE: [
        { name: 'Basem Shahin' },
    ],
    Voladin17: [
        { name: '[Judge] Tidus Schwinghammer', factions: ['DoJ'] },
    ],
    VTechas: [
        { name: 'Daryl Dixon', factions: ['HOA'], nicknames: ['DRL'] },
    ],
    w00ter: [
        { name: '[Deputy] Peter Rogers', factions: ['Police'] },
    ],
    Wayward: [
        { name: 'Wayne Ardson', factions: ['DoJ'], assumeServer: 'whitelist' },
        { name: 'Angelo "Leo Nardo" Nardo', nicknames: ['Leo'] },
        { name: 'Jack "The Joker" Knaves', nicknames: ['The "Joker"'] },
        { name: '[Deputy] Michael Colt', factions: ['Police'], assumeServer: 'public' },
        { name: 'Bowser' },
    ],
    WeCameAsBecca: [
        { name: '[Dr.] Kennedy Adams', factions: ['Medical'], displayName: 0 },
    ],
    Wehtuns: [
        { name: '[Lawyer //] Lawrence Splainer', factions: ['DoJ'], displayName: 2 },
    ],
    Whippy: [
        { name: 'Irwin Dundee', factions: ['BBMC'], displayName: 2 },
        { name: '[Officer] Crocodile "Croc" Steve', factions: ['Police'], nicknames: ['Cop'] },
        { name: 'James Tinklebottom' },
    ],
    whosremz: [
        { name: 'Remy Brown', factions: ['Mandem'], displayName: 1 },
    ],
    Wiked: [
        { name: 'Dwayne Flores', factions: ['Mandem'], nicknames: ['Golden Boy'], displayName: 0 },
        { name: 'Kyrus Langley', factions: ['SSB'], displayName: 1 },
        { name: 'Truth Flores', displayName: 0 },
    ],
    WillerZ: [
        { name: 'Will Earnz', displayName: 0 },
    ],
    willneff: [
        { name: '"James Marco" St. Marco', nicknames: ['marko', 'marcoing', 'markoing'] },
        { name: "? \"Don's Mother\" ?", nicknames: ['Mama', 'Donna'] },
    ],
    WLVSx: [
        { name: 'Wolfe McCreedy', factions: ['BBMC'], nicknames: ['Wolfie'] },
    ],
    Wolfabelle: [
        { name: '[Deputy] Candice Defitt', factions: ['Police'], displayName: 1 },
        { name: 'Bianca Walters' },
    ],
    Wootpiegames: [
        { name: 'Rick Szhae', factions: ['BBMC'], displayName: 0 },
    ],
    WTFGameNation: [
        { name: '[Dr.] Noah Drake', factions: ['Medical'] },
    ],
    wtfmoses: [
        { name: 'Smooth Williams', factions: ['Stable'] },
    ],
    WuPingNOTEggRoll: [
        { name: 'Wu "Egg Roll" Ping' },
    ],
    wvngie: [
        { name: 'Le Wang', factions: ['Vagos'], nicknames: [reg(/\bwang/)], displayName: 0 },
    ],
    xQcOW: [
        { name: 'Jean "X" Paul', nicknames: ['Ghost Rider', 'Rider'], factions: ['Burger Shot'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jean "X" Paul', nicknames: ['Ghost Rider', 'Rider'], factions: ['Gulag Gang', 'Burger Shot'], displayName: 0, assumeServer: 'public' },
        { name: '[Deputy] Pierre "PP" Paul', factions: ['Police'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jean Pierre', displayName: 0 },
    ],
    Xiceman: [
        { name: '[Deputy] Mike Bayo', factions: ['Police'] },
        { name: 'Mike Wadum', nicknames: ['El Gringo'], displayName: 0 },
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
    XxAshleyxX: [
        { name: 'Sparkle Lee', factions: ['Burger Shot'] },
        { name: 'Naomi Kent', factions: ['Burger Shot'] },
    ],
    yaboiSavageG: [
        { name: 'Salvaje "Savage" Mendoza', factions: ['Vagos'] },
    ],
    YoinksOG: [
        { name: 'Doug Canada' },
    ],
    yooApollo: [
        { name: 'Martin Julio-Perez-Cruz-Rodriguez', factions: ['Marabunta'] },
    ],
    yungxaquafina: [
        { name: 'Antonio Carter Jr', factions: ['SSB'], nicknames: ['AJ'], displayName: 4 },
    ],
    Zaitohro: [
        { name: 'Oswald Tinkerman', factions: ['Lost MC'], displayName: 1 },
    ],
    Zaquelle: [
        { name: '[Officer] Mackenzie Hayes', factions: ['Police'], assume: 'assumeNp' },
    ],
    ZayTyree: [
        { name: 'Renato Ortiz', factions: ['Vagos'], displayName: 0 },
    ],
    Zerkaa: [
        { name: 'Tommy Tate', factions: ['Mandem'], nicknames: ['Tommy T'], displayName: 3 },
    ],
    Zettafrag: [
        { name: 'Kimberly Daniels', factions: ['Condemned MC'], displayName: 0 },
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
    zirnrp: [
        { name: '[A.D.A.] Malcador Sigilite', factions: ['DoJ'] },
        { name: 'Solomon Seerson' },
    ],
    Zoil: [
        { name: 'Skunkz Wallace' },
    ],
    Zotbot: [
        { name: '[Physiotherapist] Leon Marks', factions: ['Medical'] },
    ],
};
