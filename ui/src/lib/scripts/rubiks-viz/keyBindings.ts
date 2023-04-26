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