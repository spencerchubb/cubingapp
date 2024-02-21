function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "3x3",
    "diagramType": "3D",
    "gray": [9, 12, 15, 29, 32, 35, 36, 39, 42, 45, 48, 51],
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "cases": {
        "WV 1": {
            "algs": {
                "U' L' U2 R U' R' U2 L": {}
            }
        },
        "WV 2": {
            "algs": {
                "U R U' R'": {}
            }
        },
        "WV 3": {
            "algs": {
                "R' F R U R U' R' F'": {}
            }
        },
        "WV 4": {
            "algs": {
                "U R2 D R' U' R D' R2": {}
            }
        },
        "WV 5": {
            "algs": {
                "U R U' R' U R' U' R U' R' U2 R": {}
            }
        },
        "WV 6": {
            "algs": {
                "U' R' D' R U2 R' D R2 U' R'": {}
            }
        },
        "WV 7": {
            "algs": {
                "U R U R' U' R U' R'": {}
            }
        },
        "WV 8": {
            "algs": {
                "U2 R U' R' U R U2 R'": {}
            }
        },
        "WV 9": {
            "algs": {
                "U2 F' R U2 R' U2 R' F R": {}
            }
        },
        "WV 10": {
            "algs": {
                "R' U2 R U R' U R2 U2 R'": {}
            }
        },
        "WV 11": {
            "algs": {
                "U2 R' U' R2 U' R2 U2 R": {}
            }
        },
        "WV 12": {
            "algs": {
                "R' F2 R F2 U L' U L": {}
            }
        },
        "WV 13": {
            "algs": {
                "U2 R U2 R2 U' R U' R' U2 R": {}
            }
        },
        "WV 14": {
            "algs": {
                "U2 R2 D R' U2 R D' R2": {}
            }
        },
        "WV 15": {
            "algs": {
                "L' U R U' R' L": {}
            }
        },
        "WV 16": {
            "algs": {
                "U R' D' R U R' D R2 U2 R'": {}
            }
        },
        "WV 17": {
            "algs": {
                "R' F' R U2 R U2 R' F": {}
            }
        },
        "WV 18": {
            "algs": {
                "U2 R U2 R'": {}
            }
        },
        "WV 19": {
            "algs": {
                "R' F2 R2 U' R' U' R U R' F2": {}
            }
        },
        "WV 20": {
            "algs": {
                "U R U' R' U' R U R' U R U2 R'": {}
            }
        },
        "WV 21": {
            "algs": {
                "U R U' R2 U2 R U R' U R": {}
            }
        },
        "WV 22": {
            "algs": {
                "U R2 D R' U R D' R' U2 R'": {}
            }
        },
        "WV 23": {
            "algs": {
                "R2 U R' U R' U' R U R U2 R2": {}
            }
        },
        "WV 24": {
            "algs": {
                "U2 R U' R' U R U' R' U R U2 R'": {}
            }
        },
        "WV 25": {
            "algs": {
                "U2 R U2 R2 U2 R U R' U R": {}
            }
        },
        "WV 26": {
            "algs": {
                "U R U' R2 U' R U' R' U2 R": {}
            }
        },
        "WV 27": {
            "algs": {
                "U R U R' U' R U R' U' R U' R'": {}
            }
        }
    }
}