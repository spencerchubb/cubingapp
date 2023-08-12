import { describe, expect, it } from "@jest/globals";
import { convertSeconds } from "./time";

describe("convertSeconds", () => {
    it("should display seconds", () => {
        expect(convertSeconds(0)).toEqual("0.00");
        expect(convertSeconds(1)).toEqual("1.00");
        expect(convertSeconds(59.99)).toEqual("59.99");
    });
    it("should display minutes", () => {
        expect(convertSeconds(60)).toEqual("1:00.00");
        expect(convertSeconds(61)).toEqual("1:01.00");
        expect(convertSeconds(59 * 60 + 59.99)).toEqual("59:59.99");
    });
    it("should display hours", () => {
        expect(convertSeconds(60 * 60)).toEqual("1:00:00.00");
        expect(convertSeconds(60 * 60 + 60 + 1)).toEqual("1:01:01.00");
        expect(convertSeconds(60 * 60 + 59 * 60 + 59.99)).toEqual("1:59:59.99");
        expect(convertSeconds(10 * 60 * 60)).toEqual("10:00:00.00");
    });
});