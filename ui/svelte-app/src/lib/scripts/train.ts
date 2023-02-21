import { createTrainingAlgs, getTrainingAlgs, TrainingAlg, updateTrainingAlgs } from "./api";
import { createBuffers } from "./buffers";
import { GRAY } from "./colors";
import { setColor } from "./cube";
import type { Scene } from "./scene";
import { promoteAlg, demoteAlg } from "./util";

import { algData } from "./algData";
import { randInt } from "./common/rand";

import { scramble } from "@spencerchubb/solver";

type State = {
    scene: Scene,
    setName: string,
    preRotation: string,
    algSetID: number,
    trainingAlgs: TrainingAlg[],
    cube: string,
    inactiveStickers: number[],
    preAUF: string,
    postAUF: string,
}

let state: State = {
    scene: null,
    setName: null,
    preRotation: "",
    algSetID: null,
    trainingAlgs: null,
    cube: null,
    inactiveStickers: null,
    preAUF: "",
    postAUF: "",
};

export function applyAUFs(alg: string): string {
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

export async function loadCurrAlg(uid: number, setName: string): Promise<string> {
    const scene = state.scene;
    if (!scene) {
        console.error("Scene not set. Have you called setScene()?");
        return;
    }

    if (state.setName !== setName) {
        state.setName = setName;
        const res = await getTrainingAlgs(uid, setName);
        state.algSetID = res.id;
        state.trainingAlgs = res.trainingAlgs;

        if (algData[setName].cube == "2x2") {
            scene.cube.setNumOfLayers(2);
            scene.buffers = createBuffers(scene);
            scene.cube.solve();
        } else if (algData[setName].cube == "3x3") {
            scene.cube.setNumOfLayers(3);
            scene.buffers = createBuffers(scene);
            scene.cube.solve();
        }
    }

    if (!state.trainingAlgs || state.trainingAlgs.length == 0) {
        console.error("No algs to load");
        return;
    }

    let alg = state.trainingAlgs[0].Alg;

    state.preAUF = generateRandAUF();
    state.postAUF = generateRandAUF();

    scene.cube.solve();
    scene.cube.execAlg(state.preRotation);

    algData[setName].inactive.forEach(stickerIdx => {
        setColor(scene.cube.stickers[stickerIdx], GRAY);
    });

    scene.cube.execAlgReverse(alg);

    return alg;
}

export async function nextAlg(promote: boolean, uid: number, setName: string): Promise<string> {
    if (promote) {
        promoteAlg(state.trainingAlgs);
    } else {
        demoteAlg(state.trainingAlgs);
    }

    if (state.algSetID === -1) {
        const res = await createTrainingAlgs(uid, setName, state.trainingAlgs, state.cube, state.inactiveStickers);
        if (res.success) {
            state.algSetID = res.id;
        } else {
            console.error("Failed to create training algs");
        }
    } else {
        updateTrainingAlgs(state.algSetID, state.trainingAlgs);
    }

    return loadCurrAlg(uid, setName);
}

export function getAlgSetNames(): string[] {
    return Object.keys(algData);
}

// TODO onlyOrientation and disregard
export function getScramble(alg: string): string {
    return scramble(alg, "U,U',F,F',R,R'", [], []);
}
