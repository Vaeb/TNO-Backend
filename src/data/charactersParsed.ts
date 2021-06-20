import * as characters from './characters';

import { mapObj } from '../utils';

type keys = keyof typeof characters;

const parsed = {} as { [key in keys]: any };

for (const [keyStr, value] of Object.entries(characters)) {
    const key = keyStr as keys;
    if (typeof value === 'function') continue;
    let newValue: any = value;
    if (value instanceof RegExp) {
        newValue = value.source;
    } else if (key === 'npCharacters') {
        newValue = mapObj(
            value as typeof characters.npCharacters,
            chars => chars.map(char => ({ ...char, ...(char.factions ? { faction: char.factions[0] } : {}) }))
        );
    }
    (parsed as any)[key] = newValue;
}

export default parsed;
