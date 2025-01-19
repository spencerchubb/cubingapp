/**
 * Example: R U R' U' -> U R U' R'
 */
function invertAlg(alg) {
    if (!alg) return "";
    return alg
        .split(" ")
        .map(invertMove)
        .reverse()
        .join(" ");
}

function invertMove(move) {
    if (move === "/") {
        // SQ1 slash
        return "/";
    } else if (move.includes(",")) {
        // SQ1 move
        const [top, bot] = move.split(",").map(n => parseInt(n));
        return `${-top},${-bot}`;
    } else if (move.endsWith("'")) {
        return move.slice(0, -1);
    }

    return move + "'";
}

function sq(x) {
    return x * x;
}

class Puzzle {

    resetAffectedStickers() {
        this.affectedStickers = Array(this.numStickers()).fill(false);
    }

    solve() {
        this.stickers = range(this.numStickers());
    }

    getStickers() {
        return this.animationQueue.length > 0
            ? this.animationQueue[0].stickers
            : this.stickers;
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

    performMove(move, forward) {
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
    performAlg(alg) {
        if (!alg) return 0;

        let moves = alg.split(" ");
        for (let i = 0; i < moves.length; i++) {
            this.performMove(moves[i], true);

            // Clear the animation queue so turns don't get animated.
            this.animationQueue = [];
        }

        return moves.length;
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

function range(n) {
    const out = Array(n);
    for (let i = 0; i < n; i++) {
        out[i] = i;
    }
    return out;
}

class Cube extends Puzzle {
    constructor(layers) {
        super();

        this.layers = layers;

        this.resetAffectedStickers();
        this.solve();
    }

    // Implement abstract method
    numStickers() {
        return this.layers * this.layers * 6;
    }

    // Implement abstract method
    x(forward) {
        this.cubeRotate(0, forward);
    }

    // Implement abstract method
    y(forward) {
        this.cubeRotate(1, forward);
    }

    // Implement abstract method
    z(forward) {
        this.cubeRotate(2, forward);
    }

    // Implement abstract method
    U(forward, n) {
        this.turn(1, n, forward);
    }

    // Implement abstract method
    Uw(forward, n) {
        n = Math.max(n, 1);
        this.wideTurn(1, 0, n, forward);
    }

    // Implement abstract method
    D(forward, n) {
        this.turn(1, this.layers - 1 - n, !forward);
    }

    // Implement abstract method
    Dw(forward, n) {
        n = Math.max(n, 1);
        this.wideTurn(1, this.layers - 1, this.layers - 1 - n, !forward);
    }

    // Implement abstract method
    F(forward, n) {
        this.turn(2, n, forward);
    }

    // Implement abstract method
    Fw(forward, n) {
        n = Math.max(n, 1);
        this.wideTurn(2, 0, n, forward);
    }

    // Implement abstract method
    B(forward, n) {
        this.turn(2, this.layers - 1 - n, !forward);
    }

    // Implement abstract method
    Bw(forward, n) {
        n = Math.max(n, 1);
        this.wideTurn(2, this.layers - 1, this.layers - 1 - n, !forward);
    }

    // Implement abstract method
    L(forward, n) {
        this.turn(0, this.layers - 1 - n, !forward);
    }

    // Implement abstract method
    Lw(forward, n) {
        n = Math.max(n, 1);
        this.wideTurn(0, this.layers - 1, this.layers - 1 - n, !forward);
    }

    // Implement abstract method
    R(forward, layer) {
        this.turn(0, layer, forward);
    }

    // Implement abstract method
    Rw(forward, n) {
        n = Math.max(n, 1);
        this.wideTurn(0, 0, n, forward);
    }

    // Implement abstract method
    M(forward) {
        this.sliceTurn(0, !forward);
    }

    // Implement abstract method
    E(forward) {
        this.sliceTurn(1, !forward);
    }

    // Implement abstract method
    S(forward) {
        this.sliceTurn(2, forward);
    }

    turn(axis, layer, clockwise) {
        this.resetAffectedStickers();

        this.matchTurn(axis, layer, clockwise);
    }

    sliceTurn(axis, clockwise) {
        this.resetAffectedStickers();

        for (let i = 1; i < this.layers - 1; i++) {
            this.matchTurn(axis, i, clockwise);
        }
    }

    wideTurn(axis, startlayer, endLayer, clockwise) {
        this.resetAffectedStickers();

        let layer1 = Math.min(startlayer, endLayer);
        let layer2 = Math.max(startlayer, endLayer);
        for (let i = layer1; i <= layer2; i++) {
            this.matchTurn(axis, i, clockwise);
        }
    }

    cubeRotate(axis, clockwise) {
        this.resetAffectedStickers();

        for (let i = 0; i < this.layers; i++) {
            this.matchTurn(axis, i, clockwise);
        }
    }

    matchTurn(axis, layer, clockwise) {
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

    turnXAxis(layer, clockwise) {
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

    turnYAxis(layer, clockwise) {
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

    turnZAxis(layer, clockwise) {
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

    turnOuter(face, clockwise) {
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

    cycle(clockwise, ...indices) {
        indices.forEach(i => this.affectedStickers[i] = true);

        if (clockwise) {
            let tmp = this.stickers[indices[indices.length - 1]];
            for (let i = indices.length - 1; i > 0; i--) {
                this.stickers[indices[i]] = this.stickers[indices[i - 1]];
            }
            this.stickers[indices[0]] = tmp;
        } else {
            let tmp = this.stickers[indices[0]];
            for (let i = 0; i < indices.length - 1; i++) {
                this.stickers[indices[i]] = this.stickers[indices[i + 1]];
            }
            this.stickers[indices[indices.length - 1]] = tmp;
        }
    }

    stickerIsOnFace(sticker, face) {
        return face * sq(this.layers) <= sticker && sticker < (face + 1) * sq(this.layers);
    }

    center(face) {
        return face * sq(this.layers) + Math.floor(sq(this.layers) / 2);
    }

    corners(face, layer) {
        const offset = face * sq(this.layers);
        return {
            topLeft: offset + (this.layers + 1) * layer,
            topRight: offset + (this.layers - 1) * (this.layers - layer),
            bottomRight: offset + (this.layers + 1) * (this.layers - layer - 1),
            bottomLeft: offset + (this.layers - 1) * (layer + 1),
        };
    }

    edges(face, corner, edge) {
        const corners = this.corners(face, corner);
        let numEdges = this.layers - 2 * (corner + 1);
        return {
            top: corners.topLeft + this.layers * (edge + 1),
            left: corners.topLeft + (numEdges - edge),
            right: corners.topRight + edge + 1,
            bottom: corners.bottomLeft + this.layers * (numEdges - edge),
        };
    }

    getSvg() {
        // Default div is gray, the others each have a color.
        const colors = ["x-u", "x-f", "x-d", "x-b", "x-l", "x-r", "div"];

        const layersSq = sq(this.layers);
        const sticker = (i) => {
            const color = colors[Math.floor(this.stickers[i] / layersSq)];
            return `<${color}></${color}>`;
        }
        const stickers = [];

        if (this.layers === 2) {
            stickers.push("<x-t></x-t>");

            stickers.push(sticker(13));
            stickers.push(sticker(15));

            stickers.push("<x-t></x-t>");

            stickers.push(sticker(16));
            stickers.push(sticker(0));
            stickers.push(sticker(2));
            stickers.push(sticker(22));
            stickers.push(sticker(18));
            stickers.push(sticker(1));
            stickers.push(sticker(3));
            stickers.push(sticker(20));

            stickers.push("<x-t></x-t>");

            stickers.push(sticker(4));
            stickers.push(sticker(6));

            stickers.push("<x-t></x-t>");
        } else if (this.layers === 3) {
            stickers.push("<x-t></x-t>");

            stickers.push(sticker(29));
            stickers.push(sticker(32));
            stickers.push(sticker(35));

            stickers.push("<x-t></x-t>");

            stickers.push(sticker(36));
            stickers.push(sticker(0));
            stickers.push(sticker(3));
            stickers.push(sticker(6));
            stickers.push(sticker(51));
            stickers.push(sticker(39));
            stickers.push(sticker(1));
            stickers.push(sticker(4));
            stickers.push(sticker(7));
            stickers.push(sticker(48));
            stickers.push(sticker(42));
            stickers.push(sticker(2));
            stickers.push(sticker(5));
            stickers.push(sticker(8));
            stickers.push(sticker(45));

            stickers.push("<x-t></x-t>");

            stickers.push(sticker(9));
            stickers.push(sticker(12));
            stickers.push(sticker(15));

            stickers.push("<x-t></x-t>");
        } else if (this.layers === 4) {
            stickers.push("<x-t></x-t>");

            stickers.push(sticker(51));
            stickers.push(sticker(55));
            stickers.push(sticker(59));
            stickers.push(sticker(63));

            stickers.push("<x-t></x-t>");

            stickers.push(sticker(64));
            stickers.push(sticker(0));
            stickers.push(sticker(4));
            stickers.push(sticker(8));
            stickers.push(sticker(12));
            stickers.push(sticker(92));
            stickers.push(sticker(68));
            stickers.push(sticker(1));
            stickers.push(sticker(5));
            stickers.push(sticker(9));
            stickers.push(sticker(13));
            stickers.push(sticker(88));
            stickers.push(sticker(72));
            stickers.push(sticker(2));
            stickers.push(sticker(6));
            stickers.push(sticker(10));
            stickers.push(sticker(14));
            stickers.push(sticker(84));
            stickers.push(sticker(76));
            stickers.push(sticker(3));
            stickers.push(sticker(7));
            stickers.push(sticker(11));
            stickers.push(sticker(15));
            stickers.push(sticker(80));
            
            stickers.push("<x-t></x-t>");

            stickers.push(sticker(16));
            stickers.push(sticker(20));
            stickers.push(sticker(24));
            stickers.push(sticker(28));

            stickers.push("<x-t></x-t>");
        }

        return stickers.join("");
    }

    getSvg3D() {
        const range = (start, end) => Array.from({ length: (end - start) }, (v, k) => k + start);

        // Default div is gray, the others each have a color.
        const colors = ["x-u", "x-f", "x-d", "x-b", "x-l", "x-r", "div"];
        const layersSq = sq(this.layers);
        const stickerToColor = (i) => colors[Math.floor(this.stickers[i] / layersSq)];

        return `<div><div>${range(0, layersSq).map(i => `<${stickerToColor(i)}></${stickerToColor(i)}>`).join("")}</div><div>${range(1 * layersSq, 2 * layersSq).map(i => `<${stickerToColor(i)}></${stickerToColor(i)}>`).join("")}</div><div>${range(5 * layersSq, 6 * layersSq).map(i => `<${stickerToColor(i)}></${stickerToColor(i)}>`).join("")}</div></div>`;
    }
}

const WHITE = "#fff";
const GRAY = [0.5, 0.5, 0.5];
const DARK_GRAY = "#444";
const YELLOW = [1.0, 1.0, 0.0];
const GREEN = "#0f0";
const BLUE = "#00f";
const ORANGE = "#f80";
const RED = "#f00";
const BLACK = [0.0, 0.0, 0.0];
const PURPLE = [0.5, 0.0, 1.0];

class SQ1 {

    constructor() {
        this.top = [
            0, 1, 2, 3, 4, 5, 6, 7, // top face, clockwise from ULF
        ];
        this.bottom = [
            8, 9, 10, 11, 12, 13, 14, 15, // bottom face, clockwise from DFL
        ];
    }

    svgTop() {
        return this.getSvg(this.top, true);
    }

    svgBottom() {
        return this.getSvg(this.bottom, false);
    }

    performAlg(alg) {
        const moves = alg.split(" ");
        for (const move of moves) {
            if (move === "/") {
                this.slash();
                continue;
            }
            const [top, bottom] = move.split(",");
            this.U(parseInt(top));
            this.D(parseInt(bottom));
        }
    }

    slash() {
        let topCount = 0;
        let bottomCount = 0;
        let topIndex = 0;
        let bottomIndex = 0;

        // Even numbers are worth 2, odd numbers are worth 1
        for (const value of this.top) {
            topCount += value % 2 === 0 ? 2 : 1;
            topIndex += 1;

            if (topCount == 6) break;
        }
        for (const value of this.bottom) {
            bottomCount += value % 2 === 0 ? 2 : 1;
            bottomIndex += 1;

            if (bottomCount == 6) break;
        }

        let top = this.top.slice(topIndex);
        let bottom = this.bottom.slice(bottomIndex);
        this.top = this.top.slice(0, topIndex).concat(bottom.reverse());
        this.bottom = this.bottom.slice(0, bottomIndex).concat(top.reverse());
    }

    U(n) {
        this.top = this.turnFace(-n, this.top);
    }

    D(n) {
        this.bottom = this.turnFace(n, this.bottom);
    }

    getTotal(face) {
        let total = 0;
        for (const value of face) {
            total += value % 2 === 0 ? 2 : 1;
        }
        return total;
    }
    
    turnFace(n, face) {
        let count = 0;
        let index = 0;
        let total = this.getTotal(face);
    
        if (n < 0) {
            n = total + n;
        }
    
        // Even numbers are worth 2, odd numbers are worth 1
        for (const value of face) {
            count += value % 2 === 0 ? 2 : 1;
            index += 1;
    
            if (count === n) break;
        }
    
        let beginning = face.slice(0, index);
        let end = face.slice(index);
        return end.concat(beginning);
    }

    getSvg(face, top) {
        const pieces = [
            [DARK_GRAY, BLUE, RED],
            [DARK_GRAY, BLUE],
            [DARK_GRAY, ORANGE, BLUE],
            [DARK_GRAY, ORANGE],
            [DARK_GRAY, GREEN, ORANGE],
            [DARK_GRAY, GREEN],
            [DARK_GRAY, RED, GREEN],
            [DARK_GRAY, RED],
            [WHITE, RED, BLUE],
            [WHITE, BLUE],
            [WHITE, BLUE, ORANGE],
            [WHITE, ORANGE],
            [WHITE, ORANGE, GREEN],
            [WHITE, GREEN],
            [WHITE, GREEN, RED],
            [WHITE, RED],
        ];
    
        let size = 100;
        let mid = size / 2;
        let pad = 0.15 * size; // padding around the whole thing
        let width = 0.1 * size; // width of outer pieces
        let inner = (width + pad - mid) / Math.tan(75 * Math.PI / 180) + mid; // inner width of corner
        let outer = (pad - mid) / Math.tan(75 * Math.PI / 180) + mid; // outer width of corner
    
        let corner1 = `${mid},${mid} ${inner},${size - width - pad} ${width + pad},${size - width - pad} ${width + pad},${size - inner}`;
        let corner2 = `${pad},${size - pad} ${width + pad},${size - width - pad} ${width + pad},${size - inner} ${pad},${size - outer}`;
        let corner3 = `${pad},${size - pad} ${width + pad},${size - width - pad} ${inner},${size - width - pad} ${outer},${size - pad}`;
        let edge1 = `${mid},${mid} ${size - inner},${size - width - pad} ${inner},${size - width - pad}`;
        let edge2 = `${outer},${size - pad} ${inner},${size - width - pad} ${size - inner},${size - width - pad} ${size - outer},${size - pad}`;
    
        if (!top) {
            [corner2, corner3] = [corner3, corner2];
        }
    
        let angle = 0; // angle in degrees
        let polygons = [];
        for (let i = 0; i < face.length; i++) {
            const piece = pieces[face[i]];
            if (piece.length === 3) {
                polygons.push({ points: rotatePoints2d(corner1, mid, mid, angle), fill: piece[0] });
                polygons.push({ points: rotatePoints2d(corner2, mid, mid, angle), fill: piece[1] });
                polygons.push({ points: rotatePoints2d(corner3, mid, mid, angle), fill: piece[2] });
    
                angle -= 60;
            } else if (piece.length === 2) {
                polygons.push({ points: rotatePoints2d(edge1, mid, mid, angle - 30), fill: piece[0] });
                polygons.push({ points: rotatePoints2d(edge2, mid, mid, angle - 30), fill: piece[1] });
    
                angle -= 30;
            } else {
                console.error("Invalid piece length:", piece);
            }
        }
    
        return `<svg viewBox="0 0 ${size} ${size}" stroke-linejoin="round">${polygons.map(polygon => {
                return `<polygon points="${polygon.points}" fill="${polygon.fill}"/>`;
            }).join("")}</svg>`;
    }
}

function cycle(state, cycle, clockwise) {
    if (!clockwise) cycle.reverse();
    const temp = state[cycle[cycle.length - 1]];
    for (let i = cycle.length - 1; i > 0; i--) {
        state[cycle[i]] = state[cycle[i - 1]];
    }
    state[cycle[0]] = temp;
}

function cycles(state, cycles, clockwise) {
    cycles.forEach(_cycle => cycle(state, _cycle, clockwise));
}

class Pyraminx {
    constructor() {
        this.state = [
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 2, 2,
            3, 3, 3, 3, 3, 3, 3, 3, 3,
        ];
    }

    performMove(move) {
        const F1 = 0, F2 = 1, F3 = 2, F4 = 3, F5 = 4, F6 = 5, F7 = 6, F8 = 7, F9 = 8;
        const L1 = 9, L2 = 10, L3 = 11, L4 = 12, L5 = 13, L6 = 14, L7 = 15, L8 = 16, L9 = 17;
        const R1 = 18, R2 = 19, R3 = 20, R4 = 21, R5 = 22, R6 = 23, R7 = 24, R8 = 25, R9 = 26;
        const D1 = 27, D2 = 28, D3 = 29, D4 = 30, D5 = 31, D6 = 32, D7 = 33, D8 = 34, D9 = 35;
    
        const U_CYCLES = [[F2, L2, R2], [F3, L3, R3], [F4, L4, R4]];
        const U_TIP_CYCLES = [[F1, L1, R1]];
        const L_CYCLES = [[F2, D4, L7], [F6, D3, L8], [F7, D2, L4]];
        const L_TIP_CYCLES = [[F5, D1, L9]];
        const R_CYCLES = [[F4, R7, D4], [F8, R6, D8], [F7, R2, D7]];
        const R_TIP_CYCLES = [[F9, R5, D9]];
    
        switch (move) {
            case "U": cycles(this.state, U_CYCLES, true); cycles(this.state, U_TIP_CYCLES, true); break;
            case "U'": cycles(this.state, U_CYCLES, false); cycles(this.state, U_TIP_CYCLES, false); break;
            case "L":
            case "L2'": cycles(this.state, L_CYCLES, true); cycles(this.state, L_TIP_CYCLES, true); break;
            case "L'":
            case "L2": cycles(this.state, L_CYCLES, false); cycles(this.state, L_TIP_CYCLES, false); break;
            case "R":
            case "R2'": cycles(this.state, R_CYCLES, true); cycles(this.state, R_TIP_CYCLES, true); break;
            case "R'":
            case "R2": cycles(this.state, R_CYCLES, false); cycles(this.state, R_TIP_CYCLES, false); break;
            default:
                console.error("Invalid move:", move);
        }
    }

    performAlg(alg) {
        alg = alg.replaceAll("(", "").replaceAll(")", "");
        alg = alg.split(" ");
        alg.forEach(move => {
            this.performMove(move);
        });
    }

    getSvg() {
        const colors = ["#0f0", "#f00", "#00f", "#ff0"];
    
        const polygons = [
            // tip
            "500,577 666,673 334,673",
    
            // second layer
            "500,770 334,673 166,770",
            "500,770 666,673 334,673",
            "500,770 666,673 834,770",
    
            // first layer
            "10,860 166,770 334,860",
            "500,770 334,860 166,770",
            "500,770 334,860 666,860",
            "500,770 666,860 834,770",
            "990,860 666,860 834,770",
        ];
    
        let html = "<svg id='svg' viewBox='0 0 1000 870' stroke='black' stroke-width='8' stroke-linejoin='round'>";  
        polygons.forEach((points, i) => {
            html += `<polygon fill="${colors[this.state[i]]}" points="${points}" />`;
            html += `<polygon fill="${colors[this.state[i + 9]]}" points="${rotatePoints2d(points, 500, 577, 240)}" />`;
            html += `<polygon fill="${colors[this.state[i + 18]]}" points="${rotatePoints2d(points, 500, 577, 120)}" />`;
        });
        html += "</svg>";
        return html;
    }
}

class Skewb {
    constructor() {
        this.stickers = {
            "U": 0, "UBL": 0, "URB": 0, "UFR": 0, "ULF": 0,
            "F": 1, "FUL": 1, "FRU": 1, "FDR": 1, "FLD": 1,
            "R": 2, "RUF": 2, "RBU": 2, "RDB": 2, "RFD": 2,
            "B": 3, "BLU": 3, "BUR": 3, "BDL": 3, "BRD": 3,
            "L": 4, "LFU": 4, "LUB": 4, "LDF": 4, "LBD": 4,
            "D": 5, "DFL": 5, "DRF": 5, "DLB": 5, "DBR": 5,
        };
    }

    performMove(move) {
        const R_CYCLES = [["U", "R", "F"], ["UFR", "RUF", "FRU"], ["ULF", "RBU", "FDR"], ["FUL", "URB", "RFD"], ["LFU", "BUR", "DRF"]];
        const F_CYCLES = [["U", "F", "L"], ["ULF", "FUL", "LFU"], ["UFR", "FLD", "LUB"], ["FRU", "LDF", "UBL"], ["RUF", "DFL", "BLU"]];
        const Y_CYCLES = [["F", "L", "B", "R"], ["ULF", "UBL", "URB", "UFR"], ["LFU", "BLU", "RBU", "FRU"], ["FUL", "LUB", "BUR", "RUF"], ["DFL", "DLB", "DBR", "DRF"], ["FLD", "LBD", "BRD", "RFD"], ["LDF", "BDL", "RDB", "FDR"]];
        const Z_CYCLES = [["U", "R", "D", "L"], ["ULF", "RUF", "DRF", "LDF"], ["LFU", "UFR", "RFD", "DFL"], ["FUL", "FRU", "FDR", "FLD"], ["UBL", "RBU", "DBR", "LBD"], ["BLU", "BUR", "BRD", "BDL"], ["LUB", "URB", "RDB", "DLB"]];

        switch (move) {
            case "R": cycles(this.stickers, R_CYCLES, true); break;
            case "R'": cycles(this.stickers, R_CYCLES, false); break;
            case "F": cycles(this.stickers, F_CYCLES, true); break;
            case "F'": cycles(this.stickers, F_CYCLES, false); break;
            case "y": cycles(this.stickers, Y_CYCLES, true); break;
            case "y2":
            case "y2'": cycles(this.stickers, Y_CYCLES, true); cycles(this.stickers, Y_CYCLES, true); break;
            case "y'": cycles(this.stickers, Y_CYCLES, false); break;
            case "z": cycles(this.stickers, Z_CYCLES, true); break;
            case "z2":
            case "z2'": cycles(this.stickers, Z_CYCLES, true); cycles(this.stickers, Z_CYCLES, true); break;
            case "z'": cycles(this.stickers, Z_CYCLES, false); break;
            default: console.error("Invalid move:", move);
        }
    }

    performAlg(alg) {
        alg = alg.replaceAll("(", "").replaceAll(")", "");
        alg = alg.split(" ");
        alg.forEach(move => {
            this.performMove(move);
        });
    }

    getSvg() {
        const colors = ["var(--u-face)", "var(--f-face)", "var(--r-face)", "var(--b-face)", "var(--l-face)", "var(--d-face)", "#808080"];
    
        return `<svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="${colors[this.stickers['U']]}" points="500,250 750,500 500,750 250,500" />
            <polygon fill="${colors[this.stickers['UBL']]}" points="250,250 500,250 250,500" />
            <polygon fill="${colors[this.stickers['URB']]}" points="750,250 500,250 750,500" />
            <polygon fill="${colors[this.stickers['UFR']]}" points="750,500 500,750 750,750" />
            <polygon fill="${colors[this.stickers['ULF']]}" points="250,500 500,750 250,750" />
            <polygon fill="${colors[this.stickers['FUL']]}" points="250,750 500,750 250,995" />
            <polygon fill="${colors[this.stickers['F']]}" points="500,750 750,995 250,995" />
            <polygon fill="${colors[this.stickers['FRU']]}" points="750,750 500,750 750,995" />
            <polygon fill="${colors[this.stickers['RUF']]}" points="750,750 750,500 990,750" />
            <polygon fill="${colors[this.stickers['R']]}" points="990,750 990,250 750,500" />
            <polygon fill="${colors[this.stickers['RBU']]}" points="750,250 750,500 990,250" />
            <polygon fill="${colors[this.stickers['BLU']]}" points="250,250 500,250 250,10" />
            <polygon fill="${colors[this.stickers['B']]}" points="500,250 250,10 750,10" />
            <polygon fill="${colors[this.stickers['BUR']]}" points="750,250 500,250 750,10" />
            <polygon fill="${colors[this.stickers['LFU']]}" points="250,750 250,500 10,750" />
            <polygon fill="${colors[this.stickers['L']]}" points="10,750 10,250 250,500" />
            <polygon fill="${colors[this.stickers['LUB']]}" points="250,250 250,500 10,250" />
        </svg>`;
    }
}

function rotatePoints2d(points, cx, cy, angle) {
    return points.split(" ").map(point => {
        let [x, y] = point.split(",");
        let xFloat = parseFloat(x);
        let yFloat = parseFloat(y);
        let [nx, ny] = rotatePoint2d(xFloat, yFloat, cx, cy, angle);
        return `${Math.floor(nx)},${Math.floor(ny)}`;
    }).join(" ");
}

function rotatePoint2d(x, y, cx, cy, angle) {
    let radians = angle * Math.PI / 180;
    let cos = Math.cos(radians);
    let sin = Math.sin(radians);
    let nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    let ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

function renderCase(algSet, caseName, _case) {
    const entries = Object.entries(_case.algs);
    let alg = entries[0][0];

    // Remove parentheses from alg. Triggers are often placed in parentheses.
    alg = alg.replace(/\(/g, "").replace(/\)/g, "");

    alg = invertAlg(alg);

    let puzzle;
    if (algSet.puzzle === "SQ1") {
        puzzle = new SQ1();
    } else if (algSet.puzzle === "Pyraminx") {
        puzzle = new Pyraminx();
    } else if (algSet.puzzle === "Skewb") {
        puzzle = new Skewb();
    } else {
        const layers = parseInt(algSet.puzzle[0]); // Example: "3x3" -> "3"
        puzzle = new Cube(layers);
    }

    if (algSet.gray) {
        algSet.gray.forEach(sticker => {
            // Skewb is a special case. The gray color is associated with index 6.
            if (algSet.puzzle === "Skewb") {
                puzzle.stickers[sticker] = 6;
                return;
            }
            
            // Colors are determined by the face the sticker is on.
            // For example, on a 3x3 cube, 0-8 is white, 45-53 is red, etc.
            // 54 is higher than any face, so it's gray.
            puzzle.stickers[sticker] = puzzle.layers * puzzle.layers * 6;
        });
    }

    if (entries[0][1].setup) puzzle.performAlg(entries[0][1].setup);
    puzzle.performAlg(alg);

    let diagram;
    let className;

    if (algSet.puzzle === "SQ1") {
        diagram = `${puzzle.svgTop()}${puzzle.svgBottom()}`;
        className = "viz-sq1";
    } else if (algSet.puzzle === "Pyraminx") {
        diagram = puzzle.getSvg();
        className = "viz-pyraminx";
    } else if (algSet.diagramType === "2D") {
        diagram = puzzle.getSvg();
        className = `viz-2d-${algSet.puzzle}`;
    } else if (algSet.diagramType === "3D") {
        diagram = puzzle.getSvg3D();
        className = `viz-${algSet.puzzle}`;
    } else {
        console.error("Invalid diagram type:", algSet.diagramType);
    }

    return `\n<div class="alg-card">
    <div class="${className}">
        ${diagram}
    </div>
    <div class="info">
        <h3>${caseName}</h3>
        ${entries.map(([alg, algData]) => {
        const note = algData.note ? `<span class="note">${algData.note}</span>` : "";
        const vid = algData.vid ? `<button class="vid" data-url="${algData.vid}">Fingertricks</button>` : "";
        return `<p>&#8226; ${alg}${note}${vid}</p>`;
    }).join("")}
    </div>
</div>`;
}

// We define a custom element for each sticker to make the
// html output as concise as possible.
function renderAlgs(algSet) {
    let html = `<script>
class Up extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--u-face)";
    }
}
class Down extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--d-face)";
    }
}
class Right extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--r-face)";
    }
}
class Left extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--l-face)";
    }
}
class Front extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--f-face)";
    }
}
class Back extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--b-face)";
    }
}
class Transparent extends HTMLElement {
    connectedCallback() {
        this.style.background = "transparent";
        this.style.border = "none";
    }
}

