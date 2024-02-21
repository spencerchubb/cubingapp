function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "3x3",
    "diagramType": "3D",
    "gray": [
        0, 1, 2, 3, 5, 6, 7, 8,
        9, 12, 15, 29, 32, 35, 36, 39, 42, 45, 48, 51,
    ],
    "pre": () => randElement(["F R U R' U' F' U", "F U R U' R' F' U2", "R U R' U' R' F R F' U'", "R' U' R' F R F' U R"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "subsets": ["Basic insert", "Split", "Connected", "Corner in slot", "Edge in slot", "Both in slot"],
    "cases": {
        "F2L 1": {
            "algs": {
                "U R U' R'": {
                    notes: ["Front Right"]
                },
                "F' L F L'": {
                    notes: ["Front Left"]
                },
                "U f R' f'": {
                    notes: ["Back Right"]
                },
                "U L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Basic insert"
        },
        "F2L 2": {
            "algs": {
                "F R' F' R": {
                    notes: ["Front Right"]
                },
                "U' L' U L": {
                    notes: ["Front Left"]
                },
                "U' R' U R": {
                    notes: ["Back Right"]
                },
                "U' f' L f": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Basic insert"
        },
        "F2L 3": {
            "algs": {
                "F' U' F": {
                    notes: ["Front Right"]
                },
                "L' U' L": {
                    notes: ["Front Left"]
                },
                "R' U' R": {
                    notes: ["Back Right"]
                },
                "f' L' f": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Basic insert",
        },
        "F2L 4": {
            "algs": {
                "R U R'": {
                    notes: ["Front Right"]
                },
                "F U F'": {
                    notes: ["Front Left"]
                },
                "f R f'": {
                    notes: ["Back Right"]
                },
                "L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Basic insert",
        },
        "F2L 5": {
            "algs": {
                "U' R U R' U2 R U' R'": {
                    notes: ["Front Right"]
                },
                "U2 F R U R' U2 F'": {
                    notes: ["Front Left"]
                },
                "U' R' F R U R' U' F' R": {
                    notes: ["Back Right"]
                },
                "U' L U L' U2 L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split",
        },
        "F2L 6": {
            "algs": {
                "U' r U' R' U R U r'": {
                    notes: ["Front Right"]
                },
                "F2 R U R' U' F2": {
                    notes: ["Front Left"]
                },
                "U R' U' R U R' U2 R": {
                    notes: ["Back Right"]
                },
                "U' l U' L' U L U l'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split",
        },
        "F2L 7": {
            "algs": {
                "U' R U2 R' U' R U2 R'": {
                    notes: ["Front Right"]
                },
                "F U R U2 R' U F'": {
                    notes: ["Front Left"]
                },
                "r U2 R2 U' R2 U' r'": {
                    notes: ["Back Right"]
                },
                "U' L U2 L' U2 L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split"
        },
        "F2L 8": {
            "algs": {
                "y' R' U2 R U R' U2 R y": {
                    notes: ["Front Right"]
                },
                "U L' U2 L U L' U2 L": {
                    notes: ["Front Left"]
                },
                "U R' U2 R U R' U2 R": {
                    notes: ["Back Right"]
                },
                "l' U2 L2 U L2 U l": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split"
        },
        "F2L 9": {
            "algs": {
                "U' R U' R' U F' U' F": {
                    notes: ["Front Right"]
                },
                "U L' U' L U' L' U' L": {
                    notes: ["Front Left"]
                },
                "U R' U' R U' R' U' R": {
                    notes: ["Back Right"]
                },
                "y' U L' U' L U' L' U' L y": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split"
        },
        "F2L 10": {
            "algs": {
                "U' R U R' U R U R'": {
                    notes: ["Front Right"]
                },
                "F U' R U R' U2 F'": {
                    notes: ["Front Left"]
                },
                "R2 U' F' U F R2": {
                    notes: ["Back Right"]
                },
                "U' L U L' U L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split"
        },
        "F2L 11": {
            "algs": {
                "U' R U2 R' U F' U' F": {
                    notes: ["Front Right"]
                },
                "L' U L U' L' U L U2 L' U L": {
                    notes: ["Front Left"]
                },
                "R' U R U' R' U R U2 R' U R": {
                    notes: ["Back Right"]
                },
                "U' L U2 L' U f' L' f": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 12": {
            "algs": {
                "R U' R' U R U' R' U2 R U' R'": {
                    notes: ["Front Right"]
                },
                "U L' U2 L U' F U F'": {
                    notes: ["Front Left"]
                },
                "U R' U2 R U' f R f'": {
                    notes: ["Back Right"]
                },
                "L U' L' U L U' L' U2 L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 13": {
            "algs": {
                "y' U R' U R U' R' U' R y": {
                    notes: ["Front Right"]
                },
                "U L' U L U' L' U' L": {
                    notes: ["Front Left"]
                },
                "U R' U R U' R' U' R": {
                    notes: ["Back Right"]
                },
                "y' U L' U L U' L' U' L y": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 14": {
            "algs": {
                "U' R U' R' U R U R'": {
                    notes: ["Front Right"]
                },
                "y U' L U' L' U L U L' y'": {
                    notes: ["Front Left"]
                },
                "y U' R U' R' U R U R' y'": {
                    notes: ["Back Right"]
                },
                "U' L U' L' U L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 15": {
            "algs": {
                "R U R' U2 R U' R' U R U' R'": {
                    notes: ["Front Right"]
                },
                "L' U L U2 F U F'": {
                    notes: ["Front Left"]
                },
                "R' U R U2 f R f'": {
                    notes: ["Back Right"]
                },
                "L U L' U2 L U' L' U L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 16": {
            "algs": {
                "R U' R' U2 F' U' F": {
                    notes: ["Front Right"]
                },
                "F U' R U' R' U2 F'": {
                    notes: ["Front Left"]
                },
                "R' U' R U2 R' U R U' R' U R": {
                    notes: ["Back Right"]
                },
                "L U' L' U2 f' L' f": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 17": {
            "algs": {
                "R U2 R' U' R U R'": {
                    notes: ["Front Right"]
                },
                "y R U2 R' U' R U R' y'": {
                    notes: ["Front Left"]
                },
                "R' U2 F R U R' U' F' R": {
                    notes: ["Back Right"]
                },
                "L U2 L' U' L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 18": {
            "algs": {
                "y' R' U2 R U R' U' R y": {
                    notes: ["Front Right"]
                },
                "L' U2 L U L' U' L": {
                    notes: ["Front Left"]
                },
                "R' U2 R U R' U' R": {
                    notes: ["Back Right"]
                },
                "L U2 F' L' U' L U F L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 19": {
            "algs": {
                "U R U2 R' U R U' R'": {
                    notes: ["Front Right"]
                },
                "y' U R U2 R' U R U' R' y": {
                    notes: ["Front Left"]
                },
                "U R' F' U2 F R U R' U' R": {
                    notes: ["Back Right"]
                },
                "U L U2 L' U L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split"
        },
        "F2L 20": {
            "algs": {
                "U' R U' R2 F R F' R U' R'": {
                    notes: ["Front Right"]
                },
                "U' L' U2 L U' L' U L": {
                    notes: ["Front Left"]
                },
                "U' R' U2 R U' R' U R": {
                    notes: ["Back Right"]
                },
                "y U' R' U2 R U' R' U R y'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split"
        },
        "F2L 21": {
            "algs": {
                "U R U R' U R U' R'": {
                    notes: ["Front Right"]
                },
                "F R U2 R' F'": {
                    notes: ["Front Left"]
                },
                "r' U r U2 r' U' r": {
                    notes: ["Back Right"]
                },
                "U2 L U L' U L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split"
        },
        "F2L 22": {
            "algs": {
                "r U' r' U2 r U r'": {
                    notes: ["Front Right"]
                },
                "L' U L U2 L' U' L": {
                    notes: ["Front Left"]
                },
                "R' U R U2 R' U' R": {
                    notes: ["Back Right"]
                },
                "l U' l' U2 l U l'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Split"
        },
        "F2L 23": {
            "algs": {
                "U R U' R' U' R U' R' U R U' R'": {
                    notes: ["Front Right"]
                },
                "F U' R U R' U R U2 R' F'": {
                    notes: ["Front Left"]
                },
                "U R' F R' F' R2 U' R' U R": {
                    notes: ["Back Right"]
                },
                "L U L' U2 L U L' U' L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 24": {
            "algs": {
                "U' R U R2 F R F' R U' R'": {
                    notes: ["Front Right"]
                },
                "U' L' U L U L' U L U' L' U L": {
                    notes: ["Front Left"]
                },
                "U' R' U R U R' U R U' R' U R": {
                    notes: ["Back Right"]
                },
                "U2 r U R' U R U2 B r'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Connected"
        },
        "F2L 25": {
            "algs": {
                "U' R' F R F' R U R'": {
                    notes: ["Front Right"]
                },
                "U' L' U L F' L F L'": {
                    notes: ["Front Left"]
                },
                "L' E' L U' L' E L": {
                    notes: ["Back Right"]
                },
                "y' U' L' U L F' L F L' y": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Corner in slot"
        },
        "F2L 26": {
            "algs": {
                "U R U' R' F R' F' R": {
                    notes: ["Front Right"]
                },
                "U L F' L' F L' U' L": {
                    notes: ["Front Left"]
                },
                "y U R U' R' F R' F' R y'": {
                    notes: ["Back Right"]
                },
                "R E R' U R E' R'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Corner in slot"
        },
        "F2L 27": {
            "algs": {
                "R U' R' U R U' R'": {
                    notes: ["Front Right"]
                },
                "L' U' L U F' L F L'": {
                    notes: ["Front Left"]
                },
                "R' U2 R' F R F' R": {
                    notes: ["Back Right"]
                },
                "L U' L' U L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Corner in slot"
        },
        "F2L 28": {
            "algs": {
                "R U R' U' F R' F' R": {
                    notes: ["Front Right"]
                },
                "L' U L U' L' U L": {
                    notes: ["Front Left"]
                },
                "R' U R U' R' U R": {
                    notes: ["Back Right"]
                },
                "L U2 L F' L' F L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Corner in slot"
        },
        "F2L 29": {
            "algs": {
                "R' F R F' U R U' R'": {
                    notes: ["Front Right"]
                },
                "L' U' L U L' U' L": {
                    notes: ["Front Left"]
                },
                "R' U' R U R' U' R": {
                    notes: ["Back Right"]
                },
                "U2 L U' L' f' L' f": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Corner in slot"
        },
        "F2L 30": {
            "algs": {
                "R U R' U' R U R'": {
                    notes: ["Front Right"]
                },
                "L F' L' F U' L' U L": {
                    notes: ["Front Left"]
                },
                "U2 R' U R f R f'": {
                    notes: ["Back Right"]
                },
                "L U L' U' L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Corner in slot"
        },
        "F2L 31": {
            "algs": {
                "U' R' F R F' R U' R'": {
                    notes: ["Front Right"]
                },
                "U L F' L' F L' U L": {
                    notes: ["Front Left"]
                },
                "R' U R' F R F' R": {
                    notes: ["Back Right"]
                },
                "L U' L F' L' F L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Edge in slot"
        },
        "F2L 32": {
            "algs": {
                "U R U' R' U R U' R' U R U' R'": {
                    notes: ["Front Right"]
                },
                "U2 F U' R U R' U F'": {
                    notes: ["Front Left"]
                },
                "U' R' U R U' R' U R U' R' U R": {
                    notes: ["Back Right"]
                },
                "U L U' L' U L U' L' U L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Edge in slot"
        },
        "F2L 33": {
            "algs": {
                "U' R U' R' U2 R U' R'": {
                    notes: ["Front Right"]
                },
                "U' L' U' L U2 L' U' L": {
                    notes: ["Front Left"]
                },
                "U' R' U' R U2 R' U' R": {
                    notes: ["Back Right"]
                },
                "U' L U' L' U2 L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Edge in slot"
        },
        "F2L 34": {
            "algs": {
                "U R U R' U2 R U R'": {
                    notes: ["Front Right"]
                },
                "U L' U L U2 L' U L": {
                    notes: ["Front Left"]
                },
                "U R' U R U R' U2 R": {
                    notes: ["Back Right"]
                },
                "U L U L' U2 L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Edge in slot"
        },
        "F2L 35": {
            "algs": {
                "U' R U R' U F' U' F": {
                    notes: ["Front Right"]
                },
                "U2 L F' L' F U2 L' U' L": {
                    notes: ["Front Left"]
                },
                "U' f R f' U R' U' R": {
                    notes: ["Back Right"]
                },
                "U2 L U L' U' L f' L f": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Edge in slot"
        },
        "F2L 36": {
            "algs": {
                "U F' U' F U' R U R'": {
                    notes: ["Front Right"]
                },
                "U2 L' U' L F' L F L'": {
                    notes: ["Front Left"]
                },
                "U2 R' U' R U f R' f'": {
                    notes: ["Back Right"]
                },
                "U f' L' f U' L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Edge in slot"
        },
        "F2L 37": {
            "algs": {
                "R2 U2 F R2 F' U2 R' U R'": {
                    notes: ["Front Right"]
                },
                "L2 U2 F' L2 F U2 L U' L": {
                    notes: ["Front Left"]
                },
                "R' U R r U2 R2 U' R2 U' r'": {
                    notes: ["Back Right"]
                },
                "L U' L' l' U2 L2 U L2 U l": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Both in slot"
        },
        "F2L 38": {
            "algs": {
                "R U' R' U' R U R' U2 R U' R'": {
                    notes: ["Front Right"]
                },
                "L' U L U' L' U2 L U' L' U L": {
                    notes: ["Front Left"]
                },
                "R' U R U' R' U2 R U' R' U R": {
                    notes: ["Back Right"]
                },
                "L U L' U' L U2 L' U' L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Both in slot"
        },
        "F2L 39": {
            "algs": {
                "R U' R' U R U2 R' U R U' R'": {
                    notes: ["Front Right"]
                },
                "L' U L U L' U' L U2 L' U L": {
                    notes: ["Front Left"]
                },
                "R' U' R U R' U2 R U R' U' R": {
                    notes: ["Back Right"]
                },
                "L U' L' U L U2 L' U L U' L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Both in slot"
        },
        "F2L 40": {
            "algs": {
                "r U' r' U2 r U r' R U R'": {
                    notes: ["Front Right"]
                },
                "L' U L l' U l U2 l' U' l": {
                    notes: ["Front Left"]
                },
                "R' U R r' U r U2 r' U' r": {
                    notes: ["Back Right"]
                },
                "l U' l' U2 l U l' L U L'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Both in slot"
        },
        "F2L 41": {
            "algs": {
                "R U' R' r U' r' U2 r U r'": {
                    notes: ["Front Right"]
                },
                "l' U l U2 l' U' l L' U' L": {
                    notes: ["Front Left"]
                },
                "r' U r U2 r' U' r R' U' R": {
                    notes: ["Back Right"]
                },
                "L U' L' l U' l' U2 l U l'": {
                    notes: ["Back Left"]
                }
            },
            "subset": "Both in slot"
        }
    }
}