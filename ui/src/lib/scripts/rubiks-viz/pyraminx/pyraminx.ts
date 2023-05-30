import { Shape, Triangle, getBuffer } from "../buffers";
import { BLUE, Color, GREEN, RED, YELLOW } from "../colors";
import { Puzzle } from "../puzzle";

// Sticker order is Front, Bottom, Back left, Back right.
// Top to bottom, left to right.
//
//     A    
//   B C D  
// E F G H I
const F0 = 1,
    F1 = 6,
    F2 = 5,
    F3 = 8,
    F4 = 0,
    F5 = 4,
    F6 = 7,
    F7 = 3,
    F8 = 2,
    D0 = 11,
    D1 = 17,
    D2 = 12,
    D3 = 16,
    D4 = 10,
    D5 = 14,
    D6 = 15,
    D7 = 13,
    D8 = 9,
    L0 = 20,
    L1 = 25,
    L2 = 21,
    L3 = 26,
    L4 = 18,
    L5 = 22,
    L6 = 24,
    L7 = 23,
    L8 = 19,
    R0 = 28,
    R1 = 33,
    R2 = 32,
    R3 = 35,
    R4 = 27,
    R5 = 31,
    R6 = 34,
    R7 = 30,
    R8 = 29;

const x = Math.sqrt(6) / 3;
const y = -1 / 3;
const zfront = Math.sqrt(1 - x * x - y * y);
const zback = Math.sqrt(1 - y * y);
const vertex1: [number, number, number] = [x, y, zfront];
const vertex2: [number, number, number] = [0, y, -zback];
const vertex3: [number, number, number] = [-x, y, zfront];
const vertex4: [number, number, number] = [0, 1, 0];

const invVertex1: [number, number, number] = [-vertex1[0], -vertex1[1], -vertex1[2]];
const invVertex2: [number, number, number] = [-vertex2[0], -vertex2[1], -vertex2[2]];
const invVertex3: [number, number, number] = [-vertex3[0], -vertex3[1], -vertex3[2]];
const invVertex4: [number, number, number] = [-vertex4[0], -vertex4[1], -vertex4[2]];

export class Pyraminx extends Puzzle {
    private shapes: Shape[];

    constructor(gl: WebGLRenderingContext, perspective: number[]) {
        super(perspective);

        this.stickers = [
            0,1,2,3,4,5,6,7,8, // Front
            9,10,11,12,13,14,15,16,17, // Bottom
            18,19,20,21,22,23,24,25,26, // Back left
            27,28,29,30,31,32,33,34,35, // Back right
        ];

        let front = [
            ...vertex3,
            ...vertex4,
            ...vertex1,
        ];
        let backLeft = [
            ...vertex2,
            ...vertex3,
            ...vertex4,
        ];
        let bottom = [
            ...vertex1,
            ...vertex3,
            ...vertex2,
        ];
        let backRight = [
            ...vertex1,
            ...vertex4,
            ...vertex2,
        ];

        this.shapes = [
            ...makeFace(gl, perspective, front, GREEN),
            ...makeFace(gl, perspective, bottom, YELLOW),
            ...makeFace(gl, perspective, backLeft, RED),
            ...makeFace(gl, perspective, backRight, BLUE),
        ]
    }

    private hintType: WebGLBuffer;
    // Implement abstract method
    getHintType(gl: WebGLRenderingContext): WebGLBuffer {
        if (!this.hintType) {
            // IDK why I have to put the number 4 times.
            this.hintType = getBuffer(gl, [2, 2, 2, 2]);
        }
        return this.hintType;
    }

    // Implement abstract method
    getShapes(): Shape[] {
        return this.shapes;
    }

    // Implement abstract method
    numStickers(): number {
        return 36;
    }

    // Implement abstract method
    startDraggable(): number {
        return 0;
    }

    // Implement abstract method
    endDraggable(): number {
        return 9;
    }

    // Implement abstract method
    x(forward: boolean): void {
        if (forward) {
            this.rotateAboutRightVertex(false);
        } else {
            this.rotateAboutLeftVertex(true);
        }
    }

