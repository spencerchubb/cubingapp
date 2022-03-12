import * as scene from "./scene";
import { idFromColor } from "./pickId.js";

export function listenToNavButtons() {
    document.querySelector("#learnButton").addEventListener("click", () => {
        document.location = "index.html";
    });
    document.querySelector("#playButton").addEventListener("click", () => {
        document.location = "play.html";
    });
    document.querySelector("#trainButton").addEventListener("click", () => {
        document.location = "train.html";
    });
    document.querySelector("#cubleButton").addEventListener("click", () => {
        document.location = "cuble.html";
    });
    document.querySelector("#settingsButton").addEventListener("click", () => {
        document.location = "settings.html";
    });
}

const canvas: HTMLCanvasElement = document.querySelector('#glCanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

function posRelativeToCanvas(x: number, y: number) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: x - rect.left,
        y: y - rect.top,
    };
}

export function initCanvas() {
    scene.buffers.initBufferData(scene.cube);
    scene.initScene();

    function pointerDown(x: number, y: number) {
        const pos = posRelativeToCanvas(x, y);
        scene.dragDetector.onPointerDown(pos.x, pos.y);

        // Redraw in order to read the pixels under the pointer coordinates
        // that were just set.
        scene.render();
    }

    function pointerMove(x: number, y: number) {
        const pos = posRelativeToCanvas(x, y);
        scene.dragDetector.onPointerMove(pos.x, pos.y);
    }

    function pointerUp() {
        const id = idFromColor(scene.dragDetector.pixels);
        if (scene.dragDetector.getNumOfMouseMoves() > 2) {
            if (id == Math.pow(256, 4) - 1) {
                scene.cube.doCubeRotateFromMouseDrag(
                    scene.dragDetector.mouseXOnDown,
                    scene.dragDetector.mouseYOnDown,
                    scene.dragDetector.getDx(),
                    scene.dragDetector.getDy());
                scene.animateTurn(null);
            } else {
                const dx = scene.dragDetector.getDx();
                const dy = scene.dragDetector.getDy();
                scene.cube.doTurnFromMouseDrag(id, dx, dy);
                scene.animateTurn(null);
            }
        }
    }

    gl.canvas.addEventListener('touchstart', (event) => {
        const touch = event.touches[0];
        pointerDown(touch.pageX, touch.pageY);
    });

    gl.canvas.addEventListener('touchmove', (event) => {
        const touch = event.touches[0];
        pointerMove(touch.pageX, touch.pageY);
    });

    gl.canvas.addEventListener('touchend', () => {
        pointerUp();
    });
}

