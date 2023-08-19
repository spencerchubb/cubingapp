import { describe, expect, it } from "@jest/globals";
import { strToMoves, movesToStr, simplifySQ1Alg } from "./scramble_sq1";

describe("movesToStr and strToMoves", () => {
    it("should be inverses", () => {
        const moves = "0,2 / 0,-3 / 0,-3 / 3,0 / 0,-3 / 4,-3 / 6,-3 / -3,0 / -4,-2 / 3,0 / 0,-2 / 0,-4 / 0,-4 / 6,0";
        expect(movesToStr(
            strToMoves(moves),
            30,
        )).toEqual(moves);
    });

    it("should simplify sq1 alg", () => {
        const alg = "-3,-3 -2,0 / 0,3 / -1,-1 / 1,-2 / 2,0 6,0";
        expect(simplifySQ1Alg(alg)).toEqual("-5,-3 / 0,3 / -1,-1 / 1,-2 / -4,0");
    })
});