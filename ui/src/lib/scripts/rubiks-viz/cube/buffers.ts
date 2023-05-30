import { Shape, ShapeArgs, Square } from "../buffers";
import { BLUE, GREEN, ORANGE, RED, WHITE, YELLOW } from "../colors";
import { Cube, sq } from "./cube";

export type BufferObject = {
    position: WebGLBuffer,
    underPosition: WebGLBuffer,
    hintPosition: WebGLBuffer,
    index: WebGLBuffer,
    color: WebGLBuffer,
    underColor: WebGLBuffer,
    cart2d: number[],
}

type Axis = 0 | 1 | 2;

const cache = {};

function half(x: number): number {
    return Math.floor(x / 2);
}

function even(x: number): boolean {
    return x % 2 == 0;
}

export function createBuffers(gl: WebGLRenderingContext, cube: Cube): Shape[] {
    const layers = cube.layers;
    const perspective = cube.perspective;

    const cacheKey = `${layers}-${perspective}`;
    if (cache[cacheKey]) return cache[cacheKey];

    let allBase = makePositions(layers, 1.0, 0.0);
    let allStickers = makePositions(layers, 1.01, 0.02);
    let allHints = makePositions(layers, 1.5, 0.02);

    const objects: Shape[] = Array(cube.numStickers());
    const perFace = cube.layers * cube.layers;
    for (let i = 0; i < cube.numStickers(); i++) {
        let shapeArgs: ShapeArgs = {
            perspective: perspective,
            color: i < perFace
                ? WHITE : i < perFace * 2
                ? GREEN : i < perFace * 3
                ? YELLOW : i < perFace * 4
                ? BLUE : i < perFace * 5
                ? ORANGE : RED,
            baseVertices: [] as number[],
            stickerVertices: [] as number[],
            hintVertices: [] as number[],
        };

        for (let j = 0; j < 12; j++) {
            let index = i * 12 + j;
            shapeArgs.baseVertices[j] = allBase[index];
            shapeArgs.stickerVertices[j] = allStickers[index];
            shapeArgs.hintVertices[j] = allHints[index];
        }

        objects[i] = new Square(gl, shapeArgs);
    }

    cache[cacheKey] = objects;
    return objects;
}

const perSticker: number = 12;
const verticesInSquare: number = 4;
const dimensions: number = 3;

/** Array of length 648 */
function makePositions(layers: number, radius: number, gap: number) {
    const perFace = sq(layers) * perSticker;
    const out = Array(6 * perFace);
    topFace(out, 0 * perFace, layers, 1, radius, gap);
    frontFace(out, 1 * perFace, layers, 0, radius, gap);
    bottomFace(out, 2 * perFace, layers, 1, -radius, gap);
    backFace(out, 3 * perFace, layers, 0, -radius, gap);
    leftFace(out, 4 * perFace, layers, 2, -radius, gap);
    rightFace(out, 5 * perFace, layers, 2, radius, gap);
    return out;
}

// Notes for face functions
//
// 0 3 6
// 1 4 7
// 2 5 8

function topFace(arr: number[], offset: number, layers: number, a: Axis, r: number, gap: number) {
    if (even(layers)) {
        let coords = Array(sq(layers));
        let idx = 0;
        for (let i = 0; i < layers; i++) {
            for (let j = 0; j < layers; j++) {
                const x = -1 + 1 / layers + j * 2 / layers;
                const y = -1 + 1 / layers + i * 2 / layers;
                coords[idx] = [x, y, r];
                idx++;
            }
        }
        makeFace(arr, offset, layers, coords, a, gap);
        return;
    }

    let coords = Array(sq(layers));
    let idx = 0;
    for (let i = -half(layers); i <= half(layers); i++) {
        for (let j = -half(layers); j <= half(layers); j++) {
            coords[idx] = [2.0 * j / layers, 2.0 * i / layers, r];
            idx++;
        }
    }
    makeFace(arr, offset, layers, coords, a, gap);
}

function frontFace(arr: number[], offset: number, layers: number, a: Axis, r: number, gap: number) {
    if (even(layers)) {
        let coords = Array(sq(layers));
        let idx = 0;
        for (let i = 0; i < layers; i++) {
            for (let j = layers - 1; j >= 0; j--) {
                const x = -1 + 1 / layers + i * 2 / layers;
                const y = -1 + 1 / layers + j * 2 / layers;
                coords[idx] = [x, y, r];
                idx++;
            }
        }
        makeFace(arr, offset, layers, coords, a, gap);
        return;
    }

    let coords = Array(sq(layers));
    let idx = 0;
    for (let i = -half(layers); i <= half(layers); i++) {
        for (let j = half(layers); j >= -half(layers); j--) {
            coords[idx] = [2.0 * i / layers, 2.0 * j / layers, r];
            idx++;
        }
    }
    makeFace(arr, offset, layers, coords, a, gap);
}