    // Implement abstract method
    y(forward: boolean): void {
        this.animate(forward ? invVertex4 : vertex4, () => {
            this.cycle(forward, F0, L0, R0);
            this.cycle(forward, F1, L1, R1);
            this.cycle(forward, F2, L2, R2);
            this.cycle(forward, F3, L3, R3);

            this.cycle(forward, F4, L4, R4);
            this.cycle(forward, F5, L5, R5);
            this.cycle(forward, F6, L6, R6);
            this.cycle(forward, F7, L7, R7);
            this.cycle(forward, F8, L8, R8);

            this.cycle(forward, D0, D4, D8);
            this.cycle(forward, D1, D3, D6);
            this.cycle(forward, D2, D7, D5);
        });
    }

    // Implement abstract method
    z(forward: boolean): void {
        this.animate(forward ? vertex2 : invVertex2, () => {
            this.cycle(forward, D0, L4, R8);
            this.cycle(forward, D1, L1, R6);
            this.cycle(forward, D2, L5, R7);
            this.cycle(forward, D3, L6, R3);

            this.cycle(forward, R0, D8, L8);
            this.cycle(forward, R2, D7, L7);
            this.cycle(forward, R1, D6, L3);
            this.cycle(forward, R5, D5, L2);
            this.cycle(forward, R4, D4, L0);

            this.cycle(forward, F0, F8, F4);
            this.cycle(forward, F3, F6, F1);
            this.cycle(forward, F2, F7, F5);
        });
    }

    // Implement abstract method
    U(forward: boolean): void {
        this.animate(forward ? invVertex4 : vertex4, () => {
            this.cycle(forward, F0, L0, R0);
            this.cycle(forward, F1, L1, R1);
            this.cycle(forward, F2, L2, R2);
            this.cycle(forward, F3, L3, R3);
        });
    }

    // Implement abstract method
    Uw(_: boolean): void {
        console.log("Uw not implemented for pyraminx.");
    }

    // Implement abstract method
    D(forward: boolean): void {
        this.animate(forward ? invVertex2 : vertex2, () => {
            this.cycle(forward, D0, R8, L4);
        });
    }

    // Implement abstract method
    Dw(_: boolean): void {
        console.log("Dw not implemented for pyraminx.");
    }

    // Implement abstract method
    F(forward: boolean): void {
        this.animate(forward ? invVertex4 : vertex4, () => {
            this.cycle(forward, F0, L0, R0);
        });
    }

    // Implement abstract method
    Fw(_: boolean): void {
        console.log("Fw not implemented for pyraminx.");
    }

    // Implement abstract method
    B(forward: boolean): void {
        this.animate(forward ? invVertex2 : vertex2, () => {
            this.cycle(forward, D0, R8, L4);
            this.cycle(forward, D1, R6, L1);
            this.cycle(forward, D2, R7, L5);
            this.cycle(forward, D3, R3, L6);
        });
    }

    // Implement abstract method
    Bw(_: boolean): void {
        console.log("Bw not implemented for pyraminx.");
    }

    // Implement abstract method
    L(forward: boolean): void {
        this.animate(forward ? invVertex3 : vertex3, () => {
            this.cycle(forward, F4, D4, L8);
            this.cycle(forward, F1, D6, L6);
            this.cycle(forward, F5, D5, L7);
            this.cycle(forward, F6, D1, L3);
        });
    }

    // Implement abstract method
    Lw(forward: boolean): void {
        this.animate(forward ? invVertex3 : vertex3, () => {
            this.cycle(forward, F4, D4, L8);
        });
    }

    // Implement abstract method
    R(forward: boolean): void {
        this.animate(forward ? invVertex1 : vertex1, () => {
            this.cycle(forward, F8, R4, D8);
            this.cycle(forward, F3, R6, D6);
            this.cycle(forward, F7, R5, D7);
            this.cycle(forward, F6, R1, D3);
        });
    }

