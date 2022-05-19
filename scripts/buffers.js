import { colorFromId } from "./pickId.js";

export class Buffers {
    constructor(gl) {
        this.gl = gl;
    }

    initBufferData(cube) {
        this.cube = cube;

        // Vertex positions with gap.
        this.gap = 0.02;
        let allPositions = this._concatPositions(1.0);

        // Vertex positions with no gap so user can drag between the gaps.
        this.gap = 0.0;
        let allNoGapPositions = this._concatPositions(0.99);

        let allPickingColors = [];
        for (let i = 0; i < this.cube.numOfStickers; i++) {
            const c = colorFromId(i);
            for (let j = 0; j < 4; j++) {
                allPickingColors.push(c[0], c[1], c[2], c[3]);
            }
        }

        this.objects = [];
        for (let i = 0; i < this.cube.numOfStickers; i++) {
            let object = {}

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

    _concatPositions(radius) {
        let positions = [];
        // Top face
        positions = positions.concat(this._topFace(1, radius));
        // Front face
        positions = positions.concat(this._frontFace(0, radius));
        // Bottom face
        positions = positions.concat(this._bottomFace(1, -radius));
        // Back face
        positions = positions.concat(this._backFace(0, -radius));
        // Left face
        positions = positions.concat(this._leftFace(2, -radius));
        // Right face
        positions = positions.concat(this._rightFace(2, radius));
        return positions;
    }

    // Notes for face functions
    //
    // 0 3 6
    // 1 4 7
    // 2 5 8
    //
    // a (axis): 0, 1, or 2
    // n (negative): -1.0 or 1.0

    _topFace(a, n) {
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

        return this._concatStickers(coords, a);
    }

    _frontFace(a, n) {
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

        return this._concatStickers(coords, a);
    }

    _bottomFace(a, n) {
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

        return this._concatStickers(coords, a);
    }

    _backFace(a, n) {
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

        return this._concatStickers(coords, a);
    }

    _leftFace(a, n) {
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

        return this._concatStickers(coords, a);
    }

    _rightFace(a, n) {
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

        return this._concatStickers(coords, a);
    }

    _concatStickers(coords, a) {
        let out = [];
        for (let i = 0; i < this.cube.layersSq; i++) {
            const temp = coords[i];
            out = out.concat(this._sticker(a, temp[0], temp[1], temp[2]));
        }
        return out;
    }

    _sticker(a, x, y, n) {
        // size
        const s = (1.0 / this.cube.numOfLayers) - this.gap;

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