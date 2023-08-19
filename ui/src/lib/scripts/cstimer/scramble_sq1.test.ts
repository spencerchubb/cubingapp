import { describe, expect, it } from "@jest/globals";
import { strToMoves, movesToStr, scrambleSQ1 } from "./scramble_sq1";

describe("movesToStr and strToMoves", () => {
    it("should be inverses", () => {
        const moves = "0,2 / 0,-3 / 0,-3 / 3,0 / 0,-3 / 4,-3 / 6,-3 / -3,0 / -4,-2 / 3,0 / 0,-2 / 0,-4 / 0,-4 / 6,0";
        expect(movesToStr(
            strToMoves(moves),
            30,
        )).toBe(moves);
    });

    it("should scramble", () => {
        // const alg = "3,0 1,0 / 5,-1 / -5,1 / -1,0 3,-3";
        const alg = "1,0 / 5,-1 / -5,1 / -1,0";
        console.log(scrambleSQ1(alg));
    });
});