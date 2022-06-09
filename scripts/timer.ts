export class Timer {
    isRunning: boolean;
    start: number;
    timeEle: HTMLElement;
    interval: NodeJS.Timeout;

    constructor() {
        this.isRunning = false;
        this.timeEle = document.querySelector("#time");
        
        this._updateTimeDisplay(0);
        this._updateStartStopButton(false);
    }

    _updateTimeDisplay(time: number) {
        this.timeEle.textContent = time.toFixed(2);
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

    /**
     * Handle the starting and stopping of the timer.
     * If the timer is not running, start the timer and return null.
     * If the timer is running, stop the timer and return the time.
     */
    startStop(): number | null {
        // Save the time in a variable before everything else to make it as 
        // accurate as possible
        const now = Date.now();
        if (this.isRunning) {
            clearInterval(this.interval);
            this._updateStartStopButton(false);
            return (now - this.start) / 1000;
        }
        this.start = now;
        this.interval = setInterval(
            () => {
                const time = (Date.now() - this.start) / 1000;
                this._updateTimeDisplay(time);
            },
            1, // Repeat every 1 ms
        );
        this._updateStartStopButton(true);
        return null;
    }
}