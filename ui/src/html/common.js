let headTags = [
    { tag: "meta", charset: "utf-8" },
    { tag: "meta", name: "viewport", content: "width=device-width, initial-scale=1" },
    { tag: "link", rel: "stylesheet", href: "./styles/main.css" },
    { tag: "link", rel: "icon", href: "./images/favicon.svg", type: "image/x-icon" },
];

let navBar = {
    tag: "nav",
    class: "navbar justify-between",
    children: [
        {
            tag: "a",
            class: "hover:cursor-pointer ml-4 hover:bg-slate-500 rounded-lg",
            children: {
                tag: "img",
                id: "menu",
                src: "./images/menu.svg",
                alt: "Menu",
            },
        },
        {
            tag: "div",
            class: "mr-4",
            children: {
                tag: "button",
                id: "openClose",
                class: "btn-primary",
                children: "Contents",
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
                tag: "div",
                class: "row justify-between w-full",
                children: [
                    {
                        tag: "h2",
                        children: "Contents",
                    },
                    {
                        tag: "button",
                        id: "close",
                        class: "xButton",
                        children: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
                            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
                        </svg>`,
                    },
                ],
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

module.exports = {
    headTags,
    navBar,
    canvas,
    lessonNavigator,
    renderLessons,
    slideRight,
}