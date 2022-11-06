import { getAuth } from "firebase/auth";
import { app } from "./common";

export {
    url,
    auth,
};

const url = "http://52.203.56.212:3000";

const auth = () => getAuth(app);