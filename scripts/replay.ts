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
        scene.cube.setCubeState(solve.initialCubeState);
        scene.render();

        let moveIndex = 0;
        let moveElements: HTMLElement[];
        const moveCounter = document.querySelector("#moveCounter");
        function updateMoveCounter(newMoveIndex: number) {
            // Revert old one to default color
            moveElements[moveIndex].style.background = '';

            moveIndex = newMoveIndex;
            moveCounter.textContent = `${moveIndex} / ${solve.moves.length}`;

            // Highlight current one
            moveElements[moveIndex].style.background = 'green';
        }

        document.querySelector("#leftButton").addEventListener("click", (event) => {
            if (moveIndex > 0) {
                scene.cube.stepAlgorithm(solve.moves[moveIndex - 1].move, false);
                scene.animateTurn();
    
                updateMoveCounter(moveIndex - 1);
            }
        });
        document.querySelector("#rightButton").addEventListener("click", (event) => {
            if (moveIndex < solve.moves.length) {
                scene.cube.stepAlgorithm(solve.moves[moveIndex].move, true);
                scene.animateTurn();
    
                updateMoveCounter(moveIndex + 1);
            }
        });

        let absoluteStartTime;
        let relativeStartTime;
        let paused = true;
        const playPauseButton = document.querySelector("#playPause")
        playPauseButton.addEventListener("click", () => {
            if (!paused) {
                pause();
                return;
            }
            // timeOnStart = solve.moves[moveIndex].time;
            absoluteStartTime = Date.now();
            relativeStartTime = solve.moves[moveIndex].time;
            paused = false;
            playPauseButton.innerHTML = `
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" stroke="white" fill="white"
                viewBox="0 0 54 54" xml:space="preserve"
                style="width: 40px; height: 40px; margin: 4px 8px;">
                <rect x="12" y="8" width="10" height="38" />
                <rect x="32" y="8" width="10" height="38" />
            </svg>
            `;
            function _setTimeout() {
                const ms = (solve.moves[moveIndex].time - relativeStartTime) * 1000 - (Date.now() - absoluteStartTime);
                setTimeout(step, ms);
            }
            function step() {
                if (paused) return;
                scene.cube.stepAlgorithm(solve.moves[moveIndex].move, true);
                scene.animateTurn();
                updateMoveCounter(moveIndex + 1);
                if (moveIndex === solve.moves.length) {
                    pause();
                    return;
                }

                _setTimeout();
            }
            _setTimeout();
        });

        function pause() {
            paused = true;
            playPauseButton.innerHTML = `
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" stroke="white" fill="white"
                viewBox="0 0 54 54" xml:space="preserve"
                style="width: 40px; height: 40px; margin: 4px 8px;">
                <polygon points="15,8 45,27 15,46" />
            </svg>
            `;
        }

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
                let newMoveIndex = moveIndex;
                while (newMoveIndex < rowIndex) {
                    scene.cube.stepAlgorithm(solve.moves[newMoveIndex].move, true);
                    newMoveIndex++;
                }
                while (newMoveIndex > rowIndex) {
                    newMoveIndex--;
                    scene.cube.stepAlgorithm(solve.moves[newMoveIndex].move, false);
                }
                scene.cube.animationQueue = [];
                scene.cube.commitStickers();
                scene.render();
                updateMoveCounter(newMoveIndex);
            });

            return tr;
        }

        moveElements = Array(solve.moves.length);

        const tr = buildRow(0, "0.00", "Start");
        moveElements[0] = tr;
        
        solve.moves.forEach((move, i) => {
            const tr = buildRow(i + 1, move.time.toFixed(2), move.move);
            moveElements[i + 1] = tr;
        });

        const fragment = document.createDocumentFragment();
        moveElements.forEach(moveEle => fragment.appendChild(moveEle));
        solveData.appendChild(fragment);

        // Initial call to updateMoveCounter
        updateMoveCounter(0);
    });
}

main();