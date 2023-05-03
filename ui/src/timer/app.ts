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
    callback = _callback;
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
export type TimerStatus = "stopped" | "holding down" | "ready" | "running";

type State = {
    puzzle: Puzzle,
    scramble: string,
    timerStatus: TimerStatus,
    timerText: string,
    algToPerform: string,
}

let state: State = {
    puzzle: (localStorage.getItem("puzzle") as Puzzle) ?? "3x3",
    scramble: "loading...",
    timerStatus: "stopped",
    timerText: "0.00",
    algToPerform: "",
};
let time: number;
let interval;

export function initApp(scene) {
    getScramble(state.puzzle, scene).then(scram => {
        state.scramble = scram;
        callback(state);
    });
}

export function onChangePuzzle(event, scene) {
    const puzzle = event.target.value;
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

    getScramble(state.puzzle, scene).then(scram => {
        state.scramble = scram;
        callback(state);
    })
}

export function onPressScramble(scene) {
    getScramble(state.puzzle, scene).then(scram => {
        state.scramble = scram;
        scene.cube.solve();
        scene.cube.performAlg(scram);
        callback(state);
    });
}

export function getTimeText(): string {
    return time.toFixed(2);
}

async function getScramble(puzzle: Puzzle, scene: Scene): Promise<string> {
    return execNonblocking(() => {
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
    });
}

async function execNonblocking(fn): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(fn()), 0);
    });
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
    if (state.timerStatus === "stopped") {
        state.timerStatus = "holding down";
        callback(state);
        setTimeout(() => {
            if (state.timerStatus !== "holding down") return;
            state.timerStatus = "ready";
            callback(state);
        }, 300);
    } else if (state.timerStatus === "running") {
        state.timerStatus = "stopped";
        const timeDifference = (Date.now() - time) / 1000;
        state.timerText = timeDifference.toFixed(2);
        callback(state);
        clearInterval(interval);
    }
}

export function onUp() {
    if (state.timerStatus === "holding down") {
        state.timerStatus = "stopped";
        callback(state);
    } else if (state.timerStatus === "ready") {
        state.timerStatus = "running";
        time = Date.now();
        interval = setInterval(() => {
            const timeDifference = (Date.now() - time) / 1000;
            state.timerText = timeDifference.toFixed(2);
            callback(state);
        }, 10);
    } else if (state.timerStatus === "running") {
        state.timerStatus = "stopped";
        callback(state);
        clearInterval(interval);
    }
}