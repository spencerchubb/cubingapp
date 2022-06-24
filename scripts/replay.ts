import * as scene from "./scene";
import { addListenersForLeftModal } from "./ui";
import { AE, addAnalyticsEvent } from "./analytics";
import * as db from "./db";

function main() {
    addAnalyticsEvent(AE.ViewReplay);

    // Initial canvas render
    scene.renderCanvas();

    addListenersForLeftModal();

    const searchParams = new URLSearchParams(window.location.search);
    const solveID = parseInt(searchParams.get("solveID"));
    db.getSolve(solveID, solve => {
        console.log(solve);
        scene.cube.setCubeState(solve.initialCubeState);
        scene.render();

        let moveIndex = 0;
        const moveCounter = document.querySelector("#moveCounter");
        function updateMoveCounter(i: number) {
            moveCounter.textContent = `${i} / ${solve.moves.length}`;
        }
        updateMoveCounter(0);

        document.querySelector("#leftButton").addEventListener("click", (event) => {
            if (moveIndex > 0) {
                moveIndex--;
                scene.cube.stepAlgorithm(solve.moves[moveIndex].move, false);
                scene.animateTurn();
    
                updateMoveCounter(moveIndex);
            }
        });
        document.querySelector("#rightButton").addEventListener("click", (event) => {
            if (moveIndex < solve.moves.length) {
                scene.cube.stepAlgorithm(solve.moves[moveIndex].move, true);
                scene.animateTurn();
                moveIndex++;
    
                updateMoveCounter(moveIndex);
            }
        });
    });
}

main();