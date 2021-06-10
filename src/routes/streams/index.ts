/* eslint-disable prefer-destructuring */

import { Router } from 'express';

import { log, mapObjKeys } from '../../utils';
import { getNpStreams } from './streamData';

import type { RecordGen } from '../../utils';
import type { FactionMini } from '../../data/meta';
import type { GetNpStreams } from './streamData';

const router = Router();

// const streams = await getNpStreams();
// log('>>> streams:');
// console.log(streams.length, streams);

router.get('/', async (req, res) => {
    const faction = (req.query.faction || undefined) as FactionMini | undefined;
    log('Handling request for /streams', faction);
    const streams = await getNpStreams(
        mapObjKeys(req.query as RecordGen, ((v, k) => {
            if (k === 'faction') return 'factionName';
            return k;
        })) as GetNpStreams
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
