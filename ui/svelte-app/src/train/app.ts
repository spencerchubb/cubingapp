import { algData } from "../lib/scripts/algData";
import * as AlgSetAPI from "../lib/scripts/api/algSet";
import { randElement, randInt } from "../lib/scripts/common/rand";
import { GRAY, Scene, setColor } from "../lib/scripts/rubiks-viz";
import { promoteAlg, demoteAlg } from "../lib/scripts/util";
import { AlgSetStore, CasesTodayStore, OrientationStore, ShowScrambleStore } from "../lib/scripts/store";
import { scramble } from "@spencerchubb/solver";
import { log } from "../lib/scripts/common/vars";
import { CubingAppUser, initialAuthCheck, signOut } from "../lib/scripts/auth";
import type { ModalType } from "./modal";

const NEW_ALG_INDEX = -1;

type State = {
    showSolution: boolean,
    scene: Scene,
    preAUF: string,
    postAUF: string,
    orientation: string,
}

let state: State = {
    showSolution: false,
    scene: null,
    preAUF: "",
    postAUF: "",
    orientation: OrientationStore.get(),
};

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return uiState;
}

export function setUIState(newState: UIState) {
    uiState = newState;
}

export type UIState = {
    user: CubingAppUser,
    algSet: AlgSetAPI.AlgSet,
    algSetEditing?: AlgSetAPI.AlgSet,
    algSets: AlgSetAPI.AlgSet[],
    solutionButtonText: string,
    modalOpen: boolean,
    modalType: ModalType,
    selectedAlg: AlgSetAPI.TrainingAlg,
    selectedAlgIndex: number,
    showScramble: boolean,
    scramble: string,
}

let uiState: UIState = {
    user: null,
    algSet: null,
    algSetEditing: null,
    algSets: [],
    solutionButtonText: "show solution",
    modalOpen: false,
    modalType: null,
    selectedAlg: null,
    selectedAlgIndex: 0,
    showScramble: ShowScrambleStore.get(),
    scramble: "",
};

export async function initApp() {
    uiState.user = initialAuthCheck();
    if (!uiState.user) return;

    uiState.algSets = await AlgSetAPI.getAll(uiState.user.uid);
    if (!uiState.algSets) {
        // setModal("choose alg set");
        // callback(uiState);
        return;
    }
    const algSetId = AlgSetStore.get();

    // If there is an algSet with algSetId, use it.
    // Otherwise, use the first algSet.
    const found = uiState.algSets.find(algSet => algSet.id === algSetId);
    uiState.algSet = found
        ? found
        : uiState.algSets[0];

    callback(uiState);
}

export function onSignIn(user: CubingAppUser) {
    uiState.user = user;
    callback(uiState);
}

export function onSignOut() {
    uiState.user = null;
    callback(uiState);

    signOut();
}

export function onClickSolutionButton() {
    state.showSolution = !state.showSolution;
    uiState.solutionButtonText = state.showSolution 
        ? applyAUFs(getFirstAlg())
        : "show solution";
    callback(uiState);
}


export function onClickAlgorithm(algIndex: number) {
    setModal("edit alg");
    const alg = uiState.algSet.trainingAlgs[algIndex];
    uiState.selectedAlg = JSON.parse(JSON.stringify(alg));
    uiState.selectedAlgIndex = algIndex;
    callback(uiState);
}

export function onAddAlgorithm() {
    uiState.selectedAlg = {
        Alg: "",
        Score: 0,
    };
    uiState.selectedAlgIndex = NEW_ALG_INDEX;
    setModal("edit alg");
    callback(uiState);
}

export function onChangeAlgorithm(event: Event) {
    const target = event.target as HTMLInputElement;
    uiState.selectedAlg.Alg = target.value;
}

export function onDeleteAlgorithm() {
    if (uiState.selectedAlgIndex === NEW_ALG_INDEX) {
        setModal(null);
        callback(uiState);
        return;
    }

    uiState.algSet.trainingAlgs.splice(uiState.selectedAlgIndex, 1);
    setModal(null);
    callback(uiState);

    const { id, name, trainingAlgs } = uiState.algSet;
    AlgSetAPI.update(id, name, trainingAlgs);
}

