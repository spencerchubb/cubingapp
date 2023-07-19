import * as SessionsAPI from "../lib/scripts/api/sessions";
import * as SolvesAPI from "../lib/scripts/api/solves";
import { Scene, newCube, newPyraminx } from "../lib/scripts/rubiks-viz";
import { CubingUser, addAuthCallback } from "../lib/scripts/auth";
import { PuzzleTypes, getScramble } from "./scramble";

export let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = (_state) => {
        state = Object.assign(state, _state);
        _callback(state);
    };
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

export type TimerStatus = "stopped" | "scrambled" | "inspecting" | "holding down" | "ready" | "running";

type ExtendedSolve = SolvesAPI.MinSolve & {
    formattedTime: string;
}

type State = {
    user?: CubingUser,
    sessions?: SessionsAPI.Session[],
    /** The session that is currently being edited or deleted */
    sessionEditing?: SessionsAPI.Session,
    solves: ExtendedSolve[],
    puzzle: PuzzleTypes,
    scramble: string,
    stack: { puzzle: PuzzleTypes, scramble: string }[],
    timerStatus: TimerStatus,
    timerText: string,
    algToPerform: string,
    inspection: boolean,
    modalType: undefined | "edit session" | "delete session" | "new session" | "select session" | "update session",
}

let state: State = {
    user: undefined,
    sessions: undefined,
    solves: [],
    puzzle: (localStorage.getItem("puzzle") as PuzzleTypes) ?? "3x3",
    scramble: "",
    stack: [],
    timerStatus: "scrambled",
    timerText: "0.00",
    algToPerform: "",
    inspection: getInspection(),
    modalType: undefined,
};
let scene: Scene;
let time: number;
let interval: NodeJS.Timer;
let inspectTime: number;
let moves: string[] = [];
let penalty: SolvesAPI.Penalty;

addAuthCallback(user => {
    state.user = user;
    loadInitialSession();
    callback(state);
});

export async function initApp(_scene) {
    scene = _scene;

    setPuzzle(state.puzzle);
    performNewScramble();

    loadInitialSession();
}

async function loadInitialSession() {
    if (!state.user?.auth) return;
    state.sessions = await SessionsAPI.readAll();
    if (state.sessions.length === 0) {
        createInitialSession();
        return;
    }
    const solves = await SolvesAPI.readAll(state.sessions[0].id);
    state.solves = solves.map(solve => {
        return {
            ...solve,
            formattedTime: formatTime(solve.time, solve.penalty),
        };
    });
    callback(state);
}

async function createInitialSession() {
    if (!state.user?.auth) return;
    if (state.sessions && state.sessions.length > 0) return;
    state.sessions = await SessionsAPI.readAll();
    if (state.sessions.length > 0) return;
    const id = await SessionsAPI.create("Session 1");
    state.sessions = [{ id, name: "Session 1" }];
    callback(state);
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

function setPuzzle(puzzle: PuzzleTypes) {
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

    // Hook into the puzzle's performMove function so we can record moves.
    const originalPerformMove = scene.puzzle.performMove;
    scene.puzzle.performMove = (move: string, forward: boolean) => {
        if (!move) return;
        moves.push(move);
        originalPerformMove.call(scene.puzzle, move, forward);
    }
}

export function solve() {
    scene.puzzle.solve();
    state.timerStatus = "stopped";
    state.timerText = "Click to scramble";
    callback(state);
}

function performNewScramble() {
    const scram = getScramble(state.puzzle);
    state.scramble = scram;
    scene.puzzle.solve();
    scene.puzzle.performAlg(scram);
    callback(state);

    // Reset moves because we just scrambled.
    moves = [];
}

document.addEventListener("keydown", event => {
    if (event.target instanceof HTMLInputElement) return;
    if (event.key === " ") {
        onDown();
    }
});

document.addEventListener("keyup", event => {
    if (event.target instanceof HTMLInputElement) return;
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

export async function onDown() {
    switch (state.timerStatus) {
        case "stopped":
            state.timerStatus = "scrambled";
            state.timerText = "0.00";
            callback(state);

            nextScramble();
            break;
        case "scrambled":
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

            const timeDifference = ((Date.now() - time) / 1000);
            const formattedTime = formatTime(timeDifference, penalty);
            state.timerText = formattedTime;

            if (state.user?.auth) {
                state.sessions = state.sessions && state.sessions.length > 0 ?
                    state.sessions
                    : [{ 
                        id: await SessionsAPI.create("Session 1"),
                        name: "Session 1",
                    }];
                state.solves.unshift({ id: 0, time: timeDifference, penalty, formattedTime });
                SolvesAPI.create({
                    id: 0,
                    time: timeDifference,
                    scramble: state.scramble,
                    moves: moves.join(" "),
                    puzzle: state.puzzle,
                    sessionId: state.sessions[0].id,
                    penalty,
                }).then((id) => {
                    state.solves[0].id = id;
                });
                moves = [];
                penalty = undefined;
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

function formatTime(time: number, penalty?: string): string {
    const rounded = time.toFixed(2);
    return penalty
        ? `${rounded} (${penalty})`
        : rounded;
}
