
export function randElement<T>(arr: T[]): T {
    return arr[randInt(arr.length)];
}

/**
 * Returns a random integer in the range [0, int)
 */
export function randInt(int: number) {
    return Math.floor(Math.random() * int);
}
