import { createElement } from "./common/element";

const keys = [
    [
        {
            key: "Q",
            move: "z'",
        },
        {
            key: "W",
            move: "B",
        },  
        {
            key: "E",
            move: "L'",
        },
        {
            key: "R",
            move: "l'",
        },
        {
            key: "T",
            move: "S'",
        },  
        {
            key: "Y",
            move: "S",
        },
        {
            key: "U",
            move: "r",
        },
        {
            key: "I",
            move: "R",
        },  
        {
            key: "O",
            move: "B'",
        },
        {
            key: "P",
            move: "z",
        },
    ],
    [
        {
            key: "A",
            move: "y'",
        },
        {
            key: "S",
            move: "D",
        },
        {
            key: "D",
            move: "L",
        },
        {
            key: "F",
            move: "U'",
        },
        {
            key: "G",
            move: "F'",
        },
        {
            key: "H",
            move: "F",
        },
        {
            key: "J",
            move: "U",
        },
        {
            key: "K",
            move: "R'",
        },
        {
            key: "L",
            move: "D'",
        },
        {
            key: ";",
            move: "y",
        },
    ],
    [
        {
            key: "Z",
            move: "M",
        },
        {
            key: "X",
            move: "E",
        },
        {
            key: "C",
            move: "",
        },
        {
            key: "V",
            move: "l",
        },
        {
            key: "B",
            move: "x'",
        },
        {
            key: "N",
            move: "x",
        },
        {
            key: "M",
            move: "r'",
        },
        {
            key: ",",
            move: "",
        },
        {
            key: ".",
            move: "E'",
        },
        {
            key: "/",
            move: "M'",
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
                            style: "width: 30px; height: 40px; font-size: 16px; border: none;",
                            value: key.move,
                            innerHTML: type === "Show Keys" ? key.key : key.move,
                        });
                    }),
                ],
            });
        }),
    });
}