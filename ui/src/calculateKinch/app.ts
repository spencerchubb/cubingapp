import { WCAPerson, WCARegionRecords, WCA_EVENTS, fetchRegionRecords, fetchWCAPerson } from "../lib/scripts/wca";

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type State = {
    wcaId: string,
    region: string,
    error?: string,
    wcaPerson?: WCAPerson,
    wcaRegionRecords?: WCARegionRecords,
    kinchScore?: number,
    kinchData?: {
        event: string,
        ratio: number,
        color: string,
        statusText: string,
    }[],
}

const urlParams = new URLSearchParams(window.location.search);

let state: State = {
    wcaId: urlParams.get("wcaId") ?? "",
    region: urlParams.get("region") ?? "World",
    wcaPerson: undefined,
    wcaRegionRecords: undefined,
    kinchScore: undefined,
    kinchData: undefined,
};

export const controller = {
    calculateKinchScore: () => {
        const { wcaId, region } = state;

        if (!wcaId) return;

        // Add to query params
        const url = new URL(window.location.href);
        url.searchParams.set("wcaId", wcaId);
        url.searchParams.set("region", region);
        window.history.pushState({}, "", url.toString());

        Promise.all([fetchWCAPerson(wcaId), fetchRegionRecords(region)])
            .then(([wcaPerson, wcaRegionRecords]) => {
                state.wcaPerson = wcaPerson;
                state.wcaRegionRecords = wcaRegionRecords;

                state.error = wcaPerson.error;
                if (state.error) {
                    state.kinchScore = undefined;
                    state.kinchData = undefined;
                    callback(state);
                    return;
                }

                const personalRecords = wcaPerson.personal_records;
                if (!personalRecords || !Object.keys(personalRecords).length) {
                    state.error = `No personal records found for ${wcaId}`;
                    callback(state);
                    return;
                }

                const eventRatios = getEventRatios(wcaPerson, wcaRegionRecords);
                const kinchScore = calculateMean(eventRatios);

                state.kinchScore = round(kinchScore, 2);

                state.kinchData = eventRatios.map((ratio, i) => {
                    return {
                        event: WCA_EVENTS[i].name,
                        ratio: round(ratio, 2),
                        color: getScoreColor(ratio),
                        statusText: getStatusText(ratio),
                    };
                });

                // Sort ratio from lowest to highest
                state.kinchData.sort((a, b) => a.ratio - b.ratio);

                callback(state);
            })
            .catch(console.error);
    },
};

/**
    The kinch score is calculated as follows:
    Compute average ratio for each event, where the ratio is the competitor score divided by world record score.
    Take the better score between:  
        - FMC single and FMC average  
        - 3bld single and 3bld average  
        - 4bld single and 4bld average  
        - 5bld single and 5bld average  
    See the original explanation for more: https://www.speedsolving.com/threads/all-round-rankings-kinchranks.53353/
*/
function getEventRatios(
    person: WCAPerson,
    records: WCARegionRecords
): number[] {
    return WCA_EVENTS.map(wcaEvent => {
        const wcaKey = wcaEvent.wcaKey;
        const personalRecord = person.personal_records[wcaKey];

        if (wcaKey === "333mbf") {
            const personalSingle = personalRecord?.single?.best;
            const recordSingle = records[wcaKey].single;

            const personalResult = decodeMbldAttemptResult(personalSingle);
            const recordResult = decodeMbldAttemptResult(recordSingle);

            if (!personalResult) return 0;

            /** mbld score is calculated as points + proportion of hour left */
            function mbldScore(result) {
                const { solved, attempted, centiseconds } = result;
                const points = solved - (attempted - solved);
                const proportionOfHourLeft = 1 - centiseconds / 360000;
                const score = points + proportionOfHourLeft;
                return Math.max(score, 0);
            }

            const personalScore = mbldScore(personalResult);
            const recordScore = mbldScore(recordResult);

            if (personalScore === 0) return 0;

            return personalScore / recordScore * 100;
        }

        if (["333fm", "333bf", "444bf", "555bf"].includes(wcaKey)) {
            const personalSingle = personalRecord?.single?.best ?? 0;
            const recordSingle = records[wcaKey].single ?? 0;

            const personalAvg = personalRecord?.average?.best ?? 0;
            const recordAvg = records[wcaKey].average ?? 0;

            // If both are 0, return 0
            if (personalSingle === 0 && personalAvg === 0) return 0;

            // If average is 0, return single
            if (personalAvg === 0) {
                const singleRatio = recordSingle / personalSingle;
                return singleRatio * 100;
            }

            // Else, return max
            const singleRatio = recordSingle / personalSingle;
            const avgRatio = recordAvg / personalAvg;
            return Math.max(singleRatio, avgRatio) * 100;
        }

        const personalAvg = personalRecord?.average?.best ?? 0;
        const recordAvg = records[wcaKey].average ?? 0;

        if (personalAvg === 0) return 0;

        return recordAvg / personalAvg * 100;
    });
}

/**
 * Returns an object representation of the given MBLD attempt result.
 * 
 * See https://github.com/thewca/worldcubeassociation.org/blob/master/WcaOnRails/app/webpacker/lib/wca-live/attempts.js
 *
 * @example
 * decodeMbldAttemptResult(900348002); // => { solved: 11, attempted: 13, centiseconds: 348000 }
 */
function decodeMbldAttemptResult(value) {
    if (!value) return undefined;
    if (value <= 0) return { solved: 0, attempted: 0, centiseconds: value };
    // Old-style results, written as a 10-digit number, start with a '1'.
    // New-style results start with a '0'.
    const isOldStyleResult = value.toString().padStart(10, '0').startsWith('1');
    if (isOldStyleResult) {
        const seconds = value % 1e5;
        const attempted = Math.floor(value / 1e5) % 100;
        const solved = 99 - (Math.floor(value / 1e7) % 100);
        const centiseconds = seconds === 99999 ? null : seconds * 100;
        return { solved, attempted, centiseconds };
    }
    const missed = value % 100;
    const seconds = Math.floor(value / 100) % 1e5;
    const points = 99 - (Math.floor(value / 1e7) % 100);
    const solved = points + missed;
    const attempted = solved + missed;
    const centiseconds = seconds === 99999 ? null : seconds * 100;
    return { solved, attempted, centiseconds };
}

function calculateMean(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Cannot compute mean of an empty array");
    }

    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}

function round(n: number, decimals: number): number {
    const multiplier = Math.pow(10, decimals);
    return Math.round(n * multiplier) / multiplier;
}

function getScoreColor(score) {
    if (score < 0 || score > 100) {
        console.error("Score must be between 0 and 100: " + score);
        return "red";
    }

    // Calculate the red, green, and blue components of the color.
    // Divide by 140 to darken and improve contrast with white text.
    var red = Math.round((100 - score) * 255 / 120);
    var green = Math.round((score) * 255 / 140);
    var blue = 0;

    // Return the RGB string
    return "rgb(" + red + "," + green + "," + blue + ")";
}

function getStatusText(score: number): string {
    if (score < 100 / 4) {
        return "Needs work";
    } else if (score < 100 * 2 / 4) {
        return "Okay";
    } else if (score < 100 * 3 / 4) {
        return "Good";
    } else if (score < 100) {
        return "Excellent";
    }
    return "World record!";
}

(function initApp() {
    controller.calculateKinchScore();
})();
