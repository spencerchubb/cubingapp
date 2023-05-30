import { DragDetector } from "../dragDetector";
import { Puzzle } from "../puzzle";
import { Cube, sq } from "./cube";

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

export class CubeDragDetector extends DragDetector {

    // Implement abstract method
    _onPointerDown(x: number, y: number, puzzle: Puzzle) {
        const cube = puzzle as Cube;

        const shapes = puzzle.getShapes();
        function getXY(objectIndex: number, xIndex: number, yIndex: number) {
            return {
                x: shapes[objectIndex].cart2d[xIndex],
                y: shapes[objectIndex].cart2d[yIndex],
            }
        }

        const topLeft = getXY(0, 0, 1);
        const topRight = getXY(cube.layers * (cube.layers - 1), 6, 7);
        const left = getXY(cube.layers - 1, 2, 3);
        const right = getXY(sq(cube.layers) - 1, 4, 5);
        const bottomLeft = getXY(cube.layers * (cube.layers + 1) - 1, 0, 1);
        const bottomRight = getXY(sq(cube.layers) * 2 - 1, 2, 3);
        if (y > topLeft.y && x > topLeft.x && x < topRight.x) {
            cube.cubeRotate(0, true);
        } else if (x < topLeft.x && y > left.y && y < topLeft.y) {
            cube.cubeRotate(2, false);
        } else if (x > topRight.x && y > right.y && y < topRight.y) {
            cube.cubeRotate(2, true);
        } else if (x < bottomLeft.x && y > bottomLeft.y && y < left.y) {
            cube.cubeRotate(1, true);
        } else if (x > bottomRight.x && y > bottomRight.y && y < right.y) {
            cube.cubeRotate(1, false);
        } else if (y < bottomLeft.y && x > bottomLeft.x && x < bottomRight.x) {
            cube.cubeRotate(0, false);
        }
    }

    // Implement abstract method
    _onPointerUp(x: number, y: number, puzzle: Puzzle) {
        const cube = puzzle as Cube;
        let posSlope, negSlope;
        if (this.stickerOnDown !== -1) {
            posSlope = this.slope(this.cart2dOnDown[0], this.cart2dOnDown[1], this.cart2dOnDown[4], this.cart2dOnDown[5]);
            negSlope = this.slope(this.cart2dOnDown[2], this.cart2dOnDown[3], this.cart2dOnDown[6], this.cart2dOnDown[7]);
            if (posSlope < 0) {
                const temp = posSlope;
                posSlope = negSlope;
                negSlope = temp;
            }
        }

        const slope = this.slope(x, y, this.xOnDown, this.yOnDown);

        if (cube.stickerIsOnFace(this.stickerOnDown, 0)) {
            if (x === this.xOnDown) {
                cube.turn(0, topColumn(cube, this.stickerOnDown), y > this.yOnDown);
            } else {
                if (slope > posSlope) {
                    cube.turn(0, topColumn(cube, this.stickerOnDown), x > this.xOnDown);
                } else if (slope < negSlope) {
                    cube.turn(0, topColumn(cube, this.stickerOnDown), x < this.xOnDown);
                } else {
                    cube.turn(2, topRow(cube, this.stickerOnDown), x > this.xOnDown);
                }
            }
        } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
            if (x === this.xOnDown) {
                cube.turn(0, frontColumn(cube, this.stickerOnDown), y > this.yOnDown);
            } else {
                if (slope > posSlope) {
                    cube.turn(0, frontColumn(cube, this.stickerOnDown), x > this.xOnDown);
                } else if (slope < negSlope) {
                    cube.turn(0, frontColumn(cube, this.stickerOnDown), x < this.xOnDown);
                } else {
                    cube.turn(1, frontRow(cube, this.stickerOnDown), x < this.xOnDown);
                }
            }
        }
    }

}