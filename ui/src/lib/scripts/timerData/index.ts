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

export function parseTimerData(str: string): TimerData | undefined {
    for (const parser of parsers) {
        if (parser.is(str)) {
            return parser.parse(str);
        }
    }

    console.error("No parser found");
    console.error(str);
    return;
}