function bottomFace(arr: number[], offset: number, layers: number, a: Axis, r: number, gap: number) {
    if (even(layers)) {
        let coords = Array(sq(layers));
        let idx = 0;
        for (let i = 0; i < layers; i++) {
            for (let j = layers - 1; j >= 0; j--) {
                const x = -1 + 1 / layers + j * 2 / layers;
                const y = -1 + 1 / layers + i * 2 / layers;
                coords[idx] = [x, y, r];
                idx++;
            }
        }
        makeFace(arr, offset, layers, coords, a, gap);
        return;
    }

    let coords = Array(sq(layers));
    let idx = 0;
    for (let i = -half(layers); i <= half(layers); i++) {
        for (let j = half(layers); j >= -half(layers); j--) {
            coords[idx] = [2.0 * j / layers, 2.0 * i / layers, r];
            idx++;
        }
    }
    makeFace(arr, offset, layers, coords, a, gap);
}

function backFace(arr: number[], offset: number, layers: number, a: Axis, r: number, gap: number) {
    if (even(layers)) {
        let coords = Array(sq(layers));
        let idx = 0;
        for (let i = 0; i < layers; i++) {
            for (let j = 0; j < layers; j++) {
                const x = -1 + 1 / layers + i * 2 / layers;
                const y = -1 + 1 / layers + j * 2 / layers;
                coords[idx] = [x, y, r];
                idx++;
            }
        }
        makeFace(arr, offset, layers, coords, a, gap);
        return;
    }

    let coords = Array(sq(layers));
    let idx = 0;
    for (let i = -half(layers); i <= half(layers); i++) {
        for (let j = -half(layers); j <= half(layers); j++) {
            coords[idx] = [2.0 * i / layers, 2.0 * j / layers, r];
            idx++;
        }
    }
    makeFace(arr, offset, layers, coords, a, gap);
}

function leftFace(arr: number[], offset: number, layers: number, a: Axis, r: number, gap: number) {
    if (even(layers)) {
        let coords = Array(sq(layers));
        let idx = 0;
        for (let i = 0; i < layers; i++) {
            for (let j = layers - 1; j >= 0; j--) {
                const x = -1 + 1 / layers + j * 2 / layers;
                const y = -1 + 1 / layers + i * 2 / layers;
                coords[idx] = [x, y, r];
                idx++;
            }
        }
        makeFace(arr, offset, layers, coords, a, gap);
        return;
    }

    let coords = Array(sq(layers));
    let idx = 0;
    for (let i = -half(layers); i <= half(layers); i++) {
        for (let j = half(layers); j >= -half(layers); j--) {
            coords[idx] = [2.0 * j / layers, 2.0 * i / layers, r];
            idx++;
        }
    }
    makeFace(arr, offset, layers, coords, a, gap);
}

function rightFace(arr: number[], offset: number, layers: number, a: Axis, r: number, gap: number) {
    if (even(layers)) {
        let coords = Array(sq(layers));
        let idx = 0;
        for (let i = layers - 1; i >= 0; i--) {
            for (let j = layers - 1; j >= 0; j--) {
                const x = -1 + 1 / layers + j * 2 / layers;
                const y = -1 + 1 / layers + i * 2 / layers;
                coords[idx] = [x, y, r];
                idx++;
            }
        }
        makeFace(arr, offset, layers, coords, a, gap);
        return;
    }

    let coords = Array(sq(layers));
    let idx = 0;
    for (let i = half(layers); i >= -half(layers); i--) {
        for (let j = half(layers); j >= -half(layers); j--) {
            coords[idx] = [2.0 * j / layers, 2.0 * i / layers, r];
            idx++;
        }
    }
    makeFace(arr, offset, layers, coords, a, gap);
}

function makeFace(arr: number[], offset: number, layers: number, coords: number[], a: Axis, gap: number) {
    for (let i = 0; i < sq(layers); i++) {
        const temp = coords[i];
        makeSticker(arr, offset + i * perSticker, layers, temp[0], temp[1], temp[2], a, gap);
    }
}

function makeSticker(arr: number[], offset: number, layers: number, x: number, y: number, r: number, a: Axis, gap: number) {
    const s = (1.0 / layers) - gap;

    const coords = [
        [x - s, y - s, r],
        [x + s, y - s, r],
        [x + s, y + s, r],
        [x - s, y + s, r],
    ];

    for (let i = 0; i < verticesInSquare; i++) {
        const temp = coords[i];
        arr[offset + i * dimensions] = temp[(a + 0) % dimensions];
        arr[offset + i * dimensions + 1] = temp[(a + 1) % dimensions];
        arr[offset + i * dimensions + 2] = temp[(a + 2) % dimensions];
    }
}