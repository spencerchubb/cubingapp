// Run this script to generate html
// Usage: node html

const fs = require("fs");

function genHtml(html) {
    return `<!DOCTYPE html>\n<html>\n${htmlToStr(html, 0)}\n</html>`;
}

function htmlToStr(html, depth) {
    if (html === undefined) {
        return '';
    } else if (typeof html === 'string') {
        return "\t".repeat(depth) + html.trim();
    } else if (html instanceof Array) {
        return html.map(child => `${objToStr(child, depth)}`).join('\n');
    }
    return objToStr(html, depth);
}

function objToStr(obj, depth) {
    let indent = "\t".repeat(depth);
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
        title: "Centers",
        text: "In this tutorial, we will refer to different types of pieces. One of these types is the centers, which are highlighted in the animation.",
    },
    {
        title: "Corners",
        text: "Now in the animation, the corners and the centers are highlighted.",
    },
    {
        title: "Edges",
        text: "The edges and centers are highlighted. This is the last category of piece that you need to know for the tutorial.",
    },
    {
        title: "About the cross",
        text: "Once you solve the cross, it should look like the animation. You should be able to see how it forms a white cross, hence the name of the step. Try the arrow buttons so you can see how it looks from all angles.",
    },
    {
        title: "Case 1",
        text: "We want to move the green-white pieces from the bottom to its solved position. First you line up the green, then you line up the white.",
    },
    {
        title: "Case 2",
        text: "Now the white-green piece is in the middle layer, on the right. First we move it to the bottom, then you'll notice that the white-red was disturbed. We move the white-green out of the way, then fix the white-red.",
    },
    {
        title: "Case 3",
        text: "The white-green is in its correct position, but flipped. We can move the front layer, and this brings us to a case we have seen before.",
    },
    {
        title: "Case 4",
        text: "The white-green is on the bottom, but flipped incorrectly. White is matched with green, but we want green with green. We can move hte front layer, and this brings us to a case we have seen before.",
    },
    {
        title: "Prepare corner to insert",
        text: "Since the cross is solved, we will holdit on the bottom from now on. The white-orange-green corner is in the top left, and needs to go to the bottom right. We can move the top layer to put it above its solved position.",
    },
    {
        title: "Inserting a corner example 1",
        text: "The white-orange-green is above where it needs to go. We only need a 4-move algorithm to insert it.",
    },
    {
        title: "Inserting a corner example 2",
        text: "We will use the same 4-move algorithm, but we have to repeat it multiple times.",
    },
    {
        title: "Inserting a corner example 3",
        text: "We will use the same 4-move algorithm, but we have to repeat it multiple times.",
    },
    {
        title: "Prepare edge to insert",
        text: "We are interested in the red-green. Move the top layer so that the green matches the center.",
    },
    {
        title: "Insert edge to the left",
        text: "Notice the red-green is ready because the green matches the center. To insert it to the left, we use this algorithm.",
    },
    {
        title: "Insert edge to the right",
        text: "We want to insert the orange-green to the right. This is a mirror of the \"left insert\" algorithm.",
    },
    {
        title: "Bar case",
        text: "This algorithm turns the Bar into a cross.",
    },
    {
        title: "L case",
        text: "This algorithm turns the L into a cross.",
    },
    {
        title: "Dot case",
        text: "To turn the dot into a cross, we combine the Bar algorithm and the L algorithm.",
    },
    {
        title: "Sune algorithm",
        text: "This algorithm is used to get the yellow corners on top.",
    },
    {
        title: "Sune example 1",
        text: "In this case, one yellow corner is on top and another is facing the right. Perform Sune twice to solve.",
    },
    {
        title: "Sune example 2",
        text: "This case uses Sune 3 times. If you get a case that isn't covered here, just use trial-and-error. Try doing Sune to give you another case, and keep doing that until you get a case that you recognize.",
    },
    {
        title: "Headlights",
        text: "Notice the two red corners form \"headlights\". Use this algorithm to solve the corners when you see headlights.",
    },
    {
        title: "No headlights",
        text: "Where there are no headlights, you can perform the headlights algorithm to produce a headlights case.",
    },
    {
        title: "Bar case",
        text: "In this case, there is a bar on one side with all the colors matching.",
    },
    {
        title: "No bar case",
        text: "If there is no bar, you can perform the bar algorithm to produce a bar case.",
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
                                    href: `#scene${index}`,
                                    class: "text-black hover:underline mt-2",
                                    children: lesson.title,
                                };
                            }),
                        ],
                    },
                    {
                        tag: "div",
                        class: "col w-full h-full overflow-y-auto",
                        children: lessons.map((lesson, index) => {
                            return {
                                tag: "div",
                                class: "col",
                                children: [
                                    {
                                        tag: "div",
                                        id: `scene${index}`,
                                        class: "glDiv mt-6",
                                    },
                                    {
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
                                    },
                                    {
                                        tag: "p",
                                        class: "mt-4 text-white text-lg font-bold",
                                        children: lesson.title,
                                    },
                                    {
                                        tag: "p",
                                        class: "mt-2 text-white text-left px-6 max-w-lg break-words",
                                        children: lesson.text,
                                    },
                                    {
                                        tag: "div",
                                        class: "bg-gray-300 w-full max-w-lg h-0.5 flex-shrink-0 mt-6",
                                    }
                                ],
                            };
                        }),
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