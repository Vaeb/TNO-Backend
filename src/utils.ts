import util from 'util';

const initialDate = new Date();

export const tzOffset = (initialDate.getHours() - initialDate.getUTCHours()) * 1000 * 60 * 60;

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
