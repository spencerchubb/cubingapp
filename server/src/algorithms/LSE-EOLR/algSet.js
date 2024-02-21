const setupNormal = "U M2 U";
const setupPseudo = "M' U M2 U";

export let algSet = {
    "puzzle": "3x3",
    "diagramType": "3D",
    "gray": [12, 14, 30, 32],
    "post": ["", "U", "U2", "U'"],
    "subsets": ['Arrow', '1 / 1', '2 Adj / 2', '2 Adj / 0', '2 Opp / 2', '2 Opp / 0', '0 / 2', 'All 6'],
    "cases": {
        "Arrow (UF DF)": {
            "algs": {
                "M": { setup: setupPseudo }
            },
            "subset": "Arrow"
        },
        "Arrow (UB UR)": {
            "algs": {
                "M' U M": { setup: setupNormal }
            },
            "subset": "Arrow"
        },
        "Arrow (UF UR)": {
            "algs": {
                "U M' U2 M U M": { setup: setupPseudo }
            },
            "subset": "Arrow"
        },
        "Arrow (UD UB)": {
            "algs": {
                "U' M U' M' U' M": { setup: setupPseudo }
            },
            "subset": "Arrow"
        },
        "1 / 1 (UF UR)": {
            "algs": {
                "M' U M' U M U M": { setup: setupNormal }
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UF DF)": {
            "algs": {
                "M U M' U M U M'": { setup: setupNormal },
                "U' M' U M' U2 M U M": {}
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UF DB)": {
            "algs": {
                "M U' M' U' M U' M'": { setup: setupNormal },
                "M' U' M' U' M U M": {}
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UF UB)": {
            "algs": {
                "M U' M' U2 M' U2 M' U M": { setup: setupPseudo }
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UR UB)": {
            "algs": {
                "M U' M' U' M'": { setup: setupPseudo }
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UR UL)": {
            "algs": {
                "U' M' U M' U2 M U M'": { setup: setupNormal }
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UR DF)": {
            "algs": {
                "M' U' M' U' M'": { setup: setupPseudo }
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UR DB)": {
            "algs": {
                "M U M' U M U M": { setup: setupNormal }
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UB DF)": {
            "algs": {
                "U M' U2 M U M U M' U M'": { setup: setupPseudo }
            },
            "subset": "1 / 1"
        },
        "1 / 1 (UB DB)": {
            "algs": {
                "U' M' U M' U2 M'": { setup: setupPseudo }
            },
            "subset": "1 / 1"
        },
        "1 / 1 (DF DB)": {
            "algs": {
                "M' U' M' U2 M' U2 M' U M": { setup: setupPseudo }
            },
            "subset": "1 / 1"
        },
        "2 Adj / 2 (UF UL)": {
            "algs": {
                "U M' U2 M U M U M": { setup: setupNormal }
            },
            "subset": "2 Adj / 2"
        },
        "2 Adj / 2 (UF UR)": {
            "algs": {
                "M' U' M U2 M U2 M' U M'": { setup: setupPseudo }
            },
            "subset": "2 Adj / 2"
        },
        "2 Adj / 2 (UF UB)": {
            "algs": {
                "U M' U' M' U' M' U' M": { setup: setupNormal }
            },
            "subset": "2 Adj / 2"
        },
        "2 Adj / 2 (UL UB)": {
            "algs": {
                "U' M2 U M'": { setup: setupPseudo }
            },
            "subset": "2 Adj / 2"
        },
        "2 Adj / 2 (UF DF)": {
            "algs": {
                "U' M2 U M U M": { setup: setupNormal }
            },
            "subset": "2 Adj / 2"
        },
        "2 Adj / 2 (UL DF)": {
            "algs": {
                "U2 M' U2 M' U M'": { setup: setupPseudo }
            },
            "subset": "2 Adj / 2"
        },
        "2 Adj / 2 (DF DB)": {
            "algs": {
                "U M' U' M' U' M' U' M'": { setup: setupNormal }
            },
            "subset": "2 Adj / 2"
        },
        "2 Adj / 0 (UF UL)": {
            "algs": {
                "U M' U' M' U2 M": { setup: setupPseudo }
            },
            "subset": "2 Adj / 0"
        },
        "2 Adj / 0 (UF UR)": {
            "algs": {
                "M' U2 M' U' M' U' M U' M": { setup: setupPseudo }
            },
            "subset": "2 Adj / 0"
        },
        "2 Adj / 0 (UF UB)": {
            "algs": {
                "M' U M U M' U2 M U' M": { setup: setupPseudo }
            },
            "subset": "2 Adj / 0"
        },
        "2 Adj / 0 (UL UB)": {
            "algs": {
                "U M' U' M' U M U' M' U' M": { setup: setupPseudo }
            },
            "subset": "2 Adj / 0"
        },
        "2 Adj / 0 (UF DF)": {
            "algs": {
                "U2 M U M' U2 M U' M'": { setup: setupNormal }
            },
            "subset": "2 Adj / 0"
        },
        "2 Adj / 0 (UL DF)": {
            "algs": {
                "M' U M' U2 M' U M": { setup: setupNormal }
            },
            "subset": "2 Adj / 0"
        },
        "2 Adj / 0 (DF DB)": {
            "algs": {
                "M' U M' U2 M' U' M'": { setup: setupNormal }
            },
            "subset": "2 Adj / 0"
        },
        "2 Opp / 2 (UF UR)": {
            "algs": {
                "M' U2 M' U2 M U M": { setup: setupNormal }
            },
            "subset": "2 Opp / 2"
        },
        "2 Opp / 2 (UR UL)": {
            "algs": {
                "M2 U' M' U2 M' U2 M": { setup: setupPseudo }
            },
            "subset": "2 Opp / 2"
        },
        "2 Opp / 2 (UF DF)": {
            "algs": {
                "M2 U' M' U2 M' U2 M' U M'": { setup: setupNormal }
            },
            "subset": "2 Opp / 2"
        },
        "2 Opp / 2 (DF DB)": {
            "algs": {
                "M' U2 M' U2 M'": { setup: setupPseudo }
            },
            "subset": "2 Opp / 2"
        },
        "2 Opp / 2 (UR DF)": {
            "algs": {
                "M' U2 M U M U2 M' U' M'": { setup: setupPseudo }
            },
            "subset": "2 Opp / 2"
        },
        "2 Opp / 2 (UF UB)": {
            "algs": {
                "M' U2 M' U2 M U' M U' M' U2 M": { setup: setupNormal }
            },
            "subset": "2 Opp / 2"
        },
        "2 Opp / 0 (UF UR)": {
            "algs": {
                "M' U' M U M' U M'": { setup: setupNormal }
            },
            "subset": "2 Opp / 0"
        },
        "2 Opp / 0 (UF UB)": {
            "algs": {
                "M' U' M U M' U' M'": { setup: setupNormal }
            },
            "subset": "2 Opp / 0"
        },
        "2 Opp / 0 (UF DF)": {
            "algs": {
                "M U M' U' M U' M'": { setup: setupNormal }
            },
            "subset": "2 Opp / 0"
        },
        "2 Opp / 0 (UR DF)": {
            "algs": {
                "M' U M U' M": { setup: setupPseudo }
            },
            "subset": "2 Opp / 0"
        },
        "2 Opp / 0 (UR UL)": {
            "algs": {
                "M' U' M' U' M' U2 M U' M'": { setup: setupPseudo }
            },
            "subset": "2 Opp / 0"
        },
        "2 Opp / 0 (DF DB)": {
            "algs": {
                "R U R' U' M' U R U' r'": { setup: setupNormal },
                "U S R' F R S' R' F' R": {}
            },
            "subset": "2 Opp / 0"
        },
        "0 / 2 (UF UR)": {
            "algs": {
                "M' U' M' U M'": { setup: setupPseudo }
            },
            "subset": "0 / 2"
        },
        "0 / 2 (UL UR)": {
            "algs": {
                "M' U' M U' M U2 M' U' M": { setup: setupPseudo }
            },
            "subset": "0 / 2"
        },
        "0 / 2 (UF DF)": {
            "algs": {
                "U M' U' M' U M U M": { setup: setupNormal }
            },
            "subset": "0 / 2"
        },
        "0 / 2 (DF DB)": {
            "algs": {
                "M' U' M' U M U' M'": { setup: setupNormal }
            },
            "subset": "0 / 2"
        },
        "All 6 (UF DF)": {
            "algs": {
                "U' M U M' U' M U' M' U2 M": { setup: setupPseudo }
            },
            "subset": "All 6"
        },
        "All 6 (DF DB)": {
            "algs": {
                "M' U' M' U' M U' M' U2 M' U' M": { setup: setupNormal }
            },
            "subset": "All 6"
        }
    }
}