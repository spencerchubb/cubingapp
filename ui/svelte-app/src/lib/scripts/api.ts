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
    cube: string,
    inactiveStickers: number[],
}

type CreateTrainingAlgsResponse = {
    success: boolean,
    id: number,
}

type UserResponse = {
    success: boolean,
    uid: number
}

export async function getScramble(setName: string, alg: string): Promise<GetScrambleResponse> {
    return post("/getScramble", { setName, alg });
}

export async function getTrainingAlgs(uid: number, set: string): Promise<GetTrainingAlgsResponse> {
    return post("/getTrainingAlgs", { uid, set });
}

export async function createTrainingAlgs(
    uid: number,
    set: string,
    trainingAlgs: TrainingAlg[],
    cube: string,
    inactiveStickers: number[],
): Promise<CreateTrainingAlgsResponse> {
    return post("/createTrainingAlgs", { uid, set, trainingAlgs, cube, inactiveStickers });
}

export async function updateTrainingAlgs(id: number, trainingAlgs: TrainingAlg[]): Promise<void> {
    return post("/updateTrainingAlgs", { id, trainingAlgs });
}

export async function user(email: string): Promise<UserResponse> {
    return post("/user", { email });
}

async function post(endpoint: string, bodyObj: any): Promise<any> {
    console.log({ endpoint });
    return fetch(`${url}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(bodyObj),
    }).then(res => res.json());
}
