import { Shape } from "../buffers";
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

    constructor(shapes: Shape[]) {
        super(shapes);
    }

    // Implement abstract method
    _onPointerDown(x: number, y: number, puzzle: Puzzle): string {
        const cube = puzzle as Cube;

        const shapes = this.shapes;
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
            return "x";
        } else if (x < topLeft.x && y > left.y && y < topLeft.y) {
            return "z'";
        } else if (x > topRight.x && y > right.y && y < topRight.y) {
            return "z";
        } else if (x < bottomLeft.x && y > bottomLeft.y && y < left.y) {
            return "y";
        } else if (x > bottomRight.x && y > bottomRight.y && y < right.y) {
            return "y'";
        } else if (y < bottomLeft.y && x > bottomLeft.x && x < bottomRight.x) {
            return "x'";
        }

        return "";
    }

    // Implement abstract method
    _onPointerUp(x: number, y: number, puzzle: Puzzle): string {
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
                const col = topColumn(cube, this.stickerOnDown);
                return stickerToMove(cube, col, "R", "M'", "L'", "R'", "M", "L", y > this.yOnDown);
            } else {
                if (slope > posSlope) {
                    const col = topColumn(cube, this.stickerOnDown);
                    return stickerToMove(cube, col, "R", "M'", "L'", "R'", "M", "L", x > this.xOnDown);
                } else if (slope < negSlope) {
                    const col = topColumn(cube, this.stickerOnDown);
                    return stickerToMove(cube, col, "R", "M'", "L'", "R'", "M", "L", x < this.xOnDown);
                } else {
                    const row = topRow(cube, this.stickerOnDown);
                    return stickerToMove(cube, row, "F", "S", "B'", "F'", "S'", "B", x > this.xOnDown);
                }
            }
        } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
            if (x === this.xOnDown) {
                const col = frontColumn(cube, this.stickerOnDown);
                return stickerToMove(cube, col, "R", "M'", "L", "R'", "M", "L'", y > this.yOnDown);
            } else {
                if (slope > posSlope) {
                    const col = frontColumn(cube, this.stickerOnDown);
                    return stickerToMove(cube, col, "R", "M'", "L'", "R'", "M", "L", x > this.xOnDown);
                } else if (slope < negSlope) {
                    const col = frontColumn(cube, this.stickerOnDown);
                    return stickerToMove(cube, col, "R", "M'", "L'", "R'", "M", "L", x < this.xOnDown);
                } else {
                    const row = frontRow(cube, this.stickerOnDown);
                    return stickerToMove(cube, row, "U", "E'", "D'", "U'", "E", "D", x < this.xOnDown);
                }
            }
        }

        return "";
    }

}

/**
 * 
 * @param group the row or columns where the sticker is located
 * @param face1 
 * @param face2 
 * @param face3 
 * @param cw true if clockwise, false if counterclockwise
 */
function stickerToMove(cube: Cube, group: number, a1, a2, a3, b1, b2, b3, cw: boolean) {
    if (group === 0) return cw ? a1 : b1;
    if (group === cube.layers - 1) return cw ? a3 : b3;

    if (group === cube.layers / 2 - 0.5) {
        return cw ? a2 : b2;
    } else if (group < cube.layers / 2) {
        return `${group + 1}${cw ? a1 : b1}`;
    }
    return `${cube.layers - group}${cw ? a3 : b3}`;
}