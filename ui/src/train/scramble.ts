import { Puzzle } from "../lib/scripts/rubiks-viz/puzzle";
import { scramble_333 } from "../lib/scripts/cstimer/scramble_333";
import { Cube } from "../lib/scripts/rubiks-viz";
import { scramblePyra } from "../lib/scripts/cstimer/scramble_pyraminx";
import { scramble2x2 } from "../lib/scripts/cstimer/scramble_222";
import { scrambleSQ1 } from "../lib/scripts/cstimer/scramble_sq1";
import { STICKERS as S } from "../lib/scripts/rubiks-viz/pieces";
import { algToRUF } from "./algConvert";

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
const DFL = [S.DFL, S.FLD, S.LFD];
const DLB = [S.DLB, S.LBD, S.BDL];
const DRF = [S.DRF, S.RFD, S.FDR];
const DBR = [S.DRB, S.BRD, S.RBD];

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

export function scramble(puzzle: string, alg: string): string {
    if (puzzle === "2x2") {
        alg = algToRUF(alg);
        return scramble2x2(alg);
    } else if (puzzle === "Pyraminx") {
        return scramblePyra(alg);
    } else if (puzzle === "SQ1") {
        return scrambleSQ1(alg);
    }

    cube.solve();
    cube.performAlg(alg);

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
