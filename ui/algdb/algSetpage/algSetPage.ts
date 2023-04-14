import { Scene, expandDoubleMoves, invertAlg, newScene, scenes } from '../../src/lib/scripts/rubiks-viz';
import { AlgSet, algSets } from './../algSets';

export { };

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type Alg = {
    name: string,
    algs: string[],
}

type State = {
    algs: Alg[],
    algSet: AlgSet,
    casePlaying: number,
    algPlaying: number,
}

let state: State = {
    algs: [],
    algSet: {
        name: "",
        cases: 0,
        puzzle: "",
        description: [],
        recommended: [],
    },
    casePlaying: -1,
    algPlaying: -1,
};

let shouldRenderCubes = false;

// A dictionary of booleans.
let renderedCubes = {};

let timer;

export async function fetchAlgs(algSetName: string) {
    
    const url = "https://raw.githubusercontent.com/spencerchubb/algdb/main/algSets";
    const res = await fetch(`${url}/${algSetName}.json`);
    const json = await res.json();
    
    state.algs = json;
    state.algSet = algSets.find(algSet => algSet.name === algSetName) as AlgSet;

    shouldRenderCubes = true;
    callback(state);
}

// Do this lazily because it's slow af on mobile
export function renderCubes() {
    if (!shouldRenderCubes || !state.algs || state.algs.length === 0) return;
    shouldRenderCubes = false;

    const numLayers = parseInt(state.algSet.puzzle.substring(0, 1) ?? "");

    for (let i = 0; i < state.algs.length; i++) {
        if (renderedCubes[i]) continue;
        
        let sceneDiv = document.querySelector(`#scene${i}`) as HTMLElement;
        if (!inViewport(sceneDiv)) {
            continue;
        }

        renderedCubes[i] = true;

        const alg = state.algs[i];
        if (!sceneDiv) {
            console.error(`Could not find scene${i}`);
            continue;
        }
        const scene = newScene(sceneDiv, numLayers);
        
        scene.enableKey = () => false;
        scene.dragEnabled = false;

        const firstAlg = alg.algs[0];
        scene.cube.performAlg(invertAlg(firstAlg));
    }
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
    const alg = state.algs[caseIndex]?.algs[algIndex];
    const scene = scenes[caseIndex];

    // If we're already playing this alg, reset it.
    const shouldPause = state.casePlaying === caseIndex && state.algPlaying === algIndex;
    if (shouldPause) {
        resetCube(scene, alg);
        return;
    }

    clearInterval(timer);
    const onFinish = () => resetCube(scene, alg);
    timer = scene.cube.performAlgWithAnimation(alg, onFinish);

    // We only play one alg at a time, so we reset the previous one.
    const oldAlg = state.algs[state.casePlaying]?.algs[state.algPlaying];
    const oldScene = scenes[state.casePlaying];
    if (oldAlg && oldScene) {
        oldScene.cube.solve();
        oldScene.cube.performAlg(invertAlg(oldAlg));
    }

    state.casePlaying = caseIndex;
    state.algPlaying = algIndex;
    callback(state);

    scene.cube.solve();
    scene.cube.performAlg(invertAlg(alg));
}

function resetCube(scene: Scene, alg: string) {
    clearInterval(timer);
    state.casePlaying = -1;
    state.algPlaying = -1;
    callback(state);

    scene.cube.solve();
    scene.cube.performAlg(invertAlg(alg));
}
