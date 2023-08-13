import { describe, expect, it } from "@jest/globals";
import { SQ1 } from "./SQ1";

describe("SQ1", () => {
    it("should do 1,0 correctly", () => {
        const sq1 = new SQ1();
        sq1.U(1);
        expect(sq1.top).toEqual([7, 0, 1, 2, 3, 4, 5, 6]);
    });
    it("should do 3,0 correctly", () => {
        const sq1 = new SQ1();
        sq1.U(3);
        expect(sq1.top).toEqual([6, 7, 0, 1, 2, 3, 4, 5]);
    });
    it("should do 3,3 correctly", () => {
        const sq1 = new SQ1();
        sq1.U(-3);
        expect(sq1.top).toEqual([2, 3, 4, 5, 6, 7, 0, 1]);
    });
    it("should do 0,3 correctly", () => {
        const sq1 = new SQ1();
        sq1.D(3);
        expect(sq1.bottom).toEqual([10, 11, 12, 13, 14, 15, 8, 9]);
    });
    it("should do 0,-3 correctly", () => {
        const sq1 = new SQ1();
        sq1.D(-3);
        expect(sq1.bottom).toEqual([14, 15, 8, 9, 10, 11, 12, 13]);
    });
    it("should do slash correctly", () => {
        const sq1 = new SQ1();
        sq1.slash();
        expect(sq1.top).toEqual([0, 1, 2, 3, 15, 14, 13, 12]);
        expect(sq1.bottom).toEqual([8, 9, 10, 11, 7, 6, 5, 4]);
    });
    it("should do complicated algorithm", () => {
        const sq1 = new SQ1();
        const alg = "/ 3,3 / -1,0 / 2,-4 / 4,-2 / 0,-2 / -4,2 / 1,-5 / 3,0 / 3,3 / 3,0";

        // Should swap UL and UR
        sq1.performAlg(alg);
        expect(sq1.top).toEqual([0, 5, 2, 3, 4, 1, 6, 7]);
        expect(sq1.bottom).toEqual([8, 9, 10, 11, 12, 13, 14, 15]);
        
        // Should swap UL and UR again, leaving the cube solved
        sq1.performAlg(alg);
        expect(sq1.top).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
        expect(sq1.bottom).toEqual([8, 9, 10, 11, 12, 13, 14, 15]);
    });
});