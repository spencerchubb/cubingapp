/**
 * LocalStorage functions
 */

const casesToday = "casesToday";
const showScramble = "showScramble";

type CasesToday = {
    count: number;
    msSinceEpoch: number;
}

export const CasesTodayStore = {
    get: (): CasesToday => {
        const value = localStorage.getItem(casesToday);
        if (value) return JSON.parse(value);
        return {
            count: 0,
            msSinceEpoch: Date.now(),
        };
    },
    set: (value: CasesToday) => {
        localStorage.setItem(casesToday, JSON.stringify(value));
    },
};

export const ShowScrambleStore = {
    get: (): boolean => getBool(showScramble) ?? false,
    set: (value: boolean) => setBool(showScramble, value),
}

/**
 * Returns the current boolean associated with the given key, or defaultValue if the given key does not exist.
 */
function getBool(key: string): boolean {
    const value = localStorage.getItem(key);
    if (value === null) return false;
    return value == "1";
}

function setBool(key: string, value: boolean) {
    localStorage.setItem(key, value ? "1" : "0");
}