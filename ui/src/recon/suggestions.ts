import { solve } from "@spencerchubb/solver";

export async function searchForSuggestions(alg: string): Promise<string[]> {
    return solveCross(alg);
}

function solveCross(alg: string): Promise<string[]> {
    // For white cross, we only consider pieces 8, 9, 10, and 11.
    const disregard = piecesNotIn([8, 9, 10, 11]);

    return solve({
        alg,
        moves: "U U' F F' D D' B B' L L' R R'",
        disregard,
        maxSolutions: 5,
    });
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