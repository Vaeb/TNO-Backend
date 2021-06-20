/* eslint-disable prefer-destructuring */

import { Router } from 'express';

import { log, mapObjKeys } from '../../utils';
import { getNpLive } from './liveData';

import type { RecordGen } from '../../utils';

const router = Router();

router.get('/', async (req, res) => {
    log('Handling request for /live');
    const live = await getNpLive(
        mapObjKeys(req.query as RecordGen, ((v, k) => {
            if (k === 'faction') return 'factionName';
            return k;
        }))
    );
    // log('live', live);
    return res.send(live);
});

export default router;
