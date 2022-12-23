import { url } from "./common/vars";

export type TrainingAlg = {
    Score: number,
    Alg: string,
}

type TrainingAlgsRecord = {
    Uid: number,
    Set: string,
    TrainingAlgs: TrainingAlg[],
};

type GetTrainingAlgsResponse = {
    Success: boolean,
    Id: number,
    TrainingAlgsRecord: TrainingAlgsRecord,
}

export async function getTrainingAlgs(uid: number, set: string): Promise<GetTrainingAlgsResponse> {
    return fetch(`${url}/getTrainingAlgs`, {
        method: "POST",
        body: JSON.stringify({
            Uid: uid,
            Set: set,
        }),
    })
        .then(res => res.json());
}

export async function writeTrainingAlgs(uid: number, set: string, trainingAlgs: TrainingAlg[]): Promise<void> {
    return fetch(`${url}/writeTrainingAlgs`, {
        method: "POST",
        body: JSON.stringify({
            Uid: uid,
            Set: set,
            TrainingAlgs: trainingAlgs,
        }),
    })
        .then(res => res.json());
}