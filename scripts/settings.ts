import { DEFAULT_SPEED } from "./constants.js";

function speedInput(elementId: string) {
    const element: HTMLSelectElement = document.querySelector(elementId);

    element.value = localStorage.getItem(elementId) || DEFAULT_SPEED;

    element.addEventListener("change", (event) => {
        const target = event.target as HTMLSelectElement;
        const newValue = target.value;
        localStorage.setItem(elementId, newValue);
    });
}

function main() {
    speedInput("#keyboardSpeed");
    speedInput("#dragSpeed");
}

main();