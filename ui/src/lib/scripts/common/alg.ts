export type AlgMove = { face: string, pow: number };
export type Alg = AlgMove[];

export function AlgNew(alg?: string): Alg {
    if (alg) return StringToAlg(alg);
    return [] as Alg;
}

function StringToMove(str: string): AlgMove {
    let face: string = "";
    let pow: number = 1;

    for (let i = 0; i < str.length; i++) {
        let c = str[i];

        if (!face) {
            // If we're still looking for the face, we add the character
            // no matter what.
            face += c;
            continue;
        }

        if (c === "2") {
            pow = 2;
            break;
        }

        if (c === "'") {
            pow = 3;
            break;
        }

        face += c;
    }

    return { face, pow };
}

export function StringToAlg(str: string): Alg {
    if (!str) return AlgNew();
    return str.split(" ").map(StringToMove);
}

export function AlgToString(alg: Alg): string {
    return alg
        .map(move => {
            if (move.pow === 1) return move.face;
            if (move.pow === 2) return move.face + "2";
            return move.face + "'";
        })
        .join(" ");
}

/**
 * Mutates `alg` and returns `alg`.
 */
export function AlgAddMove(alg: Alg, moveStr: string): Alg {
    alg.push(StringToMove(moveStr));
    return alg;
}

/**
 * Mutates `alg` and returns `alg`.
 */
export function AlgInvert(alg: Alg): Alg {
    return alg
        .reverse()
        .map(move => {
            const pow = (4 - move.pow) % 4;
            return { face: move.face, pow };
        });
}

/**
 * Mutates `alg` and returns `alg`.
 */
export function AlgSimplify(alg: Alg, modulo: number = 4): Alg {
    for (let i = 0; i < alg.length - 1; i++) {
        const move = alg[i];
        const nextMove = alg[i + 1];
        if (move.face === nextMove.face) {
            const pow = (move.pow + nextMove.pow) % modulo;
            if (pow === 0) {
                alg.splice(i, 2);
                i -= 2;
                i = Math.max(i, -1); // -1 because i++ called at end of loop
            } else {
                move.pow = pow;
                alg.splice(i + 1, 1);
                i--;
            }
        }
    }

    return alg;
}