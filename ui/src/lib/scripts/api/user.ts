import { post } from "./common";

export async function user(email: string): Promise<number> {
    return post("/user", { email });
}