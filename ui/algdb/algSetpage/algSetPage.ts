import { getInitialOrientation } from '../../src/lib/components/SelectOrientation/orientationOptions';
import { type Scene, invertAlg, newCube, GRAY, PURPLE } from '../../src/lib/scripts/rubiks-viz';
import { AlgSet, AlgSetCase } from '../algSets';

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

// TODO see if this can be removed
export type Subsets = { 
    [key: string]: { // Key is subset name
        cases: number,
        selected?: boolean
    }
};

type State = {
    algSet: AlgSet,
    selectedVariants: { [key: number]: number }, // Key is case index, value is variant index.
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

let orientationAlg: string = "";
let shouldRenderCubes = false;
let renderedScenes: { [key: number]: Scene } = {};

let timer;

export function initApp(algSet) {    
    orientationAlg = getInitialOrientation(algSet.puzzle);
    
    state.algSet = algSet;

    shouldRenderCubes = true;
    renderCubes();
}

export function onChangeOrientation(_: string) {    
    // Refreshing is the easiest way to reset the cubes. *shrug*
    // It works because the SelectOrientation component saves the orientation in localStorage.
    location.reload();
}

export function onClickSubset(subsets: Subsets, subset: string) {
    if (subsets[subset].selected) {
        sessionStorage.removeItem("subset");
    } else {
        sessionStorage.setItem("subset", subset);
    }

    location.reload();
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

        setupAlg(scene, i, 0);
    }
}

export function selectVariant(event: Event, caseIdx: number) {
    const variant = parseInt((event.target as HTMLSelectElement).value);
    state.selectedVariants[caseIdx] = variant;
    callback(state);

    setupAlg(renderedScenes[caseIdx], caseIdx, 0);
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

export function play(caseIdx: number, algIdx: number) {
    let _case = state.algSet.cases[caseIdx];
    let variant = state.selectedVariants[caseIdx];
    const alg = getAlg(_case, variant, algIdx) ?? "";
    const scene: Scene = renderedScenes[caseIdx];

    // If we're already playing this alg, reset it.
    const shouldPause = state.casePlaying === caseIdx && state.algPlaying === algIdx;
    if (shouldPause) {
        resetCube(scene, caseIdx, algIdx);
        return;
    }

    clearInterval(timer);
    const onFinish = () => resetCube(scene, caseIdx, algIdx);
    timer = scene.puzzle.performAlgWithAnimation(alg, onFinish);

    // We only play one alg at a time, so we reset the previous one.
    _case = state.algSet.cases[state.casePlaying];
    variant = state.selectedVariants[state.casePlaying];
    const oldAlg = getAlg(_case, variant, state.algPlaying);
    const oldScene: Scene = renderedScenes[state.casePlaying];
    if (oldAlg && oldScene) {
        // Reset the alg we were playing.
        setupAlg(oldScene, state.casePlaying, 0);
    }

    state.casePlaying = caseIdx;
    state.algPlaying = algIdx;
    callback(state);

    setupAlg(scene, caseIdx, algIdx);
}

function getAlg(_case: AlgSetCase, variant: number | undefined, alg: number): string | undefined {
    if (!_case) {
        return undefined;
    } else if (_case.variants) {
        return _case.variants[variant ?? 0].algs[alg];
    } else if (_case.algs) {
        return _case.algs[alg];
    }
    console.error("variants and algs undefined");
    return undefined;
}

function resetCube(scene: Scene, _case: number, alg: number) {
    clearInterval(timer);
    state.casePlaying = -1;
    state.algPlaying = -1;
    callback(state);

    setupAlg(scene, _case, alg);
}

function setupAlg(scene: Scene, caseIdx: number, algIdx: number) {
    let variant = state.selectedVariants[caseIdx];
    const _case = state.algSet.cases[caseIdx];
    const alg = getAlg(_case, variant, algIdx) ?? "";
    const puzzle = scene.puzzle;

    puzzle.solve();
    puzzle.performAlg(orientationAlg);

    if (scene.shapes) {
        for (const idx of state.algSet.gray ?? []) {
            const shape = scene.shapes[scene.puzzle.stickers[idx]];
            shape.color = shape.getColorBuffer(GRAY);
        }
        for (const idx of state.algSet.purple ?? []) {
            const shape = scene.shapes[scene.puzzle.stickers[idx]];
            shape.color = shape.getColorBuffer(PURPLE);
        }
    }

    if (_case.setup) {
        puzzle.performAlg(_case.setup);
    } else if (state.algSet.setup) {
        puzzle.performAlg(state.algSet.setup);
    }

    puzzle.performAlg(invertAlg(alg));
}
