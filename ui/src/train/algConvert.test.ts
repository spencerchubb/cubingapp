import { describe, expect, it } from '@jest/globals';
import { algToRUF } from './algConvert';

describe("algToRUF", () => {
    it("should convert L' U R U' L U R'", () => {
        expect(algToRUF("L' U R U' L U R'")).toEqual("R' F R F' R U R'")
    });
});