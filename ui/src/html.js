// Run this script to generate html
// Usage: node html

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
        text: "The next step is to get the yellow corners on top. This is the algorithm to use, and soon you will see how to apply the algorithm.",
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

let learn = [
    {
        tag: "head",
        children: [
            { tag: "meta", charset: "utf-8" },
            { tag: "meta", name: "viewport", content: "width=device-width, initial-scale=1" },
            { tag: "link", rel: "stylesheet", href: "./styles/main.css" },
            { tag: "link", rel: "icon", href: "./images/favicon.png", type: "image/x-icon" },
            { tag: "title", children: "Cubing | Learn" },
        ],
    },
    {
        tag: "body",
        class: "col",
        children: [
            {
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
            },
            {
                tag: "canvas",
            },
            {
                tag: "div",
                class: "row slideWrapper",
                children: [
                    {
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
                    },
                    {
                        tag: "div",
                        class: "col w-full h-full overflow-y-auto",
                        children: [
                            {
                                tag: "h1",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "How to solve a Rubik's Cube",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "This guide will teach you how to solve a Rubik's Cube. We use animations and practice problems to help you learn."
                            },
                            ...lessons.map((lesson, index) => {
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
                            }),
                            {
                                tag: "p",
                                class: "mt-8 mb-4 text-white text-left px-6 max-w-lg break-words",
                                children: [
                                    "That is the end of the guide! Now you are ready to solve a full Rubik's Cube. You can keep practicing ",
                                    {
                                        tag: "a",
                                        href: "./play.html",
                                        children: "here",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
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
            },
            {
                tag: "script",
                src: "./scripts/learn.js",
            },
        ],
    },
];

const outDir = "../public";
fs.writeFileSync(`${outDir}/learn.html`, genHtml(learn));