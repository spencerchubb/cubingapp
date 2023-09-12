import { type WCAPerson, type WCARegionRecords, WCA_EVENTS, fetchRegionRecords, fetchWCAPerson } from "../lib/scripts/wca";

let callback: (state) => void = (_) => {};

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type CSTimerData = {
    properties: {
        sessionData: {
            [key: string]: {
                name: string,
            }
        }
    },
    [key: string]: any,
}

type ConfidenceInterval = {
    name: string,
    eighty: string,
    ninety: string,
    ninetyFive: string,
    ninetyNine: string,
}

type State = {
    error?: string,
    data?: CSTimerData,
    intervals?: ConfidenceInterval[],
}

let state: State = {
    error: undefined,
    data: undefined,
    intervals: undefined,
};

export function displayFilePicker() {
    const input = document.createElement("input") as HTMLInputElement;
    input.type = "file";
    input.onchange = () => {
        if (!input.files) return;
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                const computed = computeConfidenceIntervals(result);
                state.intervals = computed.intervals;
                state.error = computed.error;
                callback(state);
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

function validateData(data: string): { data?: CSTimerData, error?: string } {
    try {
        const json = JSON.parse(data);

        if (!json.properties) {
            return { error: "Missing properties" };
        }

        if (!json.properties.sessionData) {
            return { error: "Missing sessionData" };
        }

        json.properties.sessionData = JSON.parse(json.properties.sessionData);
        return { data: json };
    } catch (e) {
        return { error: e };
    }
}

function calcAvg(nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function calcStd(nums: number[], avg: number): number {
    return Math.sqrt(nums.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b, 0) / nums.length);
}

function computeConfidenceIntervals(dataStr: string): { intervals: ConfidenceInterval[], error?: string } {
    const { data, error } = validateData(dataStr);
    if (!data || error) return { intervals: [], error };

    state.data = data;

    const intervals: ConfidenceInterval[] = [];
    const properties = data.properties;
    const sessionData = properties.sessionData;

    Object.keys(data).forEach((key, i) => {
        if (key === "properties") return;

        const sessionName = sessionData[`${i + 1}`].name;

        const solves = data[key];
        const times = solves.map(solve => solve[0][1] / 1000);

        const avg = calcAvg(times);
        const std = calcStd(times, avg);

        const upperBound = z => avg + z * std / Math.sqrt(times.length);

        const eighty = upperBound(1.282);
        const ninety = upperBound(1.645);
        const ninetyFive = upperBound(1.96);
        const ninetyNine = upperBound(2.576);
        intervals.push({
            name: sessionName,
            eighty: eighty.toFixed(2),
            ninety: ninety.toFixed(2),
            ninetyFive: ninetyFive.toFixed(2),
            ninetyNine: ninetyNine.toFixed(2),
        });
    });

    return { intervals };
}