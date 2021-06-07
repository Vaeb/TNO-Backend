import 'dotenv/config';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import https from 'https';

import { log } from './utils';
import * as initialData from './data/initialData';

const domain = 'vaeb.io';
const key = fs.readFileSync(`/etc/letsencrypt/live/${domain}/privkey.pem`, 'utf8');
const cert = fs.readFileSync(`/etc/letsencrypt/live/${domain}/cert.pem`, 'utf8');
const chain = fs.readFileSync(`/etc/letsencrypt/live/${domain}/chain.pem`, 'utf8');
const httpsOptions = {
    key,
    cert,
    ca: chain,
};

const app = express();

// app.use(cors());
// app.use(express.json());

app.enable('trust proxy');

app.use((req, res, next) => (req.secure ? next() : res.redirect(`https://${req.headers.host}${req.url}`)));

app.get('/test', (req, res) => {
    log('/test');
    return res.send('test');
});

app.get('/initial_data', (req, res) => {
    log('Handling request for /initial_data');
    return res.send(initialData);
});

app.get('/streams/:faction', (req, res) => {
    const { faction } = req.params;
    log('Handling request for /streams/:factionName', faction);
    return res.send('POST HTTP method on user resource');
});

app.use((_req, res) => res.send({ error: 'This is not a valid API endpoint.' }));

// app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${process.env.PORT}`);
// });

const server = https.createServer(httpsOptions, app);

server.listen(process.env.PORT, () => {
    console.log(`server starting on port : ${process.env.PORT}`);
});
