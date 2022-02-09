import { Router } from 'express';

import { log } from '../utils';
import { newFbData, newFbData2 } from './live/liveData';

const router = Router();

router.post('/', async (req, res) => {
    log('Handling POST request for /parse_streams');
    const npStreams = req.body.fbChannels ? (await newFbData2(req.body.fbChannels, req.body.fbStreams, req.body.tick)) : (await newFbData(req.body.fbStreams, req.body.tick));
    return res.send(npStreams);
});

export default router;
