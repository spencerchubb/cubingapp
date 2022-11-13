import { CubeLogic } from "./cube.js";

export type BufferObject = {
    positionBuffer: WebGLBuffer,
    noGapPositionBuffer: WebGLBuffer,
    hintPositionBuffer: WebGLBuffer,
    indexBuffer: WebGLBuffer,
    cart2d: number[],

    // For debugging purposes
    positions: number[],
}

export function createBuffers(gl: WebGLRenderingContext, cube: CubeLogic, showBody: boolean, transformMatrix: number[]): BufferObject[] {
    // Vertex positions with gap between stickers
    let allPositions = showBody
        ? _concatPositions(cube, 1.01, 0.02)
        : _concatPositions(cube, 1.02, 0.04);

    // Vertex positions with no gap so user can drag between stickers
    let allNoGapPositions = _concatPositions(cube, 1.0, 0.0);

    // Vertex positions of hint stickers
    let allHintPositions = _concatPositions(cube, 1.5, 0.02);

    const objects = Array(cube.numOfStickers);
    for (let i = 0; i < cube.numOfStickers; i++) {
        let object: BufferObject = {
            positionBuffer: gl.createBuffer(),
            noGapPositionBuffer: gl.createBuffer(),
            hintPositionBuffer: gl.createBuffer(),
            indexBuffer: gl.createBuffer(),
            cart2d: [],
            positions: null,
        };

        let positions = Array(12);
        let noGapPos = Array(12);
        let hintPos = Array(12);
        for (let j = 0; j < 12; j++) {
            let index = i * 12 + j;
            positions[j] = allPositions[index];
            noGapPos[j] = allNoGapPositions[index];
            hintPos[j] = allHintPositions[index];
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, object.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        object.positions = positions;

        gl.bindBuffer(gl.ARRAY_BUFFER, object.noGapPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(noGapPos), gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, object.hintPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hintPos), gl.STATIC_DRAW);

        if (transformMatrix) {
            // Represent as homogeneous coordinates
            const homo = [
                ...multiply(transformMatrix,
                    [noGapPos[0], noGapPos[1], noGapPos[2], 1]),
                ...multiply(transformMatrix,
                    [noGapPos[3], noGapPos[4], noGapPos[5], 1]),
                ...multiply(transformMatrix,
                    [noGapPos[6], noGapPos[7], noGapPos[8], 1]),
                ...multiply(transformMatrix,
                    [noGapPos[9], noGapPos[10], noGapPos[11], 1]),
            ];

            // Represent as 2D cartesian coordinates by dividing x and y by w
            object.cart2d = [
                homo[0] / homo[3], homo[1] / homo[3],
                homo[4] / homo[7], homo[5] / homo[7],
                homo[8] / homo[11], homo[9] / homo[11],
                homo[12] / homo[15], homo[13] / homo[15],
            ];
        }

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
 * @param a first operand, 4x4 matrix
 * @param b second operand, 4x1 matrix
 * @returns out
 */
 function multiply(a, b) {
    const out = Array(4);
    let b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a[0] + b1 * a[4] + b2 * a[8] + b3 * a[12];
    out[1] = b0 * a[1] + b1 * a[5] + b2 * a[9] + b3 * a[13];
    out[2] = b0 * a[2] + b1 * a[6] + b2 * a[10] + b3 * a[14];
    out[3] = b0 * a[3] + b1 * a[7] + b2 * a[11] + b3 * a[15];
    return out;
}

function _concatPositions(cube: CubeLogic, radius, gap) {
    return [
        ..._topFace(cube, 1, radius, gap),
        ..._frontFace(cube, 0, radius, gap),
        ..._bottomFace(cube, 1, -radius, gap),
        ..._backFace(cube, 0, -radius, gap),
        ..._leftFace(cube, 2, -radius, gap),
        ..._rightFace(cube, 2, radius, gap),
    ];
}

// Notes for face functions
//
// 0 3 6
// 1 4 7
// 2 5 8
//
// a (axis): 0, 1, or 2
// n (negative): -1.0 or 1.0

function _topFace(cube: CubeLogic, a, n, gap) {
    let coords = [];

    if (cube.layersEven) {
        for (let i = 0; i < cube.layers; i++) {
            for (let j = 0; j < cube.layers; j++) {
                const a = -1 + 1 / cube.layers + j * 2 / cube.layers;
                const b = -1 + 1 / cube.layers + i * 2 / cube.layers;
                coords.push([a, b, n]);
            }
        }
    } else {
        for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
            for (let j = -cube.layersHalf; j <= cube.layersHalf; j++) {
                coords.push([2.0 * j / cube.layers, 2.0 * i / cube.layers, n]);
            }
        }
    }

    return _concatStickers(cube, coords, a, gap);
}

function _frontFace(cube: CubeLogic, a, n, gap) {
    let coords = [];

    if (cube.layersEven) {
        for (let i = 0; i < cube.layers; i++) {
            for (let j = cube.layers - 1; j >= 0; j--) {
                const a = -1 + 1 / cube.layers + i * 2 / cube.layers;
                const b = -1 + 1 / cube.layers + j * 2 / cube.layers;
                coords.push([a, b, n]);
            }
        }
    } else {
        for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
            for (let j = cube.layersHalf; j >= -cube.layersHalf; j--) {
                coords.push([2.0 * i / cube.layers, 2.0 * j / cube.layers, n]);
            }
        }
    }

    return _concatStickers(cube, coords, a, gap);
}

