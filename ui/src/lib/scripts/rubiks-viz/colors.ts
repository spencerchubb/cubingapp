export type Color = [number, number, number];

export const WHITE: Color = [1.0, 1.0, 1.0];
export const GRAY: Color = [0.5, 0.5, 0.5];
export const DARK_GRAY: Color = [0.25, 0.25, 0.25];
export const YELLOW: Color = [1.0, 1.0, 0.0];
export const GREEN: Color = [0.0, 1.0, 0.0];
export const BLUE: Color = [0.0, 0.0, 1.0];
export const ORANGE: Color = [1.0, 0.5, 0.0];
export const RED: Color = [1.0, 0.0, 0.0];
export const BLACK: Color = [0.0, 0.0, 0.0];
export const PURPLE: Color = [0.5, 0.0, 1.0];

export function colorToStr(c: Color): string {
    return `rgb(${c[0] * 255}, ${c[1] * 255}, ${c[2] * 255})`;
}