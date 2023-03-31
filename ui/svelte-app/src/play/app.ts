export {};

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

let state = {
    timerButtonText: "Start",
    timerText: "0.00",
};
let running = false;
let time: number;
let interval;

export function onPressTimerButton() {
    running = !running;
    state.timerButtonText = running ? "Stop" : "Start";
    callback(state);

    if (running) {
        time = Date.now();
        interval = setInterval(() => {
            const timeDifference = (Date.now() - time) / 1000;
            state.timerText = timeDifference.toFixed(2);
            callback(state);
        }, 10);
    } else {
        clearInterval(interval);
    }
}

export function getTimeText(): string {
    return time.toFixed(2);
}