function _bottomFace(cube: CubeLogic, a, n, gap) {
    let coords = [];

    if (cube.layersEven) {
        for (let i = 0; i < cube.layers; i++) {
            for (let j = cube.layers - 1; j >= 0; j--) {
                const a = -1 + 1 / cube.layers + j * 2 / cube.layers;
                const b = -1 + 1 / cube.layers + i * 2 / cube.layers;
                coords.push([a, b, n]);
            }
        }
    } else {
        for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
            for (let j = cube.layersHalf; j >= -cube.layersHalf; j--) {
                coords.push([2.0 * j / cube.layers, 2.0 * i / cube.layers, n]);
            }
        }
    }

    return _concatStickers(cube, coords, a, gap);
}

function _backFace(cube: CubeLogic, a, n, gap) {
    let coords = [];

    if (cube.layersEven) {
        for (let i = 0; i < cube.layers; i++) {
            for (let j = 0; j < cube.layers; j++) {
                const a = -1 + 1 / cube.layers + i * 2 / cube.layers;
                const b = -1 + 1 / cube.layers + j * 2 / cube.layers;
                coords.push([a, b, n]);
            }
        }
    } else {
        for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
            for (let j = -cube.layersHalf; j <= cube.layersHalf; j++) {
                coords.push([2.0 * i / cube.layers, 2.0 * j / cube.layers, n]);
            }
        }
    }

    return _concatStickers(cube, coords, a, gap);
}

function _leftFace(cube: CubeLogic, a, n, gap) {
    let coords = [];

    if (cube.layersEven) {
        for (let i = 0; i < cube.layers; i++) {
            for (let j = cube.layers - 1; j >= 0; j--) {
                const a = -1 + 1 / cube.layers + j * 2 / cube.layers;
                const b = -1 + 1 / cube.layers + i * 2 / cube.layers;
                coords.push([a, b, n]);
            }
        }
    } else {
        for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
            for (let j = cube.layersHalf; j >= -cube.layersHalf; j--) {
                coords.push([2.0 * j / cube.layers, 2.0 * i / cube.layers, n]);
            }
        }
    }

    return _concatStickers(cube, coords, a, gap);
}

function _rightFace(cube: CubeLogic, a, n, gap) {
    let coords = [];

    if (cube.layersEven) {
        for (let i = cube.layers - 1; i >= 0; i--) {
            for (let j = cube.layers - 1; j >= 0; j--) {
                const a = -1 + 1 / cube.layers + j * 2 / cube.layers;
                const b = -1 + 1 / cube.layers + i * 2 / cube.layers;
                coords.push([a, b, n]);
            }
        }
    } else {
        for (let i = cube.layersHalf; i >= -cube.layersHalf; i--) {
            for (let j = cube.layersHalf; j >= -cube.layersHalf; j--) {
                coords.push([2.0 * j / cube.layers, 2.0 * i / cube.layers, n]);
            }
        }
    }

    return _concatStickers(cube, coords, a, gap);
}

function _concatStickers(cube: CubeLogic, coords, a, gap) {
    let out = [];
    for (let i = 0; i < cube.layersSq; i++) {
        const temp = coords[i];
        out = out.concat(_sticker(cube, a, temp[0], temp[1], temp[2], gap));
    }
    return out;
}

function _sticker(cube: CubeLogic, a, x, y, n, gap) {
    // size
    const s = (1.0 / cube.layers) - gap;

    const coords = [
        [x - s, y - s, n],
        [x + s, y - s, n],
        [x + s, y + s, n],
        [x - s, y + s, n],
    ];

    let out = [];

    const numOfVerticesInSquare = 4;
    const numOfDimensions = 3;

    for (let i = 0; i < numOfVerticesInSquare; i++) {
        const temp = coords[i];
        let appendage = [];
        for (let i = 0; i < numOfDimensions; i++) {
            appendage.push(temp[(a + i) % 3]);
        }
        out = out.concat(appendage);
    }
    return out;
}