import { randElement } from "../common/rand";

export let algSet = {
    "puzzle": "2x2",
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "cases": [
        {
            "name": "EG2 AS 1",
            "subsets": ["AS"],
            "algs": [
                "F R2 U R' U2 R U R2 U F'",
                "U2 R' U2 R2 U' R' U R' F R F R2",
                "x U' R2 F R2 F' U R' U2 R' U x'",
                "R U2 R' F R' F' R U' R U' R F2 R2"
            ]
        },
        {
            "name": "EG2 AS 2",
            "subsets": ["AS"],
            "algs": [
                "U2 R' F' R U' R' F2 R' F2 R2",
                "U2 L' U' L U' L' U2 L' F2 R2",
                "U R U2 R' U' R U' R B2 R2",
                "R' U' R U' R' U2 R' F2 R2"
            ]
        },
        {
            "name": "EG2 AS 3",
            "subsets": ["AS"],
            "algs": [
                "U2 R' F R F' R U R B2 R2",
                "U2 R' F R F' R U R F2 R2",
                "U2 L' U L F' R U R B2 R2",
                "U2 L' U L F2 L2 F R U R'"
            ]
        },
        {
            "name": "EG2 AS 4",
            "subsets": ["AS"],
            "algs": [
                "U2 F' L F L' U2 L' U2 L' B2 L2",
                "U' R' U R' F R2 F R2 F'",
                "U2 F' R U R' U2 R' F2 R' F2 R2",
                "U' R' U L' U R2 U R2 U'"
            ]
        },
        {
            "name": "EG2 AS 5",
            "subsets": ["AS"],
            "algs": [
                "R' U' R U' R' U' R' F2 R F' R",
                "U2 F R F' U R2 F' R U' R",
                "U2 R U2 R' U2 R' F R F R2 F2"
            ]
        },
        {
            "name": "EG2 AS 6",
            "subsets": ["AS"],
            "algs": [
                "U2 R2 F2 R F R F' R U R'",
                "R2 F2 R U L U' R U L'",
                "U2 L' U' L U L F' L' F L' U' L U' L' U2 L' B2 L2",
                "U R U R2 F' R F R U' R2 F R' F2 R2"
            ]
        },
        {
            "name": "EG2 H 1",
            "subsets": ["H"],
            "algs": [
                "R2 F U2 F2 R2 F' R2",
                "R U' R' F R' F' R2 U' R' F R' F' R' F2 R2",
                "U F R U R' U' R U R' U' R U R' U' F' R2 F2 R2 U'",
                "U F2 R U2 R2 F2 R' F2"
            ]
        },
        {
            "name": "EG2 H 2",
            "subsets": ["H"],
            "algs": [
                "U R2 B2 U2 R' U2 R2",
                "U R2 U2 R' U2 B2 R2",
                "U R2 U2 R' U2 F2 R2",
                "U R2 U2 R' U2 F2 R2"
            ]
        },
        {
            "name": "EG2 H 3",
            "subsets": ["H"],
            "algs": [
                "R' U' R U2 R2 F' R U' F R",
                "U2 R U R' U R U R' F R' F' R' F2 R2",
                "U2 R U R' U R U R' F R' F' R' F2 R2",
                "U R' U' F R U' R U R' U2 R' F"
            ]
        },
        {
            "name": "EG2 H 4",
            "subsets": ["H"],
            "algs": [
                "U' R U2 B2 R' U R U' B R'",
                "U2 F R2 U' R2 U' R2 U R2 F R2 F2",
                "U2 F R2 U' R2 U' R2 U R2 F B2 R2 F2 R2 U2",
                "U R U' R' F U2 R2 F' R F' R"
            ]
        },
        {
            "name": "EG2 L 1",
            "subsets": ["L"],
            "algs": [
                "U L2 B2 L U' L' U L F' L F",
                "U R2 B2 R2 F R' F' R U R U' R'",
                "U R' U' R' F' R U' R U' R' F R",
                "U F U' R U R U' R' U R F'"
            ]
        },
        {
            "name": "EG2 L 2",
            "subsets": ["H"],
            "algs": [
                "U2 F2 R2 F R U R' U' R' F R",
                "U2 R2 B2 R' U R U' R' F R' F'",
                "R U' R' U R U' R' F R' F' R2 U R B2 R2"
            ]
        },
        {
            "name": "EG2 L 3",
            "subsets": ["H"],
            "algs": [
                "U2 R2 U' R U2 R' U2 R U' F2 R2",
                "U R' U' F2 R U2 R' U2 F R",
                "U2 R2 F2 R U R' U2 R U' R' U R U' R2",
                "U' R U R' U R U' R' U R U' R' U R U2 R B2 R2"
            ]
        },
        {
            "name": "EG2 L 4",
            "subsets": ["H"],
            "algs": [
                "U' R' U L' U2 R' F R U' R' U' F' x2",
                "U R U2 R2 F R F' R U2 R B2 R2",
                "U' R' U' R U R' F' R U R' U' R' F' R2"
            ]
        },
        {
            "name": "EG2 L 5",
            "subsets": ["H"],
            "algs": [
                "U F R' F' R U R U' R B2 R2",
                "U F R' F' R U R U' R F2 R2"
            ]
        },
        {
            "name": "EG2 L 6",
            "subsets": ["H"],
            "algs": [
                "U2 F' R U R' U' R' F R' F2 R2",
                "R U R U' R' F R' F R2 B2",
                "U F R U' R' U' R U R' F R2 B2"
            ]
        },
        {
            "name": "EG2 Pi 1",
            "subsets": ["Pi"],
            "algs": [
                "F U' R U2 R U' R' U R' F'",
                "U' R' U' R' F R F' R U' R' U2 R' F2 R2",
                "U' F2 U' F2 R U2 R F2 U' R2",
                "R' F' U' F U' R U R' U R' F2 R2 U'"
            ]
        },
        {
            "name": "EG2 Pi 2",
            "subsets": ["Pi"],
            "algs": [
                "R U2 R2 U R' F2 R2 F'",
                "R U' R2 U R2 U R2 U' R' F2 R2",
                "R' U2 R2 U' R' F2 R2 F'",
                "R' U R2 U' R2 U' R2 U R B2 R2"
            ]
        },
        {
            "name": "EG2 Pi 3",
            "subsets": ["Pi"],
            "algs": [
                "U F R2 U' R2 U R2 U R2 F R2 F2 U2",
                "U2 R' F' U R' F R2 U2 R' U R",
                "U' R U' R U' R' U R' F R2 F R2 F2",
                "U' R U' R U' R' U R' F R2 F' R2 F2 R2"
            ]
        },
        {
            "name": "EG2 Pi 4",
            "subsets": ["Pi"],
            "algs": [
                "U2 R' F R F' R U' R' U' R U' R F2 R2",
                "U R U' F U' F' R F2 U2 R' U",
                "R U' R' F L' U L U R' F R' F2 R2",
                "R U' R' F R' F R U R' F R' F2 R2 U2"
            ]
        },
        {
            "name": "EG2 Pi 5",
            "subsets": ["Pi"],
            "algs": [
                "U' R' F' R' F2 R2 U R' U2 R U",
                "U' R' F' R' F2 R2 U R' U2 R",
                "U F U R U' R' U R U' R2 F' R U R U' R F2 R2 U'",
                "U F R' F' R U2 R U' R' U R U2 R B2 R2"
            ]
        },
        {
            "name": "EG2 Pi 6",
            "subsets": ["Pi"],
            "algs": [
                "U R' U2 R U' R2 F2 R F R U'",
                "U R' U2 R U' R2 F2 R F R",
                "R U2 R' U' R U R' U2 R' F R F' R2 F2 R2",
                "R U2 R' U' R U R' U2 R' F R F' R2 B2 R2"
            ]
        },
        {
            "name": "EG2 S 1",
            "subsets": ["S"],
            "algs": [
                "U' F U' R2 U' R' U2 R U' R2 F' U'",
                "R2 F2 R U R U' R' F R' F' R2 U R' U' R",
                "U' R' F R2 F' U' R' U' R2 U R B2 R2",
                "U' R' F R2 F' U' R' U' R2 U R F2 R2"
            ]
        },
        {
            "name": "EG2 S 2",
            "subsets": ["S"],
            "algs": [
                "U' R2 F2 R U2 R U R' U R",
                "R U R' U R U2 R B2 R2",
                "R2 B2 R' U R' U R U2 R'",
                "U' R' U2 R U R' U R' F2 R2"
            ]
        },
        {
            "name": "EG2 S 3",
            "subsets": ["S"],
            "algs": [
                "R U' R' F R' F' R' F2 R2", "R U' R' F2 R2 F' L' U' L"
            ]
        },
        {
            "name": "EG2 S 4",
            "subsets": ["S"],
            "algs": [
                "F R' F' R U2 R U2 R B2 R2", "U F R2 F' R2 F' R U' R"
            ]
        },
        {
            "name": "EG2 S 5",
            "subsets": ["S"],
            "algs": [
                "R' U R' F R2 U' F R' F'",
                "U2 R' F R' F2 R U R U R' U R",
                "R' U R' F R2 D' R U' R'",
                "R' F2 R U2 R U' R' F R2 F2 R2"
            ]
        },
        {
            "name": "EG2 S 6",
            "subsets": ["S"],
            "algs": [
                "R2 B2 R' U' R' F R' F' R",
                "R2 F2 R' U' R' F R' F' R",
                "U2 R U' R U' R' U R' U' F R' F' R2 B2 R2",
                "R U R' U' R' F R F' R U R' U R U2 R B2 R2"
            ]
        },
        {
            "name": "EG2 T 1",
            "subsets": ["T"],
            "algs": [
                "U R' F' R U R U' R' F' R2 B2 U",
                "U R' F' R U R U' R' F' R2 F2",
                "U' F R F' R U R' U' R B2 R2",
                "U' F R F' U' R' U' R' F2 R2"
            ]
        },
        {
            "name": "EG2 T 2",
            "subsets": ["T"],
            "algs": [
                "U F R' U2 R' U' R U2 F'",
                "U' R U R' U' R' F R F' R2 F2 R2",
                "U F R' U2 R' U' R U2 F' U",
                "U x U' R' F R' F' R U R' U2 R2"
            ]
        },
        {
            "name": "EG2 T 3",
            "subsets": ["T"],
            "algs": [
                "R' U R U2 R2 F' R U' R",
                "U R' U R' F U' R U R2",
                "R U2 R' U' R U' R2 U2 R U R' U R' F2 R2 U'",
                "U2 R' U R' U2 R U2 R' U R2 U' R B2 R2"
            ]
        },
        {
            "name": "EG2 T 4",
            "subsets": ["T"],
            "algs": [
                "R2 F2 R U' F R' F' R U R",
                "U R U2 R2 F R F' R U' R' U R U2 R F2 R2 U",
                "U2 R2 B2 R2 F R U R' U' F'",
                "F2 R2 F U' R' F R F"
            ]
        },
        {
            "name": "EG2 T 5",
            "subsets": ["T"],
            "algs": [
                "U' R' U2 R U' R' F R' F R F' R",
                "R' U R U2 R2 F R F' R' F2 R2",
                "U R' F2 R U' R' U R' F R U' R"
            ]
        },
        {
            "name": "EG2 T 6",
            "subsets": ["T"],
            "algs": [
                "U R' U2 R' F2 R F2 R",
                "U R' U2 R' F2 R F2 R U",
                "U z' U' R2 U' R2 U R2 U R2 z",
                "U2 F R U R' U' R U' R' U' R U R' F' R2 B2 R2"
            ]
        },
        {
            "name": "EG2 U 1",
            "subsets": ["U"],
            "algs": [
                "R2 U2 R U R' U F' R U' R",
                "U' F U' R U2 R U' R' U2 R' U' F'",
                "U' R' U R' F U' R U' R U2 R2",
                "U' R' U R' F U' R U' R' U2 R2"
            ]
        },
        {
            "name": "EG2 U 2",
            "subsets": ["U"],
            "algs": [
                "U' F R U R' U' F R2 B2",
                "U' F R U R' U' F R2 B2 U'",
                "U F U R U' R' F R2 F2",
                "U' F R U R' U' F R2 F2"
            ]
        },
        {
            "name": "EG2 U 3",
            "subsets": ["U"],
            "algs": [
                "R' F' U' R U2 R' U F R",
                "U2 R' U' R U R' F2 R U' R' U R",
                "R U R' U' R B2 R' U R U' R'",
                "U' F R' F' R U' R U' R' U2 R U' R F2 R2"
            ]
        },
        {
            "name": "EG2 U 4",
            "subsets": ["U"],
            "algs": [
                "R' F' U' F U2 L' U2 R U' L",
                "U' R2 F2 R U R U2 R2 F R F' R",
                "F R U R' U' F R U R' U' F R U R F2 R2 U2",
                "U2 F R U R' U2 F' R U' R' F' R2 B2"
            ]
        },
        {
            "name": "EG2 U 5",
            "subsets": ["U"],
            "algs": [
                "U2 R2 B2 R' U R' U' R' F R F'",
                "U2 R2 B2 R' U R' U' R' F R F' U2",
                "R' F R2 U' R' F R' F' R U R' F' R' F2 R2",
                "R' U R' F R F' R U2 R' U R' F2 R2"
            ]
        },
        {
            "name": "EG2 U 6",
            "subsets": ["U"],
            "algs": [
                "U2 R2 F2 R F' R U L F' L' F",
                "U2 R2 B2 R2 F R F' R U R' U' R'",
                "R U' R2 F R F' R U R' U' R U R F2 R2",
                "U2 R2 F2 R F' R U R U' R' F U2"
            ]
        }
    ]
}