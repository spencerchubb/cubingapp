export let algSet = {
    "puzzle": "3x3",
    "cases": [
        {
            "name": "Aa perm",
            "algs": [
                "R' F R' B2 R F' R' B2 R2",
                "R' B' R2 D R' U' R D' R' U R' B R"
            ]
        },
        {
            "name": "Ab perm",
            "algs": [
                "R2 B2 R F R' B2 R F' R",
                "R' B' R U' R D R' U R D' R2 B R"
            ]
        },
        {
            "name": "E perm",
            "algs": [
                "x' R U' R' D R U R' D' R U R' D R U' R' D' x"
            ]
        },
        {
            "name": "F perm",
            "algs": [
                "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"
            ]
        },
        {
            "name": "Ga perm",
            "algs": [
                "R2 U R' U R' U' R U' R2 D U' R' U R D'",
                "R2 u R' U R' U' R u' R2 F' U F",
                "D' R2 U R' U R' U' R U' R2 U' D R' U R",
                "y R U R' F' R U R' U' R' F R U' R' F R2 U' R' U' R U R' F'"
            ]
        },
        {
            "name": "Gb perm",
            "algs": [
                "R' U' R U D' R2 U R' U R U' R U' R2 D",
                "y F' U' F R2 u R' U R U' R u' R2",
                "R' d' F R2 u R' U R U' R u' R2",
                "D R' U' R U D' R2 U R' U R U' R U' R2"
            ]
        },
        {
            "name": "Gc perm",
            "algs": [
                "R2 U' R U' R U R' U R2 D' U R U' R' D",
                "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
                "y2 L2 U' L U' L U L' U L2 D' U L U' L' D",
                "D R2 U' R U' R U R' U R2 D' U R U' R'"
            ]
        },
        {
            "name": "Gd perm",
            "algs": [
                "R U R' U' D R2 U' R U' R' U R' U R2 D'",
                "D' R U R' U' D R2 U' R U' R' U R' U R2",
                "R U R' y' R2 u' R U' R' U R' u R2",
                "y R2 F' R U R U' R' F' R U2 R' U2 R' F2 R2"
            ]
        },
        {
            "name": "H perm",
            "algs": [
                "M2 U' M2 U2 M2 U' M2",
                "M2 U M2 U2 M2 U M2"
            ]
        },
        {
            "name": "Ja perm",
            "algs": [
                "y2 x R2 F R F' R U2 r' U r U2 x'",
                "L' U' L F L' U' L U L F' L2 U L",
                "y R' U L' U2 R U' R' U2 R L",
                "y2 R' U2 R U R' U2 L U' R U L'"
            ]
        },
        {
            "name": "Jb perm",
            "algs": [
                "R U R' F' R U R' U' R' F R2 U' R'",
                "R U2 R' U' R U2 L' U R' U' L",
                "r' F R F' r U2 R' U R U2 R'",
                "R U2 R' U' R U2 r' F R' F' r"
            ]
        },
        {
            "name": "Na perm",
            "algs": [
                "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
                "F' R U R' U' R' F R2 F U' R' U' R U F' R'",
                "R F U' R' U R U F' R2 F' R U R U' R' F",
                "r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r"
            ]
        },
        {
            "name": "Nb perm",
            "algs": [
                "r' D' F r U' r' F' D r2 U r' U' r' F r F'",
                "R' U R U' R' F' U' F R U R' F R' F' R U' R",
                "R' U L' U2 R U' L R' U L' U2 R U' L",
                "L' U' L U' L' U' L F L' U' L U L F' L2 U L U2 L' U L"
            ]
        },
        {
            "name": "Ra perm",
            "algs": [
                "y R U' R' U' R U R D R' U' R D' R' U2 R'",
                "y R U R' F' R U2 R' U2 R' F R U R U2 R'",
                "L U2 L' U2 L F' L' U' L U L F L2",
                "y2 R U' R2 D' R U R' D R U' R U' R' U R U R'"
            ]
        },
        {
            "name": "Rb perm",
            "algs": [
                "R' U2 R U2 R' F R U R' U' R' F' R2",
                "y R2 F R U R U' R' F' R U2 R' U2 R",
                "R' U2 R' D' R U' R' D R U R U' R' U' R",
                "y R' U R U R' U' R' D' R U R' D R U2 R"
            ]
        },
        {
            "name": "T perm",
            "algs": [
                "R U R' U' R' F R2 U' R' U' R U R' F'",
                "R U R' U' R' F R2 U' R' U F' L' U L",
                "F R U' R' U R U R2 F' R U R U' R'",
                "R2 u' R2 u R2 y R2 u R2 u' R2"
            ]
        },
        {
            "name": "Ua perm",
            "algs": [
                "M2 U M' U2 M U M2",
                "y2 M2 U M U2 M' U M2",
                "R U R' U R' U' R2 U' R' U R' U R",
                "y2 R U' R U R U R U' R' U' R2",
                "y R2 U' S' U2 S U' R2"
            ]
        },
        {
            "name": "Ub perm",
            "algs": [
                "M2 U' M' U2 M U' M2",
                "y2 M2 U' M U2 M' U' M2",
                "R2' U R U R' U' R3 U' R' U R'",
                "R' U R' U' R' U' R' U R U R2"
            ]
        },
        {
            "name": "V perm",
            "algs": [
                "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",
                "y R U' R U R' D R D' R U' D R2 U R2 D' R2",
                "R' U R' U' y R' F' R2 U' R' U R' F R F",
                "R' U R U' R' f' U' R U2 R' U' R U' R' f R"
            ]
        },
        {
            "name": "Y perm",
            "algs": [
                "F R U' R' U' R U R' F' R U R' U' R' F R F'",
                "F R' F R2 U' R' U' R U R' F' R U R' U' F'",
                "F R' F' R U R U' R2 U' R U R f' U' f",
                "U' B' R B R' U' R' U R2 U R' U' R' F R F'"
            ]
        },
        {
            "name": "Z perm",
            "algs": [
                "M' U' M2 U' M2 U' M' U2 M2",
                "M2 U M2 U M' U2 M2 U2 M'",
                "y M2 U' M2 U' M' U2 M2 U2 M'",
                "y M' U M2 U M2 U M' U2 M2"
            ]
        }
    ]
}