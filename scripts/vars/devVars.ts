import { getAuth, connectAuthEmulator } from "firebase/auth";
import { app } from "./common";

export {
    url,
    auth,
};

const url = "http://52.203.56.212:3000";

// Use singleton pattern because connectAuthEmulator can only be called once
let authSingleton;
const auth = () => {
    if (authSingleton) return authSingleton;

    authSingleton = getAuth(app);
    connectAuthEmulator(authSingleton, "http://localhost:9099");
    return authSingleton;
}