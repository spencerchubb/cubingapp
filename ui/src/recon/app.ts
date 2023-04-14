import type { Scene } from "../lib/scripts/rubiks-viz";

export {};

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type State = {
    scene: Scene,
    scramble: string,
    moves: string,
    splitMoves: string[],
    moveIndex: number,
    editMoves: boolean,
}

let state: State = {
    scene: {} as Scene,
    scramble: "",
    moves: "",
    splitMoves: [],
    moveIndex: 0,
    editMoves: false,
};

let stepper = {} as Stepper;

export function initApp(scene: Scene) {
    state.scene = scene;

    let url = new URL(document.URL);
    state.scramble = url.searchParams.get("scramble") || "";
    state.moves = url.searchParams.get("moves") || "";
    state.splitMoves = state.moves.split(" ");

    updateCubeState();

    callback(state);
}

/**
 * Trim string such that there is exactly one space between words, and newlines are replaced with spaces.
 */
function trimString(str: string) {
    str = replaceAll(str, "\n", " ");
    str = replaceAll(str, "\t", " ");
    str = replaceAll(str, "  ", " ");
    return str;
}

function replaceAll(str: string, searchValue: string, replaceValue: string) {
    while (str.includes(searchValue)) {
        str = str.replace(searchValue, replaceValue);
    }
    return str;
}

export function updateCubeState() {
    state.scene.cube.solve();
    const scramble = trimString(state.scramble);
    state.scene.cube.performAlg(scramble);

    stepper = createStepper(state.scene, state.moves);
    state.moveIndex = 0;
    callback(state);
}

export function onChangeMoves(event: Event) {
    const target = event.target as HTMLInputElement;
    state.moves = target.value;
    state.splitMoves = state.moves.split(" ");
    callback(state);
}

export function copyUrl() {
    let url = new URL(document.URL);
    urlSetParam(url, "scramble", state.scramble);
    urlSetParam(url, "moves", state.moves);
    navigator.clipboard.writeText(url.toString());
}

function urlSetParam(url: URL, key: string, value: string) {
    if (!value) {
        url.searchParams.delete(key);
        return;
    }
    url.searchParams.set(key, value);
}

export function viewMoves() {
    state.editMoves = false;

    updateCubeState();
}

export function editMoves() {
    state.editMoves = true;
    callback(state);
}

export function prev() {
    if (!stepper.prev()) return;
    state.moveIndex--;
    callback(state);
}

export function next() {
    if (!stepper.next()) return;
    state.moveIndex++;
    callback(state);
}

export function jumpToMove(moveIndex: number) {
    const cube = state.scene.cube;
    cube.solve();
    const scramble = trimString(state.scramble);
    cube.performAlg(scramble);
    const moves = state.splitMoves.slice(0, moveIndex).join(" ");
    cube.performAlg(moves);
    stepper = createStepper(state.scene, state.moves, moveIndex);

    state.moveIndex = moveIndex;
    callback(state);
}

type Stepper = {
    prev: () => boolean,
    next: () => boolean,
}

function createStepper(scene: Scene, alg: string, index: number = 0): Stepper {
    let moves = trimString(alg).split(" ");
    return {
        prev: () => {
            if (index <= 0) return false;
            index--;
            scene.cube.performMove(moves[index], false);
            return true;
        },
        next: () => {
            if (index >= moves.length) return false;
            scene.cube.performMove(moves[index], true);
            index++;
            return true;
        },
    };
}
