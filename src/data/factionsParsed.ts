import * as factions from './factions';

import { mapObj } from '../utils';

type keys = keyof typeof factions;

const parsed = {} as { [key in keys]: any };

for (const [key, value] of Object.entries(factions)) {
    if (typeof value === 'function') continue;
    let newValue: any = value;
    if (value instanceof RegExp) {
        newValue = value.source;
    } else if (key === 'npFactionsRegex') {
        newValue = mapObj(value as typeof factions.npFactionsRegex, (reg => reg.source));
    }
    (parsed as any)[key] = newValue;
}

export default parsed;
