import { BLACK, Color } from "./colors";

export function getBuffer(gl: WebGLRenderingContext, data: number[]) {
    const buff = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buff);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    return buff;
}

export function getFloatBuffer(gl: WebGLRenderingContext, data: number): WebGLBuffer {
    const buff = gl.createBuffer();
    gl.bindBuffer(gl.LOW_FLOAT, buff);
    gl.bufferData(gl.LOW_FLOAT, data, gl.STATIC_DRAW);
    return buff;
}

export type ShapeArgs = {
    perspective: number[]
    color: Color,
    baseVertices: number[],
    stickerVertices: number[],
    hintVertices: number[],
}

export abstract class Shape {
    base: WebGLBuffer;
    sticker: WebGLBuffer;
    hint: WebGLBuffer;
    color: WebGLBuffer;
    black: WebGLBuffer;
    indexBuffer: WebGLBuffer;

    /* Cartesian 2D coordinates */
    cart2d: number[];

    constructor(gl: WebGLRenderingContext, args: ShapeArgs) {
        this.base = getBuffer(gl, args.baseVertices);
        this.sticker = getBuffer(gl, args.stickerVertices);
        this.hint = getBuffer(gl, args.hintVertices);
        this.color = this.getColorBuffer(gl, args.color);
        this.black = this.getColorBuffer(gl, BLACK);

        // Define a square as two triangles.
        // Given vertices A, B, C, and D, we define triangles ABC and ACD.
        const data = [0, 1, 2, 0, 2, 3];
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), gl.STATIC_DRAW);

        this.cart2d = convertTo2d(args.baseVertices, args.perspective);
    }

    abstract drawElement(gl: WebGLRenderingContext): void;

    abstract getColorBuffer(gl: WebGLRenderingContext, color: Color): WebGLBuffer;

}

export class Triangle extends Shape {
    drawElement(gl: WebGLRenderingContext): void {
        gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);
    }

    getColorBuffer(gl: WebGLRenderingContext, color: number[]): WebGLBuffer {
        return getBuffer(gl, [
            color[0], color[1], color[2], 1,
            color[0], color[1], color[2], 1,
            color[0], color[1], color[2], 1,
        ]);
    }
}

export class Square extends Shape {
    drawElement(gl: WebGLRenderingContext): void {
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    }

    getColorBuffer(gl: WebGLRenderingContext, color: Color): WebGLBuffer {
        return getBuffer(gl, [
            color[0], color[1], color[2], 1,
            color[0], color[1], color[2], 1,
            color[0], color[1], color[2], 1,
            color[0], color[1], color[2], 1,
        ]);
    }
}

export function drawTriangle(gl: WebGLRenderingContext) {
    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);
}

export function drawSquare(gl: WebGLRenderingContext) {
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
}

function convertTo2d(vertices: number[], perspective: number[]): number[] {
    const v = vertices;
    const homo = Array(16);
    multiply(homo, 0, perspective, [v[0], v[1], v[2], 1]);
    multiply(homo, 4, perspective, [v[3], v[4], v[5], 1]);
    multiply(homo, 8, perspective, [v[6], v[7], v[8], 1]);
    multiply(homo, 12, perspective, [v[9], v[10], v[11], 1]);

    // Divide x and y by w
    return [
        homo[0] / homo[3], homo[1] / homo[3],
        homo[4] / homo[7], homo[5] / homo[7],
        homo[8] / homo[11], homo[9] / homo[11],
        homo[12] / homo[15], homo[13] / homo[15],
    ];
}

/**
 * Multiply a 4x4 matrix with a 4x1 matrix, resulting in a 4x1 matrix.
 *
 * @param arr destination, 4x1 matrix
 * @param offset offset
 * @param a first operand, 4x4 matrix
 * @param b second operand, 4x1 matrix
 */
function multiply(arr: number[], offset: number, a: number[], b: number[]) {
    let b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    arr[offset + 0] = b0 * a[0] + b1 * a[4] + b2 * a[8] + b3 * a[12];
    arr[offset + 1] = b0 * a[1] + b1 * a[5] + b2 * a[9] + b3 * a[13];
    arr[offset + 2] = b0 * a[2] + b1 * a[6] + b2 * a[10] + b3 * a[14];
    arr[offset + 3] = b0 * a[3] + b1 * a[7] + b2 * a[11] + b3 * a[15];
}