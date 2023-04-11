import { randInt, shuffle } from "./rand";
import type { Cube } from "./cube";

const U = 0;
const F = 1;
const D = 2;
const B = 3;
const L = 4;
const R = 5;

const corners = [
    [U, B, L],
    [U, R, B],
    [U, L, F],
    [U, F, R],
    [D, F, L],
    [D, R, F],
    [D, L, B],
    [D, B, R],
];
const edges = [
    [U, B],
    [U, L],
    [U, R],
    [U, F],
    [F, L],
    [F, R],
    [D, F],
    [D, L],
    [D, R],
    [D, B],
    [B, L],
    [B, R],
];

export function scramble3x3(cube: Cube): number[] {
    let eo = orientation(12, 2);
    let co = orientation(8, 3);
    let cp = permutation(8);
    let ep = permutation(12);
    while (permutationParity(cp) !== permutationParity(ep)) {
        cp = permutation(8);
    }


    const stickers = Array(54);

    for (let i = 0; i < 6; i++) {
        const center = cube.center(i);
        stickers[center] = i;
    }
    
    let uCorners = cube.corners(0, 0);
    let fCorners = cube.corners(1, 0);
    let dCorners = cube.corners(2, 0);
    let bCorners = cube.corners(3, 0);
    let lCorners = cube.corners(4, 0);
    let rCorners = cube.corners(5, 0);

    const fill4C = (cIndices, c1, c2, c3, c4, co1, co2, co3, co4) => {
        /** ci is corner index, o is corner orientation */
        const corner = (ci, o) => corners[cp[ci]][(co[ci] + o) % 3];
        stickers[cIndices.topLeft] = corner(c1, co1);
        stickers[cIndices.topRight] = corner(c2, co2);
        stickers[cIndices.bottomLeft] = corner(c3, co3);
        stickers[cIndices.bottomRight] = corner(c4, co4);
    }

    fill4C(uCorners, 0, 1, 2, 3, 0, 0, 0, 0);
    fill4C(fCorners, 2, 3, 4, 5, 2, 1, 1, 2);
    fill4C(dCorners, 4, 5, 6, 7, 0, 0, 0, 0);
    fill4C(bCorners, 6, 7, 0, 1, 2, 1, 1, 2);
    fill4C(lCorners, 0, 2, 6, 4, 2, 1, 1, 2);
    fill4C(rCorners, 3, 1, 5, 7, 2, 1, 1, 2);

    let uEdges = cube.edges(0, 0, 0);
    let fEdges = cube.edges(1, 0, 0);
    let dEdges = cube.edges(2, 0, 0);
    let bEdges = cube.edges(3, 0, 0);
    let lEdges = cube.edges(4, 0, 0);
    let rEdges = cube.edges(5, 0, 0);

    const fill4E = (eIndices, e1, e2, e3, e4, eo1, eo2, eo3, eo4) => {
        /** ei is edge index, o is edge orientation */
        const edge = (ei, o) => edges[ep[ei]][(eo[ei] + o) % 2];
        stickers[eIndices.top] = edge(e1, eo1);
        stickers[eIndices.left] = edge(e2, eo2);
        stickers[eIndices.right] = edge(e3, eo3);
        stickers[eIndices.bottom] = edge(e4, eo4);
    }

    fill4E(uEdges, 0, 1, 2, 3, 0, 0, 0, 0);
    fill4E(fEdges, 3, 4, 5, 6, 1, 0, 0, 1);
    fill4E(dEdges, 6, 7, 8, 9, 0, 0, 0, 0);
    fill4E(bEdges, 9, 10, 11, 0, 1, 0, 0, 1);
    fill4E(lEdges, 1, 10, 4, 7, 1, 1, 1, 1);
    fill4E(rEdges, 2, 5, 11, 8, 1, 1, 1, 1);

    return stickers;
}

/**
 * Returns an array of length `pieces`.
 * The contents of the array are numbers in the range [0, `orientations`).
 * The numbers in the array should sum to 0 mod `orientations`.
 */
function orientation(pieces: number, orientations: number) {
    const o: number[] = Array(pieces);
    for (let i = 0; i < pieces; i++) {
        o[i] = randInt(orientations);
    }
    while (!orientationValid(o, orientations)) {
        const randPiece = randInt(pieces);
        o[randPiece] = randInt(orientations);
    }
    return o;
}

function orientationValid(pieces: number[], orientations: number) {
    let sum = 0;
    for (let i = 0; i < pieces.length; i++) {
        sum += pieces[i];
    }
    return sum % orientations === 0;
}

/**
 * Returns
 * 1) an array of numbers spanning the range [0, pieces), in random order
 * 2) a boolean indicating whether an array of pieces has permutation parity
 */
function permutation(pieces: number) {
    const p: number[] = Array(pieces);
    for (let i = 0; i < pieces; i++) {
        p[i] = i;
    }
    shuffle(p);
    return p;
}

/**
 * Returns a boolean indicating whether an array of pieces has permutation parity.
 */
function permutationParity(pieces: number[]) {
    const cpy = [...pieces];
    let parity = false;
    while (true) {
        if (cpy[0] === 0) {
            const misplaced = cpy.findIndex((value, index) => value !== index);
            if (misplaced === -1) {
                return parity;
            }
            cpy[0] = cpy[misplaced];
            cpy[misplaced] = 0;
            parity = !parity;
        } else {
            const temp = cpy[0];
            cpy[0] = cpy[temp];
            cpy[temp] = temp;
            parity = !parity;
        }
    }
}