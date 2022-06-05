import { Buffers } from "./buffers";
import { CubeLogic } from "./cube";

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

function topRow(cube: CubeLogic, sticker: number) {
    return cube.numOfLayers - 1 - sticker % cube.numOfLayers;
}

function topColumn(cube: CubeLogic, sticker: number) {
    return cube.numOfLayers - 1 - Math.floor(sticker / cube.numOfLayers);
}

function frontRow(cube: CubeLogic, sticker: number) {
    return sticker % cube.numOfLayers;
}

function frontColumn(cube: CubeLogic, sticker: number) {
    return cube.numOfLayers - 1 - Math.floor((sticker - cube.layersSq) / cube.numOfLayers);
}

function leftRow(cube: CubeLogic, sticker: number) {
    return sticker % cube.numOfLayers;
}

function leftColumn(cube: CubeLogic, sticker: number) {
    return cube.numOfLayers - 1 - Math.floor((sticker - 4 * cube.layersSq) / cube.numOfLayers);
}

function rightRow(cube: CubeLogic, sticker: number) {
    return sticker % cube.numOfLayers;
}

function rightColumn(cube: CubeLogic, sticker: number) {
    return Math.floor((sticker - 5 * cube.layersSq) / cube.numOfLayers);
}

type SceneArgsType = { canvas: any, cube: any, buffers: any, offsetSelection: any, animateTurn: any };

export class DragDetector {
    numOfPointerMoves: number;
    xOnDown: number;
    yOnDown: number;
    stickerOnDown: number;
    cart2dOnDown: number[];

    /**
     * x and y are pixel values.
     */
    onPointerDown(x: number, y: number, sceneArgs: SceneArgsType) {
        const { canvas, cube, buffers, offsetSelection, animateTurn } = sceneArgs;

        this.numOfPointerMoves = 0;

        const clipX = xPixelToClip(x, canvas.width);
        const clipY = yPixelToClip(y, canvas.width);
        this.xOnDown = clipX;
        this.yOnDown = clipY;

        [this.stickerOnDown, this.cart2dOnDown] = this._coordinatesToSticker(clipX, clipY, cube, buffers, offsetSelection);

        const objects = buffers.objects;
        const getXY = (objectIndex, xIndex, yIndex) => ({
            x: objects[objectIndex].cart2d[xIndex],
            y: objects[objectIndex].cart2d[yIndex],
        });

        if (this.stickerOnDown === -1) {
            if (offsetSelection === 0) {
                const top = getXY(cube.numOfLayers * (cube.numOfLayers - 1), 6, 7);
                const topLeft = getXY(0, 0, 1);
                const bottomLeft = getXY(cube.numOfLayers * (2 * cube.numOfLayers + 1), 0, 1);
                if (clipY > topLeft.y) {
                    if (clipX < top.x) {
                        cube.cubeRotate(0, true);
                        animateTurn();
                    } else if (clipX > top.x) {
                        cube.cubeRotate(2, true);
                        animateTurn();
                    }
                } else if (clipY > bottomLeft.y) {
                    cube.cubeRotate(1, clipX < bottomLeft.x);
                    animateTurn();
                } else {
                    if (clipX < top.x) {
                        cube.cubeRotate(2, false);
                        animateTurn();
                    } else if (clipX > top.x) {
                        cube.cubeRotate(0, false);
                        animateTurn();
                    }
                }
            } else if (offsetSelection === 1) {
                const topLeft = getXY(0, 0, 1);
                const topRight = getXY(cube.numOfLayers * (cube.numOfLayers - 1), 6, 7);
                const left = getXY(cube.numOfLayers - 1, 2, 3);
                const right = getXY(cube.layersSq - 1, 4, 5);
                const bottomLeft = getXY(cube.numOfLayers * (cube.numOfLayers + 1) - 1, 0, 1);
                const bottomRight = getXY(cube.layersSq * 2 - 1, 2, 3);
                if (clipY > topLeft.y && clipX > topLeft.x && clipX < topRight.x) {
                    cube.cubeRotate(0, true);
                    animateTurn();
                } else if (clipX < topLeft.x && clipY > left.y && clipY < topLeft.y) {
                    cube.cubeRotate(2, false);
                    animateTurn();
                } else if (clipX > topRight.x && clipY > right.y && clipY < topRight.y) {
                    cube.cubeRotate(2, true);
                    animateTurn();
                } else if (clipX < bottomLeft.x && clipY > bottomLeft.y && clipY < left.y) {
                    cube.cubeRotate(1, true);
                    animateTurn();
                } else if (clipX > bottomRight.x && clipY > bottomRight.y && clipY < right.y) {
                    cube.cubeRotate(1, false);
                    animateTurn();
                } else if (clipY < bottomLeft.y && clipX > bottomLeft.x && clipX < bottomRight.x) {
                    cube.cubeRotate(0, false);
                    animateTurn();
                }
            } else if (offsetSelection === 2) {
                const top = getXY(0, 0, 1);
                const topLeft = getXY(cube.numOfLayers - 1, 2, 3);
                const bottomLeft = getXY(cube.numOfLayers * (cube.numOfLayers + 1) - 1, 0, 1);
                if (clipY > topLeft.y) {
                    if (clipX < top.x) {
                        cube.cubeRotate(2, false);
                        animateTurn();
                    } else if (clipX > top.x) {
                        cube.cubeRotate(0, true);
                        animateTurn();
                    }
                } else if (clipY > bottomLeft.y) {
                    cube.cubeRotate(1, clipX < bottomLeft.x);
                    animateTurn();
                } else {
                    if (clipX < top.x) {
                        cube.cubeRotate(0, false);
                        animateTurn();
                    } else if (clipX > top.x) {
                        cube.cubeRotate(2, true);
                        animateTurn();
                    }
                }
            }
        }
    }

