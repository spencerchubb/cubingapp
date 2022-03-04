import { DEFAULT_SPEED } from "./constants.js";

const canvas = document.querySelector('#glCanvas') as HTMLCanvasElement;
const gl = canvas.getContext('webgl');

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
    active: [1.0, 0.0, 0.0, 0.5],
    inactive: [0.5, 0.0, 0.0, 1.0],
}

const turnTypes = {
    KEYBOARD: 0,
    DRAG: 1,
}

function repeatColorFor4Vertices(color, activeStickers, sticker) {
    let rgba = activeStickers.includes(sticker) ? color.active : color.inactive;
    
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(rgba[0], rgba[1], rgba[2], rgba[3]);
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);

    return buffer;
}

function pushN(cube, color, face) {
    for (let i = 0; i < cube.layersSq; i++) {
        cube.stickers.push(repeatColorFor4Vertices(color, cube.activeStickers, face + i));
    }
}

export class CubeLogic {
    keyboardSpeedFactor: number;
    dragSpeedFactor: number;
    factor: number;
    axis: number;
    activeStickers: any;
    stickers: any[];
    numOfLayers: any;
    layersSq: number;
    layersHalf: number;
    layersEven: boolean;
    numOfStickers: number;
    currentStickers: any;
    affectedStickers: any;
    disableTurn: any;
    clockwise: any;
    turnType: number;
    
    constructor() {
        const keyboardSpeed: number = +localStorage.getItem("#keyboardSpeed") || +DEFAULT_SPEED;
        const dragSpeed = +localStorage.getItem("#dragSpeed") || +DEFAULT_SPEED;

        this.keyboardSpeedFactor = keyboardSpeed * 1000 / (Math.PI / 2);
        this.dragSpeedFactor = dragSpeed * 1000 / (Math.PI / 2);

        // The factor should be set each time you start a new turn type, whether it be keyboard or drag.
        // This is because the different turn types may be a different speed.
        this.factor = this.keyboardSpeedFactor;
    }

