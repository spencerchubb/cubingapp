import { initLearnPage, Lesson } from "./learnBase";
import { f2l } from "./pieceIndices";

let lessons: Lesson[] = [
    {
        activeStickers: f2l,
        setup: "z2 R U R'",
        algorithm: "R U' R'",
    },
    {
        activeStickers: f2l,
        setup: "z2 L' U' L",
        algorithm: "L' U L",
    },
    {
        activeStickers: f2l,
        setup: "z2 R U' R'",
        algorithm: "R U R'",
    },
    {
        activeStickers: f2l,
        setup: "z2 R U R' U2 R U' R'",
        algorithm: "R U R' U U R U' R'",
    },
    {
        activeStickers: f2l,
        setup: "z2 R U R' U2 R U' R' d'",
        algorithm: "R U R'",
    },
    {
        activeStickers: f2l,
        setup: "z2 R U R' U2 R U R'",
        algorithm: "R U' R' U U R U' R'",
    },
    {
        activeStickers: f2l,
        setup: "z2 F' U F U' R U' R'",
        algorithm: "R U R' U F' U' F",
    },
    {
        activeStickers: f2l,
        setup: "z2 F' U F U R U' R'",
        algorithm: "R U R' U' F' U' F",
    },
    {
        activeStickers: f2l,
        setup: "z2 R U' R' U R U' R'",
        algorithm: "R U R' U' R U R'",
    },
    {
        activeStickers: f2l,
        setup: "z2 R U' R' U2 R U R'",
        algorithm: "R U' R' U U R U R'",
    },
];

function main() {
    initLearnPage(lessons, 3);
}

main();