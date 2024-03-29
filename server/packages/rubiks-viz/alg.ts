/**
 * Example: R U R' U' -> U R U' R'
 */
export function invertAlg(alg: string): string {
    if (!alg) return "";
    return alg
        .split(" ")
        .map(invertMove)
        .reverse()
        .join(" ");
}

export function invertMove(move: string): string {
    if (move === "/") {
        // SQ1 slash
        return "/";
    } else if (move.includes(",")) {
        // SQ1 move
        const [top, bot] = move.split(",").map(n => parseInt(n));
        return `${-top},${-bot}`;
    } else if (move.endsWith("'")) {
        return move.slice(0, -1);
    } else if (move.endsWith("2")) {
        return move;
    }

    return move + "'";
}

/**
 * Example: R U2 R' -> R U U R'
 */
export function expandDoubleMoves(alg: string): string {
    return alg.split(" ").map(move => {
        if (move.endsWith("2")) {
            let m = move.slice(0, -1);
            return m + " " + m;
        } else if (move.endsWith("2'")) {
            let m = move.slice(0, -2) + "'";
            return m + " " + m;
        } else if (move.endsWith("3")) {
            let m = move.slice(0, -1);
            return m + " " + m + " " + m;
        } else if (move.endsWith("3'")) {
            let m = move.slice(0, -2) + "'";
            return m + " " + m + " " + m;
        }
        return move;
    }).join(" ");
}