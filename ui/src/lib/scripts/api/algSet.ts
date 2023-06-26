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

export async function create(set: string): Promise<AlgSet> {
    return post("/createAlgSet", { set });
}

export async function read(id?: number): Promise<AlgSet> {
    return post("/readAlgSet", { id });
}

export async function readAll(): Promise<MinAlgSet[]> {
    return (await post("/readAlgSets", { })) ?? [];
}

export async function update(id: number, set: string, trainingAlgs: TrainingAlg[]): Promise<void> {
    return post("/updateAlgSet", { id, set, trainingAlgs });
}

export async function deleteSet(id: number): Promise<void> {
    return post("/deleteAlgSet", { id });
}