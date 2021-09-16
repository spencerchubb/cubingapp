import * as scene from "./scene.js";
import { initCanvas, listenToNavButtons } from "./ui";
import { DEFAULT_SPEED } from "./constants.js";

const speed: number = parseFloat(localStorage.getItem("#keyboardSpeed") || DEFAULT_SPEED) * 1000;
// +200 for latency
const timePerTurn = speed + 200;

export function main() {
    listenToNavButtons();

    initCanvas();

    document.addEventListener("keydown", (event) => {
        if (scene.cube.matchKeyToTurn(event.key)) {
            scene.animateTurn();
        }
    });

    // const alg = "R U R' U' R U R' U'";
    const alg = "R U R' U R U U R'";
    const moves = alg.split(" ");
    let moveIndex = 0;
    let animationRunning = false;

    const startStopAnimation = document.querySelector("#startStopAnimation");
    function toggleStartStop() {
        animationRunning = !animationRunning;
        if (animationRunning) {
            startStopAnimation.textContent = "Pause";
            recursiveTurn();
        } else {
            startStopAnimation.textContent = "Start";
        }
    }
    startStopAnimation.addEventListener("click", (event) => {
        toggleStartStop();
    });

    function recursiveTurn() {
        console.log("recursive call...");
        takeStepInAlgorithm(true);
        moveIndex++;
        scene.animateTurn(() => {
            if (moveIndex < moves.length && animationRunning) {
                recursiveTurn();
            } else {
                toggleStartStop();
            }
        });
    }

    document.querySelector("#leftButton").addEventListener("click", (event) => {
        if (moveIndex > 0) {
            moveIndex--;
            takeStepInAlgorithm(false);
            scene.animateTurn();
        }
    });
    document.querySelector("#rightButton").addEventListener("click", (event) => {
        if (moveIndex < moves.length) {
            takeStepInAlgorithm(true);
            scene.animateTurn();
            moveIndex++;
        }
    });

    function takeStepInAlgorithm(forward: boolean) {
        const move = moves[moveIndex];
        switch (move) {
            case "U":
                scene.cube.turn(1, 0, forward);
                break;
            case "U'":
                scene.cube.turn(1, 0, !forward);
                break;
            case "R":
                scene.cube.turn(0, 0, forward);
                break;
            case "R'":
                scene.cube.turn(0, 0, !forward);
                break;
            default:
                throw new Error("Invalid turn in algorithm: " + move);
        }
    }
}

main();