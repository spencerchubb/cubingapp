import { Scene, newCube, newPyraminx } from "../lib/scripts/rubiks-viz";
import { randElement } from "../lib/scripts/common/rand";
import { scramble_333 } from "../lib/scripts/cstimer/scramble_333";
import { scrMgr } from "../lib/scripts/cstimer/scramble";

// Need to do this to register scramblers
import { scramble_222 } from "../lib/scripts/cstimer/scramble_222";
scramble_222;
import { scramble_pyraminx } from "../lib/scripts/cstimer/scramble_pyraminx";
scramble_pyraminx;

export { };

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback
    return state;
}

export const puzzles = [
    "2x2",
    "3x3",
    "4x4",
    "5x5",
    "6x6",
    "7x7",
    "Pyraminx",
];

type Puzzle = "2x2" | "3x3" | "4x4" | "5x5" | "6x6" | "7x7" | "Pyraminx";
export type TimerStatus = "stopped" | "scrambled" | "inspecting" | "holding down" | "ready" | "running";

type State = {
    puzzle: Puzzle,
    scramble: string,
    stack: { puzzle: Puzzle, scramble: string }[],
    timerStatus: TimerStatus,
    timerText: string,
    algToPerform: string,
    inspection: boolean,
}

let state: State = {
    puzzle: (localStorage.getItem("puzzle") as Puzzle) ?? "3x3",
    scramble: "",
    stack: [],
    timerStatus: "scrambled",
    timerText: "0.00",
    algToPerform: "",
    inspection: getInspection(),
};
let scene: Scene;
let time: number;
let interval: NodeJS.Timer;
let inspectTime: number;
let penalty: null | "+2" | "DNF";

export function initApp(_scene) {
    scene = _scene;

    setPuzzle(state.puzzle);
    performNewScramble();
}

export function undoScramble() {
    const stack = state.stack;
    const last = stack.pop();
    if (!last) return;
    setPuzzle(last.puzzle);
    state.scramble = last.scramble;
    scene.puzzle.solve();
    scene.puzzle.performAlg(state.scramble);
    callback(state);
}

/* Perform a new scramble and push onto the stack. */
export function nextScramble() {
    performNewScramble();
    state.stack.push({ puzzle: state.puzzle, scramble: state.scramble });
}

export function onChangePuzzle(event) {
    state.stack.push({ puzzle: state.puzzle, scramble: state.scramble });
    const puzzle = event.target.value;
    setPuzzle(puzzle);
    performNewScramble();
}

function setPuzzle(puzzle: Puzzle) {
    localStorage.setItem("puzzle", puzzle);
    state.puzzle = puzzle;

    switch (puzzle) {
        case "2x2":
            newCube(scene.div, 2);
            break;
        case "3x3":
            newCube(scene.div, 3);
            break;
        case "4x4":
            newCube(scene.div, 4);
            break;
        case "5x5":
            newCube(scene.div, 5);
            break;
        case "6x6":
            newCube(scene.div, 6);
            break;
        case "7x7":
            newCube(scene.div, 7);
            break;
        case "Pyraminx":
            newPyraminx(scene.div);
    }
}

export function solve() {
    scene.puzzle.solve();
    state.timerStatus = "stopped";
    state.timerText = "Click to scramble";
    callback(state);
}

function performNewScramble() {
    const scram = getScramble(state.puzzle, scene);
    state.scramble = scram;
    scene.puzzle.solve();
    scene.puzzle.performAlg(scram);
    callback(state);
}

export function getTimeText(): string {
    return time.toFixed(2);
}

/* Move set for 4x4 and 5x5 */
const moveset_45 = [
    "U", "U'", "U2",
    "D", "D'", "D2",
    "R", "R'", "R2",
    "L", "L'", "L2",
    "F", "F'", "F2",
    "B", "B'", "B2",
    "Uw", "Uw'", "Uw2",
    "Dw", "Dw'", "Dw2",
    "Rw", "Rw'", "Rw2",
    "Lw", "Lw'", "Lw2",
    "Fw", "Fw'", "Fw2",
    "Bw", "Bw'", "Bw2",
];

/* Move set for 6x6 and 7x7 */
const moveset_67 = [
    "U", "U'", "U2",
    "D", "D'", "D2",
    "R", "R'", "R2",
    "L", "L'", "L2",
    "F", "F'", "F2",
    "B", "B'", "B2",
    "Uw", "Uw'", "Uw2",
    "Dw", "Dw'", "Dw2",
    "Rw", "Rw'", "Rw2",
    "Lw", "Lw'", "Lw2",
    "Fw", "Fw'", "Fw2",
    "Bw", "Bw'", "Bw2",
    "3Uw", "3Uw'", "3Uw2",
    "3Rw", "3Rw'", "3Rw2",
    "3Dw", "3Dw'", "3Dw2",
    "3Lw", "3Lw'", "3Lw2",
    "3Fw", "3Fw'", "3Fw2",
    "3Bw", "3Bw'", "3Bw2",
];

