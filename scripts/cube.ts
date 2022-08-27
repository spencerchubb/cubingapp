import * as pieceIndices from "./pieceIndices";
import { scramble3x3 } from "./scramble";

let gl;

// TODO consider renaming
// primary, secondary
// bright, dull
const WHITE = {
    active: [1.0, 1.0, 1.0, 1.0],
    inactive: [0.5, 0.5, 0.5, 1.0],
}
const YELLOW = {
    active: [1.0, 1.0, 0.0, 1.0],
    inactive: [0.5, 0.5, 0.0, 1.0],
}
const GREEN = {
    active: [0.0, 1.0, 0.0, 1.0],
    inactive: [0.0, 0.5, 0.0, 1.0],
}
const BLUE = {
    active: [0.0, 0.0, 1.0, 1.0],
    inactive: [0.0, 0.0, 0.5, 1.0],
}
const ORANGE = {
    active: [1.0, 0.5, 0.0, 1.0],
    inactive: [0.5, 0.25, 0.0, 1.0],
}
const RED = {
    active: [1.0, 0.0, 0.0, 1.0],
    inactive: [0.5, 0.0, 0.0, 1.0],
}
const BLACK = {
    active: [0.0, 0.0, 0.0, 1.0],
    inactive: [0.0, 0.0, 0.0, 1.0],
}

const COLORS = [WHITE, GREEN, YELLOW, BLUE, ORANGE, RED];

export type AnimationData = {
    // List with a length of 3. One of the numbers must be -1 or 1, with the 
    // sign indication clockwise or counterclockwise. The other two numbers are zero.
    axis: number[];

    stickers: any[];
    stickersToAnimate: number[];
}

const repeatColorFor4Vertices = (rgba, color, face) => {
    const arr = [
        rgba[0], rgba[1], rgba[2], rgba[3],
        rgba[0], rgba[1], rgba[2], rgba[3],
        rgba[0], rgba[1], rgba[2], rgba[3],
        rgba[0], rgba[1], rgba[2], rgba[3],
    ];

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);

    return {
        color,
        face,
        arr,
        buffer,
    };
}

export class CubeLogic {
    axis: number;
    activeStickers: any;
    stickers: any[];
    underStickers: any[];
    hintStickers: any[];
    layers: number;
    layersSq: number;
    layersHalf: number;
    layersEven: boolean;
    numOfStickers: number;
    currentStickers: any[];
    affectedStickers: any;
    disableTurn: boolean;
    clockwise: boolean;
    animationQueue: AnimationData[];
    animateTurns: boolean;

    constructor(_gl, animateTurns: boolean) {
        gl = _gl;

        this.animationQueue = [];
        this.animateTurns = animateTurns;
    }

    new() {
        this.axis = 0;

        if (!this.activeStickers) {
            this.activeStickers = [];
        }

        const state = Array(this.numOfStickers);
        this.underStickers = Array(this.numOfStickers);
        this.hintStickers = Array(this.numOfStickers);
        for (let i = 0; i < this.numOfStickers; i++) {
            state[i] = Math.floor(i / this.layersSq);

            // Pass in -1 for face because it shouldn't matter for the under stickers.
            this.underStickers[i] = repeatColorFor4Vertices(BLACK.active, BLACK, -1);
        }

        this.setCubeState(state);

        this.setAllAffectedStickers(false);
    }

    scramble() {
        if (this.layers === 3) {
            this.scramble3x3();
            return;
        }
        this.naiveScramble();
    }

    scramble3x3() {
        const colors = scramble3x3(this);
        this.setCubeState(colors);
    }

    /**
     * Perform an imperfect scramble.
     * I will eventually deprecate this, but this was easier to implement.
     */
    naiveScramble() {
        let numTurns = this.layersSq * 10;
        for (let i = 0; i < numTurns; i++) {
            let axis = Math.floor(Math.random() * 3);
            let layer = Math.floor(Math.random() * this.layers);
            let clockwise = Math.floor(Math.random() * 1) == 0.0;
            this._matchTurn(axis, layer, clockwise);
        }

        this.commitStickers();
    }

