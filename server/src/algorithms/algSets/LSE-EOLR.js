function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function preNormal() {
    let mSlice = ["M' U2 M U2", "M U2 M' U2", "M' U2 M2 U2 M'"];
    let setup = ["U M2 U", "U M2 U'", "U' M2 U", "U' M2 U'", "U M2 U2", "U' M2 U2"];
    return `${randElement(mSlice)} ${randElement(setup)}`;
}

function prePseudo() {
    let mSlice = ["M' U2 M U2 M'", "M U2 M' U2 M", "M' U2 M2 U2"];
    let setup = ["U M2 U", "U M2 U'", "U' M2 U", "U' M2 U'", "U M2 U2", "U' M2 U2"];
    return `${randElement(mSlice)} ${randElement(setup)}`;
}

export let algSet = {
    "puzzle": "3x3",
    "pre": preNormal,
    "post": ["", "U", "U2", "U'"],
    "cases": [
        {
            "name": "Arrow (UF DF)",
            "subsets": ["Arrow"],
            "pre": prePseudo,
            "algs": ["M"]
        },
        {
            "name": "Arrow (UB UR)",
            "subsets": ["Arrow"],
            "algs": ["M' U' M'"]
        },
        {
            "name": "Arrow (UB UR)",
            "subsets": ["Arrow"],
            "algs": ["M' U M"]
        },
        {
            "name": "Arrow (UB UR)",
            "subsets": ["Arrow"],
            "algs": ["M' U M"]
        },
        {
            "name": "Arrow (UF UR)",
            "subsets": ["Arrow"],
            "pre": prePseudo,
            "algs": ["U M' U2 M U M"]
        },
        {
            "name": "Arrow (UD UB)",
            "subsets": ["Arrow"],
            "pre": prePseudo,
            "algs": ["U' M U' M' U' M"]
        },
        {
            "name": "1 / 1 (UF UR)",
            "subsets": ["1 / 1"],
            "algs": ["M' U M' U M U M"]
        },
        {
            "name": "1 / 1 (UF DF)",
            "subsets": ["1 / 1"],
            "algs": ["M U M' U M U M'", "U' M' U M' U2 M U M"]
        },
        {
            "name": "1 / 1 (UF DB)",
            "subsets": ["1 / 1"],
            "algs": ["M U' M' U' M U' M'", "M' U' M' U' M U M"]
        },
        {
            "name": "1 / 1 (UF UB)",
            "subsets": ["1 / 1"],
            "pre": prePseudo,
            "algs": ["M U' M' U2 M' U2 M' U M"]
        },
        {
            "name": "1 / 1 (UR UB)",
            "subsets": ["1 / 1"],
            "pre": prePseudo,
            "algs": ["M U' M' U' M'"]
        },
        {
            "name": "1 / 1 (UR UL)",
            "subsets": ["1 / 1"],
            "algs": ["U' M' U M' U2 M U M'"]
        },
        {
            "name": "1 / 1 (UR DF)",
            "subsets": ["1 / 1"],
            "pre": prePseudo,
            "algs": ["M' U' M' U' M'"]
        },
        {
            "name": "1 / 1 (UR DB)",
            "subsets": ["1 / 1"],
            "algs": ["M U M' U M U M"]
        },
        {
            "name": "1 / 1 (UB DF)",
            "subsets": ["1 / 1"],
            "pre": prePseudo,
            "algs": ["U M' U2 M U M U M' U M'"]
        },
        {
            "name": "1 / 1 (UB DB)",
            "subsets": ["1 / 1"],
            "pre": prePseudo,
            "algs": ["U' M' U M' U2 M'"]
        },
        {
            "name": "1 / 1 (DF DB)",
            "subsets": ["1 / 1"],
            "pre": prePseudo,
            "algs": ["M' U' M' U2 M' U2 M' U M"]
        },
        {
            "name": "2 Adj / 2 (UF UL)",
            "subsets": ["2 Adj / 2"],
            "algs": ["U M' U2 M U M U M"]
        },
        {
            "name": "2 Adj / 2 (UF UR)",
            "subsets": ["2 Adj / 2"],
            "pre": prePseudo,
            "algs": ["M' U' M U2 M U2 M' U M'"]
        },
        {
            "name": "2 Adj / 2 (UF UB)",
            "subsets": ["2 Adj / 2"],
            "algs": ["U M' U' M' U' M' U' M"]
        },
        {
            "name": "2 Adj / 2 (UL UB)",
            "subsets": ["2 Adj / 2"],
            "pre": prePseudo,
            "algs": ["U' M2 U M'"]
        },
        {
            "name": "2 Adj / 2 (UF DF)",
            "subsets": ["2 Adj / 2"],
            "algs": ["U' M2 U M U M"]
        },
        {
            "name": "2 Adj / 2 (UL DF)",
            "subsets": ["2 Adj / 2"],
            "pre": prePseudo,
            "algs": ["U2 M' U2 M' U M'"]
        },
        {
            "name": "2 Adj / 2 (DF DB)",
            "subsets": ["2 Adj / 2"],
            "algs": ["U M' U' M' U' M' U' M'"]
        },
        {
            "name": "2 Adj / 0 (UF UL)",
            "subsets": ["2 Adj / 0"],
            "pre": prePseudo,
            "algs": ["U M' U' M' U2 M"]
        },
        {
            "name": "2 Adj / 0 (UF UR)",
            "subsets": ["2 Adj / 0"],
            "pre": prePseudo,
            "algs": ["M' U2 M' U' M' U' M U' M"]
        },
        {
            "name": "2 Adj / 0 (UF UB)",
            "subsets": ["2 Adj / 0"],
            "pre": prePseudo,
            "algs": ["M' U M U M' U2 M U' M"]
        },
        {
            "name": "2 Adj / 0 (UL UB)",
            "subsets": ["2 Adj / 0"],
            "pre": prePseudo,
            "algs": ["U M' U' M' U M U' M' U' M"]
        },
        {
            "name": "2 Adj / 0 (UF DF)",
            "subsets": ["2 Adj / 0"],
            "algs": ["U2 M U M' U2 M U' M'"]
        },
        {
            "name": "2 Adj / 0 (UL DF)",
            "subsets": ["2 Adj / 0"],
            "algs": ["M' U M' U2 M' U M"]
        },
        {
            "name": "2 Adj / 0 (DF DB)",
            "subsets": ["2 Adj / 0"],
            "algs": ["M' U M' U2 M' U' M'"]
        },
        {
            "name": "2 Opp / 2 (UF UR)",
            "subsets": ["2 Opp / 2"],
            "algs": ["M' U2 M' U2 M U M"]
        },
        {
            "name": "2 Opp / 2 (UR UL)",
            "subsets": ["2 Opp / 2"],
            "pre": prePseudo,
            "algs": ["M2 U' M' U2 M' U2 M"]
        },
        {
            "name": "2 Opp / 2 (UF DF)",
            "subsets": ["2 Opp / 2"],
            "algs": ["M2 U' M' U2 M' U2 M' U M'"]
        },
        {
            "name": "2 Opp / 2 (DF DB)",
            "subsets": ["2 Opp / 2"],
            "pre": prePseudo,
            "algs": ["M' U2 M' U2 M'"]
        },
        {
            "name": "2 Opp / 2 (UR DF)",
            "subsets": ["2 Opp / 2"],
            "pre": prePseudo,
            "algs": ["M' U2 M U M U2 M' U' M'"]
        },
        {
            "name": "2 Opp / 2 (UF UB)",
            "subsets": ["2 Opp / 2"],
            "algs": ["M' U2 M' U2 M U' M U' M' U2 M"]
        },
        {
            "name": "2 Opp / 0 (UF UR)",
            "subsets": ["2 Opp / 0"],
            "algs": ["M' U' M U M' U M'"]
        },
        {
            "name": "2 Opp / 0 (UF UB)",
            "subsets": ["2 Opp / 0"],
            "algs": ["M' U' M U M' U' M'"]
        },
        {
            "name": "2 Opp / 0 (UF DF)",
            "subsets": ["2 Opp / 0"],
            "algs": ["M U M' U' M U' M'"]
        },
        {
            "name": "2 Opp / 0 (UR DF)",
            "subsets": ["2 Opp / 0"],
            "pre": prePseudo,
            "algs": ["M' U M U' M"]
        },
        {
            "name": "2 Opp / 0 (UR UL)",
            "subsets": ["2 Opp / 0"],
            "pre": prePseudo,
            "algs": ["M' U' M' U' M' U2 M U' M'"]
        },
        {
            "name": "2 Opp / 0 (DF DB)",
            "subsets": ["2 Opp / 0"],
            "algs": ["R U R' U' M' U R U' r'", "U S R' F R S' R' F' R"]
        },
        {
            "name": "0 / 2 (UF UR)",
            "subsets": ["0 / 2"],
            "pre": prePseudo,
            "algs": ["M' U' M' U M'"]
        },
        {
            "name": "0 / 2 (UL UR)",
            "subsets": ["0 / 2"],
            "pre": prePseudo,
            "algs": ["M' U' M U' M U2 M' U' M"]
        },
        {
            "name": "0 / 2 (UF DF)",
            "subsets": ["0 / 2"],
            "algs": ["U M' U' M' U M U M"]
        },
        {
            "name": "0 / 2 (DF DB)",
            "subsets": ["0 / 2"],
            "algs": ["M' U' M' U M U' M'"]
        },
        {
            "name": "All 6 (UF DF)",
            "subsets": ["All 6"],
            "pre": prePseudo,
            "algs": ["U' M U M' U' M U' M' U2 M"]
        },
        {
            "name": "All 6 (DF DB)",
            "subsets": ["All 6"],
            "algs": ["M' U' M' U' M U' M' U2 M' U' M"]
        }
    ]
}