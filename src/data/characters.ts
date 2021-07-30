/* eslint-disable object-curly-newline */

import { FactionRealFull } from './meta';

export type AssumeOther = 'assumeNpNoOther' | 'assumeNp' | 'assumeOther' | 'someOther';

export type AssumeServer = 'whitelist' | 'public' | 'both';

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
    '80bsaget': [
        { name: 'Tim Lee', displayName: 0 },
        { name: '[Officer] Bexar McCree', factions: ['Police'] },
    ],
    Aaoki: [
        { name: '[Deputy] Maddison Bancroft', factions: ['Police'], displayName: 1 },
        { name: 'Shazza Wazza', factions: ['Rooster'], nicknames: ['Shazzam'] },
    ],
    aaron_rp: [
        { name: 'Aaron Alexander', factions: ['BSK'], nicknames: [reg(/double.?a/)], displayName: 0 },
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
        { name: 'Big Bertha', displayName: 0 },
        { name: 'Irma Gawd', factions: ['Rooster'], displayName: 0 },
        { name: 'Ivy Wood' },
    ],
    abbyduren: [
        { name: 'Khrystal Vibez' },
    ],
    AbdulHD: [
        { name: 'Abdul AlRahim', assumeServer: 'whitelist' },
        { name: '[Judge] Ali Habibi', factions: ['DoJ'] },
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
        { name: 'Mari Posa', factions: ['Chaos'], displayName: 0, assumeServer: 'whitelist' },
        { name: '[Officer] Selena Mendoza', factions: ['Police'] },
        { name: 'Hannah Hiltop' },
        { name: 'Maria Poser', factions: ['Gulag Gang'], displayName: 0, assumeServer: 'public' },
    ],
    adnormaltv: [
        { name: 'Ivan Gorbahtjov' },
    ],
    adzno: [
        { name: 'Aaron Melarky', factions: ['Condemned MC'], displayName: 0 },
    ],
    Adzzstarr: [
        { name: '[Dr.] Valentine', factions: ['Medical'] },
    ],
    AfricanSnowball: [
        { name: '[Justice] Buck Stanton', factions: ['DoJ'] },
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
    ],
    aintitadam: [
        { name: 'Scruffy Doodle', factions: ['Burger Shot'] },
    ],
    Airborne: [
        { name: '[Judge] Dennis LaBarre', factions: ['DoJ'] },
        { name: 'Unity', nicknames: ['Cat'] },
    ],
    akaMONKEY: [
        { name: 'Arturo Ortiz', factions: ['Vagos'], nicknames: [reg(/\bar(?:tu|2)/), reg(/\barchu+r/)] },
        { name: 'CamRon "Peanut" Giles', factions: ['SSB'] },
        { name: 'Timoteo "TT" Bushnell', nicknames: ['Rasta'] },
    ],
    aleks: [
        { name: '[Chief of Police] Bobby Smith', factions: ['Police'], leader: true, nicknames: ['Bob', 'Chief'], displayName: 1 },
        { name: '[FIB Agent] Heath Mercer', factions: ['Police'] },
        { name: 'Vasily "V" Sazkaljovich', factions: ['Pegasus', 'Rooster'] },
    ],
    alexten0909: [
        { name: 'Alexander Campbell', factions: ['Angels'], nicknames: ['Alex'], displayName: 3 },
    ],
    Alisha: [
        { name: 'Alisha Wuornos' },
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
        { name: 'Tony Corleone', factions: ['Cleanbois', 'Rooster'] },
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
        { name: 'Fiona Stewart', nicknames: ['Fi-ho-na'], factions: ['Rooster'] },
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
        { name: 'Ursula Leichenberg', factions: ['News'] },
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
    ],
    Baki961: [
        { name: 'Yoshimoto Nakanishi', assumeServer: 'whitelist' },
        { name: '[Officer] Fernando Diego Pablo Juan Esteban Luis Cortez Bonanza II', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    bananabrea: [
        { name: 'Claire Seducer', factions: ['Angels'], assumeServer: 'whitelist' },
        { name: '[Officer] Tyme Reducer', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Officer] Claire Seducer', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Becky Hopper', displayName: 0 },
        { name: 'Juanita Carlita Hernandez', nicknames: ['Flippa'] },
    ],
    BananaDuck: [
        { name: 'Billy Sprinkle', factions: ['GSF'], displayName: 0 },
        { name: 'Jimmy Limbs', displayName: 0 },
        { name: 'Dick Fillet', displayName: 0 },
        { name: 'Ravi Ravson', displayName: 0 },
    ],
    barryscottlive: [
        { name: 'Barry Scott' },
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
        { name: 'Shevy Santanna', factions: ['Vagos'] },
    ],
    BikeMan: [
        { name: 'Chet Summerset', assume: 'assumeNpNoOther' },
    ],
    binoversion: [
        { name: '? "O Dogg" ?', factions: ['SSB'] },
    ],
    Biotoxz_: [
        { name: '[Barbarian /] Bjorn', factions: ['LARPers', 'Rooster'], assumeServer: 'whitelist' },
        { name: '[Barbarian /] Bjorn', factions: ['Police', 'LARPers'], assumeServer: 'public' },
    ],
    BJPofficial: [
        { name: '[Lawyer /] Buford J. Preston', factions: ['DoJ'] },
    ],
    Blaustoise: [
        { name: 'Mickey S', factions: ['Chang Gang'], nicknames: ['Downbad', 'Downrat'], assumeServer: 'whitelist' },
        { name: 'Michael S.', factions: ['Gulag Gang'], nicknames: ['Upgood'], assumeServer: 'public' },
    ],
    bldrs: [
        { name: 'Kaleb "Kleb" Rush', factions: ['HOA'] },
        { name: '[Officer] Ryan Wright', factions: ['Police'] },
    ],
    Blown: [
        { name: 'Taylor "Spaceman" Briggs', factions: ['Burger Shot'] },
    ],
    bLuE622: [
        { name: 'Boe Jangles', factions: ['Chang Gang'], affiliate: true },
    ],
    bmcloughlin22: [
        { name: '[A.D.A.] Lachlan Pike', factions: ['DoJ'] },
    ],
    Bomaah: [
        { name: 'Viper Rodriguez', assume: 'assumeOther' },
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
        { name: 'Adam Nielsen', factions: ['Rooster'], displayName: 0 },
    ],
    breakyx: [
        { name: 'Dris Peters', factions: ['SSB'] },
    ],
    BRIT: [
        { name: 'Tori Corleone', nicknames: ['Bologna'], factions: ['Rooster'] },
    ],
    Brofain: [
        { name: 'Kodak Bodega' },
    ],
    buddha: [
        { name: 'Lang Buddha', factions: ['Cleanbois', 'Rooster'], leader: true, nicknames: ['Circle Andy'], assumeServer: 'whitelist' },
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
        { name: '? "TTS" ?' },
        { name: 'Sanic Speedrun' },
        { name: 'Chi "Chi-ku" Ku' },
        { name: 'Plankton ?' },
        { name: 'Bruce "The Dank Knight" Strayne' },
        { name: 'Brocky Potage', displayName: 1 },
        { name: 'Gordo Ramsay', displayName: 0 },
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
        { name: "[Lawyer /] Shannon O'Banion", factions: ['DoJ'], displayName: 0 },
    ],
    Cathie: [
        { name: '[Deputy] Anita May', factions: ['Police'] },
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
    Choi: [
        { name: '[Dr.] Choi Zhangsun', factions: ['Medical'], assume: 'assumeOther' },
    ],
    ChrisTombstone: [
        { name: 'Flop Dugong', assumeServer: 'whitelist' },
        { name: '[Deputy] Flop Dugong', factions: ['Police'], assumeServer: 'public' },
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
    CloudyDL: [
        { name: 'Scotty Dixon', factions: ['BSK'] },
    ],
    CoconutB: [
        { name: '? ?' },
    ],
    CodeMiko: [
        { name: 'Code Psyko', displayName: 0 },
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
    CptCheeto: [
        { name: '[Officer] Scott Ridley', factions: ['Police'] },
    ],
    craigysmith89: [
        { name: 'Frank Junior-Smith', factions: ['Vagos'], nicknames: ['Frank Jr Smith', 'Scottish'], displayName: 3 },
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
        { name: 'Ryan Parker', factions: ['Lost MC'] },
        { name: '[Lawyer /] Kevin Shaw', factions: ['DoJ'] },
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
    Dadulio: [
        { name: '[Deputy] Franky Dulio', factions: ['Police'] },
    ],
    daisykiss: [
        { name: 'Molly Rollin', factions: ['SSB'], displayName: 0, assume: 'assumeNpNoOther' },
    ],
    DanGheesling: [
        { name: 'Tanner Buttermaker', displayName: 1 },
    ],
    DanHawk1ns: [
        { name: 'Benny Gomez', factions: ['Burger Shot'] },
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
    Deansocool: [
        { name: 'Dean Quincy', factions: ['NBC'], displayName: 0, assume: 'assumeNpNoOther', assumeServer: 'whitelist' },
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
        { name: '[Development /] Denis3D', factions: ['Development'], nicknames: ['3D'] },
    ],
    devolore: [
        { name: '[Officer] Cassius Kennedy', factions: ['Police'], nicknames: ['Cash'] },
    ],
    dibitybopty: [
        { name: '[Officer] Gus Gorman', factions: ['Police'] },
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
        { name: 'Wyatt Mersion', factions: ['Mersions'] },
    ],
    Dorken: [
        { name: 'Valentina' },
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
    DROwSeph420: [
        { name: 'John "Geno" Collins', factions: ['GSF'] },
    ],
    Dunrunnin12: [
        { name: 'Thomas Dwayne', nicknames: ['The Narrator'], displayName: 0 },
        { name: 'Nay "Delamain" Rater' },
    ],
    durptastic: [
        { name: 'Otis Goody', factions: ['Burger Shot'] },
    ],
    dwjft: [
        { name: 'Dean Watson', leader: true },
        { name: '[Officer] Derby West Bromwich', factions: ['Police'], displayName: 3 },
        { name: '[Development /] DW', factions: ['Development'], nicknames: ['tinkering'] },
    ],
    Dyoti: [
        { name: '[Deputy] Wyatt Cole', factions: ['Police'], assumeServer: 'public' },
    ],
    Dyrus: [
        { name: 'Louis Hill', displayName: 0 },
    ],
    EagleAye: [
        { name: 'Eve Summers', factions: ['Rooster'] },
    ],
    eebern: [
        { name: 'Huck Guthrie', factions: ['HOA'] },
    ],
    either: [
        { name: 'Jaden Christopher' },
    ],
    EliotJuun: [
        { name: '[Officer] Douglas Fir', factions: ['Police'], displayName: 1 },
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
        { name: '[Judge] Antigone Weston', factions: ['DoJ'], assumeServer: 'whitelist' },
        { name: '[Officer] Antigone Weston', factions: ['Police'], assumeServer: 'public' },
        { name: '[Judge] Whitney Crawford', factions: ['DoJ'] },
        { name: 'Adrienne West' },
        { name: 'Meggie "Megan" Right' },
        { name: 'Bree Matthews' },
        { name: 'Demi Black' },
    ],
    EvilShatner: [
        { name: 'Anna Swallows', displayName: 0 },
    ],
    EsfandTV: [
        { name: '[Deputy] Cletus Cornwood', factions: ['Police'] },
        { name: 'Ali Farmand', displayName: 0 },
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
    Fiendota: [
        { name: 'Jonathan "Magnum" Humes', nicknames: [reg(/\bP\.?\s*I\b/)] },
    ],
    Five0AnthO: [
        { name: '[Trooper] Tony Andrews', factions: ['Police'], highCommand: true, leader: true },
        { name: 'Rhode Block', factions: ['ASRR'], displayName: 0 },
    ],
    FloMcNasty_TV: [
        { name: 'Richard Chiclets', factions: ['Burger Shot'], nicknames: ['Dick Chiclets'], displayName: 3 },
    ],
    Forlorn79: [
        { name: '[EMS] Amoris Pax', factions: ['Medical'] },
    ],
    forsen: [
        { name: 'Sven Snusberg', factions: ['Cleanbois'] },
        { name: 'Mason Foorhees' },
    ],
    FortyOne: [
        { name: 'Jose Martin Perez', nicknames: ['JMP'] },
        { name: '[Deputy] John Archer', factions: ['Police'] },
        { name: 'Lucas Ortiz', displayName: 0 },
        { name: 'Don Russo', displayName: 0 },
        { name: 'Jacob "Funny Man" Storm' },
        { name: 'Arious "Breezy" Campbell' },
    ],
    FourMilli: [
        { name: 'Brad Bett', factions: ['NBC'] },
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
        { name: 'April Fooze', displayName: 0, assumeServer: 'whitelist' },
        { name: '[Ranger] Connie Clark', factions: ['Police'], displayName: 2, assumeServer: 'public' },
    ],
    Fyzicul: [
        { name: '[Shaman /] Keith "Lando" Wanderlust', factions: ['LARPers', 'Rooster'], nicknames: ['Stormborn', 'Shaman', 'Mountain Kingdom'], displayName: 0 },
    ],
    Gabz: [
        { name: '[Development /] Gabz', factions: ['Development'], nicknames: ['3D'] },
    ],
    GameDemented: [
        { name: '[Deputy] Peter Johnson', factions: ['Police'] },
    ],
    Garek: [
        { name: '[Cleric /] Burt "Gloryon" Beans', factions: ['LARPers', 'Rooster'], nicknames: ['Cleric'] },
    ],
    GattisTV: [
        { name: 'Carlos Guzman', factions: ['Vagos'], displayName: 0 },
    ],
    Gavbin_: [
        { name: '[Judge] Gavin Holliday', factions: ['DoJ'] },
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
        { name: '[Paladin /] Stagdancer', factions: ['LARPers', 'Rooster'], nicknames: ['Gea'] },
        { name: '[Officer] Bennett Calhoun', factions: ['Police'] },
    ],
    gibbs_gg: [
        { name: 'Walter Franks', factions: ['Condemned MC'], displayName: 0 },
    ],
    goldelena: [
        { name: 'August Vakarian' },
    ],
    GoldGlove: [
        { name: 'Marvin King', nicknames: ['Marv'], displayName: 3 },
    ],
    GrandPOObear: [
        { name: 'Mick Flair', displayName: 0 },
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
        { name: '[Officer] Jim Underwood', factions: ['Police'], nicknames: ['437'] },
        { name: '[Development /] GTAWiseGuy', factions: ['Development'], nicknames: ['Handling', 'Fixes', 'Fixing', 'Tuning', reg(/\btuners?(?:\s*\w*)*leaks/)] },
        { name: 'Igor Skovacic' },
        { name: 'Big M', displayName: 0 },
        { name: 'Daequan "Double D" DeMarco', factions: ['SSB'] },
        { name: 'RayRay' },
        { name: 'Maury Mersion', factions: ['Mersions'] },
    ],
    GutturalSteve: [
        { name: 'Tomathy Steampipe', factions: ['Burger Shot'] },
    ],
    HARMSwahy: [
        { name: 'Blaine Burke', factions: ['Angels'] },
    ],
    Harry: [
        { name: 'Harry Brown', factions: ['Cleanbois', 'Pegasus', 'Rooster'] },
    ],
    HasanAbi: [
        { name: 'Humberto Antonio Donato Pecorino', factions: ['Cleanbois', 'Rooster'], nicknames: ['Don', 'Donnie', reg(/\bOva[h']? here\b/)], displayName: 5 },
    ],
    Hedisaurus: [
        { name: '[EMS] Hedi Saurus', factions: ['Medical'], assume: 'assumeNpNoOther', assumeServer: 'whitelist' },
        { name: '[Dispatch] Ramona Celeste', factions: ['Police'], displayName: 1 },
        { name: '[Ranger] Ramona Celeste', factions: ['Police'], displayName: 1, assumeServer: 'public' },
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
        { name: '[Justice] Katya Zamalodchikova', factions: ['DoJ'], displayName: 1 },
        { name: 'Jane Obama', displayName: 0 },
        { name: 'Jane Souls', displayName: 0 },
        { name: 'Rounda Block', factions: ['ASRR'], displayName: 0 },
        { name: "Kayden Dell'Anno" },
    ],
    HonathanTV: [
        { name: '[Deputy] Honathan Yolo', factions: ['Police'] },
    ],
    Hoss: [
        { name: 'Chip Wheeler', factions: ['BBMC'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Rocky Balboner', displayName: 0, assumeServer: 'public' },
    ],
    Hotted89: [
        { name: '[Deputy] Matthew Espinoz', factions: ['Police'], nicknames: ['Airspinoz', 'Air 1 Andy'] },
        { name: 'Joaquin "JJ" Jimenes', factions: ['Vagos'] },
        { name: 'Allen Widemann', factions: ['Chang Gang'] },
    ],
    huddy_nz: [
        { name: 'Ash Huddy Hudson', factions: ['Lunatix'] },
    ],
    Huntag: [
        { name: 'Freddy Fastfingers', factions: ['BBMC'], displayName: 0 },
    ],
    Hurnani: [
        { name: 'Borat ?' },
        { name: 'Bruno Brown', displayName: 0 },
        { name: 'James-Kamea Brown', factions: ['Vagos'] },
    ],
    HutchMF: [
        { name: 'Hutch Hutcherson', factions: ['Chang Gang'], nicknames: [reg(/\bkilled a man/)] },
        { name: '[Deputy] Jaryd Peak', factions: ['Police'] },
        { name: 'Drew "Dead Eye Drew"', nicknames: ['DeadEye'] },
        { name: 'Hutch Hendrickson' },
    ],
    HydraPlz: [
        { name: 'Gandalf "Stankyleg" Butters', factions: ['ASRR'] },
    ],
    IAmSoul_RP: [
        { name: 'Johnathen Riker' },
    ],
    iddqd: [
        { name: 'Jesse Cree', factions: ['BBMC'] },
    ],
    IHeartGaming: [
        { name: 'Markuz Jackelson', factions: ['GSF'], nicknames: ['Meatball', 'Meat', 'Meatwad'] },
    ],
    ikittyyyy: [
        { name: 'Kitty Dream', factions: ['Burger Shot', 'Rooster'] },
    ],
    ilenol: [
        { name: 'Max Larson', factions: ['Pegasus', 'Rooster'], displayName: 0 },
    ],
    ImClammy: [
        { name: 'AK', factions: ['SSB'] },
        { name: 'Derek Monroe' },
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
    ItsJustJosh: [
        { name: 'Levi Dawson', factions: ['SSB'] },
    ],
    ItsLeslie: [
        { name: '[Wizard /] KyrinChan "Leyla" WeuhBou', factions: ['LARPers', 'Rooster'], nicknames: ['Nightingale', 'Wizard', 'Embervale'] },
    ],
    ItsLSG: [
        { name: '[Officer] Jack Miller', factions: ['Police'] },
    ],
    ItsSammyP: [
        { name: 'Mando Thompson', factions: ['SSB'] },
        { name: 'Tyrone "Big T" Thompson', factions: ['SSB'] },
    ],
    ItsSlikeR: [
        { name: 'Abe Moe', nicknames: ['Don', 'Baldy', 'Bald'], displayName: 0, assumeServer: 'public' },
        { name: 'Abraham Mohammed' },
    ],
    JaboodyShow: [
        { name: 'Jerry Curl', displayName: 0 },
        { name: 'Vincent' },
    ],
    Jack: [
        { name: 'Jack Cortair', factions: ['NBC'] },
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
    Javaaaa: [
        { name: 'Joseph Yorinobu', nicknames: ['Majima', 'Goro'], displayName: 3 },
        { name: 'Lillia Claurel' },
    ],
    jay4871: [
        { name: 'Dave Perry', displayName: 0 },
    ],
    JayAitch5: [
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
        { name: 'Miles Landon', factions: ['Pegasus', 'Rooster'], assumeServer: 'whitelist' },
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
    jimmytulip: [
        { name: 'Wayne Biggaz', factions: ['Chang Gang'], nicknames: [reg(/\bwe+y+n/), reg(/\bwayne/)] },
    ],
    JJLake: [
        { name: 'Jay Jarvis', factions: ['Pegasus'] },
    ],
    JoblessGarrett: [
        { name: 'Garrett Jobless', factions: ['Chang Gang'] },
        { name: '[Officer] Garry Berry', factions: ['Police'] },
    ],
    Joeeigel: [
        { name: 'Arthur MacNee', factions: ['DoJ', 'Rooster'], displayName: 0 },
    ],
    JoeSmitty123: [
        { name: '[Officer] Michael Murphy', factions: ['Police'] },
    ],
    Jogiiee: [
        { name: 'Jessie Jugg' },
        { name: 'Eva Wall' },
        { name: '[Dr.] Emma Gaine', factions: ['Medical'] },
        { name: '[Lawyer /] Maggie Kayden', factions: ['DoJ'] },
    ],
    Jonthebroski: [
        { name: '[Mayor] Denzel Williams', factions: ['Cleanbois', 'Pegasus', 'Rooster'], nicknames: ['The "Cleaner"', 'Presidente'] },
        { name: '[Officer] Johnny Divine', factions: ['Police'], displayName: 0 },
        { name: 'Dio Ivanov', factions: ['Russians'] },
        { name: 'Holden D. Block', factions: ['ASRR'], displayName: 0 },
    ],
    JoshOG: [
        { name: 'Mario Le-Pipe', factions: ['Chang Gang'], affiliate: true, displayName: 0 },
    ],
    JOVIAN: [
        { name: '[Deputy] Billiam Williams', factions: ['Police'], displayName: 1 },
    ],
    JPKMoto: [
        { name: '[A.D.A.] Odessa Pearson', factions: ['DoJ'] },
        { name: 'Nora Dupres' },
        { name: 'Zee Nanakaze Mathers' },
    ],
    Jubby: [
        { name: 'Ricardo Perez', factions: ['Burger Shot'], displayName: 1 },
    ],
    Judd: [
        { name: '[Chief Justice] Coyote Russell', factions: ['DoJ'], displayName: 1, assumeServer: 'whitelist' },
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
        { name: 'Nancy Drew' },
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
    kClient: [
        { name: 'Daquan "Peanut" Dumas', factions: ['NBC'] },
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
        { name: 'Jupiter Adams', displayName: 0 },
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
    KillrBeauty: [
        { name: 'Catherine Scratch', factions: ['Lost MC'], nicknames: ['Cat'], displayName: 3 },
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
        { name: '[Lawyer /] Gill Schultz', factions: ['DoJ'], displayName: 1 },
        { name: 'Max Muller', displayName: 0 },
    ],
    Kitboga: [
        { name: 'Edna Moose' },
        { name: '[Deputy] Claire Annette Reed', factions: ['Police'] },
    ],
    Kite61: [
        { name: 'Rusty Johnson' },
    ],
    Kiva: [
        { name: 'Andi Jones', factions: ['HOA'], nicknames: ['Ant'], displayName: 3 },
        { name: 'Natalie ?', nicknames: ['not andi', 'not ant'], displayName: 1 },
        { name: 'Navi Gates' },
    ],
    Kiwo: [
        { name: '[Officer] Lauren Forcer', factions: ['Police'], assumeServer: 'whitelist' },
        { name: '[Officer] Maisy Graves', factions: ['Police'], assumeServer: 'public' },
        { name: 'Mia Mersion', factions: ['Pegasus'] },
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
        { name: '[Officer] Francis Francer', factions: ['Police'], displayName: 1 },
        { name: 'Otto Delmar', nicknames: ['race', 'racing'] },
        { name: '[Development /] Koil', factions: ['Development'], nicknames: ['Code'] },
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
        { name: 'Hampton Brandon', nicknames: ['TTD', 'Ten Toes Down'] },
        { name: 'Tame "The Mandalorian" Saxon', nicknames: ['Mandolorian'] },
        { name: 'Hat Carl', nicknames: ['The Matador'], displayName: 0 },
        { name: "[Lawyer /] Rory O'Banion", factions: ['DoJ'], displayName: 0 },
        { name: 'Wyatt Derp', factions: ['Lost MC'] },
        { name: 'Pal Gore' },
    ],
    kyliebitkin: [
        { name: '[Deputy] Brittany Angel', factions: ['Police'], nicknames: ['Angle'] },
        { name: 'Mary Mushkin', displayName: 0 },
    ],
    Jackhuddo: [
        { name: 'Shane Powers', nicknames: ['ShaneO', 'ShanO'] },
        { name: 'Hubbo Samson' },
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
    LeWolfy: [
        { name: '[Deputy] Dante Wolf', factions: ['Police'] },
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
        { name: '[Lawyer /] Lees Grey', factions: ['DoJ'] },
    ],
    Lisilsanya: [
        { name: '[EMS] Lei Sanya', factions: ['Medical'], nicknames: ['Lasagna'], displayName: 0 },
    ],
    Loorara: [
        { name: 'Olivia Garcia', factions: ['BBMC'], nicknames: ['Liv', 'Livvy', 'Olives'], displayName: 0 },
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
    Lt_Custard: [
        { name: 'Collin McKinley', factions: ['BBMC'], displayName: 0 },
    ],
    Lt_Raven: [
        { name: '[Officer] Vladimir Raven', factions: ['Police'], highCommand: true },
    ],
    LtSerge: [
        { name: '[Dr.] Serge Cross', factions: ['Medical'], displayName: 2 },
    ],
    Lucky_RP: [
        { name: 'Marlo Stanfield', nicknames: [reg(/ma?rlo/)] },
    ],
    LuckyxMoon: [
        { name: '[Judge] ? Devereaux', factions: ['DoJ'] },
        { name: '[Judge] Jessica Wesker', factions: ['DoJ'] },
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
        { name: 'Mayumi Himura' },
    ],
    Lyndi: [
        { name: 'Violet Van Housen', factions: ['Angels'], assumeServer: 'whitelist' },
        { name: '[Officer] Violet Van Housen', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Willow Wolfhart', factions: ['DoC'] },
    ],
    Lysium: [
        { name: 'Benji Ramos', factions: ['Vagos'], nicknames: ['B'] },
        { name: 'Dean Duncan', factions: ['DoC'] },
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
        { name: '[Officer] Domenic Toretti', factions: ['Police'] },
        { name: 'Ike Block', factions: ['ASRR'], displayName: 0 },
        { name: '[Lawyer /] Jerry Callow', factions: ['DoJ'], displayName: 1 },
        { name: 'Pepe Silvia' },
    ],
    Markiplier: [
        { name: 'Stan Wheeler' },
    ],
    MartinCreek: [
        { name: 'Bertha Clark' },
    ],
    MasterMisuri: [
        { name: 'Jesus Antonio Lopez Contreras', factions: ['HOA'] },
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
        { name: '[Deputy] Roy Armstrong', factions: ['Police'] },
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
    Merrcy: [
        { name: 'Cody Palmer', factions: ['Rooster'], displayName: 0 },
    ],
    Mervin: [
        { name: 'Mervin Potts' },
    ],
    Mexi: [
        { name: '[Deputy] Clarence Williams', factions: ['Police'], displayName: 1 },
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
    MikeTheBard: [
        { name: 'Hubcap Jones', factions: ['Burger Shot'], displayName: 0, assumeServer: 'whitelist' },
        { name: 'Jack Nova', displayName: 0 },
        { name: '[Ranger] Manny Multchbottom', factions: ['Police'], displayName: 0, assumeServer: 'public' },
    ],
    mikezout14: [
        { name: '[Deputy] Michael Rodgers', factions: ['Police'], assume: 'assumeNpNoOther' },
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
        { name: 'Mina Rocket', factions: ['Burger Shot'], displayName: 0 },
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
        { name: 'Kirk Jerkems', factions: ['Rooster'], displayName: 0 },
    ],
    Moboking: [
        { name: '[Ranger] Ellis Pinzon', factions: ['Police'], nicknames: ['Ronaldo'], assumeServer: 'whitelist' },
        { name: 'Aleksander Bogorov', factions: ['Angels'], nicknames: ['Aleks'], displayName: 3, assumeServer: 'whitelist' },
        { name: '[Officer] Aleks Sazkaljovich', factions: ['Police'], displayName: 1, assumeServer: 'public' },
        { name: 'Elijiah "Middle E" Parks', factions: ['SSB'] },
    ],
    moistcr1tikal: [
        { name: 'Charles White', displayName: 0 },
    ],
    MOONMOON: [
        { name: '[Officer] Lenny Hawk', factions: ['Police'], nicknames: ['Renegade'], displayName: 1, assume: 'assumeNp' },
        { name: '[Shadowlord /] Bernice Caldershot', factions: ['LARPers'] },
        { name: 'Ro Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Maximilian "Yung Dab" Thoroughbred', nicknames: ['The "Gnome"', 'Yung', 'Dab', 'Max'], displayName: 0 },
    ],
    Moose_Taffy: [
        { name: 'Patar Bellosh', factions: ['NBC'], assume: 'assumeOther' },
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
    MsTeamKK: [
        { name: 'Riley Carter' },
    ],
    MurderCrumpet: [
        { name: 'Cindy Lou' },
    ],
    MurphyBraun: [
        { name: '[Justice] Holden', factions: ['DoJ'] },
        { name: 'Marvin Peanut', nicknames: ['Marv'] },
        { name: '[Lawyer /] Murphy Braun', factions: ['DoJ'], displayName: 0 },
    ],
    Myladyballs: [
        { name: 'Veronica Garcia', factions: ['Vagos'] },
    ],
    Myles_Away: [
        { name: 'Whitley Booth', factions: ['Condemned MC', 'Rooster'], nicknames: ['Pirate'] },
    ],
    Mythematic: [
        { name: 'Mike Rosoftsam', affiliate: true },
    ],
    Nakkida: [
        { name: '[Ranger] Tessa Lamb', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: 'Tessa Lamb', factions: ['Gulag Gang'], assumeServer: 'public' },
        { name: 'Taylor "Onyx" White', factions: ['Police'] },
        { name: 'Rachel Parker' },
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
        { name: 'Moses Khan', factions: ['Mandem'], displayName: 0 },
    ],
    Nerdandi: [
        { name: 'Petunia Susan Brookshire', factions: ['Rooster'] },
    ],
    netsirk: [
        { name: '[EMS] Nettie Machete', factions: ['Medical'] },
    ],
    neutreN: [
        { name: 'Octavio "Goofy" Stenberg', nicknames: ['Hypergoof', 'Octane'] },
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
        { name: 'Leslie Lingberg', displayName: 0, nicknames: ['Ling'] },
    ],
    Nikez: [
        { name: '[Development /] Nikez', factions: ['Development'] },
        { name: 'Nick Simone', displayName: 0 },
        { name: '[Officer] Cody Sharp', factions: ['Police'] },
    ],
    NikkisARiot: [
        { name: '[Deputy] Jenny Hall', factions: ['Police'], nicknames: [reg(/\bje\S{1,3}y/)] },
    ],
    Nmplol: [
        { name: 'Buddy Black' },
    ],
    NoElusionz: [
        { name: 'Bobby Schmiguel', factions: ['BSK'], nicknames: ['Bobby Beats'], displayName: 3 },
    ],
    noKingu: [
        { name: '[Deputy] Henri King', factions: ['Police'] },
    ],
    NotoriousNorman: [
        { name: 'Chips Ahoy' },
    ],
    Nottics: [
        { name: 'Raymundo Ortiz', factions: ['Vagos'], nicknames: [reg(/\br+ay/), reg(/\bmundo/)] },
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
        { name: '[Lawyer /] Benjamin Crane', factions: ['DoJ'] },
        { name: '[Justice] Ray Montag', factions: ['DoJ'] },
        { name: 'Busta Block', factions: ['ASRR'], displayName: 0 },
    ],
    Octopimp: [
        { name: '[Sorceror /] Chut McMillan', factions: ['LARPers', 'Rooster'], nicknames: ['Chut The Magnificent', 'Sorcerer'] },
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
    OhMadOne: [
        { name: '[Lawyer /] Ginzu Okada', factions: ['DoJ'] },
    ],
    OllyPop: [
        { name: 'Ivy Poppins' },
        { name: 'Evee Poppins' },
    ],
    omie: [
        { name: 'Marty Shanks', factions: ['Gulag Gang', 'Burger Shot'], nicknames: [reg(/\bburger/)], assumeServer: 'public' },
        { name: 'Marty Banks', assumeServer: 'whitelist' },
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
    ],
    PacifistV: [
        { name: 'Merry Achi', factions: ['Rooster'], displayName: 0 },
    ],
    PapaChip: [
        { name: 'Channing "Chain" Turner', factions: ['BBMC'] },
    ],
    PapaDrgnz: [
        { name: 'Thur Teen', factions: ['Prison'], displayName: 0 },
    ],
    Pengwin: [
        { name: '[Deputy] Jerry Perkins', factions: ['Police'] },
        { name: 'Dustin "Dark Shadow" Manson' },
        { name: 'Kenneth "Ken-sama" Foreman', factions: ['Burger Shot'] },
    ],
    PENTA: [
        { name: '[Deputy] Randy Wrangler', factions: ['Police'], nicknames: [reg(/\bwrang/), 'Court'] },
        { name: 'Jordan Steele', displayName: 0, nicknames: ['"Parking" God', 'Phoenix Messiah'] },
        { name: 'Ricky Robins' },
        { name: '? "Gamba Kid" ?', nicknames: ['Gamba', 'Gambling'] },
        { name: 'Bob Smith', factions: ['Vagos'], nicknames: ['B0b Smith', 'B0b'], displayName: 3 },
        { name: 'Mike Block', factions: ['ASRR'], leader: true, displayName: 0 },
        { name: 'Chase Clouter', displayName: 0 },
        { name: 'Karen Karenly' },
        { name: 'Jane Obama', displayName: 0 },
    ],
    peterparkTV: [
        { name: 'Peener Pogue', factions: ['Rooster'] },
    ],
    Pez_Br0: [
        { name: 'Pez Speedwagon', factions: ['BBMC'] },
        { name: 'Pezzy Pee' },
    ],
    PlasticLittle: [
        { name: 'Parson "Frosty" Brown', factions: ['Lost MC'] },
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
    Polen: [
        { name: 'Adam Peterson', displayName: 0 },
    ],
    Pons: [
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
    PsiSyn: [
        { name: '[Officer] Lucio Panini', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    Pssychotic: [
        { name: 'Jason Paul', factions: ['Lost MC'], nicknames: ['JP'] },
        { name: 'Hades', nicknames: ['Dog'] },
    ],
    PuckNatorGaming: [
        { name: 'Tate Urchips', factions: ['Prison'], displayName: 0 },
    ],
    puddledux: [
        { name: 'Jake Rake', factions: ['Prison'], displayName: 0 },
    ],
    Purge9090: [
        { name: 'Jack Frent', factions: ['DoC'], displayName: 0 },
    ],
    qMARIOx: [
        { name: 'Fernando "Mario" Reyes', factions: ['Chaos'], nicknames: ['"Mario" from the Barrio'] },
    ],
    qurquru: [
        { name: '[Officer] Vladimir Reznik', factions: ['Police'] },
        { name: 'Pepe Ramos', factions: ['Vagos'], displayName: 0 },
    ],
    Ragonath: [
        { name: 'Maxwell Devitt', displayName: 0 },
        { name: 'Ezekiel "Zeke" Stahl', factions: ['Prison'], displayName: 0 },
    ],
    Raided: [
        { name: '[Officer] Gage Draider', factions: ['Police'] },
        { name: '[Development /] Raided', factions: ['Development'] },
    ],
    raine: [
        { name: 'Penny Farthing', factions: ['Rooster'] },
    ],
    Ramee: [
        { name: 'Ramee El-Rahman', factions: ['Chang Gang'], nicknames: ['The "Warlord"', 'The "Vulture"', 'SBS Patient-0'] },
        { name: '[Ranger] Conan Clarkson', factions: ['Police'] },
    ],
    Rasta: [
        { name: 'Dunn Robinson', assume: 'assumeOther' },
        { name: 'Mary Livingston', displayName: 0 },
    ],
    RatedEpicz: [
        { name: 'Randy Bullet', factions: ['Chang Gang'], nicknames: ['Lazy-Eye'], assumeServer: 'whitelist' },
        { name: 'Roundy Buffet', factions: ['Gulag Gang'], nicknames: ['Randy', 'Bullet'], assumeServer: 'public' },
        { name: '[Trooper] AJ Hunter', factions: ['Police'], nicknames: ['207'] },
    ],
    Ray__C: [
        { name: 'Raymond "Ray" Romanov', factions: ['Cleanbois', 'Rooster'], nicknames: ['Ray', reg(/\brussia/)], assumeServer: 'whitelist' },
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
        { name: 'Mona Sanchez', assume: 'assumeOther' },
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
    RevRoach: [
        { name: "Happy D'Klown" },
    ],
    RickMongoLIVE: [
        { name: '[D.A.] Rick Mongo', factions: ['DoJ'], assume: 'assumeNpNoOther' },
    ],
    RiZRP: [
        { name: 'Nikita Reznikov', factions: ['Pegasus', 'Rooster'] },
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
        { name: 'Sherry Paie', factions: ['Burger Shot'], displayName: 1, assumeServer: 'whitelist' },
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
    s0upes: [
        { name: '[Officer] Silas Grimmer', factions: ['Police'] },
        { name: 'James "Apples" Apeller' },
        { name: 'Chadley ?' },
        { name: 'Ryder S. Block', factions: ['ASRR'], displayName: 0 },
        { name: 'Ezekiel "Zero" Rogaine' },
    ],
    Saiiren: [
        { name: 'Ai "Egg" Musori', nicknames: ['Bitch'], factions: ['LARPers', 'Rooster'], displayName: 0 },
        { name: '[Deputy] Yuu Gondai', factions: ['Police'], nicknames: ['Yu', 'Yoo', 'Gon Die'] },
    ],
    Sal_Rosenberg: [
        { name: 'Sal Rosenberg' },
        { name: 'Debo Davis', factions: ['GSF'] },
    ],
    Sams: [
        { name: 'Dimitri Barkov', factions: ['HOA'] },
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
    SeaNanners: [
        { name: 'Ronjulio Escjulio' },
    ],
    Selvek: [
        { name: 'Jeffrey Price', displayName: 0 },
        { name: '[Officer] Jack Sawyer', factions: ['Police'] },
    ],
    SgtApollo: [
        { name: 'Salem Barghouthi', factions: ['NBC'] },
    ],
    shadiko: [
        { name: 'Alex Domino', factions: ['Rooster'], displayName: 0 },
    ],
    shaggy_steve: [
        { name: '[Deputy] Jimmy Gordon', factions: ['Police'] },
    ],
    Sharaadrick: [
        { name: '[Officer] Marcel King', factions: ['Police'], assumeServer: 'public' },
    ],
    ShawW0w: [
        { name: 'Garry Roche', factions: ['Condemned MC'], displayName: 0 },
    ],
    Shindur: [
        { name: '[Deputy] Joey Keys', factions: ['Police'] },
    ],
    shiny: [
        { name: '[Officer] Honey Buns', factions: ['Police'], nicknames: ['D-21'] },
        { name: 'Pebbles ?', nicknames: ['Dog'] },
        { name: '[Archdruid /] Clyde "Meowfurryon" Eastside', factions: ['LARPers', 'Rooster'], nicknames: ['Druid', 'Archdruid', 'Malfurryon'] },
    ],
    Shortyyguy: [
        { name: 'Eddie Delish' },
    ],
    Shotz: [
        { name: 'Vinny Pistone', factions: ['Chang Gang', 'Chaos'], assumeServer: 'whitelist' },
        { name: 'Vinny Pistone', factions: ['Gulag Gang'], assumeServer: 'public' },
        { name: 'Mr J', factions: ['Chang Gang'], displayName: 0 },
        { name: '[Officer] John Mineo', factions: ['Police'] },
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
        { name: '[Officer] Joel Garcia', factions: ['Police'], nicknames: [reg(/\bcop\b(?!.+\bcrim)/), 'trying out cop'] },
    ],
    SilentSentry: [
        { name: 'Ron Otterman', factions: ['News'], nicknames: [reg(/🎥/)], displayName: 0 },
        { name: 'Michael Michaels Jr.', nicknames: ['MMJR'], displayName: 0 },
        { name: 'Iroquois "Snake" Plisken', displayName: 0 },
        { name: 'Ziggy Flint', nicknames: [reg(/🌿/)], displayName: 0 },
    ],
    silky_rp: [
        { name: 'Darnell "Baby D" Davis', factions: ['SSB'] },
    ],
    Simo: [
        { name: '[Lawyer /] Reggie Might', factions: ['DoJ'], assumeServer: 'whitelist' },
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
        { name: 'Wayne Kerr' },
    ],
    Skelasoldier: [
        { name: 'Raymond Delprince', factions: ['SSB'], displayName: 0 },
    ],
    SkipGently: [
        { name: 'John Riggs' },
    ],
    skippypoppin: [
        { name: 'Kevin Whipaloo', factions: ['Burger Shot'], leader: true, displayName: 0 },
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
    Smaczny: [
        { name: 'Conrad Gross' },
    ],
    SmithyFPS: [
        { name: 'Craig ?', factions: ['SSB'], nicknames: ['Crackhead Craig'], displayName: 3, assume: 'assumeNpNoOther' },
    ],
    smo_och: [
        { name: 'Mike Smoore', factions: ['Vagos'], displayName: 0 },
    ],
    SmokySloth: [
        { name: 'Bovice Wilkinson', factions: ['Prison'] },
        { name: 'Tayvadius "Chef" Jamarcus Livingston III', factions: ['GSF'] },
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
    Ssaab: [
        { name: '[Chief of Police] Sam Baas', factions: ['Police'], nicknames: ['Samir', 'Baasem'], displayName: 2 },
        { name: 'Al Saab', factions: ['Cleanbois', 'HOA'], displayName: 2 },
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
        { name: '[Officer] Frank Williams', factions: ['Police'], displayName: 1, assumeServer: 'whitelist' },
        { name: '[Chief of Police] Frank Williams', factions: ['Police'], displayName: 1, assumeServer: 'public' },
    ],
    Striking_Fast: [
        { name: 'Gerard "Dewey" Hawthorne', nicknames: ['Dewie'], factions: ['Rooster'] },
    ],
    SullyRP: [
        { name: 'Jack "Sully" Sullivan' },
    ],
    summit1g: [
        { name: '[Deputy] John Charleston', factions: ['Police'], assumeServer: 'whitelist' },
        { name: 'Charles "Chawa" Johnson', factions: ['Chang Gang'] },
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
        { name: 'Fred Fredrick', factions: ['LARPers', 'Rooster'], nicknames: ['Necrolord', 'Ranger'], displayName: 3 },
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
        { name: 'Dreah Johnson', factions: ['Rooster'] },
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
        { name: 'Miguel Almerion' },
    ],
    Sykkuno: [
        { name: 'Yuno Sykk', factions: ['Cleanbois', 'Rooster'], displayName: 1, assumeServer: 'whitelist', assumeChar: true },
        { name: '[Ranger] Yuno Sykk', factions: ['Police'], displayName: 1, assumeServer: 'public' },
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
        { name: '[Judge] Coop Holliday', factions: ['DoJ'], displayName: 1 },
        { name: 'Matthew Payne', displayName: 2 },
        { name: 'Remee El-Rahman' },
    ],
    Thadrius: [
        { name: '[Deputy] Jonathan Dazzler', factions: ['Police'], nicknames: ['Johnny'], displayName: 2 },
        { name: 'Slappy McGaffey' },
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
        { name: '[Officer] Chris Kross', factions: ['Police'] },
        { name: 'Tyler Kwando', displayName: 0 },
    ],
    TheChief1114: [
        { name: 'Fingle Dan', factions: ['Dans'] },
    ],
    TheDondi: [
        { name: 'Arthur Hammond', nicknames: ['The "Doctor"'] },
        { name: '[Officer] Delaney', factions: ['Police'] },
    ],
    TheEazyLife: [
        { name: 'Brandon Valentino', factions: ['Rooster'], displayName: 0 },
    ],
    theeYAIR: [
        { name: 'Yair Lamas', factions: ['SSB'], displayName: 0 },
    ],
    TheGeekEntry: [
        { name: 'Stacey Doyle' },
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
        { name: 'Roland Nelson', assumeServer: 'whitelist' },
        { name: '[Deputy] Neil McReal', factions: ['Police'] },
        { name: '[Officer] Roland Nelson', factions: ['Police'], assumeServer: 'public' },
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
        { name: '[Development /] Tobiii', factions: ['Development'] },
    ],
    Trainwreckstv: [
        { name: 'Douglas "Doug Buck" Buck', displayName: 0 },
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
        { name: '[Deputy] Barry Briddle', factions: ['Police'], nicknames: [reg(/\bbriddl/)] },
        { name: 'Siz Fulker', factions: ['HOA'], leader: true, nicknames: ['uhnSuffer', 'mechanic', reg(/\bloans?\b/), reg(/\bsiz/)] },
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
        { name: '[Officer] Thomas Metzger', factions: ['Police'] },
    ],
    VaguePWNage: [
        { name: 'Ramsay', factions: ['SSB'] },
    ],
    ValorWasTaken: [
        { name: 'Esteban Julio-Cruz-Perez-Rodriguez', factions: ['Marabunta'] },
    ],
    Venomfly: [
        { name: 'Babe Calloway', factions: ['Rooster'], displayName: 0 },
    ],
    Vigors: [
        { name: '[Warlock /] Kayn "Yager Demonblood" Larp', factions: ['LARPers', 'Rooster'], nicknames: ['Warlock', 'Fighter', 'Yager', 'Demonblood', 'Demon'], displayName: 0 },
    ],
    VindiceLIVE: [
        { name: '[Deputy] Oliver Fury', factions: ['Police'] },
    ],
    VinterPhoenix: [
        { name: 'Raymond Frost', factions: ['Vagos'], displayName: 0 },
    ],
    Viviana: [
        { name: 'Griselda Ambrose', nicknames: ['Granny'] },
        { name: 'Lana Valentine', factions: ['Rooster'] },
    ],
    VNDRIZZLE: [
        { name: 'Basem Shahin' },
    ],
    VTechas: [
        { name: 'Daryl Dixon', factions: ['HOA'] },
    ],
    w00ter: [
        { name: '[Deputy] Peter Rogers', factions: ['Police'] },
    ],
    Wayward: [
        { name: '[Judge] Wayne Ardson', factions: ['DoJ'], assumeServer: 'whitelist' },
        { name: 'Angelo "Leo Nardo" Nardo', nicknames: ['Leo'] },
        { name: 'Jack "The Joker" Knaves', nicknames: ['The "Joker"'] },
        { name: '[Deputy] Michael Colt', factions: ['Police'], assumeServer: 'public' },
        { name: 'Bowser' },
    ],
    WeCameAsBecca: [
        { name: '[Dr.] Kennedy Adams', factions: ['Medical'], displayName: 0 },
    ],
    Wehtuns: [
        { name: '[Lawyer /] Lawrence Splainer', factions: ['DoJ'], displayName: 2 },
    ],
    Whippy: [
        { name: 'Irwin Dundee', factions: ['BBMC'], displayName: 2 },
        { name: '[Officer] Crocodile "Croc" Steve', factions: ['Police'], nicknames: ['Cop'] },
        { name: 'James Tinklebottom' },
    ],
    WhiteyRP: [
        { name: '[Officer] Alex Casterman', factions: ['Police'] },
        { name: 'Finlay' },
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
        { name: 'Bianca Walters' },
        { name: '[Deputy] Candice Defitt', factions: ['Police'], displayName: 1 },
    ],
    Wootpiegames: [
        { name: 'Rick Szhae', factions: ['BBMC'], displayName: 0 },
    ],
    WTFGameNation: [
        { name: '[Dr.] Noah Drake', factions: ['Medical'] },
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
        { name: 'Mike Wadum', factions: ['Vagos'], nicknames: ['El Gringo'] },
    ],
    XMOTHATRUCKAX: [
        { name: 'Ronald "Red" Juggler' },
    ],
    xNittyGritty: [
        { name: 'Donny ?', factions: ['Rooster'] },
    ],
    xReklez: [
        { name: 'AJ', factions: ['SSB'] },
        { name: 'Chico Guzman', factions: ['Vagos', 'Burger Shot'] },
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
    Zaitohro: [
        { name: 'Oswald Tinkerman', factions: ['Burger Shot'], displayName: 0 },
    ],
    Zaquelle: [
        { name: '[Officer] Mackenzie Hayes', factions: ['Police'], assume: 'assumeNp' },
    ],
    ZayTyree: [
        { name: 'Renato Ortiz', factions: ['Vagos'], displayName: 0 },
    ],
    Zerkaa: [
        { name: 'Tommy Tate', factions: ['Mandem'], displayName: 0 },
    ],
    Zettafrag: [
        { name: 'Kimberly Daniels', factions: ['Condemned MC'], displayName: 0 },
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
