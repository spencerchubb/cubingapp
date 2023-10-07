import { expandDoubleMoves } from "./alg";
import { type KeyBindings, getKeyBindings } from "./keyBindings";
import * as glMat from "./glMatrix";
import { DragDetector } from "./dragDetector";
import { Shape } from "./buffers";

export type Sticker = {
    /**
     * 0, 1, 2, 3, 4, 5, or 6. Indicates which face the sticker belongs to.
     */
    face: number,
    buffer: WebGLBuffer,
}

export type AnimationData = {
    /**
     * List of length 3.
     * One of the numbers must be -1 or 1, with the sign indicating clockwise or counterclockwise.
     * The other two numbers are zero.
     */
    axis: [number, number, number];

    degrees: number;
    stickers: number[];
    affectedStickers: boolean[];
}

export function getDefaultPerspective(): number[] {
    let mat = glMat.create();

    glMat.perspective(mat,
        50 * Math.PI / 180, // field of view
        1, // aspect
        0.1, // z near
        100.0); // z far

    glMat.translate(mat, [0.0, 0.0, -5.0]);

    glMat.rotate(mat,
        mat,
        45 * Math.PI / 180,
        [1, 0, 0],
    );

    return mat;
}

export abstract class Puzzle {
    stickers: number[];
    affectedStickers: boolean[];
    animationQueue: AnimationData[];

    keyBindings: KeyBindings;

    constructor() {
        this.animationQueue = [];

        this.keyBindings = getKeyBindings();
    }

    abstract getDragDetector(shapes: Shape[]): DragDetector;

    abstract getHintType(gl: WebGLRenderingContext): WebGLBuffer;

    abstract getPerspective(): number[];

    abstract getShapes(gl: WebGLRenderingContext | null, perspective: number[]): Shape[] | null;

    abstract numStickers(): number;

    /* Then start index of stickers that are draggable */
    abstract startDraggable(): number;

    /* Then end index of stickers that are draggable */
    abstract endDraggable(): number;

    abstract x(forward: boolean): void;
    abstract y(forward: boolean): void;
    abstract z(forward: boolean): void;
    abstract U(forward: boolean, layer?: number): void;
    abstract Uw(forward: boolean, layer?: number): void;
    abstract D(forward: boolean, layer?: number): void;
    abstract Dw(forward: boolean, layer?: number): void;
    abstract F(forward: boolean, layer?: number): void;
    abstract Fw(forward: boolean, layer?: number): void;
    abstract B(forward: boolean, layer?: number): void;
    abstract Bw(forward: boolean, layer?: number): void;
    abstract L(forward: boolean, layer?: number): void;
    abstract Lw(forward: boolean, layer?: number): void;
    abstract R(forward: boolean, layer?: number): void;
    abstract Rw(forward: boolean, layer?: number): void;
    abstract M(forward: boolean): void;
    abstract E(forward: boolean): void;
    abstract S(forward: boolean): void;

    protected resetAffectedStickers() {
        this.affectedStickers = Array(this.numStickers()).fill(false);
    }

    solve() {
        this.stickers = range(this.numStickers());
    }

    getStickers(): number[] {
        return this.animationQueue.length > 0
            ? this.animationQueue[0].stickers
            : this.stickers;
    }

    matchKeyToTurn(event: KeyboardEvent) {
        // Don't turn if the user is holding down ctrl
        // E.g., the user might be using Ctrl + Shift + R to refresh the page or Ctrl + Shift + I to open the dev tools
        if (event.ctrlKey) return undefined;

        const move = this.keyBindings[event.code];
        this.performMove(move, true);
    }

    getMoveMap() {
        return {
            "x": this.x,
            "y": this.y,
            "z": this.z,
            "U": this.U,
            "Uw": this.Uw,
            "u": this.Uw,
            "D": this.D,
            "Dw": this.Dw,
            "d": this.Dw,
            "F": this.F,
            "Fw": this.Fw,
            "f": this.Fw,
            "B": this.B,
            "Bw": this.Bw,
            "b": this.Bw,
            "L": this.L,
            "Lw": this.Lw,
            "l": this.Lw,
            "R": this.R,
            "Rw": this.Rw,
            "r": this.Rw,
            "M": this.M,
            "E": this.E,
            "S": this.S,
        };
    }

    performMove(move: string, forward: boolean) {
        if (!move) return;

        const { preNumber, middle, postNumber, prime } = parseMove(move);

        const moveFunc = this.getMoveMap()[middle];
        if (!moveFunc) {
            console.log("Invalid move: " + move);
            return;
        }

        const layer = (parseInt(preNumber) - 1) || 0;
        const quarterTurns = parseInt(postNumber) || 1;

        for (let i = 0; i < quarterTurns; i++) {
            moveFunc.call(this, prime ? !forward : forward, layer);
        }
    }

    /**
     * Perform alg without animating any of the moves.
     * Returns the number of moves performed.
     */
    performAlg(alg: string): number {
        if (!alg) return 0;

        let moves = alg.split(" ");
        for (let i = 0; i < moves.length; i++) {
            this.performMove(moves[i], true);

            // Clear the animation queue so turns don't get animated.
            this.animationQueue = [];
        }

        return moves.length;
    }

    performAlgWithAnimation(alg: string, onFinish: () => void): NodeJS.Timer {
        alg = expandDoubleMoves(alg);

        const delay = 800;
        let moves = alg.split(" ");
        let i = 0;
        return setInterval(() => {
            if (i >= moves.length) {
                onFinish();
                return;
            }
            this.performMove(moves[i], true);
            i++;
        }, delay);
    }
}

/**
 * Examples:
 * - "R" -> ["", "R", "", false]
 * - "B'" -> ["", "B", "", true]
 * - "2U" -> ["", "R", "", false]
 * - "3F'" -> ["", "F", "", true]
 * - "2D2" -> ["2", "D", "2", false]
 * - "3Lw2'" -> ["", "Lw", "2", true]
 */
function parseMove(inputString) {
    let preNumber = '';
    let middle = '';
    let postNumber = '';
    let prime = false;

    // Step 1: Find the pre-number (integer or empty string)
    let preNumberMatch = inputString.match(/^\d+/);
    if (preNumberMatch) {
        preNumber = preNumberMatch[0];
        // Remove the preNumber from the inputString
        inputString = inputString.slice(preNumber.length);
    }

    // Step 2: Find the post-number and optional apostrophe
    // Regular expression to match the post-number and apostrophe
    let postNumberMatch = inputString.match(/\d+/);
    if (postNumberMatch) {
        postNumber = postNumberMatch[0];
        // Remove the postNumber from the inputString to get the middle part
        middle = inputString.slice(0, inputString.indexOf(postNumber));
        // Check if the remaining part of the inputString ends with an apostrophe
        prime = inputString.endsWith("'");
    } else {
        // If no postNumber found, check if the inputString ends with an apostrophe
        prime = inputString.endsWith("'");
        // If it ends with an apostrophe, the remaining inputString is the middle part
        // Otherwise, the entire inputString is the middle part
        middle = prime ? inputString.slice(0, inputString.length - 1) : inputString;
    }

    return { preNumber, middle, postNumber, prime };
}

function range(n: number): number[] {
    const out = Array(n);
    for (let i = 0; i < n; i++) {
        out[i] = i;
    }
    return out;
}