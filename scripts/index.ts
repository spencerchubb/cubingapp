import * as scene from "./scene.js";
import { initCanvas, listenToNavButtons } from "./ui";
import { DEFAULT_SPEED } from "./constants.js";

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

const speed: number = parseFloat(localStorage.getItem("#keyboardSpeed") || DEFAULT_SPEED) * 1000;
// +200 for latency
const timePerTurn = speed + 200;

function parseMovesFromAlg(alg?: string): string[] {
    let moves: string[] = [];
    if (!alg || alg === "") {
        moves = [];
    } else {
        moves = alg.split(" ");
    }
    return moves;
}

export function main() {
    listenToNavButtons();

    scene.cube.setNumOfLayers(3);
    scene.cube.new();
    initCanvas();

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
                    "algorithm": "x x x' x' y y y' y'",
                    "text": `
                    In this tutorial, we will refer to different types of pieces. One of these types is
                    the centers, which are highlighted in the animation.
                    `,
                    "activeStickers": [...CENTERS]
                },
                {
                    "title": "Corners",
                    "setup": "",
                    "algorithm": "x x x' x' y y y' y'",
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
                    "algorithm": "x x x' x' y y y' y'",
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
                    "setup": "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F D",
                    "algorithm": "D' F F",
                    "text": `
                    In this case, we want to insert the green white sticker. It is currently at the bottom-right
                    of the animation, and it needs to go in the top-front position. First we will
                    move the bottom layer to line it up. Then we will move the front layer.
                    `,
                    "activeStickers": crossPieces,
                },
                {
                    "title": "Insert cross piece",
                },
            ]
        },
        {
            "title": "First layer corners",
            "lessons": [
                {
                    "title": "Prepare corner to insert",
                },
                {
                    "title": "Insert corner",
                    "algorithm": "R U R' U'",
                    "text": `
                    We only need one algorithm to insert the corners of the first layer. The key here
                    is knowing how to use the algorithm based on what case you are given.
                    `,
                    "activeStickers": [0, 29, 36, 4, 13, 22, 31, 40, 49],
                }
            ]
        },
        {
            "title": "Second layer edges",
            "lessons": [
                {
                    "title": "Prepare edge to insert"
                },
                {
                    "title": "Insert edge"
                }
            ]
        },
        {
            "title": "Last layer",
            "lessons": [
                {
                    "title": "OELL"
                },
                {
                    "title": "OCLL"
                },
                {
                    "title": "CPLL"
                },
                {
                    "title": "EPLL"
                }
            ]
        }
    ];

    // Array of index pairs for convenience when clicking prev or next.
    let lessonIndices: any[] = [];

    let currentLessonIndex = 0;
    function updateLessonIndex(i: number) {
        if (i < 0) {
            return;
        } else if (i > lessonIndices.length - 1) {
            return;
        }

        currentLessonIndex = i;
        const pair = lessonIndices[i];
        loadLesson(pair.i0, pair.i1);
    }

    const lessonNavigator = document.querySelector("#lessonNavigator");

    lessonsData.forEach((l0, i0) => {
        const p = document.createElement("p");
        p.textContent = l0.title;
        p.style.fontWeight = "bold";
        lessonNavigator.appendChild(p);

        l0.lessons.forEach((l1, i1) => {
            const p = document.createElement("p");
            p.textContent = l1.title;
            p.style.margin = "8px 0 8px 16px";
            p.addEventListener("click", (event) => {
                loadLesson(i0, i1);
                toggleLessonNavigator();
            });
            lessonNavigator.appendChild(p);

            lessonIndices.push({
                i0: i0,
                i1: i1,
            });
        });
    });

    let alg = "";
    let moves: string[] = [];
    let moveIndex = 0;

    const moveCounter = document.querySelector("#moveCounter");
    function updateMoveCounter(i: number) {
        moveCounter.textContent = `${i} / ${moves.length}`;
    }
    updateMoveCounter(0);

    // Load the 0th index by default.
    updateLessonIndex(0);

    /**
     * 
     * @param i0 Index of the lesson (eg, Cross)
     * @param i1 Index of the sublesson
     */
    function loadLesson(i0: number, i1: number) {
        const lesson = lessonsData[i0].lessons[i1];

        const lessonHeader = document.querySelector("#lessonHeader");
        lessonHeader.textContent = lesson.title;

        const lessonText = document.querySelector("#lessonText");
        lessonText.textContent = lesson.text;

        alg = lesson.algorithm;
        moves = parseMovesFromAlg(alg);
        moveIndex = 0;
        for (let i = moves.length - 1; i >= 0; i--) {
            takeStepInAlgorithm(moves[i], false);
        }

        updateMoveCounter(0);

        scene.cube.setActiveStickers(lesson.activeStickers);
        scene.cube.setNumOfLayers(3);
        scene.cube.new();
        scene.buffers.initBufferData(scene.cube);

        const setup = lesson.setup;
        const setupMoves = parseMovesFromAlg(setup);
        setupMoves.forEach(move => {
            takeStepInAlgorithm(move, true);
        });
        scene.cube.setStickers();

        scene.render();
    }

    document.querySelector("#leftButton").addEventListener("click", (event) => {
        if (moveIndex > 0) {
            moveIndex--;
            takeStepInAlgorithm(moves[moveIndex], false);
            scene.animateTurn();

            updateMoveCounter(moveIndex);
        }
    });
    document.querySelector("#rightButton").addEventListener("click", (event) => {
        if (moveIndex < moves.length) {
            takeStepInAlgorithm(moves[moveIndex], true);
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
    document.querySelector("#prevLesson").addEventListener("click", () => {
        updateLessonIndex(currentLessonIndex - 1);
    });
    document.querySelector("#nextLesson").addEventListener("click", () => {
        updateLessonIndex(currentLessonIndex + 1);
    });

    function takeStepInAlgorithm(move: string, forward: boolean) {
        switch (move) {
            case "x":
                scene.cube.cubeRotate(0, forward);
                break;
            case "x'":
                scene.cube.cubeRotate(0, !forward);
                break;
            case "y":
                scene.cube.cubeRotate(1, forward);
                break;
            case "y'":
                scene.cube.cubeRotate(1, !forward);
                break;
            case "z":
                scene.cube.cubeRotate(2, forward);
                break;
            case "z'":
                scene.cube.cubeRotate(2, !forward);
                break;
            case "U":
                scene.cube.turn(1, 0, forward);
                break;
            case "U'":
                scene.cube.turn(1, 0, !forward);
                break;
            case "D":
                scene.cube.turn(1, 2, !forward);
                break;
            case "D'":
                scene.cube.turn(1, 2, forward);
                break;
            case "F":
                scene.cube.turn(2, 0, forward);
                break;
            case "F'":
                scene.cube.turn(2, 0, !forward);
                break;
            case "B":
                scene.cube.turn(2, 2, !forward);
                break;
            case "B'":
                scene.cube.turn(2, 2, forward);
                break
            case "L":
                scene.cube.turn(0, 2, !forward);
                break;
            case "L'":
                scene.cube.turn(0, 2, forward);
                break;
            case "R":
                scene.cube.turn(0, 0, forward);
                break;
            case "R'":
                scene.cube.turn(0, 0, !forward);
                break;
            default:
                throw new Error("Invalid turn in algorithm: " + move);
        }
    }
}

main();