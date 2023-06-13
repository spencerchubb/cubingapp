import * as UserAPI from "./api/user";
import { auth as _auth, log } from "./common/vars";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    UserCredential,
} from "firebase/auth";
import { getUser, removeUser, setUser } from "./store";

export type AuthCallback = (user?: CubingAppUser, error?: String) => void;

export class CubingAppUser {
    email: string;
    uid: number;

    constructor(email: string, uid: number) {
        this.email = email;
        this.uid = uid;
    }

    static fromJsonString(s: string): CubingAppUser {
        const json = JSON.parse(s);
        return new CubingAppUser(json.email, json.uid);
    }

    /** Return data as a JSON string */
    toJsonString() {
        return JSON.stringify({
            email: this.email,
            uid: this.uid,
        });
    }
}

function logSignIn(user: CubingAppUser) {
    log("Signed in as " + user.email + " with uid " + user.uid);
}

function errorCodeToMsg(code: string): string {
    switch (code) {
        case "auth/invalid-email":
            return "Please enter a valid email address";
        case "auth/user-disabled":
            return "This account has been disabled";
        case "auth/user-not-found":
            return "Incorrect username or password";
        case "auth/weak-password":
            return "Please enter a stronger password";
        case "auth/wrong-password":
            return "Incorrect username or password";
        default:
            return `Error: ${code}`;
    }
}

export function initialAuthCheck(): CubingAppUser | undefined {
    const userStr = getUser();
    if (!userStr) return undefined;
    const user = CubingAppUser.fromJsonString(userStr);
    if (!user.email || !user.uid) {
        removeUser();
        return undefined;
    }
    logSignIn(user);
    return user;
}

function successfulSignIn(userCredential: UserCredential, callback: AuthCallback) {
    const email = userCredential.user.email ?? "";
    UserAPI.user(email).then(data => {
        const user = new CubingAppUser(email, data.uid);
        setUser(user.toJsonString());
        logSignIn(user);
        callback(user);
    });
}

export function _signInWithPopup(callback: AuthCallback) {
    const auth = _auth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(userCredential => {
            successfulSignIn(userCredential, callback);
        })
        .catch(error => {
            const msg = errorCodeToMsg(error.code);
            callback(undefined, msg);
        });
}

export function _createUserWithEmailAndPassword(email: string, password: string, callback: AuthCallback) {
    const auth = _auth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            successfulSignIn(userCredential, callback);
        })
        .catch(error => {
            const msg = errorCodeToMsg(error.code);
            callback(undefined, msg);
        });
}

export function _signInWithEmailAndPassword(email: string, password: string, callback: AuthCallback) {
    const auth = _auth();
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            successfulSignIn(userCredential, callback);
        })
        .catch(error => {
            const msg = errorCodeToMsg(error.code);
            callback(undefined, msg);
        });
}

export function signOut() {
    const auth = _auth();
    auth.signOut();
    removeUser();
}