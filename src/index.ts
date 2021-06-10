import 'dotenv/config';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import http from 'http';
import https from 'https';

import { log } from './utils';
import routes from './routes';

const { HTTP_PORT, HTTPS_PORT } = process.env;

const isProd = process.env.ENV !== 'DEV';

const app = express();

app.enable('trust proxy');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    if (!isProd || req.secure) {
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

app.use('/tno_data', routes.tnoDataRouter);
app.use('/initial_data', routes.tnoDataRouter);
app.use('/data', routes.dataRouter);
app.use('/streams', routes.streamsRouter);

app.use((_req, res) => res.send({ error: 'This is not a valid API endpoint.' }));

const httpServer = http.createServer(app);
httpServer.listen(process.env.HTTP_PORT, () => {
    log(`HTTP server running on port ${process.env.HTTP_PORT}!`);
});

if (isProd) {
    const domain = 'vaeb.io';
    const httpsOptions = {
        key: fs.readFileSync(`/etc/letsencrypt/live/${domain}/privkey.pem`, 'utf8'),
        cert: fs.readFileSync(`/etc/letsencrypt/live/${domain}/cert.pem`, 'utf8'),
        ca: fs.readFileSync(`/etc/letsencrypt/live/${domain}/chain.pem`, 'utf8'),
    };

    const httpsServer = https.createServer(httpsOptions, app);
    httpsServer.listen(process.env.HTTPS_PORT, () => {
        log(`HTTPS server running on port ${process.env.HTTPS_PORT}!`);
    });
}
