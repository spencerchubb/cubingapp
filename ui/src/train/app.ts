import * as AlgSetAPI from "../lib/scripts/api/algSet";
import { randElement } from "../lib/scripts/common/rand";
import { GRAY, type Scene, invertAlg, newCube, newPyraminx } from "../lib/scripts/rubiks-viz";
import { SQ1 } from "../lib/scripts/rubiks-viz/sq1";
import { promoteAlg, demoteAlg } from "../lib/scripts/util";
import { CasesTodayStore, ShowScrambleStore } from "../lib/scripts/store";
import { scramble } from "./scramble";
import { log } from "../lib/scripts/common/vars";
import { type CubingUser, addAuthCallback } from "../lib/scripts/auth";
import { scrambleSQ1, simplifySQ1Alg } from "../lib/scripts/cstimer/scramble_sq1";

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

export type ModalType =
    undefined
    | "Choose alg set"
    | "Alg set actions" | "Rename alg set" | "Hide algs"
    | "Deleted set actions" | "Permanently delete";

export type State = {
    page: "landing" | "train" | "deleted sets",
    user?: CubingUser,
    algSet: AlgSetAPI.AlgSet,
    algSetEditing?: AlgSetAPI.AlgSet,
    algSetDeleting?: AlgSetAPI.AlgSet,
    algSets?: AlgSetAPI.MinAlgSet[],
    deletedAlgSets?: AlgSetAPI.MinAlgSet[],
    solutionButtonText: string,
    modalType: ModalType,
    showScramble: boolean,
    scramble: string,
    orientation: string,
}

let state: State = {
    page: "landing",
    user: undefined,
    algSet: {} as AlgSetAPI.AlgSet,
    algSetEditing: undefined,
    algSetDeleting: undefined,
    algSets: undefined,
    deletedAlgSets: undefined,
    solutionButtonText: "Show solution",
    modalType: undefined,
    showScramble: ShowScrambleStore.get(),
    scramble: "",
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

export function initScene(scene: Scene) {
    internalState.scene = scene;
    loadCurrAlg();
}

export function onClickSolutionButton() {
    internalState.showSolution = !internalState.showSolution;
    state.solutionButtonText = internalState.showSolution
        ? state.algSet.puzzle == "SQ1"
            ? simplifySQ1Alg(`${invertAlg(internalState.postAlg)} ${getFirstAlg()}`.trim())
            : `${invertAlg(internalState.postAlg)} ${getFirstAlg()}`.trim()
        : "Show solution";

    callback(state);
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
        state.page = "landing";
        callback(state);
        return "";
    }

    // Find the first alg that is not hidden.
    let alg: AlgSetAPI.TrainingAlg | undefined;
    for (let i = 0; (!alg || alg.Hide) && i < state.algSet.trainingAlgs.length; i++) {
        alg = state.algSet.trainingAlgs[i];
    }

    // If all algs are hidden, go to landing page and show an alert.
    if (!alg || alg.Hide) {
        alert(`All algs are hidden in ${state.algSet.name}`);
        state.page = "landing";
        callback(state);
        return "";
    }

    return alg.Alg;
}

function setAlgSet(scene: Scene) {
    if (state.algSet.puzzle == "2x2") {
        newCube(scene.div, 2);
    } else if (state.algSet.puzzle == "3x3") {
        newCube(scene.div, 3);
    } else if (state.algSet.puzzle == "Pyraminx") {
        newPyraminx(scene.div);
    } else if (state.algSet.puzzle == "SQ1") {
        // Do nothing
    }

    state.orientation = localStorage.getItem(`${state.algSet.puzzle}-orientation`) ?? "";

    callback(state);
}

export function loadCurrAlg(): string {
    let alg = getFirstAlg();
    if (!alg) return "";

    internalState.showSolution = false;
    state.solutionButtonText = "Show solution";
    callback(state);
    
    internalState.preAlg = randElement(state.algSet.pre);
    internalState.postAlg = randElement(state.algSet.post);

    const scene = internalState.scene;
    if (!scene || !scene.shapes) return "";
    
    setAlgSet(scene);

    alg = `${internalState.preAlg} ${invertAlg(alg)} ${internalState.postAlg}`.trim();
    
    if (state.algSet.puzzle == "SQ1") {
        document.querySelector("canvas")?.style.setProperty("display", "none");

        const sq1 = new SQ1();
        sq1.performAlg(alg);

        scene.div.innerHTML = `<div style="display: flex; align-items: center; height: 100%;">
            <div style="width: 160px; height: 160px;">
                ${sq1.svgTop(160)}
            </div>
            <div style="width: 160px; height: 160px;">
                ${sq1.svgBottom(160)}
            </div>
        </div>`;
    } else {
        document.querySelector("canvas")?.style.setProperty("display", "");

        // Orientation must be applied before hiding inactive stickers.
        scene.puzzle.performAlg(state.orientation);

        for (const stickerIdx of state.algSet.inactive) {
            const shape = scene.shapes[scene.puzzle.stickers[stickerIdx]];
            shape.color = shape.getColorBuffer(GRAY);
        }
        
        scene.puzzle.performAlg(alg);
    }

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

export async function getScramble(): Promise<void> {
    const scene = internalState.scene;
    if (!scene) return;

    if (!state.showScramble) return;

    state.scramble = "loading...";
    callback(state);

    let alg = getFirstAlg();
    alg = `${internalState.preAlg} ${invertAlg(alg)} ${internalState.postAlg}`.trim();
    
    if (state.algSet.puzzle == "SQ1") {
        state.scramble = scrambleSQ1(alg);
        callback(state);
        return;
    }
    
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

export function onChangeOrientation(orientation: string) {
    state.orientation = orientation;
    loadCurrAlg();
}
