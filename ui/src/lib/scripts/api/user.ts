import { post } from "./common";

type UserResponse = {
    uid: number
}

export async function user(email: string): Promise<UserResponse> {
    return post("/user", { email });
}