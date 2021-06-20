/* eslint-disable prefer-destructuring */

import { Router } from 'express';

import { log, mapObjKeys } from '../../utils';
import { getNpStreams } from './streamData';

import type { RecordGen } from '../../utils';
import type { FactionMini } from '../../data/meta';

const router = Router();

// const streams = await getNpStreams();
// log('>>> streams:');
// console.log(streams.length, streams);

router.get('/', async (req, res) => {
    log('Handling request for /streams');
    const streams = await getNpStreams(
        mapObjKeys(req.query as RecordGen, ((v, k) => {
            if (k === 'faction') return 'factionName';
            return k;
        }))
    );
    // log('streams', streams);
    return res.send(streams);
});

router.get('/:faction', async (req, res) => {
    const faction = req.params.faction as FactionMini;
    log('Handling request for /streams/:faction', faction);
    const streams = await getNpStreams({ factionName: faction });
    log('streams', streams);
    return res.send(streams);
});

export default router;
