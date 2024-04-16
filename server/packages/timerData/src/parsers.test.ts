import { describe, expect, it } from "@jest/globals";
import { readFileSync } from "fs";
import * as parsers from "./parsers";

function jsonRemoveWhitespace(str: string): string {
    return JSON.stringify(JSON.parse(str));
}

// Returns true if it matches a parser other than the one we're testing.
function isOthers(str: string, parserName: string): boolean {
    for (const parser of parsers.parsers.filter(parser => parser.name !== parserName)) {
        if (parser.is(str)) return true;
    }

    return false;
}

const expectedData = [
    {
        sessionName: "Foo session",
        solves: [
            {
                penalty: undefined,
                timeInMs: 1113,
                timestamp: 1694662784419,
            },
        ],
    },
    {
        sessionName: "Bar session",
        solves: [
            {
                penalty: "DNF",
                timeInMs: 688,
                timestamp: 1694662774636,
            },
            {
                penalty: "+2",
                timeInMs: 1844,
                timestamp: 1694662765767,
            },
        ],
    },
];

// Twisty Timer exports don't have multiple sessions, don't have +2s, and don't show a time for DNFs.
const expectedDataTwistyTimer = [
    {
        sessionName: "Twisty Timer Session",
        solves: [
            {
                penalty: undefined,
                timeInMs: 1110,
                timestamp: 1713227629829,
            },
            {
                penalty: "DNF",
                timeInMs: 0,
                timestamp: 1713227685021,
            },
            {
                penalty: undefined,
                timeInMs: 3840,
                timestamp: 1713227666168,
            },
        ],
    },
];

describe("parsers", () => {
    it("should parse csTimerCsv", () => {
        let str = readFileSync(`${__dirname}/examples/csTimerCsv.csv`, "utf8");
        expect(parsers.csTimerCsv.is(str)).toBe(true);
        expect(parsers.csTimerCsv.parse(str)).toEqual([
            {
                sessionName: "Session 1",
                solves: [
                    {
                        penalty: undefined,
                        timeInMs: 1113,
                        timestamp: 1700974002000,
                    },
                    {
                        penalty: "DNF",
                        timeInMs: 1844,
                        timestamp: 1700974010000,
                    },
                    {
                        penalty: "+2",
                        timeInMs: 688,
                        timestamp: 1700974007000,
                    },
                ],
            },
        ]);
        expect(isOthers(str, "csTimerCsv")).toBe(false);
    });

    it("should parse csTimerTxt", () => {
        let str = readFileSync(`${__dirname}/examples/csTimerTxt.json`, "utf8");
        str = jsonRemoveWhitespace(str);
        expect(parsers.csTimerTxt.is(str)).toBe(true);
        expect(parsers.csTimerTxt.parse(str)).toEqual(expectedData);
        expect(isOthers(str, "csTimer")).toBe(false);
    });

    it("should parse CubeDesk", () => {
        let str = readFileSync(`${__dirname}/examples/CubeDesk.json`, "utf8");
        str = jsonRemoveWhitespace(str);
        expect(parsers.CubeDesk.is(str)).toBe(true);
        expect(parsers.CubeDesk.parse(str)).toEqual(expectedData);
        expect(isOthers(str, "CubeDesk")).toBe(false);
    });

    it("should parse TwistyTimer", () => {
        let str = readFileSync(`${__dirname}/examples/TwistyTimer.txt`, "utf8");
        expect(parsers.TwistyTimer.is(str)).toBe(true);
        expect(parsers.TwistyTimer.parse(str)).toEqual(expectedDataTwistyTimer);
        expect(isOthers(str, "TwistyTimer")).toBe(false);
    });
});
