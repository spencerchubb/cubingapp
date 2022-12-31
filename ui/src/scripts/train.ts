import { getTrainingAlgs, TrainingAlg, writeTrainingAlgs } from "./api";
import {
    CubingAppUser,
    initialAuthCheck,
    renderCreateAccountButton,
    renderEmailInput,
    renderGoogleSignInButton,
    renderPasswordInput,
    renderSignInButton,
    signOut,
} from "./auth";
import { createBuffers } from "./buffers";
import { GRAY } from "./colors";
import { Component } from "./component";
import { createElement, querySelector, setOptions } from "./common/element";
import { setColor } from "./cube";
import { renderMobileKeyboard } from "./mobile_keyboard";
import { renderModal } from "./modal";
import { newScene, scenes, startLoop } from "./scene";
import * as slide from "./slide";
import { getAlgSet, getKeyboard, getOrientation, setAlgSet, setKeyboard, setOrientation } from "./store";
import { addListenersForLeftModal } from "./ui";
import { promoteAlg, demoteAlg } from "./util";

let canvas: HTMLCanvasElement = document.querySelector("canvas");
let gl: WebGLRenderingContext = canvas.getContext("webgl");

type AlgSet = { cube: string, name: string, inactive: number[], algs: string[] };

const algData: AlgSet[] = require("./alg-data.json");

type State = {
    keyboard: "None" | "Show Keys" | "Show Moves",
    user: CubingAppUser | null,
    showSolution: boolean,
    settingsOpen: boolean,
    preRotation: string,
    algSet: AlgSet,
    algs: TrainingAlg[],
    preAUF: string,
    postAUF: string,
}

let state: State = {
    keyboard: getKeyboard(),
    user: null,
    showSolution: false,
    settingsOpen: false,
    preRotation: "",
    algSet: null,
    algs: [],
    preAUF: "",
    postAUF: "",
};

function findAlgSet(name: string): AlgSet {
    return algData.find(set => set.name === name);
}

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
        setOptions(drawerEle, {
            innerHTML: "",
            children: [
                slide.renderHeader1("Settings"),
                createElement("p", {
                    innerHTML: "Algorithm Set",
                    className: "mt-4",
                }),
                createElement("select", {
                    onchange: (e: Event) => {
                        const setName = (e.target as HTMLSelectElement).value;
                        state.algSet = findAlgSet(setName);
                        setAlgSet(setName);
                        changeAlgSet();
                    },
                    children: algData.map(algSet => {
                        return createElement("option", {
                            value: algSet.name,
                            selected: algSet.name === state.algSet.name,
                            innerHTML: algSet.name,
                        });
                    }),
                }),
                createElement("p", {
                    innerHTML: "Orientation",
                    className: "mt-4",
                }),
                createElement("select", {
                    onchange: (e: Event) => {
                        const preRotation = (e.target as HTMLSelectElement).value;
                        state.preRotation = preRotation;
                        setOrientation(preRotation);
                        loadCurrAlg();
                    },
                    children: optionsData.map(option => {
                        return createElement("option", {
                            value: option.value,
                            selected: option.value === state.preRotation,
                            innerHTML: option.text,
                        });
                    }),
                }),
                createElement("p", {
                    innerHTML: "Keyboard",
                    className: "mt-4",
                }),
                createElement("select", {
                    onchange: (e: Event) => {
                        const value = (e.target as HTMLSelectElement).value;
                        if (value != "None" && value != "Show Keys" && value != "Show Moves") {
                            console.error("Invalid keyboard value: " + value);
                            return;
                        }
                        setKeyboard(value);
                        state.keyboard = value;
                        renderTrainPage();
                    },
                    children: ["None", "Show Keys", "Show Moves"].map(option => {
                        return createElement("option", {
                            value: option,
                            selected: option === state.keyboard,
                            innerHTML: option,
                        });
                    }),
                }),
            ],
        });
        slide.open(drawerEle);
    } else {
        slide.close(drawerEle);
    }
}

function changeAlgSet() {
    const algSet = state.algSet;
    if (algSet.cube == "2x2") {
        let scene = scenes[0];
        scene.cube.setNumOfLayers(2);
        scene.buffers = createBuffers(gl, scenes[0].cube, scenes[0].perspectiveMatrix);
        scene.cube.solve();
    } else if (algSet.cube == "3x3") {
        let scene = scenes[0];
        scene.cube.setNumOfLayers(3);
        scene.buffers = createBuffers(gl, scenes[0].cube, scenes[0].perspectiveMatrix);
        scene.cube.solve();
    }

    getTrainingAlgs(state.user.uid, algSet.name)
        .then(data => {
            // Remove elements from storedAlgs that are in stored algs but not in algs.
            // Add elements to stored algs that are in algs but not in stored algs.
            let filtered = data.TrainingAlgsRecord.TrainingAlgs.filter(storedAlg => {
                return algSet.algs.find(alg => storedAlg.Alg === alg);
            });
            algSet.algs.forEach(alg => {
                const found = filtered.find(storedAlg => storedAlg.Alg === alg);
                if (!found) {
                    filtered.push({ Score: 0, Alg: alg });
                }
            });
            state.algs = filtered;

            // When rendering an alg set, load the first alg automatically.
            loadCurrAlg();
        });
}

