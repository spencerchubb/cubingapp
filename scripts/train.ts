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

    const categories = [
        "S",
        "AS",
        "Pi",
        "U",
        "L",
        "T",
        "H",
        "O",
    ];
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
        {
            alg: "L' U' L U' L' U2 L",
            category: "AS",
        },
        {
            alg: "R' U' R U' R' U R' F R F' U R",
            category: "AS",
        },
        {
            alg: "F' L F L' U2 L' U2 L",
            category: "AS",
        },
        {
            alg: "L' U R U' L U R'",
            category: "AS",
        },
        {
            alg: "R2 D R' U R D' R' U R' U' R U' R'",
            category: "AS",
        },
        {
            alg: "R U2 R' U2 R' F R F'",
            category: "AS",
        },
        {
            alg: "F R U R' U' R U R' U' F'",
            category: "Pi",
        },
        {
            alg: "R' U' R' F R F' R U' R' U2 R",
            category: "Pi",
        },
        {
            alg: "r U' r2' D' r U r' D r2 U r'",
            category: "Pi",
        },
        {
            alg: "R' F R U F U' R U R' U' F'",
            category: "Pi",
        },
        {
            alg: "R U2 R' U' R U R' U2 R' F R F'",
            category: "Pi",
        },
        {
            alg: "F R' F' R U2 R U' R' U R U2 R'",
            category: "Pi",
        },
        {
            alg: "F R U R' U' F'",
            category: "U",
        },
        {
            alg: "R' U' R U' R' U2 R2 U R' U R U2 R'",
            category: "U",
        },
        {
            alg: "F R2 D R' U R D' R2 U' F'",
            category: "U",
        },
        {
            alg: "r U' r' U r' D' r U' r' D r",
            category: "U",
        },
        {
            alg: "R2 D' R U2 R' D R U2 R",
            category: "U",
        },
        {
            alg: "R2 D R' U2 R D' R' U2 R'",
            category: "U",
        },
        {
            alg: "F' L F L' U' L' U L",
            category: "L",
        },
        {
            alg: "F R' F' R U R U' R'",
            category: "L",
        },
        {
            alg: "R U2 R2' F R F' R U2 R'",
            category: "L",
        },
        {
            alg: "R U R' U R U' R' U R U' R' U R U2 R'",
            category: "L",
        },
        {
            alg: "R' U2 R' D' R U2 R' D R2",
            category: "L",
        },
        {
            alg: "R U2 R D R' U2 R D' R2",
            category: "L",
        },
        {
            alg: "R U R' U' R' F R F'",
            category: "T",
        },
        {
            alg: "L' U' L U L F' L' F",
            category: "T",
        },
        {
            alg: "r U' r2' D' r U2 r' D r2 U r'",
            category: "T",
        },
        {
            alg: "R U2 R' U' R U' R2 U2 R U R' U R",
            category: "T",
        },
        {
            alg: "r' D' r U r' D r U' r U r'",
            category: "T",
        },
        {
            alg: "r' U r U2 R2 F R F' R",
            category: "T",
        },
        {
            alg: "R U R' U R U' R' U R U2 R'",
            category: "H",
        },
        {
            alg: "F R U R' U' R U R' U' R U R' U' F'",
            category: "H",
        },
        {
            alg: "r U' r2' D' r U' r' D r2 U r'",
            category: "H",
        },
        {
            alg: "R U2 R2 F R F' U2 R' F R F'",
            category: "H",
        },
        {
            alg: "R U R' F' R U R' U' R' F R2 U' R'",
            category: "O",
        },
        {
            alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
            category: "O",
        },
    ];
    let selectedAlgs = [];

    // Initialize selectedAlgs with the first 6 algs. Kind of hacky
    for (let i = 0; i < 6; i++) {
        selectedAlgs.push(algs[i]);
    }

    let currAlg = 0;
    function loadCurrAlg() {
        let alg = selectedAlgs[currAlg];
        scene.cube.new();
        scene.cube.execAlgReverse(alg.alg);
        scene.cube.setStickers();
        scene.render();
    }

    // To start off, load alg 0
    loadCurrAlg();

    function nextAlg() {
        currAlg += 1;
        if (currAlg >= selectedAlgs.length) {
            currAlg = 0;
        }
        loadCurrAlg();
    }

    const categoriesDiv = document.querySelector("#categories-div");
    let inputs = [];
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];

        const input = document.createElement("input");
        input.type = "checkbox";
        inputs.push(input);

        const categoryDiv = document.createElement("div");
        categoryDiv.addEventListener("click", event => {
            input.checked = !input.checked;
        
            // Update selectedAlgs
            currAlg = 0;
            selectedAlgs = [];
            for (let j = 0; j < categories.length; j++) {
                // Iterate through the checked inputs
                if (inputs[j].checked) {
                    for (let k = 0; k < algs.length; k++) {
                        if (algs[k].category == categories[j]) {
                            selectedAlgs.push(algs[k]);
                        }
                    }
                }
            }
        });
        categoryDiv.style.display = "flex";
        categoryDiv.style.flexDirection = "row";
        categoryDiv.style.alignItems = "center";

        const p = document.createElement("p");
        p.textContent = category;
        p.style.paddingLeft = "8px";
        p.style.color = "white";

        categoryDiv.appendChild(input);
        categoryDiv.appendChild(p);
        
        categoriesDiv.appendChild(categoryDiv);
    };
}

main();