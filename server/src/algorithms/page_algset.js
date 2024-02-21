import { Cube, invertAlg } from "../../js/rubiks-viz/index.js";

function q(selector) {
    return document.querySelector(selector);
}

function E(name, props, children) {
    const ele = document.createElement(name);
    for (const [key, value] of Object.entries(props)) {
        ele[key] = value;
    }

    children = children || [];
    for (const child of children) {
        ele.appendChild(child);
    }
    return ele;
}

function modal(content) {
    const modal = E("div", {
        className: "modal",
        onclick: e => {
            if (e.target === modal) {
                modal.remove();
            }
        },
    }, [
        E("div", {}, [content]),
    ]);
    document.body.appendChild(modal);

    // Close modal on escape key
    const keydownHandler = e => {
        if (e.key === "Escape") {
            modal.remove();
        }
        document.body.removeEventListener("keydown", keydownHandler);   
    };
    document.body.onkeydown = keydownHandler;
}

export function initPage(algSet) {
    const orientationKey = algSet.puzzle + "-orientation";
    const orientationDefault = "x2"; // White Bottom

    let state = {
        subsets: {},
        orientation: localStorage.getItem(orientationKey) ?? orientationDefault,
    };

    const subsetsRoot = q("#subsetsRoot");
    subsetsRoot.innerHTML = "";
    if (algSet.subsets) {
        algSet.subsets.forEach(subset => {
            subsetsRoot.appendChild(E("button", {
                className: "subset-button",
                textContent: subset,
                onclick: (event) => {
                    if (state.subsets[subset]) {
                        delete state.subsets[subset];
                        event.target.style.outline = "";
                    } else {
                        state.subsets[subset] = true;
                        event.target.style.outline = "solid 2px var(--lightBlue-300)";
                    }
                    renderAlgs(algSet, state);
                },
            }));
        });
    }

    const orientationSelect = q("#orientationSelect");
    orientationSelect.value = state.orientation;
    orientationSelect.onchange = (event) => {
        state.orientation = event.target.value;
        localStorage.setItem(orientationKey, state.orientation);
        renderAlgs(algSet, state);
    }

    renderAlgs(algSet, state);
}

const algsRoot = q("#algsRoot");

function renderAlgs(algSet, state) {
    algsRoot.innerHTML = "";

    let cases = Object.entries(algSet.cases);

    // If any subsets are selected, filter the cases.
    let subsets = Object.keys(state.subsets);
    if (subsets.length > 0) {
        cases = cases.filter(([caseName, _case]) => {
            return state.subsets[_case.subset];
        });
    }

    cases.forEach(([caseName, _case]) => {
        const entries = Object.entries(_case.algs);
        let alg = entries[0][0];

        // Remove parentheses from alg. They are used to denote common triggers.
        alg = alg.replace(/\(/g, "").replace(/\)/g, "");

        alg = invertAlg(alg);

        const layers = parseInt(algSet.puzzle[0]); // Example: "3x3" -> "3"
        const cube = new Cube(layers);
        cube.performMove(state.orientation);

        if (algSet.gray) {
            algSet.gray.forEach(sticker => {
                // Colors are determined by the face the sticker is on.
                // For example, on a 3x3 cube, 0-8 is white, 45-53 is red, etc.
                // 54 is higher than any face, so it's gray.
                cube.stickers[sticker] = cube.layers * cube.layers * 6;
            });
        }

        if (entries[0][1].setup) cube.performAlg(entries[0][1].setup);
        cube.performAlg(alg);

        let diagram = {
            "2D": cube.getSvg(130),
            "3D": cube.getSvg3D(130),
        }[algSet.diagramType];
        if (!diagram) console.error("Invalid diagram type:", algSet.diagramType);

        algsRoot.appendChild(E("div", { className: "alg-card" }, [
            E("div", {
                className: "alg-card-diagram",
                innerHTML: diagram,
            }),
            E("div", { className: "alg-card-info" }, [
                E("h2", { className: "alg-card-name", textContent: caseName }),
                ...entries.map(([alg, algData]) => {
                    let notes = [];
                    if (algData.vid) {
                        notes.push(E("li", {
                            className: "link",
                            textContent: "Fingertricks 👆",
                            onclick: () => {
                                return modal(E("video", {
                                    src: algData.vid,
                                    preload: "metadata",
                                    controls: true,
                                    loop: true
                                }));
                            },
                        }));
                    }
                    if (algData.notes) {
                        notes.push(...algData.notes.map(note => E("li", { textContent: note })));
                    }
                    return E("div", { style: "border-top: solid 1px var(--gray-600); padding: 8px 0;" }, [
                        E("p", { textContent: alg }),
                        E("ul", {}, notes),
                    ]);
                }),
            ]),
        ]));
    });
}

let style = `
#subsetsRoot {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
}

.subset-button {
    background: transparent;
    outline: solid 1px var(--gray-600);
}

.subset-button:hover {
    background: var(--gray-600);
}

#algsRoot {
    width: 100%;
}

.alg-card {
    width: 100%;
    padding: 12px;
    margin: 24px 0;
    border: solid 1px var(--gray-600);
    border-radius: 8px;
    box-shadow: 0 0 8px 0 var(--gray-600);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
}

.alg-card-diagram {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
}

.alg-card-info {
    flex: 1 1 450px;
}

.alg-card-name {
    width: 100%;
    margin-bottom: 8px;
}

.alg-card-text {
    width: 100%;
    padding: 8px 0;
    border-top: solid 1px var(--gray-600);
}

video {
    max-width: 400px;
    max-height: 400px;
    width: 100%;
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}
`;

document.head.appendChild(E("style", { textContent: style }));