import { algData } from "../lib/scripts/algData";
import * as AlgSetAPI from "../lib/scripts/api/algSet";
import { randElement } from "../lib/scripts/common/rand";
import { Cube, GRAY, type Scene, invertAlg, newCube, newPyraminx } from "../lib/scripts/rubiks-viz";
import { promoteAlg, demoteAlg } from "../lib/scripts/util";
import { CasesTodayStore, ShowScrambleStore } from "../lib/scripts/store";
import { scramble } from "./scramble";
import { log } from "../lib/scripts/common/vars";
import { type CubingUser, addAuthCallback } from "../lib/scripts/auth";

type State = {
    showSolution: boolean,
    scene?: Scene,
    preAlg: string,
    postAlg: string,
    orientation: string,
}

let state: State = {
    showSolution: false,
    scene: undefined,
    preAlg: "",
    postAlg: "",
    orientation: localStorage.getItem("orientation") ?? "",
};

export let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = (_state) => {
        uiState = Object.assign(uiState, _state);
        _callback(uiState);
    };
    return uiState;
}

export function setUIState(newState: UIState) {
    uiState = newState;
}

export type ModalType = undefined | "choose alg set" | "delete alg set" | "edit alg set";

export type UIState = {
    page: "landing" | "train",
    user?: CubingUser,
    algSet: AlgSetAPI.AlgSet,
    algSetEditing?: AlgSetAPI.AlgSet,
    algSets?: AlgSetAPI.MinAlgSet[],
    solutionButtonText: string,
    modalType: ModalType,
    selectedAlg: AlgSetAPI.TrainingAlg,
    selectedAlgIndex: number,
    showScramble: boolean,
    scramble: string,
}

let uiState: UIState = {
    page: "landing",
    user: undefined,
    algSet: {} as AlgSetAPI.AlgSet,
    algSetEditing: undefined,
    algSets: undefined,
    solutionButtonText: "show solution",
    modalType: undefined,
    selectedAlg: { Score: 0, Alg: "" },
    selectedAlgIndex: 0,
    showScramble: ShowScrambleStore.get(),
    scramble: "",
};

addAuthCallback(user => {
    uiState.user = user;
    callback(uiState);

    if (user.auth) {
        initApp();
    }
});

async function initApp() {
    uiState.algSets = await AlgSetAPI.readAll();
    callback(uiState);
}

export function onClickSolutionButton() {
    state.showSolution = !state.showSolution;
    uiState.solutionButtonText = state.showSolution 
        ? state.postAlg
            ? `${invertAlg(state.postAlg)} ${getFirstAlg()}`.replace(/ +/g, ' ')
            : getFirstAlg()
        : "show solution";
    callback(uiState);
}

export function setScene(scene: Scene) {
    state.scene = scene;
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
        log("No algs")
        uiState.modalType = "choose alg set";
        callback(uiState);
        return "";
    }
    const trainingAlgs = uiState.algSet.trainingAlgs;
    return trainingAlgs[0].Alg;
}

function setAlgSet(scene: Scene) {
    if (uiState.algSet.puzzle == "2x2") {
        newCube(scene.div, 2);
    } else if (uiState.algSet.puzzle == "3x3") {
        newCube(scene.div, 3);
    } else if (uiState.algSet.puzzle == "Pyraminx") {
        newPyraminx(scene.div)
    }

    if (!scene.shapes) return;
    for (const stickerIdx of uiState.algSet.inactive) {
        const shape = scene.shapes[stickerIdx];
        shape.color = shape.getColorBuffer(GRAY);
    }
}

export function loadCurrAlg(): string {
    let alg = getFirstAlg();
    if (!alg) return "";

    state.showSolution = false;
    uiState.solutionButtonText = "show solution";
    callback(uiState);
    
    state.preAlg = randElement(uiState.algSet.pre);
    state.postAlg = randElement(uiState.algSet.post);

    const scene = state.scene;
    if (!scene) return "";
    
    setAlgSet(scene);
    
    scene.puzzle.performAlg(state.orientation);
    
    alg = `${state.preAlg} ${invertAlg(alg)} ${state.postAlg}`.replace(/ +/g, ' ');
    scene.puzzle.performAlg(alg);

    getScramble();

    return alg;
}

export async function nextAlg(promote: boolean): Promise<string> {
    if (promote) {
        promoteAlg(uiState.algSet.trainingAlgs);
    } else {
        demoteAlg(uiState.algSet.trainingAlgs);
    }

    const { id, name, trainingAlgs } = uiState.algSet;
    AlgSetAPI.update(id, name, trainingAlgs);
    
    incrementCasesToday();

    return loadCurrAlg();
}

export function getAlgSetNames(): string[] {
    return Object.keys(algData);
}

export async function getScramble(): Promise<void> {
    const scene = state.scene;
    if (!scene) return;

    if (!uiState.showScramble) return;

    // The algorithm should already be applied to the puzzle.
    const puzzle = scene.puzzle;
    if (puzzle.stickers.every((val, idx) => val === idx)) {
        log("getScramble error: puzzle is solved");
        return;
    }

    uiState.scramble = "loading...";
    callback(uiState);

    let alg = getFirstAlg();
    alg = `${state.preAlg} ${invertAlg(alg)} ${state.postAlg}`.replace(/ +/g, ' ');
    
    uiState.scramble = scramble(uiState.algSet.puzzle, alg);
    callback(uiState);
}

export function setShowScramble(b: boolean) {
    uiState.showScramble = b;
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
    get: () => localStorage.getItem("orientation") ?? "",
    set: (orientation: string) => {
        state.orientation = orientation;
        localStorage.setItem("orientation", orientation);

        loadCurrAlg();
    },
};
