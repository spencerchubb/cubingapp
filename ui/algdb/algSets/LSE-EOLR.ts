export let algSet = {
    "puzzle": "3x3",
    "setup": "U' M2",
    "cases": [
        {
            "name": "Arrow (UF DF)",
            "setup": "M' U' M2",
            "algs": ["M"]
        },
        {
            "name": "Arrow (UB UR)",
            "algs": ["M' U' M'"]
        },
        {
            "name": "Arrow (UB UR)",
            "algs": ["M' U M"]
        },
        {
            "name": "Arrow (UB UR)",
            "algs": ["M' U M"]
        },
        {
            "name": "Arrow (UF UR)",
            "setup": "M' U' M2",
            "algs": ["U M' U2 M U M"]
        },
        {
            "name": "Arrow (UD UB)",
            "setup": "M' U' M2",
            "algs": ["U' M U' M' U' M"]
        },
        {
            "name": "1 / 1 (UF UR)",
            "algs": ["M' U M' U M U M"]
        },
        {
            "name": "1 / 1 (UF DF)",
            "algs": ["M U M' U M U M'", "U' M' U M' U2 M U M"]
        },
        {
            "name": "1 / 1 (UF DB)",
            "algs": ["M U' M' U' M U' M'", "M' U' M' U' M U M"]
        },
        {
            "name": "1 / 1 (UF UB)",
            "setup": "M' U' M2",
            "algs": ["M U' M' U2 M' U2 M' U M"]
        },
        {
            "name": "1 / 1 (UR UB)",
            "setup": "M' U' M2",
            "algs": ["M U' M' U' M'"]
        },
        {
            "name": "1 / 1 (UR UL)",
            "algs": ["U' M' U M' U2 M U M'"]
        },
        {
            "name": "1 / 1 (UR DF)",
            "setup": "M' U' M2",
            "algs": ["M' U' M' U' M'"]
        },
        {
            "name": "1 / 1 (UR DB)",
            "algs": ["M U M' U M U M"]
        },
        {
            "name": "1 / 1 (UB DF)",
            "setup": "M' U' M2",
            "algs": ["U M' U2 M U M U M' U M'"]
        },
        {
            "name": "1 / 1 (UB DB)",
            "setup": "M' U' M2",
            "algs": ["U' M' U M' U2 M'"]
        },
        {
            "name": "1 / 1 (DF DB)",
            "setup": "M' U' M2",
            "algs": ["M' U' M' U2 M' U2 M' U M"]
        },
        {
            "name": "2 Adj / 2 (UF UL)",
            "algs": ["U M' U2 M U M U M"]
        },
        {
            "name": "2 Adj / 2 (UF UR)",
            "setup": "M' U' M2",
            "algs": ["M' U' M U2 M U2 M' U M'"]
        },
        {
            "name": "2 Adj / 2 (UF UB)",
            "algs": ["U M' U' M' U' M' U' M"]
        },
        {
            "name": "2 Adj / 2 (UL UB)",
            "setup": "M' U' M2",
            "algs": ["U' M2 U M'"]
        },
        {
            "name": "2 Adj / 2 (UF DF)",
            "algs": ["U' M2 U M U M"]
        },
        {
            "name": "2 Adj / 2 (UL DF)",
            "setup": "M' U' M2",
            "algs": ["U2 M' U2 M' U M'"]
        },
        {
            "name": "2 Adj / 2 (DF DB)",
            "algs": ["U M' U' M' U' M' U' M'"]
        },
        {
            "name": "2 Adj / 0 (UF UL)",
            "setup": "M' U' M2",
            "algs": ["U M' U' M' U2 M"]
        },
        {
            "name": "2 Adj / 0 (UF UR)",
            "setup": "M' U' M2",
            "algs": ["M' U2 M' U' M' U' M U' M"]
        },
        {
            "name": "2 Adj / 0 (UF UB)",
            "setup": "M' U' M2",
            "algs": ["M' U M U M' U2 M U' M"]
        },
        {
            "name": "2 Adj / 0 (UL UB)",
            "setup": "M' U' M2",
            "algs": ["U M' U' M' U M U' M' U' M"]
        },
        {
            "name": "2 Adj / 0 (UF DF)",
            "algs": ["U2 M U M' U2 M U' M'"]
        },
        {
            "name": "2 Adj / 0 (UL DF)",
            "algs": ["M' U M' U2 M' U M"]
        },
        {
            "name": "2 Adj / 0 (DF DB)",
            "algs": ["M' U M' U2 M' U' M'"]
        },
        {
            "name": "2 Opp / 2 (UF UR)",
            "algs": ["M' U2 M' U2 M U M"]
        },
        {
            "name": "2 Opp / 2 (UR UL)",
            "setup": "M' U' M2",
            "algs": ["M2 U' M' U2 M' U2 M"]
        },
        {
            "name": "2 Opp / 2 (UF DF)",
            "algs": ["M2 U' M' U2 M' U2 M' U M'"]
        },
        {
            "name": "2 Opp / 2 (DF DB)",
            "setup": "M' U' M2",
            "algs": ["M' U2 M' U2 M'"]
        },
        {
            "name": "2 Opp / 2 (UR DF)",
            "setup": "M' U' M2",
            "algs": ["M' U2 M U M U2 M' U' M'"]
        },
        {
            "name": "2 Opp / 2 (UF UB)",
            "algs": ["M' U2 M' U2 M U' M U' M' U2 M"]
        },
        {
            "name": "2 Opp / 0 (UF UR)",
            "algs": ["M' U' M U M' U M'"]
        },
        {
            "name": "2 Opp / 0 (UF UB)",
            "algs": ["M' U' M U M' U' M'"]
        },
        {
            "name": "2 Opp / 0 (UF DF)",
            "algs": ["M U M' U' M U' M'"]
        },
        {
            "name": "2 Opp / 0 (UR DF)",
            "setup": "M' U' M2",
            "algs": ["M' U M U' M"]
        },
        {
            "name": "2 Opp / 0 (UR UL)",
            "setup": "M' U' M2",
            "algs": ["M' U' M' U' M' U2 M U' M'"]
        },
        {
            "name": "2 Opp / 0 (DF DB)",
            "algs": ["R U R' U' M' U R U' r'", "U S R' F R S' R' F' R"]
        },
        {
            "name": "0 / 2 (UF UR)",
            "setup": "M' U' M2",
            "algs": ["M' U' M' U M'"]
        },
        {
            "name": "0 / 2 (UL UR)",
            "setup": "M' U' M2",
            "algs": ["M' U' M U' M U2 M' U' M"]
        },
        {
            "name": "0 / 2 (UF DF)",
            "algs": ["U M' U' M' U M U M"]
        },
        {
            "name": "0 / 2 (DF DB)",
            "algs": ["M' U' M' U M U' M'"]
        },
        {
            "name": "All 6 (UF DF)",
            "setup": "M' U' M2",
            "algs": ["U' M U M' U' M U' M' U2 M"]
        },
        {
            "name": "All 6 (DF DB)",
            "algs": ["M' U' M' U' M U' M' U2 M' U' M"]
        }
    ]
}