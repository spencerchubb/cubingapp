import { DEFAULT_SPEED } from "./constants.js";
import * as pieceIndices from "./pieceIndices";

// const canvas = document.querySelector('#glCanvas') as HTMLCanvasElement;
// const gl = canvas.getContext('webgl');
let gl;

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

function repeatColorFor4Vertices(color, rgba) {
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(rgba[0], rgba[1], rgba[2], rgba[3]);
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);

    return {
        color: color,
        arr: arr,
        buffer: buffer,
    };
}

export type AnimationData = {
    // List with a length of 3. One of the numbers must be -1 or 1, with the 
    // sign indication clockwise or counterclockwise. The other two numbers are zero.
    axis: number[];

    stickers: any[];
    stickersToAnimate: number[];
}

export class CubeLogic {
    axis: number;
    activeStickers: any;
    stickers: any[];
    underStickers: any[];
    numOfLayers: any;
    layersSq: number;
    layersHalf: number;
    layersEven: boolean;
    numOfStickers: number;
    currentStickers: any;
    affectedStickers: any;
    disableTurn: any;
    clockwise: any;
    animationQueue: AnimationData[];

    constructor(_gl) {
        gl = _gl;

        this.animationQueue = [];
    }

    new() {
        this.axis = 0;

        if (!this.activeStickers) {
            this.activeStickers = [];
        }

        this.stickers = [];
        const pushSeveral = (color, face) => {
            for (let i = 0; i < this.layersSq; i++) {
                let rgba = this.activeStickers.includes(face + i) ? color.active : color.inactive;
                this.stickers.push(repeatColorFor4Vertices(color, rgba));
            }
        }
        pushSeveral(WHITE, 0);
        pushSeveral(GREEN, 1 * this.layersSq);
        pushSeveral(YELLOW, 2 * this.layersSq);
        pushSeveral(BLUE, 3 * this.layersSq);
        pushSeveral(ORANGE, 4 * this.layersSq);
        pushSeveral(RED, 5 * this.layersSq);

        this.underStickers = [];
        for (let i = 0; i < this.layersSq * 6; i++) {
            this.underStickers.push(repeatColorFor4Vertices(BLACK, BLACK.active));
        }

        this.setAllAffectedStickers(false);
        this.setStickers();
    }

    naiveScramble() {
        let numTurns = this.numOfLayers * this.numOfLayers * 10;
        for (let i = 0; i < numTurns; i++) {
            let axis = Math.floor(Math.random() * 3);
            let layer = Math.floor(Math.random() * this.numOfLayers);
            let clockwise = Math.floor(Math.random() * 1) == 0.0;
            this._matchTurn(axis, layer, clockwise);
        }

        this.setStickers();
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
        this.numOfLayers = num;
        this.layersSq = this.numOfLayers * this.numOfLayers;
        this.layersHalf = Math.floor(this.numOfLayers / 2);
        this.layersEven = this.numOfLayers % 2 == 0;
        this.numOfStickers = this.layersSq * 6;
    }

    getStickers() {
        return this.currentStickers;
    }

    setStickers() {
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
        let numOfStickers = this.numOfLayers * this.numOfLayers * 6;
        this.affectedStickers = [];
        for (let i = 0; i < numOfStickers; i++) {
            this.affectedStickers.push(value);
        }
    }

    resetAffectedStickers() {
        // If numOfLayers === 1, make all stickers true, because everything
        // should be affected for 1x1.
        this.setAllAffectedStickers(this.numOfLayers === 1);
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

        for (let i = 1; i < this.numOfLayers - 1; i++) {
            this._matchTurn(axis, i, clockwise);
        }
    }

    wideTurn(axis, layer, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        this._matchTurn(axis, layer, clockwise);
        for (let i = 1; i < this.numOfLayers - 1; i++) {
            this._matchTurn(axis, i, clockwise);
        }

    }

    cubeRotate(axis, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        for (let i = 0; i < this.numOfLayers; i++) {
            this._matchTurn(axis, i, clockwise);
        }
    }

    _matchTurn(axis, layer, clockwise) {
        if (axis == 0) {
            this._turnXAxis(layer, clockwise);
            if (layer == 0) {
                this._turnOuter(5, clockwise);
            } else if (layer == this.numOfLayers - 1) {
                this._turnOuter(4, !clockwise);
            }
        } else if (axis == 1) {
            this._turnYAxis(layer, clockwise);
            if (layer == 0) {
                this._turnOuter(0, clockwise);
            } else if (layer == this.numOfLayers - 1) {
                this._turnOuter(2, !clockwise);
            }
        } else if (axis == 2) {
            this._turnZAxis(layer, clockwise);
            if (layer == 0) {
                this._turnOuter(1, clockwise);
            } else if (layer == this.numOfLayers - 1) {
                this._turnOuter(3, !clockwise);
            }
        } else {
            console.error(`Axis ${axis} not recognized`);
        }
    }

    _turnXAxis(layer, clockwise) {
        for (let i = 1; i <= this.numOfLayers; i++) {
            this._cycle(
                clockwise,
                0 * this.layersSq + this.layersSq - i - layer * this.numOfLayers,
                3 * this.layersSq + this.layersSq - i - layer * this.numOfLayers,
                2 * this.layersSq + this.layersSq - i - layer * this.numOfLayers,
                1 * this.layersSq + this.layersSq - i - layer * this.numOfLayers,
            );
        }
    }

