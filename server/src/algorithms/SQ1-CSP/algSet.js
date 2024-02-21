function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "SQ1",
    "pre": () => randElement([
        "1,0 / 3,3 / 6,-3 / -1,0",
        "0,-1 / -3,3 / 3,6 / 0,1",
        "1,0 / -,3 / 3,6 / -1,0",
        "0,-1 / -3,6 / 3,-3 / 0,1"
    ]),
    "post": () => randElement(["0,0", "6,0", "0,6", "6,6"]),
    "cases": {
        "Left 4-2 / Paired Edges (Odd)": {
            "algs": {
                "0,-2 / -2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Left 4-2 / Paired Edges (Even)": {
            "algs": {
                "-2,-4 / 2,-2 / 0,-1 / 3,3 /": {}
            }
        },
        "Right 4-2 / Paired Edges (Odd)": {
            "algs": {
                "2,-4 / -2,2 / 0,1 / 3,3 /": {}
            }
        },
        "Right 4-2 / Paired Edges (Even)": {
            "algs": {
                "0,6 / 2,0 / -2,-1 / 3,3 /": {}
            }
        },
        "4-1-1 / Paired Edges (Odd)": {
            "algs": {
                "0,-2 / -4,0 / -1,4 / -3,0 /": {}
            }
        },
        "4-1-1 / Paired Edges (Even)": {
            "algs": {
                "2,2 / 0,4 / 4,-1 / -3,0 / -1,1": {}
            }
        },
        "3-3 / Paired Edges (Odd)": {
            "algs": {
                "-1,4 / 0,2 / -3,0 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "3-3 / Paired Edges (Even)": {
            "algs": {
                "-1,0 / 0,-2 / 3,0 / 2,1 / 0,3 /": {}
            }
        },
        "3-1-2 / Paired Edges (Odd)": {
            "algs": {
                "0,-2 / 0,-5 / 3,-2 / -2,-1 / 0,-3 / -1,1": {},
                "3,0 / 0,-4 / 0,-2 / 4,-1 / -3,0 / -1,1": {}
            }
        },
        "3-1-2 / Paired Edges (Even)": {
            "algs": {
                "-3,2 / 2,0 / 0,-2 / 0,1 / 0,3 /": {}
            }
        },
        "3-2-1 / Paired Edges (Odd)": {
            "algs": {
                "3,0 / 5,0 / -3,2 / -2,-1 / 0,-3 / -1,1": {},
                "/ 4,0 / 0,2 / 4,-1 / 0,-3 / -1,1": {}
            }
        },
        "3-2-1 / Paired Edges (Even)": {
            "algs": {
                "0,2 / -2,0 / 0,2 / 0,-1 / 0,-3 / -1,1": {}
            }
        },
        "Scallop / Shield (Odd)": {
            "algs": {
                "4,-4 / 0,-2 / 2,0 / -2,-1 / 3,3 /": {}
            }
        },
        "Scallop / Shield (Even)": {
            "algs": {
                "2,0 / 0,2 / -2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Scallop / Left Fist (Odd)": {
            "algs": {
                "-2,-2 / 2,-3 / -2,3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Scallop / Left Fist (Even)": {
            "algs": {
                "-4,0 / 0,3 / 2,-3 / -1,-2 / -3,0 /": {}
            }
        },
        "Scallop / Right Fist (Odd)": {
            "algs": {
                "2,2 / 3,-2 / 2,-3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Scallop / Right Fist (Even)": {
            "algs": {
                "4,0 / -3,0 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Shield / Left Fist (Odd)": {
            "algs": {
                "-2,3 / 0,1 / -2,0 / 4,-1 / 0,-3 / -1,1": {}
            }
        },
        "Shield / Left Fist (Even)": {
            "algs": {
                "-2,3 / -2,-1 / 2,0 / -1,4 / -3,0 /": {}
            }
        },
        "Shield / Right Fist (Odd)": {
            "algs": {
                "-2,3 / 2,1 / -2,0 / 4,-1 / 0,-3 / -1,1": {}
            }
        },
        "Shield / Right Fist (Even)": {
            "algs": {
                "-2,3 / 0,-1 / 2,0 / -1,4 / -3,0 /": {}
            }
        },
        "6 / Paired Edges (Odd)": {
            "algs": {
                "2,0 / 0,4 / -2,-1 / 3,3 /": {}
            }
        },
        "6 / Paired Edges (Even)": {
            "algs": {
                "0,-2 / -4,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Left 5-1 / Paired Edges (Odd)": {
            "algs": {
                "3,2 / 3,0 / 2,-2 / 0,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Left 5-1 / Paired Edges (Even)": {
            "algs": {
                "3,2 / 3,-2 / 2,1 / 0,3 /": {}
            }
        },
        "Right 5-1 / Paired Edges (Odd)": {
            "algs": {
                "3,2 / -3,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Right 5-1 / Paired Edges (Even)": {
            "algs": {
                "3,2 / -3,0 / -2,2 / 0,-2 / 2,1 / 0,3 /": {}
            }
        },
        "Left Fist / Right Fist (Odd)": {
            "algs": {
                "0,3 / 0,3 /": {}
            }
        },
        "Left Fist / Right Fist (Even)": {
            "algs": {
                "-2,-4 / 2,-2 / -2,2 / -4,1 / 3,0 /": {}
            }
        },
        "Left 4-2 / Perpendicular Edges (Odd)": {
            "algs": {
                "0,2 / -3,2 / -3,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Left 4-2 / Perpendicular Edges (Even)": {
            "algs": {
                "2,0 / 3,0 / 3,-2 / 2,1 / 0,3 /": {}
            }
        },
        "Right 4-2 / Perpendicular Edges (Odd)": {
            "algs": {
                "-2,2 / -3,0 / -3,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Right 4-2 / Perpendicular Edges (Even)": {
            "algs": {
                "/ 3,-2 / 3,-2 / 2,1 / 0,3 /": {}
            }
        },
        "4-1-1 / Perpendicular Edges (Odd)": {
            "algs": {
                "3,2 / 0,-2 / 2,1 / 0,3 /": {}
            }
        },
        "4-1-1 / Perpendicular Edges (Even)": {
            "algs": {
                "5,0 / 0,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Muffin / Right Fist (Odd)": {
            "algs": {
                "1,0 / 0,4 / 1,2 / 0,-2 / -1,4 / -3,0 /": {},
                "1,-4 / 1,-2 / 2,1 / 2,-2 / 1,0 / -3,-3 /": {},
                "1,2 / 1,-2 / 2,-3 / 3,-2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Muffin / Right Fist (Even)": {
            "algs": {
                "1,0 / 0,4 / -1,0 / 0,2 / 4,-1 / 0,-3 / -1,1": {},
                "1,-4 / 1,-2 / 0,-1 / 0,2 / -1,-2 / -3,-3 /": {},
                "1,2 / -3,2 / 3,0 / -3,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Muffin / Left Fist (Odd)": {
            "algs": {
                "/ -4,0 / 1,0 / -2,0 / -4,1 / 3,0 /": {},
                "0,4 / 2,-1 / 0,1 / -2,0 / -2,-1 / 3,3 /": {},
                "0,-2 / -2,3 / -3,0 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Muffin / Left Fist (Even)": {
            "algs": {
                "/ -4,0 / -1,-2 / 2,0 / 4,-1 / -3,0 / -1,1": {},
                "0,4 / 2,-1 / -2,-1 / 2,-2 / -1,0 / -3,-3 /": {},
                "0,-2 / 2,-1 / -2,3 / 2,-3 / -1,-2 / -3,0 /": {}
            }
        },
        "Kite / Right Fist (Odd)": {
            "algs": {
                "0,2 / 0,2 / 3,-2 / 0,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Kite / Right Fist (Even)": {
            "algs": {
                "0,2 / 0,2 / 1,0 / 0,-2 / 2,1 / 0,3 /": {}
            }
        },
        "Kite / Left Fist (Odd)": {
            "algs": {
                "0,-2 / -2,0 / -3,2 / -2,0 / -1,-2 / -3,0 /": {}
            }
        },
        "Kite / Left Fist (Even)": {
            "algs": {
                "0,-2 / -2,0 / -1,0 / 2,0 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Barrel / Right Fist (Odd)": {
            "algs": {
                "2,-3 / 0,2 / 0,1 / 0,-2 / -2,-1 / 3,3 /": {}
            }
        },
        "Barrel / Right Fist (Even)": {
            "algs": {
                "2,-3 / 0,2 / -2,-1 / -2,2 / -1,0 / -3,-3 /": {}
            }
        },
        "Barrel / Left Fist (Odd)": {
            "algs": {
                "-2,-3 / 0,-2 / 0,-1 / 0,2 / -1,-2 / -3,-3 /": {}
            }
        },
        "Barrel / Left Fist (Even)": {
            "algs": {
                "-2,-3 / 0,-2 / 2,1 / 2,-2 / 1,0 / -3,-3 /": {}
            }
        },
        "6 / Perpendicular Edges (Odd)": {
            "algs": {
                "2,-4 / -2,-3 / -3,2 / 2,1 / 0,3 /": {}
            }
        },
        "6 / Perpendicular Edges (Even)": {
            "algs": {
                "/ 3,2 / 3,-2 / 2,1 / 0,3 /": {}
            }
        },
        "Scallop / Right Pawn (Odd)": {
            "algs": {
                "0,4 / -1,-2 / -3,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Scallop / Right Pawn (Even)": {
            "algs": {
                "-4,0 / 2,3 / 2,-3 / -1,-2 / -3,0 /": {}
            }
        },
        "Scallop / Left Pawn (Odd)": {
            "algs": {
                "4,0 / -3,-2 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Scallop / Left Pawn (Even)": {
            "algs": {
                "0,-4 / 2,1 / 3,-2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Scallop / Muffin (Odd)": {
            "algs": {
                "2,0 / 0,-2 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Scallop / Muffin (Even)": {
            "algs": {
                "-2,1 / 2,0 / 2,-3 / -1,-2 / -3,0 /": {}
            }
        },
        "Left Pawn / Shield (Odd)": {
            "algs": {
                "2,-2 / 0,-2 / 1,0 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Left Pawn / Shield (Even)": {
            "algs": {
                "2,-4 / 1,0 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Right Pawn / Shield (Odd)": {
            "algs": {
                "4,-2 / 0,2 / -1,0 / 2,-3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Right Pawn / Shield (Even)": {
            "algs": {
                "4,0 / -1,0 / 2,-3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Right Pawn / Right Fist (Odd)": {
            "algs": {
                "-2,2 / 0,2 / -2,0 / 4,-1 / 0,-3 / -1,1": {}
            }
        },
        "Right Pawn / Right Fist (Even)": {
            "algs": {
                "-2,2 / -2,0 / 2,0 / -1,4 / -3,0 /": {}
            }
        },
        "Left Pawn / Left Fist (Odd)": {
            "algs": {
                "2,-2 / 0,2 / -2,0 / -4,1 / 3,0 /": {}
            }
        },
        "Left Pawn / Left Fist (Even)": {
            "algs": {
                "2,-2 / -2,0 / 2,0 / 4,-1 / -3,0 / -1,1": {}
            }
        },
        "Shield / Kite (Odd)": {
            "algs": {
                "4,0 / 0,-2 / 2,0 / 0,-1 / -3,0 / -1,1": {}
            }
        },
        "Shield / Kite (Even)": {
            "algs": {
                "-2,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1": {}
            }
        },
        "Shield / Barrel (Odd)": {
            "algs": {
                "-2,2 / 0,2 / -2,0 / -2,-1 / 3,3 /": {}
            }
        },
        "Shield / Barrel (Even)": {
            "algs": {
                "-2,-2 / 0,-2 / 2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Left 5-1 / Perpendicular Edges (Odd)": {
            "algs": {
                "0,-4 / -4,0 / -1,-2 / -3,0 /": {}
            }
        },
        "Left 5-1 / Perpendicular Edges (Even)": {
            "algs": {
                "0,2 / -2,4 / -2,0 / -1,-2 / -3,0 /": {}
            }
        },
        "Right 5-1 / Perpendicular Edges (Odd)": {
            "algs": {
                "/ 0,4 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Right 5-1 / Perpendicular Edges (Even)": {
            "algs": {
                "6,0 / 2,4 / 2,0 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "3-3 / Perpendicular Edges (Odd)": {
            "algs": {
                "0,2 / 0,-2 / -1,4 / -3,0 /": {}
            }
        },
        "3-3 / Perpendicular Edges (Even)": {
            "algs": {
                "-2,0 / 0,2 / 4,-1 / 0,-3 / -1,1": {}
            }
        },
        "3-1-2 / Perpendicular Edges (Odd)": {
            "algs": {
                "4,0 / 0,2 / 0,-1 / 0,-3 / -1,1": {}
            }
        },
        "3-1-2 / Perpendicular Edges (Even)": {
            "algs": {
                "-2,2 / 0,-4 / -2,0 / 0,1 / 3,0 /": {}
            }
        },
        "3-2-1 / Perpendicular Edges (Odd)": {
            "algs": {
                "-1,-4 / -2,0 / 0,1 / 3,0 /": {}
            }
        },
        "3-2-1 / Perpendicular Edges (Even)": {
            "algs": {
                "-1,0 / 0,4 / 2,0 / 0,-1 / -3,0 / -1,1": {}
            }
        },
        "Scallop / Barrel (Odd)": {
            "algs": {
                "4,2 / -4,0 / 2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Scallop / Barrel (Even)": {
            "algs": {
                "/ 4,0 / -1,0 / -3,-3 /": {}
            }
        },
        "Right Pawn / Left Fist (Odd)": {
            "algs": {
                "/ 0,1 / -1,0 / -3,0 /": {}
            }
        },
        "Right Pawn / Left Fist (Even)": {
            "algs": {
                "-2,-2 / 4,0 / -4,0 / 4,-1 / -3,0 / -1,1": {}
            }
        },
        "Left Pawn / Right Fist (Odd)": {
            "algs": {
                "/ -1,0 / 1,0 / 0,3 / -1,1": {}
            }
        },
        "Left Pawn / Right Fist (Even)": {
            "algs": {
                "2,2 / 0,-4 / 4,0 / 4,-1 / 0,-3 / -1,1": {}
            }
        },
        "Shield / Muffin (Odd)": {
            "algs": {
                "0,6 / 0,-3 / -1,-2 / -3,0 /": {}
            }
        },
        "Shield / Muffin (Even)": {
            "algs": {
                "-2,1 / 4,0 / 2,0 / 0,-3 / -1,-2 / -3,0 /": {}
            }
        },
        "Scallop / Kite (Odd)": {
            "algs": {
                "/ -1,-2 / -3,0 /": {}
            }
        },
        "Scallop / Kite (Even)": {
            "algs": {
                "2,0 / 2,-2 / 2,0 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Right Fist / Right Fist (Odd)": {
            "algs": {
                "0,-4 / -4,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1": {}
            }
        },
        "Right Fist / Right Fist (Even)": {
            "algs": {
                "2,6 / 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /": {}
            }
        },
        "Left Fist / Left Fist (Odd)": {
            "algs": {
                "6,-2 / 4,0 / -2,0 / 2,0 / -1,0 / -3,0 /": {}
            }
        },
        "Left Fist / Left Fist (Even)": {
            "algs": {
                "4,0 / -2,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1": {}
            }
        },
        "Scallop / Scallop (Odd)": {
            "algs": {
                "/ -1,-2 / -3,-3 /": {}
            }
        },
        "Scallop / Scallop (Even)": {
            "algs": {
                "2,-2 / -2,2 / -1,-2 / -3,-3 /": {}
            }
        },
        "Shield / Shield (Odd)": {
            "algs": {
                "/ -1,0 / -3,-3 /": {}
            }
        },
        "Shield / Shield (Even)": {
            "algs": {
                "4,-2 / -4,2 / -1,0 / -3,-3 /": {}
            }
        },
        "Muffin / Kite (Odd)": {
            "algs": {
                "0,3 / 2,1 / 0,-2 / 2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Muffin / Kite (Even)": {
            "algs": {
                "0,3 / 2,-1 / 0,2 / -2,0 / -2,-1 / 3,3 /": {}
            }
        },
        "Muffin / Barrel (Odd)": {
            "algs": {
                "0,-2 / -2,0 / 0,2 / 2,-3 / -2,-1 / -3,0 / -1,1": {},
                "1,0 / 3,-2 / 2,0 / 0,-2 / 1,0 / 0,3 / -1,1": {}
            }
        },
        "Muffin / Barrel (Even)": {
            "algs": {
                "0,-2 / 2,-1 / -2,0 / -2,3 / -2,-1 / -3,0 / -1,1": {},
                "/ 2,-3 / -2,0 / 2,0 / -1,0 / -3,0 /": {}
            }
        },
        "4-1-1 / Parallel Edges (Odd)": {
            "algs": {
                "-3,0 / -3,2 / 0,-4 / 2,1 / 0,3 /": {}
            }
        },
        "4-1-1 / Parallel Edges (Even)": {
            "algs": {
                "-1,0 / 3,-2 / 0,4 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Right Pawn / Muffin (Odd)": {
            "algs": {
                "-2,1 / 2,1 / -2,2 / 1,0 / -3,-3 /": {}
            }
        },
        "Right Pawn / Muffin (Even)": {
            "algs": {
                "-2,1 / 0,-1 / 2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Left Pawn / Muffin (Odd)": {
            "algs": {
                "2,0 / -1,-2 / 2,-2 / 0,-1 / 3,3 /": {}
            }
        },
        "Left Pawn / Muffin (Even)": {
            "algs": {
                "2,0 / 1,0 / -2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Right Pawn / Kite (Odd)": {
            "algs": {
                "4,0 / -1,-2 / 2,0 / -2,-1 / -3,0 / -1,1": {},
                "-2,3 / -2,-1 / 2,0 / -1,-2 / -3,-3": {}
            }
        },
        "Right Pawn / Kite (Even)": {
            "algs": {
                "-2,0 / 0,1 / 2,0 / -1,0 / -3,0 /": {},
                "4,0 / -3,0 / -2,0 / -1,-2 / -3,0 /": {}
            }
        },
        "Left Pawn / Kite (Odd)": {
            "algs": {
                "-4,0 / 2,1 / -2,0 / -2,-1 / -3,0 / -1,1": {},
                "2,-3 / 1,2 / -2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "Left Pawn / Kite (Even)": {
            "algs": {
                "2,0 / -1,0 / -2,0 / 0,1 / 3,0 /": {},
                "-4,0 / 0,3 / 2,0 / -1,-2 / -3,0 /": {}
            }
        },
        "Right Pawn / Barrel (Odd)": {
            "algs": {
                "-2,-2 / 2,-1 / 2,-3 / -1,-2 / -3,0 /": {}
            }
        },
        "Right Pawn / Barrel (Even)": {
            "algs": {
                "0,2 / 2,0 / 3,-2 / 2,-3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Left Pawn / Barrel (Odd)": {
            "algs": {
                "2,2 / 1,-2 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Left Pawn / Barrel (Even)": {
            "algs": {
                "0,-2 / 0,-2 / -3,2 / 3,-2 / 2,1 / 0,3 /": {}
            }
        },
        "Left 4-2 / Parallel Edges (Odd)": {
            "algs": {
                "-4,0 / 3,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Left 4-2 / Parallel Edges (Even)": {
            "algs": {
                "/ 0,-4 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Right 4-2 / Parallel Edges (Odd)": {
            "algs": {
                "/ 0,4 / 2,-3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Right 4-2 / Parallel Edges (Even)": {
            "algs": {
                "4,0 / -3,-2 / 2,1 / 0,3 /": {}
            }
        },
        "Left Pawn / Right Pawn (Odd)": {
            "algs": {
                "2,-2 / -2,2 / -4,1 / 3,0 /": {}
            }
        },
        "Left Pawn / Right Pawn (Even)": {
            "algs": {
                "/ -4,1 / 3,0 /": {}
            }
        },
        "Kite / Barrel (Odd)": {
            "algs": {
                "/ 4,2 / -2,2 / -2,2 / 4,-1 / 0,-3 / -1,1": {}
            }
        },
        "Kite / Barrel (Even)": {
            "algs": {
                "/ 0,3 / 0,3 /": {}
            }
        },
        "Left Fist / Square (Odd)": {
            "algs": {
                "-2,0 / 0,4 / -1,-2 / 0,2 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Left Fist / Square (Even)": {
            "algs": {
                "-2,0 / 0,-2 / 0,1 / 0,2 / -1,0 / 0,-3 /": {}
            }
        },
        "Right Fist / Square (Odd)": {
            "algs": {
                "2,1 / 2,0 / 0,-1 / -2,0 / 1,0 / 3,0 / -1,1": {}
            }
        },
        "Right Fist / Square (Even)": {
            "algs": {
                "2,1 / -4,0 / 1,2 / -2,0 / -1,-2 / -3,0 /": {}
            }
        },
        "6 / Parallel Edges (Odd)": {
            "algs": {
                "/ 0,-4 / 2,-3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "6 / Parallel Edges (Even)": {
            "algs": {
                "-4,0 / 0,4 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "Left 5-1 / Parallel Edges (Odd)": {
            "algs": {
                "/ 3,0 / 0,4 / -2,-1 / 0,-3 / -1,1": {}
            }
        },
        "Left 5-1 / Parallel Edges (Even)": {
            "algs": {
                "-4,0 / -1,4 / 2,-2 / 0,-1 / 3,3 /": {}
            }
        },
        "Right 5-1 / Parallel Edges (Odd)": {
            "algs": {
                "-2,0 / 1,-4 / -2,2 / 0,1 / 3,3 /": {}
            }
        },
        "Right 5-1 / Parallel Edges (Even)": {
            "algs": {
                "6,0 / -3,0 / 0,-4 / 2,1 / 0,3 /": {}
            }
        },
        "3-3 / Parallel Edges (Odd)": {
            "algs": {
                "-2,0 / 1,0 / -1,0 / 0,2 / -2,-1 / 3,3 /": {}
            }
        },
        "3-3 / Parallel Edges (Even)": {
            "algs": {
                "/ -1,0 / 1,0 / 0,-2 / -1,-2 / -3,-3": {}
            }
        },
        "3-1-2 / Parallel Edges (Odd)": {
            "algs": {
                "3,0 / 0,2 / 1,0 / -3,-1 / 0,-3 / -1,1": {}
            }
        },
        "3-1-2 / Parallel Edges (Even)": {
            "algs": {
                "6,0 / 1,-4 / -2,0 / -1,-2 / -3,-3 /": {}
            }
        },
        "3-2-1 / Parallel Edges (Odd)": {
            "algs": {
                "6,0 / 0,-2 / -1,0 / 3,1 / 0,3 /": {}
            }
        },
        "3-2-1 / Parallel Edges (Even)": {
            "algs": {
                "3,0 / -1,4 / 2,0 / -2,-1 / 3,3": {}
            }
        },
        "Scallop / Square (Odd)": {
            "algs": {
                "2,1 / 0,2 / -2,0 / -1,-2 / -3,0 /": {},
                "-4,1 / 2,0 / -2,0 / -2,-2 / -3,0 / -1,1": {}
            }
        },
        "Scallop / Square (Even)": {
            "algs": {
                "-2,0 / -2,0 / 2,0 / -1,-2 / -3,0 /": {},
                "4,0 / 0,-2 / 2,0 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "2-2-2 / Paired Edges (Odd)": {
            "algs": {
                "-2,0 / 0,2 / 0,-1 / 3,3 /": {}
            }
        },
        "2-2-2 / Paired Edges (Even)": {
            "algs": {
                "0,-2 / -2,0 / 0,1 / 3,3 /": {}
            }
        },
        "Shield / Square (Odd)": {
            "algs": {
                "0,1 / -1,0 / -3,0 /": {}
            }
        },
        "Shield / Square (Even)": {
            "algs": {
                "0,1 / 0,-4 / -2,2 / -2,2 / 4,-1 / 0,-3 / -1,1": {}
            }
        },
        "Kite / Square (Odd)": {
            "algs": {
                "3,0 / 1,0 / -2,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1": {}
            }
        },
        "Kite / Square (Even)": {
            "algs": {
                "3,1 / -1,0 / 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /": {}
            }
        },
        "7-1 / Star (Odd)": {
            "algs": {
                "0,2 / 0,-2 / -1,-2 / 2,-3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "7-1 / Star (Even)": {
            "algs": {
                "/ 0,-2 / -1,-2 / 2,-3 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "5-3 / Star (Odd)": {
            "algs": {
                "1,2 / 4,0 / 1,0 / 3,-2 / 2,1 / 0,3 /": {},
                "-4,2 / 2,-2 / -3,-2 / -2,3 / -1,-2 / -3,0 /": {},
                "-5,0 / 0,4 / 1,0 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "5-3 / Star (Even)": {
            "algs": {
                "1,0 / 4,0 / 1,0 / 3,-2 / 2,1 / 0,3 /": {},
                "-4,0 / 2,-2 / -3,-2 / -2,3 / -1,-2 / -3,0 /": {},
                "-5,2 / 0,4 / 1,0 / -2,3 / -1,-2 / -3,0 /": {}
            }
        },
        "2-2-2 / Perpendicular Edges (Odd)": {
            "algs": {
                "/ -1,0 / 2,0 / 0,-2 / 0,1 / 0,3 /": {}
            }
        },
        "2-2-2 / Perpendicular Edges (Even)": {
            "algs": {
                "0,2 / 1,0 / -2,0 / 0,2 / 0,-1 / 0,-3 / -1,1": {}
            }
        },
        "Barrel / Square (Odd)": {
            "algs": {
                "0,1 / 2,0 / 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /": {}
            }
        },
        "Barrel / Square (Even)": {
            "algs": {
                "/ -2,0 / -2,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1": {}
            }
        },
        "Right Pawn / Right Pawn (Odd)": {
            "algs": {
                "-2,-2 / 0,1 / 2,2 / -1,0 / -3,-3 /": {}
            }
        },
        "Right Pawn / Right Pawn (Even)": {
            "algs": {
                "-2,-2 / 0,-1 / 2,2 / -1,-2 / -3,-3 /": {}
            }
        },
        "Left Pawn / Left Pawn (Odd)": {
            "algs": {
                "2,2 / -1,0 / -2,-2 / 0,1 / 3,3 /": {}
            }
        },
        "Left Pawn / Left Pawn (Even)": {
            "algs": {
                "2,2 / 1,0 / -2,-2 / -1,-2 / -3,-3 /": {}
            }
        },
        "Right Pawn / Square (Odd)": {
            "algs": {
                "-2,1 / 0,-1 / 2,0 / -1,-2 / -3,0 /": {}
            }
        },
        "Right Pawn / Square (Even)": {
            "algs": {
                "-2,1 / 2,-3 / -2,0 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "Left Pawn / Square (Odd)": {
            "algs": {
                "2,0 / 1,0 / -2,0 / -1,-2 / -3,0 /": {}
            }
        },
        "Left Pawn / Square (Even)": {
            "algs": {
                "2,0 / 3,-2 / 2,0 / -2,-1 / -3,0 / -1,1": {}
            }
        },
        "8 / Star (Odd)": {
            "algs": {
                "/ 2,4 / -2,-1 / 3,3 /": {}
            }
        },
        "8 / Star (Even)": {
            "algs": {
                "0,2 / 2,4 / -2,-1 / 3,3 /": {}
            }
        },
        "6-2 / Star (Odd)": {
            "algs": {
                "/ 2,4 / 4,-1 / -3,0 / -1,1": {}
            }
        },
        "6-2 / Star (Even)": {
            "algs": {
                "0,2 / 2,4 / 4,-1 / -3,0 / -1,1": {}
            }
        },
        "Muffin / Muffin (Odd)": {
            "algs": {
                "6,0 / 1,0 / 2,-2 / -2,2 / -1,-2 / -3,-3 /": {}
            }
        },
        "Muffin / Muffin (Even)": {
            "algs": {
                "6,0 / 0,-2 / -3,-3 /": {}
            }
        },
        "Muffin / Square (Odd)": {
            "algs": {
                "/ -2,0 / -3,0 / -1,1": {}
            }
        },
        "Muffin / Square (Even)": {
            "algs": {
                "1,1 / 5,0 / -2,2 / 2,-2 / 4,-1 / -3,0 / -1,1": {}
            }
        },
        "Barrel / Barrel (Odd)": {
            "algs": {
                "-3,0 / -3,-3 /": {}
            }
        },
        "Barrel / Barrel (Even)": {
            "algs": {
                "-2,2 / 2,-2 / -2,2 / -1,-2 / -3,-3 /": {}
            }
        },
        "Kite / Kite (Odd)": {
            "algs": {
                "-3,3 / -2,-1 / 2,-2 / -2,2 / -1,-2 / -3,-3 /": {}
            }
        },
        "Kite / Kite (Even)": {
            "algs": {
                "0,6 /": {}
            }
        },
        "4-4 / Star (Odd)": {
            "algs": {
                "/ -2,-2 / 0,1 / 3,3 /": {},
                "-2,2 / 2,2 / -2,-1 / 3,3 /": {}
            }
        },
        "4-4 / Star (Even)": {
            "algs": {
                "0,2 / -2,-2 / 0,1 / 3,3 /": {},
                "-2,0 / 2,2 / -2,-1 / 3,3 /": {}
            }
        },
        "2-2-2 / Parallel Edges (Odd)": {
            "algs": {
                "-2,0 / 3,0 / 0,2 / 0,-2 / 0,1 / 0,3 /": {}
            }
        },
        "2-2-2 / Parallel Edges (Even)": {
            "algs": {
                "-2,0 / -3,0 / 0,-2 / 0,2 / 0,-1 / 0,-3 / -1,1": {}
            }
        },
        "Square / Square (Odd)": {
            "algs": {
                "/ 3,3 / 1,2 / 2,-2 / -2,2 / -1,-2 / -3,-3 /": {}
            }
        },
        "Square / Square (Even)": {
            "algs": {
                "": {}
            }
        }
    }
}