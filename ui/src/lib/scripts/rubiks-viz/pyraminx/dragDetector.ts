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

    // Implement abstract method
    _onPointerDown(x: number, y: number, puzzle: Puzzle) {
        const shapes = puzzle.getShapes();

        function getXY(objectIndex: number, xIndex: number, yIndex: number) {
            return {
                x: shapes[objectIndex].cart2d[xIndex],
                y: shapes[objectIndex].cart2d[yIndex],
            }
        }

        const top = getXY(1, 2, 3);
        const bottomY = getXY(0, 0, 1).y;

        if (y < bottomY) {
            puzzle.x(x < top.x);
        } else if (y < 0.5) {
            puzzle.y(x < top.x);
        } else {
            puzzle.S(x > top.x);
        }
    }

    // Implement abstract method
    _onPointerUp(x: number, y: number, puzzle: Puzzle) {
        const dragSlope = this.slope(this.xOnDown, this.yOnDown, x, y);
        switch (this.stickerOnDown) {
            case F0:
                puzzle.F(x < this.xOnDown);
                break;
            case F1:
                if (x < this.xOnDown) {
                    dragSlope < -0.3 ? puzzle.L(false) : puzzle.U(true);
                } else {
                    dragSlope < -0.3 ? puzzle.L(true) : puzzle.U(false);
                }
                break;
            case F2:
                puzzle.U(x < this.xOnDown);
                break;
            case F3:
                if (x < this.xOnDown) {
                    dragSlope < 0.3 ? puzzle.U(true) : puzzle.R(false);
                } else {
                    dragSlope < 0.3 ? puzzle.U(false) : puzzle.R(true);
                }
                break;
            case F4:
                puzzle.Lw(x > this.xOnDown);
                break;
            case F5:
                puzzle.L(x > this.xOnDown);
                break;
            case F6:
                if (x < this.xOnDown) {
                    dragSlope < 0 ? puzzle.L(false) : puzzle.R(false);
                } else {
                    dragSlope < 0 ? puzzle.L(true) : puzzle.R(true);
                }
                break;
            case F7:
                puzzle.R(x > this.xOnDown);
                break;
            case F8:
                puzzle.Rw(x > this.xOnDown);
                break;
        }
    }

}