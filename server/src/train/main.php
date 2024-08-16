<style>
#subsetsDiv {

    .expandableChild {
        padding-left: 32px;
        padding-right: 16px;
    }

    input[type=checkbox] {
        min-width: 18px;
        width: 18px;
        height: 18px;
    }
}
</style>

<script type="module">
import { scramble } from "../../js/scramble/index.js";
import { AlgSimplify, AlgToString, simplifySQ1Alg, StringToAlg } from "../../js/alg/index.js";

let selectedCases = [];
let currentCase;
let canStart = true;
let running = false;
let startTime;
let elapsed;

function round(val, digits) {
    const pow = Math.pow(10, digits);
    return Math.floor(val * pow) / pow;
}

function formatTime(milliseconds) {
    return round(milliseconds / 1000, 2).toFixed(2);
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
    currentCase = selectedCases[caseIndex];
    const { subsetName, caseName } = currentCase;

    const algs = Object.entries(subsets[subsetName][caseName].algs).map(entry => {
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
    if (selectedCases.length === 0) {
        alert("Select at least 1 case to train");
        return;
    }

    const randIndex = Math.floor(Math.random() * selectedCases.length);
    caseHistory.push(randIndex);
    renderCase(randIndex);
}

function calcMean(times) {
    if (!times || !times.length) return "N/A";
    let sum = 0;
    for (let i = 0; i < times.length; i++) sum += times[i];
    let mean = sum / times.length;
    return formatTime(mean);
}

function step(timestamp) {
    if (!running) return;
    if (!startTime) startTime = timestamp;

    elapsed = timestamp - startTime;
    time.textContent = formatTime(elapsed);

    requestAnimationFrame(step);
}

function startTimer() {
    time.style.color = "";

    if (!running && canStart) {
        running = true;

        startTime = undefined;
        requestAnimationFrame(step);

    } else {
        canStart = true;
    }
}

function stopTimer() {
    time.style.color = "#00ff55";

    if (running) {
        // Push to end of list
        subsets[currentCase.subsetName][currentCase.caseName].times.push(Math.floor(elapsed));

        // While more than 5 times, remove from beginning of list
        while (subsets[currentCase.subsetName][currentCase.caseName].times.length > 5)
            subsets[currentCase.subsetName][currentCase.caseName].times.shift();

        document.querySelector(`p[data-case="${currentCase.caseName}"]`).textContent = calcMean(subsets[currentCase.subsetName][currentCase.caseName].times);
        cacheData(subsets);

        // We don't want timer to start on space bar release
        canStart = false;
        running = false;

        startTime = undefined;
        nextCase();
    }
}

document.onkeyup = event => {
    if (event.code === "Space") {
        startTimer();
    }
}
document.onkeydown = event => {
    if (event.code === "Space") {
        event.preventDefault();
        event.stopPropagation();

        stopTimer();
    }
}

time.onmouseup = event => {
    startTimer();
}
time.onmousedown = event => {
    stopTimer();
}

const subsets = {};
Object.entries(algSet.cases).forEach(([caseName, caseData]) => {
    if (!subsets[caseData.subset]) {
        subsets[caseData.subset] = {};
    }

    subsets[caseData.subset][caseName] = {
        algs: caseData.algs,
        selected: true,
        times: [],
    }
});

const cachedData = JSON.parse(localStorage.getItem(location.pathname) ?? "{}");
Object.entries(cachedData).forEach(([k1, v1]) => {
    if (k1 in subsets) {
        Object.entries(v1).forEach(([k2, v2]) => {
            if (k2 in subsets[k1]) {
                subsets[k1][k2].selected = v2.selected;
                subsets[k1][k2].times = v2.times ?? [];
            }
        });
    }
});

subsetsDiv.innerHTML = Object.entries(subsets).map(([subsetName, cases]) => {
    const allSelected = Object.values(cases).map(caseData => caseData.selected).every(e => e);
    return `<div class="expandable">
        <button class="expandableButton expandableSubset">
            <input type="checkbox" checked="${allSelected}" data-subset="${subsetName}" />
            <p>${subsetName}</p>
            <div style="flex-grow: 1;"></div>
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92"></path></svg>
        </button>
        <div class="expandableChild">
            <div style="display: flex;">
                <p style="margin-left: 26px; font-weight: bold; font-size: 14px;">Case</p>
                <div style="flex: 1;"></div>
                <p style="font-weight: bold; font-size: 14px;">mo5</p>
            </div>
        ${Object.entries(cases).map(([caseName, caseData]) => {
            return `<div style="display: flex; align-items: center; padding: 4px 0; gap: 8px;">
                <input type="checkbox" checked="${caseData.selected}" data-subset="${subsetName}" data-case="${caseName}" />
                <p>${caseName}</p>
                <div style="flex: 1;"></div>
                <p data-case="${caseName}">${calcMean(caseData.times)}</p>
            </div>`;
        }).join("")}
        </div>
    </div>`;
}).join("");

function renderSelectedCases(subsets) {
    selectedCases = [];

    Object.entries(subsets).forEach(([subsetName, cases]) => {
        const subsetCheckbox = document.querySelector(`input[data-subset="${subsetName}"`);
        const allSelected = Object.entries(cases).every(([caseName, _case]) => _case.selected);
        subsetCheckbox.checked = allSelected;

        Object.entries(cases).forEach(([caseName, _case]) => {
            if (_case.selected) {
                selectedCases.push({ subsetName, caseName });
            }
            document.querySelector(`input[data-case="${caseName}"`).checked = _case.selected;
        });
    });

    numCasesSelected.textContent = `${selectedCases.length} cases`;
    cacheData(subsets);
}

function cacheData(subsets) {
    let toCache = {};

    Object.entries(subsets).forEach(([subsetName, cases]) => {
        toCache[subsetName] = {};

        Object.entries(cases).forEach(([caseName, _case]) => {
            toCache[subsetName][caseName] = {
                selected: _case.selected,
                times: _case.times,
            }
        });
    });

    localStorage.setItem(location.pathname, JSON.stringify(toCache));
}

renderSelectedCases(subsets);
nextCase();

leftArrow.onclick = () => prevCase();
rightArrow.onclick = () => nextCase();

resetButton.onclick = () => {
    const confirmed = confirm(`Do you want to reset your times for ${document.title}?`);
    if (confirmed) {
        localStorage.removeItem(location.pathname);
        location.reload();
    }
}

allButton.onclick = () => {
    Object.values(subsets).forEach(cases => {
        Object.values(cases).forEach(_case => {
            _case.selected = true;
        });
    });
    renderSelectedCases(subsets);
}

noneButton.onclick = () => {
    Object.values(subsets).forEach(cases => {
        Object.values(cases).forEach(_case => {
            _case.selected = false;
        });
    });
    renderSelectedCases(subsets);
}

document.querySelectorAll("input[type=checkbox]").forEach(ele => {
    ele.onclick = (event) => {
        event.stopPropagation();

        const subsetName = ele.getAttribute("data-subset");
        const caseName = ele.getAttribute("data-case");

        if (caseName) {
            // Check or uncheck the specific case
            subsets[subsetName][caseName].selected = event.target.checked;
        } else {
            // Check or uncheck the entire subset
            Object.values(subsets[subsetName]).forEach(_case => {
                _case.selected = event.target.checked;
            });
        }

        renderSelectedCases(subsets);
    }
});

document.querySelectorAll(".expandableButton").forEach(ele => {
    ele.onclick = () => {
        ele.parentElement.classList.toggle("expandableOpen");
    }
});
</script>