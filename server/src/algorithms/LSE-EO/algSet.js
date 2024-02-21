function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "3x3",
    "diagramType": "3D",
    "gray": [12, 14, 30, 32, 39, 48],
    "pre": () => {
        const segments = ["M2 U", "M2 U'", "M2 U2", "M' U2 M U", "M' U2 M' U'"];
        let alg = randElement(segments);
        for (let i = 0; i < 5; i++) alg += ` ${randElement(segments)}`;
        return alg;
    },
    "post": ["", "U", "U2", "U'"],
    "cases": {
        "Front Arrow": {
            "algs": {
                "M' U M": {}
            }
        },
        "Back Arrow": {
            "algs": {
                "M U M'": {}
            }
        },
        "Front 1 / 1": {
            "algs": {
                "M U' M' U' M U' M'": {},
                "M U M' U M U M'": {}
            }
        },
        "Back 1 / 1": {
            "algs": {
                "M' U' M U' M' U' M'": {},
                "M' U M U M' U M": {}
            }
        },
        "2 Adj / 2": {
            "algs": {
                "M2 U' M' U' M'": {}
            }
        },
        "2 Adj / 0": {
            "algs": {
                "M' U' M' U2 M' U' M'": {}
            }
        },
        "2 Opp / 2": {
            "algs": {
                "M' U2 M' U2 M U' M'": {}
            }
        },
        "2 Opp / 0": {
            "algs": {
                "M' U' M U M' U' M'": {}
            }
        },
        "0 / 2": {
            "algs": {
                "M' U' M' U M U' M'": {}
            }
        },
        "4 / 0": {
            "algs": {
                "M' U2 M' U2 M' U' M'": {},
                "M' U2 M' U2 M' U M'": {}
            }
        },
        "All 6": {
            "algs": {
                "M' U' M' U2 M' U' M U' M' U' M'": {}
            }
        }
    }
}