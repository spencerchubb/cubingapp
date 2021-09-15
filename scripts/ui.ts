import * as scene from "./scene.js";
import { idFromColor } from "./pickId.js";

// export * from "./scene.js";

export function listenToNavButtons() {
    document.querySelector("#learnButton").addEventListener("click", () => {
        document.location = "index.html";
    });
    document.querySelector("#playButton").addEventListener("click", () => {
        document.location = "play.html";
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
    console.log("hi!!!");
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
                scene.startTurn();
            } else {
                const dx = scene.dragDetector.getDx();
                const dy = scene.dragDetector.getDy();
                scene.cube.doTurnFromMouseDrag(id, dx, dy);
                scene.startTurn();
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

