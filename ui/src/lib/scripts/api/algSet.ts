import { post } from "./common";

export type TrainingAlg = {
    Score: number,
    Alg: string,
}

type CreateTrainingAlgsResponse = {
    id: number,
}

export type MinAlgSet = {
    id: number,
    name: string,
}

export type AlgSet =
    MinAlgSet & {
    puzzle: string,
    disregard: number[],
    inactive: number[],
    onlyOrientation: number[],
    trainingAlgs: TrainingAlg[],
}

export async function create(algSet: AlgSet): Promise<CreateTrainingAlgsResponse> {
    return post("/createAlgSet", algSet);
}

export async function createPrebuilt(set: string): Promise<AlgSet> {
    return post("/createPrebuiltAlgSet", { set });
}

export async function read(set: string): Promise<AlgSet> {
    return post("/readAlgSet", { set });
}

export async function readAll(): Promise<MinAlgSet[]> {
    const result = await post("/readAlgSets", { });
    return result ?? [];
}

export async function update(id: number, set: string, trainingAlgs: TrainingAlg[]): Promise<void> {
    return post("/updateAlgSet", { id, set, trainingAlgs });
}

export async function deleteSet(id: number): Promise<void> {
    return post("/deleteAlgSet", { id });
}