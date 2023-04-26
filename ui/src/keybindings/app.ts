import { DEFAULT_KEYBINDINGS, getKeyBindings, setKeyBindings } from "../lib/scripts/rubiks-viz/keybindings";

export { };

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

let state = {
    keyBindings: getKeyBindings(),
    modalOpen: false,
    selectedKey: {
        key: "",
        code: "",
        move: "",
    },
};

export function onClickKey(key: string, code: string) {
    state.modalOpen = true;
    state.selectedKey = {
        key,
        code,
        move: state.keyBindings[code],
    };
    callback(state);
}

export function saveKeyBinding() {
    const { code, move } = state.selectedKey;
    if (!move || move === "") {
        delete state.keyBindings[code];
    }
    else {
        state.keyBindings[code] = move;
    }
    setKeyBindings(state.keyBindings);

    state.modalOpen = false;
    callback(state);
}

export function resetDefaults() {
    state.keyBindings = DEFAULT_KEYBINDINGS;
    setKeyBindings(state.keyBindings);
    callback(state);
}

export let keyboardData = [
    {
        "Q": "KeyQ",
        "W": "KeyW",
        "E": "KeyE",
        "R": "KeyR",
        "T": "KeyT",
        "Y": "KeyY",
        "U": "KeyU",
        "I": "KeyI",
        "O": "KeyO",
        "P": "KeyP",
        "[": "BracketLeft",
    },
    {
        "A": "KeyA",
        "S": "KeyS",
        "D": "KeyD",
        "F": "KeyF",
        "G": "KeyG",
        "H": "KeyH",
        "J": "KeyJ",
        "K": "KeyK",
        "L": "KeyL",
        ";": "Semicolon",
    },
    {
        "Z": "KeyZ",
        "X": "KeyX",
        "C": "KeyC",
        "V": "KeyV",
        "B": "KeyB",
        "N": "KeyN",
        "M": "KeyM",
        ",": "Comma",
        ".": "Period",
    },
];
