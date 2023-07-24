import {
    vertex1, vertex2, vertex3, vertex4,
    invVertex1, invVertex2, invVertex3, invVertex4,
} from "./vertices";
import { getBuffer } from "../buffers";
import { Puzzle, getDefaultPerspective } from "../puzzle";
import * as glMat from "../glMatrix";

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

export class Pyraminx extends Puzzle {

    constructor() {
        super();

        this.solve();
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
    getPerspective(): number[] {
        let mat = getDefaultPerspective();
        return glMat.translate(mat, [0.0, -0.2, 0.0]);
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

            this.cycle(forward, D0, D8, D4);
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
    Uw(forward: boolean): void {
        this.animate(forward ? invVertex4 : vertex4, () => {
            this.cycle(forward, F0, L0, R0);
        });
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
    Bw(forward: boolean): void {
        this.animate(forward ? vertex2 : invVertex2, () => {
            this.cycle(forward, D0, L4, R8);
        });
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