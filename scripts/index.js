import * as scene from "./scene.js";
import { Timer } from "./timer.js";
import { initCanvas, listenToNavButtons } from "./ui.ts";

function newSolvedCube(numOfLayers) {
    scene.cube.new(numOfLayers);
    scene.buffers.initBufferData(scene.cube);
    scene.render();
}

export function main() {
    listenToNavButtons();

    initCanvas();

    document.addEventListener('keydown', (event) => {
        if (event.key == " ") {
            timer.startStop();
        } else if (scene.cube.matchKeyToTurn(event.key)) {
            scene.startTurn();
        }
    });
}

main();