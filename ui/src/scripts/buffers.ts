import { CubeLogic } from "./cube.js";

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

export class Buffers {
    gl: WebGLRenderingContext;
    cube: CubeLogic;
    objects: any[];

    constructor(gl) {
        this.gl = gl;
    }

    initBufferData(cube, showBody: boolean, transformMatrix) {
        this.cube = cube;

        // Vertex positions with gap between stickers
        let allPositions = showBody
            ? this._concatPositions(1.01, 0.02)
            : this._concatPositions(1.02, 0.04);

        // Vertex positions with no gap so user can drag between stickers
        let allNoGapPositions = this._concatPositions(1.0, 0.0);

        // Vertex positions of hint stickers
        let allHintPositions = this._concatPositions(1.5, 0.02);

        this.objects = [];
        for (let i = 0; i < this.cube.numOfStickers; i++) {
            let object: any = {};

            // TODO improve performance by pre-allocating array memory
            // Maybe refactor to be more readable too
            let positions = [];
            let noGapPos = [];
            let hintPos = [];
            for (let j = 0; j < 12; j++) {
                let index = i * 12 + j;
                positions.push(allPositions[index]);
                noGapPos.push(allNoGapPositions[index]);
                hintPos.push(allHintPositions[index]);
            }

            object.positionBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.positionBuffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);

            object.noGapPositionBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.noGapPositionBuffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(noGapPos), this.gl.STATIC_DRAW);

            object.hintPositionBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.hintPositionBuffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(hintPos), this.gl.STATIC_DRAW);

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
                const cart2d = [
                    homo[0] / homo[3], homo[1] / homo[3],
                    homo[4] / homo[7], homo[5] / homo[7],
                    homo[8] / homo[11], homo[9] / homo[11],
                    homo[12] / homo[15], homo[13] / homo[15],
                ];
                object.cart2d = cart2d;
            }

            // Define each face as two triangles.
            // Given vertices A, B, C, and D, we define triangles ABC and ACD.
            const indices = [0, 1, 2, 0, 2, 3];

            object.indexBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);

            this.objects.push(object);
        }
    }

    _concatPositions(radius, gap) {
        return [
            ...this._topFace(1, radius, gap),
            ...this._frontFace(0, radius, gap),
            ...this._bottomFace(1, -radius, gap),
            ...this._backFace(0, -radius, gap),
            ...this._leftFace(2, -radius, gap),
            ...this._rightFace(2, radius, gap),
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

    _topFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.layers; i++) {
                for (let j = 0; j < this.cube.layers; j++) {
                    const a = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
                    const b = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = -this.cube.layersHalf; j <= this.cube.layersHalf; j++) {
                    coords.push([2.0 * j / this.cube.layers, 2.0 * i / this.cube.layers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _frontFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.layers; i++) {
                for (let j = this.cube.layers - 1; j >= 0; j--) {
                    const a = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
                    const b = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
                    coords.push([2.0 * i / this.cube.layers, 2.0 * j / this.cube.layers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _bottomFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.layers; i++) {
                for (let j = this.cube.layers - 1; j >= 0; j--) {
                    const a = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
                    const b = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
                    coords.push([2.0 * j / this.cube.layers, 2.0 * i / this.cube.layers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _backFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.layers; i++) {
                for (let j = 0; j < this.cube.layers; j++) {
                    const a = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
                    const b = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = -this.cube.layersHalf; j <= this.cube.layersHalf; j++) {
                    coords.push([2.0 * i / this.cube.layers, 2.0 * j / this.cube.layers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _leftFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.layers; i++) {
                for (let j = this.cube.layers - 1; j >= 0; j--) {
                    const a = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
                    const b = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
                    coords.push([2.0 * j / this.cube.layers, 2.0 * i / this.cube.layers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _rightFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = this.cube.layers - 1; i >= 0; i--) {
                for (let j = this.cube.layers - 1; j >= 0; j--) {
                    const a = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
                    const b = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = this.cube.layersHalf; i >= -this.cube.layersHalf; i--) {
                for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
                    coords.push([2.0 * j / this.cube.layers, 2.0 * i / this.cube.layers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _concatStickers(coords, a, gap) {
        let out = [];
        for (let i = 0; i < this.cube.layersSq; i++) {
            const temp = coords[i];
            out = out.concat(this._sticker(a, temp[0], temp[1], temp[2], gap));
        }
        return out;
    }

    _sticker(a, x, y, n, gap) {
        // size
        const s = (1.0 / this.cube.layers) - gap;

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
}