import { range } from "../util";
import { expandDoubleMoves } from "./alg";
import { KeyBindings, getKeyBindings } from "./keyBindings";

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

export abstract class Puzzle {
    stickers: number[];
    affectedStickers: boolean[];
    animationQueue: AnimationData[];

    private keyBindings: KeyBindings;

    constructor() {
        this.animationQueue = [];

        this.keyBindings = getKeyBindings();
    }

    abstract getHintType(gl: WebGLRenderingContext): WebGLBuffer;

    abstract numStickers(): number;

    /* Then start index of stickers that are draggable */
    abstract startDraggable(): number;

    /* Then end index of stickers that are draggable */
    abstract endDraggable(): number;

    abstract x(forward: boolean): void;
    abstract y(forward: boolean): void;
    abstract z(forward: boolean): void;
    abstract U(forward: boolean): void;
    abstract Uw(forward: boolean, n?: number): void;
    abstract D(forward: boolean): void;
    abstract Dw(forward: boolean, n?: number): void;
    abstract F(forward: boolean): void;
    abstract Fw(forward: boolean, n?: number): void;
    abstract B(forward: boolean): void;
    abstract Bw(forward: boolean, n?: number): void;
    abstract L(forward: boolean): void;
    abstract Lw(forward: boolean, n?: number): void;
    abstract R(forward: boolean): void;
    abstract Rw(forward: boolean, n?: number): void;
    abstract M(forward: boolean): void;
    abstract E(forward: boolean): void;
    abstract S(forward: boolean): void;

    protected resetAffectedStickers() {
        this.affectedStickers = Array(this.numStickers()).fill(false);
    }

    solve() {
        this.stickers = range(this.numStickers());
    }

