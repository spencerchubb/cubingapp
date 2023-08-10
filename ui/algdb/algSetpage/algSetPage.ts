import { type Scene, invertAlg, newCube, GRAY, PURPLE } from '../../src/lib/scripts/rubiks-viz';

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type AlgSetCase = {
    name: string;
    setup?: string;
    algs?: string[];
    variants?: {
        name: string;
        algs: string[];
    }[];
}

type AlgSet = {
    puzzle: string;
    setup?: string;
    gray?: number[]; // Used to hide stickers
    purple?: number[]; // Used to indicate orientation of stickers
    cases: AlgSetCase[];
}

type State = {
    algSet: AlgSet,
    selectedVariants: Object, // Key is integer representing the case, value is integer representing the variant.
    casePlaying: number,
    algPlaying: number,
}

let state: State = {
    algSet: {
        puzzle: "",
        cases: [],
    },
    selectedVariants: {},
    casePlaying: -1,
    algPlaying: -1,
};

let shouldRenderCubes = false;
let renderedScenes = {};

let timer;

export function initApp(algSet) {
    state.algSet = algSet;

    shouldRenderCubes = true;
    renderCubes();
}

// Do this lazily because it's slow af on mobile
export function renderCubes() {
    if (!shouldRenderCubes || state.algSet.cases.length === 0) return;
    shouldRenderCubes = false;

    const numLayers = parseInt(state.algSet.puzzle.substring(0, 1) ?? "");

    for (let i = 0; i < state.algSet.cases.length; i++) {
        if (renderedScenes[i]) continue;
        
        let sceneDiv = document.querySelector(`#scene${i}`) as HTMLElement;
        if (!sceneDiv) {
            console.error(`Could not find scene${i}`);
            continue;
        }

        if (!inViewport(sceneDiv)) {
            continue;
        }

        const scene = newCube(sceneDiv, numLayers);
        if (!scene) continue;
        renderedScenes[i] = scene;

        scene.enableKey = () => false;
        scene.dragEnabled = false;

        if (state.algSet.gray && scene.shapes) {
            for (const hideIndex of state.algSet.gray) {
                const shape = scene.shapes[hideIndex];
                shape.color = shape.getColorBuffer(GRAY);
            }
        }

        if (state.algSet.purple && scene.shapes) {
            for (const hideIndex of state.algSet.purple) {
                const shape = scene.shapes[hideIndex];
                shape.color = shape.getColorBuffer(PURPLE);
            }
        }

        setupAlg(scene, i, 0);
    }
}

export function selectVariant(event: Event, case_: number) {
    const variant = (event.target as HTMLSelectElement).value;
    state.selectedVariants[case_] = variant;
    callback(state);
}

export function onScroll() {
    shouldRenderCubes = true;
    renderCubes();
}

/**
 * Returns true if any part of `ele` is in the viewport.
 */
function inViewport(ele: HTMLElement): boolean {
    const rect = ele.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Features:
// - If click play button, play alg and display pause button
// - If click pause button, reset alg
// - If click another alg, reset previous and play new one

export function play(caseIndex: number, algIndex: number) {
    let case_ = state.algSet.cases[caseIndex];
    let variant = state.selectedVariants[caseIndex];
    const alg = getAlg(case_, variant, algIndex) ?? "";
    const scene: Scene = renderedScenes[caseIndex];

    // If we're already playing this alg, reset it.
    const shouldPause = state.casePlaying === caseIndex && state.algPlaying === algIndex;
    if (shouldPause) {
        resetCube(scene, caseIndex, algIndex);
        return;
    }

    clearInterval(timer);
    const onFinish = () => resetCube(scene, caseIndex, algIndex);
    timer = scene.puzzle.performAlgWithAnimation(alg, onFinish);

    // We only play one alg at a time, so we reset the previous one.
    case_ = state.algSet.cases[state.casePlaying];
    variant = state.selectedVariants[state.casePlaying];
    const oldAlg = getAlg(case_, variant, state.algPlaying);
    const oldScene: Scene = renderedScenes[state.casePlaying];
    if (oldAlg && oldScene) {
        setupAlg(oldScene, state.casePlaying, 0);
    }

    state.casePlaying = caseIndex;
    state.algPlaying = algIndex;
    callback(state);

    setupAlg(scene, caseIndex, algIndex);
}

function getAlg(case_: AlgSetCase, variant: number | undefined, alg: number): string | undefined {
    if (!case_) {
        return undefined;
    } else if (case_.variants) {
        return case_.variants[variant ?? 0].algs[alg];
    } else if (case_.algs) {
        return case_.algs[alg];
    }
    console.error("variants and algs undefined");
    return undefined;
}

function resetCube(scene: Scene, caseIdx: number, algIdx: number) {
    clearInterval(timer);
    state.casePlaying = -1;
    state.algPlaying = -1;
    callback(state);

    setupAlg(scene, caseIdx, algIdx);
}

function setupAlg(scene: Scene, caseIdx: number, algIdx: number) {
    const case_ = state.algSet.cases[caseIdx];
    const alg = getAlg(case_, 0, algIdx) ?? "";
    const puzzle = scene.puzzle;

    puzzle.solve();

    if (case_.setup) {
        puzzle.performAlg(case_.setup);
    } else if (state.algSet.setup) {
        puzzle.performAlg(state.algSet.setup);
    }

    puzzle.performAlg(invertAlg(alg));
}