export function onSaveAlgorithm() {
    // If adding new alg, prepend it to the list.
    // Otherwise, replace the alg at the selected index.
    if (uiState.selectedAlgIndex === NEW_ALG_INDEX) {
        uiState.algSet.trainingAlgs.unshift(uiState.selectedAlg);
    } else {
        const alg = uiState.selectedAlg;
        const algIndex = uiState.selectedAlgIndex;
        uiState.algSet.trainingAlgs[algIndex] = alg;
    }
    setModal(null);
    callback(uiState);

    const { id, name, trainingAlgs } = uiState.algSet;
    AlgSetAPI.update(id, name, trainingAlgs);

    loadCurrAlg();
}

/**
 * This function sets the modal state because modalOpen and modalType
 * are coupled to each other.
 */
export function setModal(type: ModalType) {
    if (!type) {
        uiState.modalOpen = false;
        uiState.modalType = null;
        return;
    }

    uiState.modalOpen = true;
    uiState.modalType = type;
}

function applyAUFs(alg: string): string {
    return _applyAUFs(alg, state.preAUF, state.postAUF);
}

export function applyAUFsBackwards(alg: string): string {
    const invPre = invert(state.preAUF);
    const invPost = invert(state.postAUF);
    return _applyAUFs(alg, invPost, invPre);
}

function _applyAUFs(alg: string, preAUF: string, postAUF: string): string {
    if (preAUF) {
        alg = `${preAUF} ${alg}`;
    }
    if (postAUF) {
        alg = `${alg} ${postAUF}`;
    }
    let split = alg.split(" ");
    const beginning = _cancelPair(split[0], split[1]);
    const end = _cancelPair(split[split.length - 2], split[split.length - 1]);
    split = split.slice(2, -2);
    split = beginning.concat(split).concat(end);
    return split.join(" ");
}

function _cancelPair(a: string, b: string): string[] {
    if (a[0] !== "U" || b[0] !== "U") {
        return [a, b];
    }
    const canceledValue = (_moveToValue(a) + _moveToValue(b)) % 4;
    if (canceledValue === 0) {
        return [];
    }
    return [_valueToMove(canceledValue)];
}

function _moveToValue(move: string): number {
    if (move.endsWith("'")) {
        return 3;
    } else if (move.endsWith("2")) {
        return 2;
    } else {
        return 1;
    }
}

function _valueToMove(value: number): string {
    const moves = ["", "U", "U2", "U'"];
    return moves[value];
}

function invert(move: string) {
    if (move === "") {
        return "";
    } else if (move.endsWith("'")) {
        return move.slice(0, -1);
    } else if (move.endsWith("2")) {
        return move;
    } else {
        return `${move}'`;
    }
}

function generateRandAUF(): string {
    const options = ["", "U", "U2", "U'"];
    return options[randInt(4)];
}

export function setScene(scene: Scene) {
    state.scene = scene;
}

export function getTrainingAlgs(): AlgSetAPI.TrainingAlg[] {
    return uiState.algSet.trainingAlgs;
}

/**
 * Returns the percentage of algs that have that number of reps.
 * For example, if it returns [0.5, 0.25, 0.25], then 50% of the algs have 0 reps,
 * 25% have 1 rep, and 25% have 2 reps.
 */
export function computeStats(): { reps: number, algs: number, ratio: number }[] {
    const trainingAlgs = uiState.algSet.trainingAlgs;
    const numReps = trainingAlgs.map(alg => alg.Score);
    const maxReps = Math.max(...numReps);
    const stats = new Array(maxReps + 1).fill(0);
    numReps.forEach(reps => stats[reps]++);
    return stats.map((count, i) => ({
        reps: i,
        algs: count,
        // round to 2 decimals and return as a percentage
        ratio: Math.round((count / trainingAlgs.length) * 100),
    }));
}

function getFirstAlg(): string {
    if (!uiState.algSet?.trainingAlgs) {
        log("No alg set loaded");
        return "";
    }
    const trainingAlgs = uiState.algSet.trainingAlgs;
    return trainingAlgs[0].Alg;
}

export async function setAlgSet() {
    const scene = state.scene;
    if (!scene) {
        console.error("Scene not set. Have you called setScene()?");
        return;
    }

    if (uiState.algSet.cube == "2x2") {
        scene.cube.setNumOfLayers(2);
        scene.cube.solve();
    } else if (uiState.algSet.cube == "3x3") {
        scene.cube.setNumOfLayers(3);
        scene.cube.solve();
    }
}

