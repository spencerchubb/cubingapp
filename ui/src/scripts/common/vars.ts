import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

export {
    url,
    auth,
};

const url = "https://api.cubingapp.com:3001";

// https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",
    authDomain: "virtual-cube.firebaseapp.com",
    projectId: "virtual-cube",
    storageBucket: "virtual-cube.appspot.com",
    messagingSenderId: "371073332227",
    appId: "1:371073332227:web:c96d3137080aecfe634a36",
    measurementId: "G-YR33BDCQDY"
};

export const app = initializeApp(firebaseConfig);

// Use singleton pattern because connectAuthEmulator can only be called once
let authSingleton;
const auth = () => {
    if (authSingleton) return authSingleton;

    authSingleton = getAuth(app);
    connectAuthEmulator(authSingleton, "http://localhost:9099");
    return authSingleton;
}