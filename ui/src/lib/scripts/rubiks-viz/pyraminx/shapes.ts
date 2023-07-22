import { vertex1, vertex2, vertex3, vertex4 } from "./vertices";
import { Shape, Triangle } from "../buffers";
import { BLUE, type Color, GREEN, RED, YELLOW } from "../colors";

export function makeTriangles(gl: WebGLRenderingContext | null, perspective: number[]): Shape[] | null {
    if (!gl) return null;
    
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

    return [
        ...makeFace(gl, perspective, front, GREEN),
        ...makeFace(gl, perspective, bottom, YELLOW),
        ...makeFace(gl, perspective, backLeft, RED),
        ...makeFace(gl, perspective, backRight, BLUE),
    ]
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