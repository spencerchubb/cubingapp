import { Puzzle } from "./puzzle";

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

/* Compute area of triangle given 3 points */
function areaTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    return Math.abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
}

function almostEqual(a: number, b: number) {
    const EPSILON = 0.0001;
    return Math.abs(a - b) < EPSILON;
}

export abstract class DragDetector {
    numOfPointerMoves: number;
    xOnDown: number;
    yOnDown: number;
    xOnMove: number;
    yOnMove: number;
    stickerOnDown: number;
    cart2dOnDown: number[];

    abstract _onPointerDown(x: number, y: number, puzzle: Puzzle): void;

    abstract _onPointerUp(x: number, y: number, puzzle: Puzzle): void;

    onPointerDown(x: number, y: number, div: HTMLElement, puzzle: Puzzle) {
        this.numOfPointerMoves = 0;

        const clipX = xPixelToClip(x, div.clientWidth);
        const clipY = yPixelToClip(y, div.clientHeight);
        this.xOnDown = clipX;
        this.yOnDown = clipY;

        [this.stickerOnDown, this.cart2dOnDown] = this.coordsToSticker(clipX, clipY, puzzle);

        if (this.stickerOnDown !== -1) return;

        this._onPointerDown(clipX, clipY, puzzle);
    }

    /**
     * x and y are pixel values.
     */
    onPointerMove(x: number, y: number) {
        this.numOfPointerMoves++;
        this.xOnMove = x;
        this.yOnMove = y;
    }

    onPointerUp(div: HTMLElement, puzzle: Puzzle) {
        // Do nothing if the pointer movement was tiny.
        if (this.numOfPointerMoves < 2) return;

        const xClip = xPixelToClip(this.xOnMove, div.clientWidth);
        const yClip = yPixelToClip(this.yOnMove, div.clientHeight);

        this._onPointerUp(xClip, yClip, puzzle);
    }

    /**
     * Find the sticker with cart2d that contains this coordinate.
     * Return -1 if it's not in any sticker.
     */
    private coordsToSticker(x: number, y: number, puzzle: Puzzle) {
        const shapes = puzzle.getShapes();

        // Determine if coordinate is in convex quadrilateral
        const isInQuad = i => {
            const coords = shapes[i].cart2d;
            const [x1, y1, x2, y2, x3, y3, x4, y4] = coords;

            const totalArea = 
                areaTriangle(x1, y1, x2, y2, x3, y3)
                + areaTriangle(x1, y1, x3, y3, x4, y4);

            const area1 = areaTriangle(x, y, x1, y1, x2, y2);
            const area2 = areaTriangle(x, y, x2, y2, x3, y3);
            const area3 = areaTriangle(x, y, x3, y3, x4, y4);
            const area4 = areaTriangle(x, y, x4, y4, x1, y1);

            return almostEqual(totalArea, area1 + area2 + area3 + area4)
                ? [i, coords]
                : undefined;
        }

        // Determine if coordinate is in triangle
        const isInTriangle = i => {
            const coords = shapes[i].cart2d;
            const [x1, y1, x2, y2, x3, y3] = coords;

            const totalArea = areaTriangle(x1, y1, x2, y2, x3, y3);

            const area1 = areaTriangle(x, y, x1, y1, x2, y2);
            const area2 = areaTriangle(x, y, x2, y2, x3, y3);
            const area3 = areaTriangle(x, y, x3, y3, x1, y1);

            return almostEqual(totalArea, area1 + area2 + area3)
                ? [i, coords]
                : undefined;
        }

        const isInSticker = i => {
            const cart2d = shapes[i].cart2d;

            if (Number.isNaN(cart2d[6]) || Number.isNaN(cart2d[7])) {
                return isInTriangle(i);
            } else {
                // If 6 and 7 are numbers, then it's a quad.
                return isInQuad(i);
            }
        }

        for (let i = puzzle.startDraggable(); i < puzzle.endDraggable(); i++) {
            const output = isInSticker(i);
            if (output) return output;
        }

        return [-1, undefined];
    }

    protected slope(x1: number, y1: number, x2: number, y2: number) {
        return x1 < x2
            ? (y2 - y1) / (x2 - x1)
            : (y1 - y2) / (x1 - x2);
    }
}