function generateRandAUF() {
    const options = ["", "U", "U2", "U'"];
    return options[Math.floor(Math.random() * 4)];
}

function loadCurrAlg() {
    let alg = state.algs[0].Alg;

    state.preAUF = generateRandAUF();
    alg = applyPre(alg, state.preAUF);

    state.postAUF = generateRandAUF();
    alg = applyPost(alg, state.postAUF);

    scenes[0].cube.solve();
    scenes[0].cube.execAlg(state.preRotation);

    state.algSet.inactive.forEach(stickerIdx => {
        setColor(scenes[0].cube.stickers[stickerIdx], GRAY);
    });

    scenes[0].cube.execAlgReverse(alg);
}

function retry() {
    state.showSolution = false;
    loadCurrAlg();
    renderTrainPage();
}

function nextAlg(promote: boolean) {
    if (promote) {
        promoteAlg(state.algs);
    } else {
        demoteAlg(state.algs);
    }
    writeTrainingAlgs(state.user.uid, state.algSet.name, state.algs);
    state.showSolution = false;
    loadCurrAlg();
    renderTrainPage();
}

const sceneDiv = createElement("div", {
    id: "scene",
    className: "glDiv mt-4",
});

const showSolutionComponent = new Component<boolean>(
    (prev, next) => prev !== next,
    (showSolution) => showSolution
        ? createElement("button", {
            className: "btn-secondary mt-4",
            onclick: () => {
                state.showSolution = false;
                renderTrainPage();
            },
            innerHTML: applyPre(state.algs[0].Alg, state.preAUF),
        })
        : createElement("button", {
            className: "btn-primary mt-4",
            title: "Press space to show solution",
            onclick: () => {
                state.showSolution = true;
                renderTrainPage();
            },
            innerHTML: "Show solution",
        }),
);

