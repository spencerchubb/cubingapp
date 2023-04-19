import { Scene } from "../lib/scripts/rubiks-viz";
import { findInvalidMove } from "../lib/scripts/rubiks-viz/moves";
// import { searchForSuggestions } from "./suggestions";

export {};

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type State = {
    scene: Scene,
    moves: string,
    moveIndex: number,
    maxMoves: number,
    movesCursor: number,
    suggestions: string[],
}

let state: State = {
    scene: {} as Scene,
    moves: "",
    moveIndex: 0,
    maxMoves: 0,
    movesCursor: 0,
    suggestions: [],
};

let stepper = {} as Stepper;

export function initApp(scene: Scene) {
    state.scene = scene;

    let url = new URL(document.URL);
    state.moves = url.searchParams.get("moves") || "";

    // Test data
//     state.moves = `L2 U2 L2 R2 B2 D' R2 U L2 D L2 U' L U B F2 D2 L F' L B'
// F' L B' L R F L
// z2 U2 F U' F'
// R' U' R U' R' U' R`;

    updateCubeState(undefined);

    callback(state);
}

export function updateCubeState(event) {
    if (event !== undefined) {
        let start = (event.target as HTMLInputElement).selectionStart;
        state.movesCursor = start ?? 0;
    }

    let { moves, movesCursor } = state;

    movesCursor = getCursorNotInMiddleOfWord(moves, movesCursor);
    let movesPortion = moves.slice(0, movesCursor);
    let parsedAlg = parseAlg(movesPortion);
    
    let cube = state.scene.cube;

    let invalidMove = findInvalidMove(cube, parsedAlg.split(" "));
    if (invalidMove) {
        return;
    }

    cube.solve();
    let numMovesPerformed = cube.performAlg(parsedAlg);
    stepper = newStepper(state.scene, state.moves, numMovesPerformed);

    state.moveIndex = numMovesPerformed;
    state.maxMoves = stepper.length;
    callback(state);

    // searchForSuggestions(movesPortion).then(suggestions => {
    //     state.suggestions = suggestions;
    //     callback(state);
    // });
}

export function copyUrl() {
    let url = new URL(document.URL);
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

export function prev() {
    if (!stepper.prev()) return;
    callback(state);
}

export function next() {
    if (!stepper.next()) return;
    callback(state);
}

/**
 * If the cursor is in the middle of a word, move it to the start of the word.
 * For example, if the cursor is between F', we don't execute the F.
 */
function getCursorNotInMiddleOfWord(str: string, index: number): number {
    while (middleOfWord(str, index)) {
        index--;
    }
    return index;
}

function middleOfWord(str: string, index: number) {
    if (index <= 0 || index >= str.length) return false;
    const char = str[index];
    return char !== " " && char !== "\t" && char !== "\n";
}

export function onClickSuggestion(suggestion: string) {
    state.moves += " " + suggestion;
    callback(state);
}

type Stepper = {
    prev: () => boolean,
    next: () => boolean,
    length: number,
}

function replaceAll(str: string, search: string, replace: string) {
    while (str.includes(search)) {
        str = str.replace(search, replace);
    }
    return str;
}

/**
 * Parse an algorithm string and return a string of space-separated moves.
 * The algorithm may have an arbitrary number of spaces, tabs, and newlines.
 * Comments should be ignored.
 * 
 * TODO unit tests
 */
function parseAlg(str: string): string {
    let lines = str.split("\n");

    // Filter out empty lines
    lines = lines.filter(line => line.trim().length > 0);

    // Ignore comments
    lines = lines.map(line => line.split("//")[0]);

    // Remove tabs remove duplicate spaces, and trim
    lines = lines.map(line => {
        line = replaceAll(line, "\t", " ");
        line = replaceAll(line, "  ", " ");
        return line.trim();
    });

    // Join lines then split by spaces
    return lines.join(" ");
}

function newStepper(scene: Scene, alg: string, index: number): Stepper {
    let moves = parseAlg(alg).split(" ");
    return {
        prev: () => {
            if (index <= 0) return false;
            index--;
            scene.cube.performMove(moves[index], false);

            state.moveIndex = index;
            callback(state);

            return true;
        },
        next: () => {
            if (index >= moves.length) return false;
            scene.cube.performMove(moves[index], true);
            index++;

            state.moveIndex = index;
            callback(state);

            return true;
        },
        length: moves.length,
    };
}
