import { type TimerData } from "./index";

// TODO: Block Keeper, ChaoTimer, Prisma Puzzle Timer, qqtimer, ZYX Timer

// Supported timers:
// - CsTimer
// - CubeDesk
// - Twisty Timer

export type Parser = {
    name: string,
    is: (str: string) => boolean,
    parse: (str: string) => TimerData,
}

export const csTimerCsv: Parser = {
    name: "csTimerCsv",
    is: (str: string) => str.startsWith("No.;Time;Comment;Scramble;Date;P.1"),
    parse: (str: string) => {
        const lines = str.split("\n");

        // Skip the first line because it's just the column names.
        lines.shift();

        return [
            {
                sessionName: "Session 1",
                solves: lines.map(line => {
                    const values = line.split(";");
                    const [index, penalizedTime, comments, scramble, date, originalTime] = values;

                    const penalty = penalizedTime.startsWith("DNF")
                        ? "DNF"
                        : penalizedTime.endsWith("+")
                        ? "+2"
                        : undefined;
                    const timeInMs = Math.floor(Number(originalTime) * 100);
                    const timestamp = new Date(date).getTime();

                    return { penalty, timeInMs, timestamp };
                }),
            },
        ];
    },
}

export const csTimerTxt: Parser = {
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

export const CubeDesk: Parser = {
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

// Twisty Timer experts don't show +2 and adds 2 seconds automatically.
export const TwistyTimer: Parser = {
    name: "TwistyTimer",
    is: (str: string) => str.startsWith('"'),
    parse: (str: string) => {
        const lines = str.trim().split("\n");
        return [
            {
                sessionName: "Twisty Timer Session",
                solves: lines.map(line => {
                    let [time, scramble, date, penalty] = line.split(";");

                    console.log({ time, scramble, date, penalty });
                    // Remove first and last characters (quotes).
                    time = time.slice(1, -1);
                    scramble = scramble.slice(1, -1);
                    date = date.slice(1, -1);
                    penalty = penalty?.slice(1, -1);

                    return {
                        penalty: penalty === "DNF" ? "DNF" : undefined,
                        timeInMs: time === "--" ? 0 : Math.floor(Number(time) * 1000),
                        timestamp: new Date(date).getTime(),
                    };
                }),
            },
        ];
    },
}

export const parsers: Parser[] = [
    csTimerCsv,
    csTimerTxt,
    CubeDesk,
    TwistyTimer,
];