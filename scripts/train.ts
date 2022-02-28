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
        if (event.key === " ") {
            nextAlg();
        } else if (scene.cube.matchKeyToTurn(event.key)) {
            scene.animateTurn(null);
        }
    });

    const algs = [
        {
            alg: "R U R' U R U2 R'",
            category: "S",
        },
        {
            alg: "R U R' U R' F R F' R U2 R'",
            category: "S",
        },
        {
            alg: "F R' F' R U2 R U2 R'",
            category: "S",
        },
        {
            alg: "R U' L' U R' U' L",
            category: "S",
        },
        {
            alg: "R U R' U R U' R D R' U' R D' R2",
            category: "S",
        },
        {
            alg: "L' U2 L U2 L F' L' F",
            category: "S",
        },
    ];

    let currAlg = 0;
    function loadCurrAlg() {
        let alg = algs[currAlg];
        scene.cube.new();
        scene.cube.execAlgReverse(alg.alg);
        scene.cube.setStickers();
        scene.render();
    }

    // To start off, load alg 0
    loadCurrAlg();

    function nextAlg() {
        currAlg += 1;
        if (currAlg >= algs.length) {
            currAlg = 0;
        }
        loadCurrAlg();
    }
}

main();