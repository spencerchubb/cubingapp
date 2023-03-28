import { Cube, even, half, sq, stickers } from "./cube";

export type BufferObject = {
    positionBuffer: WebGLBuffer,
    noGapPositionBuffer: WebGLBuffer,
    hintPositionBuffer: WebGLBuffer,
    indexBuffer: WebGLBuffer,
    cart2d: number[],

    // For debugging purposes
    positions: Float32Array,
}

type Axis = 0 | 1 | 2;

export function createBuffers(cube: Cube): BufferObject[] {
    const layers = cube.layers;
    const gl = cube.gl;
    const perspectiveMatrix = cube.perspectiveMatrix;

    // Vertex positions with gap between stickers
    let allPositions = makePositions(layers, 1.01, 0.02)

    // Vertex positions with no gap so user can drag between stickers
    let allNoGapPositions = makePositions(layers, 1.0, 0.0);

    // Vertex positions of hint stickers
    let allHintPositions = makePositions(layers, 1.5, 0.02);

    const objects = Array(stickers(layers));
    for (let i = 0; i < stickers(layers); i++) {
        let object: BufferObject = {
            positionBuffer: gl.createBuffer(),
            noGapPositionBuffer: gl.createBuffer(),
            hintPositionBuffer: gl.createBuffer(),
            indexBuffer: gl.createBuffer(),
            cart2d: [],
            positions: null,
        };

        let positions = new Float32Array(12);
        let noGapPos = new Float32Array(12);
        let hintPos = new Float32Array(12);
        for (let j = 0; j < 12; j++) {
            let index = i * 12 + j;
            positions[j] = allPositions[index];
            noGapPos[j] = allNoGapPositions[index];
            hintPos[j] = allHintPositions[index];
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, object.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
        object.positions = positions;

        gl.bindBuffer(gl.ARRAY_BUFFER, object.noGapPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, noGapPos, gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, object.hintPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, hintPos, gl.STATIC_DRAW);

        const homo = Array(16);
        multiply(homo, 0, perspectiveMatrix, [noGapPos[0], noGapPos[1], noGapPos[2], 1]);
        multiply(homo, 4, perspectiveMatrix, [noGapPos[3], noGapPos[4], noGapPos[5], 1]);
        multiply(homo, 8, perspectiveMatrix, [noGapPos[6], noGapPos[7], noGapPos[8], 1]);
        multiply(homo, 12, perspectiveMatrix, [noGapPos[9], noGapPos[10], noGapPos[11], 1]);

        // Represent as 2D cartesian coordinates by dividing x and y by w
        object.cart2d = [
            homo[0] / homo[3], homo[1] / homo[3],
            homo[4] / homo[7], homo[5] / homo[7],
            homo[8] / homo[11], homo[9] / homo[11],
            homo[12] / homo[15], homo[13] / homo[15],
        ];

        // Define each face as two triangles.
        // Given vertices A, B, C, and D, we define triangles ABC and ACD.
        const indices = [0, 1, 2, 0, 2, 3];

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        objects[i] = object;
    }

    return objects;
}

/**
 * Multiply a 4x4 matrix with a 4x1 matrix, resulting in a 4x1 matrix.
 *
 * @param arr destination, 4x1 matrix
 * @param offset offset
 * @param a first operand, 4x4 matrix
 * @param b second operand, 4x1 matrix
 */
function multiply(arr: number[], offset: number, a: number[], b: number[]) {
    let b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    arr[offset + 0] = b0 * a[0] + b1 * a[4] + b2 * a[8] + b3 * a[12];
    arr[offset + 1] = b0 * a[1] + b1 * a[5] + b2 * a[9] + b3 * a[13];
    arr[offset + 2] = b0 * a[2] + b1 * a[6] + b2 * a[10] + b3 * a[14];
    arr[offset + 3] = b0 * a[3] + b1 * a[7] + b2 * a[11] + b3 * a[15];
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