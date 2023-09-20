import { STICKERS as S } from "../rubiks-viz/pieces";

export let algSet = {
    "puzzle": "3x3",
    "gray": [
        S.FRU, S.FU, S.FUL, S.LFU, S.LU, S.LUB, S.BLU, S.BU, S.BUR, S.RBU, S.RU, S.RUF,
    ],
    "pre": ["R' F R' B2 R F' R' B2 R2", "R U R' F' R U R' U' R' F R2 U' R'", "R U R' U' R' F R2 U' R' U' R U R' F'", "M2 U M U2 M' U M2"],
    "post": ["", "U", "U'", "U2"],
    "cases": [
        {
            "name": "OLL 1",
            "subsets": ["Dot"],
            "algs": [
                "R U2 R2 F R F' U2 R' F R F'",
                "U R U' R2 D' r U' r' D R2 U R'",
                "R' U' F R' F' R2 U R f' U' f",
                "L' U2 L2 F' L' F U2 L F' L' F"
            ]
        },
        {
            "name": "OLL 2",
            "subsets": ["Dot"],
            "algs": [
                "L F L' U2 L F2 R' F2 R F' L'",
                "U' R U' R2 D' r U r' D R2 U R'",
                "F R U R' U' S R U R' U' f'",
                "U r U r' U2 R U2 R' U2 r U' r'",
                "F R U R' U' F' f R U R' U' f'"
            ]
        },
        {
            "name": "OLL 3",
            "subsets": ["Dot"],
            "algs": [
                "U R' F2 R2 U2 R' F R U2 R2 F2 R",
                "U' f R U R' U' f' U' F R U R' U' F'",
                "r' R2 U R' U r U2 r' U M'",
                "M R U R' U r U2 r' U M'"
            ]
        },
        {
            "name": "OLL 4",
            "subsets": ["Dot"],
            "algs": [
                "U' R' F2 R2 U2 R' F' R U2 R2 F2 R",
                "U' f R U R' U' f' U F R U R' U' F'",
                "M U' r U2 r' U' R U' R' M'",
                "l L2 U' L U' l' U2 l U' M'"
            ]
        },
        {
            "name": "OLL 5",
            "subsets": ["Square"],
            "algs": [
                "r' U2 R U R' U r",
                "U2 l' U2 L U L' U l",
                "U2 R' F2 r U r' F R",
                "U2 R' F2 L F L' F R"
            ]
        },
        {
            "name": "OLL 6",
            "subsets": ["Square"],
            "algs": [
                "r U2 R' U' R U' r'",
                "U2 l U2 L' U' L U' l'",
                "F U' R2 D R' U' R D' R2 U F'",
                "L F2 l' U' l F' L'"
            ]
        },
        {
            "name": "OLL 7",
            "subsets": ["Lightning"],
            "algs": [
                "r U R' U R U2 r'",
                "U2 l U L' U L U2 l'",
                "r U r' U R U' R' r U' r'",
                "U2 R' U2 R U2 R f' U' f"
            ]
        },
        {
            "name": "OLL 8",
            "subsets": ["Lightning"],
            "algs": [
                "U2 r' U' R U' R' U2 r",
                "l' U' L U' L' U2 l",
                "R U2 R' U2 R' F R F'",
                "R' F' r U' r' F2 R"
            ]
        },
        {
            "name": "OLL 9",
            "subsets": ["Fish"],
            "algs": [
                "U R U R' U' R' F R2 U R' U' F'",
                "R U2 R' U' S' R U' R' S",
                "U2 F' U' F r U' r' U r U r'",
                "U' L' U' L U' L F' L' F L' U2 L"
            ]
        },
        {
            "name": "OLL 10",
            "subsets": ["Fish"],
            "algs": [
                "R U R' U R' F R F' R U2 R'",
                "U F U F' R' F R U' R' F' R",
                "U2 L' U' L U L F' L2 U' L U F",
                "U M' R' U2 R U R' U R U M"
            ]
        },
        {
            "name": "OLL 11",
            "subsets": ["Lightning"],
            "algs": [
                "r' R2 U R' U R U2 R' U M'",
                "U2 r U R' U R' F R F' R U2 r'",
                "U2 S' U2 R U R' U R U2 R' S",
                "S R U R' U R U2 R' U2 S'"
            ]
        },
        {
            "name": "OLL 12",
            "subsets": ["Lightning"],
            "algs": [
                "U' M' R' U' R U' R' U2 R U' M",
                "U' S R' U' R U' R' U2 R U2 S'",
                "F R U R' U' F' U F R U R' U' F'",
                "U' r R2 U' R U' R' U2 R U' R r'"
            ]
        },
        {
            "name": "OLL 13",
            "subsets": ["Knight"],
            "algs": [
                "F U R U2 R' U' R U R' F'",
                "F U R U' R2 F' R U R U' R'",
                "r U' r' U' r U r' F' U F",
                "r U' r' U' r U r' U L' U L"
            ]
        },
        {
            "name": "OLL 14",
            "subsets": ["Knight"],
            "algs": [
                "R' F R U R' F' R F U' F'",
                "r U R' U' r' F R2 U R' U' F'",
                "F' U' L' U L2 F L' U' L' U L",
                "l' U l U l' U' l F U' F'"
            ]
        },
        {
            "name": "OLL 15",
            "subsets": ["Knight"],
            "algs": [
                "r' U' r R' U' R U r' U r",
                "U2 l' U' l L' U' L U l' U l",
                "U2 R' F' R L' U' L U R' F R",
                "r' U' M' U' R U r' U r"
            ]
        },
        {
            "name": "OLL 16",
            "subsets": ["Knight"],
            "algs": [
                "r U r' R U R' U' r U' r'",
                "r U M U R' U' r U' r'",
                "U2 R' F R U R' U' F' R U' R' U2 R",
                "U2 l U l' L U L' U' l U' l'"
            ]
        },
        {
            "name": "OLL 17",
            "subsets": ["Dot"],
            "algs": [
                "R U R' U R' F R F' U2 R' F R F'",
                "U2 F R' F' R U S' R U' R' S",
                "U2 F R' F' R2 r' U R U' R' U' M'",
                "U' F' r U r' U' S r' F r S'"
            ]
        },
        {
            "name": "OLL 18",
            "subsets": ["Dot"],
            "algs": [
                "U R U2 R2 F R F' U2 M' U R U' r'",
                "r U R' U R U2 r2 U' R U' R' U2 r",
                "U F S' R U' R' S R U2 R' U' F'",
                "R D r' U' r D' R' U' R2 F R F' R"
            ]
        },
        {
            "name": "OLL 19",
            "subsets": ["Dot"],
            "algs": [
                "U S' R U R' S U' R' F R F'",
                "M U R U R' U' M' R' F R F'",
                "R' U2 F R U R' U' F2 U2 F R",
                "U2 r U2 R' U' R U' r2 U2 R U R' U r"
            ]
        },
        {
            "name": "OLL 20",
            "subsets": ["Dot", "Corners oriented"],
            "algs": [
                "r U R' U' M2 U R U' R' U' M'",
                "S' R U R' S U' M' U R U' r'",
                "M U R U R' U' M2 U R U' r'",
                "S R' U' R U R U R U' R' S'"
            ]
        },
        {
            "name": "OLL 21",
            "subsets": ["Edges oriented"],
            "algs": [
                "R U R' U R U' R' U R U2 R'",
                "U R U2 R' U' R U R' U' R U' R'",
                "U F R U R' U' R U R' U' R U R' U' F'",
                "R' U' R U' R' U R U' R' U2 R"
            ]
        },
        {
            "name": "OLL 22",
            "subsets": ["Edges oriented"],
            "algs": [
                "R U2 R2 U' R2 U' R2 U2 R",
                "R' U2 R2 U R2 U R2 U2 R'",
                "f R U R' U' S' R U R' U' F'",
                "f R U R' U' f' F R U R' U' F'"
            ]
        },
        {
            "name": "OLL 23",
            "subsets": ["Edges oriented"],
            "algs": [
                "R2 D R' U2 R D' R' U2 R'",
                "U2 R2 D' R U2 R' D R U2 R",
                "R U R' U R U2 R2 U' R U' R' U2 R",
                "U' R U2 R' U' R U' R' L' U2 L U L' U L"
            ]
        },
        {
            "name": "OLL 24",
            "subsets": ["Edges oriented"],
            "algs": [
                "r U R' U' r' F R F'",
                "U2 R' F' r U R U' r' F",
                "U R U R D R' U' R D' R2",
                "U' R' U' R' D' R U R' D R2"
            ]
        },
        {
            "name": "OLL 25",
            "subsets": ["Edges oriented"],
            "algs": [
                "U F' r U R' U' r' F R",
                "F R' F' r U R U' r'",
                "x R' U R D' R' U' R D x'",
                "U2 R2 D' R U' R' D R U R"
            ]
        },
        {
            "name": "OLL 26",
            "subsets": ["Edges oriented"],
            "algs": [
                "U R U2 R' U' R U' R'",
                "R' U' R U' R' U2 R",
                "U2 L' U' L U' L' U2 L",
                "U2 L' U R U' L U R'"
            ]
        },
        {
            "name": "OLL 27",
            "subsets": ["Edges oriented"],
            "algs": [
                "R U R' U R U2 R'",
                "U' R' U2 R U R' U R",
                "U L' U2 L U L' U L",
                "U2 L U L' U L U2 L'"
            ]
        },
        {
            "name": "OLL 28",
            "subsets": ["Corners oriented"],
            "algs": [
                "r U R' U' M U R U' R'",
                "U2 M' U M U2 M' U M",
                "r U R' U' r' R U R U' R'",
                "R' F R S R' F' R S'"
            ]
        },
        {
            "name": "OLL 29",
            "subsets": ["Awkward"],
            "algs": [
                "r2 D' r U r' D r2 U' r' U' r",
                "U R U R' U' R U' R' F' U' F R U R'",
                "U S' R U R' U' R' F R F' U S",
                "M U R U R' U' R' F R F' M'"
            ]
        },
        {
            "name": "OLL 30",
            "subsets": ["Awkward"],
            "algs": [
                "U' r' D' r U' r' D r2 U' r' U r U r'",
                "U2 F R' F R2 U' R' U' R U R' F2",
                "U2 F U R U2 R' U' R U2 R' U' F'",
                "U S' R' U' R f R' U R U' F'"
            ]
        },
        {
            "name": "OLL 31",
            "subsets": ["P"],
            "algs": [
                "R' U' F U R U' R' F' R",
                "U S R U R' U' f' U' F",
                "U' F R' F' R U R U R' U' R U' R'",
                "U2 S' L' U' L U L F' L' f"
            ]
        },
        {
            "name": "OLL 32",
            "subsets": ["P"],
            "algs": [
                "S R U R' U' R' F R f'",
                "U2 L U F' U' L' U L F L'",
                "R U B' U' R' U R B R'",
                "U' R' F R F' U' r U' r' U r U r'"
            ]
        },
        {
            "name": "OLL 33",
            "subsets": ["T"],
            "algs": [
                "R U R' U' R' F R F'",
                "U2 L' U' L U L F' L' F",
                "U2 r' F' r U r U' r' F",
                "R U R' F' U' F R U' R'"
            ]
        },
        {
            "name": "OLL 34",
            "subsets": ["C"],
            "algs": [
                "U f R f' U' r' U' R U M'",
                "U2 R U R2 U' R' F R U R U' F'",
                "F R U R' U' R' F' r U R U' r'",
                "U2 R U R' U' B' R' F R F' B"
            ]
        },
        {
            "name": "OLL 35",
            "subsets": ["Fish"],
            "algs": [
                "R U2 R2 F R F' R U2 R'",
                "f R U R' U' f' R U R' U R U2 R'",
                "U2 R2 F R F' R U2 R' U R U2 R' U' R",
                "U L' U2 L2 F' L' F L' U2 L"
            ]
        },
        {
            "name": "OLL 36",
            "subsets": ["W"],
            "algs": [
                "U2 L' U' L U' L' U L U L F' L' F",
                "U R U R2 F' U' F U R2 U2 R'",
                "U2 R U R' F' R U R' U' R' F R U' R' F R F'",
                "U2 R' F' U' F2 U R U' R' F' R"
            ]
        },
        {
            "name": "OLL 37",
            "subsets": ["Fish"],
            "algs": [
                "F R U' R' U' R U R' F'",
                "F R' F' R U R U' R'",
                "U F' r U r' U' r' F r",
                "U F' L' U L U L' U' L F"
            ]
        },
        {
            "name": "OLL 38",
            "subsets": ["W"],
            "algs": [
                "R U R' U R U' R' U' R' F R F'",
                "U F R U' R' S U' R U R' f'",
                "L' U' L F L' U' L U L F' L' U L F' L' F",
                "U2 F R U' R2 F R F' U' F2 r U r2 F2 r"
            ]
        },
        {
            "name": "OLL 39",
            "subsets": ["Lightning"],
            "algs": [
                "U' f' r U r' U' r' F r S",
                "U L F' L' U' L U F U' L'",
                "U' R U R' F' U' F U R U2 R'",
                "U' f' L F L' U' L' U L S"
            ]
        },
        {
            "name": "OLL 40",
            "subsets": ["Lightning"],
            "algs": [
                "U R' F R U R' U' F' U R",
                "U' f R' F' R U R U' R' S'",
                "R r D r' U r D' r' U' R'",
                "M F' L F L' U' L' U L U M'"
            ]
        },
        {
            "name": "OLL 41",
            "subsets": ["Awkward"],
            "algs": [
                "U2 R U R' U R U2 R' F R U R' U' F'",
                "U2 F U R2 D R' U' R D' R2 F'",
                "U' S U' R' F' U' F U R S'",
                "U2 R' F' U' F R S' R' U R S"
            ]
        },
        {
            "name": "OLL 42",
            "subsets": ["Awkward"],
            "algs": [
                "R' U' R U' R' U2 R F R U R' U' F'",
                "U F S' R U R' U' F' U S",
                "U R' F R F' R' F R F' R U R' U' R U R'",
                "U R' U' F2 u' R U R' D R2 B"
            ]
        },
        {
            "name": "OLL 43",
            "subsets": ["P"],
            "algs": [
                "U R' U' F' U F R",
                "U2 F' U' L' U L F",
                "f' L' U' L U f",
                "U' r' F' U' F U r"
            ]
        },
        {
            "name": "OLL 44",
            "subsets": ["P"],
            "algs": [
                "U2 F U R U' R' F'",
                "f R U R' U' f'",
                "U R U B U' B' R'",
                "U' F R U' R' F' L' U L"
            ]
        },
        {
            "name": "OLL 45",
            "subsets": ["T"],
            "algs": [
                "F R U R' U' F'",
                "U R' F' U' F U R",
                "U2 f U R U' R' f'"
            ]
        },
        {
            "name": "OLL 46",
            "subsets": ["C"],
            "algs": [
                "R' U' R' F R F' U R",
                "U2 r' U' F R' F' R U r",
                "R' F' U' F R U' R' U2 R",
                "U2 L U L F' L' F U' L'"
            ]
        },
        {
            "name": "OLL 47",
            "subsets": ["L"],
            "algs": [
                "F' L' U' L U L' U' L U F",
                "R' U' R' F R F' R' F R F' U R",
                "U' F R' F' R U2 R U' R' U R U2 R'",
                "U' R' F' U' F U F' U' F U R"
            ]
        },
        {
            "name": "OLL 48",
            "subsets": ["L"],
            "algs": [
                "F R U R' U' R U R' U' F'",
                "U2 f U R U' R' U R U' R' f'",
                "R U2 R' U' R U R' U2 R' F R F'",
                "F R' F' U2 R U R' U R2 U2 R'"
            ]
        },
        {
            "name": "OLL 49",
            "subsets": ["L"],
            "algs": [
                "U2 r U' r2 U r2 U r2 U' r",
                "l U' l2 U l2 U l2 U' l",
                "R B' R2 F R2 B R2 F' R",
                "U F U R U' R' F' R' U' R U' R' U2 R"
            ]
        },
        {
            "name": "OLL 50",
            "subsets": ["L"],
            "algs": [
                "r' U r2 U' r2 U' r2 U r'",
                "U2 R' F R2 B' R2 F' R2 B R'",
                "U' R U2 R' U' R U' R' F R U R' U' F'",
                "U2 l' U l2 U' l2 U' l2 U l'"
            ]
        },
        {
            "name": "OLL 51",
            "subsets": ["Line"],
            "algs": [
                "U2 F U R U' R' U R U' R' F'",
                "f R U R' U' R U R' U' f'",
                "U' R' U' R' F R F' R U' R' U2 R",
                "U r' F' U' F U F' U' F U r"
            ]
        },
        {
            "name": "OLL 52",
            "subsets": ["Line"],
            "algs": [
                "U2 R' F' U' F U' R U R' U R",
                "R U R' U R U' B U' B' R'",
                "R U R' U R d' R U' R' F'",
                "R' U' R U' R' U F' U F R"
            ]
        },
        {
            "name": "OLL 53",
            "subsets": ["L"],
            "algs": [
                "r' U' R U' R' U R U' R' U2 r",
                "U2 l' U' L U' L' U L U' L' U2 l",
                "U r' U2 R U R' U' R U R' U r",
                "U' l' U2 L U L' U' L U L' U l"
            ]
        },
        {
            "name": "OLL 54",
            "subsets": ["L"],
            "algs": [
                "r U R' U R U' R' U R U2 r'",
                "U' r U2 R' U' R U R' U' R U' r'",
                "U2 l U L' U L U' L' U L U2 l'",
                "U' r U r' R U R' U' R U R' U' r U' r'"
            ]
        },
        {
            "name": "OLL 55",
            "subsets": ["Line"],
            "algs": [
                "U R' F U R U' R2 F' R2 U R' U' R",
                "R U2 R2 U' R U' R' U2 F R F'",
                "U R' F R U R U' R2 F' R2 U' R' U R U R'",
                "U F U' R2 D R' U2 R D' R2 U F'"
            ]
        },
        {
            "name": "OLL 56",
            "subsets": ["Line"],
            "algs": [
                "r U r' U R U' R' U R U' R' r U' r'",
                "r U r' U R U' R' M' U R U2 r'",
                "F R U R' U' R F' r U R' U' r'",
                "r U r' U R U' R' U R U' M' U' r'"
            ]
        },
        {
            "name": "OLL 57",
            "subsets": ["Corners oriented"],
            "algs": [
                "R U R' U' M' U R U' r'",
                "U R U' R' S' R U R' S",
                "U S R' F R S' R' F' R",
                "U R U R' S' R U' R' S"
            ]
        }
    ]
}