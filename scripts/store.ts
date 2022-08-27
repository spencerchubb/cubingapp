/**
 * LocalStorage functions
 */

const angle = "angle";
const animateTurns = "animateTurns";
const hintStickers = "hintStickers";
const showBody = "showBody";
const size = "size";
const user = "user";
const userID = "userID";

export function getAngle() {
    return getInt(angle) ?? 1;
}

export function setAngle(value) {
    localStorage.setItem(angle, value);
}

export function getSize() {
    return getFloat(size) ?? 1;
}

export function setSize(value) {
    localStorage.setItem(size, value);
}

export function getHintStickers() {
    return getBool(hintStickers) ?? true;
}

export function setHintStickers(value) {
    setBool(hintStickers, value);
}

export function getShowBody() {
    return getBool(showBody) ?? true;
}

export function setShowBody(value) {
    setBool(showBody, value);
}

export function getAnimateTurns() {
    return getBool(animateTurns) ?? true;
}

export function setAnimateTurns(value) {
    setBool(animateTurns, value);
}

export function getUserID() {
    return getInt(userID);
}

export function setUserID(value) {
    localStorage.setItem(userID, value);
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