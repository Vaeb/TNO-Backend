import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import { log } from './utils';
import * as initialData from './data/initialData';

const app = express();

// app.use(cors);
app.use(express.json());

app.get('/test', (req, res) => {
    log('/test');
    return res.send('test');
});

app.get('/initital_data', (req, res) => {
    log('Handling request for /initial_data');
    return res.send(initialData);
});

app.get('/streams/:faction', (req, res) => {
    const { faction } = req.params;
    log('Handling request for /streams/:factionName', faction);
    return res.send('POST HTTP method on user resource');
});

app.use((_req, res) => res.send({ error: 'This is not a valid API endpoint.' }));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
