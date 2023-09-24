import { TimerData, parseTimerData } from "../lib/scripts/timerData";
import { type Penalty } from "../lib/scripts/timerData";

declare const Plotly: any;

let callback: (state) => void = (_) => {};

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type State = {
    timerData?: TimerData,
}

let state: State = {
    timerData: undefined,
};

export function handleTimerData(timerData: TimerData) {
    state.timerData = timerData;
    renderTimeSeries();
    callback(state);
}

function renderTimeSeries() {
    if (!state.timerData) return;

    const plotlyDiv = document.getElementById("plotly-div");
    if (!plotlyDiv) {
        console.log("No plotly div");
        return;
    }
    plotlyDiv.innerHTML = "";

    const plotlyConfig = {
        displayModeBar: false,
        scrollZoom: true,
    };

    for (const session of state.timerData) {
        let averageOf5 = calculateAveragesOfN(session.solves, 5);
        let averageOf12 = calculateAveragesOfN(session.solves, 12);
        let averageOf50 = calculateAveragesOfN(session.solves, 50);
        let averageOf100 = calculateAveragesOfN(session.solves, 100);
        let averageOf500 = calculateAveragesOfN(session.solves, 500);

        console.log({averageOf5, averageOf12, averageOf50, averageOf100, averageOf500})

        // Make plotly time series
        const plotlyData = [
            {
                y: session.solves.map(solve => solve.timeInMs / 1000),
                mode: 'markers',
                name: 'Solves',
            },
            {
                y: averageOf5.map(n => n ? n / 1000 : undefined),
                mode: 'lines',
                name: 'ao5',
            },
            {
                y: averageOf12.map(n => n ? n / 1000 : undefined),
                mode: 'lines',
                name: 'ao12',
            },
            {
                y: averageOf50.map(n => n ? n / 1000 : undefined),
                mode: 'lines',
                name: 'ao50',
            },
            {
                y: averageOf100.map(n => n ? n / 1000 : undefined),
                mode: 'lines',
                name: 'ao100',
            },
            {
                y: averageOf500.map(n => n ? n / 1000 : undefined),
                mode: 'lines',
                name: 'ao500',
            },
        ];

        const plotlyLayout = {
            title: session.sessionName,
            xaxis: {
                title: 'Solve',
            },
            yaxis: {
                title: 'Time (seconds)',
            },
            paper_bgcolor: "#18181b",
            plot_bgcolor: "#18181b",
            font: {
                color: "#f4f4f5",
            }
        };

        const plotly = {
            data: plotlyData,
            layout: plotlyLayout,
            config: plotlyConfig,
            template: "plotly_dark",
        };

        const div = document.createElement("div");
        Plotly.newPlot(div, plotly);

        plotlyDiv.appendChild(div);
    }
}

function calculateAveragesOfN(solves: { penalty: Penalty, timeInMs: number }[], n: number): (number | undefined)[] {
    // Apply +2 penalties
    solves = solves.map(solve => {
        if (solve.penalty === "+2") solve.timeInMs += 2000;
        if (solve.penalty === "DNF") solve.timeInMs = Infinity;
        return solve;
    });

    const truncateNum = Math.floor(n * 0.05); // Truncate the best and worst 5%
    const keepNum = n - truncateNum * 2; // Keep the middle

    let averages: (number | undefined)[] = [];

    let subset: { i: number, solve: {penalty: Penalty, timeInMs: number} }[] = [];

    solves.forEach((solve, i) => {
        // Insert the solve after the solve that is slower than it
        let j = 0;
        while (j < subset.length && subset[j].solve.timeInMs < solve.timeInMs) j++;
        subset.splice(j, 0, { i, solve });

        if (subset.length < n) {
            averages.push(undefined);
        } else {
            const numDNFs = subset.filter(solve => solve.solve.penalty === "DNF").length; // O(n)
            if (numDNFs > truncateNum) {
                averages.push(undefined);
            } else {
                const sum = subset.slice(truncateNum, subset.length - truncateNum).reduce((sum, solve) => sum + solve.solve.timeInMs, 0); // O(n)
                averages.push(sum / keepNum);
            }
            
            // Remove the oldest solve
            subset = subset.filter(solve => i - n !== solve.i); // O(n)
        }
    });

    return averages;
}
