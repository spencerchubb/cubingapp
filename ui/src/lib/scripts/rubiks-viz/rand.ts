export function randElement<T>(arr: T[]): T {
    return arr[randInt(arr.length)];
}

/**
 * Returns a random integer in the range [0, int)
 */
export function randInt(int: number) {
    return Math.floor(Math.random() * int);
}

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
