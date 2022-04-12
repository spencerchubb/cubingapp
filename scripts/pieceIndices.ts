export const CENTERS = [4, 13, 22, 31, 40, 49];
export const UBL = [0, 29, 36];
export const URB = [6, 35, 51];
export const ULF = [2, 9, 42];
export const UFR = [8, 15, 45];
export const DFL = [18, 11, 44];
export const DRF = [24, 47, 17];
export const DLB = [20, 38, 27];
export const DBR = [26, 33, 53];
export const UB = [3, 32];
export const UL = [1, 39];
export const UR = [7, 48];
export const UF = [5, 12];
export const FL = [10, 43];
export const FR = [16, 46];
export const DF = [21, 14];
export const DL = [19, 41];
export const DR = [25, 50];
export const DB = [23, 30];
export const BL = [28, 37];
export const BR = [34, 52];
export const crossPieces = [
    ...UB,
    ...UL,
    ...UR,
    ...UF,
    ...CENTERS,
];
export const firstLayerPieces = [
    ...crossPieces,
    ...UBL,
    ...URB,
    ...ULF,
    ...UFR,
];
export const f2lPieces = [
    ...firstLayerPieces,
    ...FL,
    ...FR,
    ...BL,
    ...BR,
];
export const lastLayerEdges = [
    ...DF,
    ...DL,
    ...DR,
    ...DB,
];
export const lastLayerPieces = [
    ...lastLayerEdges,
    ...DFL,
    ...DRF,
    ...DLB,
    ...DBR,
];
export const allPieces = [
    ...f2lPieces,
    ...lastLayerPieces,
];