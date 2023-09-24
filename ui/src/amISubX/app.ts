import { TimerData } from "../lib/scripts/timerData";

let callback: (state) => void = (_) => {};

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type ConfidenceInterval = {
    name: string,
    eighty: string,
    ninety: string,
    ninetyFive: string,
    ninetyNine: string,
}

type State = {
    data?: TimerData,
    solves: number,
    intervals?: ConfidenceInterval[],
}

let state: State = {
    data: undefined,
    solves: 100,
    intervals: undefined,
};

export function handleTimerData(data: TimerData) {
    state.data = data;
    state.intervals = computeConfidenceIntervals(data);
    callback(state);
    return state;
}

export function onChangeSolves(event: Event) {
    const target = event.target as HTMLInputElement;
    state.solves = parseInt(target.value);

    if (state.data) {
        state.intervals = computeConfidenceIntervals(state.data);
    }

    callback(state);
    return state;
}

function calcAvg(nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function calcStd(nums: number[], avg: number): number {
    return Math.sqrt(nums.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b, 0) / nums.length);
}

function computeConfidenceIntervals(data: TimerData): ConfidenceInterval[] {
    return data.map(session => {
        const times = session
            .solves
            .slice(session.solves.length - state.solves) // take last n solves
            .map(solve => solve.timeInMs / 1000);

        const avg = calcAvg(times);
        const std = calcStd(times, avg);

        const upperBound = z => avg + z * std / Math.sqrt(times.length);

        const eighty = upperBound(1.282);
        const ninety = upperBound(1.645);
        const ninetyFive = upperBound(1.96);
        const ninetyNine = upperBound(2.576);

        return {
            name: session.sessionName,
            eighty: eighty.toFixed(2),
            ninety: ninety.toFixed(2),
            ninetyFive: ninetyFive.toFixed(2),
            ninetyNine: ninetyNine.toFixed(2),
        };
    });
}