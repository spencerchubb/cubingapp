import { algData } from "../lib/scripts/algData";
import * as AlgSetAPI from "../lib/scripts/api/algSet";
import { randElement } from "../lib/scripts/common/rand";
import { GRAY, type Scene, invertAlg, newCube, newPyraminx } from "../lib/scripts/rubiks-viz";
import { promoteAlg, demoteAlg } from "../lib/scripts/util";
import { CasesTodayStore, ShowScrambleStore } from "../lib/scripts/store";
import { scramble } from "./scramble";
import { log } from "../lib/scripts/common/vars";
import { type CubingUser, addAuthCallback } from "../lib/scripts/auth";
import { OrientationOptions, cubeOrientationOptions, pyraOrientationOptions } from "./orientation";

type InternalState = {
    showSolution: boolean,
    scene?: Scene,
    preAlg: string,
    postAlg: string,
}

let internalState: InternalState = {
    showSolution: false,
    scene: undefined,
    preAlg: "",
    postAlg: "",
};

export type ModalType = undefined | "Choose alg set" | "Delete alg set" | "Edit alg set";

export type State = {
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
    orientationOptions: OrientationOptions,
    orientation: string,
}

let state: State = {
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
    orientationOptions: cubeOrientationOptions,
    orientation: "",
};

export let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = (_state) => {
        state = Object.assign(state, _state);
        _callback(state);
    };
    return state;
}

addAuthCallback(user => {
    state.user = user;
    callback(state);

    if (user.auth) {
        initApp();
    }
});

async function initApp() {
    state.algSets = await AlgSetAPI.readAll();
    callback(state);
}

export function onClickSolutionButton() {
    internalState.showSolution = !internalState.showSolution;
    state.solutionButtonText = internalState.showSolution 
        ? internalState.postAlg
            ? `${invertAlg(internalState.postAlg)} ${getFirstAlg()}`.replace(/ +/g, ' ')
            : getFirstAlg()
        : "show solution";
    callback(state);
}

export function setScene(scene: Scene) {
    internalState.scene = scene;
}

/**
 * Returns the percentage of algs that have that number of reps.
 * For example, if it returns [0.5, 0.25, 0.25], then 50% of the algs have 0 reps,
 * 25% have 1 rep, and 25% have 2 reps.
 */
export function computeStats(): { reps: number, algs: number, ratio: number }[] {
    const trainingAlgs = state.algSet.trainingAlgs;
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
    if (!state.algSet?.trainingAlgs) {
        log("No algs")
        state.modalType = "Choose alg set";
        callback(state);
        return "";
    }
    const trainingAlgs = state.algSet.trainingAlgs;
    return trainingAlgs[0].Alg;
}

function setAlgSet(scene: Scene) {
    if (state.algSet.puzzle == "2x2") {
        newCube(scene.div, 2);

        state.orientationOptions = cubeOrientationOptions;
    } else if (state.algSet.puzzle == "3x3") {
        newCube(scene.div, 3);

        state.orientationOptions = cubeOrientationOptions;
    } else if (state.algSet.puzzle == "Pyraminx") {
        newPyraminx(scene.div);
        
        state.orientationOptions = pyraOrientationOptions;
    }

    state.orientation = localStorage.getItem(`${state.algSet.puzzle}-orientation`) ?? "";

    callback(state);
}

export function loadCurrAlg(): string {
    let alg = getFirstAlg();
    if (!alg) return "";

    internalState.showSolution = false;
    state.solutionButtonText = "show solution";
    callback(state);
    
    internalState.preAlg = randElement(state.algSet.pre);
    internalState.postAlg = randElement(state.algSet.post);

    const scene = internalState.scene;
    if (!scene || !scene.shapes) return "";
    
    setAlgSet(scene);

    // Orientation must be applied before hiding inactive stickers.
    scene.puzzle.performAlg(state.orientation);

    for (const stickerIdx of state.algSet.inactive) {
        const shape = scene.shapes[scene.puzzle.stickers[stickerIdx]];
        shape.color = shape.getColorBuffer(GRAY);
    }
    
    alg = `${internalState.preAlg} ${invertAlg(alg)} ${internalState.postAlg}`.replace(/ +/g, ' ');
    scene.puzzle.performAlg(alg);

    getScramble();

    return alg;
}

export async function nextAlg(promote: boolean): Promise<string> {
    if (promote) {
        promoteAlg(state.algSet.trainingAlgs);
    } else {
        demoteAlg(state.algSet.trainingAlgs);
    }

    const { id, name, trainingAlgs } = state.algSet;
    AlgSetAPI.update(id, name, trainingAlgs);
    
    incrementCasesToday();

    return loadCurrAlg();
}

export function getAlgSetNames(): string[] {
    return Object.keys(algData);
}

export async function getScramble(): Promise<void> {
    const scene = internalState.scene;
    if (!scene) return;

    if (!state.showScramble) return;

    // The algorithm should already be applied to the puzzle.
    const puzzle = scene.puzzle;
    if (puzzle.stickers.every((val, idx) => val === idx)) {
        log("getScramble error: puzzle is solved");
        return;
    }

    state.scramble = "loading...";
    callback(state);

    let alg = getFirstAlg();
    alg = `${internalState.preAlg} ${invertAlg(alg)} ${internalState.postAlg}`.replace(/ +/g, ' ');
    
    state.scramble = scramble(state.algSet.puzzle, alg);
    callback(state);
}

export function setShowScramble(b: boolean) {
    state.showScramble = b;
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

export function onChangeOrientation(event: Event) {
    const orientation = (event.target as HTMLSelectElement).value;
    state.orientation = orientation;

    localStorage.setItem(`${state.algSet.puzzle}-orientation`, orientation);

    loadCurrAlg();
}
