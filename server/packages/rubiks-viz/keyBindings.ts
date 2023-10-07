// Key: KeyboardEvent.code
// Value: The move name
/**
 * Key: KeyboardEvent.code, Value: The move name.
 * 
 * Why use KeyboardEvent.code instead of KeyboardEvent.key?
 * 1) `key` is dependent on "the state of modifier keys such as Shift as well as the keyboard locale and layout."
 * 2) `code` is useful when you want to handle keys based on their physical positions. This is common for games.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
 */
export type KeyBindings = { [key: string]: string };

export function getKeyBindings(): KeyBindings {
    const keyBindings = localStorage.getItem("keyBindings");
    if (keyBindings) {
        return JSON.parse(keyBindings);
    }
    // Copy so the default keybindings cannot be mutated.
    return {...DEFAULT_KEYBINDINGS};
}

export function setKeyBindings(keyBindings: KeyBindings) {
    localStorage.setItem("keyBindings", JSON.stringify(keyBindings));
}

export const DEFAULT_KEYBINDINGS: KeyBindings = {
    "KeyN": "x",
    "KeyB": "x'",
    "Semicolon": "y",
    "KeyA": "y'",
    "KeyP": "z",
    "KeyQ": "z'",
    "KeyJ": "U",
    "KeyF": "U'",
    "KeyS": "D",
    "KeyL": "D'",
    "KeyH": "F",
    "KeyG": "F'",
    "KeyW": "B",
    "KeyO": "B'",
    "KeyD": "L",
    "KeyE": "L'",
    "KeyI": "R",
    "KeyK": "R'",
    "BracketLeft": "M",
    "Quote": "M'",
    "KeyC": "E",
    "Comma": "E'",
    "KeyY": "S",
    "KeyT": "S'",
    "KeyU": "r",
    "KeyM": "r'",
    "KeyV": "l",
    "KeyR": "l'",
}