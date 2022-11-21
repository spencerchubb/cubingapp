import { CubeLogic } from "../cube";

export function stickerToFace(sticker: number, cube: CubeLogic): number {
    return Math.floor(sticker / cube.layersSq);
}