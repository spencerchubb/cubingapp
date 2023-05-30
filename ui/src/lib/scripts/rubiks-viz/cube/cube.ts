import { createBuffers } from "./buffers";
import { Puzzle } from "../puzzle";
import { Shape, getBuffer } from "../buffers";

export function sq(x: number): number {
    return x * x;
}

export class Cube extends Puzzle {
    layers: number;

    private shapes: Shape[];

    constructor(gl: WebGLRenderingContext, perspective: number[], layers: number) {
        super(perspective);

        this.layers = layers;

        const numStickers = this.numStickers();
        this.stickers = Array(numStickers);
        for (let i = 0; i < numStickers; i++) {
            this.stickers[i] = i;
        }

        this.resetAffectedStickers();

        this.shapes = createBuffers(gl, this);
    }

    private hintType: WebGLBuffer;
    // Implement abstract method
    getHintType(gl: WebGLRenderingContext): WebGLBuffer {
        if (!this.hintType) {
            // IDK why I have to put the number 4 times.
            this.hintType = getBuffer(gl, [1, 1, 1, 1]);
        }
        return this.hintType;
    }
    
    getShapes(): Shape[] {
        return this.shapes;
    }

    // Implement abstract method
    numStickers() {
        return this.layers * this.layers * 6;
    }

    // Implement abstract method
    startDraggable() {
        return 0;
    }

    // Implement abstract method
    endDraggable(): number {
        return sq(this.layers) * 2;
    }

    // Implement abstract method
    x(forward: boolean) {
        this.cubeRotate(0, forward);
    }

    // Implement abstract method
    y(forward: boolean) {
        this.cubeRotate(1, forward);
    }

    // Implement abstract method
    z(forward: boolean) {
        this.cubeRotate(2, forward);
    }

    // Implement abstract method
    U(forward: boolean) {
        this.turn(1, 0, forward);
    }

    // Implement abstract method
    Uw(forward: boolean) {
        this.wideTurn(1, 0, 1, forward);
    }

    // Implement abstract method
    D(forward: boolean) {
        this.turn(1, this.layers - 1, !forward);
    }

    // Implement abstract method
    Dw(forward: boolean) {
        this.wideTurn(1, this.layers - 1, this.layers - 2, !forward);
    }

    // Implement abstract method
    F(forward: boolean) {
        this.turn(2, 0, forward);
    }

    // Implement abstract method
    Fw(forward: boolean) {
        this.wideTurn(2, 0, 1, forward);
    }

    // Implement abstract method
    B(forward: boolean) {
        this.turn(2, this.layers - 1, !forward);
    }

    // Implement abstract method
    Bw(forward: boolean) {
        this.wideTurn(2, this.layers - 1, this.layers - 2, !forward);
    }

    // Implement abstract method
    R(forward: boolean) {
        this.turn(0, 0, forward);
    }

    // Implement abstract method
    Rw(forward: boolean) {
        this.wideTurn(0, 0, 1, forward);
    }

    // Implement abstract method
    L(forward: boolean) {
        this.turn(0, this.layers - 1, !forward);
    }

    // Implement abstract method
    Lw(forward: boolean) {
        this.wideTurn(0, this.layers - 1, this.layers - 2, !forward);
    }

    // Implement abstract method
    M(forward: boolean) {
        this.sliceTurn(0, !forward);
    }

    // Implement abstract method
    E(forward: boolean) {
        this.sliceTurn(1, !forward);
    }

    // Implement abstract method
    S(forward: boolean) {
        this.sliceTurn(2, forward);
    }

    private pushAnimation(axis, clockwise, prevStickers) {
        let x = clockwise ? -1 : 1;
        let rotationAxis: [number, number, number] = [0, 0, 0];
        rotationAxis[axis] = x;

        this.animationQueue.push({
            axis: rotationAxis,
            degrees: 90,
            stickers: prevStickers,
            affectedStickers: this.affectedStickers,
        });
    }

    turn(axis, layer, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        this.matchTurn(axis, layer, clockwise);
    }

    sliceTurn(axis, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        for (let i = 1; i < this.layers - 1; i++) {
            this.matchTurn(axis, i, clockwise);
        }
    }

    wideTurn(axis, layer1, layer2, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        this.matchTurn(axis, layer1, clockwise);
        this.matchTurn(axis, layer2, clockwise);
    }

    cubeRotate(axis, clockwise) {
        this.resetAffectedStickers();

        this.pushAnimation(axis, clockwise, [...this.stickers]);

        for (let i = 0; i < this.layers; i++) {
            this.matchTurn(axis, i, clockwise);
        }
    }

