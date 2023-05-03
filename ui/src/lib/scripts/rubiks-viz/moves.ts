import { Cube } from "./cube";

export function performMove(cube: Cube, move: string, forward: boolean) {
    if (!move) {
        return;
    }

    const moveMap = getMoveMap(cube);
    if (move in moveMap) {
        moveMap[move](forward);
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

function getMoveMap(cube: Cube) {
    return {
        "x": (forward: boolean) => cube.cubeRotate(0, forward),
        "x'": (forward: boolean) => cube.cubeRotate(0, !forward),
        "x2": (forward: boolean) => {
            cube.cubeRotate(0, forward);
            cube.cubeRotate(0, forward);
        },
        "x2'": (forward: boolean) => {
            cube.cubeRotate(0, forward);
            cube.cubeRotate(0, forward);
        },
        "y": (forward: boolean) => cube.cubeRotate(1, forward),
        "y'": (forward: boolean) => cube.cubeRotate(1, !forward),
        "y2": (forward: boolean) => {
            cube.cubeRotate(1, forward);
            cube.cubeRotate(1, forward);
        },
        "y2'": (forward: boolean) => {
            cube.cubeRotate(1, forward);
            cube.cubeRotate(1, forward);
        },
        "z": (forward: boolean) => cube.cubeRotate(2, forward),
        "z'": (forward: boolean) => cube.cubeRotate(2, !forward),
        "z2": (forward: boolean) => {
            cube.cubeRotate(2, forward);
            cube.cubeRotate(2, forward);
        },
        "z2'": (forward: boolean) => {
            cube.cubeRotate(2, forward);
            cube.cubeRotate(2, forward);
        },
        "U": (forward: boolean) => cube.turn(1, 0, forward),
        "U'": (forward: boolean) => cube.turn(1, 0, !forward),
        "U2": (forward: boolean) => {
            cube.turn(1, 0, forward);
            cube.turn(1, 0, forward);
        },
        "U2'": (forward: boolean) => {
            cube.turn(1, 0, forward);
            cube.turn(1, 0, forward);
        },
        "u": (forward: boolean) => {
            cube.wideTurn(1, 0, 1, forward);
        },
        "Uw": (forward: boolean) => {
            cube.wideTurn(1, 0, 1, forward);
        },
        "u'": (forward: boolean) => {
            cube.wideTurn(1, 0, 1, !forward);
        },
        "Uw'": (forward: boolean) => {
            cube.wideTurn(1, 0, 1, !forward);
        },
        "u2": (forward: boolean) => {
            cube.wideTurn(1, 0, 1, forward);
            cube.wideTurn(1, 0, 1, forward);
        },
        "u2'": (forward: boolean) => {
            cube.wideTurn(1, 0, 1, !forward);
            cube.wideTurn(1, 0, 1, !forward);
        },
        "Uw2": (forward: boolean) => {
            cube.wideTurn(1, 0, 1, forward);
            cube.wideTurn(1, 0, 1, forward);
        },
        "Uw2'": (forward: boolean) => {
            cube.wideTurn(1, 0, 1, !forward);
            cube.wideTurn(1, 0, 1, !forward);
        },
        "D": (forward: boolean) => cube.turn(1, cube.layers - 1, !forward),
        "D'": (forward: boolean) => cube.turn(1, cube.layers - 1, forward),
        "D2": (forward: boolean) => {
            cube.turn(1, cube.layers - 1, !forward);
            cube.turn(1, cube.layers - 1, !forward);
        },
        "D2'": (forward: boolean) => {
            cube.turn(1, cube.layers - 1, forward);
            cube.turn(1, cube.layers - 1, forward);
        },
        "d": (forward: boolean) => {
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, !forward);
        },
        "Dw": (forward: boolean) => {
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, !forward);
        },
        "d'": (forward: boolean) => {
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, forward);
        },
        "Dw'": (forward: boolean) => {
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, forward);
        },
        "d2": (forward: boolean) => {
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, !forward);
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, !forward);
        },
        "Dw2": (forward: boolean) => {
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, !forward);
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, !forward);
        },
        "d2'": (forward: boolean) => {
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, forward);
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, forward);
        },
        "Dw2'": (forward: boolean) => {
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, forward);
            cube.wideTurn(1, cube.layers - 1, cube.layers - 2, forward);
        },
        "F": (forward: boolean) => cube.turn(2, 0, forward),
        "F'": (forward: boolean) => cube.turn(2, 0, !forward),
        "F2": (forward: boolean) => {
            cube.turn(2, 0, forward);
            cube.turn(2, 0, forward);
        },
        "F2'": (forward: boolean) => {
            cube.turn(2, 0, !forward);
            cube.turn(2, 0, !forward);
        },
        "f": (forward: boolean) => {
            cube.wideTurn(2, 0, 1, forward);
        },
        "Fw": (forward: boolean) => {
            cube.wideTurn(2, 0, 1, forward);
        },
        "f'": (forward: boolean) => {
            cube.wideTurn(2, 0, 1, !forward);
        },
        "Fw'": (forward: boolean) => {
            cube.wideTurn(2, 0, 1, !forward);
        },
        "f2": (forward: boolean) => {
            cube.wideTurn(2, 0, 1, forward);
            cube.wideTurn(2, 0, 1, forward);
        },
        "Fw2": (forward: boolean) => {
            cube.wideTurn(2, 0, 1, forward);
            cube.wideTurn(2, 0, 1, forward);
        },
        "f2'": (forward: boolean) => {
            cube.wideTurn(2, 0, 1, !forward);
            cube.wideTurn(2, 0, 1, !forward);
        },
        "Fw2'": (forward: boolean) => {
            cube.wideTurn(2, 0, 1, !forward);
            cube.wideTurn(2, 0, 1, !forward);
        },
        "B": (forward: boolean) => cube.turn(2, cube.layers - 1, !forward),
        "B'": (forward: boolean) => cube.turn(2, cube.layers - 1, forward),
        "B2": (forward: boolean) => {
            cube.turn(2, cube.layers - 1, !forward);
            cube.turn(2, cube.layers - 1, !forward);
        },
        "B2'": (forward: boolean) => {
            cube.turn(2, cube.layers - 1, forward);
            cube.turn(2, cube.layers - 1, forward);
        },
        "b": (forward: boolean) => {
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, !forward);
        },
        "Bw": (forward: boolean) => {
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, !forward);
        },
        "b'": (forward: boolean) => {
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, forward);
        },
        "Bw'": (forward: boolean) => {
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, forward);
        },
        "b2": (forward: boolean) => {
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, !forward);
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, !forward);
        },
        "Bw2": (forward: boolean) => {
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, !forward);
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, !forward);
        },
        "b2'": (forward: boolean) => {
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, forward);
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, forward);
        },
        "Bw2'": (forward: boolean) => {
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, forward);
            cube.wideTurn(2, cube.layers - 1, cube.layers - 2, forward);
        },
        "L": (forward: boolean) => cube.turn(0, cube.layers - 1, !forward),
        "L'": (forward: boolean) => cube.turn(0, cube.layers - 1, forward),
        "L2": (forward: boolean) => {
            cube.turn(0, cube.layers - 1, !forward);
            cube.turn(0, cube.layers - 1, !forward);
        },
        "L2'": (forward: boolean) => {
            cube.turn(0, cube.layers - 1, forward);
            cube.turn(0, cube.layers - 1, forward);
        },
        "l": (forward: boolean) => {
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, !forward);
        },
        "Lw": (forward: boolean) => {
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, !forward);
        },
        "l'": (forward: boolean) => {
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, forward);
        },
        "Lw'": (forward: boolean) => {
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, forward);
        },
        "l2": (forward: boolean) => {
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, !forward);
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, !forward);
        },
        "Lw2": (forward: boolean) => {
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, !forward);
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, !forward);
        },
        "l2'": (forward: boolean) => {
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, forward);
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, forward);
        },
        "Lw2'": (forward: boolean) => {
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, forward);
            cube.wideTurn(0, cube.layers - 1, cube.layers - 2, forward);
        },
        "R": (forward: boolean) => cube.turn(0, 0, forward),
        "R'": (forward: boolean) => cube.turn(0, 0, !forward),
        "R2": (forward: boolean) => {
            cube.turn(0, 0, forward);
            cube.turn(0, 0, forward);
        },
        "R2'": (forward: boolean) => {
            cube.turn(0, 0, !forward);
            cube.turn(0, 0, !forward);
        },
        "r": (forward: boolean) => {
            cube.wideTurn(0, 0, 1, forward);
        },
        "Rw": (forward: boolean) => {
            cube.wideTurn(0, 0, 1, forward);
        },
        "r'": (forward: boolean) => {
            cube.wideTurn(0, 0, 1, !forward);
        },
        "Rw'": (forward: boolean) => {
            cube.wideTurn(0, 0, 1, !forward);
        },
        "r2": (forward: boolean) => {
            cube.wideTurn(0, 0, 1, forward);
            cube.wideTurn(0, 0, 1, forward);
        },
        "Rw2": (forward: boolean) => {
            cube.wideTurn(0, 0, 1, forward);
            cube.wideTurn(0, 0, 1, forward);
        },
        "r2'": (forward: boolean) => {
            cube.wideTurn(0, 0, 1, !forward);
            cube.wideTurn(0, 0, 1, !forward);
        },
        "Rw2'": (forward: boolean) => {
            cube.wideTurn(0, 0, 1, !forward);
            cube.wideTurn(0, 0, 1, !forward);
        },
        "M": (forward: boolean) => cube.sliceTurn(0, !forward),
        "M'": (forward: boolean) => cube.sliceTurn(0, forward),
        "M2": (forward: boolean) => {
            cube.sliceTurn(0, !forward);
            cube.sliceTurn(0, !forward);
        },
        "M2'": (forward: boolean) => {
            cube.sliceTurn(0, forward);
            cube.sliceTurn(0, forward);
        },
        "E": (forward: boolean) => cube.sliceTurn(1, !forward),
        "E'": (forward: boolean) => cube.sliceTurn(1, forward),
        "E2": (forward: boolean) => {
            cube.sliceTurn(1, !forward);
            cube.sliceTurn(1, !forward);
        },
        "E2'": (forward: boolean) => {
            cube.sliceTurn(1, forward);
            cube.sliceTurn(1, forward);
        },
        "S": (forward: boolean) => cube.sliceTurn(2, forward),
        "S'": (forward: boolean) => cube.sliceTurn(2, !forward),
        "S2": (forward: boolean) => {
            cube.sliceTurn(2, forward);
            cube.sliceTurn(2, forward);
        },
        "S2'": (forward: boolean) => {
            cube.sliceTurn(2, forward);
            cube.sliceTurn(2, forward);
        },
        "2L": (forward: boolean) => cube.turn(0, 1, forward),
        "2L'": (forward: boolean) => cube.turn(0, 1, !forward),
        "2L2": (forward: boolean) => {
            cube.turn(0, cube.layers - 2, forward);
            cube.turn(0, cube.layers - 2, forward);
        },
        "2L2'": (forward: boolean) => {
            cube.turn(0, cube.layers - 2, forward);
            cube.turn(0, cube.layers - 2, forward);
        },
        "2R": (forward: boolean) => cube.turn(0, 1, !forward),
        "2R'": (forward: boolean) => cube.turn(0, 1, forward),
        "2R2": (forward: boolean) => {
            cube.turn(0, 1, forward);
            cube.turn(0, 1, forward);
        },
        "2R2'": (forward: boolean) => {
            cube.turn(0, 1, forward);
            cube.turn(0, 1, forward);
        },
        "3Lw": (forward: boolean) => {
            cube.turn(0, cube.layers - 1, !forward);
            cube.turn(0, cube.layers - 2, !forward);
            cube.turn(0, cube.layers - 3, !forward);
        },
        "3Lw'": (forward: boolean) => {
            cube.turn(0, cube.layers - 1, forward);
            cube.turn(0, cube.layers - 2, forward);
            cube.turn(0, cube.layers - 3, forward);
        },
        "3Lw2": (forward: boolean) => {
            cube.turn(0, cube.layers - 1, !forward);
            cube.turn(0, cube.layers - 2, !forward);
            cube.turn(0, cube.layers - 3, !forward);
            cube.turn(0, cube.layers - 1, !forward);
            cube.turn(0, cube.layers - 2, !forward);
            cube.turn(0, cube.layers - 3, !forward);
        },
        "3Lw2'": (forward: boolean) => {
            cube.turn(0, cube.layers - 1, forward);
            cube.turn(0, cube.layers - 2, forward);
            cube.turn(0, cube.layers - 3, forward);
            cube.turn(0, cube.layers - 1, forward);
            cube.turn(0, cube.layers - 2, forward);
            cube.turn(0, cube.layers - 3, forward);
        },
        "3Rw": (forward: boolean) => {
            cube.turn(0, 0, forward);
            cube.turn(0, 1, forward);
            cube.turn(0, 2, forward);
        },
        "3Rw'": (forward: boolean) => {
            cube.turn(0, 0, !forward);
            cube.turn(0, 1, !forward);
            cube.turn(0, 2, !forward);
        },
        "3Rw2": (forward: boolean) => {
            cube.turn(0, 0, forward);
            cube.turn(0, 1, forward);
            cube.turn(0, 2, forward);
            cube.turn(0, 0, forward);
            cube.turn(0, 1, forward);
            cube.turn(0, 2, forward);
        },
        "3Rw2'": (forward: boolean) => {
            cube.turn(0, 0, !forward);
            cube.turn(0, 1, !forward);
            cube.turn(0, 2, !forward);
            cube.turn(0, 0, !forward);
            cube.turn(0, 1, !forward);
            cube.turn(0, 2, !forward);
        },
    };
}