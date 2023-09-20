import { post } from "./common";

// TODO maybe remove api

export type TrainingAlg = {
    Score: number,
    Alg: string,
    Hide?: boolean,
}

export type MinAlgSet = {
    id: number,
    name: string,
}

export type AlgSet =
    MinAlgSet & {
    puzzle: string,
    inactive: number[],
    trainingAlgs: TrainingAlg[],
    pre: string[],
    post: string[]
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

export async function readDeleted(): Promise<MinAlgSet[]> {
    return (await post("/readDeletedAlgSets", { })) ?? [];
}

export async function update(id: number, name: string, trainingAlgs?: TrainingAlg[]): Promise<void> {
    return post("/updateAlgSet", { id, name, trainingAlgs });
}

export async function deleteSet(id: number): Promise<void> {
    return post("/deleteAlgSet", { id });
}

export async function deleteSetPermanently(id: number): Promise<void> {
    return post("/deleteAlgSetPermanently", { id });
}

export async function restoreSet(id: number): Promise<void> {
    return post("/restoreAlgSet", { id });
}