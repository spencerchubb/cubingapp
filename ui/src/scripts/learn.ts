import * as pieceIndices from "./pieceIndices";
import { initLearnPage, Lesson } from "./learnBase";

let lessons: Lesson[] = [
    {
        activeStickers: pieceIndices.CENTERS,
        setup: "",
        algorithm: "x x x x y y y y",
    },
    {
        activeStickers: [...pieceIndices.layer1Corners, ...pieceIndices.layer2Corners],
        setup: "",
        algorithm: "x x x x y y y y",
    },
    {
        activeStickers: [...pieceIndices.layer1Edges, ...pieceIndices.layer2Edges, ...pieceIndices.layer3Edges],
        setup: "",
        algorithm: "x x x x y y y y",
    },
    {
        activeStickers: pieceIndices.cross,
        setup: "",
        algorithm: "y y y y",
    },
    {
        activeStickers: pieceIndices.cross,
        practiceProblems: [
            {
                setup: "F F D",
                algorithm: "D' F F",
                directions: "Solve the white-green edge",
                explanation: "To solve the white-green, line up the green, then line up the white.",
            },
            {
                setup: "y U2 R' U2",
                algorithm: "U U R U U",
                directions: "Solve the white-green edge",
                explanation: "To insert the white green, move the top layer, move the white-green up, then fix the top layer.",
            },
            {
                setup: "F' R' F",
                algorithm: "y D F' U' R U",
                directions: "Solve the white-red edge",
                explanation: "First we'll rotate the cube so red is in the front. Then we'll bring the white-red around to insert it.",
            },
            {
                setup: "y' U R U' B'",
                algorithm: "y y F' U' R U",
                directions: "Solve the white-red edge",
                explanation: "The white-red is in the back, so first we'll rotate the cube. Then, move the white-red to the side and insert it.",
            },
            {
                setup: "y U F' U'",
                algorithm: "y' U R U'",
                directions: "Solve the white-blue edge",
                explanation: "The white-blue is on the left, so first we'll rotate the cube. Then, insert it.",
            },
            {
                setup: "y' L2 D2",
                algorithm: "D' D' L' L'",
                directions: "Solve the white-blue edge",
                explanation: "The white-blue is on the bottom right. To solve it, line up the blue, then line up the white.",
            },
            {
                setup: "y2 R' U' R U",
                algorithm: "F F D R R",
                directions: "Solve the white-orange edge",
                explanation: "The white-orange is in another edge's position, so first, we'll take it out. Then line up the orange, then line up the white.",
            },
            {
                setup: "L",
                algorithm: "L'",
                directions: "Solve the white-orange edge",
                explanation: "This is one of the easiest cases. The white-orange is only one move away.",
            }
        ],
    },
    {
        activeStickers: pieceIndices.firstLayer,
        setup: "",
        algorithm: "y y y y",
    },
    {
        activeStickers: pieceIndices.firstLayer,
        practiceProblems: [
            {
                setup: "z2 R U' R'",
                algorithm: "R U R'",
                directions: "Solve the white-green-orange corner",
                explanation: "Move corner up, move corner to the side, move back down",
            },
            {
                setup: "z2 y R U' R' U R U' R' U",
                algorithm: "R U R' U' R U R'",
                directions: "Solve the white-orange-blue corner",
                explanation: "Move corner up, move corner to the side, move back down. Repeat 1x",
            },
            {
                setup: "z2 y2 R U' R' U R U' R' U R U' R'",
                algorithm: "R U R' U' R U R' U' R U R'",
                directions: "Solve the white-blue-red corner",
                explanation: "Move corner up, move corner to the side, move back down. Repeat 3x",
            },
            {
                setup: "z2 y' R U' R' U R U' R' U R U' R' U R U' R'",
                algorithm: "R U R' U' R U R' U' R U R' U' R U R'",
                directions: "Solve the white-red-green corner",
                explanation: "Move corner up, move corner to the side, move back down. Repeat 4x",
            },
            {
                setup: "z2 R U' R' U R U' R' U R U' R' U R U' R' U R U' R'",
                algorithm: "R U R' U' R U R' U' R U R' U' R U R' U' R U R'",
                directions: "Solve the white-green-orange corner",
                explanation: "Move corner up, move corner to the side, move back down. Repeat 5x",
            },
        ],
    },
    {
        activeStickers: pieceIndices.f2l,
        setup: "z2",
        algorithm: "y y y y",
    },
    {
        activeStickers: pieceIndices.f2l,
        practiceProblems: [
            {
                setup: "z2 F' U' F U R U R' U'",
                algorithm: "U R U' R' U' F' U F",
                directions: "Solve the green-orange edge",
                explanation: "Pair up the green-orange edge with the white-green-orange corner. Then insert the pair into the slot.",
            },
            {
                setup: "z2 y F' U' F U R U R' U",
                algorithm: "U' R U' R' U' F' U F",
                directions: "Solve the orange-blue edge",
                explanation: "Pair up the orange-blue edge with the white-orange-blue corner. Then insert the pair into the slot.",
            },
            {
                setup: "z2 y2 F' U' F U R U R' U2",
                algorithm: "U U R U' R' U' F' U F",
                directions: "Solve the blue-red edge",
                explanation: "Pair up the blue-red edge with the white-blue-red corner. Then insert the pair into the slot.",
            },
            {
                setup: "z2 y' F' U' F U R U R'",
                algorithm: "R U' R' U' F' U F",
                directions: "Solve the red-green edge",
                explanation: "Pair up the red-green edge with the white-red-green corner. Then insert the pair into the slot.",
            },
        ],
    },
    {
        activeStickers: [...pieceIndices.f2l, ...pieceIndices.eoll],
        setup: "z2",
        algorithm: "y y y y",
    },
    {
        activeStickers: [...pieceIndices.f2l, ...pieceIndices.eoll],
        practiceProblems: [
            {
                setup: "z2 F U R U' R' F'",
                algorithm: "F R U R' U' F'",
                directions: "Solve the yellow cross",
                explanation: "When you have a horizontal bar, move the front layer, do some in-between moves, then fix the front layer.",
            },
            {
                setup: "z2 y F U R U' R' F' U",
                algorithm: "U F R U R' U' F'",
                directions: "Solve the yellow cross",
                explanation: "Make the bar horizontal. Then move the front layer, do some in-between moves, then fix the front layer.",
            },
            {
                setup: "z2 y F R U R' U' F' U'",
                algorithm: "U F U R U' R' F'",
                directions: "Solve the yellow cross",
                explanation: "Move the L-shape to the top left. Then move the front layer, do some in-between moves, then fix the front layer.",
            },
            {
                setup: "z2 y' F R U R' U' F' U2",
                algorithm: "U U F U R U' R' F'",
                directions: "Solve the yellow cross",
                explanation: "Move the L-shape to the top left. Then move the front layer, do some in-between moves, then fix the front layer.",
            },
            {
                setup: "z2 F U R U' R' F' U F R U R' U' F'",
                algorithm: "F U R U' R' F' U F R U R' U' F'",
                directions: "Solve the yellow cross",
                explanation: "When you have the dot case, you combine the algorithms for the L-shape and horizontal bar cases.",
            },
            {
                setup: "z2 y2 F U R U' R' F' U F R U R' U' F'",
                algorithm: "F U R U' R' F' U F R U R' U' F'",
                directions: "Solve the yellow cross",
                explanation: "When you have the dot case, you combine the algorithms for the L-shape and horizontal bar cases.",
            },
        ],
    },
    {
        activeStickers: [...pieceIndices.f2l, ...pieceIndices.oll],
        setup: "z2 R U2 R' U' R U' R'",
        algorithm: "R U R' U R U U R'",
    },
    {
        activeStickers: [...pieceIndices.f2l, ...pieceIndices.oll],
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
        activeStickers: [...pieceIndices.f2l, ...pieceIndices.oll, ...pieceIndices.cpll],
        setup: "z2 R2 B2 R F R' B2 R F' R",
        algorithm: "R' F R' B' B' R F' R' B' B' R R",
    },
    {
        activeStickers: [...pieceIndices.f2l, ...pieceIndices.oll, ...pieceIndices.cpll],
        practiceProblems: [
            {
                setup: "z2 U2 R2 B2 R F R' B2 R F' R U",
                algorithm: "U' R' F R' B' B' R F' R' B' B' R R U U",
                directions: "Solve the corners",
                explanation: "Move the matching corners to the back, use the last layer corners algorithm, then adjust the top layer.",
            },
            {
                setup: "z2 y U' R2 B2 R F R' B2 R F' R U2",
                algorithm: "U U R' F R' B' B' R F' R' B' B' R R U",
                directions: "Solve the corners",
                explanation: "Move the matching corners to the back, use the last layer corners algorithm, then adjust the top layer.",
            },
            {
                setup: "z2 y2 F R U' R' U' R U R' F' R U R' U' R' F R F'",
                algorithm: "R' F R' B' B' R F' R' B' B' R R U R' F R' B' B' R F' R' B' B' R R U U",
                directions: "Solve the corners",
                explanation: "In this case, there are no matching corners on any side. Use the last layer corners algorithm twice.",
            },
            {
                setup: "z2 y' F R U' R' U' R U R' F' R U R' U' R' F R F' U'",
                algorithm: "R' F R' B' B' R F' R' B' B' R R U R' F R' B' B' R F' R' B' B' R R U",
                directions: "Solve the corners",
                explanation: "In this case, there are no matching corners on any side. Use the last layer corners algorithm twice.",
            },
        ],
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "z2 M' M' U' M U U M' U' M' M'",
        algorithm: "M' M' U M U U M' U M' M'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        practiceProblems: [
            {
                setup: "z2 U2 M' M' U' M U U M' U' M' M' U",
                algorithm: "U' M' M' U M U U M' U M' M' U U",
                directions: "Solve the cube",
                explanation: "Move the matching colors to back, use the last layer edges algorithm, then adjust the top layer.",
            },
            {
                setup: "z2 y U' M' M' U M U U M' U M' M' U2",
                algorithm: "U U M' M' U M U U M' U M' M' M' M' U M U U M' U M' M' U",
                directions: "Solve the cube",
                explanation: "You have to use the algorithm twice for this case.",
            },
            {
                setup: "z2 y2 M2 U' M2 U2 M2 U' M2 U'",
                algorithm: "M' M' U M U U M' U M' M' U M' M' U M U U M' U M' M'",
                directions: "Solve the cube",
                explanation: "You have to use the algorithm twice for this case.",
            },
            {
                setup: "z2 y' M2 U' M2 U' M' U2 M2 U2 M' U",
                algorithm: "M' M' U M U U M' U M' M' U' M' M' U M U U M' U M' M' U U",
                directions: "Solve the cube",
                explanation: "You have to use the algorithm twice for this case.",
            },
        ],
    },
];

function main() {
    initLearnPage(lessons, 3);
}

main();