import { createElement } from "./common/element";

const keys = [
    [
        {
            key: "Q",
            code: "KeyQ",
        },
        {
            key: "W",
            code: "KeyW",
        },  
        {
            key: "E",
            code: "KeyE",
        },
        {
            key: "R",
            code: "KeyR",
        },
        {
            key: "T",
            code: "KeyT",
        },  
        {
            key: "T",
            code: "KeyT",
        },
        {
            key: "U",
            code: "KeyU",
        },
        {
            key: "I",
            code: "KeyI",
        },  
        {
            key: "O",
            code: "KeyO",
        },
        {
            key: "P",
            code: "KeyP",
        },
        {
            key: "[",
            code: "BracketLeft",
        },
    ],
    [
        {
            key: "A",
            code: "KeyA",
        },
        {
            key: "S",
            code: "KeyS",
        },
        {
            key: "D",
            code: "KeyD",
        },
        {
            key: "F",
            code: "KeyF",
        },
        {
            key: "G",
            code: "KeyG",
        },
        {
            key: "H",
            code: "KeyH",
        },
        {
            key: "J",
            code: "KeyJ",
        },
        {
            key: "K",
            code: "KeyK",
        },
        {
            key: "L",
            code: "KeyL",
        },
        {
            key: ";",
            code: "Semicolon",
        },
        {
            key: "'",
            code: "Quote",
        },
    ],
    [
        {
            key: "Z",
            code: "KeyZ",
        },
        {
            key: "X",
            code: "KeyX",
        },
        {
            key: "C",
            code: "KeyC",
        },
        {
            key: "V",
            code: "KeyV",
        },
        {
            key: "B",
            code: "KeyB",
        },
        {
            key: "N",
            code: "KeyN",
        },
        {
            key: "M",
            code: "KeyM",
        },
        {
            key: ",",
            code: "Comma",
        },
        {
            key: ".",
            code: "Period",
        },
        {
            key: "/",
            code: "Slash",
        },
    ],
];

type OnClickKey = (code: string) => void;

export function renderMobileKeyboard(onClickKey: OnClickKey) {
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
                        return createElement("div", {
                            className: "text-white p-2 bg-gray-700 rounded-md",
                            style: "font-family: monospace; font-size: 1.5rem;",
                            value: key.code,
                            innerHTML: key.key,
                        });
                    }),
                ],
            });
        }),
    });
}