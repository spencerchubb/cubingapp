export const WHITE = [1.0, 1.0, 1.0, 1.0];
export const GRAY = [0.5, 0.5, 0.5, 1.0];
export const YELLOW = [1.0, 1.0, 0.0, 1.0];
export const GREEN = [0.0, 1.0, 0.0, 1.0];
export const BLUE = [0.0, 0.0, 1.0, 1.0];
export const ORANGE = [1.0, 0.5, 0.0, 1.0];
export const RED = [1.0, 0.0, 0.0, 1.0];
export const BLACK = [0.0, 0.0, 0.0, 1.0];

const colors = [WHITE, GREEN, YELLOW, BLUE, ORANGE, RED];
export function faceToColor(face: number): number[] {
    if (face < 0 || face >= colors.length) console.error("Invalid face: " + face);
    return colors[face];
}