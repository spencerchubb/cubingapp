import { post } from "./common";

export type TrainingAlg = {
    Score: number,
    Alg: string,
}

type CreateTrainingAlgsResponse = {
    id: number,
}

export type AlgSet = {
    cube: string,
    disregard: number[],
    id: number,
    inactive: number[],
    moves: string,
    name: string,
    onlyOrientation: number[],
    trainingAlgs: TrainingAlg[],
}

export async function create(
    uid: number,
    set: string,
    trainingAlgs: TrainingAlg[],
    cube: string,
    inactiveStickers: number[],
    moves: string,
    disregard: number[],
    onlyOrientation: number[],
): Promise<CreateTrainingAlgsResponse> {
    return post("/createAlgSet", { uid, set, trainingAlgs, cube, inactiveStickers, moves, disregard, onlyOrientation });
}

export async function createPrebuilt(uid: number, set: string): Promise<AlgSet> {
    return post("/createPrebuiltAlgSet", { uid, set });
}

export async function deleteSet(id: number): Promise<void> {
    return post("/deleteAlgSet", { id });
}

export async function get(uid: number, set: string): Promise<AlgSet> {
    return post("/getAlgSet", { uid, set });
}

export async function getAll(uid: number): Promise<AlgSet[]> {
    return post("/getAlgSets", { uid });
}

export async function update(id: number, set: string, trainingAlgs: TrainingAlg[]): Promise<void> {
    return post("/updateAlgSet", { id, set, trainingAlgs });
}