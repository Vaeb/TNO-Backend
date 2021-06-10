import { Router } from 'express';

import { log } from '../utils';

import settingsParsed from '../data/settingsParsed';
import * as characters from '../data/characters';
import factions from '../data/factionsParsed';

const tnoData = { ...settingsParsed, ...characters, ...factions };

const router = Router();

router.get('/', (req, res) => {
    log('Handling request for /tno_data');
    return res.send(tnoData);
});

export default router;