    // Implement abstract method
    Rw(forward: boolean): void {
        this.animate(forward ? invVertex1 : vertex1, () => {
            this.cycle(forward, F8, R4, D8);
        });
    }

    // Implement abstract method
    M(_: boolean): void {
        console.log("M not implemented for pyraminx.");
    }

    // Implement abstract method
    E(_: boolean): void {
        console.log("E not implemented for pyraminx.");
    }

    // Implement abstract method
    S(forward: boolean): void {
        if (forward) {
            this.rotateAboutRightVertex(true);
        } else {
            this.rotateAboutLeftVertex(false);
        }
    }

    private animate(axis: [number, number, number], turn: () => void): void {
        this.affectedStickers = Array(36).fill(false);

        const stickers = [...this.stickers];

        turn();

        this.animationQueue.push({
            axis: axis,
            degrees: 120,
            stickers: stickers,
            affectedStickers: [...this.affectedStickers],
        });
    }

    private rotateAboutLeftVertex(forward: boolean): void {
        this.animate(forward ? invVertex3 : vertex3, () => {
            this.cycle(forward, F4, D4, L8);
            this.cycle(forward, F1, D6, L6);
            this.cycle(forward, F5, D5, L7);
            this.cycle(forward, F6, D1, L3);

            this.cycle(forward, F0, D8, L4);
            this.cycle(forward, F2, D7, L5);
            this.cycle(forward, F3, D3, L1);
            this.cycle(forward, F7, D2, L2);
            this.cycle(forward, F8, D0, L0);

            this.cycle(forward, R0, R4, R8);
            this.cycle(forward, R3, R1, R6);
            this.cycle(forward, R2, R5, R7);
        });
    }

    private rotateAboutRightVertex(forward: boolean): void {
        this.animate(forward ? invVertex1 : vertex1, () => {
            this.cycle(forward, F8, R4, D8);
            this.cycle(forward, F3, R6, D6);
            this.cycle(forward, F7, R5, D7);
            this.cycle(forward, F6, R1, D3);

            this.cycle(forward, F0, R8, D4);
            this.cycle(forward, F2, R7, D5);
            this.cycle(forward, F1, R3, D1);
            this.cycle(forward, F5, R2, D2);
            this.cycle(forward, F4, R0, D0);

            this.cycle(forward, L0, L4, L8);
            this.cycle(forward, L3, L1, L6);
            this.cycle(forward, L2, L5, L7);
        });
    }

    private cycle(forward: boolean, i1: number, i2: number, i3: number): void {
        this.affectedStickers[i1] = true;
        this.affectedStickers[i2] = true;
        this.affectedStickers[i3] = true;

        if (forward) {
            const temp = this.stickers[i3];
            this.stickers[i3] = this.stickers[i2];
            this.stickers[i2] = this.stickers[i1];
            this.stickers[i1] = temp;
        } else {
            const temp = this.stickers[i1];
            this.stickers[i1] = this.stickers[i2];
            this.stickers[i2] = this.stickers[i3];
            this.stickers[i3] = temp;
        }
    }
}

function makeFace(gl: WebGLRenderingContext, perspective: number[], triangle: number[], color: Color): Triangle[] {
    const baseTri = scale(triangle, 1.7);
    const stickerTri = scale(triangle, 1.75);
    const hintTri = pad(
        scale(triangle, 3.25),
        0.5,
    );

    const baseMinis = splitIntoMiniTriangles(baseTri);
    const stickerMinis = splitIntoMiniTriangles(stickerTri).map(tri => pad(tri, 0.07));
    const hintMinis = splitIntoMiniTriangles(hintTri).map(tri => pad(tri, 0.07));

    let triangles: Triangle[] = new Array(9);
    for (let i = 0; i < 9; i++) {
        triangles[i] = new Triangle(gl, {
            perspective: perspective,
            color,
            baseVertices: baseMinis[i],
            stickerVertices: stickerMinis[i],
            hintVertices: hintMinis[i],
        });
    }
    return triangles;
}

