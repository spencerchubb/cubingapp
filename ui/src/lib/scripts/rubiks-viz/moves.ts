import { Cube } from "./cube";

export function performMove(cube: Cube, move: string, forward: boolean) {
    if (!move) {
        return;
    }

    const moveMap = getMoveMap(cube);
    const func = moveMap[move];
    if (func) {
        func(forward);
    } else {
        console.log("Invalid move: " + move);
    }
}

/** 
 * This function can be used to validate moves.
 * Returns the first invalid move if one exists, otherwise returns null.
 */
export function findInvalidMove(cube: Cube, moves: string[]): string | null {
    const moveMap = getMoveMap(cube);
    for (let move of moves) {
        if (!(move in moveMap)) {
            return move;
        }
    }
    return null;
}

const x = (c: Cube) => (forward: boolean) => c.cubeRotate(0, forward);
const xPrime = (c: Cube) => (forward: boolean) => c.cubeRotate(0, !forward);
const x2 = (c: Cube) => (forward: boolean) => {
    c.cubeRotate(0, forward);
    c.cubeRotate(0, forward);
};

const y = (c: Cube) => (forward: boolean) => c.cubeRotate(1, forward);
const yPrime = (c: Cube) => (forward: boolean) => c.cubeRotate(1, !forward);
const y2 = (c: Cube) => (forward: boolean) => {
    c.cubeRotate(1, forward);
    c.cubeRotate(1, forward);
};

const z = (c: Cube) => (forward: boolean) => c.cubeRotate(2, forward);
const zPrime = (c: Cube) => (forward: boolean) => c.cubeRotate(2, !forward);
const z2 = (c: Cube) => (forward: boolean) => {
    c.cubeRotate(2, forward);
    c.cubeRotate(2, forward);
};

const U = (c: Cube) => (forward: boolean) => c.turn(1, 0, forward);
const UPrime = (c: Cube) => (forward: boolean) => c.turn(1, 0, !forward);
const U2 = (c: Cube) => (forward: boolean) => {
    c.turn(1, 0, forward);
    c.turn(1, 0, forward);
};

const u = (c: Cube) => (forward: boolean) => c.wideTurn(1, 0, 1, forward);
const uPrime = (c: Cube) => (forward: boolean) => c.wideTurn(1, 0, 1, !forward);
const u2 = (c: Cube) => (forward: boolean) => {
    c.wideTurn(1, 0, 1, forward);
    c.wideTurn(1, 0, 1, forward);
};

const D = (c: Cube) => (forward: boolean) => c.turn(1, c.layers - 1, !forward);
const DPrime = (c: Cube) => (forward: boolean) => c.turn(1, c.layers - 1, forward);
const D2 = (c: Cube) => (forward: boolean) => {
    c.turn(1, c.layers - 1, !forward);
    c.turn(1, c.layers - 1, !forward);
};

const d = (c: Cube) => (forward: boolean) => c.wideTurn(1, c.layers - 1, c.layers - 2, !forward);
const dPrime = (c: Cube) => (forward: boolean) => c.wideTurn(1, c.layers - 1, c.layers - 2, forward);
const d2 = (c: Cube) => (forward: boolean) => {
    c.wideTurn(1, c.layers - 1, c.layers - 2, !forward);
    c.wideTurn(1, c.layers - 1, c.layers - 2, !forward);
};

const F = (c: Cube) => (forward: boolean) => c.turn(2, 0, forward);
const FPrime = (c: Cube) => (forward: boolean) => c.turn(2, 0, !forward);
const F2 = (c: Cube) => (forward: boolean) => {
    c.turn(2, 0, forward);
    c.turn(2, 0, forward);
};

const f = (c: Cube) => (forward: boolean) => c.wideTurn(2, 0, 1, forward);
const fPrime = (c: Cube) => (forward: boolean) => c.wideTurn(2, 0, 1, !forward);
const f2 = (c: Cube) => (forward: boolean) => {
    c.wideTurn(2, 0, 1, forward);
    c.wideTurn(2, 0, 1, forward);
};

const B = (c: Cube) => (forward: boolean) => c.turn(2, c.layers - 1, !forward);
const BPrime = (c: Cube) => (forward: boolean) => c.turn(2, c.layers - 1, forward);
const B2 = (c: Cube) => (forward: boolean) => {
    c.turn(2, c.layers - 1, !forward);
    c.turn(2, c.layers - 1, !forward);
};

