import { mathlib } from "./mathlib";

let solv = new mathlib.Solver(4, 2, [
    [0, [epermMove, 'p', 6, -1], 360],
    [0, oriMove, 2592]
]);

let movePieces = [
    [0, 1, 3],
    [1, 2, 5],
    [0, 4, 2],
    [3, 5, 4]
];

let moveOris = [
    [0, 1, 0, 2],
    [0, 1, 0, 2],
    [0, 0, 1, 2],
    [0, 0, 1, 2]
];

function epermMove(arr, m) {
    mathlib.acycle(arr, movePieces[m]);
}

let eocoord = new mathlib.coord('o', 6, -2);
let cocoord = new mathlib.coord('o', 4, 3);

function oriMove(a, c) {
    let edgeOri = eocoord.set([], a & 0x1f);
    let cornOri = cocoord.set([], a >> 5);
    cornOri[c]++;
    mathlib.acycle(edgeOri, movePieces[c], 1, moveOris[c]);
    return cocoord.get(cornOri) << 5 | eocoord.get(edgeOri);
}

export function scramblePyraRandom() {
    while (true) {
        let perm = mathlib.rn(360); // 6 edges to permute --> 6*5*4*3
        let ori = mathlib.rn(2592); // 6 edges and 4 centers --> (2^5) * (3^4)
        let sol = solv.search([perm, ori], 0);
        let len = sol.length;
        let solStr = solv.toStr(sol.reverse(), "ULRB", ["'", ""]) + ' ';
        
        for (let i = 0; i < 4; i++) {
            let tip = "lrbu".charAt(i);
            let r = mathlib.rn(3);
            if (r == 0) {
                sol += tip + " ";
                len++;
            }
            else if (r == 1) {
                sol += tip + "' ";
                len++;
            }
            // else do nothing
        }
        
        // According to WCA regulations, the scramble must be at least 6 moves long.
        // https://www.worldcubeassociation.org/regulations/#4b3f
        const minLength = 6;
        if (len < minLength) continue;

        return solStr;
    }
}

export function scramblePyra(alg) {
    const moveMap = "ULRB";
    const powerMap = ["'", ""];
    return solv.findScrambleForAlg(alg, moveMap, powerMap);
}
