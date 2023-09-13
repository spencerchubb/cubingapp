import { type Scene, setPuzzle } from "../lib/scripts/rubiks-viz";
import { replaceAll } from "../lib/scripts/util";
import { type PuzzleTypes } from "../lib/scripts/common/types";
import { type Alg, AlgNew, AlgAddMove, AlgSimplify, AlgToString, StringToAlg } from "../lib/scripts/common/alg";
import { Pyraminx } from "../lib/scripts/rubiks-viz/pyraminx";

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type State = {
    scene: Scene,
    setup: string,
    alg: Alg,
    moves: string,
    puzzle: PuzzleTypes,
    playing: boolean,
    moveIndex: number,
    maxMoves: number,
    movesCursor: number,
}

let state: State = {
    scene: {} as Scene,
    setup: "",
    alg: AlgNew(),
    moves: "",
    puzzle: "3x3",
    playing: false,
    moveIndex: 0,
    maxMoves: 0,
    movesCursor: 0,
};

export let stepper = {} as Stepper;

export function initApp(scene: Scene, initData: { setup: string, moves: string, puzzle: string }) {
    state.scene = scene;

    state.setup = initData.setup;
    state.alg = StringToAlg(initData.moves);
    state.moves = initData.moves;
    state.puzzle = initData.puzzle as PuzzleTypes;

    setPuzzle(state.scene, state.puzzle);
    updateCubeState(undefined);

    // Hook into enableKey so we can record moves.
    scene.enableKey = (event: KeyboardEvent) => {
        if (event.ctrlKey) return false;

        // If inside textarea, return false.
        if (event.target instanceof HTMLTextAreaElement) return false;

        const move = scene.puzzle.keyBindings[event.code];
        addMove(move);

        return true;
    }

    scene.onDragMove = (move: string) => {
        if (!move) return;
        addMove(move);
    }
}

export function updateCubeState(event) {
    if (event !== undefined) {
        let start = (event.target as HTMLInputElement).selectionStart;
        state.movesCursor = start ?? 0;
    }

    let { setup, moves, movesCursor } = state;

    state.alg = StringToAlg(moves);

    movesCursor = getCursorNotInMiddleOfWord(moves, movesCursor);
    let movesPortion = moves.slice(0, movesCursor);
    let parsedAlg = parseAlg(movesPortion);

    let puzzle = state.scene.puzzle;

    puzzle.solve();
    puzzle.performAlg(parseAlg(setup));
    let numMovesPerformed = puzzle.performAlg(parsedAlg);
    stepper = newStepper(state.scene, state.moves, numMovesPerformed);

    state.moveIndex = numMovesPerformed;
    state.maxMoves = stepper.length;
    callback(state);
}

export function copyUrl() {
    let url = new URL(document.URL);
    urlSet(url, "moves", state.moves);
    urlSet(url, "setup", state.setup);
    urlSet(url, "puzzle", state.puzzle, "3x3");

    const urlStr = url.toString();
    navigator.clipboard.writeText(urlStr).then(() => {
        const MAX_LEN = 2048;
        if (urlStr.length > MAX_LEN) {
            alert(`The URL is ${urlStr.length} characters, and some browsers only allow 2048 characters. Make the reconstruction shorter if you want to shorten the url.`);
        }
    });
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

type Stepper = {
    prev: () => boolean,
    next: () => boolean,
    playPause: () => void,
    length: number,
}

/**
 * Parse an algorithm string and return a string of space-separated moves.
 * The algorithm may have an arbitrary number of spaces, tabs, and newlines.
 * Comments should be ignored.
 */
function parseAlg(str: string): string {
    str = replaceAll(str, "(", "");
    str = replaceAll(str, ")", "");

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

    // Filter out empty lines
    lines = lines.filter(line => line.trim().length > 0);

    // Join lines then split by spaces
    return lines.join(" ").trim();
}

function newStepper(scene: Scene, alg: string, index: number): Stepper {
    state.moveIndex = index;
    let moves = parseAlg(alg).split(" ");

    // If moves = [""], set moves = []
    if (moves.length === 1 && moves[0] === "") moves = [];

    const DELAY = 800;
    let interval;

    return {
        prev: () => {
            if (state.moveIndex <= 0) return false;
            state.moveIndex--;
            scene.puzzle.performMove(moves[state.moveIndex], false);

            callback(state);

            return true;
        },
        next: () => {
            if (state.moveIndex >= moves.length) return false;
            scene.puzzle.performMove(moves[state.moveIndex], true);
            state.moveIndex++;

            callback(state);

            return true;
        },
        playPause: () => {
            state.playing = !state.playing;
            if (state.playing) {
                // Restart if at the end.
                if (state.moveIndex >= moves.length) {
                    state.moveIndex = 0;
                }

                interval = setInterval(() => {
                    if (!stepper.next()) {
                        clearInterval(interval);
                        state.playing = false;
                    }
                    callback(state);
                }, DELAY);
            } else {
                clearInterval(interval);
                state.playing = false;
            }
            callback(state);
        },
        length: moves.length,
    };
}

function urlSet(url: URL, key: string, value: string, defaultValue: string = "") {
    if (value && value !== defaultValue) {
        url.searchParams.set(key, value);
    } else {
        url.searchParams.delete(key);
    }
}

function addMove(move: string) {
    state.alg = state.alg.slice(0, state.moveIndex);
    AlgAddMove(state.alg, move);

    const modulo = state.puzzle === "Pyraminx" ? 3 : 4;
    AlgSimplify(state.alg, modulo);

    state.moveIndex = state.alg.length;
    state.maxMoves = state.alg.length;

    state.moves = AlgToString(state.alg);

    stepper = newStepper(state.scene, state.moves, state.moveIndex);

    callback(state);
}
