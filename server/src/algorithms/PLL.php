<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithm database with 4,000 algorithms">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>PLL Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../php/menu/menuIcon.php" ?>
        <?php include_once "../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">PLL Algorithms</h1>

        <p class="bodytext">
            Permutation of Last Layer (also called PLL) is the last step of the CFOP Rubik's Cube method.
            CFOP stands for Cross, F2L, OLL, and PLL.
        </p>
        <p class="bodytext">
            Up to this point, the first two layers should be solved, and the last layer should be oriented.
            After PLL, the entire Rubik's Cube should be solved.
        </p>
        <p class="bodytext">
            PLL has 21 algorithms, so it has less algorithms than OLL.
            Most cubers recommend learning PLL before OLL because you only need to learn 21 algorithms to improve your times.
        </p>
        <p class="bodytext">
            This site tells you all 21 PLL algorithms, the fingertricks, how to remember them.
        </p>

        <div id="subsetsRoot"></div>
        <div style="margin: 20px; display: flex; justify-content: center;">
            <select id="orientationSelect">
                <option value="x2">White Bottom</option>
                <option value="">Yellow Bottom</option>
                <option value="x">Green Bottom</option>
                <option value="x'">Blue Bottom</option>
                <option value="z">Orange Bottom</option>
                <option value="z'">Red Bottom</option>
            </select>
        </div>
        <div id="algsRoot"></div>

        <div style="margin-top: 64px;"></div>
    </main>
</body>

<script type="module">
    import { algSet } from "./algSets/PLL.js";
    import { Cube, invertAlg } from "../js/rubiks-viz/index.js";

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

    const orientationKey = algSet.puzzle + "-orientation";
    const orientationDefault = "x2"; // White Bottom

    let state = {
        subsets: {},
        orientation: localStorage.getItem(orientationKey) ?? orientationDefault,
    };

    const subsetsRoot = q("#subsetsRoot");
    subsetsRoot.innerHTML = "";
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
                renderAlgs();
            },
        }));
    });

    const orientationSelect = q("#orientationSelect");
    orientationSelect.value = state.orientation;
    orientationSelect.onchange = (event) => {
        state.orientation = event.target.value;
        localStorage.setItem(orientationKey, state.orientation);
        renderAlgs();
    }

    const algsRoot = q("#algsRoot");

    function renderAlgs() {
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

            const cube = new Cube(3);
            cube.performMove(state.orientation);
            cube.performAlg(alg);

            algsRoot.appendChild(E("div", { className: "alg-card" }, [
                E("div", {
                    className: "alg-card-diagram",
                    innerHTML: cube.getSvg(150), // Should be same as size of the div
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

    renderAlgs();
</script>

<style>
    .bodytext {
        max-width: 600px;
        align-self: start;
        line-height: 1.5rem;
        margin: 20px auto;
    }

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
        width: 150px;
        height: 150px;
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
</style>

<?php include "php/gtag.php" ?>

</html>