export function loadCurrAlg(): string {
    let alg = getFirstAlg();
    if (!alg) return;

    uiState.scramble = "";
    callback(uiState);
    getScramble();

    state.preAUF = generateRandAUF();
    state.postAUF = generateRandAUF();

    const scene = state.scene;
    scene.cube.solve();
    scene.cube.performAlg(state.orientation);

    uiState.algSet.inactive.forEach(stickerIdx => {
        setColor(scene.cube.stickers[stickerIdx], GRAY);
    });

    let algWithAUFs = applyAUFs(alg);
    scene.cube.performAlgReverse(algWithAUFs);

    return alg;
}

export async function nextAlg(promote: boolean, setName: string): Promise<string> {
    if (promote) {
        promoteAlg(uiState.algSet.trainingAlgs);
    } else {
        demoteAlg(uiState.algSet.trainingAlgs);
    }

    if (uiState.algSet.id === -1) {
        const uid = uiState.user.uid;
        const { trainingAlgs, cube, inactive, moves, disregard, onlyOrientation } = uiState.algSet;
        const res = await AlgSetAPI.create(uid, setName, trainingAlgs, cube, inactive, moves, disregard, onlyOrientation);
        uiState.algSet.id = res.id;
    } else {
        const { id, name, trainingAlgs } = uiState.algSet;
        AlgSetAPI.update(id, name, trainingAlgs);
    }
    
    incrementCasesToday();

    return loadCurrAlg();
}

export function getAlgSetNames(): string[] {
    return Object.keys(algData);
}

export async function getScramble(): Promise<void> {
    if (!uiState.showScramble) return;
    
    let alg = getFirstAlg();
    const scrambles = await scramble({
        alg,
        moves: "U U' F F' R R'",
        disregard: uiState.algSet.disregard,
        onlyOrientation: uiState.algSet.onlyOrientation,
    });
    const _scramble = randElement(scrambles);
    uiState.scramble = applyAUFsBackwards(_scramble);
    callback(uiState);
}

export function setShowScramble(b: boolean) {
    ShowScrambleStore.set(b);
}

function sameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

export function getCasesToday(): number {
    const casesToday = CasesTodayStore.get();
    const date = new Date(casesToday.msSinceEpoch);
    const today = new Date();
    // today.setDate(today.getDate() + 1); // set today to tomorrow for testing
    if (!sameDay(date, today)) {
        log("Resetting cases today")
        casesToday.count = 0;
        casesToday.msSinceEpoch = today.getTime();
        CasesTodayStore.set(casesToday);
    }
    return casesToday.count;
}

function incrementCasesToday() {
    const casesToday = CasesTodayStore.get();
    casesToday.count++;
    CasesTodayStore.set(casesToday);
}

export const orientationOptions: {
    label: string,
    value: string,
}[] = [
    { label: "white green", value: "" },
    { label: "white orange", value: "y'" },
    { label: "white blue", value: "y2" },
    { label: "white red", value: "y" },
    { label: "yellow green", value: "z2" },
    { label: "yellow orange", value: "z2 y" },
    { label: "yellow blue", value: "z2 y2" },
    { label: "yellow red", value: "z2 y'" },
    { label: "green yellow", value: "x" },
    { label: "green orange", value: "x y'" },
    { label: "green white", value: "x y2" },
    { label: "green red", value: "x y" },
    { label: "blue white", value: "x'" },
    { label: "blue orange", value: "x' y'" },
    { label: "blue yellow", value: "x' y2" },
    { label: "blue red", value: "x' y" },
    { label: "orange green", value: "z" },
    { label: "orange yellow", value: "z y'" },
    { label: "orange blue", value: "z y2" },
    { label: "orange white", value: "z y" },
    { label: "red green", value: "z'" },
    { label: "red white", value: "z' y'" },
    { label: "red blue", value: "z' y2" },
    { label: "red yellow", value: "z' y" },
];

export let Orientation = {
    get: OrientationStore.get,
    set: (orientation: string) => {
        state.orientation = orientation;
        OrientationStore.set(orientation);

        loadCurrAlg();
    },
};
