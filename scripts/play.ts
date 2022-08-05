import * as scene from "./scene";
import { addListenersForLeftModal } from "./ui";
import { AE, addAnalyticsEvent } from "./analytics";
import { Timer } from "./timer";
import * as store from "./store";
import { Recorder } from "./recorder";
import { url } from "./vars/vars";
import { initialAuthCheck, renderSignIn, setAuthListener, signOut, user } from "./auth";
import { renderModal } from "./modal";

// const tap = "ontouchstart" in document.documentElement;
// console.log(tap);

let drawerIndex;
let solves = [];

const timer = new Timer();
const recorder = new Recorder();

function main() {
    addAnalyticsEvent(AE.ViewPlay);

    // Initial canvas render
    scene.renderCanvas();

    addListenersForLeftModal();

    const layerInput = document.querySelector("#layerInput") as HTMLInputElement;
    layerInput.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        if (target.value == "0") {
            renderZeroEasterEgg();
            return;
        }

        // Update state and re-render
        scene.setNumLayers(parseInt(target.value));
    });

    document.querySelector("#solve").addEventListener("click", (event) => {
        scene.setNumLayers(parseInt(layerInput.value));
    });

    document.querySelector("#scramble").addEventListener("click", (event) => {
        scene.cube.naiveScramble();
        scene.render();
    });

    document.querySelector("#startStop").addEventListener("click", (event) => {
        // Immediately save the time for precision.
        const time = Date.now();
        handleStartStop(time);
    });

    document.addEventListener("keydown", (event) => {
        // Immediately save the time for precision.
        const time = Date.now();

        if (event.key === " ") {
            // Prevent extra click if spacebar is pressed while a button is focused.
            event.preventDefault();

            handleStartStop(time);
        }

        const result = scene.cube.matchKeyToTurn(event.key);
        if (result) {
            recorder.addMove(result.notation, timer.calcSecondsSinceStart(time));
            scene.animateTurn();
            return;
        }
    });

    renderDrawer(-1);

    addIconListeners(0);
    addIconListeners(1);
    addIconListeners(2);
    addIconListeners(3);

    setAuthListener(() => {
        // renderProfile();
        renderDrawer(drawerIndex);
    });

    initialAuthCheck();
}

function addIconListeners(index: number) {
    const button = document.querySelector(`#icon${index}`);

    button.addEventListener("click", () => {
        renderDrawer(index);
    });

    button.addEventListener("mouseenter", event => {
        const canTouch = "ontouchstart" in document.documentElement;
        // Don't show the label if the user has a touchscreen
        if (canTouch) return;

        const label: HTMLElement = document.querySelector(`#label${index}`);
        label.style.display = "block";
    });

    button.addEventListener("mouseleave", event => {
        const label: HTMLElement = document.querySelector(`#label${index}`);
        label.style.display = "none";
    });
}

function handleStartStop(time: number) {
    if (!timer.isRunning) {
        timer.start(time);
        recorder.start(scene.cube.getCubeState());
        return;
    }
    timer.stop(time);

    // Cannot save the solve to the database if the user is not signed in
    if (!user) return;

    const solve = {
        uid: user.uid,
        time: timer.secondsSinceStart,
        initialCubeState: recorder.cubeState,
        moves: recorder.moves,
    };
    fetch(`${url}/addSolve`, {
        method: "POST",
        body: JSON.stringify(solve),
    });
    solves.push(solve);
    if (drawerIndex === 0) { // 0 is the index associated with Solves
        renderSolves(document.querySelector("#rightDrawer"));
    }
}

/**
 * 
 * @param index Pass in -1 to close drawer, 0 to show Solves, 1 to show Settings, 2 to show Tips
 */
function renderDrawer(index: number) {
    drawerIndex = index;

    if (index == 0) {
        renderProfile();
        return;
    }

    const layout = determineLayoutType();
    const drawerEle: HTMLElement = document.querySelector("#rightDrawer");
    if (index == -1) {
        if (layout === "narrow") {
            drawerEle.classList.add("slideLeftClosed");
            drawerEle.classList.remove("slideLeftOpen");
            drawerEle.style.display = "flex";
        } else {
            drawerEle.style.display = "none";
        }
        return;
    }

    if (index === 1) {
        renderSolves(drawerEle);
    } else if (index === 2) {
        renderSettings(drawerEle);
    } if (index === 3) {
        renderTips(drawerEle);
    }

    document.querySelector("#closeDrawer").addEventListener("click", () => {
        renderDrawer(-1);
    });

    drawerEle.style.display = "flex";
    drawerEle.classList.add("slideLeftOpen");
    if (layout === "narrow") {
        drawerEle.classList.add("slideLeftClosed");
    }
    if (layout === "wide") {
        drawerEle.classList.remove("slideLeftClosed");
    }
}

function drawerHeaderHtml(title: string) {
    return `
    <div class="row" style="justify-content: space-between; width: 100%; padding: 16px;">
        <p style="font-weight: bold; padding-right: 2rem;">${title}</p>
        <svg id="closeDrawer" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>
    </div>
    `
}

