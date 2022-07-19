import "../scripts/play";
import { register, click, setValue } from "./testUtil";

const scramble: HTMLElement = document.querySelector("#scramble");
const solve: HTMLElement = document.querySelector("#solve");
const layerInput: HTMLInputElement = document.querySelector("#layerInput");
const startStop: HTMLElement = document.querySelector("#startStop");
const right0: HTMLElement = document.querySelector("#right0");
const right1: HTMLElement = document.querySelector("#right1");
const right2: HTMLElement = document.querySelector("#right2");
const closeDrawer: () => HTMLElement = () => document.querySelector("#closeDrawer");

const mobileTests = [];

const desktopTests = [
    () => {
        console.log("Click scramble");
        scramble.click();
    },
    () => {
        console.log("Click solve");
        solve.click();
    },
    () => {
        console.log("Show zero-layer easter egg");
        setValue(layerInput, _ => 0);
    },
    () => {
        console.log("Set cube to 3x3");
        setValue(layerInput, _ => 3);
    },
    () => {
        console.log("Click start");
        startStop.click();
    },
    () => {
        console.log("Click stop");
        startStop.click();
    },
    () => {
        console.log("Step down layerInput");
        setValue(layerInput, val => val - 1);
    },
    () => {
        console.log("Step up layerInput");
        setValue(layerInput, val => val + 1);
    },
    () => {
        console.log("Show solves drawer");
        right0.click();
    },
    () => {
        console.log("Show settings drawer");
        right1.click();
    },
    () => {
        console.log("Show tips drawer");
        right2.click();
    },
    () => {
        console.log("Close drawer");
        click(closeDrawer());
    },
    () => {
        console.log("Show solves drawer");
        right0.click();
    },
    () => {
        console.log("Click a time to open a replay");
        const times: NodeListOf<HTMLElement> = document.querySelectorAll(".solveTime");
        times[times.length - 1].click();
    },
];

// register(mobileTests);
register(desktopTests);