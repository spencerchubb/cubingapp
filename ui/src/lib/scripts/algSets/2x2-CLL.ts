import { randElement } from "../common/rand";

export let algSet = {
    "puzzle": "2x2",
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "cases": [
        {
            "name": "CLL AS 1",
            "subsets": ["Antisune"],
            "algs": [
                "U R U2 R' U' R U' R'",
                "U2 L' U' L U' L' U2 L",
                "R' U' R U' R' U2 R",
                "U2 R' F' R U' R' F2 R"
            ]
        },
        {
            "name": "CLL AS 2",
            "subsets": ["Antisune"],
            "algs": [
                "R U2 R' F R' F' R U' R U' R'",
                "L' U' L U' L F' L' F L' U2 L",
                "U2 R' U R U' R2 F R F' R U R' U' R",
                "U2 L' U' L U L F' L' F L' U L F' L F L' U'"
            ]
        },
        {
            "name": "CLL AS 3",
            "subsets": ["Antisune"],
            "algs": [
                "U2 F' L F L' U2 L' U2 L",
                "U2 F' R U R' U2 R' F2 R",
                "x' U' R U L' U2 R' U2 R",
                "R' U L U' R U L'"
            ]
        },
        {
            "name": "CLL AS 4",
            "subsets": ["Antisune"],
            "algs": [
                "U2 R' F R F' R U R'",
                "U2 L' U L F' R U R'",
                "x' R' F R U' R U R'",
                "U2 L' U R U' L U R'"
            ]
        },
        {
            "name": "CLL AS 5",
            "subsets": ["Antisune"],
            "algs": [
                "U2 R U2 R' U2 R' F R F'",
                "L U2 L' U2 x' L' U L U'",
                "U2 R U2 R' U2 L' U R U'",
                "U F R2 F' U' R' U' R F R' F'"
            ]
        },
        {
            "name": "CLL AS 6",
            "subsets": ["Antisune"],
            "algs": [
                "U2 L' U' L U L F' L' F L' U' L U' L' U2 L",
                "U R U R2 F' R F R U' R2 F R",
                "U2 R' F2 R F' R' F2 R U' R' F R F'",
                "F R F' U R U' R U R' U R'"
            ]
        },
        {
            "name": "CLL H 1",
            "subsets": ["H"],
            "algs": [
                "F R2 U' R2 U' R2 U R2 F'",
                "F R U' R' U R U2 R' U' R U R' U' F'",
                "U' R' U2 R y R' U R' U' R U' R",
                "R U2 R2 F R F' U2 R' F R F'"
            ]
        },
        {
            "name": "CLL H 2",
            "subsets": ["H"],
            "algs": [
                "R U R' U R U R' F R' F' R",
                "R U R' U R U L' U R' U' L",
                "U R U' R' F U2 R2 F R U' R",
                "R' F' R U2 R U2 R' F U' R U' R'"
            ]
        },
        {
            "name": "CLL H 3",
            "subsets": ["H"],
            "algs": [
                "U F R U R' U' R U R' U' R U R' U' F'",
                "R U' R' F R' F' R2 U' R' F R' F' R",
                "U x' U2 R U2 R2 F2 R U2 x",
                "R' F R F' R U R2 F R F' R U R'"
            ]
        },
        {
            "name": "CLL H 4",
            "subsets": ["H"],
            "algs": [
                "U R2 U2 R' U2 R2",
                "U R2 U2 R U2 R2",
                "R U R' U R U' R' U R U2 R'",
                "U' R U2 R' U' R U R' U' R U' R'"
            ]
        },
        {
            "name": "CLL L 1",
            "subsets": ["L"],
            "algs": [
                "U R U2 R' F' R U2 R' U R' F2 R",
                "U R' U' R U2 R' F R' F' R U' R",
                "R' F' R U R' U' R' F R2 U' R' U2 R",
                "U R U R2 F' R U R U' R2 F' R F"
            ]
        },
        {
            "name": "CLL L 2",
            "subsets": ["L"],
            "algs": [
                "U2 R U2 R2 F2 R U R' F2 R F'",
                "R' U2 R' U' F R2 F' U R2",
                "U R U R' U' R' F R2 F' U' R' U' R",
                "R U' R' U R U' R' F R' F' R2 U R'"
            ]
        },
        {
            "name": "CLL L 3",
            "subsets": ["L"],
            "algs": [
                "U2 R' U R' U2 R U' R' U R U' R2",
                "U2 R2 U' R U2 R' U2 R U' R2",
                "U R U' R U' R U2 R' U R' U R'",
                "U' R U' R' U2 R2 U R' U R' U2 R2"
            ]
        },
        {
            "name": "CLL L 4",
            "subsets": ["L"],
            "algs": [
                "U R U2 R2 F R F' R U2 R'",
                "R U2 R' F R' F' R2 U2 R'",
                "U' R' U' R U R' F' R U R' U' R' F R2",
                "U' R' F2 R F' R U R2 F2 R"
            ]
        },
        {
            "name": "CLL L 5",
            "subsets": ["L"],
            "algs": [
                "U F R' F' R U R U' R'",
                "U F R' F' U' R' U R",
                "U F' U R U' R' F2 R U' R'",
                "U' R' F' L' F R F' L F"
            ]
        },
        {
            "name": "CLL L 6",
            "subsets": ["L"],
            "algs": [
                "U2 F' R U R' U' R' F R",
                "U F R U' R' U' R U R' F'",
                "U R' F R U F U' F'",
                "U' F R F U' R' U F' R' U'"
            ]
        },
        {
            "name": "CLL Pi 1",
            "subsets": ["Pi"],
            "algs": [
                "U F R' F' R U2 R U' R' U R U2 R'",
                "R' F2 R F' U2 R U' R' U' F",
                "U F U R U' R' U R U' R2 F' R U R U' R'",
                "R' F2 R U2 R U2 R' F2 U' R U' R'"
            ]
        },
        {
            "name": "CLL Pi 2",
            "subsets": ["Pi"],
            "algs": [
                "R U2 R' U' R U R' U2 R' F R F'",
                "U F' R U R' U2 R' F R U' R' F2 R",
                "R U R' U' R' F R2 U R' U' R U R' U' F'",
                "R2 U' R' U' F R2 U2 F' R2 F"
            ]
        },
        {
            "name": "CLL Pi 3",
            "subsets": ["Pi"],
            "algs": [
                "U F R2 U' R2 U R2 U R2 F'",
                "U' R U' R U' R' U R' F R2 F'",
                "U2 F R' F' R U2 F R' F' R2 U2 R'",
                "U' R' F R U F U' R U R' U' F'"
            ]
        },
        {
            "name": "CLL Pi 4",
            "subsets": ["Pi"],
            "algs": [
                "U2 R' F R F' R U' R' U' R U' R'",
                "R U' R' F R' F R U R' F R",
                "R U' R' F L' U L U L' U L",
                "U' R U' R2 D' R U R' D R2 U R'"
            ]
        },
        {
            "name": "CLL Pi 5",
            "subsets": ["Pi"],
            "algs": [
                "U' R' U' R' F R F' R U' R' U2 R",
                "U' R' U' R' F R F' R U' R' U2 R",
                "U2 F R U R' U' F' R2 U2 R' U2 R2",
                "R2 U R' U' F R F' R U' R2"
            ]
        },
        {
            "name": "CLL Pi 6",
            "subsets": ["Pi"],
            "algs": [
                "R U' R2 U R2 U R2 U' R",
                "F R U R' U' R U R' U' F'",
                "R' U R2 U' R2 U' R2 U R'",
                "R U2 R2 U' R2 U' R2 U2 R"
            ]
        },
        {
            "name": "CLL Sune 1",
            "subsets": ["Sune"],
            "algs": [
                "L' U2 L U2 L F' L' F",
                "R' F2 R U2 R U' R' F",
                "L' U2 L U2 R U' R' F",
                "R' F2 R U2 L F' L' F"
            ]
        },
        {
            "name": "CLL Sune 2",
            "subsets": ["Sune"],
            "algs": [
                "R U R' U' R' F R F' R U R' U R U2 R'",
                "R2 F' U' R2 F R2 U F R2",
                "R U2 R' F R U2 R' U R U' R' F",
                "U2 R U' R U' R' U R' U' y R U' R'"
            ]
        },
        {
            "name": "CLL Sune 3",
            "subsets": ["Sune"],
            "algs": [
                "R U' R' F R' F' R",
                "R U' R' F L' U' L",
                "L F' L' F L' U' L",
                "R U' L' U R' U' L"
            ]
        },
        {
            "name": "CLL Sune 4",
            "subsets": ["Sune"],
            "algs": [
                "F R' F' R U2 R U2 R'",
                "F L' U' L U2 L F2 L'"
            ]
        },
        {
            "name": "CLL Sune 5",
            "subsets": ["Sune"],
            "algs": [
                "U' R' F R2 F' U' R' U' R2 U R'",
                "U2 R U R' U R' F R F' R U2 R'",
                "R U R' U' R' F R F' R U' R' F R' F' R",
                "U2 R U R' U R' F R F' R U2 R'"
            ]
        },
        {
            "name": "CLL Sune 6",
            "subsets": ["Sune"],
            "algs": [
                "R U R' U R U2 R'",
                "R U R2 U' R2 U R",
                "U' R' U2 R U R' U R",
                "U L' U2 L U L' U L"
            ]
        },
        {
            "name": "CLL T 1",
            "subsets": ["T"],
            "algs": [
                "U' R U R' U' R' F R F'",
                "U2 R' U' R U F R F'",
                "U' x L U R' U' L' U R U' x'"
            ]
        },
        {
            "name": "CLL T 2",
            "subsets": ["T"],
            "algs": [
                "U L' U' L U L F' L' F",
                "R U R' U' y L' U' L",
                "U' F R U' R' U R U R' F'",
                "U R' F' R U R U' R' F"
            ]
        },
        {
            "name": "CLL T 3",
            "subsets": ["T"],
            "algs": [
                "F U' R U2 R' U' F2 R U R'",
                "U R U2 R2 F R F' R U' R' U R U2 R'",
                "U2 R U F R' F' R U2 R U2 R2",
                "U R' U' R' U R' F R F' R U' R2"
            ]
        },
        {
            "name": "CLL T 4",
            "subsets": ["T"],
            "algs": [
                "R' U R U2 R2 F' R U' R' F2 R2",
                "U R' U R' F U' R U F2 R2",
                "u' R U R' U R U2 R' L' U' L U' L' U2 L U",
                "U' R U R' U R U2 R2 F' R U' R' F2 R"
            ]
        },
        {
            "name": "CLL T 5",
            "subsets": ["T"],
            "algs": [
                "U2 F R U R' U' R U' R' U' R U R' F'",
                "U' R U R' U' R U' R' F' U' F R U R'",
                "U R2 F' R U' R' F2 R F R' F' R2",
                "U R U R' U2 R U R' U R' F R F'"
            ]
        },
        {
            "name": "CLL T 6",
            "subsets": ["T"],
            "algs": [
                "R' U R U2 R2 F R F' R",
                "U2 R U' R' U2 L2 F' L' U L'",
                "U2 R' F R U2 R2 F R U' R",
                "U2 R U' R' U' F R' F' R2 U' R'"
            ]
        },
        {
            "name": "CLL U 1",
            "subsets": ["U"],
            "algs": [
                "U' F R U R' U' F'",
                "U F U R U' R' F'",
                "U' R' U' F R' F' R U R",
                "U R' U' R' F R F' U R"
            ]
        },
        {
            "name": "CLL U 2",
            "subsets": ["U"],
            "algs": [
                "U' R2 F2 R U R' F R2 U2 R' U' R",
                "R' F U' R U' R' U2 F2 R",
                "R' U' R2 U R' U2 R U2 R' U R'",
                "R' U' R U' R' U2 R2 U R' U R U2 R'"
            ]
        },
        {
            "name": "CLL U 3",
            "subsets": ["U"],
            "algs": [
                "U2 F R U R' U2 F' R U' R' F",
                "U' R U2 R U' R' F R' F2 U' F",
                "U' R' U' F2 U' R U R' D R2 B",
                "U' R' U' F2 U' R U R' U F2 R"
            ]
        },
        {
            "name": "CLL U 4",
            "subsets": ["U"],
            "algs": [
                "U' F R' F' R U' R U' R' U2 R U' R'",
                "R2 F R F' R' F2 R U R' F R2",
                "F R U' R' U R U R' U R U' R' F'",
                "U F' R U R' U' R' F R2 U R' U R U2 R'"
            ]
        },
        {
            "name": "CLL U 5",
            "subsets": ["U"],
            "algs": [
                "R U' R2 F R F' R U R' U' R U R'",
                "U2 R U2 R' U R' F2 R F' R' F2 R",
                "U R' F U' F' R U' R' U2 F R",
                "F U2 R U' R' U F' U' R' F R"
            ]
        },
        {
            "name": "CLL U 6",
            "subsets": ["U"],
            "algs": [
                "R' U R' F R F' R U2 R' U R",
                "L' U L2 F' L' F L' U' L U L' U' L",
                "U2 R2 U R' U' R' F R2 F' U' R'",
                "U2 x R2 F R' F2 R U' R' F2 R' x'"
            ]
        }
    ]
};