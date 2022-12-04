export class Timer {
    isRunning: boolean;
    /** ms since epoch */
    startTime: number;
    /** seconds since `startTime` */
    stopTime: number;
    _interval: NodeJS.Timeout;

    constructor() {
        this.isRunning = false;
    }


    /** Input Date.now() and a callback to be executed every millisecond */
    start(time: number, everyMs: (number) => void) {
        this.isRunning = true;
        this.startTime = time;
        this._interval = setInterval(
            () => {
                const time = this.secondsSinceStart(Date.now());
                everyMs(time);
            },
            1, // Repeat every 1 ms
        );
    }

    /** Input Date.now() */
    stop(time: number) {
        this.isRunning = false;
        this.stopTime = this.secondsSinceStart(time);
        clearInterval(this._interval);
    }

    secondsSinceStart(time: number) {
        return (time - this.startTime) / 1000;
    }
}