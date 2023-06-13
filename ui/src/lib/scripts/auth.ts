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

export type AuthCallback = (user: CubingAppUser | null) => void;

export class CubingAppUser {
    email: string;
    uid: number;

    constructor() { }

    /** Return data as a JSON string */
    toJsonString() {
        return JSON.stringify({
            email: this.email,
            uid: this.uid,
        });
    }

    /** Populate the class properties with data from a json string */
    fromJsonString(s: string) {
        const json = JSON.parse(s);
        this.email = json.email;
        this.uid = json.uid;
    }
}

function logSignIn(user: CubingAppUser) {
    log("Signed in as " + user.email + " with uid " + user.uid);
}

export function initialAuthCheck(): CubingAppUser | undefined {
    const userJsonString = getUser();
    if (!userJsonString) return undefined;
    const user = new CubingAppUser();
    user.fromJsonString(userJsonString);
    if (!user.email || !user.uid) {
        removeUser();
        return undefined;
    }
    logSignIn(user);
    return user;
}

function successfulSignIn(userCredential: UserCredential, callback: AuthCallback) {
    const user = new CubingAppUser();
    user.email = userCredential.user.email ?? "";
    UserAPI.user(user.email).then(data => {
        user.uid = data.uid;
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
            console.log(error);
        });
}

export function _createUserWithEmailAndPassword(email: string, password: string, callback: AuthCallback) {
    const auth = _auth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            successfulSignIn(userCredential, callback);
        })
        .catch(error => {
            console.log(error.message);
            // TODO: handle error by passing something to callback
        });
}

export function _signInWithEmailAndPassword(email: string, password: string, callback: AuthCallback) {
    const auth = _auth();
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            successfulSignIn(userCredential, callback);
        })
        .catch(error => {
            console.log(error.message);
            // TODO: handle error by passing something to callback
        });
}

export function signOut() {
    const auth = _auth();
    auth.signOut();
    removeUser();
}