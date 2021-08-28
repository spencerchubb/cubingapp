import { DEFAULT_SPEED } from "./constants.js";

function speedInput(elementId) {
    const element = document.querySelector(elementId);

    element.value = localStorage.getItem(elementId) || DEFAULT_SPEED;

    element.addEventListener("change", (event) => {
        const newValue = event.target.value;
        localStorage.setItem(elementId, newValue);
    });
}

function main() {
    const keyboardSpeed = speedInput("#keyboardSpeed");
    const dragSpeed = speedInput("#dragSpeed");
}

main();