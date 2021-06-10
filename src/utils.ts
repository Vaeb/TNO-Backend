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

export const mapObj = <OldObject extends RecordGen, NewValue>(
    obj: OldObject,
    fn: (v: ValueOf<OldObject>, k: keyof OldObject, i: number) => NewValue
): Record<keyof OldObject, NewValue> =>
    Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v as ValueOf<OldObject>, k as keyof OldObject, i)])) as Record<
    keyof OldObject,
    NewValue
    >;

export const mapObjKeys = <OldObject extends RecordGen, NewKey extends string>(
    obj: OldObject,
    fn: (v: ValueOf<OldObject>, k: keyof OldObject, i: number) => NewKey
): Record<NewKey, OldObject[keyof OldObject]> =>
    Object.fromEntries(Object.entries(obj).map(([k, v], i) => [fn(v as ValueOf<OldObject>, k as keyof OldObject, i), v])) as Record<
    NewKey,
    OldObject[keyof OldObject]
    >;

export const cloneDeepJson = <T, U>(obj: T): U => JSON.parse(JSON.stringify(obj));

export const paramBoolean = (param: string): boolean => !!param && param !== 'false' && param !== '0';

export const parseParam = (value: string): any => {
    if (!value) return undefined;
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (/^-?\d*(\.\d+)?$/.test(value)) return parseFloat(value);
    return value;
};
