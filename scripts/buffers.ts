import { colorFromId } from "./pickId.js";
import { CubeLogic } from "./cube.js";

export class Buffers {
    gl: WebGLRenderingContext;
    cube: CubeLogic;
    objects: any[];

    constructor(gl) {
        this.gl = gl;
    }

    /**
     * Gap will be 0.02 when showing body, and 0.04 when not showing body.
     */
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
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);

            object.noGapPositionBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.noGapPositionBuffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(noGapPositions), this.gl.STATIC_DRAW);

            // Define each face as two triangles.
            // Given vertices A, B, C, and D, we define triangles ABC and ACD.
            let indices = [];
            indices.push(0, 1, 2, 0, 2, 3);

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