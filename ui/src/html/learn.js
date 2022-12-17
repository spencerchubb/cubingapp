const { headTags, slideRight } = require("./common.js");

function rowOfSquares(colors, size) {
    return {
        tag: "div",
        class: `row gap-1 w-full h-full`,
        children: colors.map((color) => {
            return {
                tag: "div",
                class: `w-${size} h-full rounded-md border border-slate-400 border-solid shadow-sm shadow-slate-400 bg-${color}-500`,
            };
        }),
    };
}

const guides = [
    {
        title: "How to solve a 3x3 Rubik's Cube",
        href: "./learn-3x3.html",
        cube: {
            tag: "div",
            class: "col gap-1 w-20 h-20 shrink-0",
            children: [
                rowOfSquares(["green", "red", "green"], "1/3"),
                rowOfSquares(["red", "green", "red"], "1/3"),
                rowOfSquares(["green", "red", "green"], "1/3"),
            ],
        },
    },
    {
        title: "How to solve a 2x2 Rubik's Cube",
        href: "./learn-2x2.html",
        cube: {
            tag: "div",
            class: "col gap-1 w-20 h-20 shrink-0",
            children: [
                rowOfSquares(["green", "red"], "1/2"),
                rowOfSquares(["red", "green"], "1/2"),
            ],
        },
    },
    {
        title: "How to read Rubik's Cube notation",
        href: "./learn-notation.html",
        cube: {
            tag: "div",
            class: "col gap-1 w-20 h-20 shrink-0",
            children: rowOfSquares(["green"], "full"),
        },
    },
    {
        title: "How to solve first two layers (advanced)",
        href: "./learn-f2l.html",
        cube: {
            tag: "div",
            class: "col gap-1 w-20 h-20 shrink-0",
            children: [
                rowOfSquares(["gray", "gray", "gray"], "1/3"),
                rowOfSquares(["red", "green", "red"], "1/3"),
                rowOfSquares(["green", "red", "green"], "1/3"),
            ],
        },
    },
];

const learn = [
    {
        tag: "head",
        children: [
            ...headTags,
            { tag: "title", children: "Rubik's Cube Guides" }
        ],
    },
    {
        tag: "body",
        class: "col",
        children: [
            {
                tag: "nav",
                class: "navbar justify-between",
                children: [
                    {
                        tag: "div",
                        class: "hover:cursor-pointer ml-4 hover:bg-slate-500 rounded-lg",
                        children: {
                            tag: "img",
                            id: "menu",
                            src: "./images/menu.svg",
                            alt: "Menu",
                        },
                    },
                ],
            },
            {
                tag: "h1",
                class: "text-white mt-4 mx-4",
                children: "Rubik's Cube Guides",
            },
            ...guides.map(guide => {
                return {
                    tag: "a",
                    href: guide.href,
                    class: "row justify-between w-11/12 max-w-xl mt-4 p-2 rounded-lg shadow-md shadow-slate-400 hover:cursor-pointer hover:bg-white hover:bg-opacity-10",
                    children: [
                        {
                            tag: "h2",
                            class: "text-white",
                            children: guide.title,
                        },
                        { tag: "div", class: "ml-4" },
                        guide.cube,
                    ],
                };
            }),
            slideRight,
            {
                tag: "script",
                src: "./scripts/learn.js",
            },
        ],
    },
];

module.exports = learn;