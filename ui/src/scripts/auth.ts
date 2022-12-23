import { auth as _auth, url } from "./common/vars";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    UserCredential,
} from "firebase/auth";
import { getUser, removeUser, setUser } from "./store";
import { createElement } from "./common/element";

type AuthCallback = (user: CubingAppUser | null) => void;

export class CubingAppUser {
    email: string | null;
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

export function renderEmailInput(): HTMLInputElement {
    return createElement("input", { type: "email", placeholder: "Email" }) as HTMLInputElement;
}

export function renderPasswordInput(): HTMLInputElement {
    return createElement("input", { type: "password", placeholder: "Password" }) as HTMLInputElement;
}

export function renderCreateAccountButton(emailInput: HTMLInputElement, passwordInput: HTMLInputElement, callback: AuthCallback) {
    return createElement("button", {
        className: "btn-primary",
        innerHTML: "Create Account",
        onclick: () => {
            _createUserWithEmailAndPassword(emailInput.value, passwordInput.value, callback);
        },
    });
}

export function renderSignInButton(emailInput: HTMLInputElement, passwordInput: HTMLInputElement, callback: AuthCallback) {
    return createElement("button", {
        className: "btn-primary",
        innerHTML: "Sign In",
        onclick: () => {
            _signInWithEmailAndPassword(emailInput.value, passwordInput.value, callback);
        },
    });
}

export function renderGoogleSignInButton(callback: AuthCallback) {
    return createElement("button", {
        className: "p-2 bg-white rounded-md shadow-lg border-solid border-gray-400 hover:cursor-pointer hover:bg-gray-200",
        innerHTML: `
        <div class="row">
            <svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg>
            <p style="font-size: 1rem;">Sign in with Google</p>
        </div>
        `,
        onclick: () => {
            _signInWithPopup(callback);
        },
    });
}

export function initialAuthCheck(): CubingAppUser | null {
    const userJsonString = getUser();
    if (userJsonString) {
        const user = new CubingAppUser();
        user.fromJsonString(userJsonString);
        console.log(user);
        return user;
    }
    return null;
}

function successfulSignIn(userCredential: UserCredential, callback: AuthCallback) {
    const user = new CubingAppUser();
    user.email = userCredential.user.email;
    fetch(`${url}/user`, {
        method: "POST",
        body: JSON.stringify({ email: user.email }),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            user.uid = data.Uid;
            console.log(user)
            setUser(user.toJsonString());
            callback(user);
        });
}

function _signInWithPopup(callback: AuthCallback) {
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

function _createUserWithEmailAndPassword(email: string, password: string, callback: AuthCallback) {
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

function _signInWithEmailAndPassword(email: string, password: string, callback: AuthCallback) {
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