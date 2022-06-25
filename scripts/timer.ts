export class Timer {
    isRunning: boolean;
    startTime: number;
    secondsSinceStart: number;
    _timeEle: HTMLElement;
    _interval: NodeJS.Timeout;

    constructor() {
        this.isRunning = false;
        this._timeEle = document.querySelector("#time");
        
        this._updateTimeDisplay(0);
        this._updateStartStopButton(false);
    }

    _updateTimeDisplay(secondsSinceStart: number) {
        this.secondsSinceStart = secondsSinceStart;
        this._timeEle.textContent = this.secondsSinceStart.toFixed(2);
    }

    _updateStartStopButton(val: boolean) {
        this.isRunning = val;
        const button: HTMLElement = document.querySelector("#startStop");
        if (val) {
            button.textContent = "Stop";
            button.title = "Press space to stop timer";
        } else {
            button.textContent = "Start";
            button.title = "Press space to start timer";
        }
    }

    start(time: number) {
        this.startTime = time;
        this._interval = setInterval(
            () => {
                const secondsSinceStart = this.calcSecondsSinceStart(Date.now());
                this._updateTimeDisplay(secondsSinceStart);
            },
            1, // Repeat every 1 ms
        );
        this._updateStartStopButton(true);
    }

    stop(time: number) {
        clearInterval(this._interval);
        this._updateStartStopButton(false);

        const secondsSinceStart = this.calcSecondsSinceStart(time);
        this._updateTimeDisplay(secondsSinceStart);
    }

    calcSecondsSinceStart(time: number) {
        return (time - this.startTime) / 1000;
    }
}