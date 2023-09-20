import { randElement } from "../../src/lib/scripts/common/rand";
import { GRAY, type Scene, invertAlg, newCube, newPyraminx, Color } from "../../src/lib/scripts/rubiks-viz";
import { SQ1 } from "../../src/lib/scripts/rubiks-viz/sq1";
import { scramble } from "./scramble";
import { scrambleSQ1, simplifySQ1Alg } from "../../src/lib/scripts/cstimer/scramble_sq1";
import { getInitialOrientation } from "../../src/lib/components/SelectOrientation/orientationOptions";
import { AlgSetCase, type AlgSet } from "../../src/lib/scripts/algSets";
import { removeRotations } from "./algConvert";

type InternalState = {
    scene?: Scene,
    orientation: string,
}

let internalState: InternalState = {
    scene: undefined,
    orientation: "",
};

export type State = {
    algSet?: AlgSet,
    currentCase?: AlgSetCase,
    subsets: { [key: string]: boolean }, // Key is subset, value indicates whether it is selected
    scramble: string,
    preAlg: string,
    postAlg: string,
}

let state: State = {
    algSet: undefined,
    currentCase: undefined,
    subsets: JSON.parse((localStorage.getItem(`${location.pathname}-subsets`) ?? "{}")),
    scramble: "",
    preAlg: "",
    postAlg: "",
};

export let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = (_state) => {
        state = Object.assign(state, _state);
        _callback(state);
    };
    return state;
}

export function initScene(scene: Scene, algSet: AlgSet) {
    internalState.scene = scene;
    state.algSet = algSet;

    // Populate subsets
    for (const algSetCase of algSet.cases) {
        for (const subset of algSetCase.subsets ?? []) {
            if (state.subsets[subset] === undefined) state.subsets[subset] = false;
        }
    }

    internalState.orientation = getInitialOrientation(state.algSet.puzzle);

    // This must be called after populating subsets and setting initial orientation.
    newCase();

    callback(state);
}

function getRandCase(): AlgSetCase | undefined {
    let cases: AlgSetCase[] = (state.algSet?.cases ?? []);

    // If at least one is true, then filter out subsets that aren't selected.
    if (Object.values(state.subsets).some(v => v)) {
        cases = cases.filter(c => {
            // Return true if at least one subset is selected
            return c.subsets?.find(subset => state.subsets[subset]);
        });
    }
    if (cases.length == 0) return undefined;
    return randElement(cases);
}

function getAlg(algSetCase: AlgSetCase): string | undefined {
    // See if there is an alg in `algs`
    let alg: string = (algSetCase.algs ?? [])[0];

    // If not, see if there is an alg in `variants`
    alg ||= (algSetCase.variants ?? [])[0].algs[0];

    return alg;
}

export function setupCase(): void {
    const algSetCase = state.currentCase;
    if (!algSetCase) return;

    if (!state.algSet) return;

    let scene = internalState.scene;
    if (!scene) return;

    if (state.algSet.puzzle == "SQ1") {
        document.querySelector("canvas")?.style.setProperty("display", "none");

        const sq1 = new SQ1();
        sq1.performAlg(state.scramble);

        scene.div.innerHTML = `<div style="display: flex; align-items: center; height: 100%;">
            <div style="width: 160px; height: 160px;">
                ${sq1.svgTop(160)}
            </div>
            <div style="width: 160px; height: 160px;">
                ${sq1.svgBottom(160)}
            </div>
        </div>`;
        return;
    }
    
    document.querySelector("canvas")?.style.setProperty("display", "");

    if (state.algSet.puzzle == "Pyraminx") {
        internalState.scene = newPyraminx(scene.div);
    } else {
        const layers = parseInt(state.algSet.puzzle.charAt(0));
        internalState.scene = newCube(scene.div, layers);
    }

    // Orientation must be applied before setting colors.
    scene.puzzle.performAlg(internalState.orientation);

    setColors(scene, state.algSet.gray ?? [], GRAY);
    
    scene.puzzle.performAlg(state.scramble);
}

/**
 * Choose a new case and set it up.
 */
export function newCase(): void {
    state.currentCase = getRandCase();

    if (!state.algSet?.pre || !state.algSet?.post) {
        console.log("No pre/post algs");
        return;
    }
    state.preAlg = randElement(state.algSet.pre);
    state.postAlg = randElement(state.algSet.post);

    state.scramble = getScramble() ?? "error";

    setupCase();

    callback(state);
}

export function getScramble(): string | undefined {
    const scene = internalState.scene;
    if (!scene) return;

    const algSetCase = state.currentCase;
    if (!algSetCase) return;

    let alg: string | undefined = getAlg(algSetCase);
    if (!alg) return;

    // 2x2 algs should only contain RUF moves
    if (state.algSet?.puzzle === "2x2") {
        let i = 1;
        while (!onlyRUF(alg)) {
            alg = (algSetCase.algs ?? [])[i];
            i++;
        }
    }

    console.log({alg})
    alg = `${state.preAlg} ${invertAlg(alg)} ${invertAlg(state.postAlg)}`.trim();
    console.log({alg})
    
    if (state.algSet?.puzzle == "SQ1") {
        console.log({alg})
        alg = simplifySQ1Alg(alg);
        console.log({alg})
        return scrambleSQ1(alg);
    }
    
    // Remove rotations because they mess with the scrambler.
    alg = removeRotations(alg);
    return scramble(state.algSet?.puzzle ?? "", alg);
}

export function onChangeOrientation(orientation: string) {
    internalState.orientation = orientation;
    setupCase();
}

export function onSelectSubset(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    state.subsets[value] = !state.subsets[value];
    localStorage.setItem(`${location.pathname}-subsets`, JSON.stringify(state.subsets));
    callback(state);
}

function onlyRUF(alg: string): boolean {
    return alg
        .split(" ")
        .every(move => ["R", "U", "F"].includes(move[0]));
}

function setColors(scene: Scene, stickerIndices: number[], color: Color) {
    if (!scene.shapes) return;
    for (const i of stickerIndices) {
        const shape = scene.shapes[scene.puzzle.stickers[i]];
        shape.color = shape.getColorBuffer(color);
    }
}