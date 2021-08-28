import { colorFromId } from "./pickId.js";

const canvas = document.querySelector('#glCanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

export class Buffers {

    initBufferData(cube) {
        this.cube = cube;

        // Vertex positions with gap.
        this.gap = 0.03;
        let allPositions = this._concatPositions();

        // Vertex positions with no gap so user can drag between the gaps.
        this.gap = 0.0;
        let allNoGapPositions = this._concatPositions();

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

            object.positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, object.positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

            object.noGapPositionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, object.noGapPositionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(noGapPositions), gl.STATIC_DRAW);

            // Define each face as two triangles.
            // Given vertices A, B, C, and D, we define triangles ABC and ACD.
            let indices = [];
            indices.push(0, 1, 2, 0, 2, 3);

            object.indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

            this.objects.push(object);
        }

        for (let i = 0; i < this.cube.layersSq * 2; i++) {
            let object = this.objects[i];

            let pickingColors = [];
            for (let j = 0; j < 16; j++) {
                let index = i * 16 + j;
                pickingColors.push(allPickingColors[index]);
            }

            object.pickingColorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, object.pickingColorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pickingColors), gl.STATIC_DRAW);
        }
    }

    _concatPositions() {
        let positions = [];
        // Top face
        positions = positions.concat(this._topFace(1, 1.0));
        // Front face
        positions = positions.concat(this._frontFace(0, 1.0));
        // Bottom face
        positions = positions.concat(this._bottomFace(1, -1.0));
        // Back face
        positions = positions.concat(this._backFace(0, -1.0));
        // Left face
        positions = positions.concat(this._leftFace(2, -1.0));
        // Right face
        positions = positions.concat(this._rightFace(2, 1.0));
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