    private matchTurn(axis, layer, clockwise) {
        if (axis == 0) {
            this.turnXAxis(layer, clockwise);
            if (layer == 0) {
                this.turnOuter(5, clockwise);
            } else if (layer == this.layers - 1) {
                this.turnOuter(4, !clockwise);
            }
        } else if (axis == 1) {
            this.turnYAxis(layer, clockwise);
            if (layer == 0) {
                this.turnOuter(0, clockwise);
            } else if (layer == this.layers - 1) {
                this.turnOuter(2, !clockwise);
            }
        } else if (axis == 2) {
            this.turnZAxis(layer, clockwise);
            if (layer == 0) {
                this.turnOuter(1, clockwise);
            } else if (layer == this.layers - 1) {
                this.turnOuter(3, !clockwise);
            }
        } else {
            console.error(`Axis ${axis} not recognized`);
        }
    }

    private turnXAxis(layer, clockwise) {
        for (let i = 1; i <= this.layers; i++) {
            this.cycle(
                clockwise,
                0 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
                3 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
                2 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
                1 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
            );
        }
    }

    private turnYAxis(layer, clockwise) {
        for (let i = 0; i < this.layers; i++) {
            this.cycle(
                clockwise,
                1 * sq(this.layers) + i * this.layers + layer,
                4 * sq(this.layers) + i * this.layers + layer,
                3 * sq(this.layers) + (this.layers - i - 1) * this.layers + (this.layers - 1) - layer,
                5 * sq(this.layers) + i * this.layers + layer,
            );
        }
    }

    private turnZAxis(layer, clockwise) {
        for (let i = 0; i < this.layers; i++) {
            this.cycle(
                clockwise,
                0 * sq(this.layers) + (i + 1) * this.layers - 1 - layer,
                5 * sq(this.layers) + i + this.layers * layer,
                2 * sq(this.layers) + (this.layers - i - 1) * this.layers + layer,
                4 * sq(this.layers) + sq(this.layers) - (i + 1) - layer * this.layers,
            );
        }
    }

    private turnOuter(face, clockwise) {
        if (this.layers % 2 != 0) {
            let center = this.center(face);
            this.affectedStickers[center] = true;
        }

        for (let i = 0; i < Math.floor(this.layers / 2); i++) {
            const { topLeft, topRight, bottomLeft, bottomRight } = this.corners(face, i);

            this.cycle(clockwise, topLeft, topRight, bottomRight, bottomLeft);

            let numEdges = this.layers - 2 * (i + 1);
            for (let j = 0; j < numEdges; j++) {
                const { top, left, bottom, right } = this.edges(face, i, j);
                this.cycle(clockwise, top, right, bottom, left);
            }
        }
    }

    private cycle(clockwise: boolean, ...indices: number[]) {
        indices.forEach(i => this.affectedStickers[i] = true);

        if (clockwise) {
            let tmp = this.stickers[indices[indices.length - 1]];
            for (let i = indices.length - 1; i > 0; i--) {
                this.stickers[indices[i]] = this.stickers[indices[i - 1]];
            }
            this.stickers[indices[0]] = tmp;
        } else {
            let tmp = this.stickers[indices[0]];
            for (let i = 0; i < indices.length - 1; i++) {
                this.stickers[indices[i]] = this.stickers[indices[i + 1]];
            }
            this.stickers[indices[indices.length - 1]] = tmp;
        }
    }

    stickerIsOnFace(sticker: number, face: number) {
        return face * sq(this.layers) <= sticker && sticker < (face + 1) * sq(this.layers);
    }

    private center(face: number) {
        return face * sq(this.layers) + Math.floor(sq(this.layers) / 2);
    }

    private corners(face: number, layer: number) {
        const offset = face * sq(this.layers);
        return {
            topLeft: offset + (this.layers + 1) * layer,
            topRight: offset + (this.layers - 1) * (this.layers - layer),
            bottomRight: offset + (this.layers + 1) * (this.layers - layer - 1),
            bottomLeft: offset + (this.layers - 1) * (layer + 1),
        };
    }

    private edges(face: number, corner: number, edge: number) {
        const corners = this.corners(face, corner);
        let numEdges = this.layers - 2 * (corner + 1);
        return {
            top: corners.topLeft + this.layers * (edge + 1),
            left: corners.topLeft + (numEdges - edge),
            right: corners.topRight + edge + 1,
            bottom: corners.bottomLeft + this.layers * (numEdges - edge),
        };
    }
}