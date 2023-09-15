import { type TimerData } from "./index";

// TODO: Block Keeper, ChaoTimer, Prisma Puzzle Timer, qqtimer, Twisty Timer, ZYX Timer

// Supported timers:
// - CsTimer
// - CubeDesk

export type Parser = {
    name: string,
    is: (str: string) => boolean,
    parse: (str: string) => TimerData,
}

export const CSTimerParser: Parser = {
    name: "csTimer",
    is: (str: string) => str.startsWith('{"session1":'),
    parse: (str: string) => {
        const json = JSON.parse(str);
        json.properties.sessionData = JSON.parse(json.properties.sessionData);
        return Object.values(json.properties.sessionData)
            .map((session: any, i) => {
                return {
                    sessionName: session.name,
                    solves: json[`session${i + 1}`].map((solve) => {
                        const [[penalty, timeInMs], scramble, notes, timestamp] = solve;
                        return {
                            penalty: penalty === 2000 ? "+2" : penalty === -1 ? "DNF" : undefined,
                            timeInMs,
                            timestamp,
                        };
                    }),
                };
            });
    },
}

export const CubeDeskParser = {
    name: "CubeDesk",
    is: (str: string) => str.startsWith('{"sessions":'),
    parse: (str: string) => {
        const json = JSON.parse(str);
        const solves = json.solves.sort((a, b) => b.ended_at - a.ended_at);

        return json.sessions.map(session => {
            return {
                sessionName: session.name,
                solves: solves
                    .filter(solve => solve.session_id === session.id)
                    .map(solve => {
                        return {
                            penalty: solve.plus_two ? "+2" : solve.dnf ? "DNF" : undefined,
                            timeInMs: solve.raw_time * 1000,
                            timestamp: solve.ended_at,
                        };
                    }),
            };
        });
    },
}

export const parsers: Parser[] = [
    CSTimerParser,
    CubeDeskParser,
];