const b = (c: Cube) => (forward: boolean) => c.wideTurn(2, c.layers - 1, c.layers - 2, !forward);
const bPrime = (c: Cube) => (forward: boolean) => c.wideTurn(2, c.layers - 1, c.layers - 2, forward);
const b2 = (c: Cube) => (forward: boolean) => {
    c.wideTurn(2, c.layers - 1, c.layers - 2, !forward);
    c.wideTurn(2, c.layers - 1, c.layers - 2, !forward);
};

const L = (c: Cube) => (forward: boolean) => c.turn(0, c.layers - 1, !forward);
const LPrime = (c: Cube) => (forward: boolean) => c.turn(0, c.layers - 1, forward);
const L2 = (c: Cube) => (forward: boolean) => {
    c.turn(0, c.layers - 1, !forward);
    c.turn(0, c.layers - 1, !forward);
};

const l = (c: Cube) => (forward: boolean) => c.wideTurn(0, c.layers - 1, c.layers - 2, !forward);
const lPrime = (c: Cube) => (forward: boolean) => c.wideTurn(0, c.layers - 1, c.layers - 2, forward);
const l2 = (c: Cube) => (forward: boolean) => {
    c.wideTurn(0, c.layers - 1, c.layers - 2, !forward);
    c.wideTurn(0, c.layers - 1, c.layers - 2, !forward);
};

const R = (c: Cube) => (forward: boolean) => c.turn(0, 0, forward);
const RPrime = (c: Cube) => (forward: boolean) => c.turn(0, 0, !forward);
const R2 = (c: Cube) => (forward: boolean) => {
    c.turn(0, 0, forward);
    c.turn(0, 0, forward);
};

const r = (c: Cube) => (forward: boolean) => c.wideTurn(0, 0, 1, forward);
const rPrime = (c: Cube) => (forward: boolean) => c.wideTurn(0, 0, 1, !forward);
const r2 = (c: Cube) => (forward: boolean) => {
    c.wideTurn(0, 0, 1, forward);
    c.wideTurn(0, 0, 1, forward);
};

const M = (c: Cube) => (forward: boolean) => c.sliceTurn(0, !forward);
const MPrime = (c: Cube) => (forward: boolean) => c.sliceTurn(0, forward);
const M2 = (c: Cube) => (forward: boolean) => {
    c.sliceTurn(0, !forward);
    c.sliceTurn(0, !forward);
};

const E = (c: Cube) => (forward: boolean) => c.sliceTurn(1, !forward);
const EPrime = (c: Cube) => (forward: boolean) => c.sliceTurn(1, forward);
const E2 = (c: Cube) => (forward: boolean) => {
    c.sliceTurn(1, !forward);
    c.sliceTurn(1, !forward);
};

const S = (c: Cube) => (forward: boolean) => c.sliceTurn(2, forward);
const SPrime = (c: Cube) => (forward: boolean) => c.sliceTurn(2, !forward);
const S2 = (c: Cube) => (forward: boolean) => {
    c.sliceTurn(2, forward);
    c.sliceTurn(2, forward);
};

