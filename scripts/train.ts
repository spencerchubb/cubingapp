import * as scene from "./scene";
import { addListenersForLeftModal } from "./ui";
import { AE, addAnalyticsEvent } from "./analytics";
import { getAlgs, getOrientation, setAlgs, setOrientation } from "./store";
import * as slide from "./slide";
import { promoteAlg, demoteAlg } from "./util";

type TrainingAlg = { score: number, alg: string }
type AlgSet = { cube: string, name: string, algs: string[] };

const algData: AlgSet[] = require("./alg-data.json");


type State =  {
    solutionShown: boolean,
    retried: boolean,
    solved: boolean,
    settingsOpen: boolean,
    preRotation: string,
    algSet: AlgSet,
    algs: TrainingAlg[],
    preAUF: string,
    postAUF: string,
}

let state: State = {
    solutionShown: false,
    retried: false,
    solved: false,
    settingsOpen: false,
    preRotation: "",
    algSet: null,
    algs: [],
    preAUF: "",
    postAUF: "",
};

function applyPre(alg: string, auf: string): string {
    if (auf) {
        return `${auf} ${alg}`;
    }
    return alg;
}

function applyPost(alg: string, auf: string): string {
    if (auf) {
        return `${alg} ${auf}`;
    }
    return alg
}

function matching(stickers: any[], shouldMatch: number[][]): boolean {
    for (let i = 0; i < shouldMatch.length; i++) {
        const first = stickers[shouldMatch[i][0]].face;
        for (let j = 1; j < shouldMatch[i].length; j++) {
            if (first !== stickers[shouldMatch[i][j]].face) {
                return false;
            }
        }
    }
    return true;
}

function solved(stickers: any[], algSet: AlgSet): boolean {
    switch (algSet.name) {
        case "CMLL":
            return matching(stickers, [
                [0, 2, 6, 8],
                [9, 15],
                [29, 35],
                [36, 42],
                [45, 51],
            ]);
        case "OLL":
            return matching(stickers, [
                [0, 1, 2, 3, 4, 5, 6, 7, 8],
                [10, 11, 13, 14, 16, 17],
                [18, 19, 20, 21, 22, 23, 24, 25, 26],
                [27, 28, 30, 31, 33, 34],
                [37, 38, 40, 41, 43, 44],
                [46, 47, 489, 50, 52, 53],
            ]);
        // PLL and ZBLL have same logic
        case "PLL":
        case "ZBLL":
            return matching(stickers, [
                [0, 1, 2, 3, 4, 5, 6, 7, 8],
                [9, 12, 15],
                [29, 32, 35],
                [36, 39, 42],
                [45, 48, 51],
                [10, 11, 13, 14, 16, 17],
                [18, 19, 20, 21, 22, 23, 24, 25, 26],
                [27, 28, 30, 31, 33, 34],
                [37, 38, 40, 41, 43, 44],
                [46, 47, 49, 50, 52, 53],
            ]);
        // case "2x2 CLL":
        // case "2x2 EG1":
        // case "2x2 EG2":
        default: 
            console.error("Not implemented yet:", algSet.name);
    }
}

function renderDrawer() {
    const drawerEle: HTMLElement = document.querySelector("#rightDrawer");
    if (state.settingsOpen) {
        const optionsData = [
            { value: "", text: "White Green" },
            { value: "y'", text: "White Orange" },
            { value: "y2", text: "White Blue" },
            { value: "y", text: "White Red" },
            { value: "z2", text: "Yellow Green" },
            { value: "z2 y", text: "Yellow Orange" },
            { value: "x2", text: "Yellow Blue" },
            { value: "z2 y'", text: "Yellow Red" },
            { value: "x y2", text: "Green White" },
            { value: "x y", text: "Green Red" },
            { value: "x", text: "Green Yellow" },
            { value: "x y'", text: "Green Orange" },
            { value: "x'", text: "Blue White" },
            { value: "x' y", text: "Blue Red" },
            { value: "x' y2", text: "Blue Yellow" },
            { value: "x' y'", text: "Blue Orange" },
            { value: "z y", text: "Orange White" },
            { value: "z", text: "Orange Green" },
            { value: "z y'", text: "Orange Yellow" },
            { value: "z y2", text: "Orange Blue" },
            { value: "z' y'", text: "Red White" },
            { value: "z'", text: "Red Green" },
            { value: "z' y", text: "Red Yellow" },
            { value: "z' y2", text: "Red Blue" },
        ];
        let optionsHTML = "";
        optionsData.forEach(option => {
            const selected = option.value === state.preRotation ? "selected" : "";
            optionsHTML += `<option value="${option.value}" ${selected}>${option.text}</option>`;
        });
        drawerEle.innerHTML = `
        ${slide.renderHeader("Settings")}
        <p>Cube Orientation</p>
        <select id="orientationSelect">
            ${optionsHTML}
        </select>
        `
        ;
        slide.open(drawerEle);
    } else {
        slide.close(drawerEle);
    }
}