function getScramble(puzzle: Puzzle, scene: Scene) {
    switch (puzzle) {
        case "2x2":
            return scrMgr.scramblers["222o"]("222o");
        case "3x3":
            return scramble_333.getRandomScramble();
        case "4x4":
            return getRandomMoveScramble(moveset_45, 45);
        case "5x5":
            return getRandomMoveScramble(moveset_45, 60);
        case "6x6":
            return getRandomMoveScramble(moveset_67, 80);
        case "7x7":
            return getRandomMoveScramble(moveset_67, 100);
        case "Pyraminx":
            return scrMgr.scramblers["pyro"]("pyro");
        default:
            return `Sorry, we can't show ${puzzle} scrambles yet`;
    }
}

/**
 * Generate a scramble of random moves.
 * Note that this does not generate a random state scramble.
 * For big cubes, it takes too long to generate random state scrambles.
 */
function getRandomMoveScramble(moves: string[], len: number) {
    let scram: string[] = [];
    while (scram.length < len){
        const move = randElement(moves);
        // Don't allow consecutive moves of the same face.
        if (scram.length > 0 && scram[scram.length - 1][0] === move[0]) continue;
        scram.push(move);
    }
    return scram.join(" ");
}

document.addEventListener("keydown", event => {
    if (event.key === " ") {
        onDown();
    }
});

document.addEventListener("keyup", event => {
    if (event.key === " ") {
        onUp();
    }
});

// Listen to entire page in case the user lifts outside of the box.
// Use mouseup and touchend so it works on desktop and mobile.
document.addEventListener("mouseup", event => {
    onUp();
});
document.addEventListener("touchend", event => {
    onUp();
});

export function onDown() {
    switch (state.timerStatus) {
        case "stopped":
            state.timerStatus = "scrambled";
            state.timerText = "0.00";
            callback(state);

            nextScramble();
            break;
        case "scrambled":
            penalty = null;

            if (state.inspection) {
                state.timerStatus = "inspecting";
                callback(state);

                time = Date.now();
                inspectTime = 0;
                clearInterval(interval);
                interval = setInterval(() => {
                    const timeDifference = (Date.now() - time) / 1000;
                    const seconds = Math.floor(timeDifference);

                    if (seconds === 8 && inspectTime < 8) {
                        inspectTime = seconds;
                        speak("8 seconds");
                    } else if (seconds === 12 && inspectTime < 12) {
                        inspectTime = seconds;
                        speak("12 seconds");
                    } else if (seconds === 15 && inspectTime < 15) {
                        inspectTime = seconds;
                        state.timerText = "+2";
                        penalty = "+2";
                    } else if (seconds === 17 && inspectTime < 17) {
                        inspectTime = seconds;
                        state.timerText = "DNF";
                        penalty = "DNF";
                    } else if (seconds < 15) {
                        state.timerText = `Inspecting: ${seconds}s`;
                    }

                    callback(state);
                }, 10);
            } else {
                state.timerStatus = "holding down";
                callback(state);
                setTimeout(() => {
                    if (state.timerStatus !== "holding down") return;
                    state.timerStatus = "ready";
                    callback(state);
                }, 300);
            }
            break;
        case "inspecting":
            state.timerStatus = "holding down";
            callback(state);
            setTimeout(() => {
                if (state.timerStatus !== "holding down") return;
                state.timerStatus = "ready";
                callback(state);
            }, 300);

            break;
        case "holding down":
            // Do nothing
            break;
        case "ready":
            // Do nothing
            break;
        case "running":
            state.timerStatus = "stopped";

            clearInterval(interval);

            const timeDifference = (Date.now() - time) / 1000;
            if (penalty === "+2") {
                state.timerText = `${(timeDifference + 2).toFixed(2)}+\nClick to scramble`;
            } else if (penalty === "DNF") {
                state.timerText = `DNF (${timeDifference.toFixed(2)})\nClick to scramble`;
            } else {
                state.timerText = `${timeDifference.toFixed(2)}\nClick to scramble`;
            }

            callback(state);
            break;
    }
}

export function onUp() {
    switch (state.timerStatus) {
        case "stopped":
            // Do nothing
            break;
        case "scrambled":
            // Do nothing
            break;
        case "inspecting":
            // Do nothing
            break;
        case "holding down":
            if (state.inspection) {
                state.timerStatus = "inspecting";
            } else {
                state.timerStatus = "scrambled";
            }
            callback(state);
            break;
        case "ready":
            state.timerStatus = "running";
            time = Date.now();
            clearInterval(interval);
            interval = setInterval(() => {
                const timeDifference = (Date.now() - time) / 1000;
                state.timerText = timeDifference.toFixed(2);
                callback(state);
            }, 10);
            break;
        case "running":
            // Do nothing
            break;
    }
}

function getInspection(): boolean {
    return (localStorage.getItem("inspection") ?? "true") === "true";
}

export function setInspection(event: Event) {
    const v = (event.target as HTMLInputElement).checked;
    state.inspection = v;
    localStorage.setItem("inspection", v ? "true" : "false");
}

function speak(text: string) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-US";
    speechSynthesis.speak(msg);
}
