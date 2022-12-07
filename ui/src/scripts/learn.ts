import * as _colors from "./colors";
import { newScene, scenes, settings, startLoop } from "./scene";
import { addListenersForLeftModal } from "./ui";
import * as slide from "./slide";
import { CubeLogic } from "./cube";
import * as pieceIndices from "./pieceIndices";
import { stickerToFace } from "./common/util";
import { randInt } from "./common/rand";

function parseMovesFromAlg(alg?: string): string[] {
    return (alg || "").split(" ");
}

type Lesson = {
    activeStickers: number[],
    cube?: CubeLogic,
    move?: number,

    // The following are used for the explanatory lessons
    setup?: string,
    algorithm?: string,

    // The following is used for practice problems
    practiceProblems?: PracticeProblem[],
    problemIndex?: number,
    showSolution?: boolean,
}

type PracticeProblem = {
    setup: string,
    algorithm: string,
    directions: string,
    explanation: string,
}

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
                explanation: "Line up the green, then line up the white.",
            },
            {
                setup: "R' U F' U'",
                algorithm: "U F U' R",
                directions: "Solve the white-red edge",
                explanation: "Foobar",
            },
            {
                setup: "U R U' B'",
                algorithm: "B U R' U'",
                directions: "Solve the white-blue edge",
                explanation: "Foobar",
            },
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
    addListenersForLeftModal();

    function renderLesson(i: number) {
        const scene = newScene(`#scene${i}`);
        scenes.push(scene);

        const lesson = lessons[i];
        lesson.cube = scene.cube;
        lesson.move = 0;

        // if there are no practice problems, then we are in the explain mode
        if (lesson.practiceProblems) {
            scene.dragEnabled = true;
            randomProblem(lesson);
        } else {
            const colors = determineColors(lesson);
            scene.cube.setColors(colors);

            scene.cube.execAlg(lesson.setup);
        }
    }

    const lessonNavigator: HTMLElement = document.querySelector("#lessonNavigator");

    lessonNavigator.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.className === "lesson-p") {
            const lessonIndex = parseInt(target.getAttribute("lesson-index"));
            renderLesson(lessonIndex);
            if (document.documentElement.clientWidth < slide.NARROW) {
                slide.close(lessonNavigator);
            }
        }
    });

    for (let i = 0; i < lessons.length; i++) {
        renderLesson(i);
    }

    render();
    startLoop();

    const leftButton = "leftButton";
    const rightButton = "rightButton";
    const showSolution = "showSolution";
    const next = "next";
    document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.id.startsWith(leftButton)) {
            const lessonIndex = parseInt(target.id.substring(leftButton.length));
            const lesson = lessons[lessonIndex];

            if (lesson.move <= 0) return;

            lesson.move--;
            const moves = parseMovesFromAlg(lesson.algorithm);
            lesson.cube.stepAlgorithm(moves[lesson.move], false);

            render();
        } else if (target.id.startsWith(rightButton)) {
            const lessonIndex = parseInt(target.id.substring(rightButton.length));
            const lesson = lessons[lessonIndex];

            const moves = parseMovesFromAlg(lesson.algorithm);
            if (lesson.move >= moves.length) return;

            lesson.cube.stepAlgorithm(moves[lesson.move], true);

            lesson.move++;
            render();
        } else if (target.id.startsWith(showSolution)) {
            const lessonIndex = parseInt(target.id.substring(showSolution.length));
            const lesson = lessons[lessonIndex];
            lesson.showSolution = true;
            scenes[lessonIndex].dragEnabled = false;
            setupProblem(lesson, lesson.problemIndex);
            render();
        } else if (target.id.startsWith(next)) {
            const lessonIndex = parseInt(target.id.substring(next.length));
            const lesson = lessons[lessonIndex];
            lesson.showSolution = false;
            scenes[lessonIndex].dragEnabled = true;
            randomProblem(lesson);
            render();
        }
    });

    document.querySelector("#openClose").addEventListener("click", (event) => {
        slide.toggle(lessonNavigator);
    });

    renderBasedOnWidth();
}

function determineColors(lesson: Lesson): number[][] {
    const colors = Array(54); // hardcoded because we are using a 3x3x3 cube

    lesson.activeStickers.forEach(i => {
        colors[i] = _colors.faceToColor(stickerToFace(i, lesson.cube));
    });

    // Fill in the rest with gray
    for (let i = 0; i < 54; i++) {
        if (colors[i]) continue;
        colors[i] = _colors.GRAY;
    }

    return colors;
}

function render() {
    for (let i = 0; i < lessons.length; i++) {
        const lesson = lessons[i];
        if (lesson.practiceProblems && lesson.showSolution) {
            const problem = lesson.practiceProblems[lesson.problemIndex];
            document.querySelector(`#problemText${i}`).textContent = problem.explanation;

            (document.querySelector(`#leftButton${i}`) as HTMLElement).style.display = "";
            (document.querySelector(`#rightButton${i}`) as HTMLElement).style.display = "";
            const moveCounter: HTMLElement = document.querySelector(`#moveCounter${i}`);
            moveCounter.style.display = "";
            const parsedAlg = parseMovesFromAlg(lesson.algorithm);
            moveCounter.textContent = `${lesson.move} / ${parsedAlg.length}`;
            continue;
        }
        if (lesson.practiceProblems && !lesson.showSolution) {
            const problem = lesson.practiceProblems[lesson.problemIndex];
            document.querySelector(`#problemText${i}`).textContent = problem.directions;

            (document.querySelector(`#leftButton${i}`) as HTMLElement).style.display = "none";
            (document.querySelector(`#rightButton${i}`) as HTMLElement).style.display = "none";
            (document.querySelector(`#moveCounter${i}`) as HTMLElement).style.display = "none";
            continue;
        }

        // no practice problems, so we are in the explain mode
        const moveCounter = document.querySelector(`#moveCounter${i}`);
        const parsedAlg = parseMovesFromAlg(lesson.algorithm);
        moveCounter.textContent = `${lesson.move} / ${parsedAlg.length}`;
    }
}

function randomProblem(lesson: Lesson) {
    const problemIndex = randInt(lesson.practiceProblems.length);
    setupProblem(lesson, problemIndex);
}

function setupProblem(lesson: Lesson, problemIndex: number) {
    const problem = lesson.practiceProblems[problemIndex];
    lesson.problemIndex = problemIndex;
    lesson.algorithm = lesson.practiceProblems[problemIndex].algorithm;

    const colors = determineColors(lesson);
    lesson.cube.setColors(colors);

    lesson.cube.execAlg(problem.setup);
    lesson.move = 0;
}

window.addEventListener("resize", () => {
    renderBasedOnWidth();
});

function renderBasedOnWidth() {
    const openClose: HTMLElement = document.querySelector("#openClose");
    const drawerEle: HTMLElement = document.querySelector("#lessonNavigator");

    if (document.documentElement.clientWidth < slide.NARROW) {
        openClose.style.display = "inline-block";
        slide.close(drawerEle);
        return;
    }
    openClose.style.display = "none";
    slide.open(drawerEle);
}

main();