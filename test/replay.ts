import "../scripts/replay";

import { register, click, setValue } from "./testUtil";

const playPause: HTMLElement = document.querySelector("#playPause");
const leftButton: HTMLElement = document.querySelector("#leftButton");
const rightButton: HTMLElement = document.querySelector("#rightButton");

const mobileTests = [];

const desktopTests = [
    () => {
        console.log("Clicking leftButton at the beginning should do nothing");
        leftButton.click();
    },
    () => {
        console.log("Clicking rightButton should go forward 1 move");
        rightButton.click();
    },
    () => {
        console.log("Clicking leftButton should go backward 1 moves");
        leftButton.click();
    },
    () => {
        console.log("Clicking play should start the replay");
        playPause.click();
    },
    () => {
        console.log("Clicking pause should pause the replay");
        playPause.click();
    },
    () => {
        console.log("Clicking a move should jump to that point in the replay");
        const moves: NodeListOf<HTMLElement> = document.querySelectorAll("tr");
        moves[moves.length - 3].click();
    },
    () => {
        console.log("Click play and let it run to the end of the replay");
        playPause.click();
    },
    () => {
        console.log("Clicking rightButton at the end should do nothing");
        rightButton.click();
    }
];

// register(mobileTests);
register(desktopTests);