import * as scene from "./scene";
import { addListenersForLeftModal } from "./ui";
import { AE, addAnalyticsEvent } from "./analytics";
import { getAlgs, getOrientation, setAlgs, setOrientation } from "./store";
import { randInt } from "./common/rand";
import * as slide from "./slide";

const algData: any[] = require("./alg-data.json");
type AlgSet = { cube: string, name: string, categories: string[], algs: any[] };

type State =  {
    solutionShown: boolean,
    retried: boolean,
    solved: boolean,
    settingsOpen: boolean,
    preRotation: string,
}

let state: State = {
    solutionShown: false,
    retried: false,
    solved: false,
    settingsOpen: false,
    preRotation: "",
};

/**
 * Series produces 2, 5, 9, 14, 20, 27, 35, 44, 54, 65, 77, 80...
 */
export function series(n: number) {
    if (n <= 0) {
        return 2;
    }
    return series(n - 1) + n + 2;
}

type TrainingElement = {
    alg: any
    score: number,
}

/** Move the first element of arr to position n. Mutate arr in place */
function move(arr: Array<any>, n: number) {
    const temp = arr[0];
    for (let i = 0; i < n; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n] = temp;
}

export function demoteAlg(algs: Array<TrainingElement>) {
    algs[0].score = 0;
    move(algs, series(0));
}

/** Mutate algs in place */
export function promoteAlg(algs: Array<TrainingElement>) {
    algs[0].score++;
    let position = series(algs[0].score);
    const threeFourths = Math.ceil(algs.length * 3 / 4);
    if (position > threeFourths) {
        position = threeFourths + randInt(algs.length - threeFourths);
    }
    move(algs, position);
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
        case "PLL":
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
            
            if (solved(scene.cube.stickers, algSet)) {
                showSolved();

                state.solved = true;
            }
        }
    });

    const algSetSelect = document.querySelector("#alg-set-select");
    algSetSelect.addEventListener("change", (event) => {
        const setName = (event.target as HTMLInputElement).value;
        algSet = findAlgSet(setName);
        
        if (algSet.cube == "2x2") {
            scene.setNumLayers(2);
        } else if (algSet.cube == "3x3") {
            scene.setNumLayers(3);
        }

        renderAlgs(algSet);
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

    const aufOptions = ["", "U", "U2", "U'"];
    function generateRandAUF() {
        return aufOptions[Math.floor(Math.random() * 4)];
    }

    let algs: { score: number, alg: string, category: string, symmetry: string }[];
    let algSet: AlgSet;

    let preAUF;
    let postAUF;
    function loadCurrAlg() {
        hideSolution();

        let alg = algs[0];
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

        scene.cube.execAlg(state.preRotation);
        
        scene.cube.execAlgReverse(algText);
        scene.cube.commitStickers();

        scene.render();
    }

    function nextAlg() {
        if (state.solutionShown || state.retried || !state.solved) {
            demoteAlg(algs);
        } else {
            promoteAlg(algs);
        }
        setAlgs(algSet.name, algs);
        state.solutionShown = false;
        state.retried = false;
        state.solved = false;
        loadCurrAlg();
    }

    const solutionText: HTMLElement = document.querySelector("#solution-text");
    solutionText.addEventListener("click", showSolution);
    function showSolution() {
        state.solutionShown = true;

        let alg = algs[0];
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

    function renderAlgs(set: AlgSet) {
        algSet = set;

        // Remove elements from storedAlgs that are in storedAlgs but not in algs
        // Add elements to storedAlgs that are in algs but not in storedAlgs
        let storedAlgs: any[] = getAlgs(set.name);
        const algsEqual = (a, b) => a.alg === b.alg && a.set === b.set;
        storedAlgs = storedAlgs.filter(storedAlg => {
            return set.algs.find(alg => algsEqual(storedAlg, alg));
        });
        set.algs.forEach(alg => {
            const found = storedAlgs.find(storedAlg => algsEqual(storedAlg, alg));
            if (!found) {
                storedAlgs.push({ score: 0, ...alg });
            }
        });
        algs = storedAlgs;
    }

    // Initial render
    hideSolution();
    renderAlgs(algData[0]);
    state.preRotation = getOrientation();
    loadCurrAlg();

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