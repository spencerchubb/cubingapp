// Run this script to generate html
// Usage: node html.js

const fs = require("fs");

function genHtml(html) {
    return `<!DOCTYPE html>\n<html>\n${htmlToStr(html, 0)}\n</html>`;
}

function htmlToStr(html, depth) {
    if (html === undefined || html === null) {
        return "";
    } else if (typeof html === "string") {
        return "\t".repeat(depth) + html.trim();
    } else if (html instanceof Array) {
        return html.map(child => `${objToStr(child, depth)}`).join('\n');
    }
    return objToStr(html, depth);
}

function objToStr(obj, depth) {
    let indent = "\t".repeat(depth);
    if (obj === undefined || obj === null) {
        return "";
    } else if (typeof obj === "string") {
        return `${indent}${obj}`;
    }
    let children = obj.children
        ? `\n${htmlToStr(obj.children, depth + 1)}\n${indent}`
        : "";
    let attributes = Object.keys(obj)
        .filter(key => key !== "tag" && key !== "children")
        .map(key => `${key}="${obj[key]}"`)
        .join(' ');
    if (attributes) {
        attributes = " " + attributes;
    }
    return `${indent}<${obj.tag}${attributes}>${children}</${obj.tag}>`;
}

let lessons = [
    {
        type: "explain",
        title: "What are centers?",
        text: "As a warmup, first we'll show you the different types of pieces. These are centers.",
    },
    {
        type: "explain",
        title: "What are corners?",
        text: "These are corners.",
    },
    {
        type: "explain",
        title: "What are edges?",
        text: "These are edges.",
    },
    {
        type: "explain",
        title: "White cross",
        text: "The first step is to solve the white cross. You could start with any color, but white is most common. To solve the cross, you just solve one edge at a time. We will see how to do that soon.",
    },
    {
        type: "practice",
        title: "Practice white cross",
        text: "The best way to learn is by doing. If you don't know what to do, you can always look at the solution. Do as many practice problems as you need to get comfortable with the cross.",
    },
    {
        type: "explain",
        title: "First layer",
        text: "The next step is to solve the rest of the first layer. To do that, we need to solve the 4 white corners.",
    },
    {
        type: "practice",
        title: "Practice first layer",
        text: "To solve the first layer, we will actually hold the white cross on the bottom. Just like before, here are some practice problems.",
    },
    {
        type: "explain",
        title: "Second layer",
        text: "The next step is to solve the second layer.",
    },
    {
        type: "practice",
        title: "Practice second layer",
        text: "Here are some practice problems for the second layer.",
    },
    {
        type: "explain",
        title: "Yellow cross",
        text: "The next step is to make a yellow cross.",
    },
    {
        type: "practice",
        title: "Practice yellow cross",
        text: "Here are some practice problems for the yellow cross.",
    },
    {
        type: "explain",
        title: "Sune algorithm",
        text: "The next step is to get the yellow corners on top. This algorithm is called Sune, and next we will show you how to apply the algorithm.",
    },
    {
        type: "practice",
        title: "Practice yellow corners",
        text: "Here are some practice problems to solve the yellow corners. Each of them will involve the Sune algorithm you just learned.",
    },
    {
        type: "explain",
        title: "Last layer corners",
        text: "The next step is to solve the last layer corners. This is the algorithm to use, and depending on the case, you may apply the algorithm once or twice.",
    },
    {
        type: "practice",
        title: "Practice last layer corners",
        text: "Here are some practice problems to solve the last layer corners. Each of them will involve the last layer corners algorithm you just learned.",
    },
    {
        type: "explain",
        title: "Last layer edges",
        text: "The last step is to solve the last layer edges. This is the algorithm to use, and depending on the case, you may have to apply it once or twice.",
    },
    {
        type: "practice",
        title: "Practice last layer edges",
        text: "Here are some practice problems to solve the last layer edges. Each of them will involve the last layer edges algorithm you just learned.",
    },
];

let lessons2x2 = [
    {
        type: "explain",
        title: "Pair two pieces",
        text: "The first step is to pair up two pieces. You could start with any color, but white is most common. Solving this step will be a bit different each time, so we will give you plenty of practice problems.",
    },
    {
        type: "practice",
        title: "Practice pairing two pieces",
        text: "The best way to learn is by doing. If you don't know what to do, you can always look at the solution. Do as many practice problems as you need to get comfortable with this step.",
    },
    {
        type: "explain",
        title: "Solve another piece",
        text: "Next we will solve another piece. This is what it should look like when you have three pieces solves.",
    },
    {
        type: "practice",
        title: "Practice solving another piece",
        text: "Here are some practice problems for solving another piece.",
    },
    {
        type: "explain",
        title: "First layer",
        text: "Now we just have to solve one more piece to finish the first layer. This is what it should look like when the first layer is solved.",
    },
    {
        type: "practice",
        title: "Practice first layer",
        text: "Here are some practice problems for the first layer.",
    },
    {
        type: "explain",
        title: "Sune algorithm",
        text: "Now that the first layer is solved, we will hold the first layer on the bottom. The next step is to solve the yellow face. This algorithm is called Sune, and next we will show you how to apply the algorithm.",
    },
    {
        type: "practice",
        title: "Practice yellow face",
        text: "Here are some practice problems to solve the yellow corners. Each of them will involve the Sune algorithm you just learned.",
    },
    {
        type: "explain",
        title: "Last layer",
        text: "This is the last step you need to solve the entire 2x2 Rubik's Cube. This is the algorithm to use.",
    },
    {
        type: "practice",
        title: "Practice last layer",
        text: "Here are some practice problems to solve last layer. Each of them will involve the algorithm you just learned.",
    },
];

