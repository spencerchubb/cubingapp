import type { Scene } from "../lib/scripts/rubiks-viz";

export {};

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type State = {
    scene: Scene,
    scramble: string,
    moves: string,
}

let state: State = {
    scene: null,
    scramble: "",
    moves: "",
};

export function initApp(scene: Scene) {
    // scene.enableKey = null;
    // scene.dragEnabled = false;
    state.scene = scene;

    let url = new URL(document.URL);
    state.scramble = url.searchParams.get("scramble") || "";
    state.moves = url.searchParams.get("moves") || "";

    updateCubeState();

    callback(state);
}

export function updateCubeState() {
    state.scene.cube.solve();
    state.scene.cube.performAlg(state.scramble);
    state.scene.cube.performAlg(state.moves);
}

export function copyUrl() {
    let url = new URL(document.URL);
    urlSetParam(url, "scramble", state.scramble);
    urlSetParam(url, "moves", state.moves);
    navigator.clipboard.writeText(url.toString());
}

function urlSetParam(url: URL, key: string, value: string) {
    if (!value) {
        url.searchParams.delete(key);
        return;
    }
    url.searchParams.set(key, value);
}