function splitIntoMiniTriangles(coords: number[]): number[][] {
    const [x1, y1, z1, x2, y2, z2, x3, y3, z3] = coords;

    const [x12_1, y12_1, z12_1] = thirdPoint(x1, y1, z1, x2, y2, z2);
    const [x12_2, y12_2, z12_2] = twoThirdsPoint(x1, y1, z1, x2, y2, z2);

    const [x13_1, y13_1, z13_1] = thirdPoint(x1, y1, z1, x3, y3, z3);
    const [x13_2, y13_2, z13_2] = twoThirdsPoint(x1, y1, z1, x3, y3, z3);

    const [x23_1, y23_1, z23_1] = thirdPoint(x2, y2, z2, x3, y3, z3);
    const [x23_2, y23_2, z23_2] = twoThirdsPoint(x2, y2, z2, x3, y3, z3);

    const xmid = (x1 + x2 + x3) / 3,
        ymid = (y1 + y2 + y3) / 3,
        zmid = (z1 + z2 + z3) / 3;

    // Split into 9 triangles
    return [
        [x1, y1, z1, x12_1, y12_1, z12_1, x13_1, y13_1, z13_1],
        [x12_2, y12_2, z12_2, x2, y2, z2, x23_1, y23_1, z23_1],
        [x13_2, y13_2, z13_2, x23_2, y23_2, z23_2, x3, y3, z3],
        [xmid, ymid, zmid, x13_2, y13_2, z13_2, x23_2, y23_2, z23_2],
        [xmid, ymid, zmid, x13_1, y13_1, z13_1, x12_1, y12_1, z12_1],
        [xmid, ymid, zmid, x12_2, y12_2, z12_2, x23_1, y23_1, z23_1],
        [xmid, ymid, zmid, x12_1, y12_1, z12_1, x12_2, y12_2, z12_2],
        [xmid, ymid, zmid, x13_1, y13_1, z13_1, x13_2, y13_2, z13_2],
        [xmid, ymid, zmid, x23_1, y23_1, z23_1, x23_2, y23_2, z23_2],
    ];
}

// Find the point that lies 1/3 of the way between the two points.
function thirdPoint(x1, y1, z1, x2, y2, z2): [number, number, number] {
    return [(2 * x1 + x2) / 3, (2 * y1 + y2) / 3, (2 * z1 + z2) / 3];
}

// Find the point that lies 2/3 of the way between the two points.
function twoThirdsPoint(x1, y1, z1, x2, y2, z2): [number, number, number] {
    return [(x1 + 2 * x2) / 3, (y1 + 2 * y2) / 3, (z1 + 2 * z2) / 3];
}

function scale(coords: number[], factor: number): number[] {
    return coords.map(coord => coord * factor);
}

/* Pad the shape by a certain percentage. */
function pad(coords: number[], percent: number): number[] {
    let amount = 1 - percent;

    // Find the center of the shape.
    const xmid = (coords[0] + coords[3] + coords[6]) / 3,
        ymid = (coords[1] + coords[4] + coords[7]) / 3,
        zmid = (coords[2] + coords[5] + coords[8]) / 3;

    // Move coords close to the center of the shape.
    const dx = coords[0] - xmid,
        dy = coords[1] - ymid,
        dz = coords[2] - zmid;
    coords[0] = xmid + dx * amount;
    coords[1] = ymid + dy * amount;
    coords[2] = zmid + dz * amount;

    const dx2 = coords[3] - xmid,
        dy2 = coords[4] - ymid,
        dz2 = coords[5] - zmid;
    coords[3] = xmid + dx2 * amount;
    coords[4] = ymid + dy2 * amount;
    coords[5] = zmid + dz2 * amount;

    const dx3 = coords[6] - xmid,
        dy3 = coords[7] - ymid,
        dz3 = coords[8] - zmid;
    coords[6] = xmid + dx3 * amount;
    coords[7] = ymid + dy3 * amount;
    coords[8] = zmid + dz3 * amount;

    return coords;
}