customElements.define("x-u", Up);
customElements.define("x-f", Front);
customElements.define("x-d", Down);
customElements.define("x-b", Back);
customElements.define("x-l", Left);
customElements.define("x-r", Right);
customElements.define("x-t", Transparent);
</script>`;

    if (algSet.subsets) {
        algSet.subsets.forEach(subset => {
            html += `\n<h2 id="${subset.replaceAll(" ", "_")}">${subset}</h2>`;

            // Render cases in this subset
            Object.entries(algSet.cases).forEach(([caseName, _case]) => {
                if (subset !== _case.subset) return;
                html += renderCase(algSet, caseName, _case);
            });
        })
    } else {
        // Render all cases
        Object.entries(algSet.cases).forEach(([caseName, _case]) => {
            html += renderCase(algSet, caseName, _case);
        });
    }

    return html;
}

import * as fs from "fs";

const files = fs.readdirSync("./algs");
files.forEach(file => {
    const start = Date.now();
    const name = file.replace(".json", "");
    const algSet = JSON.parse(fs.readFileSync(`./algs/${file}`));
    fs.writeFileSync(
        `../server/src/algorithms/${name}/algs.php`,
        renderAlgs(algSet),
    );

    fs.writeFileSync(
        `../server/src/algorithms/${name}/index.php`,
        `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>${name.replaceAll("-", " ")} Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = [${algSet.subsets?.map(subset => `"${subset}"`).join(", ") ?? ""}];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>${name.replaceAll("-", " ")} Algorithms</h1>
            ${algSet.texts.map(text => `<p class="bodytext">${text}</p>`).join("\n\t\t\t")}
            
            <?php
            ${algSet.puzzle === "SQ1" || algSet.puzzle === "Pyraminx" ? "" : `include_once "../colorSelect.php";`}
            include_once "../subsetsNarrow.php";
            include_once "./algs.php";
            ?>
        </div>

        <?php include_once "../subsetsWide.php" ?>
    </main>
