import * as scene from "./scene";
import { initCanvas, listenToNavButtons } from "./ui";
const algData: any[] = require("./alg-data.json");

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
            handleShowSolution();
        } else if (event.key == "Enter") {
            nextAlg();
        } else if (scene.cube.matchKeyToTurn(event.key)) {
            scene.animateTurn(null);
        }
    });

    const algSetSelect = document.querySelector("#alg-set-select");
    algSetSelect.addEventListener("change", (event) => {
        const set = (event.target as HTMLInputElement).value;
        findAlgSet(set);
        renderCategories();
    });
    algData.forEach(algSet => {
        const option = document.createElement("option");
        option.textContent = algSet.set;
        option.value = algSet.set;
        algSetSelect.appendChild(option);
    });

    // The initial 'selectedAlgSet' should just be the first alg set.
    let selectedAlgSet = algData[0];

    // Iterate 'algData' and find the desired set. 
    // Assign this alg set to the global variable 'selectedAlgSet'
    function findAlgSet(set: string) {
        console.log("Displaying alg set:", set);

        for (let i = 0; i < algData.length; i++) {
            const algSet = algData[i];
            if (algSet.set === set) {
                selectedAlgSet = algSet;
                break;
            }
        }
    }

    let selectedAlgs = [];

    function generateRandAUF() {
        const n = Math.floor(Math.random() * 4);
        if (n == 0) {
            return "";
        } else if (n == 1) {
            return "U";
        } else if (n == 2) {
            return "U2";
        } else {
            return "U'";
        }
    }

    let currAlg = 0;
    let preAUF;
    let postAUF;
    function loadCurrAlg() {
        let alg = selectedAlgs[currAlg];
        let algText = alg.alg;

        if (randomAUF.checked) {
            preAUF = generateRandAUF();
            postAUF = generateRandAUF();
            if (preAUF !== "") {
                algText = preAUF + " " + algText;
            }
            if (postAUF !== "") {
                algText += " " + postAUF;
            }
        }
        console.log(algText);

        scene.cube.new();
        scene.cube.execAlgReverse(algText);
        scene.cube.setStickers();
        scene.render();
    }

    // To start off, load alg 0
    // loadCurrAlg();

    function nextAlg() {
        currAlg += 1;
        if (currAlg >= selectedAlgs.length) {
            currAlg = 0;
        }
        handleHideSolution();
        loadCurrAlg();
    }

    const solutionText: HTMLElement = document.querySelector("#solution-text");
    const showSolutionButton: HTMLElement = document.querySelector("#show-solution-button");
    showSolutionButton.addEventListener("click", handleShowSolution);
    function handleShowSolution() {
        let alg = selectedAlgs[currAlg];
        let algText = alg.alg;

        if (randomAUF.checked && preAUF !== "") {
            algText = preAUF + " " + algText;
        }

        solutionText.textContent = `Solution: ${algText}`;
        solutionText.style.display = "block";
        showSolutionButton.style.display = "none";
    }
    function handleHideSolution() {
        solutionText.style.display = "none";
        showSolutionButton.style.display = "block";
    }

    const categoriesDiv = document.querySelector("#categories-div");

    function renderCategories() {
        categoriesDiv.innerHTML = "";

        let categories = selectedAlgSet.categories;
        let algs = selectedAlgSet.algs;
        
        let inputs = [];
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];

            const input = document.createElement("input");
            input.addEventListener("change", () => {
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
            input.id = category;
            input.type = "checkbox";
            inputs.push(input);

            const categoryDiv = document.createElement("div");
            // categoryDiv.addEventListener("click", event => {
            //     input.checked = !input.checked;

            //     // Update selectedAlgs
            //     currAlg = 0;
            //     selectedAlgs = [];
            //     for (let j = 0; j < categories.length; j++) {
            //         // Iterate through the checked inputs
            //         if (inputs[j].checked) {
            //             for (let k = 0; k < algs.length; k++) {
            //                 if (algs[k].category == categories[j]) {
            //                     selectedAlgs.push(algs[k]);
            //                 }
            //             }
            //         }
            //     }
            // });
            categoryDiv.style.display = "flex";
            categoryDiv.style.flexDirection = "row";
            categoryDiv.style.alignItems = "center";

            const label = document.createElement("label");
            // for attribute of the label should match the id of the input
            label.htmlFor = category;
            label.textContent = category;
            label.style.paddingLeft = "8px";
            label.style.color = "white";

            categoryDiv.appendChild(input);
            categoryDiv.appendChild(label);

            categoriesDiv.appendChild(categoryDiv);
        };
    }

    const randomAUF: HTMLInputElement = document.querySelector("#random-auf-check");
    
    // Initial render
    handleHideSolution();
    renderCategories();
}

main();