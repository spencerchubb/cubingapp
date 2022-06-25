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
        function updateMoveCounter() {
            moveCounter.textContent = `${moveIndex} / ${solve.moves.length}`;
        }
        updateMoveCounter();

        document.querySelector("#leftButton").addEventListener("click", (event) => {
            if (moveIndex > 0) {
                moveIndex--;
                scene.cube.stepAlgorithm(solve.moves[moveIndex].move, false);
                scene.animateTurn();
    
                updateMoveCounter();
            }
        });
        document.querySelector("#rightButton").addEventListener("click", (event) => {
            if (moveIndex < solve.moves.length) {
                scene.cube.stepAlgorithm(solve.moves[moveIndex].move, true);
                scene.animateTurn();
                moveIndex++;
    
                updateMoveCounter();
            }
        });

        const solveData = document.querySelector("#solveData");

        function buildRow(rowIndex: number, s1: string, s2: string) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
                
            tr.appendChild(td1);
            tr.appendChild(td2);
            td1.innerHTML = s1;
            td2.innerHTML = s2;

            tr.addEventListener("click", () => {
                if (rowIndex === moveIndex) return;
                while (moveIndex < rowIndex) {
                    scene.cube.stepAlgorithm(solve.moves[moveIndex].move, true);
                    moveIndex++;
                }
                while (moveIndex > rowIndex) {
                    moveIndex--;
                    scene.cube.stepAlgorithm(solve.moves[moveIndex].move, false);
                }
                scene.cube.animationQueue = [];
                scene.cube.commitStickers();
                scene.render();
                updateMoveCounter();
            });

            return tr;
        }

        const tr = buildRow(0, "0.00", "Start");
        solveData.appendChild(tr);
        
        solve.moves.forEach((move, i) => {
            const tr = buildRow(i + 1, move.time.toFixed(2), move.move);
            solveData.appendChild(tr);
        });
    });
}

main();