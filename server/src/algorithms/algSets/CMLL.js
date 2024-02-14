function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "3x3",
    "gray": ["UB", "UL", "UR", "UF", "LU", "RU", "FU", "F", "FD", "DF", "DB", "BD", "B", "BU"],
    "pre": () => randElement(["M' U' M U", "M' U M U'", "M U' M' U", "M U M' U'"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "cases": [
        {
            "name": "O Adjacent",
            "subsets": ["O"],
            "algs": [
                "R U R' F' R U R' U' R' F R2 U' R'",
                "R U R' U' R' F R2 U' R' U' R U R' F'",
                "r U R' F' R U R' U' R' F R2 U' r'",
                "R U2 R' U' R U2 L' U R' U' L"
            ]
        },
        {
            "name": "O Diagonal",
            "subsets": ["O"],
            "algs": [
                "F R U' R' U' R U R' F' R U R' U' R' F R F'",
                "F R' F R2 U' R' U' R U R' F' R U R' U' F'",
                "R U' R2 F R F' R U' B U2 B' R'",
                "r2 D' r U' r' D r2 F' r' U r F"
            ]
        },
        {
            "name": "H Columns",
            "subsets": ["H"],
            "algs": [
                "U R U R' U R U' R' U R U2 R'",
                "R U2 R' U' R U R' U' R U' R'",
                "r U' r' U' r U' r' U r U r'",
                "r U' r' U' r U r' U r U r'"
            ]
        },
        {
            "name": "H Rows",
            "subsets": ["H"],
            "algs": [
                "F U R U' R' U R U' R' U R U' R' F'",
                "F R U R' U' R U R' U' R U R' U' F'",
                "F U' R2 D R' U2 R D' R2 U F'",
                "F R U r' U' R U R' U' R U R' M' U' F'"
            ]
        },
        {
            "name": "H Column",
            "subsets": ["H"],
            "algs": [
                "U R U2 R2 F R F' U2 R' F R F'",
                "R' F2 D R2 U R2 D' F2 R",
                "U' F R U R' U' R U' R' U R U R' F'",
                "U F R U R' U' F' R U R' U' R' F R F'"
            ]
        },
        {
            "name": "H Row",
            "subsets": ["H"],
            "algs": [
                "U2 r U' r2 D' r U' r' D r2 U r'",
                "U' R U R' U R U r' F R' F' r",
                "U' R U R' U R U L' U R' U' L",
                "U2 R U' R2 D' r U' r' D R2 U R'"
            ]
        },
        {
            "name": "Pi Right Bar",
            "subsets": ["Pi"],
            "algs": [
                "F R U R' U' R U R' U' F'",
                "U2 F U R U' R' U R U' R' F'",
                "r' U r2 U' r2 U' r2 U r'",
                "R' U2 R2 U R2 U R2 U2 R'"
            ]
        },
        {
            "name": "Pi Backslash",
            "subsets": ["Pi"],
            "algs": [
                "U F R' F' R U2 R U' R' U R U2 R'",
                "U F U R U' R2 F' R U2 R U2 R'",
                "U M F R' F' r U2 R U' R' U R U2 R'",
                "R' U2 R U R' U' R U2 R f' U' f"
            ]
        },
        {
            "name": "Pi X",
            "subsets": ["Pi"],
            "algs": [
                "U' R' F R U F U' R U R' U' F'",
                "R' F2 D R2 U' R2 D' F2 R",
                "r' F2 D R2 U' R2 D' F2 r",
                "U' F R U' R' U' R U R' U R U' R' F'"
            ]
        },
        {
            "name": "Pi Forward Slash",
            "subsets": ["Pi"],
            "algs": [
                "R U2 R' U' R U R' U2 R' F R F'",
                "R U2 R' U2 R' F R2 U R' U' F'",
                "R U2 R' U' R U R' U2 r' F R F' M'",
                "R U R' U' R' F R2 U R' U' R U R' U' F'"
            ]
        },
        {
            "name": "Pi Columns",
            "subsets": ["Pi"],
            "algs": [
                "U' r U' r2 D' r U r' D r2 U r'",
                "U2 R' F R F' r U' R' U' R U' r'",
                "U2 R' F R F' r U' r' U' R U' R'",
                "U' R U2 R' U R' D' R U2 R' D R2 U' R'"
            ]
        },
        {
            "name": "Pi Left Bar",
            "subsets": ["Pi"],
            "algs": [
                "U' R' U' R' F R F' R U' R' U2 R",
                "R' F' U' F U' R U R' U R",
                "U2 R U R' U R U' B U' B' R'",
                "U' r U R' U R' F R F' R U' R' U R U2 r'"
            ]
        },
        {
            "name": "U Forward Slash",
            "subsets": ["U"],
            "algs": [
                "U2 R2 D R' U2 R D' R' U2 R'",
                "r U' r' U' r U' r' U' F' U2 F",
                "U2 R r D r' U2 r D' r' U2 R'",
                "R' U2 R U2 F U' R' U R U F'"
            ]
        },
        {
            "name": "U Backslash",
            "subsets": ["U"],
            "algs": [
                "R2 D' R U2 R' D R U2 R",
                "R' F R U R' F R U F U2 F'",
                "U2 L2 D' L U2 L' D L U2 L",
                "R' r' D' r U2 r' D r U2 R"
            ]
        },
        {
            "name": "U Front Row",
            "subsets": ["U"],
            "algs": [
                "R' U' R U' R' U2 R2 U R' U R U2 R'",
                "R2 F U' F U F2 R2 U' R' F R",
                "U2 R U R' U R U2 R2 U' R U' R' U2 R",
                "U' R U R' U' R U' R' U2 R U' R' U2 R U R'"
            ]
        },
        {
            "name": "U Rows",
            "subsets": ["U"],
            "algs": [
                "U' F R2 D R' U R D' R2 U' F'",
                "U' R' U' R F R2 D' R U R' D R2 U' F'",
                "F U R2 D R' U' R D' R2 F'",
                "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R"
            ]
        },
        {
            "name": "U X",
            "subsets": ["U"],
            "algs": [
                "U2 r U' r' U r' D' r U' r' D r",
                "r' U r' D' r U r' D r U' r",
                "U' R' D R U' R U' R' U R' D' R",
                "F R U' R' U R U R' U R U' R' F'"
            ]
        },
        {
            "name": "U Back Row",
            "subsets": ["U"],
            "algs": [
                "U' F R U R' U' F'",
                "U F U R U' R' F'",
                "R' F' U' F U R"
            ]
        },
        {
            "name": "T Left Bar",
            "subsets": ["T"],
            "algs": [
                "U' R U R' U' R' F R F'",
                "U L U L' U' L' f U f'"
            ]
        },
        {
            "name": "T Right Bar",
            "subsets": ["T"],
            "algs": [
                "U L' U' L U L F' L' F",
                "U r' F' r U r U' r' F",
                "U' F R U' R' U R U R' F'"
            ]
        },
        {
            "name": "T Rows",
            "subsets": ["T"],
            "algs": [
                "F R' F R2 U' R' U' R U R' F2",
                "R U2 R' U' R U' R2 U2 R U R' U R",
                "U' R U R' U R U2 R2 F' r U' r' F2 R",
                "R' U R U2 R' U' R U2 R' U' R U' R' U R"
            ]
        },
        {
            "name": "T Front Row",
            "subsets": ["T"],
            "algs": [
                "r' U r U2 R2 F R F' R",
                "R U R2 F R F' U r U r'",
                "U2 r U' r' U' F R' F' R2 U' R'",
                "R' U r U2 R2 F R F' r"
            ]
        },
        {
            "name": "T Back Row",
            "subsets": ["T"],
            "algs": [
                "r' D' r U r' D r U' r U r'",
                "U R' D R U' R U R' U R' D' R",
                "U2 F R U R' U' R U' R' U' R U R' F'",
                "R F R' U' R F' R' U R' F' R"
            ]
        },
        {
            "name": "T Columns",
            "subsets": ["T"],
            "algs": [
                "U2 r U' r2 D' r U2 r' D r2 U r'",
                "U2 r2 D' r U r' D r2 U' r' U' r",
                "R' U R2 D r' U2 r D' R2 U' R",
                "U2 R' F R2 F R' U2 R F' R2 F' R"
            ]
        },
        {
            "name": "Sune Left Bar",
            "subsets": ["Sune"],
            "algs": [
                "U R U R' U R U2 R'",
                "U r U R' U R U2 r'",
                "R' U2 R U R' U R",
                "U' L U L' U L U2 L'"
            ]
        },
        {
            "name": "Sune X",
            "subsets": ["Sune"],
            "algs": [
                "U L' U2 L U2 L F' L' F",
                "U r' F2 r U2 r U' r' F",
                "U L' U2 L U2 r U' r' F"
            ]
        },
        {
            "name": "Sune Forward Slash",
            "subsets": ["Sune"],
            "algs": [
                "U F R' F' R U2 R U2 R'",
                "U F U R U' R2 F' R U R U' R'"
            ]
        },
        {
            "name": "Sune Columns",
            "subsets": ["Sune"],
            "algs": [
                "R U R' U R U' R D R' U' R D' R2",
                "U R U R' U' R' F R F' R U R' U R U2 R'",
                "U2 R' F2 R2 U2 R' F R U2 R2 F2 R",
                "F R' U2 R F' R' F U2 F' R"
            ]
        },
        {
            "name": "Sune Right Bar",
            "subsets": ["Sune"],
            "algs": [
                "U' R U R' U R' F R F' R U2 R'",
                "U' R U R' U r' F R F' r U2 R'",
                "U' R U R' F' R U R' U R U2 R' F R U' R'",
                "U' R U R' U L' U R U' L U2 R'"
            ]
        },
        {
            "name": "Sune Backslash",
            "subsets": ["Sune"],
            "algs": [
                "U r U' r' F R' F' R",
                "U R U' L' U R' U' L",
                "U R U' r' F R' F' r",
                "U' L U' R' U L' U' R"
            ]
        },
        {
            "name": "Antisune Right Bar",
            "subsets": ["Antisune"],
            "algs": [
                "U R' U' R U' R' U2 R",
                "U2 R U2 R' U' R U' R'",
                "U' L' U' L U' L' U2 L"
            ]
        },
        {
            "name": "Antisune Columns",
            "subsets": ["Antisune"],
            "algs": [
                "U' R2 D R' U R D' R' U R' U' R U' R'",
                "U2 R' U' R U' R' U R' D' R U R' D R2",
                "U' R' F U2 F' R F R' U2 R F'",
                "U' L' U' L U L F' L' F L' U' L U' L' U2 L"
            ]
        },
        {
            "name": "Antisune Backslash",
            "subsets": ["Antisune"],
            "algs": [
                "U' F' r U r' U2 r' F2 r",
                "U' F' L F L' U2 L' U2 L",
                "U2 F R U' R' U R U2 R' U' F'",
                "U' M F' r U R' U2 R' F2 R"
            ]
        },
        {
            "name": "Antisune X",
            "subsets": ["Antisune"],
            "algs": [
                "U' R U2 R' U2 R' F R F'",
                "U' R U2 R' U2 r' F R F' M'",
                "U' r U2 R' U2 R' F R F' M'",
                "U' R U R' U' R' F R2 U R' U' F'"
            ]
        },
        {
            "name": "Antisune Forward Slash",
            "subsets": ["Antisune"],
            "algs": [
                "U' R' F R F' r U r'",
                "U' r' F R F' r U R'",
                "U' L' U R U' L U R'",
                "U R' U L U' R U L'"
            ]
        },
        {
            "name": "Antisune Left Bar",
            "subsets": ["Antisune"],
            "algs": [
                "U R U2 R' F R' F' R U' R U' R'",
                "R' U' R U' R' U R' F R F' U R",
                "U R U2 r' F R' F' r U' R U' R'",
                "U L' U' L U' L F' L' F L' U2 L"
            ]
        },
        {
            "name": "L Best",
            "subsets": ["L"],
            "algs": [
                "U' F' r U r' U' r' F r",
                "U2 F R U' R' U' R U R' F'",
                "R2 D' R U' R' D R U R",
                "U' F' L F L' U' L' U L"
            ]
        },
        {
            "name": "L Good",
            "subsets": ["L"],
            "algs": [
                "U2 F R' F' R U R U' R'",
                "U2 F R' F' r U R U' r'",
                "U' r U' r' U' F' U F",
                "U2 R U R' U' R' F R F' R U R' U' R' F R F'"
            ]
        },
        {
            "name": "L Pure",
            "subsets": ["L"],
            "algs": [
                "R U R' U R U' R' U R U' R' U R U2 R'",
                "R U2 R' U' R U R' U' R U R' U' R U' R'",
                "R U R' U r U' R' U R U' R' U R U2 r'",
                "U' R' U2 R U R' U' R U R' U' R U R' U R"
            ]
        },
        {
            "name": "L Front Commutator",
            "subsets": ["L"],
            "algs": [
                "U2 R U2 R D R' U2 R D' R2",
                "U2 R U2 r D r' U2 r D' r' R'",
                "R U R' U R' F R F' U2 R' F R F'",
                "U r' D' r U2 r' D r U2 r U r'"
            ]
        },
        {
            "name": "L Diagonal",
            "subsets": ["L"],
            "algs": [
                "U2 R U2 R2 F R F' R U2 R'",
                "U2 r U2 R2 F R F' R U2 r'",
                "R' U' R U R' F' R U R' U' R' F R2",
                "U R U2 R' F R' F' R2 U2 R'"
            ]
        },
        {
            "name": "L Back Commutator",
            "subsets": ["L"],
            "algs": [
                "U R' U2 R' D' R U2 R' D R2",
                "U2 R U R' U' R' F R2 U' R' U R U R' F'",
                "U2 r D r' U2 r D' r' U2 r' U' r",
                "U R' U2 r' D' r U2 r' D r R"
            ]
        }
    ]
}