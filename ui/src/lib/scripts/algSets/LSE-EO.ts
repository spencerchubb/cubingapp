import { STICKERS as S } from "../rubiks-viz/pieces";

export let algSet = {
    "puzzle": "3x3",
    "gray": [S.FU, S.F, S.FD, S.BU, S.B, S.BD, S.LU, S.RU],
    "purple": [S.UB, S.UL, S.UR, S.UF, S.U, S.DF, S.DB, S.D],
    "pre": ["U' M2 U"],
    "post": ["", "U", "U2", "U'"],
    "cases": [
        {
            "name": "Front Arrow",
            "algs": [
                "M' U M",
                "M' U' M"
            ]
        },
        {
            "name": "Back Arrow",
            "algs": [
                "M U M'",
                "M U' M'"
            ]
        },
        {
            "name": "Front 1 / 1",
            "algs": [
                "M U' M' U' M U' M'",
                "M U M' U M U M'"
            ]
        },
        {
            "name": "Back 1 / 1",
            "algs": [
                "M' U' M U' M' U' M'",
                "M' U M U M' U M"
            ]
        },
        {
            "name": "2 Adj / 2",
            "algs": [
                "M2 U' M' U' M'"
            ]
        },
        {
            "name": "2 Adj / 0",
            "algs": [
                "M' U' M' U2 M' U' M'"
            ]
        },
        {
            "name": "2 Opp / 2",
            "algs": [
                "M' U2 M' U2 M U' M'"
            ]
        },
        {
            "name": "2 Opp / 0",
            "algs": [
                "M' U' M U M' U' M'"
            ]
        },
        {
            "name": "0 / 2",
            "algs": [
                "M' U' M' U M U' M'"
            ]
        },
        {
            "name": "4 / 0",
            "algs": [
                "M' U2 M' U2 M' U' M'",
                "M' U2 M' U2 M' U M'"
            ]
        },
        {
            "name": "All 6",
            "algs": [
                "M' U' M' U2 M' U' M U' M' U' M'"
            ]
        }
    ]
}