import { Shape } from "../buffers";
import { DragDetector } from "../dragDetector";
import { Puzzle } from "../puzzle";

const F0 = 1,
    F1 = 6,
    F2 = 5,
    F3 = 8,
    F4 = 0,
    F5 = 4,
    F6 = 7,
    F7 = 3,
    F8 = 2;

export class PyraDragDetector extends DragDetector {

    constructor(shapes: Shape[]) {
        super(shapes);
    }

    // Implement abstract method
    _onPointerDown(x: number, y: number, puzzle: Puzzle) {
        const shapes = this.shapes;

        function getXY(objectIndex: number, xIndex: number, yIndex: number) {
            return {
                x: shapes[objectIndex].cart2d[xIndex],
                y: shapes[objectIndex].cart2d[yIndex],
            }
        }

        const top = getXY(1, 2, 3);
        const bottomY = getXY(0, 0, 1).y;

        if (y < bottomY) {
            return x < top.x ? "x" : "x'";
        } else if (y < 0.5) {
            return x < top.x ? "y" : "y'";
        }
        return x > top.x ? "S" : "S'";
    }

    // Implement abstract method
    _onPointerUp(x: number, y: number, puzzle: Puzzle): string {
        const dragSlope = this.slope(this.xOnDown, this.yOnDown, x, y);
        switch (this.stickerOnDown) {
            case F0:
                return x < this.xOnDown ? "F" : "F'";
            case F1:
                if (x < this.xOnDown) {
                    return dragSlope < -0.3 ? "L'" : "U";
                } else {
                    return dragSlope < -0.3 ? "L" : "U'";
                }
            case F2:
                return x < this.xOnDown ? "U" : "U'";
            case F3:
                if (x < this.xOnDown) {
                    return dragSlope < 0.3 ? "U" : "R'";
                } else {
                    return dragSlope < 0.3 ? "U'" : "R";
                }
                break;
            case F4:
                return x > this.xOnDown ? "l" : "l'";
            case F5:
                return x > this.xOnDown ? "L" : "L'";
            case F6:
                if (x < this.xOnDown) {
                    return dragSlope < 0 ? "L'" : "R'";
                } else {
                    return dragSlope < 0 ? "L" : "R";
                }
                break;
            case F7:
                return x > this.xOnDown ? "R" : "R'";
            case F8:
                return x > this.xOnDown ? "r" : "r'";
        }

        return "";
    }

}