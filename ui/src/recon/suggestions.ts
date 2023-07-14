import { solve } from "@spencerchubb/solver";
import { Cube, invertMove } from "../lib/scripts/rubiks-viz";
import { CROSS_WHITE, STICKERS } from "../lib/scripts/rubiks-viz/pieces";

// Keep a separate cube so we don't mess up the UI.
const cube = new Cube(3);

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

export type Unsolved = {
    name: string,
    suggestions: string[]
};

export type SuggestionData = {
    solved: string[],
    unsolved: Unsolved[],
};

export async function getSuggestions(alg: string): Promise<SuggestionData> {
    alg = stripSlices(alg);
    let stripped = stripRotations(alg);
    alg = stripped.alg;
    let rotations = stripped.rotations;

    const output = await getSuggestionsNoRotate(cube, alg);

    output.unsolved.forEach(unsolved => {
        unsolved.suggestions = unsolved.suggestions.map(suggestion => {
            return rotateAlg(suggestion, rotations);
        });
    });
    return output;
}

export async function getSuggestionsNoRotate(cube: Cube, alg: string): Promise<SuggestionData> {
    cube.solve();
    cube.performAlg(alg);

    if (!stickersCorrect(cube, CROSS_WHITE)) {
        return {
            solved: [],
            unsolved: [
                {
                    name: "Cross",
                    suggestions: await solvePieces(alg, SOLVER_CROSS),
                },
            ],
        };
    };

    const output: SuggestionData = {
        solved: ["Cross"],
        unsolved: [],
    }

    const frontRightSolved = stickersCorrect(cube, f2lFrontRight);
    const frontLeftSolved = stickersCorrect(cube, f2lFrontLeft);
    const backRightSolved = stickersCorrect(cube, f2lBackRight);
    const backLeftSolved = stickersCorrect(cube, f2lBackLeft);

    const piecesToSolve = [...SOLVER_CROSS];

    if (frontRightSolved) {
        piecesToSolve.push(SOLVER_PIECES.UFR, SOLVER_PIECES.FR);
        output.solved.push("F2L Green-Red");
    }
    if (frontLeftSolved) {
        piecesToSolve.push(SOLVER_PIECES.ULF, SOLVER_PIECES.FL);
        output.solved.push("F2L Orange-Green");
    }
    if (backRightSolved) {
        piecesToSolve.push(SOLVER_PIECES.URB, SOLVER_PIECES.BR);
        output.solved.push("F2L Red-Blue");
    }
    if (backLeftSolved) {
        piecesToSolve.push(SOLVER_PIECES.UBL, SOLVER_PIECES.BL);
        output.solved.push("F2L Blue-Orange");
    }

    if (!frontRightSolved) {
        output.unsolved.push({
            name: "F2L Green-Red",
            suggestions: await solvePieces(alg, [...piecesToSolve, SOLVER_PIECES.UFR, SOLVER_PIECES.FR]),
        });
    }
    if (!frontLeftSolved) {
        output.unsolved.push({
            name: "F2L Orange-Green",
            suggestions: await solvePieces(alg, [...piecesToSolve, SOLVER_PIECES.ULF, SOLVER_PIECES.FL]),
        });
    }
    if (!backRightSolved) {
        output.unsolved.push({
            name: "F2L Red-Blue",
            suggestions: await solvePieces(alg, [...piecesToSolve, SOLVER_PIECES.URB, SOLVER_PIECES.BR]),
        });
    }
    if (!backLeftSolved) {
        output.unsolved.push({
            name: "F2L Blue-Orange",
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

function stickersCorrect(cube: Cube, stickers: number[]): boolean {
    return stickers.every(i => {
        const lower = Math.floor(i / 9) * 9;
        const upper = lower + 9;
        const sticker = cube.stickers[i];
        return lower <= sticker && sticker < upper;
    });
}

/** Replace slice moves with equivalent rotationa and face turns. */
function stripSlices(alg: string): string {
    return alg
        .split(" ")
        .map(move => {
            let replacement = sliceMap[move];
            return replacement ? replacement : move;
        })
        .join(" ");
}

/**
 * Example: stripRotations("x U y R U' R'") -> { alg: "F U F' U'", rotations: "x y" }
 */
function stripRotations(alg: string): { alg: string, rotations: string[] } {
    const moves: string[] = [];
    const rotations: string[] = [];
    alg.split(" ").forEach(move => {
        if (move === "x" || move === "y" || move === "z" || move === "x'" || move === "y'" || move === "z'") {
            rotations.push(move);
        } else if (move === "x2" || move === "y2" || move === "z2") {
            rotations.push(move[0]);
            rotations.push(move[0]);
        } else {
            move = rotateMove(move, rotations);
            moves.push(move);
        }
    });
    return {
        alg: moves.join(" "),
        rotations: rotations,
    };
}

function rotateAlg(alg: string, rotations: string[]): string {
    return alg
        .split(" ")
        .map(move => rotateMove(move, rotations.map(invertMove).reverse()))
        .join(" ");
}

/**
 * Example: rotateMove("R", ["y", "z"]) -> "U" because R is the white face after performing y z.
 */
function rotateMove(move: string, rotations: string[]): string {
    const faces = {
        "U": "U",
        "F": "F",
        "D": "D",
        "B": "B",
        "L": "L",
        "R": "R",
    };
    const cycle = (a, b, c, d) => {
        const temp = faces[a];
        faces[a] = faces[b];
        faces[b] = faces[c];
        faces[c] = faces[d];
        faces[d] = temp;
    }
    rotations.forEach(rot => {
        switch (rot) {
            case "x":
                cycle("U", "F", "D", "B");
                break;
            case "x'":
                cycle("U", "B", "D", "F");
                break;
            case "y":
                cycle("B", "L", "F", "R");
                break;
            case "y'":
                cycle("B", "R", "F", "L");
                break;
            case "z":
                cycle("U", "L", "D", "R");
                break;
            case "z'":
                cycle("U", "R", "D", "L");
                break;
        }
    });
    return faces[move[0]] + move.substring(1);
}

const sliceMap = {
    "M": "x' R L'",
    "M'": "x R' L",
    "M2": "x2 R2 L2",
    "E": "y' U D'",
    "E'": "y U' D",
    "E2": "y2 U2 D2",
    "S": "z F' B",
    "S'": "z' F B'",
    "S2": "z2 F2 B2",
    "u": "y D",
    "Uw": "y D",
    "u'": "y' D'",
    "Uw'": "y' D'",
    "u2": "y2 D2",
    "Uw2": "y2 D2",
    "d": "y' U",
    "Dw": "y' U",
    "d'": "y U'",
    "Dw'": "y U'",
    "d2": "y2 U2",
    "Dw2": "y2 U2",
    "f": "z B",
    "Fw": "z B",
    "f'": "z' B'",
    "Fw'": "z' B'",
    "f2": "z2 B2",
    "Fw2": "z2 B2",
    "b": "z' F",
    "Bw": "z' F",
    "b'": "z F'",
    "Bw'": "z F'",
    "b2": "z2 F2",
    "Bw2": "z2 F2",
    "l": "x' R",
    "Lw": "x' R",
    "l'": "x R'",
    "Lw'": "x R'",
    "l2": "x2 R2",
    "Lw2": "x2 R2",
    "r": "x L",
    "Rw": "x L",
    "r'": "x' L'",
    "Rw'": "x' L'",
    "r2": "x2 L2",
    "Rw2": "x2 L2",
};