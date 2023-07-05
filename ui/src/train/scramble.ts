import { Puzzle } from "../lib/scripts/rubiks-viz/puzzle";
import { scramble_333 } from "../lib/scripts/cstimer/scramble_333";
import { Cube } from "../lib/scripts/rubiks-viz";

const STICKERS = {
    UBL: 0,
    UL: 1,
    ULF: 2,
    UB: 3,
    U: 4,
    UF: 5,
    URB: 6,
    UR: 7,
    UFR: 8,
    FUL: 9,
    FL: 10,
    FLD: 11,
    FU: 12,
    F: 13,
    FD: 14,
    FRU: 15,
    FR: 16,
    FDR: 17,
    DFL: 18,
    DL: 19,
    DLB: 20,
    DF: 21,
    D: 22,
    DB: 23,
    DRF: 24,
    DR: 25,
    DBR: 26,
    BDL: 27,
    BL: 28,
    BLU: 29,
    BD: 30,
    B: 31,
    BU: 32,
    BRD: 33,
    BR: 34,
    BUR: 35,
    LUB: 36,
    LB: 37,
    LBD: 38,
    LU: 39,
    L: 40,
    LD: 41,
    LFU: 42,
    LF: 43,
    LDF: 44,
    RUF: 45,
    RF: 46,
    RFD: 47,
    RU: 48,
    R: 49,
    RD: 50,
    RBU: 51,
    RB: 52,
    RDB: 53,
};

const UB = [STICKERS.UB, STICKERS.BU];
const UL = [STICKERS.UL, STICKERS.LU];
const UR = [STICKERS.UR, STICKERS.RU];
const UF = [STICKERS.UF, STICKERS.FU];
const DB = [STICKERS.DB, STICKERS.BD];
const DL = [STICKERS.DL, STICKERS.LD];
const DR = [STICKERS.DR, STICKERS.RD];
const DF = [STICKERS.DF, STICKERS.FD];
const FL = [STICKERS.FL, STICKERS.LF];
const FR = [STICKERS.FR, STICKERS.RF];
const BL = [STICKERS.BL, STICKERS.LB];
const BR = [STICKERS.BR, STICKERS.RB];

const UBL = [STICKERS.UBL, STICKERS.BLU, STICKERS.LUB];
const ULF = [STICKERS.ULF, STICKERS.LFU, STICKERS.FUL];
const URB = [STICKERS.URB, STICKERS.RBU, STICKERS.BUR];
const UFR = [STICKERS.UFR, STICKERS.FRU, STICKERS.RUF];
const DFL = [STICKERS.DFL, STICKERS.FLD, STICKERS.LDF];
const DLB = [STICKERS.DLB, STICKERS.LBD, STICKERS.BDL];
const DRF = [STICKERS.DRF, STICKERS.RFD, STICKERS.FDR];
const DBR = [STICKERS.RDB, STICKERS.BRD, STICKERS.RDB];

// BR, BL, FL, FR, DB, DL, DF, DR, UL, UB, UF, UR
// Order of min2phase edges (M2PE)
const edges = [
    BR,
    BL,
    FL,
    FR,
    DB,
    DL,
    DF,
    DR,
    UB,
    UL,
    UF,
    UR,
].reverse();

// Order of min2phase corners (M2PC)
// DBR, DLB, DFL, DRF, URB, UBL, ULF, UFR
const corners = [
    DBR,
    DLB,
    DFL,
    DRF,
    URB,
    UBL,
    ULF,
    UFR,
].reverse();

const gl = (document.querySelector("canvas") as HTMLCanvasElement).getContext("webgl") as WebGLRenderingContext;
const threeByThree = new Cube(gl, [], 3);

export function scramble(puzzle: Puzzle, alg: string): string {

    // If the puzzle is a 2x2, we do something special.
    // Perform the alg on a 3x3, then disregard the edges.
    if ((puzzle as Cube).layers === 2) {
        puzzle = threeByThree;
        threeByThree.solve();
        threeByThree.performAlg(alg);

        // With short 2x2 algorithms, the scramble can be too simple sometimes.
        // So we perform a few more moves to make it more interesting.
        threeByThree.performAlg("M E S M2 E");
    }

    let [ep, eo, cp, co] = get_EP_EO_CP_CO(puzzle);

    console.log({
        ep, eo, cp, co
    })

    return scramble_333.getAnyScramble(ep, eo, cp, co, null, null, null, null);
}

function get_EP_EO_CP_CO(puzzle: Puzzle): [number[], number[], number[], number[]] {
    let ep: number[] = [];
    let eo: number[] = [];
    let cp: number[] = [];
    let co: number[] = [];

    const stickers = puzzle.stickers;
    edges.forEach(edge => {
        const i = findPiece(puzzle, edge, edges);
        ep.push(i);
        const sticker = stickers[edge[0]];
        eo.push(edges[i].findIndex(e => e === sticker));
    });

    corners.forEach(corner => {
        const i = findPiece(puzzle, corner, corners);
        cp.push(i);
        const sticker = stickers[corner[0]];
        co.push(corners[i].findIndex(e => e === sticker));
    });

    return [ep, eo, cp, co];
}

function findPiece(puzzle: Puzzle, piece: number[], pieces: number[][]): number {
    for (let i = 0; i < pieces.length; i++) {
        if (pieceIsThere(puzzle, piece, pieces[i])) {
            return i;
        }
    }
    console.error("Piece not found:", puzzle.stickers, piece);
    return -1;
}

function pieceIsThere(puzzle: Puzzle, piece1: number[], piece2: number[]): boolean {
    const arr1 = piece1.map(i => puzzle.stickers[i]);
    const arr2 = piece2;
    return pseudoEqual(arr1, arr2);
}

/** Two arrays are pseudo equal if they contain the same elements in any order. */
function pseudoEqual(arr1: number[], arr2: number[]): boolean {
    const freq1 = computeFreq(arr1);
    const freq2 = computeFreq(arr2);
    for (const key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }
    return true;
}

function computeFreq(arr: number[]): Object {
    const freq = {};
    arr.forEach(e => {
        freq[e] = (freq[e] || 0) + 1;
    });
    return freq;
}