    new() {
        this.axis = 0;

        if (!this.activeStickers) {
            this.activeStickers = [];
        }

        this.stickers = [];
        pushN(this, WHITE, 0);
        pushN(this, GREEN, 9);
        pushN(this, YELLOW, 18);
        pushN(this, BLUE, 27);
        pushN(this, ORANGE, 36);
        pushN(this, RED, 45);
        this.resetAffectedStickers();
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

    setNumOfLayers(num) {
        this.numOfLayers = parseInt(num);
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

    getAffectedStickers() {
        return this.affectedStickers;
    }

    resetAffectedStickers() {
        let numOfStickers = this.numOfLayers * this.numOfLayers * 6;
        this.affectedStickers = [];
        for (let i = 0; i < numOfStickers; i++) {
            this.affectedStickers.push(false);
        }
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

    turn(axis, layer, clockwise) {
        this.axis = axis;
        this.clockwise = clockwise;
        
        this.resetAffectedStickers();

        this._matchTurn(axis, layer, clockwise);
    }

    sliceTurn(axis, clockwise) {
        this.axis = axis;
        this.clockwise = clockwise;

        this.resetAffectedStickers();

        for (let i = 1; i < this.numOfLayers - 1; i++) {
            this._matchTurn(axis, i, clockwise);
        }
    }

    wideTurn(axis, layer, clockwise) {
        this.axis = axis;
        this.clockwise = clockwise;

        this.resetAffectedStickers();

        this._matchTurn(axis, layer, clockwise);
        for (let i = 1; i < this.numOfLayers - 1; i++) {
            this._matchTurn(axis, i, clockwise);
        }

    }

    cubeRotate(axis, clockwise) {
        this.axis = axis;
        this.clockwise = clockwise;

        this.resetAffectedStickers();

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
        let layersSq = this.numOfLayers * this.numOfLayers;
        for (let i = 1; i <= this.numOfLayers; i++) {
            this._cycle(
                clockwise,
                0 * layersSq + layersSq - i - layer * this.numOfLayers,
                3 * layersSq + layersSq - i - layer * this.numOfLayers,
                2 * layersSq + layersSq - i - layer * this.numOfLayers,
                1 * layersSq + layersSq - i - layer * this.numOfLayers,
            );
        }
    }

    _turnYAxis(layer, clockwise) {
        let layersSq = this.numOfLayers * this.numOfLayers;
        for (let i = 0; i < this.numOfLayers; i++) {
            this._cycle(
                clockwise,
                1 * layersSq + i * this.numOfLayers + layer,
                4 * layersSq + i * this.numOfLayers + layer,
                3 * layersSq + (this.numOfLayers - i - 1) * this.numOfLayers + (this.numOfLayers - 1) - layer,
                5 * layersSq + i * this.numOfLayers + layer,
            );
        }
    }

    _turnZAxis(layer, clockwise) {
        let layersSq = this.numOfLayers * this.numOfLayers;
        for (let i = 0; i < this.numOfLayers; i++) {
            this._cycle(
                clockwise,
                0 * layersSq + (i + 1) * this.numOfLayers - 1 - layer,
                5 * layersSq + i + this.numOfLayers * layer,
                2 * layersSq + (this.numOfLayers - i - 1) * this.numOfLayers + layer,
                4 * layersSq + layersSq - (i + 1) - layer * this.numOfLayers,
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

        this.turnType = turnTypes.KEYBOARD;
        this.factor = this.keyboardSpeedFactor;

        switch (key) {
            case "n": // x
                this.cubeRotate(0, true);
                return true;
            case "b": // x'
                this.cubeRotate(0, false);
                return true;
            case ";": // y
                this.cubeRotate(1, true);
                return true;
            case "a": // y'
                this.cubeRotate(1, false);
                return true;
            case "p": // z
                this.cubeRotate(2, true);
                return true;
            case "q": // z'
                this.cubeRotate(2, false);
                return true;
            case "j": // U
                this.turn(1, 0, true);
                return true;
            case "f": // U'
                this.turn(1, 0, false);
                return true;
            case "s": // D
                this.turn(1, this.numOfLayers - 1, false);
                return true;
            case "l": // D'
                this.turn(1, this.numOfLayers - 1, true);
                return true;
            case "h": // F
                this.turn(2, 0, true);
                return true;
            case "g": // F'
                this.turn(2, 0, false);
                return true;
            case "w": // B
                this.turn(2, this.numOfLayers - 1, false);
                return true;
            case "o": // B'
                this.turn(2, this.numOfLayers - 1, true);
                return true;
            case "d": // L
                this.turn(0, this.numOfLayers - 1, false);
                return true;
            case "e": // L'
                this.turn(0, this.numOfLayers - 1, true);
                return true;
            case "i": // R
                this.turn(0, 0, true);
                return true;
            case "k": // R'
                this.turn(0, 0, false);
                return true;
            case "[": // M
                this.sliceTurn(0, false);
                return true;
            case "'": // M'
                this.sliceTurn(0, true);
                return true;
            case "c": // E
                this.sliceTurn(1, false);
                return true;
            case ",": // E'
                this.sliceTurn(1, true);
                return true;
            case "y": // S
                this.sliceTurn(2, true);
                return true;
            case "t": // S'
                this.sliceTurn(2, false);
                return true;
            case "u": // r
                this.wideTurn(0, 0, true);
                return true;
            case "m": // r'
                this.wideTurn(0, 0, false);
                return true;
            case "v": // l
                this.wideTurn(0, this.numOfLayers - 1, false);
                return true;
            case "r": // l'
                this.wideTurn(0, this.numOfLayers - 1, true);
                return true;
        }
    }

    doTurnFromMouseDrag(id, dx, dy) {
        if (this.disableTurn) return;

        this.turnType = turnTypes.DRAG;
        this.factor = this.dragSpeedFactor;

        const ratio = dy / dx;
        const ratioThreshold = 0.55;
        if (id < this.layersSq) {
            if (ratio < -ratioThreshold || ratio > ratioThreshold) {
                this.turn(0, this.numOfLayers - 1 - Math.floor(id / 3), dy < 0);
            } else {
                this.turn(2, this.numOfLayers - 1 - (id % 3), dx > 0);
            }
        } else if (id >= this.layersSq) {
            if (ratio < -ratioThreshold || ratio > ratioThreshold) {
                this.turn(0, this.numOfLayers - 1 - Math.floor((id - this.layersSq) / 3), dy < 0);
            } else {
                this.turn(1, (id - this.layersSq) % 3, dx < 0);
            }
        }
    }

    doCubeRotateFromMouseDrag(x, y, dx, dy) {
        if (this.disableTurn) return;
        
        this.turnType = turnTypes.DRAG;
        this.factor = this.dragSpeedFactor;

        // console.log(x, y, dx, dy);

        // top center
        if (y < 62 && x > 88 && x < 226) {
            console.log("top center");
            this.cubeRotate(0, dy < 0);
        }

        // bottom center
        else if (y > 260 && x > 88 && x < 226) {
            console.log("bottom center");
            this.cubeRotate(0, dy < 0);
        }

        // top left
        else if (x < 88 && y > 62 && y < 145) {
            console.log("top left");
            this.cubeRotate(2, dx > 0);
        }

        // top right
        else if (x > 226 && y > 62 && y < 145) {
            console.log("top right");
            this.cubeRotate(2, dx > 0);
        }

        // bottom left
        else if (x < 88 && y > 145 && y < 260) {
            console.log("bottom left");
            this.cubeRotate(1, dx < 0);
        }

        // bottom right
        else if (x > 226 && y > 145 && y < 260) {
            console.log("bottom right");
            this.cubeRotate(1, dx < 0);
        }
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
                this.turn(1, 0, forward);
                this.turn(1, 0, forward);
                break;
            case "D":
                this.turn(1, 2, !forward);
                break;
            case "D'":
                this.turn(1, 2, forward);
                break;
            case "D2":
                this.turn(1, 2, forward);
                this.turn(1, 2, forward);
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
                this.turn(2, 2, !forward);
                break;
            case "B'":
                this.turn(2, 2, forward);
                break
            case "B2":
                this.turn(2, 2, forward);
                this.turn(2, 2, forward);
                break
            case "L":
                this.turn(0, 2, !forward);
                break;
            case "L'":
                this.turn(0, 2, forward);
                break;
            case "L2":
                this.turn(0, 2, forward);
                this.turn(0, 2, forward);
                break;
            case "l":
                this.wideTurn(0, 2, !forward);
                break;
            case "l'":
                this.wideTurn(0, 2, forward);
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
                this.turn(0, 1, forward);
                this.turn(0, 1, forward);
                break;
            default:
                throw new Error("Invalid turn in algorithm: " + move);
        }
    }

    execAlg(alg: string) {
        let moves = alg.split(" ");
        for (let i = 0; i < moves.length; i++) {
            this.stepAlgorithm(moves[i], true);
        }
    }

    execAlgReverse(alg: string) {
        let moves = alg.split(" ");
        for (let i = moves.length - 1; i >= 0; i--) {
            this.stepAlgorithm(moves[i], false);
        }
    }
}