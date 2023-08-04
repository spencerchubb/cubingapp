import { STICKERS as S } from "../../src/lib/scripts/rubiks-viz/pieces";

export let algSet = {
    "puzzle": "3x3",
    "gray": [
        S.FRU, S.FU, S.FUL, S.LFU, S.LU, S.LUB, S.BLU, S.BU, S.BUR, S.RBU, S.RU, S.RUF,
    ],
    "cases": [
        {
            "name": "WV 1",
            "algs": [
                "U L' U2 R U R' U2 L",
                "U' L' U2 R U' R' U2 L",
                "L' U2 R U2 R' U2 L",
                "U R' D' R U R' D R U' R U' R'"
            ]
        },
        {
            "name": "WV 2",
            "algs": [
                "U R U' R'",
                "R U R' U' R U R' U' R U R' U' R U R' U' R U R' U'",
                "U l F' l'",
                "R' U2 R U R U' R2 U2 R"
            ]
        },
        {
            "name": "WV 3",
            "algs": [
                "R' F R U R U' R' F'",
                "U' L U' R U L' U R'"
            ]
        },
        {
            "name": "WV 4",
            "algs": [
                "U R2 D R' U' R D' R2",
                "U2 R' D' R U' R' D R2 U' R'",
                "U2 R U' R' L' U2 R U R' U2 L"
            ]
        },
        {
            "name": "WV 5",
            "algs": [
                "U R U' R' U R' U' R U' R' U2 R",
                "U R U' R' U2 R U2 R' U' R U' R'",
                "y' U2 S R2 F R F' R S'",
                "U l F' M' U2 L' U' L U' L'"
            ]
        },
        {
            "name": "WV 6",
            "algs": [
                "R U' R' U2 R U' R' U2 R U R'",
                "U' R' D' R U2 R' D R2 U' R'"
            ]
        },
        {
            "name": "WV 7",
            "algs": [
                "U R U R' U' R U' R'",
                "R' U' R U R U' R' U' R' U R"
            ]
        },
        {
            "name": "WV 8",
            "algs": [
                "U2 R U' R' U R U2 R'",
                "U2 R U L' U R' U' L"
            ]
        },
        {
            "name": "WV 9",
            "algs": [
                "U2 F' R U2 R' U2 R' F R",
                "U2 F2 R U2 R' U2 R' F2 R",
                "U2 L' R U R' U' R U R' U' L U' R U' R'",
                "U L' U2 R U L U' L' U R' U2 L"
            ]
        },
        {
            "name": "WV 10",
            "algs": [
                "U R U R2 U' R2 U' R2 U2 R",
                "R' F R2 U R' U' R U R' U' F'",
                "R' U2 R U R' U R2 U2 R'",
                "U2 F2 L' U L U L' U' L F2"
            ]
        },
        {
            "name": "WV 11",
            "algs": [
                "U2 R' U' R2 U' R2 U2 R",
                "U R U' R' L' U' L U' L' U2 L",
                "U R U R' U' R U R' U2 R' F R U R U' R' F'"
            ]
        },
        {
            "name": "WV 12",
            "algs": [
                "Lw' U2 Lw F2 U L' U L",
                "R' F2 R F2 U L' U L",
                "U R U' R2 U' R' D' R U R' D R2",
                "U R U' R' U' l' U' L U R U' r' F"
            ]
        },
        {
            "name": "WV 13",
            "algs": [
                "U2 R U2 R2 U' R U' R' U2 R",
                "U R U' R D R' U2 R D' R' U2 R'",
                "R' F R F' R' U' F' U F R",
                "U' F2 L' U L U' L' U' L F2"
            ]
        },
        {
            "name": "WV 14",
            "algs": [
                "U2 R2 D R' U2 R D' R2",
                "U2 L' U R U' L U2 R'",
                "U R U' R' U2 R U R' U R U2 R'",
                "M' U2 R' F R F' R U2 r'"
            ]
        },
        {
            "name": "WV 15",
            "algs": [
                "L' U R U' R' L",
                "r' F R F' M'",
                "L' U R U' M' x'"
            ]
        },
        {
            "name": "WV 16",
            "algs": [
                "U R' D' R U R' D R2 U2 R'",
                "U2 R U' R' U' R' F R U R U' R' F'",
                "U R U' R' U' R2 D' R U2 R' D R U2 R",
                "U2 L' R U R' U' L R U2 R'"
            ]
        },
        {
            "name": "WV 17",
            "algs": [
                "R' F' R U2 R U2 R' F",
                "U R U' R' l' U' L U l F' L' F",
                "U L' U2 R U' R' U2 L U R U' R'",
                "U2 F2 L F2 L' U' L' U L"
            ]
        },
        {
            "name": "WV 18",
            "algs": [
                "U2 R U2 R'",
                "U2 l F2 l'",
                "U R U' U R' U R U2 R'"
            ]
        },
        {
            "name": "WV 19",
            "algs": [
                "R' F2 R2 U' R' U' R U R' F2",
                "U R U' R D' R U2 R' D R U2 R",
                "U L' U2 R U' R' U' R U' R' L",
                "U2 L' U R U' R' L U' R U' R'"
            ]
        },
        {
            "name": "WV 20",
            "algs": [
                "U R U' R' U' R U R' U R U2 R'",
                "U L' U2 L R U R' U L' U L"
            ]
        },
        {
            "name": "WV 21",
            "algs": [
                "U R U' R2 U2 R U R' U R",
                "U2 R U' R D R' U' R D' R2",
                "U R U' R' U R U R' U R U2 R'"
            ]
        },
        {
            "name": "WV 22",
            "algs": [
                "U R U R D R' U2 R D' R2",
                "U R2 D R' U R D' R' U2 R'",
                "U2 R U2 R' U R' U' R U' R' U2 R"
            ]
        },
        {
            "name": "WV 23",
            "algs": [
                "R2 U R' U R' U' R U R U2 R2",
                "U2 R' D' R U' R' D R2 U' R2 U' R U' R' U2 R",
                "U2 R U R' U' R U R D R' U R D' R2",
                "U2 R U2 R D' R U2 R' D R U2 R"
            ]
        },
        {
            "name": "WV 24",
            "algs": [
                "U2 R U' R' U R U' R' U R U2 R'"
            ]
        },
        {
            "name": "WV 25",
            "algs": [
                "U2 R U2 R2 U2 R U R' U R",
                "U2 R U2 R' U R U R' U R U2 R'",
                "U2 R U' R' U R U' R D R' U' R D' R2"
            ]
        },
        {
            "name": "WV 26",
            "algs": [
                "U R U' R2 U' R U' R' U2 R",
                "U R U R' U F2 L' U L U' L' U' L F2",
                "U R U' R' U R U2 R' U' R U' R'"
            ]
        },
        {
            "name": "WV 27",
            "algs": [
                "U R U R' U' R U R' U' R U' R'"
            ]
        }
    ]
}