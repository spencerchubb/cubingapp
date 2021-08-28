import { idFromColor } from "./pickId.js";
import * as scene from "./scene.js";
import { Timer } from "./timer.js";

const canvas = document.querySelector('#glCanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

function newSolvedCube(numOfLayers) {
    scene.cube.new(numOfLayers);
    scene.buffers.initBufferData(scene.cube);
    scene.render();
}

function posRelativeToCanvas(x, y) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: x - rect.left,
        y: y - rect.top,
    };
}

export function main() {
    scene.buffers.initBufferData(scene.cube);
    scene.initScene();

    const timer = new Timer();

    // Prevent extra click if spacebar is pressed while a button is focused.
    window.onkeydown = function (event) {
        if (event.keyCode === 32) {
            event.preventDefault();
        }
    };

    document.querySelector("#settingsButton").onclick = () => {
        document.location = "settings.html";
    }

    const layerInput = document.querySelector("#layerInput");
    layerInput.addEventListener("change", (event) => {
        newSolvedCube(event.target.value);
    });

    document.querySelector("#solve").addEventListener("click", (event) => {
        newSolvedCube(layerInput.value);
    });

    document.querySelector("#scramble").addEventListener("click", (event) => {
        scene.cube.naiveScramble();
        scene.render();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key == " ") {
            timer.startStop();
        } else if (scene.cube.matchKeyToTurn(event.key)) {
            scene.startTurn();
        }
    });

    function pointerDown(x, y) {
        const pos = posRelativeToCanvas(x, y);
        scene.dragDetector.onPointerDown(pos.x, pos.y);

        // Redraw in order to read the pixels under the pointer coordinates
        // that were just set.
        scene.render();
    }

    function pointerMove(x, y) {
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

main();