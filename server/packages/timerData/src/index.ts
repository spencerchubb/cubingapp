import { parsers } from "./parsers";

export type Penalty = undefined | "+2" | "DNF";

export type Solve = {
    penalty: Penalty,
    timeInMs: number,
    timestamp: number,
}

export type TimerData = {
    sessionName: string,
    solves: Solve[],
}[];

export function parseTimerData(str) {
    for (const parser of parsers) {
        if (parser.is(str)) {
            return parser.parse(str);
        }
    }

    alert("We do not recognize the file you have uploaded. Please contact the developer so we can add support for it.");
}