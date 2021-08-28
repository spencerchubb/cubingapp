import { DEFAULT_SPEED } from "./constants.js";

const canvas = document.querySelector('#glCanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

const WHITE = [1.0, 1.0, 1.0, 1.0];
const YELLOW = [1.0, 1.0, 0.0, 1.0];
const GREEN = [0.0, 1.0, 0.0, 1.0];
const BLUE = [0.0, 0.0, 1.0, 1.0];
const ORANGE = [1.0, 0.5, 0.0, 1.0];
const RED = [1.0, 0.0, 0.0, 1.0];

const DEFAULT_NUM_OF_LAYERS = 3;

const turnTypes = {
    KEYBOARD: 0,
    DRAG: 1,
}

function repeatColorFor4Vertices(rgba) {
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(rgba[0], rgba[1], rgba[2], rgba[3]);
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);

    return buffer;
}

function pushN(arr, color, n) {
    for (let i = 0; i < n; i++) {
        arr.push(repeatColorFor4Vertices(color));
    }
}

export class CubeLogic {
    constructor() {
        this.new(DEFAULT_NUM_OF_LAYERS);

        const keyboardSpeed = localStorage.getItem("#keyboardSpeed") || DEFAULT_SPEED;
        const dragSpeed = localStorage.getItem("#dragSpeed") || DEFAULT_SPEED;

        this.keyboardSpeedFactor = keyboardSpeed * 1000 / (Math.PI / 2);
        this.dragSpeedFactor = dragSpeed * 1000 / (Math.PI / 2);

        // The factor should be set each time you start a new turn type, whether it be keyboard or drag.
        // This is because the different turn types may be a different speed.
        this.factor = this.keyboardSpeedFactor;

        console.log(keyboardSpeed, dragSpeed);
        console.log(this.keyboardSpeedFactor, this.dragSpeedFactor);
    }

    new(numOfLayers) {
        this.numOfLayers = parseInt(numOfLayers);
        this.layersSq = numOfLayers * numOfLayers;
        this.layersHalf = parseInt(numOfLayers / 2);
        this.layersEven = numOfLayers % 2 == 0;
        this.numOfStickers = this.layersSq * 6;
        this.axis = 0;

        this.stickers = [];
        pushN(this.stickers, WHITE, this.layersSq);
        pushN(this.stickers, GREEN, this.layersSq);
        pushN(this.stickers, YELLOW, this.layersSq);
        pushN(this.stickers, BLUE, this.layersSq);
        pushN(this.stickers, ORANGE, this.layersSq);
        pushN(this.stickers, RED, this.layersSq);

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
        this.turnType = turnTypes.DRAG;
        this.factor = this.dragSpeedFactor;

        const ratio = dy / dx;
        const ratioThreshold = 0.55;
        if (id < this.layersSq) {
            if (ratio < -ratioThreshold || ratio > ratioThreshold) {
                this.turn(0, this.numOfLayers - 1 - parseInt(id / 3), dy < 0);
            } else {
                this.turn(2, this.numOfLayers - 1 - (id % 3), dx > 0);
            }
        } else if (id >= this.layersSq) {
            if (ratio < -ratioThreshold || ratio > ratioThreshold) {
                this.turn(0, this.numOfLayers - 1 - parseInt((id - this.layersSq) / 3), dy < 0);
            } else {
                this.turn(1, (id - this.layersSq) % 3, dx < 0);
            }
        }
    }

    doCubeRotateFromMouseDrag(x, y, dx, dy) {
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

    doCubeRotateFromButton(axis, clockwise) {
        this.turnType = turnTypes.DRAG;
        this.factor = this.dragSpeedFactor;

        this.cubeRotate(axis, clockwise);
    }
}