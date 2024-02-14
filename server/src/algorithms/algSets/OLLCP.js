import { STICKERS as S } from "../rubiks-viz/pieces";

export let algSet = {
    "puzzle": "3x3",
    "gray": [S.FU, S.LU, S.BU, S.RU],
    "cases": [
        {
            "name": "OLLCP1 1",
            "algs": [
                "R U2 R2 F R F' U2 R' F R F'",
                "r U2 R2 U' R U' r' U2 F R F'",
                "L' U2 L2 F' L' F U2 L F' L' F",
                "U2 x' R' F2 R2 U' R' U F2 R U' R' U x"
            ]
        },
        {
            "name": "OLLCP1 2",
            "algs": [
                "U F R U R U2 R' F R2 F' R' U2 R2 U F'",
                "U F R U R' U' F' r' U r2 U' r2 U' r2 U r'",
                "U F R U R' U' F' U2 R' F R2 B' R2 F' R2 B R'"
            ]
        },
        {
            "name": "OLLCP1 3",
            "algs": [
                "U2 R U2 R2 F R F' U2 R' F R F'",
                "x' R' F2 R2 U' R' U F2 R U' R' U x",
                "U2 l' U2 L2 U L' U l U2 F' L' F",
                "U2 R U B' R B R2 U' R' F R F'"
            ]
        },
        {
            "name": "OLLCP1 4",
            "algs": [
                "U R U' R2 D' r U' r' D R2 U R'",
                "U' R' U R2 D r' U r D' R2 U' R"
            ]
        },
        {
            "name": "OLLCP1 5",
            "algs": [
                "M R U R' U R U' R' U r U2 r' U' M'",
                "r U R' U R' r2 U' R' U R' r2 U2 r'",
                "r' U' R U' r2 R U R U' r2 R U2 r",
                "r' R2 U R' U R U' R' U r U2 r' U' M'"
            ]
        },
        {
            "name": "OLLCP1 6",
            "algs": [
                "U' R U' R2 D' r U' r' D R2 U R'",
                "U R' U R2 D r' U r D' R2 U' R"
            ]
        },
        {
            "name": "OLLCP2 1",
            "algs": [
                "U2 R U R' U F' U2 F R U' R2 F R F'",
                "U2 R U R' F' U' R U R' U' R' F R U' R' F R F'",
                "F' L F L2 U' L F U2 F' U L' U L"
            ]
        },
        {
            "name": "OLLCP2 2",
            "algs": [
                "r' D R2 U R' U2 R U' R2 D' r",
                "r D' R2 U' R U2 R' U R2 D r'",
                "R' F' U' F U M U2 R U R' U r",
                "U' F R U R' U' F' l U L' U L U2 l'"
            ]
        },
        {
            "name": "OLLCP2 3",
            "algs": [
                "U2 F R' F' R2 U R' F' U2 F U' R U' R'",
                "U2 F R' F' R U R' F' R U R U' R' U F R U' R'",
                "L' U' L U' F U2 F' L' U L2 F' L' F",
                "L' U' L F U L' U' L U L F' L' U L F' L' F"
            ]
        },
        {
            "name": "OLLCP2 4",
            "algs": [
                "U R' U R2 D r' U' r D' R2 U' R",
                "U' R U' R2 D' r U r' D R2 U R'"
            ]
        },
        {
            "name": "OLLCP2 5",
            "algs": [
                "R' U2 r U' r' U2 r U r' U2 R",
                "U r U r' U2 R U2 R' U2 r U' r'",
                "F R U R' U' F' f R U R' U' f'",
                "U2 f U R U' R' S' U R U' R' F'"
            ]
        },
        {
            "name": "OLLCP2 6",
            "algs": [
                "F R' F' U2 r U R' U R2 U2 r'",
                "U2 F R' F' R U2 F R' F' R2 U2 R'",
                "U2 F' L F U2 l' U' L U' L2 U2 l"
            ]
        },
        {
            "name": "OLLCP3 1",
            "algs": [
                "U F R U R' U' F' r' U2 R U R' U r"
            ]
        },
        {
            "name": "OLLCP3 2",
            "algs": [
                "U' F' r U R' U r' F2 R U2 R' F R",
                "L' U' L U L F' L' F f' L' U' L U f"
            ]
        },
        {
            "name": "OLLCP3 3",
            "algs": [
                "U R' F2 R2 U2 R' F R U2 R2 F2 R",
                "U L F2 L2 U2 L F L' U2 L2 F2 L'",
                "U' x' R U2 R2 F2 R U R' F2 R2 U2 R' x",
                "U F R U' R' U' R U R' F' U' R U R' U' R' F R F'"
            ]
        },
        {
            "name": "OLLCP3 4",
            "algs": [
                "R f' U' f U R D r' U' r D' R'",
                "U' F U F' l' U' M U2 L U' l' U' l",
                "r U' r' U' R U2 M' U' r' F' U F"
            ]
        },
        {
            "name": "OLLCP3 5",
            "algs": [
                "M R U R' U r U2 r' U M'",
                "r' R2 U R' U r U2 r' U M'",
                "U' f R U R' U' f' U' F R U R' U' F'",
                "U' S U R U R2 U' R2 U R U S'"
            ]
        },
        {
            "name": "OLLCP3 6",
            "algs": [
                "U' r U r' U2 r U2 R' U r' F R F'",
                "f U R U' R' f' F R' F' R U R U' R'",
                "U' L F L' U2 L F2 l' U L' U l F'"
            ]
        },
        {
            "name": "OLLCP4 1",
            "algs": [
                "U' x' R U2 R2 F2 R U' R' F2 R2 U2 R' x",
                "U R' F2 R2 U2 R' F' R U2 R2 F2 R",
                "U R' U' R U l' U2 L U L2 B2 L U l",
                "U L F2 L2 U2 L F' L' U2 L2 F2 L'"
            ]
        },
        {
            "name": "OLLCP4 2",
            "algs": [
                "U' r' U' R U' R' U2 r F U R U' R' F'",
                "U F' L' U' L U F l U2 L' U' L U' l'"
            ]
        },
        {
            "name": "OLLCP4 3",
            "algs": [
                "U' F R' F' r U' R U2 r' U2 r U' r'",
                "U2 R U R' U' R' F R S R U R' U' f'",
                "U2 F' U' F R U R D r' U r D' R2",
                "U' F l' U' L U' l F2 L' U2 L F' L'"
            ]
        },
        {
            "name": "OLLCP4 4",
            "algs": [
                "U' R D r' U r D' R' U' B' R B R'",
                "U2 R' F R F' U' S R' U' R U R S'",
                "U' F' U' F r U M U2 R' U r U r'",
                "U' R D r' U r D' R' d' R' F R F'"
            ]
        },
        {
            "name": "OLLCP4 5",
            "algs": [
                "U2 M U' r U2 r' U' R U' R' M'",
                "M' R' U' R U' r' U2 r U' M",
                "U f R U R' U' f' U F R U R' U' F'",
                "U2 M U' r U2 r' U' R U' R2 r"
            ]
        },
        {
            "name": "OLLCP4 6",
            "algs": [
                "U2 f' U' L' U L f F' L F L' U' L' U L",
                "U' R' F' R U2 R' F2 r U' R U' r' F"
            ]
        },
        {
            "name": "OLLCP5 1",
            "algs": [
                "U' r D' R2 U' R U R' U R2 D r'"
            ]
        },
        {
            "name": "OLLCP5 2",
            "algs": [
                "U2 l' U2 L F' L F L' U L' U l",
                "r' U2 l U' R U l' U R' U r",
                "r' U2 R B' R B R' U R' U r"
            ]
        },
        {
            "name": "OLLCP5 3",
            "algs": [
                "U F U' R2 D R' U R D' R2 U F'",
                "U R' F R U R' F' R U F U' R U' R' F'"
            ]
        },
        {
            "name": "OLLCP5 4",
            "algs": [
                "L F' L' F l' U' l U2 M' U' M"
            ]
        },
        {
            "name": "OLLCP5 5",
            "algs": [
                "U l' U2 L U L' U l",
                "x D' R2 U R U' R D x'",
                "U' r' U2 R U R' U r",
                "U' L' U' L2 F' L' F2 U' F'"
            ]
        },
        {
            "name": "OLLCP5 6",
            "algs": [
                "U F' L' U L U' L' U2 L U F"
            ]
        },
        {
            "name": "OLLCP6 1",
            "algs": [
                "U F U' R2 D R' U' R D' R2 U F'",
                "R' F R F' U r' D' r U' r' D r"
            ]
        },
        {
            "name": "OLLCP6 2",
            "algs": [
                "r U2 R' F R' F' R U' R U' r'",
                "U2 l U2 L' B L' B' L U' L U' l'"
            ]
        },
        {
            "name": "OLLCP6 3",
            "algs": [
                "U r' D R2 U R' U' R U' R2 D' r"
            ]
        },
        {
            "name": "OLLCP6 4",
            "algs": [
                "U2 R' F R F' r U r' U2 M' U M",
                "R' F R F' U' r' D' r U r' D r"
            ]
        },
        {
            "name": "OLLCP6 5",
            "algs": [
                "U r U2 R' U' R U' r'",
                "x' D R2 U' R' U R' D' x",
                "U' R U R2 F R F2 U F",
                "U' l U2 L' U' L U' l'"
            ]
        },
        {
            "name": "OLLCP6 6",
            "algs": [
                "U F R U' R' U R U2 R' U' F'"
            ]
        },
        {
            "name": "OLLCP7 1",
            "algs": [
                "L' U2 L U2 L F' L' F",
                "L' U2 L U2 r U' r' F",
                "z U' R2 U z' U2 r U' r' F"
            ]
        },
        {
            "name": "OLLCP7 2",
            "algs": [
                "U2 L' U2 L F' L F L' U L' U L",
                "U R' U' F R' F' R U' R U R' U R",
                "R' U2 R U R' U F' U' F U R",
                "x' R' F2 R U' R U R' x U R' U R"
            ]
        },
        {
            "name": "OLLCP7 3",
            "algs": [
                "U2 R' U2 R U R' U R2 U R' U' R' F R F'",
                "r U R' U' r' F R F' r U R' U R U2 r'",
                "U2 r' R' D' R U' R' D R U' R U R' U r",
                "U' r U' L U L' U2 R' U' l U2 F' L'"
            ]
        },
        {
            "name": "OLLCP7 4",
            "algs": [
                "R U' R' U' F' U2 F U2 R U2 R'",
                "R U R' U' R' F R U R U2 R' U' R U R' F'",
                "U2 r U' r' U' r U r' R y R U R' F'",
                "U R U2 R' U' R U R' U2 R' F R2 U R' U' F'"
            ]
        },
        {
            "name": "OLLCP7 5",
            "algs": [
                "r U R' U R U2 r'",
                "U2 l U L' U L U2 l'"
            ]
        },
        {
            "name": "OLLCP7 6",
            "algs": [
                "F R' F' R U2 R U2 R'"
            ]
        },
        {
            "name": "OLLCP8 1",
            "algs": [
                "U2 r R D R' U R D' R' U R' U' R U' r'",
                "U2 R U2 R' U' R U' R' F R U' R' U R U R' F'",
                "U F R' F' R U R U' R2 U' R U' R' U2 R",
                "U' l' U R' U' R U2 L U r' U2 F R"
            ]
        },
        {
            "name": "OLLCP8 2",
            "algs": [
                "R U2 R' F R' F' R U' R U' R'",
                "U2 R' D R2 U' R2 F R F' R U R2 D' R"
            ]
        },
        {
            "name": "OLLCP8 3",
            "algs": [
                "U2 R U2 R' U2 R' F R F'"
            ]
        },
        {
            "name": "OLLCP8 4",
            "algs": [
                "U' M' U M U2 R' F R F' r U r'",
                "U' M' U M U2 l' U l F' L F L'",
                "U2 L' U L U F U2 F' U2 L' U2 L"
            ]
        },
        {
            "name": "OLLCP8 5",
            "algs": [
                "U2 l' U' L U' L' U2 l",
                "r' U' R U' R' U2 r",
                "U2 R' F' r U' r' F2 R"
            ]
        },
        {
            "name": "OLLCP8 6",
            "algs": [
                "U2 F' L F L' U2 L' U2 L"
            ]
        },
        {
            "name": "OLLCP9 1",
            "algs": [
                "U r' U' R U' R' U R' D' R U R' D R r",
                "U2 l U F2 L' U L U2 R U' R' U l'",
                "U2 R B U2 r' U L U2 R U' R' U l'"
            ]
        },
        {
            "name": "OLLCP9 2",
            "algs": [
                "U' r U2 R' U' R U R2 F R F' R U2 r'",
                "L' U' L U' L F' L' F L' U2 L",
                "U' R' U' R U' R' U R' F R F' U R",
                "U2 R' U' F' U F U' R U' R' U2 R"
            ]
        },
        {
            "name": "OLLCP9 3",
            "algs": [
                "U2 R U R' U' R' F R2 U R' U' F'"
            ]
        },
        {
            "name": "OLLCP9 4",
            "algs": [
                "U R U' R2 F' U' F U R2 U' R' U R U R'",
                "U' F' U' F r U' r' U r U r'",
                "U2 F R' F' R U2 R U' R' U R U' R' U R U2 R'",
                "U2 R' U' R y' x' R U' R' F R U l'"
            ]
        },
        {
            "name": "OLLCP9 5",
            "algs": [
                "U M R U2 R' U' R U' R' U' M'",
                "U2 M' U' R U2 R' U' R U' R' U' M",
                "U R U2 R' M' U' R U' R' U M",
                "U r' R2 U2 R' U' R U' R' U' M'"
            ]
        },
        {
            "name": "OLLCP9 6",
            "algs": [
                "U2 R U R2 F' U' F U R U' R U' R'",
                "U2 l' U2 L U' R U2 r' F U' R U' R'",
                "U' F R U R' U' R U' R' U R U2 R' U' F'"
            ]
        },
        {
            "name": "OLLCP10 1",
            "algs": [
                "U' R U R2 F' U' F R2 U' R2 U2 R",
                "L' U' L U L F' L2 U' L U F",
                "U2 R' U' R U R U R' U' R' F R F' R' U R"
            ]
        },
        {
            "name": "OLLCP10 2",
            "algs": [
                "U2 R U R' U R' F R F' R U2 R'",
                "U' L U L' U L U' L F' L' F U' L'",
                "U' F U R U' R' d R' U R U2 R'",
                "U' z U R U' R U R' U F' U' F R' U"
            ]
        },
        {
            "name": "OLLCP10 3",
            "algs": [
                "r' U' F2 R U' R' U2 r' F r U' r",
                "L' B' U2 l U' R' U2 L' U L U' r",
                "U' r U R' U R U' R D R' U' R D' R' r'"
            ]
        },
        {
            "name": "OLLCP10 4",
            "algs": [
                "U' F U F' R' F R U' R' F' R",
                "U2 R U R' y' r' U r U' r' U' r",
                "U2 R U R' y R' F R U' R' F' R"
            ]
        },
        {
            "name": "OLLCP10 5",
            "algs": [
                "U' R' U2 r' R2 U R' U R U' M'",
                "U' M' R' U2 R U R' U R U M",
                "U' R' U2 R U S' R' U R S",
                "U' r R2 U2 R U R' U R U r' R"
            ]
        },
        {
            "name": "OLLCP10 6",
            "algs": [
                "r U2 R' U L' U2 l F' U L' U L",
                "U' F' L' U' L U L' U L U' L' U2 L U F",
                "U2 R' U' R U F R U R' U' F' R' U R"
            ]
        },
        {
            "name": "OLLCP11 1",
            "algs": [
                "U2 r U R' U R2 D R' U2 R D' R' r'",
                "U2 F R U R2 U' R f' R' U R S",
                "R' F' U F R2 D r' U' r D' R'",
                "U2 F R U F D R D' F' R U' R2 F'"
            ]
        },
        {
            "name": "OLLCP11 2",
            "algs": [
                "U2 r U R' U R' F R F' R U2 r'",
                "U' f U R U' R f' R2 F R F' R",
                "U F R U R' U' R B' R B R2 F'",
                "l U L' U r' U L U' r U2 l'"
            ]
        },
        {
            "name": "OLLCP11 3",
            "algs": [
                "U r' U' R U' R' U2 F R F' r U R'",
                "U R U2 R' F R' U' R2 U' R2 U F' U R",
                "x' D' F2 R U R' D R U' R U' R' U R' x",
                "U R' U' R U' R' U2 F R U R' F' R F U' F'"
            ]
        },
        {
            "name": "OLLCP11 4",
            "algs": [
                "U2 R U R' U' R' F R F' U2 F R U' R' U R U R' F'",
                "R2 D r' U' r D' R' U2 R' F' U F"
            ]
        },
        {
            "name": "OLLCP11 5",
            "algs": [
                "U2 S' U2 R U R' U R U2 R' S",
                "M R U R' U R U2 R' U M'",
                "r' R2 U R' U R U2 R' U M'",
                "U' S U R U R' U R U2 R' S'"
            ]
        },
        {
            "name": "OLLCP11 6",
            "algs": [
                "f U R U' R2 F' R U R U' R' S'",
                "U2 R U R' U' R' F R F' U2 R U R' U' R' F R F'",
                "L F' L F' l' U2 L' U l U2 F' L'"
            ]
        },
        {
            "name": "OLLCP12 1",
            "algs": [
                "U2 F R U R' U F' U' R' F R U' R' F' R",
                "x D B2 R' U' R D' R' U R' U R U' R x'",
                "U l U L' U L U2 x U' L' U R' U' L"
            ]
        },
        {
            "name": "OLLCP12 2",
            "algs": [
                "l' U' L U' L F' L' F L' U2 l",
                "U2 r' U' R U' l U' R' U l' U2 r",
                "U2 r' U' R U' R B' R' B R' U2 r"
            ]
        },
        {
            "name": "OLLCP12 3",
            "algs": [
                "U2 r' U' R U' R2 D' R U2 R' D R r",
                "R B U' B' R2 D' r U r' D R",
                "U F R U' R' F2 u' r U r' D R"
            ]
        },
        {
            "name": "OLLCP12 4",
            "algs": [
                "U2 F R U' R' U R U R' F' U R U R' U' R' F R F'",
                "R2 D' r U r' D R F' U' F R",
                "R2 D' r U r' D R U2 R y R U' R'"
            ]
        },
        {
            "name": "OLLCP12 5",
            "algs": [
                "M' R' U' R U' R' U2 R U' M",
                "U F R U R' U' F' U F R U R' U' F'",
                "U2 S' r' F' r U' r' F2 r U2 S",
                "U2 R r2 F' r U' r' F2 r U' M'"
            ]
        },
        {
            "name": "OLLCP12 6",
            "algs": [
                "U' F U R U2 R' U R U R' U R U' R' F'",
                "R U R' U' R' F R2 U' R' U R U2 R' U' F'",
                "U2 R' F R' F r U2 R U' r' U2 F R",
                "R2 D' r U r' F r U r' F2 D R2"
            ]
        },
        {
            "name": "OLLCP13 1",
            "algs": [
                "U2 f R U R2 U' R' U R U' f'",
                "F U R U2 R' U' R U R' F'"
            ]
        },
        {
            "name": "OLLCP13 2",
            "algs": [
                "U R' U2 R U R' F R' F' R2 U' R' U2 R",
                "R' U2 R U R' U R2 U B U' B' R'",
                "R' U2 R U R' U R U F U R U' R' F'",
                "U R U R' U R U2 R' U R' U' F' U F R"
            ]
        },
        {
            "name": "OLLCP13 3",
            "algs": [
                "R U R' U' R' F R F' R U R' U R U2 R'",
                "U R' U' R U' R' U R F R' F' U F R F'",
                "U R' U' R U' R' U R y r U' r' U r U r'"
            ]
        },
        {
            "name": "OLLCP13 4",
            "algs": [
                "r U' r' U' r U r' F' U F",
                "r U' r' U' r U r' y L' U L",
                "r U' r' U' r U r' y' R' U R",
                "U2 l U' R' F' R U R' x y R' U R"
            ]
        },
        {
            "name": "OLLCP13 5",
            "algs": [
                "U2 R' U' R U' r U R2 U R2 U2 r'",
                "U2 R' U' F' U F R U R U B U' B' R'",
                "L' U' L U' l U L2 U L2 U2 l'",
                "U2 F R U' R' U2 R U R' U R U' R' F'"
            ]
        },
        {
            "name": "OLLCP13 6",
            "algs": [
                "F U R U' R2 F' R U R U' R'"
            ]
        },
        {
            "name": "OLLCP14 1",
            "algs": [
                "U' R U R' U R U' R' y' r' U r U' r' U' r",
                "F R U' R' U R U R' F' R U2 R' U' R U' R'",
                "U2 L' U' L U L F' L' F L' U' L U' L' U2 L",
                "U L U L' U L U' L' y' l' U l U' l' U' l"
            ]
        },
        {
            "name": "OLLCP14 2",
            "algs": [
                "U' R U2 R' U' R U R2 F R F' R U2 R'",
                "U2 F' R U2 R' U2 R' F2 R2 U R' U' F'",
                "R U2 R' U' R U' R' U F' U' r' F r F",
                "U' R U R' U R U' R' U R' F R F' R U2 R'"
            ]
        },
        {
            "name": "OLLCP14 3",
            "algs": [
                "U2 r U R' U' r' F R2 U R' U' F'",
                "U R' U' R F U R U' R' F' U' R' U R",
                "B' U' R' U2 R U R' U' R B",
                "U2 F' U' r' F2 r U' F R U' R'"
            ]
        },
        {
            "name": "OLLCP14 4",
            "algs": [
                "U2 l' U l U l' U' l F U' F'",
                "U2 R' F R U R' F' R F U' F'",
                "r' U r U r' U' r y R U' R'",
                "U2 R' F R U R' F' R y' R U' R'"
            ]
        },
        {
            "name": "OLLCP14 5",
            "algs": [
                "U2 R U R' U r' U' R2 U' R2 U2 r",
                "U2 R U B U' B' R2 U2 R U R' F' U F R",
                "U R' U' F R' F' R2 f U R U' f'",
                "U' R' F' R U2 R' U' R U' R' U2 F R"
            ]
        },
        {
            "name": "OLLCP14 6",
            "algs": [
                "U2 R U2 R' U2 R U' R' F' U' F R U R'",
                "U2 F' U' r' F r2 U r' U' r' F r",
                "U2 F' U' L' U L2 F L' U' L' U L",
                "f R' D' R U R' D R2 U' R' f'"
            ]
        },
        {
            "name": "OLLCP15 1",
            "algs": [
                "U' r U r' U' L U r U2 r' F U' L'",
                "U2 R U R' U l' U2 L U' R U2 r' F",
                "U2 R' U2 R U R' F U R U' R' F' R",
                "U2 R' U' R F R' U R F R' F' R U' F'"
            ]
        },
        {
            "name": "OLLCP15 2",
            "algs": [
                "U F R U R' U' F' R' U2 R U R' U R",
                "U f' U' L' U L f R' U2 R U R' U R",
                "U' F' L' U' L U F L' U2 L U L' U L",
                "U' f U R U' R F' R2 F R F' R S'"
            ]
        },
        {
            "name": "OLLCP15 3",
            "algs": [
                "U r' U r U r' U' r y R U R' U' R U' R'",
                "U' L' U2 L U L' U L F' L F L' U' L' U L",
                "U r' U r U r' U' r f R f' U' f R' f'",
                "U' l' U l U l' U' l y' R U R' U' R U' R'"
            ]
        },
        {
            "name": "OLLCP15 4",
            "algs": [
                "U R U2 R' U' R U R' U' R U R' U2 R' F R F'",
                "U' L' R U R' U' L y' r' U' R U M'",
                "U' f U f' R' f R U' R' f' R",
                "U F R F' L' F U R' U' F' L"
            ]
        },
        {
            "name": "OLLCP15 5",
            "algs": [
                "U' r' U' M' U' R U r' U r",
                "U' r' U' r R' U' R U r' U r",
                "U l' U' l L' U' L U l' U l",
                "U R' F' R r' F' r U R' F R"
            ]
        },
        {
            "name": "OLLCP15 6",
            "algs": [
                "U2 R U2 R2 U' R2 B U' B' R2 U R",
                "U' L F' L' U' L U F L' U L U2 L'",
                "L U2 L2 U' L2 F U' F' L2 U L"
            ]
        },
        {
            "name": "OLLCP16 1",
            "algs": [
                "U' R U2 R' U' R U' R' F R' F' R U R U' R'",
                "U' r U' r' U' r U r' y' R' U' R U R' U R",
                "U2 F R' F' U' F R F' R' U' R U R' U R"
            ]
        },
        {
            "name": "OLLCP16 2",
            "algs": [
                "U' F R U R' U' F' R U2 R' U' R U' R'",
                "U R U R' U' R' F D' R U R' D R U' F'"
            ]
        },
        {
            "name": "OLLCP16 3",
            "algs": [
                "l' U' l U R' U' l' U2 l F' U R",
                "U2 S R' U' R U F R2 U R' U' f'",
                "U L U2 L' U' L F' U' L' U L F L'",
                "U' R U2 R' U' R B' U' R' U R B R'"
            ]
        },
        {
            "name": "OLLCP16 4",
            "algs": [
                "U L' U2 L U L' U' L U L' U' L U2 L F' L' F",
                "U' R L' U' L U R' y' r U R' U' M",
                "U2 S R' F R f' r U R' U' M"
            ]
        },
        {
            "name": "OLLCP16 5",
            "algs": [
                "U r U r' R U R' U' r U' r'",
                "U r U M U R' U' r U' r'",
                "U' l U l' L U L' U' l U' l'",
                "U R U R' U' R' U' R U R U' r' U' R' U r"
            ]
        },
        {
            "name": "OLLCP16 6",
            "algs": [
                "U' R' F R U R' U' F' R U' R' U2 R",
                "U2 R D r' U r D' R2 F' U' F R",
                "U S' R' U' R f R' U R2 U' R' F'"
            ]
        },
        {
            "name": "OLLCP17 1",
            "algs": [
                "l' U l F' U2 F' U L' U L F",
                "U2 L' U' L U' L F' L' F U2 L F' L' F",
                "U' F U R U' R' F' U F R U' R' U R U R' F'"
            ]
        },
        {
            "name": "OLLCP17 2",
            "algs": [
                "U2 M' U M R U2 R2 F R F' r U2 r'",
                "U' r U2 r' R' F R F' R U2 R' M' U M",
                "U M' U' l L2 U2 L2 F' L' F l' U2 l",
                "U' r' R U' r R2 U2 R2 x' U' R' U L' U2 r"
            ]
        },
        {
            "name": "OLLCP17 3",
            "algs": [
                "U' F R' F' R2 r' U R U' R' U' M'",
                "U f R U R' U' f' U' R U R' U' R' F R F'",
                "U' F R' F' R U S' R U' R' S",
                "U2 R' F' U2 F2 U R U' R' F' U2 R"
            ]
        },
        {
            "name": "OLLCP17 4",
            "algs": [
                "F' L F L2 l U' L' U L U M'",
                "F' r U r' U' S r' F r S'",
                "M' U M U2 R' F R U F U' F'",
                "U' R B U2 B2 U' R' U R B U2 R'"
            ]
        },
        {
            "name": "OLLCP17 5",
            "algs": [
                "U F' R U2 r' U F2 U' r U2 R' F",
                "U' R U2 r' U' R U M' R' F2 r U r' F",
                "U' r U R' U R U2 r' U2 r U2 R' U' R U' r'",
                "U' R U2 r' U' R U r R2 F2 r U r' F"
            ]
        },
        {
            "name": "OLLCP17 6",
            "algs": [
                "U R U R' U R' F R F' U2 R' F R F'",
                "f R U R' U' y x U R' U' R' F R F'",
                "U2 F U R U' R' U F' L' U' L y' R U' R'",
                "U' r U' r' F U2 F U' R U' R' F'"
            ]
        },
        {
            "name": "OLLCP18 1",
            "algs": [
                "R U2 R' F' U2 F R U' R2 F R F'",
                "F R' F' R2 U R' F' U2 F R U2 R'",
                "R U R2 F' U' F U R U2 R' F R F'",
                "F R' F' R U2 R' U' F' U F R2 U' R'"
            ]
        },
        {
            "name": "OLLCP18 2",
            "algs": [
                "U' R U2 R2 F R F' U2 M' U R U' r'",
                "U' F S' R U' R' S R U2 R' U' F'",
                "U r' U' R U M' U' R2 F R F' U R",
                "U2 R D r' U' r D' R' U' R2 F R F' R"
            ]
        },
        {
            "name": "OLLCP18 3",
            "algs": [
                "U r U' r' U r U r' U' F U R U' R2 F' R",
                "r' U' R U' R' U2 F2 r U2 r U' r' F",
                "U' R U R2 F R F2 U' F U2 F R' F' R",
                "U2 R' F2 r U r2 F2 r U' r' F2 r F R"
            ]
        },
        {
            "name": "OLLCP18 4",
            "algs": [
                "U R' F R F' U' F' U r' F' r U F",
                "U R' F R F' U2 R' F R F' U y' R' U R",
                "U' R' F' U' F U' R U2 R f' U' f",
                "F' L' U' L U' y L U2 L F' L' F"
            ]
        },
        {
            "name": "OLLCP18 5",
            "algs": [
                "r' U' R U' R' U2 r2 U R' U R U2 r'",
                "U2 r U R' U R U2 r2 U' R U' R' U2 r",
                "U2 l' U' L U' L' U2 l2 U L' U L U2 l'"
            ]
        },
        {
            "name": "OLLCP18 6",
            "algs": [
                "F R U R' U y' R' U2 R' F R F'",
                "U' r U' r' F U F U' R U R' U' F'",
                "F R U R' d R' U2 R' F R F'",
                "U2 F R' F' R U2 F R' F' R U' R U' R'"
            ]
        },
        {
            "name": "OLLCP19 1",
            "algs": [
                "U R U2 R D r' U r D' R' U' R' F' U F",
                "U' F' U' F R U R D r' U' r D' R' U2 R'"
            ]
        },
        {
            "name": "OLLCP19 2",
            "algs": [
                "U' R u2 R' U' R U R' F R u2 R2 F R",
                "U r U r' U' R2 D r' U2 r D' R2 U r U' r'",
                "U r' U' r U R2 D' r U2 r' D R2 U' r' U r",
                "U2 R2 F2 R F' D R U2 R' D' F l' U2 l R"
            ]
        },
        {
            "name": "OLLCP19 3",
            "algs": [
                "R U R' U' R' F R F' r' U2 R U R' U r",
                "U2 R' F R2 U R' U' F' U r U' r' U' r U r'",
                "R' F R F' U2 F' U F2 R' F' R2 U' R'",
                "F R U2 R' F R U R' U' R U R' U' y' R' U R'"
            ]
        },
        {
            "name": "OLLCP19 4",
            "algs": [
                "U' S' R U R' S U' R' F R F'",
                "U2 M U R U R' U' M' R' F R F'",
                "U2 M U R U R' U' r R2 F R F'",
                "F U R U' R2 F' U' F U R U' F'"
            ]
        },
        {
            "name": "OLLCP19 5",
            "algs": [
                "r U2 R' U' R U' r2 U2 R U R' U r",
                "U2 F R U R' U' F' R U2 R2 F R F' R U2 R'",
                "U2 r' U2 R U R' U r2 U2 R' U' R U' r'"
            ]
        },
        {
            "name": "OLLCP19 6",
            "algs": [
                "U S r' F' r S' U r U' r' F",
                "U' F R U' R' F R' F' R U R U R' U' F'",
                "U' R' U' F' U F2 R U R' U' F' U R",
                "U' R' U' F U r U2 r' R U R' F' R"
            ]
        },
        {
            "name": "OLLCP20 1",
            "algs": [
                "R U R' U' R' F R F' R U2 R2 F R F' R U2 R'",
                "U r U R' U' M r' F R2 U' R' U' R U R' F' U M'",
                "U F R' F R2 U R' U' F2 U' r U' r' F",
                "U' F' L F' L2 U' L U F2 U R' F R F'"
            ]
        },
        {
            "name": "OLLCP20 2",
            "algs": [
                "R U' R' S R' F R f' R U' B U2 B' R'",
                "F R U R' U R U' R' U2 F2 r U r' F U F'",
                "F R' F' R U R U' R' f R f' U' r' U' R U M'",
                "F R U' R' S U' R U R' f' r U R' U' M r' F R F' M'"
            ]
        },
        {
            "name": "OLLCP20 3",
            "algs": [
                "U2 R U R' U' R' F R F' R U2 R2 F R F' R U2 R'",
                "U' F R' F R2 U R' U' F2 U' L F' L' F",
                "U F' L F' L2 U' L U F2 U R' F R F'"
            ]
        },
        {
            "name": "OLLCP20 4",
            "algs": [
                "U R U R' U' R' F R F' R U2 R2 F R F' R U2 R'",
                "U2 F R' F R2 U R' U' F2 U' r U' r' F",
                "F' L F' L2 U' L U F2 U R' F R F'",
                "U2 F R' F R2 U R' U' F2 U' L F' L' F"
            ]
        },
        {
            "name": "OLLCP20 5",
            "algs": [
                "S' R U R' S U' M' U R U' r'",
                "S U' S R' F R S2 R' F' R",
                "r' R U R U R' U' r2 R2 U R U' r'",
                "r U R' U' M2 U R U' R' U' M'"
            ]
        },
        {
            "name": "OLLCP20 6",
            "algs": [
                "U' R U R' U' R' F R F' R U2 R2 F R F' R U2 R'",
                "F R' F R2 U R' U' F2 U' r U' r' F",
                "F R' F R2 U R' U' F2 U' L F' L' F",
                "U2 F' L F' L2 U' L U F2 U R' F R F'"
            ]
        },
        {
            "name": "OLLCP21 1",
            "algs": [
                "f R2 S' U' R2 U' R2 U R2 F'",
                "U2 x' M' U' R U' R' U R U2 L' U R' U2 R",
                "U2 R' F R U R' U' R' F' R U R2 U2 R' U' R U' R'",
                "U R U R' U R U2 R' U' R2 D R' U R D' R' U' R'"
            ]
        },
        {
            "name": "OLLCP21 2",
            "algs": [
                "U F R U R' U' R U R' U' R U R' U' F'",
                "U F U R U' R' U R U' R' U R U' R' F'",
                "x' U' R U' R' U R' F2 R U' R U R' U x",
                "U' R U R' U y' R' U R U' R2 F R F' R"
            ]
        },
        {
            "name": "OLLCP21 3",
            "algs": [
                "U2 f R2 S' U' R2 U' R2 U R2 F'",
                "f R U R' U' R F' R U R' U' R' S'",
                "R' F R U R' U' F' R U' R' U R' F R F' U R",
                "U' R U R' U R U2 R' U' R2 D R' U R D' R' U' R'"
            ]
        },
        {
            "name": "OLLCP21 4",
            "algs": [
                "U2 R U R' U R U L' U R' U' L",
                "U2 R' U' R U' R' U' L U' R U L'",
                "U' R' F R U R' U' R' F' R U' R U R' U R",
                "U2 R U R' U R U r' F R' F' r"
            ]
        },
        {
            "name": "OLLCP21 5",
            "algs": [
                "U R U2 R' U' R U R' U' R U' R'",
                "L U L' U L U' L' U L U2 L'",
                "U R' U2 R U R' U' R U R' U R",
                "U' R' U2 R U R' U' R U R' U R"
            ]
        },
        {
            "name": "OLLCP21 6",
            "algs": [
                "R U R' U R U L' U R' U' L",
                "R U R' U R U r' F R' F' r",
                "R' U' R U' R' U' L U' R U L'",
                "R' F' R U2 R U2 R' F U' R U' R'"
            ]
        },
        {
            "name": "OLLCP22 1",
            "algs": [
                "R' U' R U' R' U2 R U' L' U R U' L U R'",
                "R' F2 R U2 R U2 R' F2 U' R U' R'",
                "U M F R' F' r U2 R U' R' U R U2 R'",
                "U R U2 R' U' R U' R2 U L U' R U L'"
            ]
        },
        {
            "name": "OLLCP22 2",
            "algs": [
                "R U D' R U R' D R2 U' R' U' R2 U2 R",
                "U' r U R' U R' F R F' R U' R' U R U2 r'",
                "U x' R U' R' D R U2 R' D' R U2 R' D R U R' D' x",
                "R2 D' R U R' D R U R U' R' U R U R' U R"
            ]
        },
        {
            "name": "OLLCP22 3",
            "algs": [
                "R U R' U' R' F R2 U R' U' R U R' U' F'",
                "R U R' U R U2 R' U' R U' L' U R' U' L",
                "R U2 R' U' R U R' U2 L' U R U' R' L",
                "R U2 R' U' R U R' U2 r' F R F' M'"
            ]
        },
        {
            "name": "OLLCP22 4",
            "algs": [
                "U2 r' F R F' r U' R' U' R U' R'",
                "U2 L' U R U' L U' R' U' R U' R'",
                "U' R U2 R' U R' D' R U2 R' D R2 U' R'",
                "U' R U R' U F' R U2 R' U2 R' F R"
            ]
        },
        {
            "name": "OLLCP22 5",
            "algs": [
                "R U2 R2 U' R2 U' R2 U2 R",
                "R U R' U' R' U2 R U R' U R2 U2 R'",
                "U' R' U' R U' R' U2 R2 U2 R' U' R U' R'",
                "U2 L' U2 L2 U L2 U L2 U2 L'"
            ]
        },
        {
            "name": "OLLCP22 6",
            "algs": [
                "U F U R U' R' U R U2 R' U' R U R' F'",
                "U F R2 U' R2 U R2 U S R2 f'",
                "R' U' F' R U R' U' R' F R2 U2 R' U2 R"
            ]
        },
        {
            "name": "OLLCP23 1",
            "algs": [
                "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R",
                "L' U L U' F R' F R F2 L F' L' F",
                "U' r U R' U' r' F R2 x' U R' D' R U' R' x",
                "U F R' F' R F2 r U r' F U' R U R'"
            ]
        },
        {
            "name": "OLLCP23 2",
            "algs": [
                "R' U2 R F U' R' U' R U F'",
                "R' U2 R U2 R' F' R U R' U' R' F R2",
                "R2 D' R U R' D R U R U' R' U' R"
            ]
        },
        {
            "name": "OLLCP23 3",
            "algs": [
                "F R U' R' U R U R' U R U' R' F'",
                "U2 R' F2 R U2 R U2 R' F2 R U2 R'"
            ]
        },
        {
            "name": "OLLCP23 4",
            "algs": [
                "R2 D' R U2 R' D R U2 R"
            ]
        },
        {
            "name": "OLLCP23 5",
            "algs": [
                "R' U' R U' R' U2 R2 U R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP23 6",
            "algs": [
                "R' U R U R' F' R U R' U' R' F R2 U' R' U' R",
                "L2 D L' U2 L D' L' U2 L'",
                "x' R U' R' D R U2 R' D' R U' R' x",
                "R' U' R U' R' U2 R2 U' L' U R' U' L"
            ]
        },
        {
            "name": "OLLCP24 1",
            "algs": [
                "R' U L' U' L R U2 L' U' L",
                "R' U R U2 L' R' U R U' L"
            ]
        },
        {
            "name": "OLLCP24 2",
            "algs": [
                "U2 R' U' R U' R' U R U R' F' R U R' U' R' F R2",
                "R' U R2 D r' U2 r D' R2 U' R"
            ]
        },
        {
            "name": "OLLCP24 3",
            "algs": [
                "U2 F R U R' U' R U' R' U' R U R' F'"
            ]
        },
        {
            "name": "OLLCP24 4",
            "algs": [
                "U' r U R' U' r' F R F'",
                "x R' U' R D' R' U R D x'"
            ]
        },
        {
            "name": "OLLCP24 5",
            "algs": [
                "R U2 R' U' R U' R2 U2 R U R' U R",
                "U2 R' U2 R U R' U R2 U2 R' U' R U' R'",
                "U' R U R' U R U2 R' U2 R' U' R U' R' U2 R"
            ]
        },
        {
            "name": "OLLCP24 6",
            "algs": [
                "U R' F' r U R U' r' F",
                "U' F R F' r U R' U' r'",
                "U2 x' R U R' D R U' R' D' x",
                "U l' U' L U R U' r' F"
            ]
        },
        {
            "name": "OLLCP25 1",
            "algs": [
                "U2 R' U2 R' D' R U2 R' D R2"
            ]
        },
        {
            "name": "OLLCP25 2",
            "algs": [
                "U' r U2 R2 F R F' R U2 r'",
                "U R' U' R U R' F' R U R' U' R' F R2"
            ]
        },
        {
            "name": "OLLCP25 3",
            "algs": [
                "U' F R' F' r U R U' r'",
                "U2 x' R U' R' D R U R' D' x",
                "x D' R' U' R D R' U R x'"
            ]
        },
        {
            "name": "OLLCP25 4",
            "algs": [
                "F' r U R' U' r' F R",
                "U2 r U R U' r' F R' F'",
                "U x' D R U R' D' R U' R' x"
            ]
        },
        {
            "name": "OLLCP25 5",
            "algs": [
                "U R U2 R' U' R U R' U' R U R' U' R U' R'",
                "R' U' R U' R' U R U' R' U R U' R' U2 R",
                "U' R U R' U R U2 R' U R' U' R U' R' U2 R",
                "U R U R' U R U' R' U R U' R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP25 6",
            "algs": [
                "U2 R' F' R U R' U' R' F R2 U' R' U2 R",
                "U' R U2 R D R' U2 R D' R2",
                "U x' R U R' D R U2 R' D' R U R' x"
            ]
        },
        {
            "name": "OLLCP26 1",
            "algs": [
                "U2 R2 D R' U R D' R' U R' U' R U' R'"
            ]
        },
        {
            "name": "OLLCP26 2",
            "algs": [
                "R U2 r' F R' F' r U' R U' R'",
                "L' U' L U' R U' L' U R' U2 L",
                "U2 R' U' R U' L U' R' U L' U2 R"
            ]
        },
        {
            "name": "OLLCP26 3",
            "algs": [
                "U2 R U2 R' U2 L' U R U' R' L"
            ]
        },
        {
            "name": "OLLCP26 4",
            "algs": [
                "R' U L U' R U L'",
                "U2 L' U R U' L U R'"
            ]
        },
        {
            "name": "OLLCP26 5",
            "algs": [
                "U2 L' U' L U' L' U2 L",
                "U R U2 R' U' R U' R'",
                "R' U' R U' R' U2 R"
            ]
        },
        {
            "name": "OLLCP26 6",
            "algs": [
                "U2 R L' U' L U R' U2 L' U2 L"
            ]
        },
        {
            "name": "OLLCP27 1",
            "algs": [
                "L' U2 L U2 R U' L' U L R'"
            ]
        },
        {
            "name": "OLLCP27 2",
            "algs": [
                "U2 R U R' U r' F R F' r U2 R'",
                "L U L' U R' z R U R' D R2 U' z'",
                "z U R U' R D' R U R' D R2 U'",
                "F' R U2 R' U2 R' F2 R U R U' R' F'"
            ]
        },
        {
            "name": "OLLCP27 3",
            "algs": [
                "U' R U R' U R U' R D R' U' R D' R2"
            ]
        },
        {
            "name": "OLLCP27 4",
            "algs": [
                "U2 L U' R' U L' U' R",
                "R U' L' U R' U' L"
            ]
        },
        {
            "name": "OLLCP27 5",
            "algs": [
                "U L' U2 L U L' U L",
                "R U R' U R U2 R'",
                "U' R' U2 R U R' U R"
            ]
        },
        {
            "name": "OLLCP27 6",
            "algs": [
                "L' R U R' U' L U2 R U2 R'"
            ]
        },
        {
            "name": "OLLCP28 1",
            "algs": [
                "U r U R' F' R U R' U' R' F R2 U' r'",
                "U x L2 U2 R' U' R U2 L' U r'",
                "U' x' R2 U2 L' U' L U2 R' U R' x",
                "U' R2 U R2 U F2 r U r' F2 R F' R'"
            ]
        },
        {
            "name": "OLLCP28 2",
            "algs": [
                "U2 r2 D' r U' r' D r2 F' r' U r F",
                "U M' F R U' R' U' R U R' F' R U R' U' R' F R F' M",
                "U' R U' R' U' F2 u' r U r' D R2",
                "U M' F R' F R2 U' R' U' R U R' F' R U R' U' F' M"
            ]
        },
        {
            "name": "OLLCP28 3",
            "algs": [
                "U' x' R2 U R' F' R U R' U' R' F R2 U' R' U' R' x",
                "r U' L U2 R' U R U2 L2 x'",
                "U' M R U R' F' R U R' U' R' F R2 U' R' U' M'",
                "U2 x' R U' R U2 L' U L U2 R2 x"
            ]
        },
        {
            "name": "OLLCP28 4",
            "algs": [
                "R2 F2 r U r' F2 R F' R",
                "U M' R' U L' U2 R U' R' U2 R L U' M",
                "U2 R' F R F' R U2 r' U r U2 r' U' M'",
                "U2 x' L2 U2 R U R' U2 L U' L x"
            ]
        },
        {
            "name": "OLLCP28 5",
            "algs": [
                "R' F R S R' F' R S'",
                "r U R' U' M U R U' R'",
                "U' M' U' M U2 M' U' M",
                "U2 M' U M U2 M' U M"
            ]
        },
        {
            "name": "OLLCP28 6",
            "algs": [
                "U R' F R' F2 r U' r' F2 R2",
                "U' r' U L' U2 R U' R' U2 r L",
                "r U R' U' r' F R2 U' R' U' R U R' F'",
                "U' x' L' U L' U2 R U' R' U2 L2 x"
            ]
        },
        {
            "name": "OLLCP29 1",
            "algs": [
                "U2 R' U' R U' R' U2 F R U R' U' F' U R",
                "U' M' U' L' U l U2 r2 F r U' r",
                "U' r U R' U R U2 r2 F R F' r U R'",
                "U' x R' U' R D' R' U2 R' U' R2 D x'"
            ]
        },
        {
            "name": "OLLCP29 2",
            "algs": [
                "U2 r2 D' r U r' D r2 U' r' U' r",
                "U r D r' U r D' r2 U r U' r' U' r",
                "U' R F R' U R F' R2 F R U' R' F' R",
                "U R U2 R2 F R F' R U' R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP29 3",
            "algs": [
                "U' R U R' U' R U' R' F' U' F R U R'",
                "U2 R D r' U' r D' R' U r' U' R U M'",
                "F' U' r' F2 r U r' F2 r U F",
                "F' U' L' U2 L U L' U2 L U F"
            ]
        },
        {
            "name": "OLLCP29 4",
            "algs": [
                "U' r U R' U' M r' F R F' M'",
                "U' R' U2 R2 U R' U' R' U2 F R F'",
                "U' S' R U R' U' R' F R F' U S",
                "U2 M U R U R' U' R' F R F' M'"
            ]
        },
        {
            "name": "OLLCP29 5",
            "algs": [
                "U' R' F R' F r U' R U' R U' r' F",
                "r U2 R' U' R U' r' R' U2 R U R' U R",
                "U' r U R' U R U2 r2 F' r U' r' F2 r",
                "F' r U' r2 F r U r' F' r F2"
            ]
        },
        {
            "name": "OLLCP29 6",
            "algs": [
                "U' F R U R' U' F' r' F' r U r U' r' F",
                "U' F R F' r U R2 U' M U R U' R'",
                "U f U R U' F' R U R' U' R' S'",
                "U' M' U' M U' l' U' l F U F' l' U l"
            ]
        },
        {
            "name": "OLLCP30 1",
            "algs": [
                "F R F' r U R2 U R U2 r'",
                "U2 f U f' R B L2 B L B2 R'",
                "U M' U R U' r' U2 l2 F' l' U l'",
                "U R' U' R U' R' U2 R U' R U R' U' R' F R F'"
            ]
        },
        {
            "name": "OLLCP30 2",
            "algs": [
                "U2 R2 U R' B' R U' R2 U R B R'",
                "U r U2 R2 F R F' R U' R' U R U2 r'",
                "U r' D' r U' r' D r2 U' r' U r U r'",
                "F2 L2 F' U R U' R' F L2 F2"
            ]
        },
        {
            "name": "OLLCP30 3",
            "algs": [
                "F U R U2 R' U' R U2 R' U' F'",
                "U' R U f R' U f' R' f U' f'",
                "F U R U' B R' F' R B' R'",
                "U2 f R f' R u R' U R' U' R u' R'"
            ]
        },
        {
            "name": "OLLCP30 4",
            "algs": [
                "R' F' U' F U R U R U R' U' R' F R F'",
                "U F' L' U' L U F R U R' U' R' F R F'",
                "U2 f R U R' U' S' R' F' r U R U' r'",
                "U M' U M U r U r' F' U' F r U' r'"
            ]
        },
        {
            "name": "OLLCP30 5",
            "algs": [
                "F R' F R2 U' R' U' R U R' F2",
                "U2 F U' f R' F' R S' R U' R' U F'",
                "U2 r' U2 R U R' U r R U2 R' U' R U' R'",
                "U L F' L F' l' U L' U L' U l F'"
            ]
        },
        {
            "name": "OLLCP30 6",
            "algs": [
                "U' S' R' U' R f R' U R U' F'",
                "U R' F' r U M R U' r' F M'",
                "R U R2 F' R U R U' R' F U' R' F R F'",
                "U2 M U' L' U' L U L F' L' F M'"
            ]
        },
        {
            "name": "OLLCP31 1",
            "algs": [
                "U' r U2 R' U' R2 U' r' F R' F'",
                "U2 x' D R2 U' R' U2 R' D' R U' l'"
            ]
        },
        {
            "name": "OLLCP31 2",
            "algs": [
                "U' r U2 R' U' R U R' F R' F' R2 U2 r'",
                "U' R' U2 R U R' U' R B' R B R2 U2 R"
            ]
        },
        {
            "name": "OLLCP31 3",
            "algs": [
                "R U2 R' U' F' U F U R U2 R'",
                "U2 R' U r' D' r U' r' D r U' R",
                "R' U' R' F R2 U' R' U2 R U R' F' R"
            ]
        },
        {
            "name": "OLLCP31 4",
            "algs": [
                "U2 F R' F' R U R U R' U' R U' R'",
                "U' R U R' U R U' R' U' R' F R2 U R' U' F'"
            ]
        },
        {
            "name": "OLLCP31 5",
            "algs": [
                "R U2 R' U' R U' R' U r U R' U R U2 r'",
                "L F2 l' U L U L' U l U2 F' L'"
            ]
        },
        {
            "name": "OLLCP31 6",
            "algs": [
                "U' R' U' F U R U' R' F' R",
                "U S' r' F' r U r U' r' f",
                "U2 R' U' r' D' r U r' D r R",
                "U R' F R U R' U' F2 U F R"
            ]
        },
        {
            "name": "OLLCP32 1",
            "algs": [
                "U' r' U2 R U R2 U r B' R B",
                "U R' U' F' U R U R' U' R' F R2 U' R' U2 R",
                "x D' R2 U R U2 R D R' U R x'",
                "U l' U2 L U L2 U l F' L F"
            ]
        },
        {
            "name": "OLLCP32 2",
            "algs": [
                "U' R U2 R' U' R U R' F R' F' R2 U2 R'",
                "U L U2 L' U' L U L' B L' B' L2 U2 L'",
                "U F U' R U R2 D' R U2 R' D R U' F'",
                "U' R2 U' R U R U' R' U' F R' F' U R2"
            ]
        },
        {
            "name": "OLLCP32 3",
            "algs": [
                "L' U2 L U F U' F' U' L' U2 L",
                "F R U R' U' F' U F R' F' R U R U' R'",
                "U2 F U R U R' U' y' R' U2 R U R'",
                "U x' R U R' D R U' R U' R' U R' D' x"
            ]
        },
        {
            "name": "OLLCP32 4",
            "algs": [
                "U' S R U R' U' R' F R f'",
                "U' R U2 R' U' F' U F R U' R'",
                "U L U F' U' L' U L F L'",
                "U' R U B' U' R' U R B R'"
            ]
        },
        {
            "name": "OLLCP32 5",
            "algs": [
                "U2 R' U2 R U R' U R U' r' U' R U' R' U2 r",
                "R U2 R' U F' U' F2 R' F' R2 U2 R'",
                "R' F2 r U' R' U' R U' r' U2 F R"
            ]
        },
        {
            "name": "OLLCP32 6",
            "algs": [
                "U' f R U' R' U S' R U R' F'",
                "U2 F' L F L' U' L' U' L U L' U L",
                "U F U R U' F' r U R' U' r'",
                "R U2 R' F' L' U L F R U2 R'"
            ]
        },
        {
            "name": "OLLCP33 1",
            "algs": [
                "U' R U2 R2 F R2 U R' U' F' U R U R'",
                "U r U' r' U' r U r' U2 r' D' r U' r' D r",
                "U' r U r' R U R' U' R r U' r' F R' F'"
            ]
        },
        {
            "name": "OLLCP33 2",
            "algs": [
                "U r U' r' U' r2 D r' U r D' r2",
                "U' R U' R' U' F' U2 F R' F R F'",
                "U r U' r' U' r U r2 D' r U r' D r",
                "F' U F U R U2 R' F R' F' R"
            ]
        },
        {
            "name": "OLLCP33 3",
            "algs": [
                "U' R U R' F' U' R U R' U' R' F R2 U' R'",
                "U2 R' U2 R U F R' U R2 U' R' F'"
            ]
        },
        {
            "name": "OLLCP33 4",
            "algs": [
                "U' R U R' U' R' F R F'"
            ]
        },
        {
            "name": "OLLCP33 5",
            "algs": [
                "R U2 R' U' R U' R' r' U2 R U R' U r",
                "U' R U R' U R U2 R2 F' r U' r' F2 R",
                "R U' R' U R U' R' F l' U' R U R' U' l"
            ]
        },
        {
            "name": "OLLCP33 6",
            "algs": [
                "U' F R U' R' U R U R' F'",
                "U r' F' r U r U' r' F",
                "U' R' U' R U R B' R' B",
                "U' R' U' R U R f' U' f"
            ]
        },
        {
            "name": "OLLCP34 1",
            "algs": [
                "R U R' S R' F R f' U R U R'",
                "U2 R U R' U' R' F R F' R' U' R U' R' U2 R",
                "U2 R' U' R U' R' U F R U' R' U2 R U R' F' R",
                "U2 R' U' R U' y R U' R' U' F R' F' R"
            ]
        },
        {
            "name": "OLLCP34 2",
            "algs": [
                "U2 R2 D' R F R U R' U' F' U R' D R2",
                "U' R' U' R' F R F' R U' R' U R U' R' U2 R",
                "U2 F2 R2 F L' U' L U F' R2 F2",
                "S' R2 U' R F R' U R2 U' R' F' R S"
            ]
        },
        {
            "name": "OLLCP34 3",
            "algs": [
                "R U2 R2 F R F' R U' R' U' R' F R F'",
                "R' U2 R2 U R2 U R U2 R' F R F'",
                "U2 F R F' r U r' U R' U' r U' r'",
                "f U R U' R' U R' D' R U' R' D R f'"
            ]
        },
        {
            "name": "OLLCP34 4",
            "algs": [
                "U2 F R U R' U' R' F' r U R U' r'",
                "U2 R' U' R d R B r' U' M'",
                "U' F' U' F U r U R' U' M",
                "U2 R' U' R U y r U R' U' M"
            ]
        },
        {
            "name": "OLLCP34 5",
            "algs": [
                "U2 F R U R' U' R U R2 F R F' R U' R' F'",
                "F R U R' d' x U2 R2 F R F' R U2 r'",
                "U' R U' R' F R U R' U' R U R' U' F' U R U' R'",
                "U' R U R' U2 F2 U' r' F r2 U r' F"
            ]
        },
        {
            "name": "OLLCP34 6",
            "algs": [
                "U' f R f' U' r' U' R U M'",
                "R U R2 U' R' F R U R U' F'",
                "R U R' d' R' F' r U r' R",
                "R U R' y' U' r' U' R U M'"
            ]
        },
        {
            "name": "OLLCP35 1",
            "algs": [
                "U' R U2 R' U' y' r' U r U' r' U' r",
                "F U2 F' U' R' F R U' R' F' R",
                "U2 f R2 f' U' r' U r U' r' U' r"
            ]
        },
        {
            "name": "OLLCP35 2",
            "algs": [
                "U' R U2 R2 F R F' R U2 R'"
            ]
        },
        {
            "name": "OLLCP35 3",
            "algs": [
                "U2 F U R U' R2 U' R2 U' R2 U2 R U' F'",
                "R2 D r' U r D' r' U' R' U M'",
                "S' R U' r' U' F' U F M' S",
                "U S2 R' U2 R S U2 f R F'"
            ]
        },
        {
            "name": "OLLCP35 4",
            "algs": [
                "U R2 D' r U' r' D r U R U' M",
                "U' R' F R U R' U' F' U R F R U R' U' F'",
                "U S' R' F R U R' U' F' U R S",
                "U' f R2 f' U' S R U R' U' R' S'"
            ]
        },
        {
            "name": "OLLCP35 5",
            "algs": [
                "U R' F R U r' F r y' R2 U' R' F R' F'",
                "U R' F R U' R' U' R U' R' F' R' F R U2 F' R",
                "U2 R' F' U' F2 R' F' R2 U' R' U R U' R' U2 R"
            ]
        },
        {
            "name": "OLLCP35 6",
            "algs": [
                "L' U2 L U y' r U' r' U r U r'",
                "U R2 F R F' R U2 R' U R U2 R' U' R",
                "U2 R' U2 R U y r U' r' U r U r'",
                "U2 R' U2 R U F R' F' U F R F'"
            ]
        },
        {
            "name": "OLLCP36 1",
            "algs": [
                "R' U' F2 u' R U2 R' D R U' R B",
                "F R U' R' U R' U2 R2 U R2 U R U' F'"
            ]
        },
        {
            "name": "OLLCP36 2",
            "algs": [
                "U' R U R' U2 F' U' F U' R U' R'"
            ]
        },
        {
            "name": "OLLCP36 3",
            "algs": [
                "U2 R U' R' U' F U R U' R' F' R U2 R'",
                "F' L' U L S' U L' U' L f"
            ]
        },
        {
            "name": "OLLCP36 4",
            "algs": [
                "U R' F' U' F2 U R U' R' F' R",
                "U' R' U' R U' R' U R U R f' U' f",
                "U L' U' L U' L' U L U L F' L' F"
            ]
        },
        {
            "name": "OLLCP36 5",
            "algs": [
                "U R U R' F' R U R' U' R' F R U' R' F R F'",
                "l' U2 L U L' U x' U' R U' R' U2 R"
            ]
        },
        {
            "name": "OLLCP36 6",
            "algs": [
                "U r U' r2 D r2 U' r2 U r2 U D' r'",
                "U' R U2 r D r' U2 r D' r' R'",
                "U' R U R' U' F' U2 F U R U R'"
            ]
        },
        {
            "name": "OLLCP37 1",
            "algs": [
                "U' R U R' U' R' F R2 U' R' U R U R' F'"
            ]
        },
        {
            "name": "OLLCP37 2",
            "algs": [
                "U' R' U2 R U R2 F R F' U R",
                "U2 R U2 R' F R' F' R2 U2 R'",
                "U2 R2 F' R U R U' R' F R2 r' U' R' U r"
            ]
        },
        {
            "name": "OLLCP37 3",
            "algs": [
                "U' F R' F' R U R U' R'"
            ]
        },
        {
            "name": "OLLCP37 4",
            "algs": [
                "U' F R U' R' U' R U R' F'",
                "U' R2 F R F' U' R U' R' U R",
                "F' r U r' U' r' F r"
            ]
        },
        {
            "name": "OLLCP37 5",
            "algs": [
                "r U R' U R U2 r' U R' U' R U' R' U2 R",
                "r U R' U R U2 r' U2 R U2 R' U' R U' R'",
                "F R U' R' F R U' R' U' R U R' F' R U R' F'",
                "F R' F' R U R' F' R U R U' R' F R U' R'"
            ]
        },
        {
            "name": "OLLCP37 6",
            "algs": [
                "r U2 R2 D' R U' R' D R2 U' r'",
                "U' R' U R U R2 F R2 U R' U' F' U2 R",
                "U R U R' U R' U' R U' R' U2 F R F'",
                "U' F R U' R' U2 R U R' F' R U R' U' R' F R F'"
            ]
        },
        {
            "name": "OLLCP38 1",
            "algs": [
                "U2 R' F R2 F' R2 f R2 f' U2 R",
                "U2 R' U' R U f R2 f' U' R' U' R",
                "U' r U2 R' U' R U' r' L U' R' U L' U' R",
                "L' U' L U F U2 F' U' L' U' L"
            ]
        },
        {
            "name": "OLLCP38 2",
            "algs": [
                "R U R' U F' U F U2 R U' R'",
                "U r' U' R U M' R' F' R U R' U' R' F R2",
                "U2 L U L' U L U2 y' R U R' U' F'",
                "U' f R U R2 F R F' R U' R' f'"
            ]
        },
        {
            "name": "OLLCP38 3",
            "algs": [
                "U2 R U R' U R U' R' U' R' F R F'"
            ]
        },
        {
            "name": "OLLCP38 4",
            "algs": [
                "U' F R U' R' S U' R U R' f'"
            ]
        },
        {
            "name": "OLLCP38 5",
            "algs": [
                "U' r U2 R' U' R U' r' U R' U2 R U R' U R",
                "U' r U2 R' U' R U' x' U L' U L U2 L'",
                "U2 L' U' L F L' U' L U L F' L' U L F' L' F"
            ]
        },
        {
            "name": "OLLCP38 6",
            "algs": [
                "F R U R' U' F' U R U R' U' R' F R F'",
                "F R U' R2 F R F' U' F2 r U r2 F2 r",
                "U2 R2 u' R U' R U R' u R F' U' F R",
                "U2 F U R2 D R' U2 R D' R' U R' F'"
            ]
        },
        {
            "name": "OLLCP39 1",
            "algs": [
                "R' U' R f R f' R' U' R U R' U R"
            ]
        },
        {
            "name": "OLLCP39 2",
            "algs": [
                "R U R2 F R F' R U2 R' F' U F",
                "U2 F R U R' U' F' R' U' R U' R' U2 R",
                "U' R' F' U' F U R2 U2 R' U' R U' R'"
            ]
        },
        {
            "name": "OLLCP39 3",
            "algs": [
                "R U' r' U' F' U F r R'",
                "R U R' F' U' F U R U2 R'"
            ]
        },
        {
            "name": "OLLCP39 4",
            "algs": [
                "r U R U' r' F U R' U' F'",
                "U R' r' D' r U' r' D r U R",
                "f' r U r' U' r' F r S"
            ]
        },
        {
            "name": "OLLCP39 5",
            "algs": [
                "U' R U2 R' U' R U R' F2 r U r' F",
                "U' R U2 R' U' R U' x' U L' U L U2 l'"
            ]
        },
        {
            "name": "OLLCP39 6",
            "algs": [
                "U2 F U R2 D r' U2 r D' R' U R' F'",
                "U' R' U' R U' R U R' U' R' U2 F R F'"
            ]
        },
        {
            "name": "OLLCP40 1",
            "algs": [
                "U' F R U R' U' F' R U' L' U R' U' L",
                "U' f U R U' R2 D' R U R' D R U' f'"
            ]
        },
        {
            "name": "OLLCP40 2",
            "algs": [
                "U' F R U R' U' F' R U R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP40 3",
            "algs": [
                "U F R U R' F' R' F U' F' U R",
                "R r D r' U r D' r' U' R'",
                "U' f R' F' R U R U' R' S'"
            ]
        },
        {
            "name": "OLLCP40 4",
            "algs": [
                "U R' F R U R' U' F' U R"
            ]
        },
        {
            "name": "OLLCP40 5",
            "algs": [
                "L' U2 L U L' U x' U' R U' R' U2 r",
                "r' F2 r U r' F U' R U' R' U2 r"
            ]
        },
        {
            "name": "OLLCP40 6",
            "algs": [
                "U R U R' F' U' F R U R' U' R U' R'"
            ]
        },
        {
            "name": "OLLCP41 1",
            "algs": [
                "F U R2 D R' U' R D' R2 F'"
            ]
        },
        {
            "name": "OLLCP41 2",
            "algs": [
                "M' R' F' U' F U R U' M",
                "R U R' U R U2 R' F R U R' U' F'"
            ]
        },
        {
            "name": "OLLCP41 3",
            "algs": [
                "U2 R U' R' U' F U R U' R' F' U' R U' R'",
                "R' D' F r U r' F2 r U r' D R",
                "U2 R U' R' U2 R U y R U' R' U' F'",
                "U2 R U' R' U2 R U B U' B' U' R'"
            ]
        },
        {
            "name": "OLLCP41 4",
            "algs": [
                "U' R U R' U R' F R F' R2 D R' U2 R D' R2",
                "r' F r U' r' F r U r' F U' F2 U r",
                "M' L U L' U L U2 L2 U R U' L U r'",
                "U R U2 R' U' F' U' F U R U' R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP41 5",
            "algs": [
                "F R' F R2 U R' U' F2 U2 r' F r",
                "U r U2 R' U' R U' r2 F2 r U r' F r",
                "U' x' R U' R' U R U' R' U x R' U' R U R' U' R U",
                "U L F' L' F L F' L' F L' U' L U L' U' L"
            ]
        },
        {
            "name": "OLLCP41 6",
            "algs": [
                "F R' F' U2 R U R' U R U' R U' R'",
                "F R' F' U2 R U R U' R' U R' U R"
            ]
        },
        {
            "name": "OLLCP42 1",
            "algs": [
                "U' R' F R U R' F' R F U' R U R' U' F'",
                "U' R' U' F2 u' R U R' D R2 B"
            ]
        },
        {
            "name": "OLLCP42 2",
            "algs": [
                "U2 M U F R U R' U' F' M'",
                "U' r' U' r R' F R' F' R2 r' U r",
                "U2 R' U' R U' R' U2 R F R U R' U' F'",
                "L' U' L U' L' U2 L F' L' U' L U F"
            ]
        },
        {
            "name": "OLLCP42 3",
            "algs": [
                "U' F R' F' R U2 R' U' R2 U' R2 U2 R",
                "U2 L' U L U2 L' U' y' L' U L U F"
            ]
        },
        {
            "name": "OLLCP42 4",
            "algs": [
                "R U' R' U F' U' F U R U' R' U' R U R'",
                "U' F R U' R' U' R U R' F' R U2 R' U' R U' R'",
                "F' L F U2 L' U' L' U L U' L U' L'",
                "F R' U' R D' R U' R' D R' U2 R U' F'"
            ]
        },
        {
            "name": "OLLCP42 5",
            "algs": [
                "U' R' F2 r U r' F R2 U2 R' U' R U' R'",
                "U' R' F R F' R' F R F' R U R' U' R U R'",
                "U2 R' F2 R2 U' F U' F' U2 R2 F2 R"
            ]
        },
        {
            "name": "OLLCP42 6",
            "algs": [
                "U' R' U' F' U F U' R U' R2 D' R U2 R' D R2",
                "R' U2 R2 U R' U' R U R2 U R2 U' R2 F R F'",
                "U2 R U R' U R' F R F R U2 R' U2 R' F2 R",
                "F R U R' y' R' U' R' F R2 U R' U' F'"
            ]
        },
        {
            "name": "OLLCP43 1",
            "algs": [
                "U' L' U R U' L U2 R' F' L' U' L F",
                "U' R2 F R F' R U2 R' F' U2 F R",
                "U2 x' R U R' D R U' x R2 F' R U R U' R'"
            ]
        },
        {
            "name": "OLLCP43 2",
            "algs": [
                "U2 R' U' F' U F R",
                "U' F' U' L' U L F",
                "U f' L' U' L U f"
            ]
        },
        {
            "name": "OLLCP43 3",
            "algs": [
                "R' U2 R U R' U F R U R' U' F' U R",
                "U2 r' R U R' D R U' R U' R' U R' D' r"
            ]
        },
        {
            "name": "OLLCP43 4",
            "algs": [
                "R U' R' U R U' R' U' F R' F' R2 U R'",
                "U r2 D' r U' r' D r R U' R' U2 r"
            ]
        },
        {
            "name": "OLLCP43 5",
            "algs": [
                "R U R' U' R' F R U' R' F R F' R U R' F'",
                "U2 x' R' D R U' R U' R D' R' U R' U x",
                "r' U' R U' R' U2 r U' r' U2 R U R' U r",
                "U2 r U R' U R U2 r' R' U' R U' R' U2 R"
            ]
        },
        {
            "name": "OLLCP43 6",
            "algs": [
                "U2 R U' R' U' F' U2 F U R U' R'",
                "R U R' F' U2 R U R' U' R' F R2 U' R'",
                "U2 R r D r' U2 r D' r' U2 R'"
            ]
        },
        {
            "name": "OLLCP44 1",
            "algs": [
                "U' f R2 D R' U R D' R2 U' f'"
            ]
        },
        {
            "name": "OLLCP44 2",
            "algs": [
                "U F U R U' R' F'",
                "U' f R U R' U' f'",
                "U2 F R U' R' U2 R U R' F'",
                "U L U F' L F L' U' L'"
            ]
        },
        {
            "name": "OLLCP44 3",
            "algs": [
                "U' r D' r' U R' U R U' r D r'",
                "U2 F U R U2 R' U R U2 R' U' F'",
                "x' D R U' R U R' U R' D' R U' R' x",
                "U2 R U2 R' U' F' U' F U R U2 R'"
            ]
        },
        {
            "name": "OLLCP44 4",
            "algs": [
                "U2 F R U' R' U' R U R2 F' R U R U' R'",
                "U2 L' U L U F U2 F' U' L' U L",
                "R' r' D' r U2 r' D r U2 R"
            ]
        },
        {
            "name": "OLLCP44 5",
            "algs": [
                "U2 R U R' U R U2 R' U r U2 R' U' R U' r'",
                "U' B r' U' R U' R U' r B R' B R'",
                "x R D' R' U R' U R' D R U' R U' x'"
            ]
        },
        {
            "name": "OLLCP44 6",
            "algs": [
                "U' f R U' R D R' U2 R D' R2 U' f'",
                "U r U R2 D' R U R' D R2 U2 r'",
                "U x' R U' R' D R U l' U R U' R' F'"
            ]
        },
        {
            "name": "OLLCP45 1",
            "algs": [
                "U' F R2 D R' U R D' R2 U' F'"
            ]
        },
        {
            "name": "OLLCP45 2",
            "algs": [
                "U' F R U R' U' F'",
                "R' F' U' F U R"
            ]
        },
        {
            "name": "OLLCP45 3",
            "algs": [
                "R' U' R F R' U R U' R U R' U' F'",
                "U' F R' D' R U R' D R U' R U R' U' F'",
                "R U R2 F R2 U R' U' F2 U2 F",
                "U' x' R U R' D R U' x U R' U' F'"
            ]
        },
        {
            "name": "OLLCP45 4",
            "algs": [
                "U' F U R' D' R U' R' D R2 U R' U' F'",
                "L' U R U' L U R' f U R U' R' f'",
                "U' F R2 D R' U' R D' R' U2 R' U' F'"
            ]
        },
        {
            "name": "OLLCP45 5",
            "algs": [
                "U2 R U R' U R U2 R' r' U' R U' R' U2 r",
                "R' U' R U' R' U2 R r U R' U R U2 r'",
                "U R U2 R' U' R U' R2 F2 r U r' F R",
                "R' U' R U R' U' R' F R F' R' F R F' R"
            ]
        },
        {
            "name": "OLLCP45 6",
            "algs": [
                "R U' L' U R' U' L F R U R' U' F'",
                "U' F R U' R D R' U2 R D' R2 U' F'"
            ]
        },
        {
            "name": "OLLCP46 1",
            "algs": [
                "U R2 D r' U' r D' R2 F' U F",
                "f U R2 D R' U' R D' R2 f'",
                "U2 F R U2 L U' R' U L' U2 F'",
                "F U R U' R' U F' R' F R U' R' F' R"
            ]
        },
        {
            "name": "OLLCP46 2",
            "algs": [
                "U R' U' R' F R F' U R"
            ]
        },
        {
            "name": "OLLCP46 3",
            "algs": [
                "R' F R U' R' U2 R U R2 F' R U R",
                "F R U R2 U' R F' U' R' U2 R",
                "U R U R' F R' F' R U R U' l U' R' U l'",
                "U R U R' U F' L' U L F U' R U' R'"
            ]
        },
        {
            "name": "OLLCP46 4",
            "algs": [
                "r' U r U r' U' r U f R2 f'",
                "U2 R' F R U R' F' R U F U2 F'",
                "U2 l' U l U l' U' l U y' R U2 R'"
            ]
        },
        {
            "name": "OLLCP46 5",
            "algs": [
                "U2 F R U R2 F R F' R U' R' U R U' R' F'",
                "U' R U R' U R' F R F' R' F R F' R U2 R'",
                "U R D r' U' r D' R2 U' R' F R F' R"
            ]
        },
        {
            "name": "OLLCP46 6",
            "algs": [
                "U2 r U' r' U' r U r' U' F' U2 F",
                "U R U R' U R U' R' F' U F R U' R'",
                "U2 r U' r' U' r U r' U' y L' U2 L"
            ]
        },
        {
            "name": "OLLCP47 1",
            "algs": [
                "U F R' F' R U2 R U' R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP47 2",
            "algs": [
                "U2 F R U' R' F' r' F' r U r' F r",
                "U F U R U' R' F' R U R' U R U2 R'",
                "U' L' U' L U' L F' L' F L' U L U' L' U2 L"
            ]
        },
        {
            "name": "OLLCP47 3",
            "algs": [
                "U2 F' U' F2 R U' R' U' R U R' F' R U' R'",
                "U F U R U' R' F' R U' r' F R' F' r",
                "x R' U' R D' R' U R' U R2 D R' U' R x'"
            ]
        },
        {
            "name": "OLLCP47 4",
            "algs": [
                "U' R' U' R U R' U' R U2 R' U' F' U' F U' R",
                "U2 r U' r B r2 y' U2 R U' L' U L R'"
            ]
        },
        {
            "name": "OLLCP47 5",
            "algs": [
                "U2 R' U' R' F R F' R' F R F' U R",
                "U2 F' L' U' L U L' U' L U F",
                "r' U' R U r U2 R' U' R U' R2 U2 R",
                "U2 b' U' R' U R U' R' U R b"
            ]
        },
        {
            "name": "OLLCP47 6",
            "algs": [
                "U R' F R U R' U' F' R' F R F' U R",
                "f' U f U2 R' U' R U' R2 U2 R",
                "F R U R' U2 F' U2 F U R U' R' U' F'",
                "U F' L' U L U L' U2 L U L' U' L U F"
            ]
        },
        {
            "name": "OLLCP48 1",
            "algs": [
                "U F R' F' r U2 R U' R' U R U2 r'"
            ]
        },
        {
            "name": "OLLCP48 2",
            "algs": [
                "F' r' F r F R U R' U' R U' R'",
                "U2 R U R' U R U2 R2 F' U' F U R",
                "R' U' F' U F R2 U2 R' U' R U' R'",
                "U' R U R' U R' F R F' R U' R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP48 3",
            "algs": [
                "R U2 R' U' R U R' U2 R' F R F'",
                "U F' L F L' U2 L' U L U' L' U2 L"
            ]
        },
        {
            "name": "OLLCP48 4",
            "algs": [
                "F R U R' U' R2 D R' U R D' R2 U' F'"
            ]
        },
        {
            "name": "OLLCP48 5",
            "algs": [
                "F R U R' U' R U R' U' F'"
            ]
        },
        {
            "name": "OLLCP48 6",
            "algs": [
                "F R' F' U2 R U R' U R2 U2 R'",
                "U F R U' R' U' R U2 R' U' R U R' U' F'"
            ]
        },
        {
            "name": "OLLCP49 1",
            "algs": [
                "U R U R' U R U' y R U2 R' U' R U R' F'",
                "F2 U' F L F' U F U' L2 U L F",
                "U' x R' U R D' R2 U' R U' R D R' U R x'"
            ]
        },
        {
            "name": "OLLCP49 2",
            "algs": [
                "U R' U2 R U R' U R F R U R' U' F'",
                "U R U2 R' U' R U R' F R' F' R U' R U' R'",
                "U' L' U2 L U L' U L f U R U' R' f'",
                "U2 R U R' U R U' R' F' U2 F R U' R'"
            ]
        },
        {
            "name": "OLLCP49 3",
            "algs": [
                "F R' F' U' F U' R2 U R2 U R F'",
                "r U2 R' U' R U R' U2 M r' F R F' M'",
                "R' U' R2 U R' U' R' y r U r' U' R U' R'"
            ]
        },
        {
            "name": "OLLCP49 4",
            "algs": [
                "R' F R' F' R2 U2 f' U f R'",
                "R' F R' F' R2 U2 B' R B R'",
                "U2 r' U r' F' r2 U2 F' r U r'"
            ]
        },
        {
            "name": "OLLCP49 5",
            "algs": [
                "r U' r2 U r2 U r2 U' r"
            ]
        },
        {
            "name": "OLLCP49 6",
            "algs": [
                "U' R' F R f' U2 R' F R F2 U2 f",
                "U' F' L' U L U L' U' L U' L' U L F",
                "F' L F l' U2 F' L F L2 U2 l"
            ]
        },
        {
            "name": "OLLCP50 1",
            "algs": [
                "R U R' F R U' R' U R U R' F2 U F",
                "U R' F R U R' D R2 U' R2 D' F' R",
                "U' L' U R U' L U R' f R U R' U' f'"
            ]
        },
        {
            "name": "OLLCP50 2",
            "algs": [
                "U' R U2 R' U' R U' R' F R U R' U' F'",
                "U L' U2 L U L' U' L F' L F L' U L' U L"
            ]
        },
        {
            "name": "OLLCP50 3",
            "algs": [
                "U' R U2 R' U2 R' F R2 U' R' U' R U2 R' U' F'",
                "U x' R U' R' D R2 U R' U R' D' R U' R' x"
            ]
        },
        {
            "name": "OLLCP50 4",
            "algs": [
                "R B' R B R2 U2 F R' F' R",
                "U2 R' U R U' R2 F R2 U R' U' F' R"
            ]
        },
        {
            "name": "OLLCP50 5",
            "algs": [
                "U2 l' U l2 U' l2 U' l2 U l'",
                "r' U r2 U' r2 U' r2 U r'"
            ]
        },
        {
            "name": "OLLCP50 6",
            "algs": [
                "U2 F R' F' r U2 F R' F' R2 U2 r'",
                "U' F R U' R' U' R U R' U R U' R' F'",
                "f R U R' U R' D' R U2 R' D R f'"
            ]
        },
        {
            "name": "OLLCP51 1",
            "algs": [
                "U2 L' U2 L U2 L F' L2 U' L U F",
                "R' U2 R U2 R U R' U' R' F R F' R' U R",
                "U2 R U' R' U2 R' U2 R U R' F R F' R' U R"
            ]
        },
        {
            "name": "OLLCP51 2",
            "algs": [
                "U' R' U' R' F R F' R U' R' U2 R",
                "U2 f R D' R2 U R2 U' R2 D R' f'",
                "U R' U2 R U R' F R' F' R U R",
                "U' R U2 R' U' F' U2 F U R U2 R'"
            ]
        },
        {
            "name": "OLLCP51 3",
            "algs": [
                "R U2 R' U2 R' F R2 U R' U' F'"
            ]
        },
        {
            "name": "OLLCP51 4",
            "algs": [
                "R U R2 F R F' R U' R' F' r' F r F",
                "U' R U R' U R U' R' F' U F R U R' U' R U' R'",
                "R' U' R U' R' U2 R U' R U2 R' U2 R' F R F'",
                "U2 R U2 R' U' R' F' U' F U R2 U' R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP51 5",
            "algs": [
                "f R U R' U' R U R' U' f'",
                "U2 F U R U' R' U R U' R' F'"
            ]
        },
        {
            "name": "OLLCP51 6",
            "algs": [
                "R' U2 R U2 F R U R' U' F' R' U R"
            ]
        },
        {
            "name": "OLLCP52 1",
            "algs": [
                "U F U R U' R2 F' R U2 R U2 R'"
            ]
        },
        {
            "name": "OLLCP52 2",
            "algs": [
                "R' F' U' F U' R U R' U R",
                "U2 R U R' U R d' R U' R' F'",
                "L U L' U L U' y L U' L' B'",
                "U2 R U R' U R U' B U' B' R'"
            ]
        },
        {
            "name": "OLLCP52 3",
            "algs": [
                "U F' U' r' F r2 U r' U2 r' F2 r",
                "U F' U' L' U L2 F L' U2 L' U2 L"
            ]
        },
        {
            "name": "OLLCP52 4",
            "algs": [
                "U' R U' R' F' U' F U2 R U R' U' R U R'",
                "U' F' U' F r U' r' U r U' R' U' R U' r'",
                "U' R U R' U' R' F R F' U2 R U R' U R U2 R'"
            ]
        },
        {
            "name": "OLLCP52 5",
            "algs": [
                "R U2 R2 u' R U' R' U R' u R",
                "R' U2 R2 u R' U R U' R u' R'",
                "U2 r' U' R' F R F' R' F R F' U r",
                "R' U' F R' F' R F R' F' R U R"
            ]
        },
        {
            "name": "OLLCP52 6",
            "algs": [
                "U R U R' F' U' F U R' U' R2 U' R2 U2 R",
                "U F U R' U' R F' R2 F R F' U R",
                "U2 R U R' U2 R U2 R' U R U R' U R U' R2 F R F'"
            ]
        },
        {
            "name": "OLLCP53 1",
            "algs": [
                "L' U R U' L U' R' U2 R' F R F'",
                "r' F R F' r U' R' U2 R' F R F'",
                "F R U R' U' F' R U R' U' R' F R F'"
            ]
        },
        {
            "name": "OLLCP53 2",
            "algs": [
                "U2 R U R2 F R F' R U2 R' F R' F' R2 U' R'",
                "R' F' U' F U F' U' F U' R F U' R' U' R U F'",
                "x U R' U R U2 l U' L' U R' U2 L"
            ]
        },
        {
            "name": "OLLCP53 3",
            "algs": [
                "F R U R' U' R U' R' U R U R' F'"
            ]
        },
        {
            "name": "OLLCP53 4",
            "algs": [
                "U' R U' R2 U' R' F R U R2 U' R2 F' R2 U2 R'",
                "U F' U L' U2 L2 F' L' F L' U L U2 F",
                "b' U' R D U R' U' R D' R U R b"
            ]
        },
        {
            "name": "OLLCP53 5",
            "algs": [
                "U' r' U2 R U R' U' R U R' U r",
                "U l' U2 L U L' U' L U L' U l",
                "U2 r' U' R U' R' U R U' R' U2 r"
            ]
        },
        {
            "name": "OLLCP53 6",
            "algs": [
                "U R' F R F' U' F R' F' R2 U' R'",
                "U' R U' R' U R U' R' U2 F' U F R U R'",
                "U R' F R F' U2 l2 F' l' U l'"
            ]
        },
        {
            "name": "OLLCP54 1",
            "algs": [
                "U R' U' F' U F U' R' D' R U R' D R2",
                "U2 F R U R' U' F' R' U' F U R U' R' F' R",
                "U2 F' L' U' L U L' U L U' L' U' L F"
            ]
        },
        {
            "name": "OLLCP54 2",
            "algs": [
                "U F R U R' U' S R U R' U' R U R' U' f'",
                "x' U' R U' R' U2 R' F r U' R U2 L'",
                "R U2 R D R' U' R D' R2 F' U F R U' R'"
            ]
        },
        {
            "name": "OLLCP54 3",
            "algs": [
                "U2 R U2 R' U' F' U' F R U R' U' R U' R'",
                "U R' F' U' F U R U L' U' L U L F' L' F",
                "U2 R U' L' U R' U L U2 L F' L' F"
            ]
        },
        {
            "name": "OLLCP54 4",
            "algs": [
                "R U R' U' R' F2 R F2 U2 r U' r' F",
                "U F U' R U2 R2 F R F' R U' R' U2 F'",
                "U R U R' U R U' R' F' U' F R U R' U' R U' R'"
            ]
        },
        {
            "name": "OLLCP54 5",
            "algs": [
                "U2 r U R' U R U' R' U R U2 r'",
                "x' D R2 U' R' U R U' R' U R' D' x",
                "U r U2 R' U' R U R' U' R U' r'"
            ]
        },
        {
            "name": "OLLCP54 6",
            "algs": [
                "U r U' r' F U2 r2 F r U' r",
                "U' R B' R' B U2 R2 F R F' R",
                "U L F' L' F U2 r2 F r U' r"
            ]
        },
        {
            "name": "OLLCP55 1",
            "algs": [
                "R U2 R2 U' R U' R' U2 F R F'",
                "r U2 R2 F R F' U2 r' F R F'",
                "U2 R' U' F R' F' R F U R U' R' F' R",
                "U' f R D' R2 U R D R U' D' R2 D f'"
            ]
        },
        {
            "name": "OLLCP55 2",
            "algs": [
                "U F U' R2 D R' U2 R D' R2 U F'"
            ]
        },
        {
            "name": "OLLCP55 3",
            "algs": [
                "U2 r U2 R2 F R F' U2 r' F R F'",
                "U2 R U2 R2 U' R U' R' U2 F R F'",
                "R U R' f' U L' U2 L U L' U' L U f"
            ]
        },
        {
            "name": "OLLCP55 4",
            "algs": [
                "U' R' F U R U' R2 F' R2 U R' U' R"
            ]
        },
        {
            "name": "OLLCP55 5",
            "algs": [
                "U R' F R U R U' R2 F' R2 U' R' U R U R'",
                "U r U2 R' U' r' R2 U R' U' r U' r'",
                "R U R' U R U' R' F' r' F2 r U F",
                "U r U2 R' U' M R U R' U' r U' r'"
            ]
        },
        {
            "name": "OLLCP55 6",
            "algs": [
                "U R' F U R U' R2 F' R2 U R' U' R"
            ]
        },
        {
            "name": "OLLCP56 1",
            "algs": [
                "U2 F R U R' U' R F' r U R' U' r'",
                "U2 f R' D' R U2 R' D R U' R U' R' f'",
                "F R U R' U' F' r U R' U' r' F R F'",
                "f U R U' R' U f' R B L' B' R'"
            ]
        },
        {
            "name": "OLLCP56 2",
            "algs": [
                "U f U R U' R' U R U' R' S' U R U' R' F'",
                "L' U2 R U' L U l' U2 R' U' R U' x'",
                "U F R U R' U' R U R' U' S R U R' U' f'",
                "U R' F R U2 R' F' R U F R U R' U F'"
            ]
        },
        {
            "name": "OLLCP56 3",
            "algs": [
                "U2 F R U R' U' F' r U R' U' r' F R F'",
                "F R U R' U' R F' r U R' U' r'",
                "U2 R' F R F' U2 R U' R' d R' U2 R"
            ]
        },
        {
            "name": "OLLCP56 4",
            "algs": [
                "U2 r U R' U R U r' U' r U r' F' U F",
                "U' R' F R F' U' F R' F' R S' R U' R' S",
                "F R U R' U2 y' R' U2 L R U' R' U L'",
                "F R U' R' F' U' F R U' l' U R' U' R U' x'"
            ]
        },
        {
            "name": "OLLCP56 5",
            "algs": [
                "r U r' U R U' R' U R U' R' r U' r'",
                "r U r' U R U' R2 r U R U2 r'",
                "r U r' U R U' R' U R U' M' U' r'",
                "r' U' r U' R' U R U' R' U R r' U r"
            ]
        },
        {
            "name": "OLLCP56 6",
            "algs": [
                "r U R' U R U r' U' r U r' F' U F",
                "U2 F R U' R' F' U' F R U' l' U R' U' R U' x'",
                "U2 F R U R' U2 y' R' U2 L R U' R' U L'",
                "r U R' U R U r' U' r U r' y' R' U R"
            ]
        },
        {
            "name": "OLLCP57 1",
            "algs": [
                "U2 R U' R' F' U F R U R2 F R F'",
                "U R2 B' R' B R' F' U' F R U R'",
                "U R U R' U' r' F R2 U' R' U' R U R' F' U M'",
                "U2 R U' R' F' U F R x' U' R U R2 x"
            ]
        },
        {
            "name": "OLLCP57 2",
            "algs": [
                "R U' R2 F R F' R U' B U2 B' R'",
                "U F' r' U' r F r2 D' r U r' D r2",
                "R U' R2 F R F' R d' R U2 R' F'",
                "R U' x' z' U2 R U R' U F' r U2 r' U'"
            ]
        },
        {
            "name": "OLLCP57 3",
            "algs": [
                "R U' R' F' U F R U R2 F R F'",
                "R U' R' F' U F R x' U' R U R2 x",
                "F R' F' R2 U' R' F' U' F R U R'"
            ]
        },
        {
            "name": "OLLCP57 4",
            "algs": [
                "U2 R U2 R' U2 R' F R U R U2 R' U' R U R' F'",
                "l' U' l F L' U' L U L F' L' l' U l"
            ]
        },
        {
            "name": "OLLCP57 5",
            "algs": [
                "R U R' U' M' U R U' r'",
                "U S R' F R S' R' F' R",
                "M' U' M U M' U' M U' M' U2 M",
                "M' U M U' M' U M U M' U2 M"
            ]
        },
        {
            "name": "OLLCP57 6",
            "algs": [
                "R U R' U' M' R' F R2 U' R' U' R U R' F' M",
                "R U2 R' U2 R' F R U R U2 R' U' R U R' F'",
                "r U r' F' R U R' U' R' F R r U' r'",
                "F R U' R' U R U R2 F' r U R U' r'"
            ]
        }
    ]
}