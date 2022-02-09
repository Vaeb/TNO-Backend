import { Router } from 'express';

import { log } from '../utils';
import { newFbData } from './live/liveData';

const router = Router();

router.post('/', async (req, res) => {
    log('Handling POST request for /parse_streams');
    if (!req.body.fbChannels) return res.send([]);
    const npStreams = await newFbData(req.body.fbChannels, req.body.fbStreams, req.body.tick);
    return res.send(npStreams);
});

export default router;
