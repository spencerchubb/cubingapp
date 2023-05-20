import { Scene } from "../lib/scripts/rubiks-viz";
import { scrMgr } from "../lib/scripts/cstimer/scramble";

// Need to do this to register scramblers
import { scramble_222 } from "../lib/scripts/cstimer/scramble_222";
scramble_222;
import { scramble_444 } from "../lib/scripts/cstimer/scramble_444";
scramble_444;

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
];

type Puzzle = "2x2" | "3x3" | "4x4" | "5x5" | "6x6" | "7x7";
export type TimerStatus = "stopped" | "scrambled" | "inspecting" | "holding down" | "ready" | "running";

type State = {
    puzzle: Puzzle,
    scramble: string,
    timerStatus: TimerStatus,
    timerText: string,
    algToPerform: string,
    inspection: boolean,
}

let state: State = {
    puzzle: (localStorage.getItem("puzzle") as Puzzle) ?? "3x3",
    scramble: "loading...",
    timerStatus: "stopped",
    timerText: "Click to scramble",
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
}

export function onChangePuzzle(event) {
    const puzzle = event.target.value;
    setPuzzle(puzzle);
}

function setPuzzle(puzzle: Puzzle) {
    localStorage.setItem("puzzle", puzzle);
    state.puzzle = puzzle;

    switch (puzzle) {
        case "2x2":
            scene.cube.setNumOfLayers(2);
            break;
        case "3x3":
            scene.cube.setNumOfLayers(3);
            break;
        case "4x4":
            scene.cube.setNumOfLayers(4);
            break;
        case "5x5":
            scene.cube.setNumOfLayers(5);
            break;
        case "6x6":
            scene.cube.setNumOfLayers(6);
            break;
        case "7x7":
            scene.cube.setNumOfLayers(7);
            break;
    }

    performNewScramble();
}

export function solve() {
    scene.cube.solve();
    state.timerStatus = "stopped";
    state.timerText = "Click to scramble";
    callback(state);
}

export function performNewScramble() {
    const scram = getScramble(state.puzzle, scene);
    state.scramble = scram;
    scene.cube.solve();
    scene.cube.performAlg(scram);
    callback(state);
}

export function getTimeText(): string {
    return time.toFixed(2);
}

function getScramble(puzzle: Puzzle, scene: Scene) {
    let scram: string;
    switch (puzzle) {
        case "2x2":
            scram = scrMgr.scramblers["222o"]("222o");
            scene.cube.performAlg(scram);
            break;
        case "3x3":
            scram = scrMgr.scramblers["333"]();
            scene.cube.performAlg(scram);
            break;
        case "4x4":
            scram = scrMgr.scramblers["444wca"]();
            scene.cube.performAlg(scram);
            break;
        default:
            scram = `Sorry, we can't show ${puzzle} scrambles yet`;
            break;
    }
    return scram;
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

export function onDown() {
    switch (state.timerStatus) {
        case "stopped":
            state.timerStatus = "scrambled";
            state.timerText = "0.00";
            callback(state);

            performNewScramble();
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
