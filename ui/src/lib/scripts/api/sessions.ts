import { post } from "./common";

export type Session = {
    id: number;
    name: string;
}

export async function create(name: string): Promise<number> {
    return post("/createSession", { name });
}

export async function readAll(): Promise<Session[]> {
    return (await post("/readSessions", {})) ?? [];
}

export async function update(session: Session): Promise<void> {
    return post("/updateSession", session);
}

export async function del(id: number): Promise<void> {
    return post("/deleteSession", { id });
}