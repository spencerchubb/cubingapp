import { post } from "./common";

export type Session = {
    id: number;
    uid: number;
    name: string;
}

export async function create(session: Session): Promise<number> {
    return post("/createSession", session);
}

export async function readAll(uid: number): Promise<Session[]> {
    return (await post("/readSessions", { uid })) ?? [];
}

export async function update(session: Session): Promise<void> {
    return post("/updateSession", session);
}

export async function del(id: number): Promise<void> {
    return post("/deleteSession", { id });
}