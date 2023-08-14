const moveMap = {
    "L": {
        "U": "B",
        "F": "U",
        "D": "F",
        "B": "D",
        "L": "L",
        "R": "R",
    },
    "L'": {
        "U": "F",
        "F": "D",
        "D": "B",
        "B": "U",
        "L": "L",
        "R": "R",
    },
    "L2": {
        "U": "D",
        "F": "B",
        "D": "U",
        "B": "F",
        "L": "L",
        "R": "R",
    },
}

/** Convert a 2x2 algorithm to RUF. */
export function algToRUF(alg: string): string {
    let moves = alg.split(" ");
    const result = Array(moves.length);
    for (let i = 0; i < moves.length; i++) {
        if (moves[i][0] === "L") {
            result[i] = moves[i].replace("L", "R");

            for (let j = i+1; j < moves.length; j++) {
                const char = moves[j][0];
                moves[j] = moves[j].replace(char, moveMap[moves[i]][char]);
            }
        } else {
            result[i] = moves[i];
        }
    }

    return result.join(" ");
}