import { createElement } from "./common/element";

const keys = [
    [
        {
            key: "Q",
            code: "KeyQ",
            move: "z'",
        },
        {
            key: "W",
            code: "KeyW",
            move: "B",
        },  
        {
            key: "E",
            code: "KeyE",
            move: "L'",
        },
        {
            key: "R",
            code: "KeyR",
            move: "l'",
        },
        {
            key: "T",
            code: "KeyT",
            move: "S'",
        },  
        {
            key: "Y",
            code: "KeyY",
            move: "S",
        },
        {
            key: "U",
            code: "KeyU",
            move: "r",
        },
        {
            key: "I",
            code: "KeyI",
            move: "R",
        },  
        {
            key: "O",
            code: "KeyO",
            move: "B'",
        },
        {
            key: "P",
            code: "KeyP",
            move: "z",
        },
        {
            key: "[",
            code: "BracketLeft",
            move: "M",
        },
    ],
    [
        {
            key: "A",
            code: "KeyA",
            move: "y'",
        },
        {
            key: "S",
            code: "KeyS",
            move: "D",
        },
        {
            key: "D",
            code: "KeyD",
            move: "L",
        },
        {
            key: "F",
            code: "KeyF",
            move: "U'",
        },
        {
            key: "G",
            code: "KeyG",
            move: "F'",
        },
        {
            key: "H",
            code: "KeyH",
            move: "F",
        },
        {
            key: "J",
            code: "KeyJ",
            move: "U",
        },
        {
            key: "K",
            code: "KeyK",
            move: "R'",
        },
        {
            key: "L",
            code: "KeyL",
            move: "D'",
        },
        {
            key: ";",
            code: "Semicolon",
            move: "y",
        },
        {
            key: "'",
            code: "Quote",
            move: "M'",
        },
    ],
    [
        {
            key: "Z",
            code: "KeyZ",
            move: "",
        },
        {
            key: "X",
            code: "KeyX",
            move: "",
        },
        {
            key: "C",
            code: "KeyC",
            move: "E",
        },
        {
            key: "V",
            code: "KeyV",
            move: "l",
        },
        {
            key: "B",
            code: "KeyB",
            move: "x'",
        },
        {
            key: "N",
            code: "KeyN",
            move: "x",
        },
        {
            key: "M",
            code: "KeyM",
            move: "r'",
        },
        {
            key: ",",
            code: "Comma",
            move: "E'",
        },
        {
            key: ".",
            code: "Period",
            move: "",
        },
        {
            key: "/",
            code: "Slash",
            move: "",
        },
    ],
];

type OnClickKey = (code: string) => void;

export function renderMobileKeyboard(type: "None" | "Show Keys" | "Show Moves", onClickKey: OnClickKey) {
    if (type === "None") return;

    return createElement("div", {
        className: "col gap-1",
        style: "margin: 8px; max-width: 512px;",
        onclick: (e: MouseEvent) => {
            const target = e.target as HTMLElement & { value: string };
            const move = target.value;
            if (move) {
                onClickKey(move);
            }
        },
        children: keys.map((row, i) => {
            return createElement("div", {
                className: "row w-full gap-1",
                children: [
                    createElement("div", { style: `width: ${i * 0.5}rem;` }),
                    ...row.map((key) => {
                        // This needs to be a button so Chrome doesn't trigger Touch to Search.
                        return createElement("button", {
                            className: "col justify-center text-white bg-gray-700 rounded-md",
                            style: "width: 28px; height: 40px; font-size: 16px; border: none;",
                            value: key.code,
                            innerHTML: type === "Show Keys" ? key.key : key.move,
                        });
                    }),
                ],
            });
        }),
    });
}