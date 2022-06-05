import * as scene from "./scene";
import { listenToNavButtons } from "./ui";

const CENTERS = [4, 13, 22, 31, 40, 49];
const UBL = [0, 29, 36];
const URB = [6, 35, 51];
const ULF = [2, 9, 42];
const UFR = [8, 15, 45];
const DFL = [18, 11, 44];
const DRF = [24, 47, 17];
const DLB = [20, 38, 27];
const DBR = [26, 33, 53];
const UB = [3, 32];
const UL = [1, 39];
const UR = [7, 48];
const UF = [5, 12];
const FL = [10, 43];
const FR = [16, 46];
const DF = [21, 14];
const DL = [19, 41];
const DR = [25, 50];
const DB = [23, 30];
const BL = [28, 37];
const BR = [34, 52];
const crossPieces = [
    ...UB,
    ...UL,
    ...UR,
    ...UF,
    ...CENTERS,
];
const firstLayerPieces = [
    ...crossPieces,
    ...UBL,
    ...URB,
    ...ULF,
    ...UFR,
];
const f2lPieces = [
    ...firstLayerPieces,
    ...FL,
    ...FR,
    ...BL,
    ...BR,
];
const lastLayerEdges = [
    ...DF,
    ...DL,
    ...DR,
    ...DB,
];
const lastLayerPieces = [
    ...lastLayerEdges,
    ...DFL,
    ...DRF,
    ...DLB,
    ...DBR,
];
const allPieces = [
    ...f2lPieces,
    ...lastLayerPieces,
];

function parseMovesFromAlg(alg?: string): string[] {
    if (!alg || alg === "") {
        return [];
    }
    return alg.split(" ");
}

