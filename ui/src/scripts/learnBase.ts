import { createBuffers } from "./buffers";
import * as _colors from "./colors";
import { randInt } from "./common/rand";
import { stickerToFace } from "./common/util";
import { Cube } from "./cube";
import { newScene, scenes, startLoop } from "./scene";
import * as slide from "./slide";
import { addListenersForLeftModal } from "./ui";

let canvas: HTMLCanvasElement = document.querySelector("canvas");
let gl: WebGLRenderingContext = canvas.getContext("webgl");

export type Lesson = {
    activeStickers: number[],
    cube?: Cube,
    move?: number,

    // The following are used for the explanatory lessons
    setup?: string,
    algorithm?: string,

    // The following is used for practice problems
    practiceProblems?: PracticeProblem[],
    problemIndex?: number,
    showSolution?: boolean,
}

export type PracticeProblem = {
    setup: string,
    algorithm: string,
    directions: string,
    explanation: string,
}

export function initLearnPage(lessons: Lesson[], layers: number) {
    addListenersForLeftModal();
    
    addLessonNavigatorListener(lessons, layers);
    addShowSolutionListeners(lessons);

    for (let i = 0; i < lessons.length; i++) {
        renderLesson(lessons, layers, i);
    }

    render(lessons);
    startLoop();

    addResizeListener();
    renderBasedOnWidth();
}

function renderLesson(lessons: Lesson[], layers: number, i: number) {
    const scene = newScene(`#scene${i}`);
    scenes.push(scene);

    scene.cube.setNumOfLayers(layers);
    scene.buffers = createBuffers(gl, scenes[0].cube, scenes[0].perspectiveMatrix);

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

function render(lessons: Lesson[]) {
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
    let problemIndex = randInt(lesson.practiceProblems.length);
    // Make sure we don't get the same problem twice in a row
    while (problemIndex === lesson.problemIndex) {
        problemIndex = randInt(lesson.practiceProblems.length);
    }
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

// TODO consider using the refactored function in common/determine_colors.ts
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

function addLessonNavigatorListener(lessons: Lesson[], layers: number) {
    const lessonNavigator: HTMLElement = document.querySelector("#lessonNavigator");

    lessonNavigator.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.className === "lesson-p") {
            const lessonIndex = parseInt(target.getAttribute("lesson-index"));
            renderLesson(lessons, layers, lessonIndex);
            if (document.documentElement.clientWidth < slide.NARROW) {
                slide.close(lessonNavigator);
            }
        }
    });

    document.querySelector("#openClose").addEventListener("click", (event) => {
        slide.toggle(lessonNavigator);
    });

    document.querySelector("#close").addEventListener("click", (event) => {
        slide.toggle(lessonNavigator);
    });
}

function addShowSolutionListeners(lessons: Lesson[]) {
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

            render(lessons);
        } else if (target.id.startsWith(rightButton)) {
            const lessonIndex = parseInt(target.id.substring(rightButton.length));
            const lesson = lessons[lessonIndex];

            const moves = parseMovesFromAlg(lesson.algorithm);
            if (lesson.move >= moves.length) return;

            lesson.cube.stepAlgorithm(moves[lesson.move], true);

            lesson.move++;
            render(lessons);
        } else if (target.id.startsWith(showSolution)) {
            const lessonIndex = parseInt(target.id.substring(showSolution.length));
            const lesson = lessons[lessonIndex];
            lesson.showSolution = true;
            scenes[lessonIndex].dragEnabled = false;
            setupProblem(lesson, lesson.problemIndex);
            render(lessons);
        } else if (target.id.startsWith(next)) {
            const lessonIndex = parseInt(target.id.substring(next.length));
            const lesson = lessons[lessonIndex];
            lesson.showSolution = false;
            scenes[lessonIndex].dragEnabled = true;
            randomProblem(lesson);
            render(lessons);
        }
    });
}

export function addResizeListener() {
    window.addEventListener("resize", () => {
        renderBasedOnWidth();
    });
}

export function renderBasedOnWidth() {
    const openClose = document.querySelector("#openClose") as HTMLElement;
    const close = document.querySelector("#close") as HTMLElement;
    const drawerEle = document.querySelector("#lessonNavigator") as HTMLElement;

    if (document.documentElement.clientWidth < slide.NARROW) {
        openClose.style.display = "inline-block";
        close.style.display = "inline-block";
        slide.close(drawerEle);
        return;
    }
    openClose.style.display = "none";
    close.style.display = "none";
    slide.open(drawerEle);
}

function parseMovesFromAlg(alg?: string): string[] {
    return (alg || "").split(" ");
}