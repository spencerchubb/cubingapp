import * as scene from "./scene";
import { addListenersForLeftModal } from "./ui";
import { AE, addAnalyticsEvent } from "./analytics";
import { shuffle } from "./util";
const algData: any[] = require("./alg-data.json");

function main() {
    addAnalyticsEvent(AE.ViewTrain);

    // Initial canvas render
    scene.renderCanvas();

    addListenersForLeftModal();

    document.querySelector("#try-again").addEventListener("click", () => {
        loadCurrAlg();
    });

    document.querySelector("#next").addEventListener("click", () => {
        nextAlg();
    });

    let showSettings = false;
    const settingsBackground: HTMLElement = document.querySelector("#settingsBackground");
    const settingsBody: HTMLElement = document.querySelector("#settingsBody");
    document.querySelector("#trainSettingsButton").addEventListener("click", () => {
        settingsBackground.style.display = "flex";
        showSettings = true;
    });
    settingsBackground.addEventListener("click", (event) => {
        if (event.target !== settingsBackground) return;

        settingsBackground.style.display = "none";
        showSettings = false;
    });

    function isXYZ(c) {
        return c === "x" || c === "y" || c === "z";
    }

    const cubeRotationInput: HTMLInputElement = document.querySelector("#cubeRotationInput");
    let cubeRotations = [];
    cubeRotationInput.addEventListener("keydown", (event) => {
        const data = event.key;
        if (isXYZ(data)) {
            cubeRotations.push(data);
        } else if (data === "'" || data === "2") {
            if (isXYZ(cubeRotations[cubeRotations.length - 1])) {
                cubeRotations[cubeRotations.length - 1] += data;
            }
        } else if (data === "Backspace") {
            cubeRotations.pop();
        }

        cubeRotationInput.value = cubeRotations.join(" ");
    });
    const rotateSettingsKeys = document.querySelectorAll(".rotateSettingsKey");
    rotateSettingsKeys.forEach(key => {
        key.addEventListener("click", () => {
            const value = key.getAttribute("value");
            if (value === "Backspace") {
                cubeRotations.pop();
            } else {
                cubeRotations.push(value);
            }

            cubeRotationInput.value = cubeRotations.join(" ");
        });
    });

    document.addEventListener('keydown', (event) => {
        if (showSettings) return;

        if (event.key === " ") {
            // Prevent space from scrolling down
            event.preventDefault();

            handleShowSolution();
        } else if (event.key == "Backspace") {
            loadCurrAlg();
        } else if (event.key == "Enter") {
            nextAlg();
        } else if (scene.cube.matchKeyToTurn(event)) {
            scene.animateTurn();
        }
    });

    const algSetSelect = document.querySelector("#alg-set-select");
    algSetSelect.addEventListener("change", (event) => {
        const setName = (event.target as HTMLInputElement).value;
        const set = findAlgSet(setName);
        
        if (set.cube == "2x2") {
            scene.setNumLayers(2);
        } else if (set.cube == "3x3") {
            scene.setNumLayers(3);
        }

        renderCategories(set);
        renderAlgs(set);
    });
    algData.forEach(algSet => {
        const option = document.createElement("option");
        option.textContent = algSet.set;
        option.value = algSet.set;
        algSetSelect.appendChild(option);
    });


    // Iterate 'algData' and find the desired set. 
    function findAlgSet(set: string) {
        for (let i = 0; i < algData.length; i++) {
            const algSet = algData[i];
            if (algSet.set === set) {
                return algSet;
            }
        }
    }

    const aufOptions = ["", "U", "U2", "U'"];
    function generateRandAUF() {
        return aufOptions[Math.floor(Math.random() * 4)];
    }

    let selectedAlgs;

    let currAlg = -1;
    let preAUF;
    let postAUF;
    function loadCurrAlg() {
        handleHideSolution();

        let alg = selectedAlgs[currAlg];
        let algText = alg.alg;

        preAUF = generateRandAUF();
        postAUF = generateRandAUF();
        if (preAUF !== "") {
            algText = preAUF + " " + algText;
        }
        if (postAUF !== "") {
            algText += " " + postAUF;
        }

        scene.cube.new();

        // Perform the rotation that the user specified in settings.
        scene.cube.execAlg(cubeRotationInput.value);
        
        scene.cube.execAlgReverse(algText);
        scene.cube.commitStickers();
        scene.render();
    }

    function nextAlg() {
        currAlg += 1;
        if (currAlg >= selectedAlgs.length) {
            currAlg = 0;
            selectedAlgs = shuffle([...selectedAlgs]);
        }

        loadCurrAlg();
    }

    const solutionText: HTMLElement = document.querySelector("#solution-text");
    solutionText.addEventListener("click", handleShowSolution);
    function handleShowSolution() {
        let alg = selectedAlgs[currAlg];
        let algText = alg.alg;

        if (alg.symmetry == "2") {
            if (preAUF != "" && preAUF != "U2") {
                algText = preAUF + " " + algText;
            }
        } else if (alg.symmetry == "4") {
            // Do nothing
        } else {
            if (preAUF != "") {
                algText = preAUF + " " + algText;
            }
        }

        solutionText.textContent = algText;
        solutionText.classList.remove("show-solution-clickable");
    }
    function handleHideSolution() {
        solutionText.textContent = "Show solution";
        solutionText.classList.add("show-solution-clickable");
    }

    const categoriesDiv = document.querySelector("#categories-div");

    function renderCategories(set: any) {
        categoriesDiv.innerHTML = "";

        let categories = set.categories;
        let algs = set.algs;

        selectedAlgs = shuffle([...algs]);

        let inputs = [];
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];

            const input = document.createElement("input");
            input.addEventListener("change", () => {
                let categoriesToFilter = categories.filter((_, j) => inputs[j].checked);
                if (categoriesToFilter.length !== 0) {
                    // If there are some, filter down to those categories
                    selectedAlgs = [];
                    algs.forEach((alg, j) => {
                        if (categoriesToFilter.includes(alg.category)) {
                            selectAlg(j);
                            selectedAlgs.push(alg);
                        } else {
                            deselectAlg(j);
                        }
                    });
                } else {
                    // If there are no filters, use all algs
                    algs.forEach((_, j) => {
                        selectAlg(j);
                    });
                    selectedAlgs = algs;
                }

                currAlg = -1;
                selectedAlgs = shuffle([...selectedAlgs]);
            });
            input.id = category;
            input.type = "checkbox";
            inputs.push(input);

            const categoryDiv = document.createElement("div");
            categoryDiv.style.display = "flex";
            categoryDiv.style.flexDirection = "row";
            categoryDiv.style.alignItems = "center";
            categoryDiv.style.padding = "0 8px";

            const label = document.createElement("label");
            // for attribute of the label should match the id of the input
            label.htmlFor = category;
            label.textContent = category;
            label.style.paddingLeft = "8px";
            label.style.color = "white";

            categoryDiv.appendChild(input);
            categoryDiv.appendChild(label);

            categoriesDiv.appendChild(categoryDiv);
        }
    }

    const algsTableBody = document.querySelector("#algs-table-body");

    // Array of td elements that indicate whether an algorithm is selected
    let selectedTdArray = [];

    // Booleans that indicate which algs are selected
    let isSelected = [];

    function renderAlgs(set: any) {
        algsTableBody.innerHTML = "";

        let algs = set.algs;

        selectedTdArray = [];
        isSelected = [];

        for (let i = 0; i < algs.length; i++) {
            isSelected.push(true);

            const selectedTd = document.createElement("td");
            selectedTd.textContent = "Yes";
            selectedTd.style.color = "#c7ffc7";
            selectedTdArray.push(selectedTd);

            const algTd = document.createElement("td");
            algTd.textContent = algs[i].alg;

            const categoryTd = document.createElement("td");
            categoryTd.textContent = algs[i].category;

            const tr = document.createElement("tr");
            tr.appendChild(selectedTd);
            tr.appendChild(algTd);
            tr.appendChild(categoryTd);

            algsTableBody.appendChild(tr);
        }
    }

    function selectAlg(n: number) {
        isSelected[n] = true;
        const selectedTd = selectedTdArray[n];
        selectedTd.textContent = "Yes";
        selectedTd.style.color = "#c7ffc7";
    }

    function deselectAlg(n: number) {
        isSelected[n] = false;
        const selectedTd = selectedTdArray[n];
        selectedTd.textContent = "No";
        selectedTd.style.color = "white";
    }

    // Initial render
    handleHideSolution();
    renderCategories(algData[0]);
    renderAlgs(algData[0]);
}

main();