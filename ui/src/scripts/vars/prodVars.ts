import { getAuth } from "firebase/auth";
import { app } from "./common";

export {
    url,
    auth,
};

const url = "https://us-central1-virtual-cube.cloudfunctions.net";

const auth = () => getAuth(app);