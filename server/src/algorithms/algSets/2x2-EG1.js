function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "2x2",
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "cases": [
        {
            "name": "EG1 AS 1",
            "subsets": ["Antisune"],
            "algs": [
                "U R' F R2 U R' F' U' R U' R'",
                "U U2 B U' R2 F2 U' F",
                "R' U' R U' R' U2 R r2 R U2 R' U' R U2 R' F R' F' R U2",
                "U U' L' U' L U' F' L' U L2 F L'"
            ]
        },
        {
            "name": "EG1 AS 2",
            "subsets": ["Antisune"],
            "algs": [
                "U R U' R' F' U' F2 R U' R'",
                "U2 L' U' L F2 U' F' L' U' L",
                "U F' L F L' F' L' U L U' L F L'",
                "R U' F2 R U2 R U' B"
            ]
        },
        {
            "name": "EG1 AS 3",
            "subsets": ["Antisune"],
            "algs": [
                "F' R U R' U' R U R2 F' R",
                "U' R U' R' U2 R' F R2 U2 R' F",
                "F' L F L' U' L F L2 U' L",
                "F' L F L' U' R U R' L' U' L"
            ]
        },
        {
            "name": "EG1 AS 4",
            "subsets": ["Antisune"],
            "algs": [
                "R U' R' F' U' R U R' U' F",
                "U2 F U' L' U L U' F' L' U' L",
                "U' R U R' U2 R' F' R F R' F R",
                "U F R U' R2 F' R U F' R U R'"
            ]
        },
        {
            "name": "EG1 AS 5",
            "subsets": ["Antisune"],
            "algs": [
                "U' R U R' F' U' R U R' U' R U R'",
                "d U2 L' U L U' L' U L U L F L' F'",
                "U' U2 F' R' F R U R U R' U' R U R'",
                "U' U2 L' U L U' L' U L U L F L' F'"
            ]
        },
        {
            "name": "EG1 AS 6",
            "subsets": ["Antisune"],
            "algs": [
                "U2 R U' R2 F R U' R' F R F'",
                "U2 L F' L2 U L U' L' U L F'"
            ]
        },
        {
            "name": "EG1 H 1",
            "subsets": ["H"],
            "algs": [
                "U' R' F R2 U' R' F R U R' F'",
                "U' R' F R2 U' R2 U' F U R",
                "U R U' R2 F R F' R' F' R F",
                "F' R' F R F R' F' R2 U R'"
            ]
        },
        {
            "name": "EG1 H 2",
            "subsets": ["H"],
            "algs": [
                "U' F' U R U' R2 F2 R U' F",
                "F R U' R2 F U' F2 U R",
                "U F' U R U' R2 F2 R U' F",
                "U R U' R' U' R U' R2 F2 R U R U R'"
            ]
        },
        {
            "name": "EG1 H 3",
            "subsets": ["H"],
            "algs": [
                "U R' F R F' U2 F R U2 R' F",
                "R' U' R' F2 U F' R F'",
                "U R U' R' F U2 x U' R' U2 R U'",
                "U' F U2 R U' R' F2 R' F2 R F'"
            ]
        },
        {
            "name": "EG1 H 4",
            "subsets": ["H"],
            "algs": [
                "U' R U R' F' R U R' U' R U R' U'",
                "F' U R' F R F' U F2",
                "U' R U R' F' R U R' U' R U R'",
                "R' F R F' R' F R U' R' F R F'"
            ]
        },
        {
            "name": "EG1 L 1",
            "subsets": ["L"],
            "algs": [
                "U R U' R' U R U' R2 F' R F",
                "U U R U R' F' R U2 R' U2 R U R'",
                "U U F R U' R' F' R U R' F' R U R'"
            ]
        },
        {
            "name": "EG1 L 2",
            "subsets": ["L"],
            "algs": [
                "U' U' R' F R U' R' F R2 U R' F' U2",
                "U' U2 x R' U' R U' R' U' R U' R' U2 R",
                "U' U' L' U L U' L' U L2 F L' F'",
                "U' U' R' F R U' R' F R2 U R' F'"
            ]
        },
        {
            "name": "EG1 L 3",
            "subsets": ["L"],
            "algs": [
                "U R' U R2 U' R2 U' F R2 U' R'"
            ]
        },
        {
            "name": "EG1 L 4",
            "subsets": ["L"],
            "algs": [
                "U R' F R2 U R' F' R U2 R'",
                "U R U2 R' F R U' R2 F' R"
            ]
        },
        {
            "name": "EG1 L 5",
            "subsets": ["L"],
            "algs": [
                "U2 R U R' F' R U R' U' F R' F' R",
                "U2 U F' R' F R U' R U R' U' R U R' U'",
                "U2 L' U L y' R U2 R U' R2"
            ]
        },
        {
            "name": "EG1 L 6",
            "subsets": ["L"],
            "algs": [
                "U2 U2 F R U' R' U R' F' R U R' F' R",
                "U2 R' U2 F R U2 R U' R2 F",
                "U2 U' L' U' L F L' U' L U F' L F L'",
                "U R U' R' U' y R U R2 F' R"
            ]
        },
        {
            "name": "EG1 Pi 1",
            "subsets": ["Pi"],
            "algs": [
                "U2 U' F U' R' F R U' F2 R U R'",
                "U2 F2 R U R' U2 R U R' U' F",
                "U' R U' R2 F R2 U' R F2 R2 U'",
                "U' R' F R2 U' R2 F R' F2 R2"
            ]
        },
        {
            "name": "EG1 Pi 2",
            "subsets": ["Pi"],
            "algs": [
                "U' R U' R2 F R2 U' R'",
                "U' R' F R2 U' R2 F R",
                "U' R U R2 F' R2 U R'",
                "U' R' F' R2 U R2 F' R"
            ]
        },
        {
            "name": "EG1 Pi 3",
            "subsets": ["Pi"],
            "algs": [
                "U' F R' F U' F2 R U R",
                "U' F' R U2 R' F' U2 F R' F' R"
            ]
        },
        {
            "name": "EG1 Pi 4",
            "subsets": ["Pi"],
            "algs": [
                "U' R U' R' U R U' R' F R U' R'",
                "U' F' R U R' U' R U R' F' R U R'"
            ]
        },
        {
            "name": "EG1 Pi 5",
            "subsets": ["Pi"],
            "algs": [
                "R U' R2 F R U R U' R' U' R' F R F'",
                "U' R U R' U R U' R2 F' R F R' F' R",
                "U' L F' L' F L F' L2 U' L U L' U L U'",
                "U F U' R U2 R' F' R U R' F'"
            ]
        },
        {
            "name": "EG1 Pi 6",
            "subsets": ["Pi"],
            "algs": [
                "U' R' F' R U' R' F R2 U R' F' R U R'",
                "U' R' F R F' R' F R2 U R' U' R U' R'",
                "F R U' R' F R U2 R' U F'",
                "U' F R' F' R U R U R' U' R' F' R2 U R'"
            ]
        },
        {
            "name": "EG1 S 1",
            "subsets": ["Sune"],
            "algs": [
                "U2 R U R' U F R U' R2 F' R",
                "U2 U' L F' L2 U' L F U L' U L",
                "U2 U F' L U2 F2 R U' x'",
                "U2 U' R U' R2 F' R F U R' F R"
            ]
        },
        {
            "name": "EG1 S 2",
            "subsets": ["Sune"],
            "algs": [
                "R U R' F2 U F R U R'",
                "U F R' F' R F R U' R' U R' F' R"
            ]
        },
        {
            "name": "EG1 S 3",
            "subsets": ["Sune"],
            "algs": [
                "U2 F R' F' R U R' F' R2 U R'",
                "U2 U R' F R U2 R U' R2 F2 R F'"
            ]
        },
        {
            "name": "EG1 S 4",
            "subsets": ["Sune"],
            "algs": [
                "U F' R' F R2 U R' U' F R' F' R U",
                "U F' R' F R2 U R' U' F R' F' R",
                "F' U R U' R' U F R U R'"
            ]
        },
        {
            "name": "EG1 S 5",
            "subsets": ["Sune"],
            "algs": [
                "U R U' R' U R U' R' U F R U' R'",
                "U U2 L' U' L F U L' U' L U L' U' L",
                "U U2 R2 F U' R U' R U' F2",
                "U R U' R' U R U' R' U' R' F' R F"
            ]
        },
        {
            "name": "EG1 S 6",
            "subsets": ["Sune"],
            "algs": [
                "R' F R2 U' R' U R U' R' F",
                "R' F R2 U' R' U L F' L' F"
            ]
        },
        {
            "name": "EG1 T 1",
            "subsets": ["T"],
            "algs": [
                "F R U' R2 F' R U R' F' R",
                "F L F' L2 U' L U L' U' L",
                "U R2 U R U' R2 F R U2 R' F",
                "U2 R U2 R' U' R' F' R F R' F' R"
            ]
        },
        {
            "name": "EG1 T 2",
            "subsets": ["T"],
            "algs": [
                "F' R' F R2 U R' U' R U R'",
                "U2 R U2 R' F R U' R' F' R U R'",
                "U2 R U' R' F R U' R' F R U R' F'"
            ]
        },
        {
            "name": "EG1 T 3",
            "subsets": ["T"],
            "algs": [
                "U R U' R2 F R U R U2 R'",
                "U U2 R' F R2 U' R' U' R' F2 R",
                "U U2 L' U L2 F' L' U' L' U2 L U2"
            ]
        },
        {
            "name": "EG1 T 4",
            "subsets": ["T"],
            "algs": [
                "U' U' R' U F R2 U' R2 U' F U' R",
                "U' R2 B2 U' R' U' R U' R' U R'"
            ]
        },
        {
            "name": "EG1 T 5",
            "subsets": ["T"],
            "algs": [
                "U' R' F' R2 U R' F' R U R'",
                "U' U2 R U R2 F' R F R' F' R",
                "U' U2 R U R2 F' R F R' F' R U2"
            ]
        },
        {
            "name": "EG1 T 6",
            "subsets": ["T"],
            "algs": [
                "U' U' R U' R' U2 F R U2 R' F",
                "U' U' R' F R2 U R' F' U2 R' F R F'",
                "U' R U R' F R U R' F U' R U' R'"
            ]
        },
        {
            "name": "EG1 U 1",
            "subsets": ["U"],
            "algs": [
                "U U2 R U R' U R U R2 F R2 U' R'",
                "U U2 R U R2 F' R2 U' R' U' R U' R'",
                "U U2 R U' R2 F R2 U R' U' R U' R'",
                "U2 R2 U' R' U' R U' R' U R'"
            ]
        },
        {
            "name": "EG1 U 2",
            "subsets": ["U"],
            "algs": [
                "U2 y R' U R' U' R U' R' U' F2 R2",
                "U' F R2 B R2 F U F2 R2",
                "U' R U R' F' U' R U R' U' F R' F' R",
                "U x U' R' U R U' F R U R U'"
            ]
        },
        {
            "name": "EG1 U 3",
            "subsets": ["U"],
            "algs": [
                "F' U2 R U2 R' U2 F",
                "U y' R U R' F R2 F' R U' R'",
                "U2 R U' R2 F2 R F' U R U R'",
                "R U R' U F' R U R' U' R U R2 F2 R"
            ]
        },
        {
            "name": "EG1 U 4",
            "subsets": ["U"],
            "algs": [
                "U R' F R F' R' F R2 U' R'",
                "U U2 R U' R' F R U' R2 F R"
            ]
        },
        {
            "name": "EG1 U 5",
            "subsets": ["U"],
            "algs": [
                "U2 R U' R' U R U' R' U' F R U' R'",
                "U R' F R F' U R U' R' F R U' R'",
                "U2 L F' L' U L F' L' U L' U' L F",
                "F U' R' F2 R F' U2 F'"
            ]
        },
        {
            "name": "EG1 U 6",
            "subsets": ["U"],
            "algs": [
                "U2 R' F R U' R' F R U' R U R' F' U2",
                "U2 R' F R2 U' R' U y' R U R'",
                "U2 U L F' L' F U' L' U L F' L' U L",
                "U2 U2 F' U R U2 R' F U2 F"
            ]
        }
    ]
}