    cubleScramble() {
        for (let i = 0; i < 54; i++) {
            if (!pieceIndices.CENTERS.includes(i)) {
                gl.bindBuffer(gl.ARRAY_BUFFER, this.stickers[i].buffer);
                const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW); // consider making DYNAMIC_DRAW
            }
        }
    }

    /**
     * This method is used for the Cuble mini-game. This method should be called
     * after each turn. When a sticker is turned to its correct face, its color is revealed.
     */
    revealCorrectStickers() {
        for (let i = 0; i < 54; i++) {
            if ((0 <= i && i <= 8 && this.stickers[i].color == this.stickers[4].color)
                || (9 <= i && i <= 17 && this.stickers[i].color == this.stickers[13].color)
                || (18 <= i && i <= 26 && this.stickers[i].color == this.stickers[22].color)
                || (27 <= i && i <= 35 && this.stickers[i].color == this.stickers[31].color)
                || (36 <= i && i <= 44 && this.stickers[i].color == this.stickers[40].color)
                || (45 <= i && i <= 53 && this.stickers[i].color == this.stickers[49].color)) {
                gl.bindBuffer(gl.ARRAY_BUFFER, this.stickers[i].buffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.stickers[i].arr), gl.STATIC_DRAW); // consider making DYNAMIC_DRAW
            }
        }
    }

    setNumOfLayers(num: number) {
        this.layers = num;
        this.layersSq = num * num;
        this.layersHalf = Math.floor(this.layers / 2);
        this.layersEven = this.layers % 2 == 0;
        this.numOfStickers = this.layersSq * 6;
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
        return this.currentStickers.map(sticker => sticker.face);
    }

    setCubeState(state: number[]) {
        this.stickers = Array(this.numOfStickers);
        for (let i = 0; i < this.numOfStickers; i++) {
            const color = COLORS[state[i]];
            this.stickers[i] = repeatColorFor4Vertices(color.active, color, state[i]);
        }
        this.commitStickers();
    }

    getStickers() {
        return this.currentStickers;
    }

    /** 
     * Take the stickers that have been modified and transfer them to currentStickers 
    */
    commitStickers() {
        this.currentStickers = [...this.stickers];
    }

    getUnderStickers() {
        return this.underStickers;
    }

    getAffectedStickers() {
        return this.affectedStickers;
    }

    /**
     * Set all elements of `affectedStickers` to be `value`.
     */
    setAllAffectedStickers(value: boolean) {
        this.affectedStickers = Array(this.numOfStickers);
        for (let i = 0; i < this.numOfStickers; i++) {
            this.affectedStickers[i] = value;
        }
    }

    resetAffectedStickers() {
        // If numOfLayers === 1, make all stickers true, because everything
        // should be affected for 1x1.
        this.setAllAffectedStickers(this.layers === 1);
    }

    setActiveStickers(arr) {
        this.activeStickers = arr;
    }

    // Turning will be disabled on the "learn" page. There will be an animation instead of letting the user turn.
    setDisableTurn(val) {
        this.disableTurn = val;
    }

    activateAllStickers() {
        this.activeStickers = [];
        for (let i = 0; i < this.numOfStickers; i++) {
            this.activeStickers.push(i);
        }
    }

    shiftAnimation() {
        return this.animationQueue.shift();
    }

    pushAnimation(axis, clockwise, prevStickers) {
        if (!this.animateTurns) return;

        let x = clockwise ? -1 : 1;
        let rotationAxis;
        if (axis == 0) {
            rotationAxis = [x, 0, 0];
        } else if (axis == 1) {
            rotationAxis = [0, x, 0];
        } else if (axis == 2) {
            rotationAxis = [0, 0, x];
        } else {
            console.error(`Invalid axis '${axis}'`);
        }

        this.animationQueue.push({
            axis: rotationAxis,
            stickers: prevStickers,
            stickersToAnimate: this.affectedStickers,
        });
    }

    turn(axis, layer, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        this._matchTurn(axis, layer, clockwise);
    }

    sliceTurn(axis, clockwise) {
        this.setAllAffectedStickers(false);

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        for (let i = 1; i < this.layers - 1; i++) {
            this._matchTurn(axis, i, clockwise);
        }
    }

    wideTurn(axis, layer, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        this._matchTurn(axis, layer, clockwise);
        for (let i = 1; i < this.layers - 1; i++) {
            this._matchTurn(axis, i, clockwise);
        }

    }

    cubeRotate(axis, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        for (let i = 0; i < this.layers; i++) {
            this._matchTurn(axis, i, clockwise);
        }
    }

    _matchTurn(axis, layer, clockwise) {
        if (axis == 0) {
            this._turnXAxis(layer, clockwise);
            if (layer == 0) {
                this._turnOuter(5, clockwise);
            } else if (layer == this.layers - 1) {
                this._turnOuter(4, !clockwise);
            }
        } else if (axis == 1) {
            this._turnYAxis(layer, clockwise);
            if (layer == 0) {
                this._turnOuter(0, clockwise);
            } else if (layer == this.layers - 1) {
                this._turnOuter(2, !clockwise);
            }
        } else if (axis == 2) {
            this._turnZAxis(layer, clockwise);
            if (layer == 0) {
                this._turnOuter(1, clockwise);
            } else if (layer == this.layers - 1) {
                this._turnOuter(3, !clockwise);
            }
        } else {
            console.error(`Axis ${axis} not recognized`);
        }
    }

    _turnXAxis(layer, clockwise) {
        for (let i = 1; i <= this.layers; i++) {
            this._cycle(
                clockwise,
                0 * this.layersSq + this.layersSq - i - layer * this.layers,
                3 * this.layersSq + this.layersSq - i - layer * this.layers,
                2 * this.layersSq + this.layersSq - i - layer * this.layers,
                1 * this.layersSq + this.layersSq - i - layer * this.layers,
            );
        }
    }

    _turnYAxis(layer, clockwise) {
        for (let i = 0; i < this.layers; i++) {
            this._cycle(
                clockwise,
                1 * this.layersSq + i * this.layers + layer,
                4 * this.layersSq + i * this.layers + layer,
                3 * this.layersSq + (this.layers - i - 1) * this.layers + (this.layers - 1) - layer,
                5 * this.layersSq + i * this.layers + layer,
            );
        }
    }

    _turnZAxis(layer, clockwise) {
        for (let i = 0; i < this.layers; i++) {
            this._cycle(
                clockwise,
                0 * this.layersSq + (i + 1) * this.layers - 1 - layer,
                5 * this.layersSq + i + this.layers * layer,
                2 * this.layersSq + (this.layers - i - 1) * this.layers + layer,
                4 * this.layersSq + this.layersSq - (i + 1) - layer * this.layers,
            );
        }
    }

    _turnOuter(face, clockwise) {
        if (this.layers % 2 != 0) {
            let center = this.center(face);
            this.affectedStickers[center] = true;
        }

        for (let i = 0; i < Math.floor(this.layers / 2); i++) {
            const { topLeft, topRight, bottomLeft, bottomRight } = this.corners(face, i);

            this._cycle(clockwise, topLeft, topRight, bottomRight, bottomLeft);

            let numEdges = this.layers - 2 * (i + 1);
            for (let j = 0; j < numEdges; j++) {
                const { top, left, bottom, right } = this.edges(face, i, j);
                this._cycle(clockwise, top, right, bottom, left);
            }
        }
    }

    _cycle(clockwise, i1, i2, i3, i4) {
        this.affectedStickers[i1] = true;
        this.affectedStickers[i2] = true;
        this.affectedStickers[i3] = true;
        this.affectedStickers[i4] = true;

        if (clockwise) {
            this._cycleHelper(i1, i2, i3, i4);
        } else {
            this._cycleHelper(i4, i3, i2, i1);
        }
    }

    _cycleHelper(i1, i2, i3, i4) {
        let temp = this.stickers[i4];
        this.stickers[i4] = this.stickers[i3];
        this.stickers[i3] = this.stickers[i2];
        this.stickers[i2] = this.stickers[i1];
        this.stickers[i1] = temp;
    }

    matchKeyToTurn(key) {
        if (this.disableTurn) return;

        switch (key) {
            case "n":
                this.cubeRotate(0, true);
                return { notation: "x", rotate: true };
            case "b":
                this.cubeRotate(0, false);
                return { notation: "x'", rotate: true };
            case ";":
                this.cubeRotate(1, true);
                return { notation: "y", rotate: true };
            case "a":
                this.cubeRotate(1, false);
                return { notation: "y'", rotate: true };
            case "p":
                this.cubeRotate(2, true);
                return { notation: "z", rotate: true };
            case "q":
                this.cubeRotate(2, false);
                return { notation: "z'", rotate: true };
            case "j":
                this.turn(1, 0, true);
                return { notation: "U", turn: true };
            case "f": //
                this.turn(1, 0, false);
                return { notation: "U'", turn: true };
            case "s":
                this.turn(1, this.layers - 1, false);
                return { notation: "D", turn: true };
            case "l":
                this.turn(1, this.layers - 1, true);
                return { notation: "D'", turn: true };
            case "h":
                this.turn(2, 0, true);
                return { notation: "F", turn: true };
            case "g":
                this.turn(2, 0, false);
                return { notation: "F'", turn: true };
            case "w":
                this.turn(2, this.layers - 1, false);
                return { notation: "B", turn: true };
            case "o":
                this.turn(2, this.layers - 1, true);
                return { notation: "B'", turn: true };
            case "d":
                this.turn(0, this.layers - 1, false);
                return { notation: "L", turn: true };
            case "e":
                this.turn(0, this.layers - 1, true);
                return { notation: "L'", turn: true };
            case "i":
                this.turn(0, 0, true);
                return { notation: "R", turn: true };
            case "k":
                this.turn(0, 0, false);
                return { notation: "R'", turn: true };
            case "[":
                this.sliceTurn(0, false);
                return { notation: "M", turn: true };
            case "'":
                this.sliceTurn(0, true);
                return { notation: "M'", turn: true };
            case "c":
                this.sliceTurn(1, false);
                return { notation: "E", turn: true };
            case ",":
                this.sliceTurn(1, true);
                return { notation: "E'", turn: true };
            case "y":
                this.sliceTurn(2, true);
                return { notation: "S", turn: true };
            case "t":
                this.sliceTurn(2, false);
                return { notation: "S'", turn: true };
            case "u":
                this.wideTurn(0, 0, true);
                return { notation: "r", turn: true };
            case "m":
                this.wideTurn(0, 0, false);
                return { notation: "r'", turn: true };
            case "v":
                this.wideTurn(0, this.layers - 1, false);
                return { notation: "l", turn: true };
            case "r":
                this.wideTurn(0, this.layers - 1, true);
                return { notation: "l'", turn: true };
        }

        return;
    }

    stepAlgorithm(move: string, forward: boolean) {
        switch (move) {
            case "x":
                this.cubeRotate(0, forward);
                break;
            case "x'":
                this.cubeRotate(0, !forward);
                break;
            case "x2":
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
            case "D":
                this.turn(1, this.layers - 1, !forward);
                break;
            case "D'":
                this.turn(1, this.layers - 1, forward);
                break;
            case "D2":
                this.turn(1, this.layers - 1, forward);
                this.turn(1, this.layers - 1, forward);
                break;
            case "F":
                this.turn(2, 0, forward);
                break;
            case "F'":
                this.turn(2, 0, !forward);
                break;
            case "F2":
                this.turn(2, 0, forward);
                this.turn(2, 0, forward);
                break;
            case "B":
                this.turn(2, this.layers - 1, !forward);
                break;
            case "B'":
                this.turn(2, this.layers - 1, forward);
                break
            case "B2":
                this.turn(2, this.layers - 1, forward);
                this.turn(2, this.layers - 1, forward);
                break
            case "L":
                this.turn(0, this.layers - 1, !forward);
                break;
            case "L'":
                this.turn(0, this.layers - 1, forward);
                break;
            case "L2":
                this.turn(0, this.layers - 1, forward);
                this.turn(0, this.layers - 1, forward);
                break;
            case "l":
                this.wideTurn(0, this.layers - 1, !forward);
                break;
            case "l'":
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
                this.sliceTurn(0, forward);
                this.sliceTurn(0, forward);
                break;
            case "E":
                this.sliceTurn(1, !forward);
                break;
            case "E'":
                this.sliceTurn(1, forward);
                break;
            case "S":
                this.sliceTurn(2, forward);
                break;
            case "S'":
                this.sliceTurn(2, !forward);
                break;
            default:
                throw new Error("Invalid turn in algorithm: " + move);
        }
    }

    execAlg(alg: string) {
        if (!alg) return;

        let moves = alg.split(" ");
        for (let i = 0; i < moves.length; i++) {
            this.stepAlgorithm(moves[i], true);
        }

        // Clear the animation queue so that all the turns don't get animated
        this.animationQueue = [];
    }

    execAlgReverse(alg: string) {
        if (!alg) return;

        let moves = alg.split(" ");
        for (let i = moves.length - 1; i >= 0; i--) {
            this.stepAlgorithm(moves[i], false);
        }

        // Clear the animation queue so that all the turns don't get animated
        this.animationQueue = [];
    }

    stickerIsOnFace(sticker: number, face: number) {
        return face * this.layersSq <= sticker && sticker < (face + 1) * this.layersSq;
    }

    center(face: number) {
        return face * this.layersSq + Math.floor(this.layersSq / 2);
    }

    corners(face: number, layer: number) {
        const offset = face * this.layersSq;
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