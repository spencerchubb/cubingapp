import * as scene from "./scene";
import { Timer } from "./timer.js";
import { addDragEvents, listenToNavButtons } from "./ui";

export function main() {
    // Initial canvas render
    scene.renderCanvas();

    addDragEvents(scene);

    listenToNavButtons();

    const timer = new Timer();

    const layerInput = document.querySelector("#layerInput") as HTMLInputElement;
    layerInput.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;

        // Update state and re-render
        scene.setNumLayers(parseInt(target.value));
        scene.renderCanvas();
        addDragEvents(scene);
    });

    document.querySelector("#solve").addEventListener("click", (event) => {
        scene.newSolvedCube(parseInt(layerInput.value));
    });

    document.querySelector("#scramble").addEventListener("click", (event) => {
        scene.cube.naiveScramble();
        scene.render();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key == " ") {
            // Prevent extra click if spacebar is pressed while a button is focused.
            event.preventDefault();

            timer.startStop();
        } else if (scene.cube.matchKeyToTurn(event.key)) {
            scene.animateTurn();
        }
    });

    renderDrawer(-1);
    document.querySelector("#helpButton").addEventListener("click", () => {
        renderDrawer(0);
    });
    document.querySelector("#settingsIcon").addEventListener("click", () => {
        renderDrawer(1);
    });
}

/**
 * 
 * @param index Pass in -1 to close drawer, 0 to show Tips, 1 to show Settings
 */
function renderDrawer(index: number) {
    const drawerEle: HTMLElement = document.querySelector("#rightDrawer");
    if (index == -1) {
        drawerEle.style.display = "none";
        return;
    }

    if (index == 0) {
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
    } else if (index == 1) {
        drawerEle.innerHTML = `
        <div class="row" style="justify-content: space-between; padding: 16px;">
            <p style="font-weight: bold;">Settings</p>
            <svg id="closeDrawer" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
                <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
            </svg>
        </div>
        <div style="overflow-y: auto; height: 100%; padding: 16px; border-top: 1px solid gray;">
            <p>Angle</p>
            <input id="angleInput" type="number" value="0" />
            <div style="height: 1.5rem;"></div>
            <p>Size</p>
            <select id="sizeSelect">
                <option value="1">1x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
                <option value="1.75">1.75x</option>
                <option value="2">2x</option>
            </select>
            <div style="height: 1.5rem;"></div>
            <p>Show body</p>
            <input id="showBodyCheckbox" type="checkbox" checked />
        </div>
        `;

        const angleInput: HTMLElement = document.querySelector("#angleInput");
        angleInput.addEventListener("change", (event) => {
            const target = event.target as HTMLInputElement;

            // If user leaves the input blank, do not call setYAxisOffset because
            // it will break the cube.
            if (!target.value) return;

            scene.setYAxisOffset(parseInt(target.value));
        });

        const sizeSelect = document.querySelector("#sizeSelect");
        sizeSelect.addEventListener("change", (event) => {
            const target = event.target as HTMLInputElement;

            // Update state and re-render
            scene.setSizeMultiplier(parseFloat(target.value));
            scene.renderCanvas();
            addDragEvents(scene);
        });

        const showBodyCheckbox = document.querySelector("#showBodyCheckbox");
        showBodyCheckbox.addEventListener("change", (event) => {
            const target = event.target as HTMLInputElement;

            scene.setShowBody(target.checked);
        });
    }

    document.querySelector("#closeDrawer").addEventListener("click", () => {
        renderDrawer(-1);
    });
    drawerEle.style.display = "flex";
}

main();