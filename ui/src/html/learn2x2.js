const { headTags, navBar, canvas, lessonNavigator, renderLessons, slideRight } = require("./common.js");

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
        text: "Next we will solve another piece. This is what it should look like when you have three pieces solved.",
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

let learn2x2 = [
    {
        tag: "head",
        children: [
            ...headTags,
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
                src: "./scripts/learn2x2.js",
            },
        ],
    },
];

module.exports = learn2x2;