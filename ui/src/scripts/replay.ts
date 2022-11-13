import * as scene from "./scene";
import { addListenersForLeftModal } from "./ui";
import { url } from "./vars/vars";
import { renderModal } from "./modal";

type Solve = {
    Uid: number,
    Time: number,
    InitialCubeState: number[],
    Moves: { Move: string, Time: number }[],
}
type GetSolveResponse = {
    Success: boolean,
    SolveRecord: {
        Id: number,
        Solve: Solve,
    },
}

async function main() {
    scene.setDragEnabled(false);

    // Initial canvas render
    // scene.renderCanvas(); TODO

    addListenersForLeftModal();

    document.querySelector("#share").addEventListener("click", () => {
        const url = document.location.href;
        navigator.clipboard.writeText(url).then(() => {
            const [modal, removeModal] = renderModal();
            modal.innerHTML = `
            <p style="font-weight: bold; padding-top: 1rem;">Link copied!</p>
            <p style="padding-top: 0.5rem;">Give the link to a friend</p>
            <p style="padding-top: 1rem; text-align: center;">${document.location}</p>
            `;
        });
    });

    const searchParams = new URLSearchParams(window.location.search);

    const solveID: number = parseInt(searchParams.get("solve"));
    const res = await fetch(`${url}/getSolve`, {
        method: "POST",
        body: JSON.stringify({ Id: solveID }),
    });
    const solve: GetSolveResponse = await res.json();
    console.log(solve);
    renderSolve(solve);

    renderBasedOnWidth();
}

function renderSolve(solveResponse: GetSolveResponse) {
    const solve = solveResponse.SolveRecord.Solve;

    // TODO
    // scene.cube.setCubeState(solve.InitialCubeState);
    // scene.render();

    let moveIndex = 0;
    let moveElements: HTMLElement[];
    const moveCounter = document.querySelector("#moveCounter");
    function updateMoveCounter(newMoveIndex: number) {
        // Revert old one to default color
        moveElements[moveIndex].style.background = '';

        moveIndex = newMoveIndex;
        moveCounter.textContent = `${moveIndex} / ${solve.Moves.length}`;

        // Highlight current one
        moveElements[moveIndex].style.background = 'green';
    }

    document.querySelector("#leftButton").addEventListener("click", (event) => {
        if (moveIndex > 0) {
            // TODO
            // scene.cube.stepAlgorithm(solve.Moves[moveIndex - 1].Move, false);
            // scene.animateTurn();

            updateMoveCounter(moveIndex - 1);
        }
    });
    document.querySelector("#rightButton").addEventListener("click", (event) => {
        if (moveIndex < solve.Moves.length) {
            // TODO
            // scene.cube.stepAlgorithm(solve.Moves[moveIndex].Move, true);
            // scene.animateTurn();

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
        absoluteStartTime = Date.now();
        relativeStartTime = solve.Moves[moveIndex].Time;
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
            const ms = (solve.Moves[moveIndex].Time - relativeStartTime) * 1000 - (Date.now() - absoluteStartTime);
            setTimeout(step, ms);
        }
        function step() {
            if (paused) return;
            // TODO
            // scene.cube.stepAlgorithm(solve.Moves[moveIndex].Move, true);
            // scene.animateTurn();
            updateMoveCounter(moveIndex + 1);
            if (moveIndex === solve.Moves.length) {
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
                // TODO
                // scene.cube.stepAlgorithm(solve.Moves[newMoveIndex].Move, true);
                newMoveIndex++;
            }
            while (newMoveIndex > rowIndex) {
                newMoveIndex--;
                // TODO
                // scene.cube.stepAlgorithm(solve.Moves[newMoveIndex].Move, false);
            }
            // TODO
            // scene.cube.animationQueue = [];
            // scene.cube.commitStickers();
            // scene.render();
            updateMoveCounter(newMoveIndex);
        });

        return tr;
    }

    moveElements = Array(solve.Moves.length);

    const tr = buildRow(0, "0.00", "Start");
    moveElements[0] = tr;

    solve.Moves.forEach((move, i) => {
        const tr = buildRow(i + 1, move.Time.toFixed(2), move.Move);
        moveElements[i + 1] = tr;
    });

    const fragment = document.createDocumentFragment();
    moveElements.forEach(moveEle => fragment.appendChild(moveEle));
    solveData.appendChild(fragment);

    // Initial call to updateMoveCounter
    updateMoveCounter(0);
}

window.addEventListener("resize", () => {
    renderBasedOnWidth();
});

function determineLayoutType() {
    const clientWidth = document.documentElement.clientWidth;

    // 725 was chosen mostly arbitrarily
    return clientWidth < 725 ? "narrow" : "wide";
}

function renderBasedOnWidth() {
    const layoutType = determineLayoutType();

    const solveData: HTMLElement = document.querySelector("#solveData");

    if (layoutType === "narrow") {
        solveData.parentElement.parentElement.parentElement.style.overflowY = "scroll";
        solveData.parentElement.parentElement.style.width = "100%";
        solveData.parentElement.parentElement.style.overflowY = "";
        solveData.parentElement.style.width = "100%";
        return;
    }
    solveData.parentElement.parentElement.parentElement.style.overflowY = "";
    solveData.parentElement.parentElement.style.width = "";
    solveData.parentElement.parentElement.style.overflowY = "scroll";
    solveData.parentElement.style.width = "";
}

function renderOnly3x3(solve) {
    const glDiv = document.querySelector("#glDiv");
    glDiv.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; width: 320px; height: 320px;">
        <p style="color: white; text-align: center;">At this time, we can only do 3x3 replays, but this is a ${solve.puzzle}x${solve.puzzle} replay! More coming soon...</p>
    </div>
    `;
}

main();