    _turnYAxis(layer, clockwise) {
        for (let i = 0; i < this.numOfLayers; i++) {
            this._cycle(
                clockwise,
                1 * this.layersSq + i * this.numOfLayers + layer,
                4 * this.layersSq + i * this.numOfLayers + layer,
                3 * this.layersSq + (this.numOfLayers - i - 1) * this.numOfLayers + (this.numOfLayers - 1) - layer,
                5 * this.layersSq + i * this.numOfLayers + layer,
            );
        }
    }

    _turnZAxis(layer, clockwise) {
        for (let i = 0; i < this.numOfLayers; i++) {
            this._cycle(
                clockwise,
                0 * this.layersSq + (i + 1) * this.numOfLayers - 1 - layer,
                5 * this.layersSq + i + this.numOfLayers * layer,
                2 * this.layersSq + (this.numOfLayers - i - 1) * this.numOfLayers + layer,
                4 * this.layersSq + this.layersSq - (i + 1) - layer * this.numOfLayers,
            );
        }
    }

    _turnOuter(face, clockwise) {
        let offset = face * this.numOfLayers * this.numOfLayers;

        if (this.numOfLayers % 2 != 0) {
            let center = offset + Math.floor(this.numOfLayers * this.numOfLayers / 2);
            this.affectedStickers[center] = true;
        }

        for (let i = 0; i < Math.floor(this.numOfLayers / 2); i++) {
            // corners
            let top_l = offset + (this.numOfLayers + 1) * i;
            let top_r = offset + (this.numOfLayers - 1) * (this.numOfLayers - i);
            let bot_r = offset + (this.numOfLayers + 1) * (this.numOfLayers - i - 1);
            let bot_l = offset + (this.numOfLayers - 1) * (i + 1);

            this._cycle(clockwise, top_l, top_r, bot_r, bot_l);

            // edges
            let numOfEdges = this.numOfLayers - 2 * (i + 1);
            for (let j = 0; j < numOfEdges; j++) {
                this._cycle(
                    clockwise,
                    top_l + this.numOfLayers * (j + 1),
                    top_r + j + 1,
                    bot_l + this.numOfLayers * (numOfEdges - j),
                    top_l + (numOfEdges - j),
                );
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
            case "n": // x
                this.cubeRotate(0, true);
                return { rotate: true };
            case "b": // x'
                this.cubeRotate(0, false);
                return { rotate: true };
            case ";": // y
                this.cubeRotate(1, true);
                return { rotate: true };
            case "a": // y'
                this.cubeRotate(1, false);
                return { rotate: true };
            case "p": // z
                this.cubeRotate(2, true);
                return { rotate: true };
            case "q": // z'
                this.cubeRotate(2, false);
                return { rotate: true };
            case "j": // U
                this.turn(1, 0, true);
                return { turn: true };
            case "f": // U'
                this.turn(1, 0, false);
                return { turn: true };
            case "s": // D
                this.turn(1, this.numOfLayers - 1, false);
                return { turn: true };
            case "l": // D'
                this.turn(1, this.numOfLayers - 1, true);
                return { turn: true };
            case "h": // F
                this.turn(2, 0, true);
                return { turn: true };
            case "g": // F'
                this.turn(2, 0, false);
                return { turn: true };
            case "w": // B
                this.turn(2, this.numOfLayers - 1, false);
                return { turn: true };
            case "o": // B'
                this.turn(2, this.numOfLayers - 1, true);
                return { turn: true };
            case "d": // L
                this.turn(0, this.numOfLayers - 1, false);
                return { turn: true };
            case "e": // L'
                this.turn(0, this.numOfLayers - 1, true);
                return { turn: true };
            case "i": // R
                this.turn(0, 0, true);
                return { turn: true };
            case "k": // R'
                this.turn(0, 0, false);
                return { turn: true };
            case "[": // M
                this.sliceTurn(0, false);
                return { turn: true };
            case "'": // M'
                this.sliceTurn(0, true);
                return { turn: true };
            case "c": // E
                this.sliceTurn(1, false);
                return { turn: true };
            case ",": // E'
                this.sliceTurn(1, true);
                return { turn: true };
            case "y": // S
                this.sliceTurn(2, true);
                return { turn: true };
            case "t": // S'
                this.sliceTurn(2, false);
                return { turn: true };
            case "u": // r
                this.wideTurn(0, 0, true);
                return { turn: true };
            case "m": // r'
                this.wideTurn(0, 0, false);
                return { turn: true };
            case "v": // l
                this.wideTurn(0, this.numOfLayers - 1, false);
                return { turn: true };
            case "r": // l'
                this.wideTurn(0, this.numOfLayers - 1, true);
                return { turn: true };
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
                this.turn(1, this.numOfLayers - 1, !forward);
                break;
            case "D'":
                this.turn(1, this.numOfLayers - 1, forward);
                break;
            case "D2":
                this.turn(1, this.numOfLayers - 1, forward);
                this.turn(1, this.numOfLayers - 1, forward);
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
                this.turn(2, this.numOfLayers - 1, !forward);
                break;
            case "B'":
                this.turn(2, this.numOfLayers - 1, forward);
                break
            case "B2":
                this.turn(2, this.numOfLayers - 1, forward);
                this.turn(2, this.numOfLayers - 1, forward);
                break
            case "L":
                this.turn(0, this.numOfLayers - 1, !forward);
                break;
            case "L'":
                this.turn(0, this.numOfLayers - 1, forward);
                break;
            case "L2":
                this.turn(0, this.numOfLayers - 1, forward);
                this.turn(0, this.numOfLayers - 1, forward);
                break;
            case "l":
                this.wideTurn(0, this.numOfLayers - 1, !forward);
                break;
            case "l'":
                this.wideTurn(0, this.numOfLayers - 1, forward);
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
}