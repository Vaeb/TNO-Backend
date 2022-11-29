import { ApiClient } from '@twurple/api';
import { AccessToken, RefreshingAuthProvider } from '@twurple/auth';
import { promises as fs } from 'fs';

import { log } from './utilsEarly';

log('| Setting up twitch client...');

interface AuthData extends AccessToken {
    clientId: string;
    clientSecret: string;
    randomFixedString: string;
}

const fetchAuth = async (): Promise<AuthData> => JSON.parse(String(await fs.readFile('./src/auth.json', 'utf-8')));

export const authData = await fetchAuth();
const authProvider = new RefreshingAuthProvider(
    {
        clientId: authData.clientId,
        clientSecret: authData.clientSecret,
        onRefresh: async (newTokenData) => {
            const authDataNew = {
                ...authData,
                ...newTokenData,
            };

            log('>>> Refreshing auth-data to:', authDataNew.accessToken, authDataNew.refreshToken, authDataNew.expiresIn);
            await fs.writeFile('./src/auth.json', JSON.stringify(authDataNew, null, 4), 'utf-8');
        },
    },
    authData
);

export const apiClient = new ApiClient({ authProvider });

log('Twitch client connected!');
