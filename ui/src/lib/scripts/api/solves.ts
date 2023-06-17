import { post } from "./common";

export type MinSolve = {
    id: number;
    time: number;
}

export type Solve = 
    MinSolve & {
    uid: number;
    scramble: string;
    moves: string;
    penalty: undefined | "+2" | "DNF";
}

export function create(solve: Solve): Promise<{ id: number }> {
    return post("/createSolve", solve);
}

export function read(id: number): Promise<Solve> {
    return post("/readSolve", { id });
}

export function readAll(sessionId: number): Promise<MinSolve[]> {
    return post("/readSolves", { sessionId });
}

export function deleteSolve(uid: number, id: number): Promise<void> {
    return post("/deleteSolve", { id });
}