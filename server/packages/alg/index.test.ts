import { describe, expect, it } from "@jest/globals";
import { AlgNew, AlgToString, AlgSimplify, simplifySQ1Alg, StringToAlg, AlgInvert } from "./";

describe("AlgToString", () => {
    it("should work", () => {
        const alg = StringToAlg("R U2 F'");
        expect(AlgToString(alg)).toEqual("R U2 F'");
    });
});

describe("AlgInvert", () => {
    it("should invert", () => {
        const alg = AlgNew("R U R' U R U2 R'");
        expect(AlgInvert(alg)).toEqual(AlgNew("R U2 R' U' R U' R'"));
    });
})

describe("AlgSimplify", () => {
    it("should work with empty alg", () => {
        const alg = AlgNew();
        expect(AlgSimplify(alg)).toEqual(StringToAlg(""));
    });

    it("should work with one move", () => {
        let alg = StringToAlg("R")
        expect(AlgSimplify(alg)).toEqual(StringToAlg("R"));

        alg = StringToAlg("R2")
        expect(AlgSimplify(alg)).toEqual(StringToAlg("R2"));

        alg = StringToAlg("R'");
        expect(AlgSimplify(alg)).toEqual(StringToAlg("R'"));
    });

    it("should work with two moves", () => {
        let alg = StringToAlg("R R");
        expect(AlgSimplify(alg)).toEqual(StringToAlg("R2"));

        alg = StringToAlg("R R2");
        expect(AlgSimplify(alg)).toEqual(StringToAlg("R'"));

        alg = StringToAlg("R R'");
        expect(AlgSimplify(alg)).toEqual(StringToAlg(""));
    });

    it("should work with U D U", () => {
        let alg = AlgNew("B L' R U' D U L");
        expect(AlgSimplify(alg)).toEqual(AlgNew("B L' R D L"));

        alg = AlgNew("B L' R U D U L");
        expect(AlgSimplify(alg)).toEqual(AlgNew("B L' R U2 D L"));
    });

    it("should work with long algs", () => {
        let alg = StringToAlg("R U F F' U' R' U L D L' D' D L R R2 R2");
        // R U F cancels with F' U' R'
        // L' D' cancels with D L
        // R R2 R2 simplifies to R
        expect(AlgSimplify(alg)).toEqual(StringToAlg("U L D R"));
    });

    it("should work with wide moves", () => {
        let alg = StringToAlg("R R Rw Rw r r");
        expect(AlgSimplify(alg)).toEqual(StringToAlg("R2 Rw2 r2"));
    });
});

describe("simplifySQ1Alg", () => {
    it("should simplify sq1 alg", () => {
        const alg = "-3,-3 -2,0 / 0,3 / -1,-1 / 1,-2 / 2,0 6,0";
        expect(simplifySQ1Alg(alg)).toEqual("-5,-3 / 0,3 / -1,-1 / 1,-2 / -4,0");
    })
});