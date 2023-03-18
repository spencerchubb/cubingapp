/**
 * LocalStorage functions
 */

const algSet = "algSet";
const animateTurns = "animateTurns";
const casesToday = "casesToday";
const hintStickers = "hintStickers";
const keyboard = "keyboard";
const orientation = "orientation";
const showBody = "showBody";
const showScramble = "showScramble";
const user = "user";

export function getAlgSet() {
    return localStorage.getItem(algSet) ?? "";
}

export function setAlgSet(value: string) {
    localStorage.setItem(algSet, value);
}

export function getAnimateTurns() {
    return getBool(animateTurns) ?? true;
}

export function setAnimateTurns(value) {
    setBool(animateTurns, value);
}

type CasesToday = {
    count: number;
    msSinceEpoch: number;
}

export let CasesTodayStore = {
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

export function getHintStickers() {
    return getBool(hintStickers) ?? true;
}

export function setHintStickers(value) {
    setBool(hintStickers, value);
}

export function getKeyboard() {
    const out = localStorage.getItem(keyboard) ?? "None";
    if (out == "None" || out == "Show Keys" || out == "Show Moves") return out;
    console.error("Invalid keyboard value: " + out);
    return "None";
}

export function setKeyboard(value) {
    localStorage.setItem(keyboard, value);
}

export function getOrientation() {
    return localStorage.getItem(orientation) ?? "";
}

export function setOrientation(value) {
    localStorage.setItem(orientation, value);
}

export function getShowBody() {
    return getBool(showBody) ?? true;
}

export function setShowBody(value) {
    setBool(showBody, value);
}

export function getShowScramble() {
    return getBool(showScramble) ?? false;
}

export function setShowScramble(value) {
    setBool(showScramble, value);
}

export function getUser() {
    return localStorage.getItem(user);
}

export function removeUser() {
    localStorage.removeItem(user);
}

export function setUser(value) {
    localStorage.setItem(user, value);
}

/**
 * Returns the current boolean associated with the given key, or defaultValue if the given key does not exist.
 */
function getBool(key: string): boolean {
    const value = localStorage.getItem(key);
    if (value === null) return null;
    return value == "1";
}

function setBool(key: string, value: boolean) {
    localStorage.setItem(key, value ? "1" : "0");
}

/**
 * Returns the current integer associated with the given key, or null if the given key does not exist.
 */
function getInt(key: string) {
    const value = localStorage.getItem(key);
    if (value === null) return null;
    return parseInt(value);
}

/**
 * Returns the current float associated with the given key, or null if the given key does not exist.
 */
function getFloat(key: string) {
    const value = localStorage.getItem(key);
    if (value === null) return null;
    return parseFloat(value);
}