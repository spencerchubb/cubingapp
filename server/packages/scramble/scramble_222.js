import { mathlib } from "./mathlib";

var solver = new mathlib.Solver(3, 3, [[0, [doPermMove, 'p', 7], 5040], [0, [doOriMove, 'o', 7, -3], 729]]);

var movePieces = [
    [0, 2, 3, 1],
    [0, 1, 5, 4],
    [0, 4, 6, 2]
];

var moveOris = [
    null,
    [0, 1, 0, 1, 3],
    [1, 0, 1, 0, 3]
];

function doPermMove(arr, m) {
    mathlib.acycle(arr, movePieces[m]);
}

function doOriMove(arr, m) {
    mathlib.acycle(arr, movePieces[m], 1, moveOris[m]);
}

export function scramble2x2Random() {
    var lim = 3, perm, ori;
    do {
        perm = mathlib.rn(5040);
        ori = mathlib.rn(729);
    } while (perm == 0 && ori == 0 || solver.search([perm, ori], 0, lim) != null);
    return solver.toStr(solver.search([perm, ori], lim).reverse(), "URF", "'2 ");
}


export function scramble2x2(alg) {
    const moveMap = "URF";
    const powerMap = ["'", "2", ""];
    return solver.findScrambleForAlg(alg, moveMap, powerMap);
}
