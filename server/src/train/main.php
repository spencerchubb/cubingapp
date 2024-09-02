<style>
#subsetsDiv {
    .expandableChild {
        padding-left: 32px;
        padding-right: 16px;
    }
}

.frequencyInput {
    width: 60px;
    padding: 0;
    padding-bottom: 4px;
    outline: none;
    border-bottom: solid 2px #666;
    box-shadow: none;
    border-radius: 0;
    box-sizing: border-box;

    &:focus {
        box-shadow: none;
        outline: none;
        border-bottom: solid 2px white;
    }
}
</style>

<script type="module">
import { scramble } from "../../js/scramble/index.js";
import { AlgSimplify, AlgToString, simplifySQ1Alg, StringToAlg } from "../../js/alg/index.js";

function round(val, digits) {
    const pow = Math.pow(10, digits);
    return Math.floor(val * pow) / pow;
}

function removeParen(alg) {
    return alg.replaceAll("(", "").replaceAll(")", "");
}

function invertAlg(alg) {
    if (!alg) return "";
    return alg
        .split(" ")
        .map(invertMove)
        .reverse()
        .join(" ");
}

function invertMove(move) {
    if (move === "/") {
        // SQ1 slash
        return "/";
    } else if (move.includes(",")) {
        // SQ1 move
        const [top, bot] = move.split(",").map(n => parseInt(n));
        return `${-top},${-bot}`;
    } else if (move.endsWith("'")) {
        return move.slice(0, -1);
    } else if (move.endsWith("2")) {
        return move;
    }

    return move + "'";
}

const rotMap = {
    "y": {
        "U": "U",
        "D": "D",
        "F": "R",
        "B": "L",
        "L": "F",
        "R": "B",
    },
    "y2": {
        "U": "U",
        "D": "D",
        "F": "B",
        "B": "F",
        "L": "R",
        "R": "L",
    },
    "y'": {
        "U": "U",
        "D": "D",
        "F": "L",
        "B": "R",
        "L": "B",
        "R": "F",
    },
};
function removeRotations(alg) {
    let moves = alg.split(" ");
    const result = [];

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] in rotMap) {
            for (let j = i+1; j < moves.length; j++) {
                const char = moves[j][0];
                if (rotMap[moves[i]][char]) {
                    moves[j] = moves[j].replace(char, rotMap[moves[i]][char]);
                }
            }
        } else {
            result.push(moves[i]);
        }
    }

    return result.join(" ");
}

function onlyRUF(alg) {
    return alg
        .split(" ")
        .every(move => ["R", "U", "F"].includes(move[0]));
}

function getScramble(_before, _after, algs) {
    let algObj = algs[0];

    // 2x2 algs should only contain RUF moves
    if (algSet.puzzle === "2x2") {
        let i = 1;
        while (!onlyRUF(alg.alg)) {
            algObj = algs[i];
            i++;
        }
    }

    let alg = algObj.alg;
    alg = removeParen(alg);

    // Remove rotations because they mess with the scrambler.
    alg = removeRotations(alg);

    alg = `${_before} ${algObj.setup ?? ""} ${invertAlg(alg)} ${invertAlg(_after)}`;
    
    return scramble(algSet.puzzle, alg);
}

// List of indices
let caseHistory = [];

function renderCase(caseIndex) {
    currentCase = availableCases[caseIndex];
    const { subsetName, caseName } = currentCase;

    const _case = subsets[subsetName][caseName];
    const algs = Object.entries(_case.algs).map(entry => {
        return { alg: entry[0], ...entry[1] };
    });
    const _before = before();
    const _after = after();
    const scram = getScramble(_before, _after, algs);
    nameText.textContent = caseName;
    scrambleText.textContent = scram;

    solutionDiv.innerHTML = algs.map(alg => {
        alg = alg.alg;
        alg = removeParen(alg);
        alg = `${_after} ${alg}`;

        if (algSet.puzzle === "SQ1") {
            alg = simplifySQ1Alg(alg);
        } else {
            alg = AlgToString(AlgSimplify(StringToAlg(alg)));
        }

        return `<p>&#8226; ${alg}</p>`;
    }).join("");

    // Close solution
    solutionExpandable.classList.remove("expandableOpen");

    frequencyInput.value = _case.freq;
}

function prevCase() {
    if (caseHistory.length <= 1) {
        alert("No previous cases yet");
        return;
    }
    caseHistory.pop();

    const caseIndex = caseHistory[caseHistory.length - 1];
    renderCase(caseIndex);
}

function nextCase() {
    const randIndex = Math.floor(Math.random() * availableCases.length);
    caseHistory.push(randIndex);
    renderCase(randIndex);
}

const subsets = {};
Object.entries(algSet.cases).forEach(([caseName, caseData]) => {
    if (!subsets[caseData.subset]) {
        subsets[caseData.subset] = {};
    }

    subsets[caseData.subset][caseName] = {
        algs: caseData.algs,
        freq: 1,
    }
});

