import * as scene from "./scene";
import { Timer } from "./timer";
import { listenToNavButtons } from "./ui";
import * as store from "./store";
import * as db from "./db";
import { Recorder } from "./recorder";

let drawerIndex;
let times = [];
db.getTimes(results => {
    times = results;
});

const timer = new Timer();
const recorder = new Recorder();

export function main() {
    // Initial canvas render
    scene.renderCanvas();

    listenToNavButtons();

    const layerInput = document.querySelector("#layerInput") as HTMLInputElement;
    layerInput.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        if (target.value == "0") {
            renderZeroEasterEgg();
            return;
        }

        // Update state and re-render
        scene.setNumLayers(parseInt(target.value));
        scene.renderCanvas();
    });

    document.querySelector("#solve").addEventListener("click", (event) => {
        scene.newSolvedCube(parseInt(layerInput.value));
    });

    document.querySelector("#scramble").addEventListener("click", (event) => {
        scene.cube.naiveScramble();
        scene.render();
    });

    document.querySelector("#startStop").addEventListener("click", (event) => {
        handleStartStop();
    });

    document.addEventListener("keydown", (event) => {
        // Immediately save the time for precision.
        const time = Date.now();

        if (event.key === " ") {
            // Prevent extra click if spacebar is pressed while a button is focused.
            event.preventDefault();

            handleStartStop();
        }

        const result = scene.cube.matchKeyToTurn(event.key);
        if (result) {
            recorder.addMove(result.notation, time);
            scene.animateTurn();
            return;
        }
    });

    renderDrawer(-1);

    addRightButtonListeners(0);
    addRightButtonListeners(1);
    addRightButtonListeners(2);
}

function addRightButtonListeners(index: number) {
    const button = document.querySelector(`#right${index}`);

    button.addEventListener("click", () => {
        renderDrawer(index);
    });

    button.addEventListener("mouseenter", event => {
        const label: HTMLElement = document.querySelector(`#right${index}Label`);
        label.style.display = "flex";
    });

    button.addEventListener("mouseleave", event => {
        const label: HTMLElement = document.querySelector(`#right${index}Label`);
        label.style.display = "none";
    });
}

function handleStartStop() {
    const time = timer.startStop();

    if (!time) {
        recorder.start(scene.cube.getCubeState());
        return;
    }

    const timeObj = { 
        solveTime: time, 
        initialCubeState: recorder.cubeState,
        moves: recorder.moves,
    };
    db.addTime(timeObj);
    times.push(timeObj);
    if (drawerIndex === 0) { // 0 is the index associated with Times
        renderTimes(document.querySelector("#rightDrawer"));
    }
}

/**
 * 
 * @param index Pass in -1 to close drawer, 0 to show Tips, 1 to show Settings
 */
function renderDrawer(index: number) {
    drawerIndex = index;
    const drawerEle: HTMLElement = document.querySelector("#rightDrawer");
    if (index == -1) {
        drawerEle.style.display = "none";
        return;
    }

    if (index === 0) {
        renderTimes(drawerEle);
    } else if (index === 1) {
        renderSettings(drawerEle);
    } if (index === 2) {
        renderTips(drawerEle);
    }

    document.querySelector("#closeDrawer").addEventListener("click", () => {
        renderDrawer(-1);
    });
    drawerEle.style.display = "flex";
}

function renderTimes(drawerEle: HTMLElement) {
    drawerEle.innerHTML = `
    <div class="row" style="justify-content: space-between; padding: 16px;">
        <p style="font-weight: bold; padding-right: 2rem;">Times</p>
        <svg id="closeDrawer" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>
    </div>
    <div style="overflow-y: auto; height: 100%; padding: 16px; border-top: 1px solid gray;">
        <table id="timesList"></table>
    </div>
    `;
    const timesList = document.querySelector("#timesList");
    for (let i = times.length - 1; i >= 0; i--) {
        const time = times[i];
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        tr.appendChild(td1);
        tr.appendChild(td2);
        td1.textContent = `${i + 1})`;
        td2.className = "solveTime";
        td2.textContent = `${time.solveTime}`;
        td2.addEventListener("click", () => {
            console.log(time);
        });

        timesList.appendChild(tr);
    }
}

