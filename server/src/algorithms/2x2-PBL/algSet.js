function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "2x2",
    "diagramType": "3D",
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "cases": {
        "Adj": {
            "algs": {
                "R U R' F' R U R' U' R' F R2 U' R' U'": {},
                "U R' F R F' R U2 R' U R U2 R'": {}
            }
        },
        "Opp": {
            "algs": {
                "R U' R' U' F2 U' R U R' U F2": {},
                "F R U' R' U' R U R' F' R U R' U' R' F R F'": {}
            }
        },
        "Opp Opp": {
            "algs": {
                "R2 F2 R2": {},
                "R2 B2 R2": {}
            }
        },
        "Adj Adj": {
            "algs": {
                "R2 U' R2 U2 F2 U' R2": {},
                "R2 U' B2 U2 R2 U' R2'": {}
            }
        },
        "Adj Opp": {
            "algs": {
                "U2 R' U R' F2 R F' R": {},
                "R' F R' F2 R U' R": {}
            }
        },
        "Opp Adj": {
            "algs": {
                "R2 U R2 U' R2 U R2 U' R2": {},
                "R' D R' F2 R D' R": {}
            }
        }
    }
}