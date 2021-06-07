import 'dotenv/config';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import http from 'http';
import https from 'https';

import { log } from './utils';
import * as initialData from './data/initialData';

const { HTTP_PORT, HTTPS_PORT } = process.env;

const domain = 'vaeb.io';
const httpsOptions = {
    key: fs.readFileSync(`/etc/letsencrypt/live/${domain}/privkey.pem`, 'utf8'),
    cert: fs.readFileSync(`/etc/letsencrypt/live/${domain}/cert.pem`, 'utf8'),
    ca: fs.readFileSync(`/etc/letsencrypt/live/${domain}/chain.pem`, 'utf8'),
};

const app = express();

app.enable('trust proxy');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    if (req.secure) {
        next();
    } else {
        const newUrl = `https://${req.headers.host?.replace(`:${HTTP_PORT}`, `:${HTTPS_PORT}`)}${req.url}`;
        res.redirect(newUrl);
    }
});

app.get('/test', (req, res) => {
    log('/test');
    return res.send('test');
});

app.get('/initial_data', (req, res) => {
    log('Handling request for /initial_data');
    return res.send(initialData);
});

app.get('/data', (req, res) => {
    log('Handling request for /data');
    const showData: any = {};
    for (const [key, value] of Object.entries(initialData)) {
        if (!['number', 'boolean'].includes(typeof value)) {
            showData[key] = value;
        }
    }
    return res.send(showData);
});

app.get('/streams/:faction', (req, res) => {
    const { faction } = req.params;
    log('Handling request for /streams/:factionName', faction);
    return res.send('POST HTTP method on user resource');
});

app.use((_req, res) => res.send({ error: 'This is not a valid API endpoint.' }));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

httpServer.listen(process.env.HTTP_PORT, () => {
    log(`HTTP server running on port ${process.env.HTTP_PORT}!`);
});

httpsServer.listen(process.env.HTTPS_PORT, () => {
    log(`HTTPS server running on port ${process.env.HTTPS_PORT}!`);
});