const retryAndSadAndHappy = createElement("div", {
    className: "row mt-4 gap-6",
    children: [
        createElement("div", {
            className: "bg-neutral-700 hover:bg-neutral-800 hover:cursor-pointer",
            style: "width: 48px; height: 48px; padding: 4px; box-shadow: 0 0 4px black; border-radius: 50%;",
            title: "Press backspace to retry the algorithm",
            onclick: () => retry(),
            innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50">
                <path d="M 42,32 A 20,20,0,1,1,42,18"/>
                <path fill="white" fill-opacity="1" d="M 44,22 L 34,17 L 45,12  Z"/>
            </svg>`,
        }),
        createElement("div", {
            className: "bg-red-500 hover:bg-red-700 hover:cursor-pointer",
            style: "max-width: 48px; max-height: 48px; border: none; box-shadow: 0 0 4px black; border-radius: 50%",
            onclick: () => nextAlg(false),
            innerHTML: `<svg width="100%" height="100%" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
                <circle cx="25" cy="25" r="22" />
                <circle cx="18" cy="20" r="3" />
                <circle cx="32" cy="20" r="3" />
                <path d="M 15,35 Q 25,28 35,35"/>
            </svg>`,
        }),
        createElement("div", {
            className: "bg-green-500 hover:bg-green-700 hover:cursor-pointer",
            style: "max-width: 48px; max-height: 48px; border: none; box-shadow: 0 0 4px black; border-radius: 50%",
            onclick: () => nextAlg(true),
            innerHTML: `<svg width="100%" height="100%" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
                <circle cx="25" cy="25" r="22" />
                <circle cx="18" cy="20" r="3" />
                <circle cx="32" cy="20" r="3" />
                <path d="M 15,33 Q 25,40 35,33"/>
            </svg>`,
        }),
    ],
});

const rightDrawer = createElement("div", {
    id: "rightDrawer",
    className: "slideLeft slideLeftClosed col",
});

function renderTrainPage() {
    let scene = scenes.length > 0 ? scenes[0] : null;

    querySelector("#iconContainer", { style: "display: flex;" });

    querySelector("#root", {
        innerHTML: "",
        children: [
            createElement("div", {
                className: "row slideWrapper",
                children: [
                    createElement("div", {
                        className: "col w-full h-full",
                        children: [
                            sceneDiv,
                            showSolutionComponent.render(state.showSolution),
                            retryAndSadAndHappy,
                            createElement("div", { style: "flex-grow: 1" }),
                            renderMobileKeyboard(state.keyboard, code => {
                                scene.cube.matchKeyCodeToTurn(code);
                            }),
                        ],
                    }),
                    rightDrawer,
                ],
            }),
        ],
    });

    if (scene) return;

    scene = newScene("#scene");
    scenes.push(scene);
    scene.cube.solve();
    scene.dragEnabled = true;

    startLoop();

    document.addEventListener('keydown', (event) => {
        if (event.key === " ") {
            // Prevent space from causing the page to scroll down
            event.preventDefault();

            state.showSolution = true;
            renderTrainPage();
        } else if (event.key == "Backspace") {
            retry();
        } if (scene.cube.matchKeyToTurn(event)) {
            return;
        }
    });

    const storedAlgSet = getAlgSet();
    state.algSet = findAlgSet(storedAlgSet) ?? algData[0];
    state.preRotation = getOrientation();
    changeAlgSet();

    window.addEventListener("resize", () => {
        renderDrawer();
    });

    document.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.id === "closeDrawer") {
            slide.close(document.querySelector("#rightDrawer"));
        } else if (target.id === "icon0") {
            const [modal, modalBg] = renderModal();
            setOptions(modal, {
                children: [
                    createElement("p", {
                        innerHTML: `Signed in as ${state.user.email}`,
                        className: "mt-4",
                    }),
                    createElement("button", {
                        className: "btn-primary mt-4",
                        innerHTML: "Sign out",
                        onclick: () => {
                            signOut();
                            modalBg.remove();

                            state.user = null;
                            renderLandingPage();
                        },
                    }),
                ],
            });
            document.body.appendChild(modalBg);
        } else if (target.id === "icon1") {
            state.settingsOpen = true;
            renderDrawer();
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

function renderLandingPage() {
    querySelector("#iconContainer", { style: "display: none;" });

    const emailInput = renderEmailInput();
    const passwordInput = renderPasswordInput();

    const root = document.querySelector("#root") as HTMLElement;
    root.innerHTML = "";
    setOptions(root, {
        className: "col w-full h-full overflow-x-hidden overflow-y-auto",
        children: [
            createElement("div", {
                className: "flex flex-col w-full h-full p-4 max-w-xl",
                children: [
                    createElement("h1", {
                        innerHTML: "Algorithm Trainer",
                        className: "text-white",
                    }),
                    createElement("p", {
                        innerHTML: "Learn algorithms at lightning speed",
                        className: "text-gray-300 mt-4 font-bold",
                    }),
                    createElement("h2", {
                        innerHTML: "1. Memorize faster",
                        className: "text-white mt-4",
                    }),
                    createElement("ul", {
                        children: [
                            createElement("li", {
                                innerHTML: "Get an algorithm right, and you'll see it less often.",
                                className: "text-white",
                            }),
                            createElement("li", {
                                innerHTML: "Get an algorithm wrong, and you'll see it more often.",
                                className: "text-white",
                            }),
                        ],
                    }),
                    createElement("h2", {
                        innerHTML: "2. Virtual cube",
                        className: "text-white",
                    }),
                    createElement("p", {
                        innerHTML: "To turn the cube, you can click and drag. Or you can use a keyboard",
                        className: "text-white mt-4",
                    }),
                    createElement("p", {
                        innerHTML: "Virtual cubes are better because:",
                        className: "text-white mt-4",
                    }),
                    createElement("ul", {
                        children: [
                            createElement("li", {
                                innerHTML: "You'll never have to scramble a cube again",
                                className: "text-white",
                            }),
                            createElement("li", {
                                innerHTML: "You can practice anywhere, anytime",
                                className: "text-white",
                            }),
                        ],
                    }),
                    state.user
                        ? createElement("button", {
                            innerHTML: "Get Started",
                            className: "btn-primary",
                            onclick: () => {
                                renderTrainPage();
                            },
                        })
                        : createElement("div", {
                            className: "self-center col rounded-xl shadow-md shadow-slate-400 p-4",
                            children: [
                                renderGoogleSignInButton(user => {
                                    state.user = user;
                                    renderLandingPage();
                                }),
                                createElement("div", { style: "height: 1rem" }),
                                createElement("div", { className: "bg-gray-300 w-full h-0.5" }),
                                createElement("div", { style: "height: 1rem" }),
                                createElement("p", { innerHTML: "Or use email and password", style: "color: white;" }),
                                createElement("div", { style: "height: 1rem" }),
                                emailInput,
                                createElement("div", { style: "height: 1rem" }),
                                passwordInput,
                                createElement("div", { style: "height: 1rem" }),
                                createElement("div", {
                                    className: "row",
                                    children: [
                                        renderCreateAccountButton(emailInput, passwordInput, user => {
                                            state.user = user;
                                            renderLandingPage();
                                        }),
                                        createElement("div", { style: "width: 1rem" }),
                                        renderSignInButton(emailInput, passwordInput, user => {
                                            state.user = user;
                                            renderLandingPage();
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    createElement("div", { style: "min-height: 1rem" }),
                ],
            }),
        ],
    });
}


function main() {
    addListenersForLeftModal();

    state.user = initialAuthCheck();
    renderLandingPage();
}

main();