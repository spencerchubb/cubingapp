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

    let showRotateButtonsState = true;

    function updateShowRotateButtons() {
        let button = document.querySelector("#showRotateButtonsButton");
        let container = document.querySelector("#rotateButtonsContainer");
        if (showRotateButtonsState) {
            button.textContent = "On";
            container.style.display = "block";
        } else {
            button.textContent = "Off";
            container.style.display = "none";
        }
    }

    updateShowRotateButtons();

    document.querySelector("#showRotateButtons").onclick = () => {
        showRotateButtonsState = !showRotateButtonsState;
        updateShowRotateButtons();
    }

    document.querySelector("#x").onclick = () => {
        scene.cube.doCubeRotateFromButton(0, true);
        scene.startTurn();
    }

    document.querySelector("#y").onclick = () => {
        scene.cube.doCubeRotateFromButton(1, true);
        scene.startTurn();
    }

    document.querySelector("#z").onclick = () => {
        scene.cube.doCubeRotateFromButton(2, true);
        scene.startTurn();
    }

    document.querySelector("#xPrime").onclick = () => {
        scene.cube.doCubeRotateFromButton(0, false);
        scene.startTurn();
    }

    document.querySelector("#yPrime").onclick = () => {
        scene.cube.doCubeRotateFromButton(1, false);
        scene.startTurn();
    }

    document.querySelector("#zPrime").onclick = () => {
        scene.cube.doCubeRotateFromButton(2, false);
        scene.startTurn();
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
                const x = scene.dragDetector.pixelX;
                const y = scene.dragDetector.pixelY;
                scene.cube.doCubeRotateFromMouseDrag(x, y);
                scene.startTurn();
            } else {
                const dx = scene.dragDetector.getDx();
                const dy = scene.dragDetector.getDy();
                scene.cube.doTurnFromMouseDrag(id, dx, dy);
                scene.startTurn();
            }
        }
    }

    gl.canvas.addEventListener('mousedown', (event) => {
        pointerDown(event.clientX, event.clientY);
    });

    gl.canvas.addEventListener('mousemove', (event) => {
        pointerMove(event.clientX, event.clientY);
    });

    gl.canvas.addEventListener('mouseup', () => {
        pointerUp();
    });

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