let commonHeadTags = [
    { tag: "meta", charset: "utf-8" },
    { tag: "meta", name: "viewport", content: "width=device-width, initial-scale=1" },
    { tag: "link", rel: "stylesheet", href: "./styles/main.css" },
    { tag: "link", rel: "icon", href: "./images/favicon.png", type: "image/x-icon" },
];

let navBar = {
    tag: "nav",
    class: "navbar",
    style: "justify-content: space-between;",
    children: [
        {
            tag: "a",
            class: "hover:cursor-pointer",
            children: {
                tag: "img",
                id: "menu",
                src: "./images/menu.svg",
                alt: "Menu",
            },
        },
        {
            tag: "div",
            children: {
                tag: "button",
                id: "openClose",
                class: "btn-primary",
                children: "Lessons",
            },
        },
    ],
};

let canvas = { tag: "canvas" };

function lessonNavigator(lessons) {
    return {
        tag: "div",
        id: "lessonNavigator",
        class: "slideLeft slideLeftClosed col",
        children: [
            {
                tag: "h2",
                children: "Contents",
            },
            ...lessons.map((lesson, index) => {
                return {
                    tag: "a",
                    href: `#lesson${index}`,
                    class: "text-black hover:underline mt-2",
                    children: lesson.title,
                };
            }),
        ],
    };
}

function renderLessons(lessons) {
    return lessons.map((lesson, index) => {
        const title = {
            tag: "p",
            class: "mt-4 text-white text-lg font-bold",
            children: lesson.title,
        };
        const text = {
            tag: "p",
            class: "mt-2 text-white text-left px-6 max-w-lg break-words",
            children: lesson.text,
        };
        const scene = {
            tag: "div",
            id: `scene${index}`,
            class: "glDiv mt-6",
        };
        const counterAndButtons = {
            tag: "div",
            class: "row mt-4",
            children: [
                {
                    tag: "button",
                    id: `leftButton${index}`,
                    class: "btn-primary",
                    children: "&lt;",
                },
                {
                    tag: "p",
                    id: `moveCounter${index}`,
                    class: "mx-4 text-2xl text-white",
                },
                {
                    tag: "button",
                    id: `rightButton${index}`,
                    class: "btn-primary",
                    children: "&gt;",
                },
            ],
        };
        const divider = index === lessons.length - 1
            ? null
            : {
                tag: "div",
                class: "bg-gray-300 w-full max-w-lg h-0.5 flex-shrink-0 mt-6",
            };
        if (lesson.type === "explain") {
            return {
                tag: "div",
                id: `lesson${index}`,
                class: "col w-full",
                children: [
                    title,
                    text,
                    scene,
                    counterAndButtons,
                    divider,
                ],
            };
        } else if (lesson.type === "practice") {
            return {
                tag: "div",
                id: `lesson${index}`,
                class: "col w-full",
                children: [
                    title,
                    text,
                    scene,
                    {
                        tag: "p",
                        id: `problemText${index}`,
                        class: "mt-4 text-white text-left px-6 max-w-lg break-words",
                    },
                    counterAndButtons,
                    {
                        tag: "div",
                        class: "row gap-2 p-2 mt-4 bg-gray-700 rounded-md",
                        children: [
                            {
                                tag: "button",
                                id: `showSolution${index}`,
                                class: "btn-primary",
                                children: "Show solution",
                            },
                            {
                                tag: "button",
                                id: `next${index}`,
                                class: "btn-primary",
                                children: "Next",
                            },
                        ],
                    },
                    divider,
                ],
            };
        } else {
            console.error("Invalid lesson type:", lesson.type)
        }
    })
}

