import * as colors from "./colors";
import { faceToColor } from "./colors";
import { stickerToFace } from "./common/util";
import { CubeLogic } from "./cube";
import * as pieceIndices from "./pieceIndices";
import { loadSavedSettings, newScene, scenes, startLoop } from "./scene";
import { addListenersForLeftModal } from "./ui";

export function main() {
    let scene = newScene("#scene");
    scenes.push(scene);
    scene.cube.solve();

    loadSavedSettings();
    startLoop();

    addListenersForLeftModal();

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
        scene.cube.solve();
        resetMoveCount();
    });

    document.querySelector("#scramble").addEventListener("click", (event) => {
        scene.cube.scramble();

        for (let i = 0; i < 54; i++) {
            if (!pieceIndices.CENTERS.includes(i)) {
                scene.cube.setColor(colors.GRAY, i);
            }
        }

        // We want to reveal correct stickers right after scrambling.
        revealCorrectStickers(scene.cube);

        resetMoveCount();
    });

    document.addEventListener('keydown', (event) => {
        const match = scene.cube.matchKeyToTurn(event);

        // As long as the type of turn is not a cube rotation, we want to
        // check for correct stickers and increment move count.
        if (match && match.turn) {
            revealCorrectStickers(scene.cube);
            incrementMoveCount();
        }
    });
}

/**
 * When a sticker is turned to its correct face, its color is revealed.
 */
function revealCorrectStickers(cube: CubeLogic) {
    for (let i = 0; i < 54; i++) {
        if ((0 <= i && i <= 8 && cube.stickers[i].face == cube.stickers[4].face)
            || (9 <= i && i <= 17 && cube.stickers[i].face == cube.stickers[13].face)
            || (18 <= i && i <= 26 && cube.stickers[i].face == cube.stickers[22].face)
            || (27 <= i && i <= 35 && cube.stickers[i].face == cube.stickers[31].face)
            || (36 <= i && i <= 44 && cube.stickers[i].face == cube.stickers[40].face)
            || (45 <= i && i <= 53 && cube.stickers[i].face == cube.stickers[49].face)) {
            cube.setColor(faceToColor(cube.stickers[i].face), i);
        }
    }
}

main();