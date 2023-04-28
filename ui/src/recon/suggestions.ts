import { solve } from "@spencerchubb/solver";
import { Cube } from "../lib/scripts/rubiks-viz";
import { CROSS_WHITE, STICKERS } from "../lib/scripts/rubiks-viz/pieces";

const f2lFrontRight = [...CROSS_WHITE, STICKERS.UFR, STICKERS.FRU, STICKERS.RUF, STICKERS.FR, STICKERS.RF];
const f2lFrontLeft = [...CROSS_WHITE, STICKERS.ULF, STICKERS.LFU, STICKERS.FUL, STICKERS.FL, STICKERS.LF];
const f2lBackRight = [...CROSS_WHITE, STICKERS.URB, STICKERS.RBU, STICKERS.BUR, STICKERS.BR, STICKERS.RB];
const f2lBackLeft = [...CROSS_WHITE, STICKERS.UBL, STICKERS.BLU, STICKERS.LUB, STICKERS.BL, STICKERS.LB];

const SOLVER_PIECES = {
    UBL: 0,
    URB: 1,
    ULF: 2,
    UFR: 3,
    DFL: 4,
    DRF: 5,
    DBL: 6,
    DRB: 7,
    UB: 8,
    UL: 9,
    UR: 10,
    UF: 11,
    FL: 12,
    FR: 13,
    DF: 14,
    DL: 15,
    DR: 16,
    DB: 17,
    BL: 18,
    BR: 19,
};

const SOLVER_CROSS = [SOLVER_PIECES.UB, SOLVER_PIECES.UL, SOLVER_PIECES.UR, SOLVER_PIECES.UF];

export type SuggestionData = {
    name: string,
    solved: boolean,
    suggestions: string[]
};

export async function getSuggestions(cube: Cube, alg: string): Promise<SuggestionData[]> {
    if (!piecesAreSolved(cube, CROSS_WHITE)) {
        return [
            {
                name: "Cross",
                solved: false,
                suggestions: await solvePieces(alg, SOLVER_CROSS),
            },
        ];
    };

    const output: SuggestionData[] = [
        {
            name: "Cross",
            solved: true,
            suggestions: [],
        },
    ];

    const frontRightSolved = piecesAreSolved(cube, f2lFrontRight);
    const frontLeftSolved = piecesAreSolved(cube, f2lFrontLeft);
    const backRightSolved = piecesAreSolved(cube, f2lBackRight);
    const backLeftSolved = piecesAreSolved(cube, f2lBackLeft);

    const piecesToSolve = [...SOLVER_CROSS];

    if (frontRightSolved) {
        piecesToSolve.push(SOLVER_PIECES.UFR, SOLVER_PIECES.FR);
        output.push({
            name: "F2L Front Right",
            solved: true,
            suggestions: [],
        });
    }
    if (frontLeftSolved) {
        piecesToSolve.push(SOLVER_PIECES.ULF, SOLVER_PIECES.FL);
        output.push({
            name: "F2L Front Left",
            solved: true,
            suggestions: [],
        });
    }
    if (backRightSolved) {
        piecesToSolve.push(SOLVER_PIECES.URB, SOLVER_PIECES.BR);
        output.push({
            name: "F2L Back Right",
            solved: true,
            suggestions: [],
        });
    }
    if (backLeftSolved) {
        piecesToSolve.push(SOLVER_PIECES.UBL, SOLVER_PIECES.BL);
        output.push({
            name: "F2L Back Left",
            solved: true,
            suggestions: [],
        });
    }

    if (!frontRightSolved) {
        {
            output.push({
                name: "F2L Front Right",
                solved: false,
                suggestions: await solvePieces(alg, [...piecesToSolve, SOLVER_PIECES.UFR, SOLVER_PIECES.FR]),
            });
        }
    }
    if (!frontLeftSolved) {
        output.push({
            name: "F2L Front Left",
            solved: false,
            suggestions: await solvePieces(alg, [...piecesToSolve, SOLVER_PIECES.ULF, SOLVER_PIECES.FL]),
        });
    }
    if (!backRightSolved) {
        output.push({
            name: "F2L Back Right",
            solved: false,
            suggestions: await solvePieces(alg, [...piecesToSolve, SOLVER_PIECES.URB, SOLVER_PIECES.BR]),
        });
    }
    if (!backLeftSolved) {
        output.push({
            name: "F2L Back Left",
            solved: false,
            suggestions: await solvePieces(alg, [...piecesToSolve, SOLVER_PIECES.UBL, SOLVER_PIECES.BL]),
        });
    }

    return output;
}

async function solvePieces(alg: string, piecesToSolve: number[]): Promise<string[]> {
    const disregard = piecesNotIn(piecesToSolve);
    const solutions = solve({
        alg,
        moves: "U U' F F' D D' B B' L L' R R'",
        disregard,
        maxSolutions: 5,
    });
    return solutions;
}

/**
 * Returns an array of all pieces that are not in the given array.
 * 
 * Example: missingPieces([8, 9, 10, 11]) = [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 18, 19]
 */
function piecesNotIn(pieces: number[]) {
    const all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    return all.filter(i => !pieces.includes(i));
}

function piecesAreSolved(cube: Cube, pieces: number[]): boolean {
    return pieces.every(i => cube.stickerIsOnFace(i, cube.stickers[i].face));
}