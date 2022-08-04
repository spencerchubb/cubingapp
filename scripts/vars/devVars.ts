import { getAuth, connectAuthEmulator } from "firebase/auth";
import { app } from "./common";

export {
    url,
    auth,
};

const url = "http://localhost:5001/virtual-cube/us-central1";

// Use singleton pattern because connectAuthEmulator can only be called once
let authSingleton;
const auth = () => {
    if (authSingleton) return authSingleton;

    authSingleton = getAuth(app);
    connectAuthEmulator(authSingleton, "http://localhost:9099");
    return authSingleton;
}