const cachedData = JSON.parse(localStorage.getItem(location.pathname) ?? "{}");
function cachedDataValid() {
    // Schema should be as follows
    // { subset: { case: number representing frequency } }

    if (typeof cachedData !== "object") return false;
    const subsetName = Object.keys(cachedData)[0];
    const cases = cachedData[subsetName];
    if (typeof cases !== "object") return false;
    const caseName = Object.keys(cases)[0];
    const freq = cases[caseName];
    if (typeof freq !== "number") return false;
    return true;
}

if (cachedDataValid()) {
    Object.entries(cachedData).forEach(([k1, v1]) => {
        if (k1 in subsets) {
            Object.entries(v1).forEach(([k2, v2]) => {
                if (k2 in subsets[k1]) {
                    subsets[k1][k2].freq = v2;
                }
            });
        }
    });
}

let availableCases = getAvailableCases(subsets);
let currentCase;

subsetsDiv.innerHTML = Object.entries(subsets).map(([subsetName, cases]) => {
    return `<div class="expandable">
        <button class="expandableButton expandableSubset">
            <p>${subsetName}</p>
            <div style="flex-grow: 1;"></div>
            <input data-subset="${subsetName}" type="number" min="0" class="frequencyInput" placeholder="Freq" />
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92"></path></svg>
        </button>
        <div class="expandableChild">
            <div style="display: flex;">
                <p style="font-weight: bold; font-size: 14px;">Case</p>
                <div style="flex: 1;"></div>
                <p style="font-weight: bold; font-size: 14px;">Frequency</p>
            </div>
            ${Object.entries(cases).map(([caseName, caseData]) => {
                return `<div style="display: flex; align-items: center; padding: 4px 0; gap: 16px;">
                    <p>${caseName}</p>
                    <div style="flex: 1;"></div>
                    <input data-subset="${subsetName}" data-case="${caseName}" type="number" min="0" class="frequencyInput" value="${caseData.freq}" />
                </div>`;
            }).join("")}
        </div>
    </div>`;
}).join("");

function getAvailableCases(subsets) {
    let availableCases = [];
    Object.entries(subsets).forEach(([subsetName, cases]) => {
        Object.entries(cases).forEach(([caseName, caseData]) => {
            for (let i = 0; i < Math.ceil(caseData.freq); i++) {
                availableCases.push({ subsetName, caseName });
            }
        });
    });

    // If all frequencies are 0, make all cases available
    if (availableCases.length === 0) {
        Object.entries(subsets).forEach(([subsetName, cases]) => {
            Object.entries(cases).forEach(([caseName, caseData]) => {
                availableCases.push({ subsetName, caseName });
            });
        });
    }

    console.log("subsets:", subsets);
    console.log("availableCases:", availableCases);
    return availableCases;
}

function cacheData(subsets) {
    let toCache = {};

    Object.entries(subsets).forEach(([subsetName, cases]) => {
        toCache[subsetName] = {};

        Object.entries(cases).forEach(([caseName, _case]) => {
            toCache[subsetName][caseName] = _case.freq;
        });
    });

    localStorage.setItem(location.pathname, JSON.stringify(toCache));
}

nextCase();

frequencyInput.onchange = event => {
    event.stopPropagation();
    const value = Math.ceil(event.target.value);

    const { subsetName, caseName } = currentCase;
    subsets[subsetName][caseName].freq = value;

    // Update the corresponding frequencyInput
    document.querySelector(`.frequencyInput[data-case="${caseName}"]`).value = value;

    cacheData(subsets);
    availableCases = getAvailableCases(subsets);
}

document.querySelectorAll(".frequencyInput").forEach(ele => {
    ele.onclick = event => event.stopPropagation();

    ele.onchange = event => {
        const value = Math.ceil(event.target.value);

        const subsetName = ele.getAttribute("data-subset");
        const caseName = ele.getAttribute("data-case");

        if (caseName) {
            // If caseName, update specific case
            subsets[subsetName][caseName].freq = value;

            // Update the main frequencyInput if it's the current case
            if (subsetName === currentCase.subsetName && caseName === currentCase.caseName) {
                frequencyInput.value = value;
            }
        } else {
            // If no caseName, update the whole subset
            Object.keys(subsets[subsetName]).forEach(caseName => {
                subsets[subsetName][caseName].freq = value;

                if (subsetName === currentCase.subsetName && caseName === currentCase.caseName) {
                    frequencyInput.value = value;
                }

                // Update all frequencyInputs in the subset
                document.querySelectorAll(`.frequencyInput[data-subset="${subsetName}"]`).forEach(ele => {
                    ele.value = event.target.value;
                });
            });
        }

        cacheData(subsets);
        availableCases = getAvailableCases(subsets);
    };
});

leftArrow.onclick = () => prevCase();
rightArrow.onclick = () => nextCase();

frequencyQuestionButton.onclick = () => alert(
`0 = Never
Lower = Less frequent
Higher = More frequent`);

document.querySelectorAll(".expandableButton").forEach(ele => {
    ele.onclick = () => {
        ele.parentElement.classList.toggle("expandableOpen");
    }
});
</script>