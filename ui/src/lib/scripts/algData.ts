export type AlgSet = { cube: string, inactive: number[] };

export type AlgData = {
    [key: string]: AlgSet;
}

export const algData: AlgData = {
    "CMLL": {
        cube: "3x3",
        inactive: [1,3,4,5,7,12,13,14,21,22,23,30,31,32,39,48]
    },
    "F2L": {
        cube: "3x3",
        inactive: [0,1,2,3,5,6,7,8,9,12,15,29,32,35,36,39,42,45,48,51]
    },
    "OLL": {
        cube: "3x3",
        inactive: [9,12,15,29,32,35,36,39,42,45,48,51]
    },
    "PLL": {
        cube: "3x3",
        inactive: []
    },
    "ZBLL": {
        cube: "3x3",
        inactive: []
    },
    "2x2 CLL": {
        cube: "2x2",
        inactive: []
    },
    "2x2 EG1": {
        cube: "2x2",
        inactive: []
    },
    "2x2 EG2": {
        cube: "2x2",
        inactive: []
    }
};