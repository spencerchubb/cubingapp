import { auth as _auth, log } from "./common/vars";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    User,
} from "firebase/auth";

export type AuthCallback = (user: CubingUser, error?: String) => void;
export type OnError = (msg: string) => void;

export type CubingUser = {
    auth: boolean;
    email: string;
}

export function getUser(): CubingUser | undefined {
    const currentUser = _auth().currentUser;
    if (!currentUser) return undefined;
    return {
        auth: true,
        email: currentUser.email ?? "",
    };
}

export function signOut() {
    _auth().signOut();
}

export function addAuthCallback(callback: AuthCallback) {
    _auth().onAuthStateChanged(user => {
        if (user) {
            successfulSignIn(user, callback);
        } else {
            callback({ auth: false, email: "" });
        }
    });
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

async function successfulSignIn(user: User, callback: AuthCallback): Promise<void> {
    const email = user.email ?? "";
    log("Signed in as", email);
    callback({
        auth: true,
        email,
    });
}

export function _signInWithPopup(onError: OnError) {
    const auth = _auth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .catch(error => {
            const msg = errorCodeToMsg(error.code);
            onError(msg);
        });
}

export function _createUserWithEmailAndPassword(email: string, password: string, onError: OnError) {
    const auth = _auth();
    createUserWithEmailAndPassword(auth, email, password)
        .catch(error => {
            const msg = errorCodeToMsg(error.code);
            onError(msg);
        });
}

export function _signInWithEmailAndPassword(email: string, password: string, onError: OnError) {
    const auth = _auth();
    signInWithEmailAndPassword(auth, email, password)
        .catch(error => {
            const msg = errorCodeToMsg(error.code);
            onError(msg);
        });
}

export async function getToken(): Promise<string | undefined> {
    const user = _auth().currentUser;
    return user?.getIdToken();
}