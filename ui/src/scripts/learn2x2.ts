import { initLearnPage, Lesson } from "./learnBase";

let lessons: Lesson[] = [
    {
        activeStickers: [0, 1, 4, 13, 16, 18],
        setup: "",
        algorithm: "y y y y",
    },
    {
        activeStickers: [0, 1, 4, 13, 16, 18],
        practiceProblems: [
            {
                setup: "F",
                algorithm: "F'",
                directions: "Pair the white-orange-green and the white-blue-orange",
                explanation: "This case requires just one move.",
            },
            {
                setup: "F2 D'",
                algorithm: "D F' F'",
                directions: "Pair the white-orange-green and the white-blue-orange",
                explanation: "Move the white-orange-green to the side, then pair it.",
            },
            {
                setup: "F R'",
                algorithm: "R F'",
                directions: "Pair the white-orange-green and the white-blue-orange",
                explanation: "Move the white-orange-green up, then pair it.",
            },
            {
                setup: "B2 R2",
                algorithm: "R R B B",
                directions: "Pair the white-orange-green and the white-blue-orange",
                explanation: "Move the white-blue-orange to the bottom, then pair it.",
            },
            {
                setup: "B2 D2",
                algorithm: "D D B B",
                directions: "Pair the white-orange-green and the white-blue-orange",
                explanation: "Bring around the white-blue-orange, then pair it.",
            },
            {
                setup: "F' D R",
                algorithm: "R' D' F",
                directions: "Pair the white-orange-green and the white-blue-orange",
                explanation: "Bring down the white-orange-green, then pair it up.",
            },
            {
                setup: "F R' D'",
                algorithm: "D R F'",
                directions: "Pair the white-orange-green and the white-blue-orange",
                explanation: "Move the white-orange-green to the side, move it up, then pair it.",
            },
            {
                setup: "F2 D R'",
                algorithm: "R D' F' F'",
                directions: "Pair the white-orange-green and the white-blue-orange",
                explanation: "Move the white-orange-green to the bottom, bring it around, then pair it.",
            },
        ],
    },
    {
        activeStickers: [0, 1, 3, 4, 6, 13, 16, 18, 20],
        setup: "",
        algorithm: "y y y y",
    },
    {
        activeStickers: [0, 1, 3, 4, 6, 13, 16, 18, 20],
        practiceProblems: [
            {
                setup: "R' D",
                algorithm: "D' R",
                directions: "Solve the white-green-red",
                explanation: "Bring the white-green-red around, then solve it..",
            },
            {
                setup: "R2 D'",
                algorithm: "D R R",
                directions: "Solve the white-green-red",
                explanation: "Move the white-green-red to the side, then solve it.",
            },
            {
                setup: "R' D R",
                algorithm: "R' D' R",
                directions: "Solve the white-green-red",
                explanation: "Move the white-green-red down, bring it around, then solve it.",
            },
            {
                setup: "R' D'",
                algorithm: "D R",
                directions: "Solve the white-green-red",
                explanation: "Move the white-green-red to the side, then solve it.",
            },
            {
                setup: "R2 D' R",
                algorithm: "R' D R R",
                directions: "Solve the white-green-red",
                explanation: "Move the white-green-red down, bring it around, then solve it.",
            },
            {
                setup: "R' D R2",
                algorithm: "R' R' D' R",
                directions: "Solve the white-green-red",
                explanation: "Move the white-green-red down, bring it around, then solve it.",
            },
            {
                setup: "R2 D' R2",
                algorithm: "R' R' D R R",
                directions: "Solve the white-green-red",
                explanation: "Move the white to the bottom, bring it around, then solve it.",
            },
            {
                setup: "R2 D' R'",
                algorithm: "R D R R",
                directions: "Solve the white-green-red",
                explanation: "Move the white to the bottom, bring it around, then solve it.",
            },
        ],
    },
    {
        activeStickers: [0, 1, 2, 3, 4, 6, 13, 15, 16, 18, 20, 22],
        setup: "",
        algorithm: "y y y y",
    },
    {
        activeStickers: [0, 1, 2, 3, 4, 6, 13, 15, 16, 18, 20, 22],
        practiceProblems: [
            {
                setup: "R' D' R",
                algorithm: "R' D R",
                directions: "Solve white-green-red",
                explanation: "Insert the white-green-red into its slot",
            },
            {
                setup: "R' D R",
                algorithm: "R' D' R",
                directions: "Solve white-green-red",
                explanation: "Insert the white-green-red into its slot",
            },
            {
                setup: "R' D' R D R' D' R",
                algorithm: "R' D R D' R' D R",
                directions: "Solve white-green-red",
                explanation: "Take the white-green-red out of its slot, then insert",
            },
            {
                setup: "R' D R D' R' D R",
                algorithm: "R' D' R D R' D' R",
                directions: "Solve white-green-red",
                explanation: "Take the white-green-red out of its slot, then insert",
            },
            {
                setup: "R' D R D' R' D2 R",
                algorithm: "R' D' D' R D R' D' R",
                directions: "Solve white-green-red",
                explanation: "Flip the white-green red, then insert",
            },
        ],
    },
    {
        activeStickers: [0, 1, 2, 3, 4, 6, 8, 9, 10, 11, 13, 15, 16, 18, 20, 22],
        setup: "z2 R U2 R' U' R U' R'",
        algorithm: "R U R' U R U U R'",
    },
    {
        activeStickers: [0, 1, 2, 3, 4, 6, 8, 9, 10, 11, 13, 15, 16, 18, 20, 22],
        practiceProblems: [
            {
                setup: "z2 R U2 R' U' R U' R'",
                algorithm: "R U R' U R U U R'",
                directions: "Solve the yellow corners",
                explanation: "If you have 1 yellow on top, bring the yellow to the front left, then do the Sune.",
            },
            {
                setup: "z2 y R U R' U R U2 R' U'",
                algorithm: "U' R U R' U R U U R' U U R U R' U R U U R'",
                directions: "Solve the yellow corners",
                explanation: "If you have 1 yellow on top, bring the yellow to the front left, then do the Sune. In this case, you have to do the Sune twice.",
            },
            {
                setup: "z2 y2 R U2 R' U' R U R' U' R U' R'",
                algorithm: "R U R' U R U U R' R U R' U R U U R'",
                directions: "Solve the yellow corners",
                explanation: "In this case, there are no yellows on top, and it kind of looks like an H. Do the Sune twice.",
            },
            {
                setup: "z2 y' L F R' F' L' F R F' U2",
                algorithm: "R U R' U R U U R' R U R' U R U U R' R U R' U R U U R'",
                directions: "Solve the yellow corners",
                explanation: "In this case, there are 2 yellows diagonal from each other. Do the Sune 3x.",
            },
            {
                setup: "z2 F R' F' L F R F' L'",
                algorithm: "R U R' U R U U R' U R U R' U R U U R' U U R U R' U R U U R'",
                directions: "Solve the yellow corners",
                explanation: "In this case, there are two yellows on top and the other yellows are facing opposite directions. This requires doing Sune 3x.",
            },
            {
                setup: "z2 y R U2 R D R' U2 R D' R2",
                algorithm: "R U R' U R U U R' U' R U R' U R U U R' U U R U R' U R U U R'",
                directions: "Solve the yellow corners",
                explanation: "In this case, there are two yellows on top and the other yellows are facing the same direction. This requires doing Sune 3x.",
            },
            {
                setup: "z2 y2 R U2 R2 U' R2 U' R2 U2 R",
                algorithm: "R U R' U R U U R' U' R U R' U R U U R'",
                directions: "Solve the yellow corners",
                explanation: "In this case, there are no yellows on top. This requires doing Sune 2x.",
            },
        ],
    },
    {
        activeStickers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        setup: "z2 R2 B2 R F R' B2 R F' R",
        algorithm: "R' F R' B' B' R F' R' B' B' R R",
    },
    {
        activeStickers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        practiceProblems: [
            {
                setup: "z2 R2 B2 R F R' B2 R F' R",
                algorithm: "R' F R' B' B' R F' R' B' B' R R",
                directions: "Solve the corners",
                explanation: "Hold the matching corners in the back, then use the last layer algorithm.",
            },
            {
                setup: "z2 F R U' R' U' R U R' F' R U R' U' R' F R F'",
                algorithm: "R' F R' B' B' R F' R' B' B' R R U R' F R' B' B' R F' R' B' B' R R U U",
                directions: "Solve the corners",
                explanation: "In this case, there are no matching corners on any side. Use the last layer corners algorithm twice.",
            },
        ],
    },
];

function main() {
    initLearnPage(lessons, 2);
}

main();