import { promises as fs } from 'fs';
import { ApiClient } from 'twitch';
import { RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';

import { log } from './utilsEarly';

log('| Setting up twitch client...');

interface AuthData {
    clientId: string;
    clientSecret: string;
    accessToken: string;
    expiryTimestamp: number;
    refreshToken: string;
    randomFixedString: string;
}

const fetchAuth = async (): Promise<AuthData> => JSON.parse(String(await fs.readFile('./src/auth.json', 'utf-8')));

export const authData = await fetchAuth();
const authProvider = new RefreshableAuthProvider(
    new StaticAuthProvider(authData.clientId, authData.accessToken),
    {
        clientSecret: authData.clientSecret,
        refreshToken: authData.refreshToken,
        expiry: authData.expiryTimestamp ? new Date(authData.expiryTimestamp) : null,
        onRefresh: async ({ accessToken, refreshToken, expiryDate }) => {
            const authDataNew = {
                ...authData,
                accessToken,
                refreshToken,
                expiryTimestamp: expiryDate ? expiryDate.getTime() : null,
            };

            log('>>> Refreshing auth-data to:', accessToken, refreshToken, expiryDate);
            await fs.writeFile('./src/auth.json', JSON.stringify(authDataNew, null, 4), 'utf-8');
        },
    }
);

export const apiClient = new ApiClient({ authProvider });

log('Twitch client connected!');
