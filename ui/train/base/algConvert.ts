const rotMap = {
    "y": {
        "U": "U",
        "D": "D",
        "F": "R",
        "B": "L",
        "L": "F",
        "R": "B",
    },
    "y2": {
        "U": "U",
        "D": "D",
        "F": "B",
        "B": "F",
        "L": "R",
        "R": "L",
    },
    "y'": {
        "U": "U",
        "D": "D",
        "F": "L",
        "B": "R",
        "L": "B",
        "R": "F",
    },
};
export function removeRotations(alg: string): string {
    let moves = alg.split(" ");
    const result: string[] = [];

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] in rotMap) {
            for (let j = i+1; j < moves.length; j++) {
                const char = moves[j][0];
                if (rotMap[moves[i]][char]) {
                    moves[j] = moves[j].replace(char, rotMap[moves[i]][char]);
                }
            }
        } else {
            result.push(moves[i]);
        }
    }

    return result.join(" ");
}