    /**
     * x and y are pixel values.
     */
    onPointerMove() {
        this.numOfPointerMoves++;
    }

    onPointerUp(x: number, y: number, sceneArgs: SceneArgsType) {
        // Do nothing if the pointer movement was tiny.
        if (this.numOfPointerMoves < 2) return;

        const { canvas, cube, buffers, offsetSelection, animateTurn } = sceneArgs;

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

        const xClip = xPixelToClip(x, canvas.width);
        const yClip = yPixelToClip(y, canvas.width);

        const slope = calcSlope(xClip, yClip, this.xOnDown, this.yOnDown);

        const [stickerOnUp, _] = this._coordinatesToSticker(xClip, yClip, cube, buffers, offsetSelection);

        if (offsetSelection === 0) {
            if (cube.stickerIsOnFace(this.stickerOnDown, 0)) {
                if (cube.stickerIsOnFace(stickerOnUp, 1)) {
                    cube.turn(0, topColumn(cube, this.stickerOnDown), false);
                } else if (cube.stickerIsOnFace(stickerOnUp, 4)) {
                    cube.turn(2, topRow(cube, this.stickerOnDown), false);
                } else if (slope < 0) {
                    cube.turn(0, topColumn(cube, this.stickerOnDown), this.xOnDown > xClip);
                } else {
                    cube.turn(2, topRow(cube, this.stickerOnDown), this.xOnDown < xClip);
                }
            } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
                if (cube.stickerIsOnFace(stickerOnUp, 0)) {
                    cube.turn(0, frontColumn(cube, this.stickerOnDown), true);
                } else if (cube.stickerIsOnFace(stickerOnUp, 4)) {
                    cube.turn(1, frontRow(cube, this.stickerOnDown), true);
                } else if (xClip === this.xOnDown) {
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
            } else if (cube.stickerIsOnFace(this.stickerOnDown, 4)) {
                if (cube.stickerIsOnFace(stickerOnUp, 0)) {
                    cube.turn(2, leftColumn(cube, this.stickerOnDown), true);
                } else if (cube.stickerIsOnFace(stickerOnUp, 1)) {
                    cube.turn(1, leftRow(cube, this.stickerOnDown), false);
                } else if (xClip === this.xOnDown) {
                    cube.turn(2, leftColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
                } else {
                    if (slope > posSlope) {
                        cube.turn(2, leftColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
                    } else if (slope < negSlope) {
                        cube.turn(2, leftColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
                    } else {
                        cube.turn(1, leftRow(cube, this.stickerOnDown), xClip < this.xOnDown);
                    }
                }
            }
        } else if (offsetSelection === 1) {
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
        } else if (offsetSelection === 2) {
            if (cube.stickerIsOnFace(this.stickerOnDown, 0)) {
                if (cube.stickerIsOnFace(stickerOnUp, 1)) {
                    cube.turn(0, topColumn(cube, this.stickerOnDown), false);
                } else if (cube.stickerIsOnFace(stickerOnUp, 5)) {
                    cube.turn(2, topRow(cube, this.stickerOnDown), true);
                } else if (slope < 0) {
                    cube.turn(2, topRow(cube, this.stickerOnDown), this.xOnDown < xClip);
                } else {
                    cube.turn(0, topColumn(cube, this.stickerOnDown), this.xOnDown < xClip);
                }
            } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
                if (cube.stickerIsOnFace(stickerOnUp, 0)) {
                    cube.turn(0, frontColumn(cube, this.stickerOnDown), true);
                } else if (cube.stickerIsOnFace(stickerOnUp, 5)) {
                    cube.turn(1, frontRow(cube, this.stickerOnDown), false);
                } else if (xClip === this.xOnDown) {
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
            } else if (cube.stickerIsOnFace(this.stickerOnDown, 5)) {
                if (cube.stickerIsOnFace(stickerOnUp, 0)) {
                    cube.turn(2, rightColumn(cube, this.stickerOnDown), false);
                } else if (cube.stickerIsOnFace(stickerOnUp, 1)) {
                    cube.turn(1, rightRow(cube, this.stickerOnDown), true);
                } else if (xClip === this.xOnDown) {
                    cube.turn(2, rightColumn(cube, this.stickerOnDown), yClip < this.yOnDown);
                } else {
                    if (slope > posSlope) {
                        cube.turn(2, rightColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
                    } else if (slope < negSlope) {
                        cube.turn(2, rightColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
                    } else {
                        cube.turn(1, rightRow(cube, this.stickerOnDown), xClip < this.xOnDown);
                    }
                }
            }
        }

        animateTurn();
    }

    /**
     * Find the sticker with cart2d that contains this coordinate.
     * Return -1 if it's not in any sticker.
     */
    _coordinatesToSticker(x: number, y: number, cube: CubeLogic, buffers: Buffers, offsetSelection: number) {
        const coordinateIsInSticker = i => {
            if (!buffers.objects[i].cart2d) return;
            const cart2d = buffers.objects[i].cart2d;
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

        for (let i = 0; i < 2 * cube.layersSq; i++) {
            const output = coordinateIsInSticker(i);
            if (output) return output;
        }

        if (offsetSelection === 1) return [-1, undefined];

        if (offsetSelection === 0) {
            for (let i = 4 * cube.layersSq; i < 5 * cube.layersSq; i++) {
                const output = coordinateIsInSticker(i);
                if (output) return output;
            }
        }

        if (offsetSelection === 2) {
            for (let i = 5 * cube.layersSq; i < 6 * cube.layersSq; i++) {
                const output = coordinateIsInSticker(i);
                if (output) return output;
            }
        }

        return [-1, undefined];
    }
}