</body>

<?php
include_once "../listeners.php";
include "../../php/gtag.php";
?>

</html>
`);

    // Make a train page for every alg set except 4x4-PLL-Parity
    if (name === "4x4-PLL-Parity") return;

    fs.writeFileSync(
        `../server/src/train/${name}/index.php`,
        `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>${name.replaceAll("-", " ")} Trainer</title>
</head>

<?php
include_once "../style.php";
?>

<style>
#leftArrow {
  width: 0; 
  height: 0; 
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent; 
  border-right: 18px solid var(--gray-300);
  cursor: pointer;

  &:hover {
    border-right-color: var(--gray-400);
  }
}

#rightArrow {
  width: 0; 
  height: 0; 
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 18px solid var(--gray-300);
  cursor: pointer;
  
  &:hover {
    border-left-color: var(--gray-400);
  }
}

#nameText {
    font-size: 15px;
    color: var(--gray-300);
}

#scrambleText {
    margin-top: 16px;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
}

#resetButton, #deleteLastButton {
    padding: 4px 8px;
    background: none;
    border: solid 1px var(--gray-500);

    &:hover {
        background: var(--gray-600);
    }
}
</style>

<body>
<?php
include_once "../../php/menu.php";
$subsets = [${algSet.subsets?.map(subset => `"${subset}"`).join(", ") ?? ""}];
?>

