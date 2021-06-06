import cp from 'child_process';
import path from 'path';
// import fs from 'fs';
import express from 'express';
import treeKill from 'tree-kill';

// if (!fs.existsSync('./scripts')) {
//     console.error('Cannot find directory ./scripts, not running with correct working directory?');
//     process.exit(1);
// }

const backCwd = path.resolve('.');
const log = (...args) => console.log(`> ${new Date().toISOString().replace(/T|\.\w+$/g, ' ').trim()} |`, ...args);

const app = express();

app.use(express.json());

/** @type {cp.ChildProcess[]} */
let processes = [];

const cwds = {
    backend: backCwd,
};

/**
 * @param {string} cmd
 * @param {string[]} [args]
 * @param {cp.SpawnOptions} [options]
 * @returns {cp.ChildProcess}

 */
function spawn(cwdType, cmd, args, options = {}) {
    const proc = cp.spawn(cmd, args, { cwd: cwds[cwdType], stdio: 'inherit', ...options });
    processes.push(proc);
    const rem = () => {
        processes = processes.filter(p => p !== proc);
        return processes;
    };
    proc.on('close', rem);
    proc.on('exit', rem);
    return proc;
}

/**
 * @param {string} cmd
 * @param {string[]} [args]
 * @param {cp.SpawnOptions} [options]
 * @returns {Promise<cp.ChildProcess>}

 */
function spawnSync(cwdType, cmd, args, options = {}) {
    const proc = spawn(cwdType, cmd, args, options);
    return new Promise((resolve, reject) => {
        proc.on('exit', (code) => {
            if (code === 0) {
                resolve();
                return;
            }
            setImmediate(() => reject());
        });
        proc.on('error', reject);
    });
}

async function kill() {
    log(`-> Killing ${processes.length} spawned processes...`);
    processes.forEach(p => treeKill(p.pid, 'SIGTERM'));
    if (processes.length) await new Promise(r => setTimeout(r, 2000));
    if (processes.length) {
        log(`-> Killing ${processes.length} spawned processes forcefully...`);
        processes.forEach(p => treeKill(p.pid, 'SIGKILL'));
    }
    processes = [];
}

async function startBackend() {
    log('-> [Backend] Starting webserver');
    // await spawnSync('backend', 'yarn', ['start']);
    spawn('backend', 'yarn', ['start']);
}

async function start() {
    await Promise.all([
        startBackend(),
    ]);
}

async function updateBackend() {
    // log('-> [Backend] Installing dependencies...');
    // await spawnSync('backend', 'node', ['./scripts/install.js']);
    try {
        log('-> [Backend] Building ts...');
        await spawnSync('backend', 'yarn', ['tsc', '--skipLibCheck']); // ['checkout', '-f', 'origin/master']
    } catch (err) {}
}

async function update() {
    log('-> Performing git stash...');
    await spawnSync('backend', 'git', ['stash']); // ['fetch']);
    log('-> Performing git pull...');
    await spawnSync('backend', 'git', ['pull']); // ['checkout', '-f', 'origin/master']
    await Promise.all([
        updateBackend(),
    ]);
}

/**
 * @typedef {{
 *      ref: string;
 *      deleted: boolean;
 *      after: string;
 * }} Payload
 * @param {Payload} payload
 */
async function acceptPayload(payload) {
    const { ref, deleted, after } = payload;
    log(`>>>>>>>>>>>>>> Detected a push: ${ref} <<<<<<<<<<<<<<`);
    if (ref !== 'refs/heads/master') return;
    if (deleted) {
        log('-> Deleted, ignoring');
        return;
    }
    log('-> Starting update process');
    await kill();
    await update();
    await start();
}

app.get('/', (req, res) => {
    const lines = ['Running processes:'];
    for (const proc of processes) {
        lines.push(`- (PID ${proc.pid}) ${proc.spawnfile} [${proc.spawnargs.map(v => JSON.stringify(v))}]`);
    }
    res.status(200).send(lines.join('\n'));
});

app.post('/github', (req, res) => {
    acceptPayload(req.body).catch(console.error);
    res.status(200).json({ message: 'OK' });
});

app.get('/update', (req, res) => {
    kill().then(update).then(start).then(() => {
        res.status(200).send('OK');
    }, (err) => {
        res.status(500).send(String(err));
    });
});

app.get('/restart', (req, res) => {
    kill().then(start).then(() => {
        res.status(200).send('OK');
    }, (err) => {
        res.status(500).send(String(err));
    });
});

app.listen(process.env.PORT || 81);
log('Running on', process.env.PORT || 81);

kill().then(update).then(start).then(() => {
    log('OK');
}, (err) => {
    log(String(err));
});
