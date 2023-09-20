export let algSet = {
    "puzzle": "3x3",
    "pre": ["", "U", "U'", "U2"],
    "post": ["", "U", "U'", "U2"],
    "cases": [
        {
            "name": "ZBLL 1",
            "algs": [
                "R' D R D' R' D R U R' D' R D R' D' R"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 2",
            "algs": [
                "R' U R U2 R' U' R U' R U R' U' R' U' R U R U' R'"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 3",
            "algs": [
                "R' U2 R U R' U R2 U2 R' U' R U' R'"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 4",
            "algs": [
                "R U2 R' U' R U' R2 U2 R U R' U R"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 5",
            "algs": [
                "R' U R U2 R' U' R U2 R' U' R U' R' U R"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 6",
            "algs": [
                "R U' R' U2 R U R' U2 R U R' U R U' R'"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 7",
            "algs": [
                "R' U R2 U R' U R' U' R U' R' U' R U R U' R'"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 8",
            "algs": [
                "R U R' U R U' R' U R' U' R2 U' R2 U2 R"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 9",
            "algs": [
                "R' U2 R U R' U R U' R' U' R U' R' U2 R"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 10",
            "algs": [
                "R U2 R' U' R U' R' U R U R' U R U2 R'"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 11",
            "algs": [
                "R' U' R2 U R2 U R2 U2 R' U R' U R"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 12",
            "algs": [
                "R U R2 U' R2 U' R2 U2 R U' R U' R'"
            ],
            "subsets": ["T1"]
        },
        {
            "name": "ZBLL 13",
            "algs": [
                "R U R' F' R U R' U' R' F R U' R' F R U R U' R' F'"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 14",
            "algs": [
                "R' U' R U' R' U' R2 D r' U2 r D' R2 U' R"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 15",
            "algs": [
                "R U' R2 D' r U2 r' D R2 U R'"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 16",
            "algs": [
                "R' U R2 D r' U2 r D' R2 U' R"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 17",
            "algs": [
                "R' U2 R U2 R2 D' R U2 R' D R2 U' R' U R"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 18",
            "algs": [
                "R U R' U2 R' D' R U R' D R2 U' R' U R U' R'"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 19",
            "algs": [
                "R' U' R U R2 D' R U2 R' D R2 U2 R' U2 R"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 20",
            "algs": [
                "R U R' U' R U R2 D' R U' R' D R U2 R U' R'"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 21",
            "algs": [
                "R' D' R U' R' D R U' R U' R' U R U' R' U' R U R'"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 22",
            "algs": [
                "R U' R' U R U R' U' R U R' U R' D' R U R' D R"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 23",
            "algs": [
                "R U R D R' U R D' R' U L' U R' U' L"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 24",
            "algs": [
                "r U r' R U R' U' R U R' U' r U' r' F R U R' U' F'"
            ],
            "subsets": ["T2"]
        },
        {
            "name": "ZBLL 25",
            "algs": [
                "R' U R U2 R' L' U R U' L"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 26",
            "algs": [
                "R U' R' U2 R L U' R' U L'"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 27",
            "algs": [
                "R' U' R2 U R' F' R U R' U' R' F R2 U' R' U' R' U R"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 28",
            "algs": [
                "r U' r U2 R' F R U2 r2 F"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 29",
            "algs": [
                "R' U' R' D' R U R' D R U2 R U R' U R"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 30",
            "algs": [
                "R U R D R' U' R D' R' U2 R' U' R U' R'"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 31",
            "algs": [
                "R D R' U' R D' R' U' R' U R U' R' U R U R' U' R"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 32",
            "algs": [
                "R' D' R U R' D R U R U' R' U R U' R' U' R U R'"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 33",
            "algs": [
                "R' U' R U' R' U R F U' R' U2 R U F'"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 34",
            "algs": [
                "R U R' U R U' R' U' L' U2 R U2 R' U2 L"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 35",
            "algs": [
                "R' U2 R U R' U R F U R U2 R' U R U R' F'"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 36",
            "algs": [
                "r' U' R' F2 R F' R' F2 R2 U' R' U2 r"
            ],
            "subsets": ["T3"]
        },
        {
            "name": "ZBLL 37",
            "algs": [
                "R' F2 R' B2 R F2 R' B2 R2"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 38",
            "algs": [
                "R' U2 R U' R' F R U R' U' R' F' R U' R"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 39",
            "algs": [
                "R' U2 R' D' R U2 R' D R' U R' U R U2 R'"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 40",
            "algs": [
                "R U2 R D R' U2 R D' R U' R U' R' U2 R"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 41",
            "algs": [
                "R U R D R' U' R D' R' U R' U R U2 R'"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 42",
            "algs": [
                "R' U' R' D' R U R' D R U' R U' R' U2 R"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 43",
            "algs": [
                "R' U R2 D R' U R D' R' U R' U' R U' R' U' R"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 44",
            "algs": [
                "R U' R2 D' R U' R' D R U' R U R' U R U R'"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 45",
            "algs": [
                "R' U' R U' F U' R' U R U F' R' U R"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 46",
            "algs": [
                "R' D' R U R' D R2 U R' U2 R U' R' U' R U' R'"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 47",
            "algs": [
                "F R U R' U' R U' R' U' R U R' F'"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 48",
            "algs": [
                "R U R' U2 R U' R' U2 R U' R2 F' R U R U' R' F"
            ],
            "subsets": ["T4"]
        },
        {
            "name": "ZBLL 49",
            "algs": [
                "R U R D R' U' R D' R2"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 50",
            "algs": [
                "R U2 R' U2 R' F R U R U' R' F'"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 51",
            "algs": [
                "R2 B2 R' U2 R' U2 R B2 R' U R U' R'"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 52",
            "algs": [
                "R' D' R U R' D R2 U' R' U R U R' U' R U R'"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 53",
            "algs": [
                "F' U' r' F2 r U' r' F' r F"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 54",
            "algs": [
                "R U R' U' R U' R' L U' R U R' L'"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 55",
            "algs": [
                "R U R' U R U R' U2 L R U' R' U L'"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 56",
            "algs": [
                "R' U' R U' R2' F' R U R U' R' F U R U' R' U2 R"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 57",
            "algs": [
                "R' U' R U R' U' R2 D R' U2 R D' R' U R' U R"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 58",
            "algs": [
                "R U R D R' U2 R D' R' U' R' U R U' R' U' R U' R'"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 59",
            "algs": [
                "F R U R' U' R' F' U2 R U R U' R2 U2 R"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 60",
            "algs": [
                "R U' R' U' R U R D R' U2 R D' R' U' R'"
            ],
            "subsets": ["T5"]
        },
        {
            "name": "ZBLL 61",
            "algs": [
                "x' U' R' D R U R' D' R x"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 62",
            "algs": [
                "R U R' U' R' F' R U2 R U2 R' F"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 63",
            "algs": [
                "R2 F2 R U2 R U2 R' F2 R U' R' U R"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 64",
            "algs": [
                "R D R' U' R D' R2 U R U' R' U' R U R' U' R"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 65",
            "algs": [
                "F U R U2 R' U R U R' F'"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 66",
            "algs": [
                "R U R' U' R U' R' U' F R U R' U' R' F' R"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 67",
            "algs": [
                "R' U' R U' R' U R' U' R U R' F' R U R' U' R' F R'"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 68",
            "algs": [
                "F R U R' U' R U R' U' F' R U R' U' R' F R F'"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 69",
            "algs": [
                "R U R' U' R U R2 D' R U2 R' D R U' R U' R'"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 70",
            "algs": [
                "R' U2 R F U' R' U R U F' R' U R"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 71",
            "algs": [
                "R' U2 R2 U R' U' R' U2 F' R U2 R U2 R' F"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 72",
            "algs": [
                "R' U R U R' U' R' D' R U2 R' D R U R"
            ],
            "subsets": ["T6"]
        },
        {
            "name": "ZBLL 73",
            "algs": [
                "R U2 R' U' R U' R' U2 R' U2 R U R' U R"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 74",
            "algs": [
                "R U R' U' R U' R U2 R2 U' R U R' U' R2 U' R2"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 75",
            "algs": [
                "R' U' R U' R' U2 R2 U R' U R U2 R'"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 76",
            "algs": [
                "R U R' U R U2 R2 U' R U' R' U2 R"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 77",
            "algs": [
                "R U R' U' R U' R' U2 R U' R' U2 R U R'"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 78",
            "algs": [
                "R' U' R U R' U R U2 R' U R U2 R' U' R"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 79",
            "algs": [
                "R U2 R2 U' R2 U' R' U R' U' R U R' U R"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 80",
            "algs": [
                "R' U2 R2 U R2 U R U' R U R' U' R U' R'"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 81",
            "algs": [
                "R' U2 R U R' U R U R' U' R U' R' U2 R"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 82",
            "algs": [
                "R U2 R' U' R U' R' U' R U R' U R U2 R'"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 83",
            "algs": [
                "R' U' R U' R U2 R2 U' R2 U' R2 U R"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 84",
            "algs": [
                "R U R' U R' U2 R2 U R2 U R2 U' R'"
            ],
            "subsets": ["U1"]
        },
        {
            "name": "ZBLL 85",
            "algs": [
                "R' U' R U' F U' R' U R U R' U R U' F'"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 86",
            "algs": [
                "R U R' U L' U R U' M' x' U' R U' R'"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 87",
            "algs": [
                "R U2 R2 F R F' M' U' R U' R' U M"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 88",
            "algs": [
                "R' U2 R F U' R' U R U R' U R U' F'"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 89",
            "algs": [
                "R2 D R' U' R D' R' U' R' U R U R'"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 90",
            "algs": [
                "R2 D' R U R' D R U R U' R' U' R"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 91",
            "algs": [
                "R U' R' U' R U R D R' U R D' R2"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 92",
            "algs": [
                "R' U R U R' U' R' D' R U' R' D R2"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 93",
            "algs": [
                "M' U R' U' F' U F R2 U R' U R U2 r'"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 94",
            "algs": [
                "F R U R' U' R U R' U' F' U' R' F' U' F U R"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 95",
            "algs": [
                "F R U' R' U' R U2 R' U' R U' R' U' R U2 R' U' F'"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 96",
            "algs": [
                "r' U' R' F R U r F R U' R' F'"
            ],
            "subsets": ["U2"]
        },
        {
            "name": "ZBLL 97",
            "algs": [
                "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 98",
            "algs": [
                "F2 R U' R' U' R U R' F' R U R' U' R' F R F2"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 99",
            "algs": [
                "R U' R' U R U' L U r' F U2 R U2 R2 x"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 100",
            "algs": [
                "R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' U2 R"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 101",
            "algs": [
                "R U' L U L' U R' U' l U2 R U2 R2 x"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 102",
            "algs": [
                "R' U L' U' L U' R U l' U2 R' U2 R2 x'"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 103",
            "algs": [
                "F R U R U2 R' U' R U' R' U2 R' U2 R U' R' U' F'"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 104",
            "algs": [
                "r U R' U' r' F R2 U' R' U' R U2 R' U' F'"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 105",
            "algs": [
                "F U R U2 R' U R U R2 F' r U R U' r'"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 106",
            "algs": [
                "R U2 R' U2 R' F R U R U2 R' U' R U2 R' U' F'"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 107",
            "algs": [
                "R' U' R F R2 D' R U R' D R2 U' F'"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 108",
            "algs": [
                "r U R' U' r' F R U R' U' R F' R' U R"
            ],
            "subsets": ["U3"]
        },
        {
            "name": "ZBLL 109",
            "algs": [
                "x R2 U2 R' D2 R U2 R' D2 R' x'"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 110",
            "algs": [
                "x R2 D2 R U2 R' D2 R U2 l"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 111",
            "algs": [
                "R U R' U R U' R' U2 R' D' R U2 R' D R2 U' R'"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 112",
            "algs": [
                "R' U2 R U R' U R' D R' U2 R D' R' U2 R'"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 113",
            "algs": [
                "R U' R' U' R U' R' U R' D' R U R' D R2 U R'"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 114",
            "algs": [
                "R' U R U R' U R U' R D R' U' R D' R2 U' R"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 115",
            "algs": [
                "R' U2 R U R' U R' D' R U' R' D R U R"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 116",
            "algs": [
                "R U' R' U' R U2 R' U2 R' D' R U' R' D R"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 117",
            "algs": [
                "R' U' R U2 R' F' R U R' U' R' F R2 U2 R' U R"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 118",
            "algs": [
                "R U R' U R U R' U2 R U' R2 D' R U' R' D R"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 119",
            "algs": [
                "F R U' R' U R U R' U R U' R' F'"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 120",
            "algs": [
                "F' R U R' U' R' F R2 U R' U2 R U R' U2 R U' R'"
            ],
            "subsets": ["U4"]
        },
        {
            "name": "ZBLL 121",
            "algs": [
                "R2 D' r U2 r' D R U2 R"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 122",
            "algs": [
                "R2 D' R U2 R' D R U2 R"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 123",
            "algs": [
                "R U' R' D R' U' R D' R2 U R' U' R' U2 R'"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 124",
            "algs": [
                "R U R' U R U2 R2 U z U R' D R U' z'"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 125",
            "algs": [
                "R2 D' R U' R' D R2 U' R' U2 R"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 126",
            "algs": [
                "R' U R U R' U2 R U2 y R U' R' U2 R U' R'"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 127",
            "algs": [
                "R2 D R' U R D' R2 U' R U' R' U2 R U' R' U2 R U R'"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 128",
            "algs": [
                "R2' F' R U2 R U2' R' F U' R U R' U' R"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 129",
            "algs": [
                "R' U2 R2 D R' U2 R D' R2 U R U2 R' U2 R"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 130",
            "algs": [
                "R U R' U2 F2 R U2 R' U2 R' F2 R2 U R'"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 131",
            "algs": [
                "R' U2 R' D' R U2 R' D R U2 R U R' U R"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 132",
            "algs": [
                "R' U R U' R' U' R U2 R D R' U' R D' R2 U' R"
            ],
            "subsets": ["U5"]
        },
        {
            "name": "ZBLL 133",
            "algs": [
                "R' U2 R U R2 F' R U R U' R' F R"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 134",
            "algs": [
                "R2 D R' U2 R D' R' U2 R'"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 135",
            "algs": [
                "R' U' R U R U R' U' R' U F R U R U' R' F'"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 136",
            "algs": [
                "R U' R' U' R U2 R' U' R' D' R U2 R' D R"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 137",
            "algs": [
                "R U R2 D' R U R' D R2 U2 R'"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 138",
            "algs": [
                "R U' R' U' R U2 R' U2 y' R' U R U2 R' U R"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 139",
            "algs": [
                "R' U R' U' D' R U' R' U2 R U' R' D R U' R"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 140",
            "algs": [
                "R U R' U R U' R' U F' R U2 R' U2 R' F R"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 141",
            "algs": [
                "R' U' R U R' U R U2 F R' U R U' F' R' U2 R"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 142",
            "algs": [
                "R U R' U R U' R' U R U' R' U' L' U R U' R' L"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 143",
            "algs": [
                "R U2 R D R' U2 R D' R' U2 R' U' R U' R'"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 144",
            "algs": [
                "R U' R' U R U R' U2 R' D' R U R' D R2 U R'"
            ],
            "subsets": ["U6"]
        },
        {
            "name": "ZBLL 145",
            "algs": [
                "R U2 R' U2 R' U' R U R U' R' U2 R' U2 R"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 146",
            "algs": [
                "R U R' U R U' R' U R U' R' U R U2 R'"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 147",
            "algs": [
                "R U2 R' U' R U' R' U2 R U R' U R U2 R'"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 148",
            "algs": [
                "R U R' U R U2 R' U2 R U2 R' U' R U' R'"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 149",
            "algs": [
                "R2 U R' U R' U' R U' R' U' R U R U' R2"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 150",
            "algs": [
                "R2 U' R U' R U R' U R U R' U' R' U R2"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 151",
            "algs": [
                "R' U2 R U R' U R U' R U2 R' U' R U' R'"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 152",
            "algs": [
                "R U2 R' U' R U' R' U R' U2 R U R' U R"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 153",
            "algs": [
                "R2 U R' U' R' U R U R' U R U' R U' R2"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 154",
            "algs": [
                "r U r' U R U' R' U R U' R' M' U R U2' r'"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 155",
            "algs": [
                "R U R' U R U2 R' U R' U' R U' R' U2 R"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 156",
            "algs": [
                "R' U' R U' R' U2 R U' R U R' U R U2 R'"
            ],
            "subsets": ["L1"]
        },
        {
            "name": "ZBLL 157",
            "algs": [
                "F R U' R' U' R U R D R' U' R D' R' U2 R' U' F'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 158",
            "algs": [
                "F R U R2' F R F' R U' R' F'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 159",
            "algs": [
                "L' U2 R U' R' U2 L R U' R'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 160",
            "algs": [
                "R' U' R U R' F' R U R' U' R' F R2"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 161",
            "algs": [
                "R' U F' R U R' U' R' F R2 U' R' U' R U R' U' R"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 162",
            "algs": [
                "R U' R' U R U R' U R U' R2' D' R U R' D R"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 163",
            "algs": [
                "r U2 R r2 F R' F' r2 U2 r'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 164",
            "algs": [
                "r U2 r2 F R F' r2 R' U2 r'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 165",
            "algs": [
                "F R U R' U' F' r U r' U R U' R' r U' r'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 166",
            "algs": [
                "r U r' R U R' U' r U' r' F U R U' R' F'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 167",
            "algs": [
                "R U R' U R U' R' F2 R U2 R' U2 R' F2 R2 U' R'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 168",
            "algs": [
                "R U R2 F2 R U2 R U2 R' F2 R U R' U' R U' R'"
            ],
            "subsets": ["L2"]
        },
        {
            "name": "ZBLL 169",
            "algs": [
                "F' r U R' U' r' F R"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 170",
            "algs": [
                "R' U' R U R' F2 R U2 R' U2 R' F2 R2"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 171",
            "algs": [
                "F' R U2 R' U2 R' F R U R U' R'"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 172",
            "algs": [
                "R' U R U' R' U R U R' U' R2 D R' U R D' R'"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 173",
            "algs": [
                "F R U' R' U' R U2 R' U' F'"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 174",
            "algs": [
                "R' U' R U2 R' F' R U R' U' R' F R2 U R' U2 R"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 175",
            "algs": [
                "R' F R U R U' R' F' U R U R' U R U' R'"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 176",
            "algs": [
                "R2 D' R U' R' D R U R' U' R' U' R U R U R U' R"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 177",
            "algs": [
                "F R' F' R U R U' R' F U R U' R' U R U' R' F'"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 178",
            "algs": [
                "F' R U2 R' U2 R' F U2 R U R U' R2 U2 R"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 179",
            "algs": [
                "R U R' U R' D' R U2 R' D R2 U' R' U R U' R'"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 180",
            "algs": [
                "R' U' R' D' R U2 R' D R U R U' R' U' R"
            ],
            "subsets": ["L3"]
        },
        {
            "name": "ZBLL 181",
            "algs": [
                "F R' F' r U R U' r'"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 182",
            "algs": [
                "R U R' U' R B2 R' U2 R U2 R B2 R2"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 183",
            "algs": [
                "F R U R' U' R' F' R U2 R U2 R'"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 184",
            "algs": [
                "R U' R' U R U' R' U' R U R2 D' R U' R' D R"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 185",
            "algs": [
                "R' F' R U R' U' R' F R U' R U R' U R"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 186",
            "algs": [
                "R U R' U R U R' U' R U R D R' U2 R D' R' U' R'"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 187",
            "algs": [
                "L R U' R' U R L' U R' U R U' R'"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 188",
            "algs": [
                "L U' R U R' L' U2 R U' R' U' R U' R'"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 189",
            "algs": [
                "R' U2 R U R' U' F' R U R' U' R' F R2 U R' U R"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 190",
            "algs": [
                "R' U2 R2 U R' U' R' U2 F R U R U' R' F'"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 191",
            "algs": [
                "R U R' U R U' R' U' L' U R U' M' x'"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 192",
            "algs": [
                "R U R D R' U2 R D' R' U' R' U R U R'"
            ],
            "subsets": ["L4"]
        },
        {
            "name": "ZBLL 193",
            "algs": [
                "R' U2 R' D' R U2 R' D R2"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 194",
            "algs": [
                "R' U2 R' D' r U2 r' D R2"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 195",
            "algs": [
                "R D R' U2 R D' R' U' R' U2 R U' R' U' R"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 196",
            "algs": [
                "R U2 R U R U' R2 D R' U R D' R U R'"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 197",
            "algs": [
                "R U R' U2 R U R' U2 y' R' U2 R U' R' U' R"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 198",
            "algs": [
                "R' U2 R U R2 D' R U R' D R2"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 199",
            "algs": [
                "R U R' U' R U' R' U L' U R U' L U' R'"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 200",
            "algs": [
                "R U' R' U2 R U R' U2 R U R' U R2 D R' U' R D' R2"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 201",
            "algs": [
                "R' U2 R U2 R' U' R2 D R' U2 R D' R2 U2 R"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 202",
            "algs": [
                "F' R U R' U' R' F R2 U' R' U' R U' R' U R U R'"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 203",
            "algs": [
                "R U' R2 F2 R U2 R U2 R' F2 U2 R U' R'"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 204",
            "algs": [
                "R' U R2 D R' U R D' R' U2 R' U R U R' U' R"
            ],
            "subsets": ["L5"]
        },
        {
            "name": "ZBLL 205",
            "algs": [
                "R U2 R D R' U2 R D' R2"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 206",
            "algs": [
                "R' F' R U R' U' R' F R2 U' R' U2 R"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 207",
            "algs": [
                "L' U R U' L U R2 U2 R U R' U R"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 208",
            "algs": [
                "F R U R' U' R' F' U' R U R U' R' U' R' U R"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 209",
            "algs": [
                "R' U' R U2 R' U' R y U2 R U2 R' U R U R'"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 210",
            "algs": [
                "R U2 R' U' R2 D R' U' R D' R2"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 211",
            "algs": [
                "R' U' R U R' U R U' L U' R' U L' U R"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 212",
            "algs": [
                "R' U R' D' R U R' U2 R U R' D U R U' R"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 213",
            "algs": [
                "R U2 R' U2 R U R2 D' R U2 R' D R2 U2 R'"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 214",
            "algs": [
                "R U R' U R U2 R D R' U2 R D' R' U2 R'"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 215",
            "algs": [
                "R' U R2 B2 R' U2 R' U2 R B2 U2 R' U R"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 216",
            "algs": [
                "R U' R2 D' R U' R' D R U2 R U' R' U' R U R'"
            ],
            "subsets": ["L6"]
        },
        {
            "name": "ZBLL 217",
            "algs": [
                "R' U' R U R U2 R' U' R U' R2 U2 R"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 218",
            "algs": [
                "R U R' U' R' U2 R U R' U R2 U2 R'"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 219",
            "algs": [
                "R' U2 R U R' U R2 U R' U R U2 R'"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 220",
            "algs": [
                "R U2 R' U' R U' R2 U' R U' R' U2 R"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 221",
            "algs": [
                "R U2 R' U2 R U' R' U2 R U' R' U2 R U R'"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 222",
            "algs": [
                "R' U2 R U2 R' U R U2 R' U R U2 R' U' R"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 223",
            "algs": [
                "R U' R' U2 R U R' U2 R U R' U2 R U2 R'"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 224",
            "algs": [
                "R' U R U2 R' U' R U2 R' U' R U2 R' U2 R"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 225",
            "algs": [
                "R' U2 R2 U R2 U R2 U2 R'"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 226",
            "algs": [
                "R U2 R2 U' R2 U' R2 U2 R"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 227",
            "algs": [
                "R U R' U' R' U' R U R U R' U' R' U R U' R U' R'"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 228",
            "algs": [
                "R U2 R' U' R U' R' U' R U2 R' U' R U' R'"
            ],
            "subsets": ["Pi1"]
        },
        {
            "name": "ZBLL 229",
            "algs": [
                "R2 U R' U2 R' U' R U R D R' U R D' R' U R U' R2'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 230",
            "algs": [
                "F R2 U' R U2 R U R' U R' U R2 F'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 231",
            "algs": [
                "F U R' U' R2 U' R2 U2 R U2 R U R' F'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 232",
            "algs": [
                "r' U' R U' R' U R U' R' U R' F R F' U r"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 233",
            "algs": [
                "R U2 R' U' F' R U2 R' U' R U' R' F R U' R'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 234",
            "algs": [
                "R U R' U r' F R F' r U' R' U R U2' R'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 235",
            "algs": [
                "r U R' U R' F R F' R U' R' U R U2' r'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 236",
            "algs": [
                "R U R' U' R U R2 D' R U' R' D R U' R U2 R'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 237",
            "algs": [
                "R U2 R' U R' D' R U R' D R2 U' R' U R U' R'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 238",
            "algs": [
                "R' U2 R U' R D R' U' R D' R2 U R U' R' U R"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 239",
            "algs": [
                "R2 D R' U' R D' R' U' R' U R U' R' U' R U' R'"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 240",
            "algs": [
                "R2 D' R U R' D R U R U' R' U R U R' U R"
            ],
            "subsets": ["Pi2"]
        },
        {
            "name": "ZBLL 241",
            "algs": [
                "F U R U2 R' U R U R' F' R U2 R' U' R U' R'"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 242",
            "algs": [
                "r U' r' U' r U r' U' l R U' R' U l'"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 243",
            "algs": [
                "r' U r U r' U' r U R2 F R F' R"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 244",
            "algs": [
                "r' U' R U' R' U2 r U' R U2 R' U2 R' F R F'"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 245",
            "algs": [
                "R' U' R U R2 F' R U R U' R' F U' R U R' U R"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 246",
            "algs": [
                "R U2 R D' R U' R' D R' U' R2 U2 R"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 247",
            "algs": [
                "R' U' R U' R2 D' R U R' D R2 U' R' U2 R"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 248",
            "algs": [
                "L' U R U' L U' R' U' R U' R'"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 249",
            "algs": [
                "R U' L' U R' U L U L' U L"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 250",
            "algs": [
                "R2 D' R U2 R' D R2 U R2 D' R U R' D R2"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 251",
            "algs": [
                "R2 D R' U2 R D' R2 U' R2 D R' U' R D' R2"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 252",
            "algs": [
                "R U2 R2 F R U R U2 R' U' R U2 R' U' F' R U R'"
            ],
            "subsets": ["Pi3"]
        },
        {
            "name": "ZBLL 253",
            "algs": [
                "R U2 R2 U' R U' R' U2 F R U R U' R' F'"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 254",
            "algs": [
                "R U R' U R U2 R2 F' r U R U' r' F"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 255",
            "algs": [
                "r' F' r U' r' F2 r2 U R' U' r' F R F'"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 256",
            "algs": [
                "F R U R' U' R' F' R U2 R' U' R2 U' R2 U2 R"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 257",
            "algs": [
                "R' U' R L U2 R' U2 R U2 L' U R' U2 R"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 258",
            "algs": [
                "F U' R U' R' U R U R' U2 R U2 R' U F'"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 259",
            "algs": [
                "R2 D' R U' R' D R U R' D' R U R' D R U R U' R' U' R"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 260",
            "algs": [
                "R' U' F' R U R' U' R' F R2 U2' R' U2 R"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 261",
            "algs": [
                "R U R' U R U' R' U' R' F' R U2 R U2' R' F"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 262",
            "algs": [
                "R' U' R' D' R U R' D R' U R' U R U2 R'"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 263",
            "algs": [
                "R U R D R' U' R D' R U' R U' R' U2 R"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 264",
            "algs": [
                "F U R U' R' U R U2 R' U' R U R' F'"
            ],
            "subsets": ["Pi4"]
        },
        {
            "name": "ZBLL 265",
            "algs": [
                "r' F' r U r U2 r' F2 U' R U R' U' R U' R'"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 266",
            "algs": [
                "R U2 R' U2 R' F R2 U' R' U2 R U2 R' U' F'"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 267",
            "algs": [
                "R' F R U R' U' R' F' R2 U' R' U R U' R' U2 R"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 268",
            "algs": [
                "R' L U2 R2 U R2 U R U L' U' R U2 R'"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 269",
            "algs": [
                "l U2 l' U2 R' U2 R B2 U R' U R"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 270",
            "algs": [
                "R U R' U F2 R U2 R' U2 R' F2 R"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 271",
            "algs": [
                "R' U2 R U R' U R2 U' L' U R' U' L"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 272",
            "algs": [
                "R U R' U R U' R' U R U' R D R' U' R D' R2"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 273",
            "algs": [
                "R U R' U' R' F R2 U R' U' R U R' U' F'"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 274",
            "algs": [
                "R2 D R' U2' R D' R2' U' R U' R' U R U2' R' U' R U' R'"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 275",
            "algs": [
                "R U2 R' U' R U R' U2 L' U R U' M' x'"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 276",
            "algs": [
                "L R' U' R U L' U2 R' U R U' R' U2 R"
            ],
            "subsets": ["Pi5"]
        },
        {
            "name": "ZBLL 277",
            "algs": [
                "R U R' U R U' R2' F R F' R U' R' F' U F"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 278",
            "algs": [
                "F U R U2 R' U2 R U R2 F' R U2 R U2 R'"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 279",
            "algs": [
                "R U' R' U' R U' R' U R U R' U R' F' R U R U' R' F"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 280",
            "algs": [
                "R' U2 R U R' U' R U R2 F R U R U' R' F' R"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 281",
            "algs": [
                "R' F2 R U2 R U2 R' F2 U' R U' R'"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 282",
            "algs": [
                "R' U' R U' B2 R' U2 R U2 l U2 l'"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 283",
            "algs": [
                "R U2 R' U' R U' R2 U L U' R U L'"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 284",
            "algs": [
                "R' U' R U' R' U R U' R' U R' D' R U R' D R2"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 285",
            "algs": [
                "F U R U' R' U R U' R2 F' R U R U' R'"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 286",
            "algs": [
                "R U R' U R U2' R' U' R U R' U R2 D R' U2 R D' R2'"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 287",
            "algs": [
                "R' U2 R U R' U' R U2 L U' R' U R L'"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 288",
            "algs": [
                "R L' U R' U' L U2 R U' R' U R U2 R'"
            ],
            "subsets": ["Pi6"]
        },
        {
            "name": "ZBLL 289",
            "algs": [
                "R U2 R' U' R U' R' U' R' U' R U' R' U2 R"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 290",
            "algs": [
                "R' U2 R U R' U R U R U R' U R U2 R'"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 291",
            "algs": [
                "R' U' R U' R' U R U' R' U2 R"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 292",
            "algs": [
                "R U R' U R U' R' U R U2 R'"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 293",
            "algs": [
                "R' U2 R U R' U' R U R' U R"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 294",
            "algs": [
                "R U2 R' U' R U R' U' R U' R'"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 295",
            "algs": [
                "R U R' U R U' R' U R U' R' U R' U' R2 U' R' U R' U R"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 296",
            "algs": [
                "R U R' U R U2 R' U' R' U2 R U R' U R"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 297",
            "algs": [
                "R U2 R D R' U' R D' R2 U' R' F R U R U' R' F'"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 298",
            "algs": [
                "F U R U' R' U R U' R' U R U' R' F'"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 299",
            "algs": [
                "R U R' y' U R' U R U' R2 F R F' R"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 300",
            "algs": [
                "R' U' R y U' R U' R' U R l U' R' U l'"
            ],
            "subsets": ["H1"]
        },
        {
            "name": "ZBLL 301",
            "algs": [
                "F R U R' U' R U R' U' F' U R' F' U' F U R"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 302",
            "algs": [
                "R' U' R U' R' U2 R U R' U' R U R' F' R U R' U' R' F R2"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 303",
            "algs": [
                "L' U L U' L' U' L U R' U' R U L' U' L U2 R' U' R"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 304",
            "algs": [
                "R U' R' U R U R' U' L U L' U' R U R' U2 L U L'"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 305",
            "algs": [
                "R U R' U R U2 R' F R U' R' U' R U2 R' U' F'"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 306",
            "algs": [
                "R U R2 F R F' r U' r' U r U r' U2"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 307",
            "algs": [
                "R' F R' F' R2 U' r' U r U' r' U' r"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 308",
            "algs": [
                "R' U' R U' R' U' L U' R U L'"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 309",
            "algs": [
                "R U R' U R U L' U R' U' L"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 310",
            "algs": [
                "R' U' R U' R' U F' R U R' U' R' F R2 U' R' U R"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 311",
            "algs": [
                "R U R' U R' U' R2 U' R2 U' L U' R U L'"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 312",
            "algs": [
                "R' U2' R U R2' D' R U' R' D R2 U R' U R"
            ],
            "subsets": ["H2"]
        },
        {
            "name": "ZBLL 313",
            "algs": [
                "R U2 R' U' R2 D R' U R D' R2' U' R U' R'"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 314",
            "algs": [
                "F R U' R' U' R U2 R' U' F' U R U R' U R U2 R'"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 315",
            "algs": [
                "R2 D' R U' R' D R2 U' R2 D' R U2 R' D R2"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 316",
            "algs": [
                "R2 D R' U R D' R2' U R2 D R' U2 R D' R2'"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 317",
            "algs": [
                "F R' F' r U R U' r2 F2 r U r' F r"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 318",
            "algs": [
                "R U R' U' R' F R U R U' R' F' R U R' U R U2 R'"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 319",
            "algs": [
                "R' U2 R U' L U2 R' U2 R U2 L' R' U R"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 320",
            "algs": [
                "R U2 R' U L' U2 R U2 R' U2 L R U' R'"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 321",
            "algs": [
                "F U' R U2 R' U2 R U' R' U' R U R' U F'"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 322",
            "algs": [
                "R' F R U R' U' F' R U' R' U R' F R F' U R"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 323",
            "algs": [
                "R U2 R' U' R U' R D' R U' R' D R U R"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 324",
            "algs": [
                "R U2 R2 F U' R2 U' R2 U F' U R"
            ],
            "subsets": ["H3"]
        },
        {
            "name": "ZBLL 325",
            "algs": [
                "R' U2 R U2' R2 F' R U R U' R' F U R"
            ],
            "subsets": ["H4"]
        },
        {
            "name": "ZBLL 326",
            "algs": [
                "F B' R2 B R2 U' R2 U' R2 U R2 F'"
            ],
            "subsets": ["H4"]
        },
        {
            "name": "ZBLL 327",
            "algs": [
                "R' U' R U' R' U R U R' F R U R' U' R' F' R2"
            ],
            "subsets": ["H4"]
        },
        {
            "name": "ZBLL 328",
            "algs": [
                "F R U' R' U R U2 R' U' R U R' U' F'"
            ],
            "subsets": ["H4"]
        },
        {
            "name": "ZBLL 329",
            "algs": [
                "R' U R2 U R' U R U2 R U2 R U R' U R2"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 330",
            "algs": [
                "R' U2 R2 U R U' R' U R U R2 U' R'"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 331",
            "algs": [
                "R U R' U R U2 R'"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 332",
            "algs": [
                "R' U2 R U R' U R"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 333",
            "algs": [
                "R U R2 U' R2 U' R2 U2 R2 U2 R'"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 334",
            "algs": [
                "R' U' R U' R U R2 U R2 U2 R'"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 335",
            "algs": [
                "R U R' U' R' U2 R U R U' R' U R' U R"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 336",
            "algs": [
                "R' U' R U R U R' U' R' U R U R U' R'"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 337",
            "algs": [
                "R U R' U R U' R' U R' U' R2 U' R' U R' U R"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 338",
            "algs": [
                "R U R' U R U R U R U R U' R' U' R2"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 339",
            "algs": [
                "R U R' U R' U' R2 U' R' U R' U' R U R' U R"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 340",
            "algs": [
                "R U R' U R U' R' U R' U' R' U R U' R' U' R2 U R"
            ],
            "subsets": ["S1"]
        },
        {
            "name": "ZBLL 341",
            "algs": [
                "F U' R' U R U F' R U R2 U R2 U2 R'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 342",
            "algs": [
                "R' D' R U' R' D R U2 R U R' U2 R U R'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 343",
            "algs": [
                "R' U2 R U R' U' R F U' R' U' R U F'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 344",
            "algs": [
                "R' U R U2 R' U R U2 R D R' U' R D' R'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 345",
            "algs": [
                "L' U2 R U' R' U2 L U R U' R' U R U2 R'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 346",
            "algs": [
                "F R U R' U' R U R2 U' F' U R U R U' R'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 347",
            "algs": [
                "R U R' F' R U R' U R U2 R' F R U' R'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 348",
            "algs": [
                "R U2 L' R' U2 R U2 R' U2 L U' R U' R'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 349",
            "algs": [
                "R U' R2 U2 D' R U R' U D R2 U R'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 350",
            "algs": [
                "F U R' F R F' R U' R' U R U' R' F'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 351",
            "algs": [
                "R U R' U' L' U R U' L U' L' U R' U' L"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 352",
            "algs": [
                "F R U' R U2 R' U2 R' U' R U2 R' U' R2 U' R2 F'"
            ],
            "subsets": ["S2"]
        },
        {
            "name": "ZBLL 353",
            "algs": [
                "R U' L' U R' U' L"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 354",
            "algs": [
                "R' U2 R U R' U' R' D' R U2 R' D R2"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 355",
            "algs": [
                "R' D U' R' U R U2 D' R2 U R' U' R'"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 356",
            "algs": [
                "R' U' R' U R2 D' U2 R U R' U' D R'"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 357",
            "algs": [
                "R2 D R' U2 R D' R' U' R' U R U2 R'"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 358",
            "algs": [
                "D' R U R' U R U' R' U' D R2 U' R U' R' U R' U R2"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 359",
            "algs": [
                "R U R' U R U R' U' R U R D R' U' R D' R' U2 R'"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 360",
            "algs": [
                "R' U2 R U R' U' R' D' R U' R' D R U R U' R' U' R"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 361",
            "algs": [
                "R' U2 F' R U R' U' R' F R U2 R"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 362",
            "algs": [
                "R2 U R U R' U' R' U' R' L' U R' U' L"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 363",
            "algs": [
                "R U2 R' U2 R' F R2 U R' U' R U R' U' F'"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 364",
            "algs": [
                "R U R' U R U' R' U' R' F R2 U' R' U' R U R' F'"
            ],
            "subsets": ["S3"]
        },
        {
            "name": "ZBLL 365",
            "algs": [
                "R2 U R' U R D R' U2 R D' R' U R U' R2'"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 366",
            "algs": [
                "R U R' U R U' R D R' U' R D' R2"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 367",
            "algs": [
                "R U' R' U' R U' R' U2 R U R2 D' R U2 R' D R"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 368",
            "algs": [
                "F U R U' R' U R U' l U' R2 D' R U R' x"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 369",
            "algs": [
                "R2 D' R U' R' D R U' R U R' U R"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 370",
            "algs": [
                "R U2 R' L' U2 R U R' U2 L R U2 R'"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 371",
            "algs": [
                "R' D' R U R' D R2 U' R' U R U R' U' R U2 R' U R U2 R'"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 372",
            "algs": [
                "R U' R' U' R U R D R' U2 R D' R2 U R U2 R'"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 373",
            "algs": [
                "R' U2 R' D' R U R' D R U' R U R' U R"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 374",
            "algs": [
                "R' U' R U' R2 F' R U R U' R' F U2 R"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 375",
            "algs": [
                "R U R' U R' D' R U R' D R U' R U2 R'"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 376",
            "algs": [
                "R U2 R' U' R U R' U' R U R D R' U2 R D' R2"
            ],
            "subsets": ["S4"]
        },
        {
            "name": "ZBLL 377",
            "algs": [
                "f R' F' R U2 R U2 R' U2 S'"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 378",
            "algs": [
                "R' D' R U R' D R2 U R' U2 R U R'"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 379",
            "algs": [
                "R' D R' U R D' U R U' R' U' R2 U R U' R'"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 380",
            "algs": [
                "R' U2 R U R2 D' R U' R' D R U2 R"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 381",
            "algs": [
                "R2 D' r U2 r' D R2 U R' U R"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 382",
            "algs": [
                "R' U2 R U R' U R' D' R U2 R' D R U2 R"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 383",
            "algs": [
                "R L' U R' U' L U2 R U2 R'"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 384",
            "algs": [
                "R2 D' R U2 R' D R2 U R' U R"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 385",
            "algs": [
                "R2 F R U R U' R' F' R U' R' U R"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 386",
            "algs": [
                "R U R' U R' U' R' D' R U R' D R' U2 R'"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 387",
            "algs": [
                "R' U' F U' R2 U R2 U F' R U' R U' R'"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 388",
            "algs": [
                "R2 D' R U2 R D2 R' U' R D2 R' U R' D R U2 R"
            ],
            "subsets": ["S5"]
        },
        {
            "name": "ZBLL 389",
            "algs": [
                "R U R' U' R U R2 D' R U2 R' D R2 U2 R'"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 390",
            "algs": [
                "R U R' U R U' R2 F' R U R U' R' F R U' R'"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 391",
            "algs": [
                "R U R' U R2 D r' U2 r D' R2"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 392",
            "algs": [
                "R' U R U2 R' U R2 D R' U R D' R'"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 393",
            "algs": [
                "R' U' R U R2 U' R' U' R U D' R U R' D R'"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 394",
            "algs": [
                "R U R' U R2 D R' U2 R D' R2"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 395",
            "algs": [
                "R' U2 R U2 L U' R' U L' R"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 396",
            "algs": [
                "R U2 R D R' U2 R D' R' U R' U R U2 R'"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 397",
            "algs": [
                "R U R2 F' R U2 R U2 R' F R U' R'"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 398",
            "algs": [
                "R U R' U' R U R2 D' R U R' D R U R U2 R'"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 399",
            "algs": [
                "F' R U R' U R U2 R' F U R U' R' U2 R U' R'"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 400",
            "algs": [
                "R' F R U R' U' R' F' D' R U R' D R2"
            ],
            "subsets": ["S6"]
        },
        {
            "name": "ZBLL 401",
            "algs": [
                "R2' D' R U2 R' D R U R' F R U R U' R' F' R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 402",
            "algs": [
                "R U2 R2 U' R' U R U' R' U' R2 U R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 403",
            "algs": [
                "R' U' R U' R' U2 R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 404",
            "algs": [
                "R U2 R' U' R U' R'"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 405",
            "algs": [
                "R' U' R2 U R2 U R2 U2 R2 U2 R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 406",
            "algs": [
                "R U R' U R' U' R2 U' R2 U2 R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 407",
            "algs": [
                "R' U' R U R U2 R' U' R' U R U' R U' R'"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 408",
            "algs": [
                "R U R' U' R' U' R U R U' R' U' R' U R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 409",
            "algs": [
                "R U R' U R' U' R U R' U' R2 U' R2 U R U' R' U R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 410",
            "algs": [
                "R' U' R U' R' U' R' U' R' U' R' U R U R2"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 411",
            "algs": [
                "R U R' U' R U R2 U' R2 U' R' U R U' R' U R' U R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 412",
            "algs": [
                "R U R' U R' U' R' U R U' R' U' R' U' R' U2 R"
            ],
            "subsets": ["AS1"]
        },
        {
            "name": "ZBLL 413",
            "algs": [
                "R U2 R2 U' R2 U' R' F U' R' U' R U F'"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 414",
            "algs": [
                "R D R' U R D' R' U2 R' U' R U2 R' U' R"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 415",
            "algs": [
                "R U2 R' U' R U R' L' U R U' L U2 R'"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 416",
            "algs": [
                "R U' R' U2 R U' R' U2 R' D' R U R' D R"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 417",
            "algs": [
                "F U' R' U R U F' R' U R U' R' U2 R"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 418",
            "algs": [
                "R U R' U L' U2 R U2 R' U2 R L U2 R'"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 419",
            "algs": [
                "R U R' F' R U2 R' U' R U' R' F R U' R'"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 420",
            "algs": [
                "R U R' U' R' U' F U R2 U' R' U R U' R' F'"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 421",
            "algs": [
                "R' U R2 U2 D R' U' R U' D' R2 U' R"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 422",
            "algs": [
                "R' U R U R' U r U' R' U R U r' R' F R F' U R"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 423",
            "algs": [
                "z D' R' D R U R' D' R U' R U R' D R U' z'"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 424",
            "algs": [
                "R U2 R' U' R U r' F r U2 R' U' r' F2 r"
            ],
            "subsets": ["AS2"]
        },
        {
            "name": "ZBLL 425",
            "algs": [
                "R' U L U' R U L'"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 426",
            "algs": [
                "R U2 R' U' R U R D R' U2 R D' R2"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 427",
            "algs": [
                "R D' U R U' R' U2 D R2 U' R U R"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 428",
            "algs": [
                "R U R U' R2 D U2 R' U' R U D' R"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 429",
            "algs": [
                "R2 D' R U2 R' D R U R U' R' U2 R"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 430",
            "algs": [
                "D R' U' R U' R' U R U D' R2 U R' U R U' R U' R2"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 431",
            "algs": [
                "R' U' R U' R' U' R U R' U' R' D' R U R' D R U2 R"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 432",
            "algs": [
                "R U2 R' U' R U R D R' U R D' R' U' R' U R U R'"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 433",
            "algs": [
                "F U R U' R' U R U' R2 F' R U2 R U2 R'"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 434",
            "algs": [
                "F R U' R' U R U R2 F' R U R U R' U' R U' R'"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 435",
            "algs": [
                "R' U2 R' F' R U R U' R' F U2 R"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 436",
            "algs": [
                "L' U R U' L R U R U R U' R' U' R2"
            ],
            "subsets": ["AS3"]
        },
        {
            "name": "ZBLL 437",
            "algs": [
                "R D' R2 D R2 U' R2 D' R2 D R2 U R"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 438",
            "algs": [
                "R' U' R U' R' U R' D' R U R' D R2"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 439",
            "algs": [
                "l U' R' D R2 U l' U R' U' R U R' U' F'"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 440",
            "algs": [
                "R' D' R U2 R' D R2 U' R' U2 R U R' U R U R'"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 441",
            "algs": [
                "R2 D R' U R D' R' U R' U' R U' R'"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 442",
            "algs": [
                "R U2 R' L' U2 R U' R' U2 L R U2 R'"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 443",
            "algs": [
                "R U R' U' R' U' R U R U' R' U' R2 D' R U' R' D R U2 R"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 444",
            "algs": [
                "R U2 R' U' R2 D R' U2 R D' R' U' R' U R U R'"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 445",
            "algs": [
                "R U2 R' U R' D' R U' R' D R U' R U' R'"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 446",
            "algs": [
                "R2 D R' U2 R D' R' U' R' U R U' R' U R U2 R'"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 447",
            "algs": [
                "R' U' R U' R D R' U' R D' R' U R' U2 R"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 448",
            "algs": [
                "R' U2 F' R U R' U' R' F R2 U R' U R"
            ],
            "subsets": ["AS4"]
        },
        {
            "name": "ZBLL 449",
            "algs": [
                "R U2 R2 D' R U2 R' D R2 U' R' U R U' R'"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 450",
            "algs": [
                "R D R' U' R D' R2 U' R U2 R' U' R"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 451",
            "algs": [
                "R D' R U' R' D U' R' U R U R2 U' R' U R"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 452",
            "algs": [
                "R U R' F' R U R' U' R' F R2 U R' U' R U' R'"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 453",
            "algs": [
                "R2 D r' U2 r D' R2 U' R U' R'"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 454",
            "algs": [
                "R U2 R' U' R U' R D R' U2 R D' R' U2 R'"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 455",
            "algs": [
                "L R' U' R U L' U2 R' U2 R"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 456",
            "algs": [
                "R2 D R' U2 R D' R2 U' R U' R'"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 457",
            "algs": [
                "R U R' F' R U2 R' U2 R' F R2 U' R'"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 458",
            "algs": [
                "R U2' R' U' R' D' R U' R' D R2 U' R' U R U' R'"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 459",
            "algs": [
                "R U R' U2 R U R' U' F' R U2 R' U' R U' R' F"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 460",
            "algs": [
                "R2 D' R U' R' D F R U R U' R' F' R"
            ],
            "subsets": ["AS5"]
        },
        {
            "name": "ZBLL 461",
            "algs": [
                "R U2 R' U' F' R U R' U' R' F R2 U' R'"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 462",
            "algs": [
                "R' U2 R' D' R U R' D R2 U' R' U2 R"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 463",
            "algs": [
                "R' U' R U' R2 D' r U2 r' D R2"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 464",
            "algs": [
                "R U' R' U2 R U' R2 D' R U' R' D R"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 465",
            "algs": [
                "R U R' U' R2 U R U R' U' D R' U' R D' R"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 466",
            "algs": [
                "R' U' R U' R2 D' R U2 R' D R2"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 467",
            "algs": [
                "R U2 R' U2 L' U R U' R' L"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 468",
            "algs": [
                "R' U2 R' D' R U2 R' D R U' R U' R' U2 R"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 469",
            "algs": [
                "R' U' R U R' F R U R' U' R' F' R2"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 470",
            "algs": [
                "R U2 R D' R U' R' D R U R U' R U' R'"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 471",
            "algs": [
                "R U R' U R' F U' R2 U' R2 U F' U R"
            ],
            "subsets": ["AS6"]
        },
        {
            "name": "ZBLL 472",
            "algs": [
                "R U R' U R' U' R2 U' R D' R U R' D R U R"
            ],
            "subsets": ["AS6"]
        }
    ]
}