function getMoveMap(c: Cube) {
    return {
        "x": x(c),
        "x'": xPrime(c),
        "x2": x2(c),
        "x2'": x2(c),
        "x3": xPrime(c),
        "x3'": x(c),
        "y": y(c),
        "y'": yPrime(c),
        "y2": y2(c),
        "y2'": y2(c),
        "y3": yPrime(c),
        "y3'": y(c),
        "z": z(c),
        "z'": zPrime(c),
        "z2": z2(c),
        "z2'": z2(c),
        "z3": zPrime(c),
        "z3'": z(c),
        "U": U(c),
        "U'": UPrime(c),
        "U2": U2(c),
        "U2'": U2(c),
        "u": u(c),
        "Uw": u(c),
        "u'": uPrime(c),
        "Uw'": uPrime(c),
        "u2": u2(c),
        "Uw2": u2(c),
        "u2'": u2(c),
        "Uw2'": u2(c),
        "D": D(c),
        "D'": DPrime(c),
        "D2": D2(c),
        "D2'": D2(c),
        "d": d(c),
        "Dw": d(c),
        "d'": dPrime(c),
        "Dw'": dPrime(c),
        "d2": d2(c),
        "Dw2": d2(c),
        "d2'": d2(c),
        "Dw2'": d2(c),
        "F": F(c),
        "F'": FPrime(c),
        "F2": F2(c),
        "F2'": F2(c),
        "f": f(c),
        "Fw": f(c),
        "f'": fPrime(c),
        "Fw'": fPrime(c),
        "f2": f2(c),
        "Fw2": f2(c),
        "f2'": f2(c),
        "Fw2'": f2(c),
        "B": B(c),
        "B'": BPrime(c),
        "B2": B2(c),
        "B2'": B2(c),
        "b": b(c),
        "Bw": b(c),
        "b'": bPrime(c),
        "Bw'": bPrime(c),
        "b2": b2(c),
        "Bw2": b2(c),
        "b2'": b2(c),
        "Bw2'": b2(c),
        "L": L(c),
        "L'": LPrime(c),
        "L2": L2(c),
        "L2'": L2(c),
        "L3": LPrime(c),
        "L3'": L(c),
        "l": l(c),
        "Lw": l(c),
        "l'": lPrime(c),
        "Lw'": lPrime(c),
        "l2": l2(c),
        "Lw2": l2(c),
        "l2'": l2(c),
        "Lw2'": l2(c),
        "R": R(c),
        "R'": RPrime(c),
        "R2": R2(c),
        "R2'": R2(c),
        "R3": RPrime(c),
        "R3'": R(c),
        "r": r(c),
        "Rw": r(c),
        "r'": rPrime(c),
        "Rw'": rPrime(c),
        "r2": r2(c),
        "Rw2": r2(c),
        "r2'": r2(c),
        "Rw2'": r2(c),
        "M": M(c),
        "M'": MPrime(c),
        "M2": M2(c),
        "M2'": M2(c),
        "E": E(c),
        "E'": EPrime(c),
        "E2": E2(c),
        "E2'": E2(c),
        "S": S(c),
        "S'": SPrime(c),
        "S2": S2(c),
        "S2'": S2(c),
        "2L": (forward: boolean) => c.turn(0, 1, forward),
        "2L'": (forward: boolean) => c.turn(0, 1, !forward),
        "2L2": (forward: boolean) => {
            c.turn(0, c.layers - 2, forward);
            c.turn(0, c.layers - 2, forward);
        },
        "2L2'": (forward: boolean) => {
            c.turn(0, c.layers - 2, forward);
            c.turn(0, c.layers - 2, forward);
        },
        "2R": (forward: boolean) => c.turn(0, 1, !forward),
        "2R'": (forward: boolean) => c.turn(0, 1, forward),
        "2R2": (forward: boolean) => {
            c.turn(0, 1, forward);
            c.turn(0, 1, forward);
        },
        "2R2'": (forward: boolean) => {
            c.turn(0, 1, forward);
            c.turn(0, 1, forward);
        },
        "3Lw": (forward: boolean) => {
            c.turn(0, c.layers - 1, !forward);
            c.turn(0, c.layers - 2, !forward);
            c.turn(0, c.layers - 3, !forward);
        },
        "3Lw'": (forward: boolean) => {
            c.turn(0, c.layers - 1, forward);
            c.turn(0, c.layers - 2, forward);
            c.turn(0, c.layers - 3, forward);
        },
        "3Lw2": (forward: boolean) => {
            c.turn(0, c.layers - 1, !forward);
            c.turn(0, c.layers - 2, !forward);
            c.turn(0, c.layers - 3, !forward);
            c.turn(0, c.layers - 1, !forward);
            c.turn(0, c.layers - 2, !forward);
            c.turn(0, c.layers - 3, !forward);
        },
        "3Lw2'": (forward: boolean) => {
            c.turn(0, c.layers - 1, forward);
            c.turn(0, c.layers - 2, forward);
            c.turn(0, c.layers - 3, forward);
            c.turn(0, c.layers - 1, forward);
            c.turn(0, c.layers - 2, forward);
            c.turn(0, c.layers - 3, forward);
        },
        "3Rw": (forward: boolean) => {
            c.turn(0, 0, forward);
            c.turn(0, 1, forward);
            c.turn(0, 2, forward);
        },
        "3Rw'": (forward: boolean) => {
            c.turn(0, 0, !forward);
            c.turn(0, 1, !forward);
            c.turn(0, 2, !forward);
        },
        "3Rw2": (forward: boolean) => {
            c.turn(0, 0, forward);
            c.turn(0, 1, forward);
            c.turn(0, 2, forward);
            c.turn(0, 0, forward);
            c.turn(0, 1, forward);
            c.turn(0, 2, forward);
        },
        "3Rw2'": (forward: boolean) => {
            c.turn(0, 0, !forward);
            c.turn(0, 1, !forward);
            c.turn(0, 2, !forward);
            c.turn(0, 0, !forward);
            c.turn(0, 1, !forward);
            c.turn(0, 2, !forward);
        },
    };
}