export function main() {
    addAnalyticsEvent(AE.ViewTrain);

    // Initial canvas render
    scene.renderCanvas();

    addListenersForLeftModal();

    document.addEventListener('keydown', (event) => {
        if (event.key === " ") {
            // Prevent space from scrolling down
            event.preventDefault();

            showSolution();
        } else if (event.key == "Backspace") {
            retry();
        } else if (event.key == "Enter") {
            nextAlg();
        } else if (scene.cube.matchKeyToTurn(event)) {
            scene.animateTurn();
            
            if (solved(scene.cube.stickers, state.algSet)) {
                showSolved();

                state.solved = true;
            }
        }
    });

    const algSetSelect = document.querySelector("#alg-set-select");
    algSetSelect.addEventListener("change", (event) => {
        const setName = (event.target as HTMLInputElement).value;
        const algSet = findAlgSet(setName);
        renderAlgSet(algSet);
    });
    algData.forEach(algSet => {
        const option = document.createElement("option");
        option.textContent = algSet.name;
        option.value = algSet.name;
        algSetSelect.appendChild(option);
    });


    // Iterate 'algData' and find the desired set. 
    function findAlgSet(set: string) {
        return algData.find(algSet => algSet.name === set);
    }

    function generateRandAUF() {
        const options = ["", "U", "U2", "U'"];
        return options[Math.floor(Math.random() * 4)];
    }

    function loadCurrAlg() {
        hideSolution();

        let alg = state.algs[0].alg;

        state.preAUF = generateRandAUF();
        alg = applyPre(alg, state.preAUF);

        state.postAUF = generateRandAUF();
        alg = applyPost(alg, state.postAUF);

        scene.cube.new();

        scene.cube.execAlg(state.preRotation);
        
        scene.cube.execAlgReverse(alg);
        scene.cube.commitStickers();

        scene.render();
    }

    function nextAlg() {
        if (state.solutionShown || state.retried || !state.solved) {
            demoteAlg(state.algs);
        } else {
            promoteAlg(state.algs);
        }
        setAlgs(state.algSet.name, state.algs);
        state.solutionShown = false;
        state.retried = false;
        state.solved = false;
        loadCurrAlg();
    }

    const solutionText: HTMLElement = document.querySelector("#solution-text");
    solutionText.addEventListener("click", showSolution);
    function showSolution() {
        state.solutionShown = true;

        let alg = state.algs[0].alg;

        alg = applyPre(alg, state.preAUF);

        solutionText.textContent = alg;
        solutionText.classList.remove("show-solution-clickable");
    }
    function hideSolution() {
        solutionText.textContent = "Show solution";
        solutionText.classList.add("show-solution-clickable");
    }
    function showSolved() {
        solutionText.textContent = "Solved!";
        solutionText.classList.remove("show-solution-clickable");
    }

    function retry() {
        state.retried = true;
        loadCurrAlg();
    }

    function renderAlgSet(algSet: AlgSet) {
        state.algSet = algSet;

        if (algSet.cube == "2x2") {
            scene.setNumLayers(2);
        } else if (algSet.cube == "3x3") {
            scene.setNumLayers(3);
        }

        // Remove elements from storedAlgs that are in storedAlgs but not in algs.
        // Add elements to storedAlgs that are in algs but not in storedAlgs.
        let storedAlgs: TrainingAlg[] = getAlgs(algSet.name);

        storedAlgs = storedAlgs.filter(storedAlg => {
            return algSet.algs.find(alg => storedAlg.alg === alg);
        });
        algSet.algs.forEach(alg => {
            const found = storedAlgs.find(storedAlg => storedAlg.alg === alg);
            if (!found) {
                storedAlgs.push({ score: 0, alg });
            }
        });
        state.algs = storedAlgs;

        // When rendering an alg set, load the first alg automatically.
        loadCurrAlg();
    }

    // Initial render
    state.preRotation = getOrientation();
    hideSolution();
    renderAlgSet(algData[0]);

    window.addEventListener("resize", () => {
        renderDrawer();
    });

    document.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains("closeDrawer")) {
            slide.close(document.querySelector("#rightDrawer"));
        } else if (target.id === "next") {
            nextAlg();
        } else if (target.id === "trainSettingsButton") {
            state.settingsOpen = true;
            renderDrawer();
        } else if (target.id === "try-again") {
            retry();
        }
    });

    document.addEventListener("change", (event) => {
        const target = event.target as HTMLOptionElement;
        if (target.id === "orientationSelect") {
            state.preRotation = target.value;
            loadCurrAlg();
            setOrientation(target.value);
        }
    });
}

main();