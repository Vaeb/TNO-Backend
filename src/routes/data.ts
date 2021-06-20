import { Router } from 'express';

import { log, filterObj } from '../utils';

import settingsParsed from '../data/settingsParsed';
import characters from '../data/charactersParsed';
import factions from '../data/factionsParsed';

const filterDataCb = (v: any) => !['number', 'boolean'].includes(typeof v);

const showData: any = { ...filterObj(settingsParsed, filterDataCb), ...characters, ...factions };

const router = Router();

router.get('/', (req, res) => {
    log('Handling request for /data');
    return res.send(showData);
});

export default router;