function renderSettings(drawerEle: HTMLElement) {
    const storedAngle = store.getAngle();
    const storedSize = store.getSize();
    drawerEle.innerHTML = `
    <div class="row" style="justify-content: space-between; padding: 16px;">
        <p style="font-weight: bold; padding-right: 2rem;">Settings</p>
        <svg id="closeDrawer" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>
    </div>
    <div style="overflow-y: auto; height: 100%; padding: 16px; border-top: 1px solid gray;">
        <p>Angle</p>
        <select id="angleInput">
            <option value="0" ${storedAngle === 0 ? "selected" : ""}>-45&#176;</option>
            <option value="1" ${storedAngle === 1 ? "selected" : ""}>0&#176;</option>
            <option value="2" ${storedAngle === 2 ? "selected" : ""}>45&#176;</option>
        </select>
        <div style="height: 1.5rem;"></div>
        <p>Size</p>
        <select id="sizeSelect">
            <option value="1" ${storedSize === 1 ? "selected" : ""}>1x</option>
            <option value="1.25" ${storedSize === 1.25 ? "selected" : ""}>1.25x</option>
            <option value="1.5" ${storedSize === 1.5 ? "selected" : ""}>1.5x</option>
            <option value="1.75" ${storedSize === 1.75 ? "selected" : ""}>1.75x</option>
            <option value="2" ${storedSize === 2 ? "selected" : ""}>2x</option>
        </select>
        <div style="height: 1.5rem;"></div>
        <p>Show body</p>
        <input id="showBodyCheckbox" type="checkbox" ${scene.showBody ? "checked" : ""} />
        <div style="height: 1.5rem;"></div>
        <p>Animate turns</p>
        <input id="animateTurnsCheckbox" type="checkbox" ${scene.animateTurns ? "checked" : ""} />
    </div>
    `;

    const angleInput: HTMLElement = document.querySelector("#angleInput");
    angleInput.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        // If user leaves the input blank, do not call setYAxisOffset because
        // it will break the cube.
        if (!target.value) return;

        scene.setAngleOffset(parseInt(target.value));
        store.setAngle(target.value);
    });

    const sizeSelect = document.querySelector("#sizeSelect");
    sizeSelect.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        // Update state and re-render
        scene.setSizeMultiplier(parseFloat(target.value));
        scene.renderCanvas();
        store.setSize(target.value);
    });

    const showBodyCheckbox = document.querySelector("#showBodyCheckbox");
    showBodyCheckbox.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        scene.setShowBody(target.checked);
        store.setShowBody(target.checked);
    });

    const animateTurnsCheckbox = document.querySelector("#animateTurnsCheckbox");
    animateTurnsCheckbox.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        scene.setAnimateTurns(target.checked);
        store.setAnimateTurns(target.checked);
    });
}

function renderTips(drawerEle: HTMLElement) {
    drawerEle.innerHTML = `
    <div class="row" style="justify-content: space-between; padding: 16px;">
        <p style="font-weight: bold;">Tips</p>
        <svg id="closeDrawer" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>
    </div>
    <div style="overflow-y: auto; height: 100%; padding: 16px; border-top: 1px solid gray;">
        <p>There are two ways to interact with the cube</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;1. Keyboard - Each action corresponds to a different key. The key mappings are listed below.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;2. Dragging - Click and drag a piece in the direction you want to turn. Or, click outside the cube and drag to rotate the entire cube.</p>
        <div class="col">
            <table id="tips-table" style="margin-top: 12px;">
                <thead>
                    <th>Key</th>
                    <th>Notation</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    <tr>
                        <td>j</td>
                        <td>U</td>
                        <td>Up face clockwise</td>
                    </tr>
                    <tr>
                        <td>f</td>
                        <td>U'</td>
                        <td>Up face counterclockwise</td>
                    </tr>
                    <tr>
                        <td>s</td>
                        <td>D</td>
                        <td>Down face clockwise</td>
                    </tr>
                    <tr>
                        <td>l</td>
                        <td>D'</td>
                        <td>Down face counterclockwise</td>
                    </tr>
                    <tr>
                        <td>h</td>
                        <td>F</td>
                        <td>Front face clockwise</td>
                    </tr>
                    <tr>
                        <td>g</td>
                        <td>F'</td>
                        <td>Front face counterclockwise</td>
                    </tr>
                    <tr>
                        <td>w</td>
                        <td>B</td>
                        <td>Back face clockwise</td>
                    </tr>
                    <tr>
                        <td>o</td>
                        <td>B'</td>
                        <td>Back face counterclockwise</td>
                    </tr>
                    <tr>
                        <td>d</td>
                        <td>L</td>
                        <td>Left face clockwise</td>
                    </tr>
                    <tr>
                        <td>e</td>
                        <td>L'</td>
                        <td>Left face counterclockwise</td>
                    </tr>
                    <tr>
                        <td>i</td>
                        <td>R</td>
                        <td>Right face clockwise</td>
                    </tr>
                    <tr>
                        <td>k</td>
                        <td>R'</td>
                        <td>Right face counterclockwise</td>
                    </tr>
                    <tr>
                        <td>n</td>
                        <td>x</td>
                        <td>x axis clockwise</td>
                    </tr>
                    <tr>
                        <td>b</td>
                        <td>x'</td>
                        <td>x axis counterclockwise</td>
                    </tr>
                    <tr>
                        <td>;</td>
                        <td>y</td>
                        <td>y axis clockwise</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>y'</td>
                        <td>y axis counterclockwise</td>
                    </tr>
                    <tr>
                        <td>p</td>
                        <td>z</td>
                        <td>z axis clockwise</td>
                    </tr>
                    <tr>
                        <td>q</td>
                        <td>z'</td>
                        <td>z axis counterclockwise</td>
                    </tr>
                    <tr>
                        <td>[</td>
                        <td>M</td>
                        <td>Middle slice</td>
                    </tr>
                    <tr>
                        <td>'</td>
                        <td>M'</td>
                        <td>Middle slice</td>
                    </tr>
                    <tr>
                        <td>c</td>
                        <td>E</td>
                        <td>Equatorial slice</td>
                    </tr>
                    <tr>
                        <td>,</td>
                        <td>E'</td>
                        <td>Equatorial slice</td>
                    </tr>
                    <tr>
                        <td>y</td>
                        <td>S</td>
                        <td>Standing slice</td>
                    </tr>
                    <tr>
                        <td>t</td>
                        <td>S'</td>
                        <td>Standing slice</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}

function renderZeroEasterEgg() {
    const glDiv = document.querySelector("#glDiv");
    glDiv.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; width: 320px; height: 320px;">
        <p style="color: white; text-align: center;">You can try to solve a 0-layer cube, but that's kinda boring...</p>
    </div>
    `;
}

main();