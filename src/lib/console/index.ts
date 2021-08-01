import { toUpper } from 'lodash';
const conMap = new Map<string, Console>();

export const withScope = (scope: string): Console => {
    const map = conMap.get(scope);
    if (map) {
        return map;
    }

    const newMapItem = {
        assert: (...args: any[]) => {
            const [value, message, ...options] = args;
            console.assert(value, `[ ${toUpper(scope)} ] ${message}`, ...options);
        },

        error: (...args: any[]) => {
            console.error(`[ ${toUpper(scope)} ] `, ...args);
        },

        info: (...args: any[]) => {
            console.info(`[ ${toUpper(scope)} ] `, ...args);
        },

        warn: (...args: any[]) => {
            console.warn(`[ ${toUpper(scope)} ] `, ...args);
        },

        log: (...args: any[]) => {
            console.log(`[ ${toUpper(scope)} ] `, ...args);
        },

        debug: (...args: any[]) => {
            console.debug(`[ ${toUpper(scope)} ] `, ...args);
        },
    } as Console;
    conMap.set(scope, newMapItem);
    return newMapItem;
};
