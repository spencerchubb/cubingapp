import { BufferObject, createBuffers } from "./buffers";
import * as colors from "./colors";
import { scramble3x3 } from "./scramble";

let gl: WebGLRenderingContext;

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
    axis: number[];

    stickers: Sticker[];
    stickersToAnimate: boolean[];
}

export function setColor(sticker: Sticker, color: number[]) {
    const arr = [
        color[0], color[1], color[2], color[3],
        color[0], color[1], color[2], color[3],
        color[0], color[1], color[2], color[3],
        color[0], color[1], color[2], color[3],
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, sticker.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
}

export function sq(x: number): number {
    return x * x;
}

export function half(x: number): number {
    return Math.floor(x / 2);
}

export function even(x: number): boolean {
    return x % 2 == 0;
}

export function stickers(layers: number): number {
    return layers * layers * 6;
}

export class Cube {
    stickers: Sticker[];
    underStickers: Sticker[];
    layers: number;
    affectedStickers: boolean[];
    disableTurn: boolean;
    clockwise: boolean;
    animationQueue: AnimationData[];

    gl: WebGLRenderingContext;
    perspectiveMatrix: number[];
    buffers: BufferObject[];

    constructor(newGL: WebGLRenderingContext, perspectiveMatrix: number[]) {
        gl = newGL;
        this.animationQueue = [];

        this.gl = newGL;
        this.perspectiveMatrix = perspectiveMatrix;
    }

    setColors(colors: number[][]) {
        for (let i = 0; i < stickers(this.layers); i++) {
            setColor(this.stickers[i], colors[i]);
        }
    }

    solve() {
        const arr = Array(stickers(this.layers));
        for (let i = 0; i < stickers(this.layers); i++) {
            const face = this.stickerToFace(i);
            this.stickers[i].face = face;
            arr[i] = colors.faceToColor(face);
        }
        this.setColors(arr);
    }

    scramble() {
        if (this.layers === 3) {
            this.scramble3x3();
            return;
        }
        this.naiveScramble();
    }

    scramble3x3() {
        const state = scramble3x3(this);
        this.setCubeState(state);
    }

    /**
     * Perform an imperfect scramble.
     * I would like to have random state scrambles eventually, but this was easier to implement.
     */
    naiveScramble() {
        let numTurns = sq(this.layers) * 10;
        for (let i = 0; i < numTurns; i++) {
            let axis = Math.floor(Math.random() * 3);
            let layer = Math.floor(Math.random() * this.layers);
            let clockwise = Math.floor(Math.random() * 1) == 0.0;
            this.matchTurn(axis, layer, clockwise);
        }
    }

    setNumOfLayers(num: number) {
        this.layers = num;

        this.stickers = Array(stickers(num));
        this.underStickers = Array(stickers(num));
        for (let i = 0; i < stickers(num); i++) {
            const face = this.stickerToFace(i);

            this.stickers[i] = {
                face: face,
                buffer: gl.createBuffer(),
            };

            this.underStickers[i] = {
                face: face,
                buffer: gl.createBuffer(),
            };
            setColor(this.underStickers[i], colors.BLACK);
        }

        this.affectedStickers = Array(stickers(num)).fill(false);

        this.buffers = createBuffers(this);
        this.solve();
    }

    /**
     * Return a list of numbers representing the cube state. The list will 
     * contain integers 0-6, with each integer corresponding to a face's color.
     * 0 -> top
     * 1 -> front
     * 2 -> bottom
     * 3 -> back
     * 4 -> left
     * 5 -> right
     */
    getCubeState(): number[] {
        return this.stickers.map(sticker => sticker.face);
    }

    setCubeState(state: number[]) {
        for (let i = 0; i < stickers(this.layers); i++) {
            const color = colors.faceToColor(state[i]);
            this.stickers[i].face = state[i];
            setColor(this.stickers[i], color);
        }
    }

    private resetAffectedStickers() {
        // If numOfLayers === 1, make all stickers true.
        // Everything should be affected for 1x1.
        const arr = Array(stickers(this.layers));
        this.affectedStickers = arr.fill(this.layers === 1);
    }

    private pushAnimation(axis, clockwise, prevStickers) {
        let x = clockwise ? -1 : 1;
        let rotationAxis = [0, 0, 0];
        rotationAxis[axis] = x;

        this.animationQueue.push({
            axis: rotationAxis,
            stickers: prevStickers,
            stickersToAnimate: this.affectedStickers,
        });
    }

    turn(axis, layer, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        this.matchTurn(axis, layer, clockwise);
    }

    private sliceTurn(axis, clockwise) {
        const arr = Array(stickers(this.layers));
        this.affectedStickers = arr.fill(false);

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        for (let i = 1; i < this.layers - 1; i++) {
            this.matchTurn(axis, i, clockwise);
        }
    }

    private wideTurn(axis, layer, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        this.matchTurn(axis, layer, clockwise);
        for (let i = 1; i < this.layers - 1; i++) {
            this.matchTurn(axis, i, clockwise);
        }
    }

    cubeRotate(axis, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        for (let i = 0; i < this.layers; i++) {
            this.matchTurn(axis, i, clockwise);
        }
    }

    private matchTurn(axis, layer, clockwise) {
        if (axis == 0) {
            this.turnXAxis(layer, clockwise);
            if (layer == 0) {
                this.turnOuter(5, clockwise);
            } else if (layer == this.layers - 1) {
                this.turnOuter(4, !clockwise);
            }
        } else if (axis == 1) {
            this.turnYAxis(layer, clockwise);
            if (layer == 0) {
                this.turnOuter(0, clockwise);
            } else if (layer == this.layers - 1) {
                this.turnOuter(2, !clockwise);
            }
        } else if (axis == 2) {
            this.turnZAxis(layer, clockwise);
            if (layer == 0) {
                this.turnOuter(1, clockwise);
            } else if (layer == this.layers - 1) {
                this.turnOuter(3, !clockwise);
            }
        } else {
            console.error(`Axis ${axis} not recognized`);
        }
    }

    private turnXAxis(layer, clockwise) {
        for (let i = 1; i <= this.layers; i++) {
            this.cycle(
                clockwise,
                0 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
                3 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
                2 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
                1 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
            );
        }
    }

    private turnYAxis(layer, clockwise) {
        for (let i = 0; i < this.layers; i++) {
            this.cycle(
                clockwise,
                1 * sq(this.layers) + i * this.layers + layer,
                4 * sq(this.layers) + i * this.layers + layer,
                3 * sq(this.layers) + (this.layers - i - 1) * this.layers + (this.layers - 1) - layer,
                5 * sq(this.layers) + i * this.layers + layer,
            );
        }
    }

    private turnZAxis(layer, clockwise) {
        for (let i = 0; i < this.layers; i++) {
            this.cycle(
                clockwise,
                0 * sq(this.layers) + (i + 1) * this.layers - 1 - layer,
                5 * sq(this.layers) + i + this.layers * layer,
                2 * sq(this.layers) + (this.layers - i - 1) * this.layers + layer,
                4 * sq(this.layers) + sq(this.layers) - (i + 1) - layer * this.layers,
            );
        }
    }

    private turnOuter(face, clockwise) {
        if (this.layers % 2 != 0) {
            let center = this.center(face);
            this.affectedStickers[center] = true;
        }

        for (let i = 0; i < Math.floor(this.layers / 2); i++) {
            const { topLeft, topRight, bottomLeft, bottomRight } = this.corners(face, i);

            this.cycle(clockwise, topLeft, topRight, bottomRight, bottomLeft);

            let numEdges = this.layers - 2 * (i + 1);
            for (let j = 0; j < numEdges; j++) {
                const { top, left, bottom, right } = this.edges(face, i, j);
                this.cycle(clockwise, top, right, bottom, left);
            }
        }
    }

    private cycle(clockwise, i1, i2, i3, i4) {
        this.affectedStickers[i1] = true;
        this.affectedStickers[i2] = true;
        this.affectedStickers[i3] = true;
        this.affectedStickers[i4] = true;

        if (clockwise) {
            this.cycleHelper(i1, i2, i3, i4);
        } else {
            this.cycleHelper(i4, i3, i2, i1);
        }
    }

    private cycleHelper(i1, i2, i3, i4) {
        let temp = this.stickers[i4];
        this.stickers[i4] = this.stickers[i3];
        this.stickers[i3] = this.stickers[i2];
        this.stickers[i2] = this.stickers[i1];
        this.stickers[i1] = temp;
    }

    matchKeyToTurn(event: KeyboardEvent) {
        if (this.disableTurn) return undefined;

        // Don't turn if the user is holding down ctrl
        // E.g., the user might be using Ctrl + Shift + R to refresh the page or Ctrl + Shift + I to open the dev tools
        if (event.ctrlKey) return undefined;

        return this.matchKeyCodeToTurn(event.code);
    }

    /**
     * Why use KeyboardEvent.code instead of KeyboardEvent.key?
     * 1) `key` is dependent on "the state of modifier keys such as Shift as well as the keyboard locale and layout."
     * 2) `code` is useful when you want to handle keys based on their physical positions. This is common for games.
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
     */
    matchKeyCodeToTurn(code: string) {
        switch (code) {
            case "KeyN":
                this.cubeRotate(0, true);
                return { notation: "x", rotate: true };
            case "KeyB":
                this.cubeRotate(0, false);
                return { notation: "x'", rotate: true };
            case "Semicolon":
                this.cubeRotate(1, true);
                return { notation: "y", rotate: true };
            case "KeyA":
                this.cubeRotate(1, false);
                return { notation: "y'", rotate: true };
            case "KeyP":
                this.cubeRotate(2, true);
                return { notation: "z", rotate: true };
            case "KeyQ":
                this.cubeRotate(2, false);
                return { notation: "z'", rotate: true };
            case "KeyJ":
                this.turn(1, 0, true);
                return { notation: "U", turn: true };
            case "KeyF":
                this.turn(1, 0, false);
                return { notation: "U'", turn: true };
            case "KeyS":
                this.turn(1, this.layers - 1, false);
                return { notation: "D", turn: true };
            case "KeyL":
                this.turn(1, this.layers - 1, true);
                return { notation: "D'", turn: true };
            case "KeyH":
                this.turn(2, 0, true);
                return { notation: "F", turn: true };
            case "KeyG":
                this.turn(2, 0, false);
                return { notation: "F'", turn: true };
            case "KeyW":
                this.turn(2, this.layers - 1, false);
                return { notation: "B", turn: true };
            case "KeyO":
                this.turn(2, this.layers - 1, true);
                return { notation: "B'", turn: true };
            case "KeyD":
                this.turn(0, this.layers - 1, false);
                return { notation: "L", turn: true };
            case "KeyE":
                this.turn(0, this.layers - 1, true);
                return { notation: "L'", turn: true };
            case "KeyI":
                this.turn(0, 0, true);
                return { notation: "R", turn: true };
            case "KeyK":
                this.turn(0, 0, false);
                return { notation: "R'", turn: true };
            case "BracketLeft":
                this.sliceTurn(0, false);
                return { notation: "M", turn: true };
            case "Quote":
                this.sliceTurn(0, true);
                return { notation: "M'", turn: true };
            case "KeyC":
                this.sliceTurn(1, false);
                return { notation: "E", turn: true };
            case "Comma":
                this.sliceTurn(1, true);
                return { notation: "E'", turn: true };
            case "KeyY":
                this.sliceTurn(2, true);
                return { notation: "S", turn: true };
            case "KeyT":
                this.sliceTurn(2, false);
                return { notation: "S'", turn: true };
            case "KeyU":
                this.wideTurn(0, 0, true);
                return { notation: "r", turn: true };
            case "KeyM":
                this.wideTurn(0, 0, false);
                return { notation: "r'", turn: true };
            case "KeyV":
                this.wideTurn(0, this.layers - 1, false);
                return { notation: "l", turn: true };
            case "KeyR":
                this.wideTurn(0, this.layers - 1, true);
                return { notation: "l'", turn: true };
        }

        return undefined;
    }

    performMove(move: string, forward: boolean) {
        switch (move) {
            case "x":
                this.cubeRotate(0, forward);
                break;
            case "x'":
                this.cubeRotate(0, !forward);
                break;
            case "x2":
            case "x2'":
                this.cubeRotate(0, forward);
                this.cubeRotate(0, forward);
                break;
            case "y":
                this.cubeRotate(1, forward);
                break;
            case "y'":
                this.cubeRotate(1, !forward);
                break;
            case "y2":
            case "y2'":
                this.cubeRotate(1, forward);
                this.cubeRotate(1, forward);
                break;
            case "z":
                this.cubeRotate(2, forward);
                break;
            case "z'":
                this.cubeRotate(2, !forward);
                break;
            case "z2":
            case "z2'":
                this.cubeRotate(2, forward);
                this.cubeRotate(2, forward);
                break;
            case "U":
                this.turn(1, 0, forward);
                break;
            case "U'":
                this.turn(1, 0, !forward);
                break;
            case "U2":
            case "U2'":
                this.turn(1, 0, forward);
                this.turn(1, 0, forward);
                break;
            case "u":
                this.wideTurn(1, 0, forward);
                break;
            case "u'":
                this.wideTurn(1, 0, !forward);
                break;
            case "u2":
            case "u2'":
                this.wideTurn(1, 0, forward);
                this.wideTurn(1, 0, forward);
                break;
            case "D":
                this.turn(1, this.layers - 1, !forward);
                break;
            case "D'":
                this.turn(1, this.layers - 1, forward);
                break;
            case "D2":
            case "D2'":
                this.turn(1, this.layers - 1, forward);
                this.turn(1, this.layers - 1, forward);
                break;
            case "d":
                this.wideTurn(1, this.layers - 1, !forward);
                break;
            case "d'":
                this.wideTurn(1, this.layers - 1, forward);
                break;
            case "d2":
            case "d2'":
                this.wideTurn(1, this.layers - 1, forward);
                this.wideTurn(1, this.layers - 1, forward);
                break;
            case "F":
                this.turn(2, 0, forward);
                break;
            case "F'":
                this.turn(2, 0, !forward);
                break;
            case "F2":
            case "F2'":
                this.turn(2, 0, forward);
                this.turn(2, 0, forward);
                break;
            case "f":
                this.wideTurn(2, 0, forward);
                break;
            case "f'":
                this.wideTurn(2, 0, !forward);
                break;
            case "f2":
            case "f2'":
                this.wideTurn(2, 0, forward);
                this.wideTurn(2, 0, forward);
                break;
            case "B":
                this.turn(2, this.layers - 1, !forward);
                break;
            case "B'":
                this.turn(2, this.layers - 1, forward);
                break
            case "B2":
            case "B2'":
                this.turn(2, this.layers - 1, forward);
                this.turn(2, this.layers - 1, forward);
                break
            case "b":
                this.wideTurn(2, this.layers - 1, !forward);
                break;
            case "b'":
                this.wideTurn(2, this.layers - 1, forward);
                break;
            case "b2":
            case "b2'":
                this.wideTurn(2, this.layers - 1, forward);
                this.wideTurn(2, this.layers - 1, forward);
                break;
            case "L":
                this.turn(0, this.layers - 1, !forward);
                break;
            case "L'":
                this.turn(0, this.layers - 1, forward);
                break;
            case "L2":
            case "L2'":
                this.turn(0, this.layers - 1, forward);
                this.turn(0, this.layers - 1, forward);
                break;
            case "l":
                this.wideTurn(0, this.layers - 1, !forward);
                break;
            case "l'":
                this.wideTurn(0, this.layers - 1, forward);
                break;
            case "l2":
            case "l2'":
                this.wideTurn(0, this.layers - 1, forward);
                this.wideTurn(0, this.layers - 1, forward);
                break;
            case "R":
                this.turn(0, 0, forward);
                break;
            case "R'":
                this.turn(0, 0, !forward);
                break;
            case "R2":
            case "R2'":
                this.turn(0, 0, forward);
                this.turn(0, 0, forward);
                break;
            case "r":
                this.wideTurn(0, 0, forward);
                break;
            case "r'":
                this.wideTurn(0, 0, !forward);
                break;
            case "r2":
            case "r2'":
                this.wideTurn(0, 0, forward);
                this.wideTurn(0, 0, forward);
                break;
            case "M":
                this.turn(0, 1, !forward);
                break;
            case "M'":
                this.turn(0, 1, forward);
                break;
            case "M2":
            case "M2'":
                this.sliceTurn(0, forward);
                this.sliceTurn(0, forward);
                break;
            case "E":
                this.sliceTurn(1, !forward);
                break;
            case "E'":
                this.sliceTurn(1, forward);
                break;
            case "E2":
            case "E2'":
                this.sliceTurn(1, forward);
                this.sliceTurn(1, forward);
                break;
            case "S":
                this.sliceTurn(2, forward);
                break;
            case "S'":
                this.sliceTurn(2, !forward);
                break;
            case "S2":
            case "S2'":
                this.sliceTurn(2, forward);
            default:
                throw new Error("Invalid turn in algorithm: " + move);
        }
    }

    performAlg(alg: string) {
        if (!alg) return;

        let moves = alg.split(" ");
        for (let i = 0; i < moves.length; i++) {
            this.performMove(moves[i], true);
        }

        // Clear the animation queue so that all the turns don't get animated
        this.animationQueue = [];
    }

    performAlgReverse(alg: string) {
        if (!alg) return;

        let moves = alg.split(" ");
        for (let i = moves.length - 1; i >= 0; i--) {
            this.performMove(moves[i], false);
        }

        // Clear the animation queue so that all the turns don't get animated
        this.animationQueue = [];
    }

    stickerIsOnFace(sticker: number, face: number) {
        return face * sq(this.layers) <= sticker && sticker < (face + 1) * sq(this.layers);
    }

    stickerToFace(sticker: number) {
        return Math.floor(sticker / sq(this.layers));
    }

    center(face: number) {
        return face * sq(this.layers) + Math.floor(sq(this.layers) / 2);
    }

    corners(face: number, layer: number) {
        const offset = face * sq(this.layers);
        return {
            topLeft: offset + (this.layers + 1) * layer,
            topRight: offset + (this.layers - 1) * (this.layers - layer),
            bottomRight: offset + (this.layers + 1) * (this.layers - layer - 1),
            bottomLeft: offset + (this.layers - 1) * (layer + 1),
        };
    }

    edges(face: number, corner: number, edge: number) {
        const corners = this.corners(face, corner);
        let numEdges = this.layers - 2 * (corner + 1);
        return {
            top: corners.topLeft + this.layers * (edge + 1),
            left: corners.topLeft + (numEdges - edge),
            right: corners.topRight + edge + 1,
            bottom: corners.bottomLeft + this.layers * (numEdges - edge),
        };
    }
}