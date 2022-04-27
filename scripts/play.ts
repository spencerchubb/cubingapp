import * as scene from "./scene";
import { Timer } from "./timer.js";
import { initCanvas, listenToNavButtons } from "./ui";

function newSolvedCube(numOfLayers: string) {
    scene.cube.setNumOfLayers(numOfLayers);

    // activateAllStickers must come after setNumOfLayers because it depends on numOfLayers.
    scene.cube.activateAllStickers();

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

    const timer = new Timer();

    const layerInput = document.querySelector("#layerInput") as HTMLInputElement;
    layerInput.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;
        newSolvedCube(target.value);
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
            // Prevent extra click if spacebar is pressed while a button is focused.
            event.preventDefault();

            timer.startStop();
        } else if (scene.cube.matchKeyToTurn(event.key)) {
            scene.animateTurn(null);
        }
    });

    const helpButton: HTMLElement = document.querySelector("#helpButton");
    const helpModal: HTMLElement = document.querySelector("#helpModal");
    const closeHelpModal: HTMLElement = document.querySelector("#closeHelpModal");
    function showModal() {
        helpModal.style.display = "flex";
    }
    function hideModal() {
        helpModal.style.display = "none";
    }
    helpButton.addEventListener("click", () => {
        showModal();
    });
    closeHelpModal.addEventListener("click", (event) => {
        hideModal();
    });
}

main();