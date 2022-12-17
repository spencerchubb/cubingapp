const { headTags, navBar, canvas, lessonNavigator, renderLessons, slideRight } = require("./common.js");

let lessonsNotation = [
    {
        type: "explain",
        title: "U",
        text: "Up face clockwise",
    },
    {
        type: "explain",
        title: "U'",
        text: "Up face counterclockwise. Pronounced 'U prime'",
    },
    {
        type: "explain",
        title: "D",
        text: "Down face clockwise",
    },
    {
        type: "explain",
        title: "D'",
        text: "Down face counterclockwise. Pronounced 'D prime'",
    },
    {
        type: "explain",
        title: "R",
        text: "Right face clockwise",
    },
    {
        type: "explain",
        title: "R'",
        text: "Right face counterclockwise. Pronounced 'R prime'",
    },
    {
        type: "explain",
        title: "L",
        text: "Left face clockwise",
    },
    {
        type: "explain",
        title: "L'",
        text: "Left face counterclockwise. Pronounced 'L prime'",
    },
    {
        type: "explain",
        title: "F",
        text: "Front face clockwise",
    },
    {
        type: "explain",
        title: "F'",
        text: "Front face counterclockwise. Pronounced 'F prime'",
    },
    {
        type: "explain",
        title: "B",
        text: "Back face clockwise",
    },
    {
        type: "explain",
        title: "B'",
        text: "Back face counterclockwise. Pronounced 'B prime'",
    },
    {
        type: "explain",
        title: "Double turns",
        text: "Double turns are followed by a 2. This algorithm is U2 D2 R2 L2 F2 B2",
    },
    {
        type: "explain",
        title: "u",
        text: "Similar to U, but u is a wide turn. Sometimes written as Uw",
    },
    {
        type: "explain",
        title: "d",
        text: "Similar to D, but d is a wide turn. Sometimes written as Dw",
    },
    {
        type: "explain",
        title: "r",
        text: "Similar to R, but r is a wide turn. Sometimes written as Rw",
    },
    {
        type: "explain",
        title: "l",
        text: "Similar to L, but l is a wide turn. Sometimes written as Lw",
    },
    {
        type: "explain",
        title: "f",
        text: "Similar to F, but f is a wide turn. Sometimes written as Fw",
    },
    {
        type: "explain",
        title: "b",
        text: "Similar to B, but b is a wide turn. Sometimes written as Bw",
    },
    {
        type: "explain",
        title: "M",
        text: "Middle slice",
    },
    {
        type: "explain",
        title: "M'",
        text: "Middle slice. Pronounced 'M prime'",
    },
    {
        type: "explain",
        title: "E'",
        text: "Equatorial slice",
    },
    {
        type: "explain",
        title: "E'",
        text: "Equatorial slice. Pronounced 'E prime'",
    },
    {
        type: "explain",
        title: "S",
        text: "Standing slice",
    },
    {
        type: "explain",
        title: "S'",
        text: "Standing slice. Pronounced 'S prime'",
    },
    {
        type: "explain",
        title: "x",
        text: "Cube rotate along x axis",
    },
    {
        type: "explain",
        title: "x'",
        text: "Cube rotate along x axis. Pronounced 'x prime'",
    },
    {
        type: "explain",
        title: "y",
        text: "Cube rotate along y axis",
    },
    {
        type: "explain",
        title: "y'",
        text: "Cube rotate along y axis. Pronounced 'y prime'",
    },
    {
        type: "explain",
        title: "z",
        text: "Cube rotate along z axis",
    },
    {
        type: "explain",
        title: "z'",
        text: "Cube rotate along z axis. Pronounced 'z prime'",
    },
    {
        type: "explain",
        title: "Putting it together",
        text: "As a final test, let's look again at the example from the beginning. <br><br> R U R' F' R U R' U' R' F R2 U' R' U'"
    },
];

let learnNotation = [
    {
        tag: "head",
        children: [
            ...headTags,
            { tag: "title", children: "How to read Rubik's Cube notation" }
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
                    lessonNavigator(lessonsNotation),
                    {
                        tag: "div",
                        class: "col w-full h-full overflow-y-auto",
                        children: [
                            {
                                tag: "h1",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "How to read Rubik's Cube notation",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "Have you ever seen something like this: R U R' F' R U R' U' R' F R2 U' R' U'?"
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "This is called Rubik's Cube notation. It is a way to write down the moves of a Rubik's Cube algorithm."
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "This guide will teach you how to read and write Rubik's Cube notation. We provide 3D animations of the Rubik's Cube algorithms to help you learn."
                            },
                            ...renderLessons(lessonsNotation),
                            {
                                tag: "p",
                                class: "mt-8 text-white text-left px-6 max-w-lg break-words",
                                children: "That is the end of the guide! Now you know how to read and write Rubik's Cube notation.",
                            },
                            {
                                tag: "p",
                                class: "mt-8 mb-4 text-white text-left px-6 max-w-lg break-words",
                                children: [
                                    "If you loved learning how to read and write Rubik's Cube notation, you can try out some of our other guides. You can learn how to solve a 3x3 Rubik's Cube",
                                    {
                                        tag: "a",
                                        class: "text-cyan-300 hover:underline",
                                        href: "./learn-3x3.html",
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
                src: "./scripts/learnNotation.js",
            },
        ],
    },
];

module.exports = learnNotation;