export function main() {
    // Initial canvas render
    scene.renderCanvas();

    listenToNavButtons();

    document.addEventListener("keydown", (event) => {
        if (scene.cube.matchKeyToTurn(event.key)) {
            scene.animateTurn();
        }
    });

    interface Lesson {
        title: string,
        lessons: Sublesson[],
    }
    interface Sublesson {
        title: string,
        setup?: string,
        algorithm?: string,
        textualInstructions?: string[],
        text?: string,
        activeStickers?: number[],
    }

    const lessonsData: Lesson[] = [
        {
            "title": "Intro",
            "lessons": [
                {
                    "title": "About this tutorial",
                    "setup": "",
                    "algorithm": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L",
                    "text": `
                    This section simply explains how the tutorial works. Each section will come with an animation
                    so you can understand what the step looks like. Use the arrow buttons above to try
                    the animation! We gave you a dummy example of some moves.
                    `,
                    "activeStickers": [],
                },
                {
                    "title": "Centers",
                    "setup": "",
                    "algorithm": "x x x x y y y y",
                    "text": `
                    In this tutorial, we will refer to different types of pieces. One of these types is
                    the centers, which are highlighted in the animation.
                    `,
                    "activeStickers": [...CENTERS]
                },
                {
                    "title": "Corners",
                    "setup": "",
                    "algorithm": "x x x x y y y y",
                    "text": `
                    Now in the animation, the corners and the centers are highlighted.
                    `,
                    "activeStickers": [
                        ...UBL,
                        ...URB,
                        ...ULF,
                        ...UFR,
                        ...DFL,
                        ...DRF,
                        ...DLB,
                        ...DBR,
                        ...CENTERS,
                    ]
                },
                {
                    "title": "Edges",
                    "setup": "",
                    "algorithm": "x x x x y y y y",
                    "text": `
                    The edges and centers are highlighted. This is the last category of piece that
                    you need to know for the tutorial.
                    `,
                    "activeStickers": [
                        ...UB,
                        ...UL,
                        ...UR,
                        ...UF,
                        ...FL,
                        ...FR,
                        ...DF,
                        ...DL,
                        ...DR,
                        ...DB,
                        ...BL,
                        ...BR,
                        ...CENTERS,
                    ],
                },
            ],
        },
        {
            "title": "Cross",
            "lessons": [
                {
                    "title": "About the cross",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F'",
                    "algorithm": "y y y y",
                    "text": `
                    Once you solve the cross, it should look like the animation.
                    You should be able to see how it forms a white cross, hence the name of the step.
                    Try the arrow buttons so you can see how it looks from all angles.
                    `,
                    "activeStickers": crossPieces,
                },
                {
                    "title": "Case 1",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F D y x",
                    "algorithm": "x' y' D' F F",
                    "textualInstructions": [
                        "We want to solve the white-green piece.",
                        "We want to solve the white-green piece.",
                        "As you saw, the green-white piece is on the bottom. First we need to line it up by moving the bottom layer.",
                        "Now we simply solve it by moving the front layer.",
                        "Now we simply solve it by moving the front layer.",
                        "Done",
                    ],
                    "activeStickers": crossPieces,
                },
                {
                    "title": "Case 2",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R F'",
                    "algorithm": "R' D' R F F",
                    "textualInstructions": [
                        "Now the white-green piece is in the middle layer, on the right. We are going to move it to the bottom.",
                        "Then move the bottom layer to get the white-green out of the way.",
                        "Then fix the white-red which we previously moved.",
                        "Just like in Case 1, we can now move the front layer to solve it.",
                        "Just like in Case 1, we can now move the front layer to solve it.",
                        "Done",
                    ],
                    "activeStickers": crossPieces,
                },
                {
                    "title": "Case 3",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R F' F'",
                    "algorithm": "F",
                    "textualInstructions": [
                        "The white-green piece is on the top and in its correct position. However, it is flipped incorrectly! We just need to do one move to bring us to a case that we have already learned.",
                        "Now it's in the middle layer, which is the same as Case 2.",
                    ],
                    "activeStickers": crossPieces,
                },
                {
                    "title": "Case 4",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R",
                    "algorithm": "F'",
                    "textualInstructions": [
                        "The white-green is on the bottom, but flipped incorrectly. Again, we can use the concept of turning the case into another case that we already know.",
                        "Now it's in the middle layer, which is the same as Case 2.",
                    ],
                    "activeStickers": crossPieces,
                },
                {
                    "title": "Cross recap",
                    "setup": "",
                    "algorithm": "",
                    "text": "Hopefully the cases we provide here are enough to show the concepts. Each scramble will be different and you just need to break it down and approach each cross piece one by one.",
                    "activeStickers": crossPieces,
                },
            ]
        },
        {
            "title": "First layer corners",
            "lessons": [
                {
                    "title": "Prepare corner to insert",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z",
                    "algorithm": "U'",
                    "textualInstructions": [
                        "Since the cross is solved, we will hold it on the bottom from here on out. Here we are interested in the white-orange-green corner, which is currently in the top left and needs to go in the bottom right. We need to prepare it to be inserted by moving it above the position where it needs to go.",
                        "With a simple move of the top layer, now the white-orange-green is above where it needs to go."
                    ],
                    "activeStickers": [
                        ...crossPieces,
                        ...ULF,
                    ],
                },
                {
                    "title": "Inserting a corner",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z L' U U L",
                    "algorithm": "R U R' U'",
                    "text": "The white-orange-green is above where it needs to go. We only need a 4-move algorithm to insert it.",
                    "activeStickers": [
                        ...crossPieces,
                        ...ULF,
                    ],
                },
                {
                    "title": "Example 2",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z U'",
                    "algorithm": "R U R' U' R U R' U' R U R' U' R U R' U' R U R' U'",
                    "textualInstructions": [
                        "We will use the same 4-move algorithm, but we have to repeat it multiple times. In fact, whenever the corner is above its solved position, you can repeat the 4-move algorithm until the corner is solved.",
                        "We will use the same 4-move algorithm, but we have to repeat it multiple times. In fact, whenever the corner is above its solved position, you can repeat the 4-move algorithm until the corner is solved.",
                        "We will use the same 4-move algorithm, but we have to repeat it multiple times. In fact, whenever the corner is above its solved position, you can repeat the 4-move algorithm until the corner is solved.",
                        "We will use the same 4-move algorithm, but we have to repeat it multiple times. In fact, whenever the corner is above its solved position, you can repeat the 4-move algorithm until the corner is solved.",
                        "2nd repetition",
                        "2nd repetition",
                        "2nd repetition",
                        "2nd repetition",
                        "3rd repetition",
                        "3rd repetition",
                        "3rd repetition",
                        "3rd repetition",
                        "4th repetition",
                        "4th repetition",
                        "4th repetition",
                        "4th repetition",
                        "5th repetition",
                        "5th repetition",
                        "5th repetition",
                        "5th repetition",
                        "Done",
                    ],
                    "activeStickers": [
                        ...crossPieces,
                        ...ULF,
                    ],
                },
                {
                    "title": "Example 3",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z U' R U R' U' R U R' U' R U R' U'",
                    "algorithm": "R U R' U' R U R' U' R U R' U' R U R' U' R U R' U'",
                    "textualInstructions": [
                        "The white-orange-green is in its position and flipped incorrectly. We can still use the 4-move algorithm.",
                        "The white-orange-green is in its position and flipped incorrectly. We can still use the 4-move algorithm.",
                        "The white-orange-green is in its position and flipped incorrectly. We can still use the 4-move algorithm.",
                        "The white-orange-green is in its position and flipped incorrectly. We can still use the 4-move algorithm.",
                        "2nd repetition",
                        "2nd repetition",
                        "2nd repetition",
                        "2nd repetition",
                        "Done",
                    ],
                    "activeStickers": [
                        ...crossPieces,
                        ...ULF,
                    ],
                },
            ],
        },
        {
            "title": "Second layer edges",
            "lessons": [
                {
                    "title": "Prepare edge to insert",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B L' U' L U L' U' L",
                    "algorithm": "U",
                    "text": "We are interested in the red-green. Move the top layer so that the green matches the center.",
                    "activeStickers": [
                        ...firstLayerPieces,
                        ...FR,
                    ],
                },
                {
                    "title": "Insert edge to the left",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B L' U' L U L' U' L U",
                    "algorithm": "U' L' U L y' U R U' R'",
                    "text": "Notice the red-green is ready because the green matches the center. To insert it to the left, we use this algorithm.",
                    "activeStickers": [
                        ...firstLayerPieces,
                        ...FR,
                    ],
                },
                {
                    "title": "Insert edge to the right",
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B F U' F' U F U' F'",
                    "algorithm": "U R U' R' y U' L' U L",
                    "text": "We want to insert the orange-green to the right. This is a mirror of the \"left insert\" algorithm.",
                    "activeStickers": [
                        ...firstLayerPieces,
                        ...FL,
                    ],
                },
            ],
        },
        {
            "title": "Orient edges of last layer",
            "lessons": [
                {
                    "title": "Bar case",
                    "setup": "z z R' L L F F L L F' L L F' L L F' R U F R U' R' F'",
                    "algorithm": "F R U R' U' F'",
                    "text": "This algorithm turns the Bar into a cross. It looks similar to the L case algorithm.",
                    "activeStickers": [
                        ...f2lPieces,
                        ...lastLayerEdges,
                    ],
                },
                {
                    "title": "L case",
                    "setup": "z z L L F D D B' R R B D D B' F' U U R' U R U B U L L U",
                    "algorithm": "F U R U' R' F'",
                    "text": "This algorithm turns the L into a cross. It looks similar to the Bar case algorithm.",
                    "activeStickers": [
                        ...f2lPieces,
                        ...lastLayerEdges,
                    ],
                },
                {
                    "title": "Dot case",
                    "setup": "z z B' L L F' D F' D R F' D D L L B' R R U U L L D D F F L L",
                    "algorithm": "F R U R' U' F' U U F U R U' R' F'",
                    "text": "To turn the dot into a cross, we combine the Bar algorithm and the L algorithm.",
                    "activeStickers": [
                        ...f2lPieces,
                        ...lastLayerEdges,
                    ],
                },
            ],
        },
        {
            "title": "Orient corners of last layer",
            "lessons": [
                {
                    "title": "Sune Algorithm",
                    "setup": "z z R U R' U' D R R U' R U' R' U R' U R R D' R U U R' U' R U' R'",
                    "algorithm": "R U R' U R U U R'",
                    "text": "This is the algorithm to get all the yellows on top. Lots of cubers give algorithms special names, and this one is called Sune. See the other lessons for an explanation on how to apply the algorithm.",
                    "activeStickers": [
                        ...f2lPieces,
                        ...lastLayerPieces,
                    ],
                },
                {
                    "title": "Example 1",
                    "setup": "z z R U R' U' D R R U' R U' R' U R' U R R D' R U U R' U' R U' R'",
                    "algorithm": "R U R' U R U U R'",
                    "text": "This is the simplest application of Sune. When you have one yellow corner facing correctly and a yellow corner on the front, you just have to do Sune once.",
                    "activeStickers": [
                        ...f2lPieces,
                        ...lastLayerPieces,
                    ],
                },
                {
                    "title": "Example 2",
                    "setup": "z z R U R' U' D R R U' R U' R' U R' U R R D' R U R' U R U U R' U U",
                    "algorithm": "R U R' U R U U R' U U R U R' U R U U R'",
                    "text": "There is one yellow corner facing correctly and another facing to the right. Perform Sune twice to solve.",
                    "activeStickers": [
                        ...f2lPieces,
                        ...lastLayerPieces,
                    ],
                },
                {
                    "title": "Example 3",
                    "setup": "z z R U R' U' D R R U' R U' R' U R' U R R D' F R' F' L F R F' L'",
                    "algorithm": "R U R' U R U U R' U R U R' U R U U R' U U R U R' U R U U R'",
                    "text": "Here is an example that uses Sune 3 times. If you get a case that isn't covered here, just use the Sune and a bit of trial and error until you get to a case that you do know!",
                    "activeStickers": [
                        ...f2lPieces,
                        ...lastLayerPieces,
                    ],
                },
            ],
        },
        {
            "title": "Permute corners of last layer",
            "lessons": [
                {
                    "title": "Headlights",
                    "setup": "z z R U R' U' D R R U' R U' R' U R' U R R D' U'",
                    "algorithm": "U R U R' F' R U R' U' R' F R R U' R'",
                    "text": "Notice the two red corners form a \"headlight\" pattern. Use this algorithm for headlights.",
                    "activeStickers": allPieces,
                },
                {
                    "title": "No headlights",
                    "setup": "z z F R U' R' U' R U R' F' R U R' U' R' F R F'",
                    "algorithm": "R U R' F' R U R' U' R' F R R U' R'",
                    "text": "When there are no headlights, you can perform the same headlights algorithm and then proceed with the headlights case.",
                    "activeStickers": allPieces,
                },
            ],
        },
        {
            "title": "Permute edges of last layer",
            "lessons": [
                {
                    "title": "Solved bar",
                    "setup": "z z M M U' M' U U M U' M M",
                    "algorithm": "U U U U M' M' U M' U U M U M' M'",
                    "textualInstructions": [
                        "Notice how there is a solved green bar and the other three edges need swapped.",
                        "Notice how there is a solved green bar and the other three edges need swapped.",
                        "Notice how there is a solved green bar and the other three edges need swapped.",
                        "Notice how there is a solved green bar and the other three edges need swapped.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Use this algorithm when there is a solved bar.",
                        "Done",
                    ],
                    "activeStickers": allPieces,
                },
                {
                    "title": "No solved bar",
                    "setup": "z z M M U M M U U M M U M M",
                    "algorithm": "U U U U M' M' U M' U U M U M' M'",
                    "text": "Noticed how all four edges need swapped. Use the same algorithm to produce a solved bar and then proceed from there.",
                    "textualInstructions": [
                        "Noticed how all four edges need swapped.",
                        "Noticed how all four edges need swapped.",
                        "Noticed how all four edges need swapped.",
                        "Noticed how all four edges need swapped.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Use the same algorithm to produce a solved bar.",
                        "Now there is a solved bar and you can proceed from here.",
                    ],
                    "activeStickers": allPieces,
                },
            ],
        },
    ];

    // Array of index pairs for convenience when clicking prev or next.
    let lessonIndices: any[] = [];

    // The index of the selected sublesson with all of the sublessons combined. Kind of like you "flatten" the 2d array and index that.
    let flattenedLessonIndex = 0;

    let currentLesson: Sublesson;
    let currentMoves: string[] = [];
    function updateLessonIndex(i: number) {
        if (i < 0) {
            return;
        } else if (i > lessonIndices.length - 1) {
            return;
        }

        flattenedLessonIndex = i;
        const pair = lessonIndices[i];
        loadLesson(pair.i0, pair.i1);
    }

    const lessonNavigator = document.querySelector("#lessonNavigator");
    const lessonNavigatorInner = document.querySelector("#lessonNavigatorInner");

    let sublessonElements: HTMLElement[][] = [];
    let selectedLessonIndex: number;
    let selectedSublessonIndex: number;

    lessonsData.forEach((l0, i0) => {
        const p = document.createElement("p");
        p.textContent = l0.title;
        p.style.fontWeight = "bold";
        lessonNavigatorInner.appendChild(p);
        sublessonElements.push([]);

        l0.lessons.forEach((l1, i1) => {
            const p = document.createElement("p");
            p.className = "lesson-p";
            p.textContent = l1.title;
            p.style.padding = "4px";
            p.style.margin = "4px 4px 4px 8px";
            p.style.borderRadius = "4px";
            p.addEventListener("click", (event) => {
                for (let i = 0; i < lessonIndices.length; i++) {
                    const pair = lessonIndices[i];
                    if (pair.i0 === i0 && pair.i1 === i1) {
                        flattenedLessonIndex = i;
                        break;
                    }
                }
                loadLesson(i0, i1);
                toggleLessonNavigator();
            });
            sublessonElements[i0].push(p);
            lessonNavigatorInner.appendChild(p);

            lessonIndices.push({
                i0: i0,
                i1: i1,
            });
        });
    });

    let moveIndex = 0;

    const moveCounter = document.querySelector("#moveCounter");
    const lessonText = document.querySelector("#lessonText");
    function updateMoveCounter(i: number) {
        moveCounter.textContent = `${i} / ${currentMoves.length}`;
        if (currentLesson.textualInstructions) {
            updateTextualInstruction(moveIndex);
        }
    }
    function updateTextualInstruction(instructionIndex: number) {
        lessonText.textContent = currentLesson.textualInstructions[instructionIndex];
    }

    // Load the 0th index by default.
    updateLessonIndex(0);

    /**
     * 
     * @param i0 Index of the lesson (eg, Cross)
     * @param i1 Index of the sublesson
     */
    function loadLesson(i0: number, i1: number) {
        sublessonElements[i0][i1].style.background = "lightblue";
        if (selectedLessonIndex != undefined && selectedSublessonIndex != undefined) {
            sublessonElements[selectedLessonIndex][selectedSublessonIndex].style.background = "";
        }
        selectedLessonIndex = i0;
        selectedSublessonIndex = i1;

        currentLesson = lessonsData[i0].lessons[i1];

        const lessonHeader = document.querySelector("#lessonHeader");
        lessonHeader.textContent = currentLesson.title;

        if (currentLesson.text) {
            lessonText.textContent = currentLesson.text;
        } else if (currentLesson.textualInstructions) {
            updateTextualInstruction(0);
        }

        let alg = currentLesson.algorithm;
        currentMoves = parseMovesFromAlg(alg);
        moveIndex = 0;

        updateMoveCounter(0);

        scene.cube.setActiveStickers(currentLesson.activeStickers);
        scene.cube.setNumOfLayers(3);
        scene.cube.new();
        scene.buffers.initBufferData(scene.cube, scene.showBody, undefined);

        const setup = currentLesson.setup;
        scene.cube.execAlg(setup);
        scene.cube.setStickers();

        scene.render();
    }

    document.querySelector("#leftButton").addEventListener("click", (event) => {
        if (moveIndex > 0) {
            moveIndex--;
            scene.cube.stepAlgorithm(currentMoves[moveIndex], false);
            scene.animateTurn();

            updateMoveCounter(moveIndex);
        }
    });
    document.querySelector("#rightButton").addEventListener("click", (event) => {
        if (moveIndex < currentMoves.length) {
            scene.cube.stepAlgorithm(currentMoves[moveIndex], true);
            scene.animateTurn();
            moveIndex++;

            updateMoveCounter(moveIndex);
        }
    });

    function toggleLessonNavigator() {
        lessonNavigator.classList.toggle("slideUpOpen");
    }
    document.querySelector("#openClose").addEventListener("click", (event) => {
        toggleLessonNavigator();
    });
    document.querySelector("#closeLessonNavigator").addEventListener("click", (event) => {
        toggleLessonNavigator();
    });
    document.querySelector("#prevLesson").addEventListener("click", () => {
        updateLessonIndex(flattenedLessonIndex - 1);
    });
    document.querySelector("#nextLesson").addEventListener("click", () => {
        updateLessonIndex(flattenedLessonIndex + 1);
    });

}

main();