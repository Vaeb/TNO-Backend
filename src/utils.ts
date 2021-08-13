export * from './utilsEarly';

export const mergeRegex = (regexArr: Array<RegExp | string>): RegExp => {
    let flags = '';
    const sourceStr = regexArr.reduce((acc: string, reg: RegExp | string) => {
        if (typeof reg === 'string') return `${acc}${reg}`;
        flags += reg.flags;
        return `${acc}${reg.source}`;
    }, '');

    return new RegExp(
        sourceStr,
        flags
            .split('')
            .sort()
            .join('')
            .replace(/(.)(?=.*\1)/g, '')
    );
};

export const filterObj = (obj: any, callback: (v: any, k: string) => boolean): any =>
    Object.keys(obj)
        .filter(key => callback(obj[key], key))
        .reduce((newObj: any, key) => {
            newObj[key] = obj[key];
            return newObj;
        }, {});

export type ValueOf<T> = T[keyof T];
export type RecordGen = Record<string, unknown>;

type WithLiterals<T, L, LTuple> = T extends string | number | boolean | null | undefined
    ? T & L
    : {
        [P in keyof T]: WithLiterals<T[P], L, LTuple> & (T[P] extends Array<any> ? LTuple : unknown);
    };

type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export const asConst = <TInterface>() =>
    <LTuple extends [unknown] | unknown[], L extends string | boolean | number, T extends WithLiterals<TInterface, L, LTuple>>(o: T): DeepReadonly<T> =>
        o as any;

export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

export const mapObj = <OldObject extends RecordGen, NewValue>(
    obj: OldObject,
    fn: (v: ValueOf<OldObject>, k: keyof OldObject, i: number) => NewValue
): Record<keyof OldObject, NewValue> =>
    Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v as ValueOf<OldObject>, k as keyof OldObject, i)])) as Record<keyof OldObject, NewValue>;

export const mapObjKeys = <OldObject extends RecordGen, NewKey extends string>(
    obj: OldObject,
    fn: (v: ValueOf<OldObject>, k: keyof OldObject, i: number) => NewKey
): Record<NewKey, OldObject[keyof OldObject]> =>
    Object.fromEntries(Object.entries(obj).map(([k, v], i) => [fn(v as ValueOf<OldObject>, k as keyof OldObject, i), v])) as Record<NewKey, OldObject[keyof OldObject]>;

export const isObjEmpty = (obj: any): boolean => {
    // eslint-disable-next-line guard-for-in
    for (const _ in obj) return false;
    return true;
};

export const cloneDeepJson = <T, U>(obj: T): U => JSON.parse(JSON.stringify(obj));

export const paramBoolean = (param: string): boolean => !!param && param !== 'false' && param !== '0';

export const parseParam = (value: string): any => {
    if (!value) return undefined;
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (/^-?\d*(\.\d+)?$/.test(value)) return parseFloat(value);
    return value;
};

export const escapeRegExp = (str: string): string => str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

export const replaceAll = (str: string, find: string, replace: string): string => str.replace(new RegExp(escapeRegExp(find), 'g'), replace);

type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
export function objectEntries<T extends Record<string, unknown>>(t: T): Entries<T>[] {
    return Object.entries(t) as any;
}
