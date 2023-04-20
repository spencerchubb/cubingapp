/**
 * Example: R U R' U' -> U R U' R'
 */
export function invertAlg(alg: string): string {
    let moves = alg.split(" ");
    moves = moves.map((move) => {
        if (move.endsWith("'")) {
            return move.slice(0, -1);
        }
        if (move.endsWith("2")) {
            return move;
        }
        return move + "'";
    });
    return moves.reverse().join(" ");
}

/**
 * Example: R U2 R' -> R U U R'
 */
export function expandDoubleMoves(alg: string): string {
    return alg.split(" ").map(move => {
        return move.endsWith("2")
            ? move.slice(0, -1) + " " + move.slice(0, -1)
            : move;
    }).join(" ");
}