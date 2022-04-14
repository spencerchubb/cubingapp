const canvas = document.querySelector('#glCanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

export class DragDetector {
    constructor() {
        this.mouseX = -1;
        this.mouseY = -1;
        this.mouseXOnDown = -1;
        this.mouseYOnDown = -1;
        this.pixelX = -1;
        this.pixelY = -1;
        this.pixels = new Uint8Array(4);
        this.pixelsOnDown;
        this.numOfMouseMoves = 0;
    }

    getNumOfMouseMoves() {
        return this.numOfMouseMoves;
    }

    onPointerDown(x, y) {
        this.mouseXOnDown = x;
        this.mouseYOnDown = y;
        this.pixelX = x * gl.canvas.width / gl.canvas.clientWidth;
        this.pixelY = gl.canvas.height - y * gl.canvas.height / gl.canvas.clientHeight - 1; // why -1?

        this.numOfMouseMoves = 0;
    }

    onPointerMove(x, y) {
        this.mouseX = x;
        this.mouseY = y;
        this.numOfMouseMoves++;
    }

    getDx() {
        return this.mouseX - this.mouseXOnDown;
    }

    getDy() {
        return this.mouseY - this.mouseYOnDown;
    }
}