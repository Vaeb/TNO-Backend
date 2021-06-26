import util from 'util';

declare global {
    interface String {
        indexOfRegex: (regex: RegExp, startPos?: number, failValue?: number) => number;
    }

    interface RegExpConstructor {
        escape: (str: string) => string;
    }
}

// eslint-disable-next-line func-names
String.prototype.indexOfRegex = function (regex: RegExp, startPos = 0, failValue = -1): number {
    const indexOf = this.substring(startPos).search(regex);
    return indexOf >= 0 ? indexOf + (startPos) : failValue;
};

// eslint-disable-next-line func-names
RegExp.escape = function (str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

const ukDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/London' }));
const initialDate = new Date();

export const tzOffset = (ukDate.getHours() - initialDate.getUTCHours()) * 1000 * 60 * 60;

export const getDateUk = (date = new Date()): Date => new Date(date.getTime() + tzOffset);

export const getDateString = (date = new Date()): string => {
    const iso = getDateUk(date).toISOString();
    return `${iso.substr(0, 10)} ${iso.substr(11, 8)}`;
};

export const makeLogMessage = (...messages: any[]): string => {
    let logMessage = messages.map(msg => util.format(msg)).join(' ');

    const dateString = getDateString();
    if (logMessage[0] === '\n') {
        const startingLines = (logMessage.match(/^\n+/) || [])[0];
        logMessage = `${startingLines}[${dateString}] ${logMessage.substring(startingLines.length)}`;
    } else {
        logMessage = `[${dateString}] ${logMessage}`;
    }

    return logMessage;
};

export const log = (...messages: any[]): void => {
    console.log(makeLogMessage(...messages));
};
