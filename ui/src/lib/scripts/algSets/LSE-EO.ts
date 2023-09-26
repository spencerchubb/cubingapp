import { randElement } from "../common/rand";

export let algSet = {
    "puzzle": "3x3",
    "pre": () => {
        const segments = ["M2 U", "M2 U'", "M2 U2", "M' U2 M U", "M' U2 M' U'"];
        let alg = randElement(segments);
        for (let i = 0; i < 5; i++) alg += ` ${randElement(segments)}`;
        return alg;
    },
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