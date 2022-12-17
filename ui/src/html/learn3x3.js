const { headTags, navBar, canvas, lessonNavigator, renderLessons, slideRight } = require("./common.js");

let lessons3x3 = [
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

let learn3x3 = [
    {
        tag: "head",
        children: [
            ...headTags,
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
                    lessonNavigator(lessons3x3),
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
                            ...renderLessons(lessons3x3),
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
                src: "./scripts/learn3x3.js",
            },
        ],
    },
];

module.exports = learn3x3;