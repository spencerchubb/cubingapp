import { url } from "./common/vars";

export type TrainingAlg = {
    Score: number,
    Alg: string,
}

type GetScrambleResponse = {
    err: string,
    scramble: string,
}

type GetTrainingAlgsResponse = {
    success: boolean,
    id: number,
    trainingAlgs: TrainingAlg[],
}

type UserResponse = {
    success: boolean,
    uid: number
}

export async function getScramble(setName: string, alg: string): Promise<GetScrambleResponse> {
    return post("/getScramble", { setName, alg });
}

export async function getTrainingAlgs(Uid: number, Set: string): Promise<GetTrainingAlgsResponse> {
    return post("/getTrainingAlgs", { Uid, Set });
}

export async function writeTrainingAlgs(Uid: number, Set: string, TrainingAlgs: TrainingAlg[]): Promise<void> {
    return post("/writeTrainingAlgs", { Uid, Set, TrainingAlgs });
}

export async function user(email: string): Promise<UserResponse> {
    return post("/user", { email });
}

async function post(endpoint: string, bodyObj: any): Promise<any> {
    return fetch(`${url}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(bodyObj),
    }).then(res => res.json());
}
