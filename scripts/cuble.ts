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

    const moveCountEle = document.querySelector("#moveCount");
    let moveCount = 0;
    function resetMoveCount() {
        moveCount = 0;
        moveCountEle.textContent = `Moves: ${moveCount}`;
    }
    function incrementMoveCount() {
        moveCount += 1;
        moveCountEle.textContent = `Moves: ${moveCount}`;
    }

    // Reset move count as part of page initialization.
    resetMoveCount();

    document.querySelector("#solve").addEventListener("click", (event) => {
        newSolvedCube("3");
    });

    document.querySelector("#scramble").addEventListener("click", (event) => {
        scene.cube.naiveScramble();
        scene.cube.cubleScramble();

        // We want to reveal correct stickers right after scrambling.
        scene.cube.revealCorrectStickers();

        scene.render();

        resetMoveCount();
    });

    document.addEventListener('keydown', (event) => {
        const match = scene.cube.matchKeyToTurn(event.key);
        if (match) {
            // As long as the type of turn is not a cube rotation, we want to
            // check for correct stickers and increment move count.
            if (match.turn) {
                scene.cube.revealCorrectStickers();
                incrementMoveCount();
            }

            scene.animateTurn(null);
        }
    });
}

main();