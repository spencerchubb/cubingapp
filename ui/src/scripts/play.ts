import * as _colors from "./colors";
import { loadSavedSettings, newScene, scenes, setNumLayers, settings, startLoop } from "./scene";
import { addListenersForLeftModal } from "./ui";
import { Timer } from "./timer";
import * as store from "./store";
import { Recorder } from "./recorder";
import { url } from "./common/vars";
import { initialAuthCheck, renderSignIn, setAuthListener, signOut, user } from "./auth";
import { renderModal } from "./modal";
import * as slide from "./slide";

let drawerIndex;
let solves: { id: number, time: number }[] = [];
let solvesFetched: boolean = false;

const timer = new Timer();
const recorder = new Recorder();

function main() {
    let scene = newScene("#scene");
    scenes.push(scene);
    scene.cube.solve();

    loadSavedSettings();
    startLoop();
    
    addListenersForLeftModal();

    const layerInput = document.querySelector("#layerInput") as HTMLInputElement;
    layerInput.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;
        const value = parseInt(target.value);

        if (value < 1 || value > 9) {
            alert("Smallest cube is 1x1 and larget cube is 9x9");
            return;
        };

        setNumLayers(value);
        scene = newScene("#scene");
        scenes[0] = scene;

        scene.cube.solve();
    });

    document.querySelector("#solve").addEventListener("click", (event) => {
        scene.cube.solve();
    });

    document.querySelector("#scramble").addEventListener("click", (event) => {
        scene.cube.scramble();
    });

    document.querySelector("#startStop").addEventListener("click", (event) => {
        // Immediately save the time for precision.
        const time = Date.now();
        handleStartStop(time);
    });

    document.addEventListener("keydown", (event) => {
        // Immediately save the time for precision.
        const time = Date.now();

        if (event.code === "Space") {
            // Prevent extra click if spacebar is pressed while a button is focused.
            event.preventDefault();

            handleStartStop(time);
            return;
        }

        const result = scene.cube.matchKeyToTurn(event);
        if (result) {
            recorder.addMove(result.notation, timer.calcSecondsSinceStart(time));
            return;
        }
    });

    renderDrawer(-1);

    addIconListeners(0);
    addIconListeners(1);
    addIconListeners(2);
    addIconListeners(3);

    setAuthListener(() => {
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
        // recorder.start(scene.cube.getCubeState()); TODO 
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
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (!data.Success) return;
            solves.push({
                id: data.Id,
                time: timer.secondsSinceStart,
            });

            if (drawerIndex === 1) { // 1 is the index associated with Solves
                renderSolves(document.querySelector("#rightDrawer"));
            }
        });
}

/**
 * 
 * @param index Pass in -1 to close drawer, 0 to show Solves, 1 to show Settings, 2 to show Tips
 */
function renderDrawer(index: number) {
    if (index == 0) {
        renderProfile();
        return;
    }

    drawerIndex = index;

    const drawerEle: HTMLElement = document.querySelector("#rightDrawer");
    if (index == -1) {
        slide.close(drawerEle);
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

    slide.open(drawerEle);
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
        ${slide.renderHeader("Solves")}
        <button id="signInToSave" class="btn-primary">Sign in to save and analyze your solves</button>
        `;
        document.querySelector("#signInToSave").addEventListener("click", () => {
            renderSignIn();
        });
        return;
    }

    drawerEle.innerHTML = `
    ${slide.renderHeader("Solves")}
    <table id="solvesList"></table>
    `;

    if (!solvesFetched) {
        solvesFetched = true;
        const res = await fetch(`${url}/getSolves`, {
            method: "POST",
            body: JSON.stringify({ uid: user.uid }),
        });
        const json = await res.json();
        console.log(json);

        if (!json.SolveRecords) return;
        
        solves = json.SolveRecords.map((record: any) => {
            return {
                id: record.Id,
                time: record.Solve.Time,
            };
        });
    }
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
    drawerEle.innerHTML = `
    ${slide.renderHeader("Settings")}
    <p>Hint stickers</p>
    <input id="hintStickersCheckbox" type="checkbox" ${settings.hintStickers ? "checked" : ""} />
    <div style="height: 1.5rem;"></div>
    <p>Show body</p>
    <input id="showBodyCheckbox" type="checkbox" ${settings.showBody ? "checked" : ""} />
    <div style="height: 1.5rem;"></div>
    <p>Animate turns</p>
    <input id="animateTurnsCheckbox" type="checkbox" ${settings.animateTurns ? "checked" : ""} />
    `;

    const hintStickersCheckbox = document.querySelector("#hintStickersCheckbox");
    hintStickersCheckbox.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        settings.hintStickers = target.checked;
        store.setHintStickers(target.checked);
    });

    const showBodyCheckbox = document.querySelector("#showBodyCheckbox");
    showBodyCheckbox.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        settings.showBody = target.checked;
        store.setShowBody(target.checked);
    });

    const animateTurnsCheckbox = document.querySelector("#animateTurnsCheckbox");
    animateTurnsCheckbox.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        settings.animateTurns = target.checked;
        store.setAnimateTurns(target.checked);
    });
}

function renderTips(drawerEle: HTMLElement) {
    drawerEle.innerHTML = `
    ${slide.renderHeader("Tips")}
    <p>There are two ways to interact with the cube</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;1. Keyboard - Each action corresponds to a different key. The key mappings are listed below.</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;2. Dragging - Click and drag a piece in the direction you want to turn. Or, click outside the cube to rotate the entire cube.</p>
    <table id="tips-table" class="mt-4">
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
    `;
}

window.addEventListener("resize", () => {
    renderDrawer(drawerIndex);
});

main();