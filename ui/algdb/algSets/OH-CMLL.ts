import { STICKERS as S } from "../../src/lib/scripts/rubiks-viz/pieces";

export let algSet = {
    "puzzle": "3x3",
    "gray": [
        S.UB, S.UL, S.UR, S.UF,
        S.LU, S.RU,
        S.FU, S.F, S.FD,
        S.DF, S.DB,
        S.BD, S.B, S.BU,
    ],
    "cases": [
        {
            "name": "O Adjacent",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "R U' F U' R' U' R U F' U2' R'",
                        "R U R' F' R U R' U' R' F R2 U' R'",
                        "R U2 R' U' R U2 L' U R' U' L ",
                        "R' U2' R U R' U2' L U' R U L'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "r' U2' R U R' U' U' z U R' D R u' z'"
                    ]
                }
            ]
        },
        {
            "name": "O Diagonal",
            "algs": [
                "R' U R U' R' f' U' R U2 R' U' R U' R' f R",
                "F R U' R' U' R U R' F' R U R' U' R' F R F'",
                "R U2' R' U2 F' R U' R' F R' F' R F",
                "x U' R' U R U' x' R U R' F U2' R U2 R'",
                "R' U R U' x' U R U2 R' U' R U' R' U2 R U R' U' x"
            ]
        },
        {
            "name": "H Columns",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "U R' U' R U' R' U R U' R' U2 R",
                        "R' U2' R U R' U' R U R' U R",
                        "U R U R' U R U' R' U R U2' R'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "r' U2' R U' R' U' R U R' U r"
                    ]
                }
            ]
        },
        {
            "name": "H Rows",
            "algs": [
                "F R U R' U' R U R' U' R U R' U' F'"
            ]
        },
        {
            "name": "H Column",
            "algs": [
                "U' F R U R' U' R U' R' U R U R' F'",
                "U F R U' R' U R U2 R' U' R U R' U' F'"
            ]
        },
        {
            "name": "H Row",
            "algs": [
                "U' R U R' U R U r' F R' F' r",
                "U' R' U' R U' R' U' z U R' D R U' z'",
                "U' R U R' U R U L' U R' U' L",
                "U' R' U' R U' R' U' z U z' U' R U L'"
            ]
        },
        {
            "name": "Pi Right Bar",
            "algs": [
                "F R U R' U' R U R' U' F'",
                "U2 F U R U' R' U R U' R' F'",
                "R U2 R2 U' R2 U' R2 U2 R"
            ]
        },
        {
            "name": "Pi Backslash",
            "algs": [
                "R' U2' R U R' U' R U2 R f' U' f",
                "U F R' F' R U2 R U' R' U R U2 R'",
                "U F U R U' R2 F' R U2 R U2 R'"
            ]
        },
        {
            "name": "Pi X",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "U' F R U' R' U' R U R' U R U' R' F'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "U F U R U' R' U R U2' R' U' R U R' F'"
                    ]
                }
            ]
        },
        {
            "name": "Pi Forward Slash",
            "algs": [
                "R U2 R' U' R U R' U2 R' F R F'",
                "R U2 R' U2 R' F R2 U R' U' F'"
            ]
        },
        {
            "name": "Pi Columns",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "U2 R' F R F' r U' R' U' R U' r'",
                        "U2 R' F R F' r U' r' U' R U' R'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "U2 r' F R F' r U' R' U' R U' R'"
                    ]
                }
            ]
        },
        {
            "name": "Pi Left Bar",
            "algs": [
                "U2 R' U' R U' R' U F' U F R",
                "U' R' U' R' F R F' R U' R' U2' R"
            ]
        },
        {
            "name": "U Forward Slash",
            "algs": [
                "R' U2' R U2 F U' R' U R U F'",
                "r U' r' U' r U' r' U' F' U2 F"
            ]
        },
        {
            "name": "U Backslash",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "R' U R U2 R U2 R' U' R U' f' U' f",
                        "R2 D' R U2 R' D R U2 R",
                        "r2 D' R U2 R' D R U2 R",
                        "x l2 x D' R U2 R' D R U2 R"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "z U R2' U' R2 F' R U R' U' R' F z'"
                    ]
                }
            ]
        },
        {
            "name": "U Front Row",
            "algs": [
                "R' U' R U' R' U2' R2 U R' U R U2' R'",
                "U' R' U' R U R' U R U2' R' U R U2' R' U' R"
            ]
        },
        {
            "name": "U Rows",
            "algs": [
                "U2 F R U R' U' R' U R U' F' U R' U' R",
                "U R' U R U' F U R' U' R U R U' R' F'"
            ]
        },
        {
            "name": "U X",
            "algs": [
                "R' U2 R U F U' R' U2 R U F'",
                "F R U' R' U R U R' U R U' R' F'"
            ]
        },
        {
            "name": "U Back Row",
            "algs": [
                "U' F R U R' U' F'",
                "U F U R U' R' F'"
            ]
        },
        {
            "name": "T Left Bar",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "U' R U R' U' R' F R F'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "U' r U R' U' r' F R F'"
                    ]
                }
            ]
        },
        {
            "name": "T Right Bar",
            "algs": [
                "U' F R U' R' U R U R' F'",
                "U' R' U' R U R f' U' f"
            ]
        },
        {
            "name": "T Rows",
            "algs": [
                "R U2 R' U' R U' R2 U2 R U R' U R",
                "U2 R' U2 R U R' U R2 U2 R' U' R U' R'",
                "U2 R U' R' U2' R U R' U2' R U R' U R U' R'"
            ]
        },
        {
            "name": "T Front Row",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "r' U r U2 R2 F R F' R",
                        "R' U R U2 R' L' U R U' r x'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "R' U r U2 R2 F R F' r"
                    ]
                }
            ]
        },
        {
            "name": "T Back Row",
            "algs": [
                "U2 F R U R' U' R U' R' U' R U R' F'"
            ]
        },
        {
            "name": "T Columns",
            "algs": [
                "R' U' R U' R' U R U' R' U F' U F R",
                "U2 R' F' U' F U' R U R' U' R U R' U R"
            ]
        },
        {
            "name": "Sune Left Bar",
            "algs": [
                "U R U R' U R U2 R'",
                "R' U2 R U R' U R"
            ]
        },
        {
            "name": "Sune X",
            "algs": [
                "U' R' U2' R U2 R f' U' f",
                "U F U R U2' R' U' R U R' F'"
            ]
        },
        {
            "name": "Sune Forward Slash",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "U F R' F' R U2 R U2 R'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "U M' F R' F' r U2 R U2 R'"
                    ]
                }
            ]
        },
        {
            "name": "Sune Columns",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "U2 R' U' R U' R' U2 F R F' r U r'",
                        "F U' R' U R U F' U2 R f' U' f"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "U R U R' U' R' F R F' R U R' U R U2' R'"
                    ]
                }
            ]
        },
        {
            "name": "Sune Right Bar",
            "algs": [
                "U' R U R' U R' F R F' R U2 R'"
            ]
        },
        {
            "name": "Sune Backslash",
            "algs": [
                "U r U' r' F R' F' R",
                "U R U' r' F R' F' r"
            ]
        },
        {
            "name": "Anti Sune Right Bar",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "U R' U' R U' R' U2 R",
                        "U2 R U2 R' U' R U' R'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "U r' U' R U' R' U2 r"
                    ]
                }
            ]
        },
        {
            "name": "Anti Sune Columns",
            "algs": [
                "r U' r' F R' F' U2' R U R' U R"
            ]
        },
        {
            "name": "Anti Sune Backslash",
            "algs": [
                "U2 F R U' R' U R U2 R' U' F'",
                "U' F' r U r' U2 r' F2 r"
            ]
        },
        {
            "name": "Anti Sune X",
            "algs": [
                "U' R U2 R' U2 R' F R F'"
            ]
        },
        {
            "name": "Anti Sune Forward Slash",
            "algs": [
                "U' R' F R F' r U r'",
                "U' r' F R F' r U R'",
                "U R' U z U R' D R U'"
            ]
        },
        {
            "name": "Anti Sune Left Bar",
            "algs": [
                "R' U' R U' R' U R' F R F' U R",
                "U R U2 R' F R' F' R U' R U' R'"
            ]
        },
        {
            "name": "L Best",
            "algs": [
                "F R U' R' U' R U R' F'"
            ]
        },
        {
            "name": "L Good",
            "algs": [
                "F R' F' R U R U' R'"
            ]
        },
        {
            "name": "L Pure",
            "algs": [
                "U R' U' R U' R' U R U' R' U R U' R' U2' R",
                "U2 R U R' U R U' R' U R U' R' U R U2 R'"
            ]
        },
        {
            "name": "L Front Commutator",
            "algs": [
                "U F U' R' U' R U F' U2' R' U2 R",
                "R' U' R U' R' U2' R2 U R' U' R' F R F'"
            ]
        },
        {
            "name": "L Diagonal",
            "variants": [
                {
                    "name": "Main",
                    "algs": [
                        "U2 R' U' R U' F U' R' U' R U F'",
                        "R U2 R2 F R F' R U2' R'"
                    ]
                },
                {
                    "name": "Influence EO",
                    "algs": [
                        "R U2 r2 F R F' R U2' R'"
                    ]
                }
            ]
        },
        {
            "name": "L Back Commutator",
            "algs": [
                "U R' U' R U' R U R' U R U2 f' U' f",
                "U' R' U2 R' D' R U2 R' D R2",
                "U' R' U2 R' D' R U2 R' D r2"
            ]
        }
    ]
}