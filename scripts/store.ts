/**
 * LocalStorage functions
 */

const angle = "angle";
const size = "size";
const showBody = "showBody";
const animateTurns = "animateTurns";

export function getAngle() {
    return getInt(angle) ?? 1;
}

export function setAngle(value) {
    localStorage.setItem(angle, value);
}

export function getSize() {
    return getFloat(size) ?? 1.0;
}

export function setSize(value) {
    localStorage.setItem(size, value);
}

export function getShowBody() {
    return getBool(showBody, true);
}

export function setShowBody(value) {
    setBool(showBody, value);
}

export function getAnimateTurns() {
    return getBool(animateTurns, true);
}

export function setAnimateTurns(value) {
    setBool(animateTurns, value);
}

/**
 * Returns the current boolean associated with the given key, or defaultValue if the given key does not exist.
 */
function getBool(key: string, defaultValue: boolean): boolean {
    const value = localStorage.getItem(key);
    if (value === null) return defaultValue;
    return value == "1";
}

function setBool(key: string, value: boolean) {
    localStorage.setItem(key, value ? "1" : "0");
}

/**
 * Returns the current integer associated with the given key, or null if the given key does not exist.
 */
function getInt(key: string) {
    return parseInt(localStorage.getItem(key));
}

/**
 * Returns the current float associated with the given key, or null if the given key does not exist.
 */
function getFloat(key: string) {
    return parseFloat(localStorage.getItem(key));
}