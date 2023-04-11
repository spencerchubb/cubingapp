import type { BufferObject } from "./buffers";
import { Cube, sq } from "./cube";

/**
 * Translate coordinate from pixels (relative to canvas) to clipping space
 */
function xPixelToClip(val: number, canvasSize: number) {
    return val / canvasSize * 2 - 1;
}

/**
 * Translate coordinate from pixels (relative to canvas) to clipping space
 */
function yPixelToClip(val: number, canvasSize: number) {
    return 1 - val / canvasSize * 2;
}

function calcSlope(x1: number, y1: number, x2: number, y2: number) {
    if (x1 < x2) {
        return (y2 - y1) / (x2 - x1);
    }
    return (y1 - y2) / (x1 - x2);
}

function areaTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    return Math.abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
}

function topRow(cube: Cube, sticker: number) {
    return cube.layers - 1 - sticker % cube.layers;
}

function topColumn(cube: Cube, sticker: number) {
    return cube.layers - 1 - Math.floor(sticker / cube.layers);
}

function frontRow(cube: Cube, sticker: number) {
    return sticker % cube.layers;
}

function frontColumn(cube: Cube, sticker: number) {
    return cube.layers - 1 - Math.floor((sticker - sq(cube.layers)) / cube.layers);
}

export class DragDetector {
    numOfPointerMoves: number;
    xOnDown: number;
    yOnDown: number;
    xOnMove: number;
    yOnMove: number;
    stickerOnDown: number;
    cart2dOnDown: number[];

    /**
     * x and y are pixel values.
     */
    onPointerDown(x: number, y: number, div: HTMLElement, cube: Cube) {
        const buffers = cube.buffers;

        this.numOfPointerMoves = 0;

        const clipX = xPixelToClip(x, div.clientWidth);
        const clipY = yPixelToClip(y, div.clientHeight);
        this.xOnDown = clipX;
        this.yOnDown = clipY;

        [this.stickerOnDown, this.cart2dOnDown] = this._coordinatesToSticker(clipX, clipY, cube, buffers);

        function getXY(objectIndex: number, xIndex: number, yIndex: number) {
            return {
                x: buffers[objectIndex].cart2d[xIndex],
                y: buffers[objectIndex].cart2d[yIndex],
            }
        }

        if (this.stickerOnDown !== -1) return;

        const topLeft = getXY(0, 0, 1);
        const topRight = getXY(cube.layers * (cube.layers - 1), 6, 7);
        const left = getXY(cube.layers - 1, 2, 3);
        const right = getXY(sq(cube.layers) - 1, 4, 5);
        const bottomLeft = getXY(cube.layers * (cube.layers + 1) - 1, 0, 1);
        const bottomRight = getXY(sq(cube.layers) * 2 - 1, 2, 3);
        if (clipY > topLeft.y && clipX > topLeft.x && clipX < topRight.x) {
            cube.cubeRotate(0, true);
        } else if (clipX < topLeft.x && clipY > left.y && clipY < topLeft.y) {
            cube.cubeRotate(2, false);
        } else if (clipX > topRight.x && clipY > right.y && clipY < topRight.y) {
            cube.cubeRotate(2, true);
        } else if (clipX < bottomLeft.x && clipY > bottomLeft.y && clipY < left.y) {
            cube.cubeRotate(1, true);
        } else if (clipX > bottomRight.x && clipY > bottomRight.y && clipY < right.y) {
            cube.cubeRotate(1, false);
        } else if (clipY < bottomLeft.y && clipX > bottomLeft.x && clipX < bottomRight.x) {
            cube.cubeRotate(0, false);
        }
    }

    /**
     * x and y are pixel values.
     */
    onPointerMove(x: number, y: number) {
        this.numOfPointerMoves++;
        this.xOnMove = x;
        this.yOnMove = y;
    }

    onPointerUp(div: HTMLElement, cube: Cube) {
        // Do nothing if the pointer movement was tiny.
        if (this.numOfPointerMoves < 2) return;

        let posSlope, negSlope;
        if (this.stickerOnDown !== -1) {
            posSlope = calcSlope(this.cart2dOnDown[0], this.cart2dOnDown[1], this.cart2dOnDown[4], this.cart2dOnDown[5]);
            negSlope = calcSlope(this.cart2dOnDown[2], this.cart2dOnDown[3], this.cart2dOnDown[6], this.cart2dOnDown[7]);
            if (posSlope < 0) {
                const temp = posSlope;
                posSlope = negSlope;
                negSlope = temp;
            }
        }

        const xClip = xPixelToClip(this.xOnMove, div.clientWidth);
        const yClip = yPixelToClip(this.yOnMove, div.clientHeight);

        const slope = calcSlope(xClip, yClip, this.xOnDown, this.yOnDown);

        if (cube.stickerIsOnFace(this.stickerOnDown, 0)) {
            if (xClip === this.xOnDown) {
                cube.turn(0, topColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
            } else {
                if (slope > posSlope) {
                    cube.turn(0, topColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
                } else if (slope < negSlope) {
                    cube.turn(0, topColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
                } else {
                    cube.turn(2, topRow(cube, this.stickerOnDown), xClip > this.xOnDown);
                }
            }
        } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
            if (xClip === this.xOnDown) {
                cube.turn(0, frontColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
            } else {
                if (slope > posSlope) {
                    cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
                } else if (slope < negSlope) {
                    cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
                } else {
                    cube.turn(1, frontRow(cube, this.stickerOnDown), xClip < this.xOnDown);
                }
            }
        }
    }

    /**
     * Find the sticker with cart2d that contains this coordinate.
     * Return -1 if it's not in any sticker.
     */
    _coordinatesToSticker(x: number, y: number, cube: Cube, buffers: BufferObject[]) {
        const coordinateIsInSticker = i => {
            if (!buffers[i].cart2d) {
                console.error("cart2d is undefined");
                return undefined;
            }
            const cart2d = buffers[i].cart2d;
            // Determine if coordinate is in convex quadrilateral
            const areaQuadrilateral = areaTriangle(cart2d[0], cart2d[1], cart2d[2], cart2d[3], cart2d[4], cart2d[5])
                + areaTriangle(cart2d[0], cart2d[1], cart2d[4], cart2d[5], cart2d[6], cart2d[7]);
            const sumAreaTriangles = areaTriangle(x, y, cart2d[0], cart2d[1], cart2d[2], cart2d[3])
                + areaTriangle(x, y, cart2d[2], cart2d[3], cart2d[4], cart2d[5])
                + areaTriangle(x, y, cart2d[4], cart2d[5], cart2d[6], cart2d[7])
                + areaTriangle(x, y, cart2d[6], cart2d[7], cart2d[0], cart2d[1]);
            const EPSILON = 0.00001;
            if (Math.abs(areaQuadrilateral - sumAreaTriangles) < EPSILON) {
                // This means the coordinate is in the convex quadrilateral!
                return [
                    i,
                    cart2d,
                ];
            }
            return undefined;
        }

        for (let i = 0; i < 2 * sq(cube.layers); i++) {
            const output = coordinateIsInSticker(i);
            if (output) return output;
        }

        return [-1, undefined];
    }
}