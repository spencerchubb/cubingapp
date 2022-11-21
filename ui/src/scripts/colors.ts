export const WHITE = [1.0, 1.0, 1.0, 1.0];
export const GRAY = [0.5, 0.5, 0.5, 1.0];
export const YELLOW = [1.0, 1.0, 0.0, 1.0];
export const DULL_YELLOW = [0.5, 0.5, 0.0, 1.0];
export const GREEN = [0.0, 1.0, 0.0, 1.0];
export const DULL_GREEN = [0.0, 0.5, 0.0, 1.0];
export const BLUE = [0.0, 0.0, 1.0, 1.0];
export const DULL_BLUE = [0.0, 0.0, 0.5, 1.0];
export const ORANGE = [1.0, 0.5, 0.0, 1.0];
export const DULL_ORANGE = [0.5, 0.25, 0.0, 1.0];
export const RED = [1.0, 0.0, 0.0, 1.0];
export const DULL_RED = [0.5, 0.0, 0.0, 1.0];
export const BLACK = [0.0, 0.0, 0.0, 1.0];

const colors = [WHITE, GREEN, YELLOW, BLUE, ORANGE, RED];
export function faceToColor(face: number): number[] {
    if (face < 0 || face >= colors.length) console.error("Invalid face: " + face);
    return colors[face];
}

const dulls = [GRAY, DULL_GREEN, DULL_YELLOW, DULL_BLUE, DULL_ORANGE, DULL_RED];
export function faceToDullColor(face: number): number[] {
    if (face < 0 || face >= colors.length) console.error("Invalid face: " + face);
    return dulls[face];
}