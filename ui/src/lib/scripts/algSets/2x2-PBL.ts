import { randElement } from "../common/rand";

export let algSet = {
    "puzzle": "2x2",
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "cases": [
        {
            "name": "Adj",
            "algs": [
                "U R U R' F' R U R' U' R' F R2 U' R'",
                "U R U R' U' R' F R2 U' R' U' R U R' F'",
                "U R' F R F' R U2 R' U R U2 R'",
                "U2 R' F R' F2 R U' R' F2 R2"
            ]
        },
        {
            "name": "Opp",
            "algs": [
                "R U' R' U' F2 U' R U R' U F2",
                "F R U' R' U' R U R' F' R U R' U' R' F R F'",
                "R U' R' U' F2 U' R U R' D R2",
                "z2 R U' R' U' F2 U' R U R' U R2 B2"
            ]
        },
        {
            "name": "Opp Opp",
            "algs": [
                "R2 F2 R2",
                "R2 B2 R2",
                "x R2 U2 R2"
            ]
        },
        {
            "name": "Adj Adj",
            "algs": [
                "R2 U R2 U2 F2 U F2",
                "R2 U' B2 U2 R2 U' R2",
                "U2 R2 U' R2 U2 F2 U' R2",
                "R2 U' F2 U2 R2 U' B2"
            ]
        },
        {
            "name": "Adj Opp",
            "algs": [
                "R U' R F2 R' U R'",
                "R' F R' F2 R U' R",
                "z2 y R2 U R2 U' R2 U R2 U' R2",
                "U2 R' U R' F2 R F' R"
            ]
        },
        {
            "name": "Opp Adj",
            "algs": [
                "U R2 U R2 U' R2 U R2 U' R2",
                "U R2 U' R2 U R2 U' R2 U R2",
                "z2 R U' R F2 R' U R'",
                "R' D R' F2 R D' R"
            ]
        }
    ]
}