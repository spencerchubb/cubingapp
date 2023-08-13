import { BLUE, Color, DARK_GRAY, GREEN, ORANGE, RED, WHITE, colorToStr } from "../colors";

export class SQ1 {
    top: number[];
    bottom: number[];

    constructor() {
        this.top = [
            0, 1, 2, 3, 4, 5, 6, 7, // top face, clockwise from ULF
        ];
        this.bottom = [
            8, 9, 10, 11, 12, 13, 14, 15, // bottom face, clockwise from DFL
        ];
    }

    svgTop(size: number = 100): string {
        return getSVG(size, this.top, true);
    }

    svgBottom(size: number = 100): string {
        return getSVG(size, this.bottom, false);
    }

    performAlg(alg: string) {
        const moves = alg.split(" ");
        for (const move of moves) {
            if (move === "/") {
                this.slash();
                continue;
            }
            const [top, bottom] = move.split(",");
            this.U(parseInt(top));
            this.D(parseInt(bottom));
        }
    }

    performAlgInverse(alg: string) {
        const moves = alg.split(" ");
        for (let i = moves.length - 1; i >= 0; i--) {
            const move = moves[i];
            if (move === "/") {
                this.slash();
                continue;
            }
            const [top, bottom] = move.split(",");
            this.U(-parseInt(top));
            this.D(-parseInt(bottom));
        }
    }

    slash() {
        let topCount = 0;
        let bottomCount = 0;
        let topIndex = 0;
        let bottomIndex = 0;
    
        // Even numbers are worth 2, odd numbers are worth 1
        for (const value of this.top) {
            topCount += value % 2 === 0 ? 2 : 1;
            topIndex += 1;
    
            if (topCount == 6) break;
        }
        for (const value of this.bottom) {
            bottomCount += value % 2 === 0 ? 2 : 1;
            bottomIndex += 1;
    
            if (bottomCount == 6) break;
        }
    
        let top = this.top.slice(topIndex);
        let bottom = this.bottom.slice(bottomIndex);
        this.top = this.top.slice(0, topIndex).concat(bottom.reverse());
        this.bottom = this.bottom.slice(0, bottomIndex).concat(top.reverse());
    }

    U(n: number) {
        this.top = turnFace(-n, this.top);
    }
    
    D(n: number) {
        this.bottom = turnFace(n, this.bottom);
    }
    
}

function getTotal(face): number {
    let total = 0;
    for (const value of face) {
        total += value % 2 === 0 ? 2 : 1;
    }
    return total;
}

function turnFace(n: number, face: number[]): number[] {
    let count = 0;
    let index = 0;
    let total = getTotal(face);

    if (n < 0) {
        n = total + n;
    }

    // Even numbers are worth 2, odd numbers are worth 1
    for (const value of face) {
        count += value % 2 === 0 ? 2 : 1;
        index += 1;

        if (count === n) break;
    }

    let beginning = face.slice(0, index);
    let end = face.slice(index);
    return end.concat(beginning);
}

const pieces: Color[][] = [
    [DARK_GRAY, BLUE, RED],
    [DARK_GRAY, BLUE],
    [DARK_GRAY, ORANGE, BLUE],
    [DARK_GRAY, ORANGE],
    [DARK_GRAY, GREEN, ORANGE],
    [DARK_GRAY, GREEN],
    [DARK_GRAY, RED, GREEN],
    [DARK_GRAY, RED],
    [WHITE, RED, BLUE],
    [WHITE, BLUE],
    [WHITE, BLUE, ORANGE],
    [WHITE, ORANGE],
    [WHITE, ORANGE, GREEN],
    [WHITE, GREEN],
    [WHITE, GREEN, RED],
    [WHITE, RED],
];

function getSVG(size: number, face: number[], top: boolean): string {
    let mid = size / 2;
    let pad = 0.15 * size; // padding around the whole thing
    let width = 0.1 * size; // width of outer pieces
    let inner = (width + pad - mid) / Math.tan(75 * Math.PI / 180) + mid; // inner width of corner
    let outer = (pad - mid) / Math.tan(75 * Math.PI / 180) + mid; // outer width of corner

    let corner1 = `${mid},${mid} ${inner},${size-width-pad} ${width+pad},${size-width-pad} ${width+pad},${size-inner}`;
    let corner2 = `${pad},${size-pad} ${width+pad},${size-width-pad} ${width+pad},${size-inner} ${pad},${size-outer}`;
    let corner3 = `${pad},${size-pad} ${width+pad},${size-width-pad} ${inner},${size-width-pad} ${outer},${size-pad}`;
    let edge1 = `${mid},${mid} ${size-inner},${size-width-pad} ${inner},${size-width-pad}`;
    let edge2 = `${outer},${size-pad} ${inner},${size-width-pad} ${size-inner},${size-width-pad} ${size-outer},${size-pad}`;

    if (!top) {
        [corner2, corner3] = [corner3, corner2];
    }

    let angle = 0; // angle in degrees
    let polygons: { points: string, fill: Color }[] = [];
    for (let i = 0; i < face.length; i++) {
        const piece = pieces[face[i]];
        if (piece.length === 3) {
            polygons.push({ points: rotatePoints2d(corner1, mid, mid, angle), fill: piece[0] });
            polygons.push({ points: rotatePoints2d(corner2, mid, mid, angle), fill: piece[1] });
            polygons.push({ points: rotatePoints2d(corner3, mid, mid, angle), fill: piece[2] });

            angle -= 60;
        } else if (piece.length === 2) {
            polygons.push({ points: rotatePoints2d(edge1, mid, mid, angle-30), fill: piece[0] });
            polygons.push({ points: rotatePoints2d(edge2, mid, mid, angle-30), fill: piece[1] });

            angle -= 30;
        } else {
            console.error("Invalid piece length:", piece);
        }
    }

    return `<svg fill="white" stroke="black" stroke-linejoin="round" width="${size}" height="${size}">
        ${polygons.map(polygon => {
            return `<polygon points="${polygon.points}" fill="${colorToStr(polygon.fill)}"></polygon>`
        }).join("")}
    </svg>`;
}

function rotatePoints2d(points: string, cx: number, cy: number, angle: number) {
    return points.split(" ").map(point => {
        let [x, y] = point.split(",");
        let xFloat = parseFloat(x);
        let yFloat = parseFloat(y);
        let [nx, ny] = rotatePoint2d(xFloat, yFloat, cx, cy, angle);
        return `${nx},${ny}`;
    }).join(" ");
}

function rotatePoint2d(x: number, y: number, cx: number, cy: number, angle: number) {
    let radians = angle * Math.PI / 180;
    let cos = Math.cos(radians);
    let sin = Math.sin(radians);
    let nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    let ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}