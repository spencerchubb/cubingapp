import * as pieceIndices from "./pieceIndices";
import { initLearnPage, Lesson } from "./learnBase";

let lessons: Lesson[] = [
    {
        activeStickers: pieceIndices.allPieces,
        setup: "U'",
        algorithm: "U",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "U",
        algorithm: "U'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "D'",
        algorithm: "D",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "D",
        algorithm: "D'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "R'",
        algorithm: "R",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "R",
        algorithm: "R'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "L'",
        algorithm: "L",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "L",
        algorithm: "L'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "F'",
        algorithm: "F",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "F",
        algorithm: "F'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "B'",
        algorithm: "B",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "B",
        algorithm: "B'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "B2 F2 L2 R2 D2 U2",
        algorithm: "U U D D R R L L F F B B",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "u'",
        algorithm: "u",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "d'",
        algorithm: "d",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "r'",
        algorithm: "r",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "l'",
        algorithm: "l",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "f'",
        algorithm: "f",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "b'",
        algorithm: "b",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "M'",
        algorithm: "M",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "M",
        algorithm: "M'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "E'",
        algorithm: "E",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "E",
        algorithm: "E'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "S'",
        algorithm: "S",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "S",
        algorithm: "S'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "x'",
        algorithm: "x",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "x",
        algorithm: "x'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "y'",
        algorithm: "y",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "y",
        algorithm: "y'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "z'",
        algorithm: "z",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "z",
        algorithm: "z'",
    },
    {
        activeStickers: pieceIndices.allPieces,
        setup: "R U R' F' R U R' U' R' F R2 U' R' U'",
        algorithm: "R U R' F' R U R' U' R' F R2 U' R' U'",
    },
];

function main() {
    initLearnPage(lessons, 3);
}

main();