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

describe("parsers", () => {
    it("should parse csTimer", () => {
        let str = readFileSync(`${__dirname}/examples/cstimer.json`, "utf8");
        str = jsonRemoveWhitespace(str);
        expect(parsers.CSTimerParser.is(str)).toBe(true);
        expect(parsers.CSTimerParser.parse(str)).toEqual(expectedData);
        expect(isOthers(str, "csTimer")).toBe(false);
    });

    it("should parse CubeDesk", () => {
        let str = readFileSync(`${__dirname}/examples/cubedesk.json`, "utf8");
        str = jsonRemoveWhitespace(str);
        expect(parsers.CubeDeskParser.is(str)).toBe(true);
        expect(parsers.CubeDeskParser.parse(str)).toEqual(expectedData);
        expect(isOthers(str, "CubeDesk")).toBe(false);
    });
});
