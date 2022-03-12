import * as scene from "./scene";
import { initCanvas, listenToNavButtons } from "./ui";

function newSolvedCube(numOfLayers: string) {
    scene.cube.activateAllStickers();
    scene.cube.setNumOfLayers(numOfLayers);
    scene.cube.new();
    scene.buffers.initBufferData(scene.cube);
    scene.render();
}

export function main() {
    listenToNavButtons();

    scene.cube.setNumOfLayers(3);
    scene.cube.activateAllStickers();
    scene.cube.new();

    initCanvas();

    document.addEventListener('keydown', (event) => {
        if (scene.cube.matchKeyToTurn(event.key)) {
            scene.animateTurn(null);
        }
    });
}

main();