let slideRight = {
    tag: "div",
    class: "slideRight",
    children: [
        {
            tag: "div",
            class: "row",
            style: "justify-content: space-between;",
            children: [
                {
                    tag: "h5",
                    style: "font-size: 1.2rem;",
                    children: "Menu",
                },
                {
                    tag: "button",
                    id: "closeMenu",
                    class: "xButton",
                    children: {
                        tag: "svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        stroke: "black",
                        children: {
                            tag: "path",
                            d: "M 2 2L 22 22 M 22 2 L 2 22",
                            ["stroke-width"]: "2",
                        },
                    },
                },
            ],
        },
        {
            tag: "div",
            style: "display: flex; flex-direction: column;",
            children: [
                { tag: "div", style: "height: 16px;" },
                {
                    tag: "button",
                    id: "learnButton",
                    class: "btn-primary",
                    children: "Learn",
                },
                { tag: "div", style: "height: 8px;" },
                {
                    tag: "button",
                    id: "playButton",
                    class: "btn-primary",
                    children: "Play",
                },
                { tag: "div", style: "height: 8px;" },
                {
                    tag: "button",
                    id: "trainButton",
                    class: "btn-primary",
                    children: "Train",
                },
                { tag: "div", style: "height: 8px;" },
                {
                    tag: "button",
                    id: "cubleButton",
                    class: "btn-primary",
                    children: "Cuble",
                },
            ],
        },
    ],
};

let learn = [
    {
        tag: "head",
        children: [
            ...commonHeadTags,
            { tag: "title", children: "How to solve a 3x3 Rubik's Cube" },
        ],
    },
    {
        tag: "body",
        class: "col",
        children: [
            navBar,
            canvas,
            {
                tag: "div",
                class: "row slideWrapper",
                children: [
                    lessonNavigator(lessons),
                    {
                        tag: "div",
                        class: "col w-full h-full overflow-y-auto",
                        children: [
                            {
                                tag: "h1",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "How to solve a 3x3 Rubik's Cube",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "This guide will teach you how to solve a 3x3 Rubik's Cube. We provide 3D animations of the Rubik's Cube algorithms, and we provide practice problems to help you learn."
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                            },
                            ...renderLessons(lessons),
                            {
                                tag: "p",
                                class: "mt-8 text-white text-left px-6 max-w-lg break-words",
                                children: [
                                    "That is the end of the guide! Now you know how to solve the 3x3 Rubik's Cube. If you want to try it out yourself, you can play the Rubik's Cube ",
                                    {
                                        tag: "a",
                                        class: "text-cyan-300 hover:underline",
                                        href: "./play.html",
                                        children: "here",
                                    },
                                ],
                            },
                            {
                                tag: "p",
                                class: "mt-8 mb-4 text-white text-left px-6 max-w-lg break-words",
                                children: [
                                    "If you loved learning how to solve a 3x3 Rubik's Cube, you can learn how to solve a 2x2 Rubik's Cube",
                                    {
                                        tag: "a",
                                        class: "text-cyan-300 hover:underline",
                                        href: "./learn-2x2.html",
                                        children: "here",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            slideRight,
            {
                tag: "script",
                src: "./scripts/learn.js",
            },
        ],
    },
];

let learn2x2 = [
    {
        tag: "head",
        children: [
            ...commonHeadTags,
            { tag: "title", children: "How to solve a 2x2 Rubik's Cube" }
        ],
    },
    {
        tag: "body",
        class: "col",
        children: [
            navBar,
            canvas,
            {
                tag: "div",
                class: "row slideWrapper",
                children: [
                    lessonNavigator(lessons2x2),
                    {
                        tag: "div",
                        class: "col w-full h-full overflow-y-auto",
                        children: [
                            {
                                tag: "h1",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "How to solve a 2x2 Rubik's Cube",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "This guide will teach you how to solve a 2x2 Rubik's Cube. We provide 3D animations of the Rubik's Cube algorithms, and we provide practice problems to help you learn."
                            },
                            ...renderLessons(lessons2x2),
                            {
                                tag: "p",
                                class: "mt-8 text-white text-left px-6 max-w-lg break-words",
                                children: [
                                    "That is the end of the guide! Now you know how to solve the 2x2 Rubik's Cube. If you want to try it out yourself, you can play the Rubik's Cube ",
                                    {
                                        tag: "a",
                                        class: "text-cyan-300 hover:underline",
                                        href: "./play.html",
                                        children: "here",
                                    },
                                ],
                            },
                            {
                                tag: "p",
                                class: "mt-8 mb-4 text-white text-left px-6 max-w-lg break-words",
                                children: [
                                    "If you loved learning how to solve a 2x2 Rubik's Cube, you can learn how to solve a 3x3 Rubik's Cube",
                                    {
                                        tag: "a",
                                        class: "text-cyan-300 hover:underline",
                                        href: "./learn.html",
                                        children: "here",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            slideRight,
            {
                tag: "script",
                src: "./scripts/learn2x2.js",
            },
        ],
    },
];

const outDir = "../public";
fs.writeFileSync(`${outDir}/learn.html`, genHtml(learn));
fs.writeFileSync(`${outDir}/learn-2x2.html`, genHtml(learn2x2));