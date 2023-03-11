import type { TrainingAlg } from "./api/algSet";
import { randInt } from "./common/rand";

/**
 * Fisher-Yates shuffle: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * 
 * Mutates original array and returns the shuffled array
 * 
 * @param array 
 * @returns shuffled array
 */
export function shuffle(array: any[]) {
    let i = array.length;

    // While there remain elements to shuffle...
    while (i != 0) {

        // Pick a remaining element...
        let r = randInt(i);
        i--;

        // And swap it with the current element.
        let temp = array[r];
        array[r] = array[i];
        array[i] = temp;
    }
    
    return array;
}

/**
 * Series produces 2, 5, 9, 14, 20, 27, 35, 44, 54, 65, 77, 80...
 */
export function series(n: number) {
    if (n <= 0) {
        return 2;
    }
    return series(n - 1) + n + 2;
}

/** Mutate algs in place */
export function promoteAlg(algs: Array<TrainingAlg>) {
    algs[0].Score++;
    let position = series(algs[0].Score);
    const threeFourths = Math.ceil(algs.length * 3 / 4);
    if (position > threeFourths) {
        position = threeFourths + randInt(algs.length - threeFourths);
    }
    move(algs, position);
}

export function demoteAlg(algs: Array<TrainingAlg>) {
    algs[0].Score = 0;
    move(algs, series(0));
}

/** Move the first element of arr to position n. Mutate arr in place */
function move(arr: Array<any>, n: number) {
    const temp = arr[0];
    for (let i = 0; i < n; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n] = temp;
}