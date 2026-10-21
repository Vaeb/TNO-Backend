// Run after `npx tsc` on Node 16 (needs --experimental-specifier-resolution, like `yarn start`):
// npx -y node@16 --experimental-specifier-resolution=node scripts/checkAlwaysIncludeFactions.mjs
// Feeds fake Twitch streams through the real getNpLive with the Twitch API stubbed out.
import { existsSync, writeFileSync, rmSync } from 'fs';

const authPath = './src/auth.json';
if (!existsSync(authPath)) {
    writeFileSync(authPath, JSON.stringify({ clientId: 'x', clientSecret: 'x', accessToken: 'x', refreshToken: 'x' }));
    process.on('exit', () => rmSync(authPath));
}

const helixStreams = [
    { userId: '1', userDisplayName: '4HEAD', title: 'Aubrey on ProdigyRP today', viewers: 900, language: 'en' },
    { userId: '2', userDisplayName: '52chains', title: 'Aubrey on ProdigyRP today', viewers: 800, language: 'en' },
    { userId: '3', userDisplayName: 'mollyruu', title: 'Aubrey on ProdigyRP today', viewers: 750, language: 'en' },
    { userId: '4', userDisplayName: '4HEAD', title: 'NoPixel | Aubrey', viewers: 700, language: 'en' },
    { userId: '5', userDisplayName: 'AndyMilonakis', title: 'Lil Erf on ProdigyRP today', viewers: 650, language: 'en' },
];

const { apiClient } = await import('../dist/twitchSetup.js');
apiClient.streams.getStreams = async ({ after }) => ({ data: after ? [] : helixStreams, cursor: 'end' });
apiClient.users.getUsersByIds = async () => [];
apiClient.clips.getClipsForGame = async () => ({ data: [], cursor: undefined });

const { getNpLive } = await import('../dist/routes/live/liveData.js');

const pick = ({ channelName, title, rpServer, characterName, faction, factions, factionsMap, tagText, noOthersInclude, noPublicInclude, noInternationalInclude, wlOverride }) => ({
    channelName, title, rpServer, characterName, faction, factions, factionsMap, tagText, noOthersInclude, noPublicInclude, noInternationalInclude, wlOverride,
});
const multiWatchKeeps = s => (s.noOthersInclude && s.noPublicInclude && s.noInternationalInclude) || s.wlOverride;

for (const factionName of ['allnopixel', 'besties', '6chambers', 'changgang']) {
    const live = await getNpLive({ factionName }, true);
    console.log(`\n===== factionName=${factionName} =====`);
    for (const stream of live.streams) console.log(JSON.stringify({ ...pick(stream), multiWatchKeeps: multiWatchKeeps(stream) }, null, 2));
}

process.exit(0);