    /**
     * Perform an imperfect scramble.
     * I would like to have random state scrambles eventually, but this was easier to implement.
     */
    naiveScramble() {
        // Arbitrary number that is large enough to do a fine job scrambling.
        let numTurns = this.numStickers() * 5;
        let moveMap = this.getMoveMap(true);
        for (let i = 0; i < numTurns; i++) {
            let randIndex = Math.floor(Math.random() * Object.keys(moveMap).length);
            let moveFunc = Object.values(moveMap)[randIndex];
            moveFunc();
        }
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

    getMoveMap(forward: boolean) {
        return {
            "x": () => this.x(forward),
            "x'": () => this.x(!forward),
            "x2": () => { this.x(forward); this.x(forward); },
            "x2'": () => { this.x(!forward); this.x(!forward); },
            "y": () => this.y(forward),
            "y'": () => this.y(!forward),
            "y2": () => { this.y(forward); this.y(forward); },
            "y2'": () => { this.y(!forward); this.y(!forward); },
            "z": () => this.z(forward),
            "z'": () => this.z(!forward),
            "z2": () => { this.z(forward); this.z(forward); },
            "z2'": () => { this.z(!forward); this.z(!forward); },
            "U": () => this.U(forward),
            "U'": () => this.U(!forward),
            "U2": () => { this.U(forward); this.U(forward); },
            "U2'": () => { this.U(!forward); this.U(!forward); },
            "Uw": () => this.Uw(forward),
            "Uw'": () => this.Uw(!forward),
            "Uw2": () => { this.Uw(forward); this.Uw(forward); },
            "Uw2'": () => { this.Uw(!forward); this.Uw(!forward); },
            "u": () => this.Uw(forward),
            "u'": () => this.Uw(!forward),
            "u2": () => { this.Uw(forward); this.Uw(forward); },
            "u2'": () => { this.Uw(!forward); this.Uw(!forward); },
            "D": () => this.D(forward),
            "D'": () => this.D(!forward),
            "D2": () => { this.D(forward); this.D(forward); },
            "D2'": () => { this.D(!forward); this.D(!forward); },
            "Dw": () => this.Dw(forward),
            "Dw'": () => this.Dw(!forward),
            "Dw2": () => { this.Dw(forward); this.Dw(forward); },
            "Dw2'": () => { this.Dw(!forward); this.Dw(!forward); },
            "d": () => this.Dw(forward),
            "d'": () => this.Dw(!forward),
            "d2": () => { this.Dw(forward); this.Dw(forward); },
            "d2'": () => { this.Dw(!forward); this.Dw(!forward); },
            "F": () => this.F(forward),
            "F'": () => this.F(!forward),
            "F2": () => { this.F(forward); this.F(forward); },
            "F2'": () => { this.F(!forward); this.F(!forward); },
            "Fw": () => this.Fw(forward),
            "Fw'": () => this.Fw(!forward),
            "Fw2": () => { this.Fw(forward); this.Fw(forward); },
            "Fw2'": () => { this.Fw(!forward); this.Fw(!forward); },
            "f": () => this.Fw(forward),
            "f'": () => this.Fw(!forward),
            "f2": () => { this.Fw(forward); this.Fw(forward); },
            "f2'": () => { this.Fw(!forward); this.Fw(!forward); },
            "B": () => this.B(forward),
            "B'": () => this.B(!forward),
            "B2": () => { this.B(forward); this.B(forward); },
            "B2'": () => { this.B(!forward); this.B(!forward); },
            "Bw": () => this.Bw(forward),
            "Bw'": () => this.Bw(!forward),
            "Bw2": () => { this.Bw(forward); this.Bw(forward); },
            "Bw2'": () => { this.Bw(!forward); this.Bw(!forward); },
            "b": () => this.Bw(forward),
            "b'": () => this.Bw(!forward),
            "b2": () => { this.Bw(forward); this.Bw(forward); },
            "b2'": () => { this.Bw(!forward); this.Bw(!forward); },
            "L": () => this.L(forward),
            "L'": () => this.L(!forward),
            "L2": () => { this.L(forward); this.L(forward); },
            "L2'": () => { this.L(!forward); this.L(!forward); },
            "L3": () => this.L(!forward),
            "L3'": () => this.L(forward),
            "Lw": () => this.Lw(forward),
            "Lw'": () => this.Lw(!forward),
            "Lw2": () => { this.Lw(forward); this.Lw(forward); },
            "Lw2'": () => { this.Lw(!forward); this.Lw(!forward); },
            "l": () => this.Lw(forward),
            "l'": () => this.Lw(!forward),
            "l2": () => { this.Lw(forward); this.Lw(forward); },
            "l2'": () => { this.Lw(!forward); this.Lw(!forward); },
            "R": () => this.R(forward),
            "R'": () => this.R(!forward),
            "R2": () => { this.R(forward); this.R(forward); },
            "R2'": () => { this.R(!forward); this.R(!forward); },
            "R3": () => this.R(!forward),
            "R3'": () => this.R(forward),
            "Rw": () => this.Rw(forward),
            "Rw'": () => this.Rw(!forward),
            "Rw2": () => { this.Rw(forward); this.Rw(forward); },
            "Rw2'": () => { this.Rw(!forward); this.Rw(!forward); },
            "r": () => this.Rw(forward),
            "r'": () => this.Rw(!forward),
            "r2": () => { this.Rw(forward); this.Rw(forward); },
            "r2'": () => { this.Rw(!forward); this.Rw(!forward); },
            "3Uw": () => this.Uw(forward, 3),
            "3Uw'": () => this.Uw(!forward, 3),
            "3Uw2": () => { this.Uw(forward, 3); this.Uw(forward, 3); },
            "3Dw": () => this.Dw(forward, 3),
            "3Dw'": () => this.Dw(!forward, 3),
            "3Dw2": () => { this.Dw(forward, 3); this.Dw(forward, 3); },
            "3Fw": () => this.Fw(forward, 3),
            "3Fw'": () => this.Fw(!forward, 3),
            "3Fw2": () => { this.Fw(forward, 3); this.Fw(forward, 3); },
            "3Bw": () => this.Bw(forward, 3),
            "3Bw'": () => this.Bw(!forward, 3),
            "3Bw2": () => { this.Bw(forward, 3); this.Bw(forward, 3); },
            "3Lw": () => this.Lw(forward, 3),
            "3Lw'": () => this.Lw(!forward, 3),
            "3Lw2": () => { this.Lw(forward, 3); this.Lw(forward, 3); },
            "3Rw": () => this.Rw(forward, 3),
            "3Rw'": () => this.Rw(!forward, 3),
            "3Rw2": () => { this.Rw(forward, 3); this.Rw(forward, 3); },
            "M": () => this.M(forward),
            "M'": () => this.M(!forward),
            "M2": () => { this.M(forward); this.M(forward); },
            "M2'": () => { this.M(!forward); this.M(!forward); },
            "E": () => this.E(forward),
            "E'": () => this.E(!forward),
            "E2": () => { this.E(forward); this.E(forward); },
            "E2'": () => { this.E(!forward); this.E(!forward); },
            "S": () => this.S(forward),
            "S'": () => this.S(!forward),
            "S2": () => { this.S(forward); this.S(forward); },
            "S2'": () => { this.S(!forward); this.S(!forward); },
        };
    }

    performMove(move: string, forward: boolean) {
        const moveFunc = this.getMoveMap(forward)[move];
        if (moveFunc) {
            moveFunc();
        } else {
            console.log("Invalid move: " + move);
        }
    }

    /**
     * Perform alg without animating any of the moves.
     * Returns the number of moves performed.
     */
    performAlg(alg: string): number {
        if (!alg) {
            console.log("Empty alg. Skipping.");
            return 0;
        }

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