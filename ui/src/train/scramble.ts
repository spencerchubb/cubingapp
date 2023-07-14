import { Puzzle } from "../lib/scripts/rubiks-viz/puzzle";
import { scramble_333 } from "../lib/scripts/cstimer/scramble_333";
import { Cube } from "../lib/scripts/rubiks-viz";

const S = {
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

const UB = [S.UB, S.BU];
const UL = [S.UL, S.LU];
const UR = [S.UR, S.RU];
const UF = [S.UF, S.FU];
const DB = [S.DB, S.BD];
const DL = [S.DL, S.LD];
const DR = [S.DR, S.RD];
const DF = [S.DF, S.FD];
const FL = [S.FL, S.LF];
const FR = [S.FR, S.RF];
const BL = [S.BL, S.LB];
const BR = [S.BR, S.RB];

const UBL = [S.UBL, S.LUB, S.BLU];
const ULF = [S.ULF, S.FUL, S.LFU];
const URB = [S.URB, S.BUR, S.RBU];
const UFR = [S.UFR, S.RUF, S.FRU];
const DFL = [S.DFL, S.FLD, S.LDF];
const DLB = [S.DLB, S.LBD, S.BDL];
const DRF = [S.DRF, S.RFD, S.FDR];
const DBR = [S.DBR, S.BRD, S.RDB];

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

const cube = new Cube(3);

export function scramble(layers: number, alg: string): string {
    cube.solve();
    cube.performAlg(alg);

    // If the puzzle is a 2x2, we disregard the edges.
    if (layers === 2) {
        const anyEdges = 0xffffffffffff;
        let [cp, co] = getPermAndOri(cube, corners, 8);
        return scramble_333.getAnyScramble(anyEdges, anyEdges, cp, co, null, null, null, null);
    }

    let [ep, eo] = getPermAndOri(cube, edges, 12);
    let [cp, co] = getPermAndOri(cube, corners, 8);

    return scramble_333.getAnyScramble(ep, eo, cp, co, null, null, null, null);
}

function getPermAndOri(puzzle: Puzzle, pieces: number[][], numPieces: number): [number[], number[]] {
    let perm = new Array(numPieces);
    let ori = new Array(numPieces);

    const stickers = puzzle.stickers;
    for (let i = 0; i < numPieces; i++) {
        const piece = findPiece(puzzle, pieces[i], pieces);
        perm[i] = piece;
        ori[i] = pieces[i].findIndex(e => {
            const sticker = stickers[e];
            const isWhite = 0 <= sticker && sticker < 9;
            const isYellow = 18 <= sticker && sticker < 27;
            return isWhite || isYellow;
        });
        if (ori[i] === -1 && pieces[i].length == 2) {
            // No white or yellow sticker was found, and the length is 2.
            // That means this is an edge in the E slice.
            const edgeSticker = pieces[i][0];
            ori[i] = 
                (edgeSticker === S.FL
                || edgeSticker === S.FR
                || edgeSticker === S.BL
                || edgeSticker === S.BR) ? 0 : 1;
        }
    }

    return [perm, ori];
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
    if (arr1.length !== arr2.length) return false;
    return arr1.every(element => arr2.includes(element));
}

// TODO remove if not needed
// function pseudoEqual(arr1: number[], arr2: number[]): boolean {
//     const freq1 = computeFreq(arr1);
//     const freq2 = computeFreq(arr2);
//     for (const key in freq1) {
//         if (freq1[key] !== freq2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// function computeFreq(arr: number[]): Object {
//     const freq = {};
//     arr.forEach(e => {
//         freq[e] = (freq[e] || 0) + 1;
//     });
//     return freq;
// }