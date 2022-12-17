const { headTags, navBar, canvas, lessonNavigator, renderLessons, slideRight } = require("./common.js");

let lessonsF2L = [
    {
        type: "explain",
        title: "Paired",
        text: "When the corner and the edge are already paired, you can solve the pair with one trigger: R U' R'",
    },
    {
        type: "explain",
        title: "Paired (mirror)",
        text: "This is the same case mirrored from right-to-left: L' U L. For an extra exercise, think about how this case can be mirrored front-to-back.",
    },
    {
        type: "explain",
        title: "C+E opposite",
        text: "When the corner and the edge are opposite each other, and have different colors on top, you can solve the pair with one trigger: R U R'. This case also has mirrored versions, but you can figure them out on your own.",
    },
    {
        type: "explain",
        title: "C+E split",
        text: "The corner and edge are split, and they have the same color on top. You can do one trigger to form the pair, and then another trigger to insert the pair.",
    },
    {
        type: "explain",
        title: "C+E split (the wrong way)",
        text: "This is an example of what not to do. The corner and edge are split, and we can do one trigger to form the pair. However, this breaks a pair that was already solved. When we are doing triggers, we have to make sure we are not affecting pairs that are already solved.",
    },
    {
        type: "explain",
        title: "Edge solved in slot",
        text: "Use a trigger to take the edge out and form the pair. Then use another trigger to insert the pair.",
    },
    {
        type: "explain",
        title: "Edge flipped in slot",
        text: "Use a trigger to make the corner and edge opposite to each other. Then use another trigger to insert the pair.",
    },
    {
        type: "explain",
        title: "Corner solved in slot",
        text: "Use a trigger to take the corner out, then use another trigger to insert the pair.",
    },
    {
        type: "explain",
        title: "Corner flipped in slot",
        text: "Use a trigger to take the corner out, then use another trigger to insert the pair.",
    },
    {
        type: "explain",
        title: "Corner on top",
        text: "Use a trigger to flip the corner so it is not facing the top, then use another trigger to insert the pair.",
    },
];

let learnF2L = [
    {
        tag: "head",
        children: [
            ...headTags,
            { tag: "title", children: "How to solve first two layers (advanced)" }
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
                    lessonNavigator(lessonsF2L),
                    {
                        tag: "div",
                        class: "col w-full h-full overflow-y-auto",
                        children: [
                            {
                                tag: "h1",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "How to solve first two layers (advanced)",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "Are you trying to learn the CFOP method (also known as the Fridrich method)? The most difficult step for most people is the first two layers (F2L). This guide will teach you an advanced method for solving the first two layers."
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "I am going to assume you already know how to solve the Rubik's Cube with a beginner's method. If you want to learn how to solve the Rubik's Cube faster, then you will benefit from learning advanced F2L.",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "As you already know, beginner's F2L involves solving the first layer and the second layer separately. To improve upon this, advanced F2L involves solving a corner and an edge at the same time. This is called a corner-edge pair, or just a 'pair' for short.",
                            },
                            {
                                tag: "h2",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "Intuition vs Memorization",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "When you start learning advanced F2L, you should learn the intuition behind the method. You should visualize the pieces and understand how the pieces move. It is easier to learn F2L by intuition.",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "However, intuition is slow. If you want to solve the Rubik's Cube as fast as possible, you should memorize the F2L algorithms. You should be able to recognize a case instantly, and do the algorithm almost without thinking. But like I said, you should start with intuition and work on memorization later.",
                            },
                            {
                                tag: "h2",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "Triggers",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "Now you might be wondering, how do I learn F2L intuitively? The answer is triggers."
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "A trigger is a short sequence of moves. You can think of a trigger as a 'word' and an algorithm as a 'sentence'. You combine multiple triggers to make an algorithm.",
                            },
                            {
                                tag: "p",
                                class: "text-white max-w-lg mt-4 px-6",
                                children: "Some F2L cases can be solved with 1 trigger, and the vast majority can be solved with 2 triggers. When you break down advanced F2L into triggers, it becomes much easier to learn.",
                            },
                            ...renderLessons(lessonsF2L),
                            {
                                tag: "p",
                                class: "mt-8 mb-4 text-white text-left px-6 max-w-lg break-words",
                                children: "That is the end of the guide! This is not a complete list of all the F2L cases, but it shows you all the concepts. If you get a case that you don't know, you can use intuition and try out different triggers to solve it.",
                            },
                        ],
                    },
                ],
            },
            slideRight,
            {
                tag: "script",
                src: "./scripts/learnF2L.js",
            },
        ],
    },
];

module.exports = learnF2L;