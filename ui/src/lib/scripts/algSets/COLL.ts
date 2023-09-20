import { STICKERS as S } from "../rubiks-viz/pieces";

export let algSet = {
    "puzzle": "3x3",
    "gray": [S.FU, S.LU, S.BU, S.RU],
    "cases": [
        {
            "name": "AS 1",
            "subsets": ["Antisune"],
            "algs": [
                "R' U' R U' R' U2 R",
                "U R U2 R' U' R U' R'",
                "U2 L' U' L U' L' U2 L",
                "U' L U2 L' U' L U' L'"
            ]
        },
        {
            "name": "AS 2",
            "subsets": ["Antisune"],
            "algs": [
                "U R' U' R U' R' U R' D' R U R' D R2",
                "U2 R2 D R' U R D' R' U R' U' R U' R'",
                "U2 R2 D R' U R D' R' U R' U' R U' R'",
                "U2 R' F U2 F' R F R' U2 R F'"
            ]
        },
        {
            "name": "AS 3",
            "subsets": ["Antisune"],
            "algs": [
                "U2 R2 D R' U2 R D' R2 U' R U' R'",
                "R' U' F' R U R' U' R' F R2 U' R' U R",
                "U2 f' L F L' U2 L' U2 L U2 S",
                "U2 R2 D R' U2 R D' R2 U' R U' R'"
            ]
        },
        {
            "name": "AS 4",
            "subsets": ["Antisune"],
            "algs": [
                "U2 R' U' R U' R2 D' R U2 R' D R2",
                "U2 R U2 R' U2 r' F R F' M'",
                "R' U' R U R' F R U R' U' R' F' R2",
                "U2 R U2 R' U2 L' U R U' R' L"
            ]
        },
        {
            "name": "AS 5",
            "subsets": ["Antisune"],
            "algs": [
                "U2 r' F R F' r U R'",
                "U2 L' U R U' L U R'",
                "R' U L U' R U L'"
            ]
        },
        {
            "name": "AS 6",
            "subsets": ["Antisune"],
            "algs": [
                "R U R' F' R U2 R' U' R U' R' F R U' R'",
                "R U2 r' F R' F' r U' R U' R'",
                "R U' R' U2 R U' R' U2 R' D' R U R' D R",
                "U2 L U2 R' U L' U' R U' L U' L'"
            ]
        },
        {
            "name": "S 1",
            "subsets": ["Sune"],
            "algs": [
                "R U R' U R U2 R'",
                "U' R' U2 R U R' U R",
                "U2 L U L' U L U2 L'",
                "U L' U2 L U L' U L"
            ]
        },
        {
            "name": "S 2",
            "subsets": ["Sune"],
            "algs": [
                "U2 R U R' U R2 D R' U2 R D' R2",
                "r' F2 r U2 R U' r' F M'",
                "L' U2 L U2 R U' L' U L R'",
                "L' U2 L U2 l F' L' F M'"
            ]
        },
        {
            "name": "S 3",
            "subsets": ["Sune"],
            "algs": [
                "L' R U R' U' L U2 R U2 R'",
                "U2 R2 D' R U2 R' D R2 U R' U R",
                "f R' F' R U2 R U2 R' U2 S'",
                "M F R' F' r U2 R U2 R'"
            ]
        },
        {
            "name": "S 4",
            "subsets": ["Sune"],
            "algs": [
                "U' R U R' U R U' R D R' U' R D' R2",
                "U' F R' U2 R F' R' F U2 F' R",
                "R U R' U' R' F R F' r U R' U R U2 r'",
                "r U R' U' r' F R F' R U R' U R U2 R'"
            ]
        },
        {
            "name": "S 5",
            "subsets": ["Sune"],
            "algs": [
                "R U' L' U R' U' L",
                "R U' r' F R' F' r",
                "U2 L U' R' U L' U' R",
                "z D R' U' R D' R' U R z'"
            ]
        },
        {
            "name": "S 6",
            "subsets": ["Sune"],
            "algs": [
                "U2 R U R' F' R U R' U R U2 R' F R U' R'",
                "U2 R U R' U r' F R F' r U2 R'",
                "F R U' R2 U2 R U R' U R2 U R' F'",
                "F' R U2 R' U2 R' F2 R U R U' R' F'"
            ]
        },
        {
            "name": "L 1",
            "subsets": ["L"],
            "algs": [
                "U' R U R' U R U' R' U R U' R' U R U2 R'",
                "U' R U2 R' U' R U R' U' R U R' U' R U' R'",
                "U2 R' U2 R U R' U' R U R' U' R U R' U R",
                "R' U' R U' R' U2 R U' R U R' U R U2 R'"
            ]
        },
        {
            "name": "L 2",
            "subsets": ["L"],
            "algs": [
                "R' U2 R' D' R U2 R' D R2",
                "U2 L' U2 L' D' L U2 L' D L2",
                "U' R' U2 R U R2 D' R U R' D R2",
                "U' r D r' U r D' r' U y R U2 R'"
            ]
        },
        {
            "name": "L 3",
            "subsets": ["L"],
            "algs": [
                "U R U2 R D R' U2 R D' R2",
                "U2 R U2 R2 D' R U' R' D R2 U' R'",
                "R' F' R U R' U' R' F R2 U' R' U2 R",
                "R' D' r U2 r' D R U2 R U R'"
            ]
        },
        {
            "name": "L 4",
            "subsets": ["L"],
            "algs": [
                "U F R' F' r U R U' r'",
                "U2 R2 D R' U R D' R' U' R'",
                "R U R' U' R' F R U R U' R' F'",
                "x' R U' R' D R U R' D' x"
            ]
        },
        {
            "name": "L 5",
            "subsets": ["L"],
            "algs": [
                "U2 F' r U R' U' r' F R",
                "U x R' U R D' R' U' R D x'",
                "U' R2 D' R U' R' D R U R",
                "U' F R U' R' U' R U2 R' U' F'"
            ]
        },
        {
            "name": "L 6",
            "subsets": ["L"],
            "algs": [
                "U r U2 R2 F R F' R U2 r'",
                "U' R' U' R U R' F' R U R' U' R' F R2",
                "U' R' U' R U' F U' R' U' R U F'",
                "U F R U R2 F R F' R U' R' F'"
            ]
        },
        {
            "name": "U 1",
            "subsets": ["U"],
            "algs": [
                "R' U' R U' R' U2 R2 U R' U R U2 R'",
                "U2 R U R' U R U2 R2 U' R U' R' U2 R",
                "U' R U R' U' R U' R' U2 R U' R' U2 R U R'",
                "U2 R U R' U R U2 R' U R U2 R' U' R U' R'"
            ]
        },
        {
            "name": "U 2",
            "subsets": ["U"],
            "algs": [
                "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R",
                "U F U R U2 R' U R U R2 F' r U R U' r'",
                "U' R' U' R F R2 D' R U R' D R2 U' F'",
                "U' r U R' U' r' F R U R' U' R F' R' U R"
            ]
        },
        {
            "name": "U 3",
            "subsets": ["U"],
            "algs": [
                "U2 R2 D R' U2 R D' R' U2 R'",
                "R' U R U R' F' R U R' U' R' F R2 U' R' U' R",
                "R U' R' U' R U2 R' U' R' D' R U2 R' D R",
                "R' U' R U' R' U2 R2 U' L' U R' U' L"
            ]
        },
        {
            "name": "U 4",
            "subsets": ["U"],
            "algs": [
                "F R U' R' U R U R' U R U' R' F'",
                "U2 R' F2 R U2 R U2 R' F2 R U2 R'",
                "U2 R U2 R' U2 L' U2 R U2 R' U2 L",
                "U' F U2 R' D' R U2 R' D R F'"
            ]
        },
        {
            "name": "U 5",
            "subsets": ["U"],
            "algs": [
                "R2 D' R U2 R' D R U2 R",
                "R2 F' R U R' U' R' F R' U' R2 U2 R2 U R' U R",
                "U2 L2 D' L U2 L' D L U2 L",
                "L U' R U' L' U R' U2 L U' L'"
            ]
        },
        {
            "name": "U 6",
            "subsets": ["U"],
            "algs": [
                "R2 D' R U R' D R U R U' R' U' R",
                "R' U2 R F U' R' U' R U F'",
                "R U' R' U' R U R D R' U R D' R2",
                "R' U2 R U2 R' F' R U R' U' R' F R2"
            ]
        },
        {
            "name": "T 1",
            "subsets": ["T"],
            "algs": [
                "R U2 R' U' R U' R2 U2 R U R' U R",
                "U' R U R' U R U2 R' L' U' L U' L' U2 L",
                "U' R U R2 U' R2 U' R2 U2 R U' R U' R'",
                "R U2 R' r' F2 r U' R U' R' U' r' F r"
            ]
        },
        {
            "name": "T 2",
            "subsets": ["T"],
            "algs": [
                "R' U R U2 R' L' U R U' L",
                "R' U2 R U R2 F R U R U' R' F' R",
                "U2 R' F R U R' U' R' F' R2 U' R' U2 R",
                "U2 R U' R' U2 L R U' R' U L'"
            ]
        },
        {
            "name": "T 3",
            "subsets": ["T"],
            "algs": [
                "U R' F' r U R U' r' F",
                "U l' U' L U R U' r' F",
                "U2 R' U' R' D' R U R' D R2",
                "U2 x' R U R' D R U' R' D' x"
            ]
        },
        {
            "name": "T 4",
            "subsets": ["T"],
            "algs": [
                "U2 F R U R' U' R U' R' U' R U R' F'",
                "U2 F R' D' R U2 R' D R U2 F'",
                "U R U2 R' F2 R U2 R' U2 R' F2 R",
                "U' L' U2 R U2 R' U2 L U2 R U2 R'"
            ]
        },
        {
            "name": "T 5",
            "subsets": ["T"],
            "algs": [
                "U' r U R' U' r' F R F'",
                "R U R D R' U' R D' R2",
                "U' R U R' U' L' U R U' R' L",
                "R' F' R U R' U' R' F R U R"
            ]
        },
        {
            "name": "T 6",
            "subsets": ["T"],
            "algs": [
                "R' U R2 D r' U2 r D' R2 U' R",
                "U2 R U' R2 D' r U2 r' D R2 U R'",
                "U R' U' R U R2 D' R U2 R' D R2 U' R' U R",
                "U R U R' U' R2 D R' U2 R D' R2 U R U' R'"
            ]
        },
        {
            "name": "Pi 1",
            "subsets": ["Pi"],
            "algs": [
                "R' U2 R2 U R2 U R2 U2 R'",
                "U2 L' U2 L2 U L2 U L2 U2 L'",
                "R U2 R2 U' R2 U' R2 U2 R",
                "R U R' U R U2 R' U' R U R' U R U2 R'"
            ]
        },
        {
            "name": "Pi 2",
            "subsets": ["Pi"],
            "algs": [
                "U F U R U' R' U R U' R2 F' R U R U' R'",
                "R' F2 R U2 R U2 R' F2 U' R U' R'",
                "U2 L' U' L U L F' L2 U' L U L' U' L U F",
                "U M F R' F' r U2 R U' R' U R U2 R'"
            ]
        },
        {
            "name": "Pi 3",
            "subsets": ["Pi"],
            "algs": [
                "R' U' F' R U R' U' R' F R2 U2 R' U2 R",
                "U F U R U' R' U R U2 R' U' R U R' F'",
                "U F R2 U' R2 U R2 U S R2 f'",
                "U' R U R' U R U2 R2 F' r U R U' r' F"
            ]
        },
        {
            "name": "Pi 4",
            "subsets": ["Pi"],
            "algs": [
                "R U R' U' R' F R2 U R' U' R U R' U' F'",
                "R U2 R' U' R U R' U2 r' F R F' M'",
                "U' R' U2 R U R' U R2 U' L' U R' U' L",
                "U2 L F2 L' U2 L' U2 L F2 U L' U L"
            ]
        },
        {
            "name": "Pi 5",
            "subsets": ["Pi"],
            "algs": [
                "U' R U R' U F' R U2 R' U2 R' F R",
                "U' R U2 R' U R' D' R U2 R' D R2 U' R'",
                "R U' L' U R' U L U L' U L",
                "U2 L' U R U' L U' R' U' R U' R'"
            ]
        },
        {
            "name": "Pi 6",
            "subsets": ["Pi"],
            "algs": [
                "U' r U R' U R' F R F' R U' R' U R U2 r'",
                "R' F' U' F U' R U S' R' U R S",
                "R2 D' R U R' D R U R U' R' U R U R' U R",
                "R U2 R2 F R F' R' F R F' R' F R F' R U2 R'"
            ]
        },
        {
            "name": "H 1",
            "subsets": ["H"],
            "algs": [
                "R U R' U R U' R' U R U2 R'",
                "U' R U2 R' U' R U R' U' R U' R'",
                "U R U2 R' U' R U R' U' R U' R'",
                "U' R' U2 R U R' U' R U R' U R"
            ]
        },
        {
            "name": "H 2",
            "subsets": ["H"],
            "algs": [
                "F R U' R' U R U2 R' U' R U R' U' F'",
                "f R2 S' U' R2 U' R2 U R2 F'",
                "U2 f R U R' U' R F' R U R' U' R' S'",
                "f R U R' U' f' R U R' U' R' F R F'"
            ]
        },
        {
            "name": "H 3",
            "subsets": ["H"],
            "algs": [
                "R U R' U R U L' U R' U' L",
                "R' F' R U2 R U2 R' F U' R U' R'",
                "R U R' U R U r' F R' F' r",
                "R U R2 D' R U2 R' D R U' R U2 R'"
            ]
        },
        {
            "name": "H 4",
            "subsets": ["H"],
            "algs": [
                "U F R U R' U' R U R' U' R U R' U' F'",
                "U F U R U' R' U R U' R' U R U' R' F'",
                "U' F U R U' R' U R U' R' U R U' R' F'",
                "U R' F2 R2 U2 R' F2 R U2 R2 F2 R"
            ]
        }
    ]
}