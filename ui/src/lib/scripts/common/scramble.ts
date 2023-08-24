import { randElement } from "./rand";
import { scramble_333 } from "../cstimer/scramble_333";

// Need to do this to register scramblers
import { scramble2x2Random } from "../cstimer/scramble_222";
import { scramblePyraRandom } from "../cstimer/scramble_pyraminx";
import { PuzzleTypes } from "./types";

/* Move set for 4x4 and 5x5 */
const moveset_45 = [
    "U", "U'", "U2",
    "D", "D'", "D2",
    "R", "R'", "R2",
    "L", "L'", "L2",
    "F", "F'", "F2",
    "B", "B'", "B2",
    "Uw", "Uw'", "Uw2",
    "Dw", "Dw'", "Dw2",
    "Rw", "Rw'", "Rw2",
    "Lw", "Lw'", "Lw2",
    "Fw", "Fw'", "Fw2",
    "Bw", "Bw'", "Bw2",
];

/* Move set for 6x6 and 7x7 */
const moveset_67 = [
    "U", "U'", "U2",
    "D", "D'", "D2",
    "R", "R'", "R2",
    "L", "L'", "L2",
    "F", "F'", "F2",
    "B", "B'", "B2",
    "Uw", "Uw'", "Uw2",
    "Dw", "Dw'", "Dw2",
    "Rw", "Rw'", "Rw2",
    "Lw", "Lw'", "Lw2",
    "Fw", "Fw'", "Fw2",
    "Bw", "Bw'", "Bw2",
    "3Uw", "3Uw'", "3Uw2",
    "3Rw", "3Rw'", "3Rw2",
    "3Dw", "3Dw'", "3Dw2",
    "3Lw", "3Lw'", "3Lw2",
    "3Fw", "3Fw'", "3Fw2",
    "3Bw", "3Bw'", "3Bw2",
];

export function getScramble(puzzle: PuzzleTypes): string {
    switch (puzzle) {
        case "2x2":
            return scramble2x2Random();
        case "3x3":
            return scramble_333.getRandomScramble();
        case "4x4":
            return getRandomMoveScramble(moveset_45, 45);
        case "5x5":
            return getRandomMoveScramble(moveset_45, 60);
        case "6x6":
            return getRandomMoveScramble(moveset_67, 80);
        case "7x7":
            return getRandomMoveScramble(moveset_67, 100);
        case "Pyraminx":
            return scramblePyraRandom();
        default:
            return "Unknown puzzle: " + puzzle;
    }
}

/**
 * Generate a scramble of random moves.
 * Note that this does not generate a random state scramble.
 * For big cubes, it takes too long to generate random state scrambles.
 */
function getRandomMoveScramble(moves: string[], len: number) {
    let scram: string[] = [];
    while (scram.length < len){
        const move = randElement(moves);
        // Don't allow consecutive moves of the same face.
        if (scram.length > 0 && scram[scram.length - 1][0] === move[0]) continue;
        scram.push(move);
    }
    return scram.join(" ");
}