<main style="overflow-y: auto; padding: 0;">
    <div style="padding: 16px 16px 0 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div id="leftArrow"></div>
            <p id="nameText">&nbsp;</p>
            <div id="rightArrow"></div>
        </div>
        <p id="scrambleText">&nbsp;</p>
        <div id="solutionExpandable" class="expandable" style="margin-top: 16px; border: solid 1px var(--gray-500);">
            <button id="solutionButton" class="expandableButton">
                <p>Solution</p>
                <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92"></path></svg>
            </button>
            <div id="solutionDiv" class="expandableChild" style="padding: 8px;"></div>
        </div>
        <div style="margin-top: 16px; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <p>Frequency:</p>
            <input type="number" id="frequencyInput" min="0" style="width: 80px;" />
            <button id="frequencyQuestionButton" style="background: none; border: solid 2px #888; border-radius: 50%; padding: 0; width: 32px; height: 32px; display: flex; justify-content: center; align-items: center;">?</button>
        </div>
    </div>

    <div id="subsetsDiv" style="margin-top: 16px;"></div>

    <div style="min-height: 80px;"></div>
</main>

</body>

<script>
function randElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

const algSet = ${JSON.stringify(algSet)};
const before = ${algSet.before};
const after = ${algSet.after};
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
`);

    console.log(`Finished ${name} in ${Date.now() - start} ms`);
});