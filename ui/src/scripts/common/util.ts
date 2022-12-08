import { Cube, sq } from "../cube";

export function stickerToFace(sticker: number, cube: Cube): number {
    return Math.floor(sticker / sq(cube.layers));
}