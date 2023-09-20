import { describe, expect, it } from '@jest/globals';
import { removeRotations } from './algConvert';

describe("removeRotations", () => {
    it ("should remove rotations", () => {
        let alg = "R U R' U2 y R U R' U2 y2 R U R' U2 y' R U R' U2";
        expect(removeRotations(alg)).toEqual("R U R' U2 B U B' U2 F U F' U2 L U L' U2");
    });
});