function drawerBodyHtml(bodyHtml: string) {
    return `
    <div style="overflow-y: auto; width: 100%; height: 100%; padding: 16px; border-top: 1px solid gray;">
        ${bodyHtml}
    </div>
    `
}

function renderProfile() {
    if (!user) {
        renderSignIn();
        return;
    }

    const [modal, removeModal] = renderModal();

    const email = document.createElement("p");
    const signOutButton = document.createElement("button");

    email.textContent = `Signed in as ${user.email}`;
    email.style.marginTop = "1rem";
    email.style.textAlign = "center";
    email.style.wordBreak = "break-word";

    signOutButton.className = "btn-primary";
    signOutButton.style.marginTop = "1rem";
    signOutButton.textContent = "Sign Out";
    signOutButton.addEventListener("click", () => {
        signOut();
        removeModal();
    });

    modal.appendChild(email);
    modal.appendChild(signOutButton);
}

async function renderSolves(drawerEle: HTMLElement) {
    if (!user) {
        drawerEle.innerHTML = `
        ${drawerHeaderHtml("Solves")}
        ${drawerBodyHtml(`
            <button id="signInToSave" class="btn-primary">Sign in to save and analyze your solves</button>
        `)}
        `;
        document.querySelector("#signInToSave").addEventListener("click", () => {
            renderSignIn();
        });
        return;
    }

    drawerEle.innerHTML = `
    ${drawerHeaderHtml("Solves")}
    ${drawerBodyHtml(`
        <table id="solvesList"></table>
    `)}
    `;

    const res = await fetch(`${url}/getSolves`, {
        method: "POST",
        body: JSON.stringify({ uid: user.uid }), // TODO fill in userID
    });
    solves = await res.json();
    console.log(solves);

    const solvesList = document.querySelector("#solvesList");
    for (let i = solves.length - 1; i >= 0; i--) {
        const solve = solves[i];
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        tr.appendChild(td1);
        tr.appendChild(td2);
        td1.textContent = `${i + 1})`;
        td2.className = "solveTime";
        td2.textContent = `${solve.time}`;
        td2.addEventListener("click", () => {
            window.open(`replay.html?solve=${solve.id}`);
        });

        solvesList.appendChild(tr);
    }
}

function renderSettings(drawerEle: HTMLElement) {
    const storedAngle = store.getAngle();
    const storedSize = store.getSize();
    drawerEle.innerHTML = `
    ${drawerHeaderHtml("Settings")}
    ${drawerBodyHtml(`
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
    `)}
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
    ${drawerHeaderHtml("Tips")}
    ${drawerBodyHtml(`
        <p>There are two ways to interact with the cube</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;1. Keyboard - Each action corresponds to a different key. The key mappings are listed below.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;2. Dragging - Click and drag a piece in the direction you want to turn. Or, click outside the cube to rotate the entire cube.</p>
        <div class="col">
            <table id="tips-table" style="margin-top: 12px;">
                <thead>
                    <th>Key</th>
                    <th>Notation</th>
                </thead>
                <tbody>
                    <tr>
                        <td>j</td>
                        <td>U</td>
                    </tr>
                    <tr>
                        <td>f</td>
                        <td>U'</td>
                    </tr>
                    <tr>
                        <td>s</td>
                        <td>D</td>
                    </tr>
                    <tr>
                        <td>l</td>
                        <td>D'</td>
                    </tr>
                    <tr>
                        <td>h</td>
                        <td>F</td>
                    </tr>
                    <tr>
                        <td>g</td>
                        <td>F'</td>
                    </tr>
                    <tr>
                        <td>w</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td>o</td>
                        <td>B'</td>
                    </tr>
                    <tr>
                        <td>d</td>
                        <td>L</td>
                    </tr>
                    <tr>
                        <td>e</td>
                        <td>L'</td>
                    </tr>
                    <tr>
                        <td>i</td>
                        <td>R</td>
                    </tr>
                    <tr>
                        <td>k</td>
                        <td>R'</td>
                    </tr>
                    <tr>
                        <td>n</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>b</td>
                        <td>x'</td>
                    </tr>
                    <tr>
                        <td>;</td>
                        <td>y</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>y'</td>
                    </tr>
                    <tr>
                        <td>p</td>
                        <td>z</td>
                    </tr>
                    <tr>
                        <td>q</td>
                        <td>z'</td>
                    </tr>
                    <tr>
                        <td>[</td>
                        <td>M</td>
                    </tr>
                    <tr>
                        <td>'</td>
                        <td>M'</td>
                    </tr>
                    <tr>
                        <td>c</td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>,</td>
                        <td>E'</td>
                    </tr>
                    <tr>
                        <td>y</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>t</td>
                        <td>S'</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `)}
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

window.addEventListener("resize", () => {
    renderDrawer(drawerIndex);
});

function determineLayoutType() {
    const clientWidth = document.documentElement.clientWidth;

    // 725 was chosen because 425 is the width of the main content and 300 is the width of the right panel.
    // 425 + 300 = 725
    return clientWidth < 725 ? "narrow" : "wide";
}

main();