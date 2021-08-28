export class Timer {
    constructor() {
        this.isRunning = false;
        this.time = 0.0;
        
        this._updateTimeDisplay();
        this._updateStartStopButton();

        document.querySelector("#startStop").addEventListener("click", (event) => {
            this.startStop();
        });
    }

    _updateTimeDisplay() {
        document.querySelector("#time").textContent = this.time.toFixed(2);
    }

    _updateStartStopButton() {
        document.querySelector("#startStop").textContent = this.isRunning ? "Stop" : "Start";
    }

    startStop() {
        if (this.isRunning) {
            clearInterval(this.interval);
        } else {
            const start = Date.now();
            this.interval = setInterval(
                () => {
                    this.time = (Date.now() - start) / 1000;
                    this._updateTimeDisplay();
                },
                1, // Repeat every 1 ms
            );
        }
        this.isRunning = !this.isRunning;
        this._updateStartStopButton();
    }
}