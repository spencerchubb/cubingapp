import { colorFromId } from "./pickId.js";
import { CubeLogic } from "./cube.js";

/**
 * Multiplies two matrices
 * Adapted from multiply$3 in gl-matrix.js
 *
 * @param {mat4} out the destination, 4x1 matrix
 * @param a the first operand, 4x4 matrix
 * @param b the second operand, 4x1 matrix
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    var a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    var a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15]; // Cache only the current line of the second matrix

    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    // b0 = b[4];
    // b1 = b[5];
    // b2 = b[6];
    // b3 = b[7];
    // out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    // out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    // out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    // out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    // b0 = b[8];
    // b1 = b[9];
    // b2 = b[10];
    // b3 = b[11];
    // out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    // out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    // out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    // out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    // b0 = b[12];
    // b1 = b[13];
    // b2 = b[14];
    // b3 = b[15];
    // out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    // out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    // out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    // out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}

export class Buffers {
    gl: WebGLRenderingContext;
    mat: any; // mat4
    cube: CubeLogic;
    objects: any[];

    constructor(gl, mat) {
        this.gl = gl;
        this.mat = mat
    }

    initBufferData(cube, showBody: boolean) {
        this.cube = cube;

        // Vertex positions with gap.
        let allPositions = showBody
            ? this._concatPositions(1.0, 0.02)
            : this._concatPositions(1.02, 0.04);

        // Vertex positions with no gap so user can drag between the gaps.
        let allNoGapPositions = this._concatPositions(0.99, 0.0);

        let allPickingColors = [];
        for (let i = 0; i < this.cube.numOfStickers; i++) {
            const c = colorFromId(i);
            for (let j = 0; j < 4; j++) {
                allPickingColors.push(c[0], c[1], c[2], c[3]);
            }
        }

        this.objects = [];
        for (let i = 0; i < this.cube.numOfStickers; i++) {
            let object: any = {};

            let positions = [];
            let noGapPositions = [];
            for (let j = 0; j < 12; j++) {
                let index = i * 12 + j;
                positions.push(allPositions[index]);
                noGapPositions.push(allNoGapPositions[index]);
            }

            object.positionBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.positionBuffer);
            // this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
            // console.log(positions);
            let transformed = [
                ...multiply(Array(4),
                    this.mat,
                    [positions[0], positions[1], positions[2], 1]),
                ...multiply(Array(4),
                    this.mat,
                    [positions[3], positions[4], positions[5], 1]),
                ...multiply(Array(4),
                    this.mat,
                    [positions[6], positions[7], positions[8], 1]),
                ...multiply(Array(4),
                    this.mat,
                    [positions[9], positions[10], positions[11], 1]),
            ];
            console.log(transformed);
            // transformed = [
            //     transformed[0], transformed[1], transformed[2],
            //     transformed[4], transformed[5], transformed[6],
            //     transformed[8], transformed[9], transformed[10],
            //     transformed[12], transformed[13], transformed[14],
            // ];
            // console.log(transformed);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(transformed), this.gl.STATIC_DRAW);
            
            // let transformed = Array(4);
            // let a = positions.slice(0, 3);
            // a.push(1.0);
            // multiply(transformed,
            //     this.mat,
            //     a);
            // console.log(transformed);
            // a = positions.slice(3, 6);
            // a.push(1.0);
            // multiply(transformed,
            //     this.mat,
            //     a);
            // console.log(transformed);
            // a = positions.slice(6, 9);
            // a.push(1.0);
            // multiply(transformed,
            //     this.mat,
            //     a);
            // console.log(transformed);
            // a = positions.slice(9, 12);
            // a.push(1.0);
            // multiply(transformed,
            //     this.mat,
            //     a);
            // console.log(transformed);

            object.noGapPositionBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.noGapPositionBuffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(noGapPositions), this.gl.STATIC_DRAW);

            // Define each face as two triangles.
            // Given vertices A, B, C, and D, we define triangles ABC and ACD.
            const indices = [0, 1, 2, 0, 2, 3];

            object.indexBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);

            this.objects.push(object);
        }

        for (let i = 0; i < this.cube.layersSq * 2; i++) {
            let object = this.objects[i];

            let pickingColors = [];
            for (let j = 0; j < 16; j++) {
                let index = i * 16 + j;
                pickingColors.push(allPickingColors[index]);
            }

            object.pickingColorBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.pickingColorBuffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(pickingColors), this.gl.STATIC_DRAW);
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
            for (let i = 0; i < this.cube.numOfLayers; i++) {
                for (let j = 0; j < this.cube.numOfLayers; j++) {
                    const a = -1 + 1 / this.cube.numOfLayers + j * 2 / this.cube.numOfLayers;
                    const b = -1 + 1 / this.cube.numOfLayers + i * 2 / this.cube.numOfLayers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = -this.cube.layersHalf; j <= this.cube.layersHalf; j++) {
                    coords.push([2.0 * j / this.cube.numOfLayers, 2.0 * i / this.cube.numOfLayers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _frontFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.numOfLayers; i++) {
                for (let j = this.cube.numOfLayers - 1; j >= 0; j--) {
                    const a = -1 + 1 / this.cube.numOfLayers + i * 2 / this.cube.numOfLayers;
                    const b = -1 + 1 / this.cube.numOfLayers + j * 2 / this.cube.numOfLayers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
                    coords.push([2.0 * i / this.cube.numOfLayers, 2.0 * j / this.cube.numOfLayers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _bottomFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.numOfLayers; i++) {
                for (let j = this.cube.numOfLayers - 1; j >= 0; j--) {
                    const a = -1 + 1 / this.cube.numOfLayers + j * 2 / this.cube.numOfLayers;
                    const b = -1 + 1 / this.cube.numOfLayers + i * 2 / this.cube.numOfLayers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
                    coords.push([2.0 * j / this.cube.numOfLayers, 2.0 * i / this.cube.numOfLayers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _backFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.numOfLayers; i++) {
                for (let j = 0; j < this.cube.numOfLayers; j++) {
                    const a = -1 + 1 / this.cube.numOfLayers + i * 2 / this.cube.numOfLayers;
                    const b = -1 + 1 / this.cube.numOfLayers + j * 2 / this.cube.numOfLayers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = -this.cube.layersHalf; j <= this.cube.layersHalf; j++) {
                    coords.push([2.0 * i / this.cube.numOfLayers, 2.0 * j / this.cube.numOfLayers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _leftFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = 0; i < this.cube.numOfLayers; i++) {
                for (let j = this.cube.numOfLayers - 1; j >= 0; j--) {
                    const a = -1 + 1 / this.cube.numOfLayers + j * 2 / this.cube.numOfLayers;
                    const b = -1 + 1 / this.cube.numOfLayers + i * 2 / this.cube.numOfLayers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
                for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
                    coords.push([2.0 * j / this.cube.numOfLayers, 2.0 * i / this.cube.numOfLayers, n]);
                }
            }
        }

        return this._concatStickers(coords, a, gap);
    }

    _rightFace(a, n, gap) {
        let coords = [];

        if (this.cube.layersEven) {
            for (let i = this.cube.numOfLayers - 1; i >= 0; i--) {
                for (let j = this.cube.numOfLayers - 1; j >= 0; j--) {
                    const a = -1 + 1 / this.cube.numOfLayers + j * 2 / this.cube.numOfLayers;
                    const b = -1 + 1 / this.cube.numOfLayers + i * 2 / this.cube.numOfLayers;
                    coords.push([a, b, n]);
                }
            }
        } else {
            for (let i = this.cube.layersHalf; i >= -this.cube.layersHalf; i--) {
                for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
                    coords.push([2.0 * j / this.cube.numOfLayers, 2.0 * i / this.cube.numOfLayers, n]);
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
        const s = (1.0 / this.cube.numOfLayers) - gap;

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