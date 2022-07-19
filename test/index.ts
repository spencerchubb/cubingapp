import "../scripts/index";
import { register } from "./testUtil";

const prevLesson: HTMLElement = document.querySelector("#prevLesson");
const openClose: HTMLElement = document.querySelector("#openClose");
const nextLesson: HTMLElement = document.querySelector("#nextLesson");
const leftButton = (): HTMLElement => document.querySelector("#leftButton");
const rightButton = (): HTMLElement => document.querySelector("#rightButton");

const mobileTests = [
    () => {
        console.log("Clicking prevLesson while on the first lesson should do nothing.");
        prevLesson.click();
    },
    () => {
        console.log("Clicking nextLesson should go to the next lesson.");
        nextLesson.click();
    },
    () => {
        console.log("Clicking prevLesson should go to the previous lesson.");
        prevLesson.click();
    },
    () => {
        console.log("Clicking openClose should open the lesson navigator.");
        openClose.click();
    },
    () => {
        console.log("Clicking openClose should close the lesson navigator.");
        openClose.click();
    },
    () => {
        console.log("Clicking leftButton while on move 0 should do nothing");
        leftButton().click();
    },
    () => {
        console.log("Clicking rightButton should go forward 1 move.");
        rightButton().click();
    },
    () => {
        console.log("Clicking leftButton should go backward 1 move.");
        leftButton().click();
    },
    () => {
        console.log("Clicking openClose should open the lesson navigator.");
        openClose.click();
    },
    () => {
        console.log("Clicking a lesson should go to that lesson and close the lesson navigator.");
        const pList: NodeListOf<HTMLElement> = document.querySelectorAll(".lesson-p");
        pList[2].click();
    },
];

const desktopTests = [
    () => {
        console.log("Clicking prevLesson while on the first lesson should do nothing.");
        prevLesson.click();
    },
    () => {
        console.log("Clicking nextLesson should go to the next lesson.");
        nextLesson.click();
    },
    () => {
        console.log("Clicking prevLesson should go to the previous lesson.");
        prevLesson.click();
    },
    () => {
        console.log("Clicking leftButton while on move 0 should do nothing");
        leftButton().click();
    },
    () => {
        console.log("Clicking rightButton should go forward 1 move.");
        rightButton().click();
    },
    () => {
        console.log("Clicking leftButton should go backward 1 move.");
        leftButton().click();
    },
    () => {
        console.log("Clicking a lesson should go to that lesson and close the lesson navigator.");
        const pList: NodeListOf<HTMLElement> = document.querySelectorAll(".lesson-p");
        pList[2].click();
    },
];

// register(mobileTests);
register(desktopTests);