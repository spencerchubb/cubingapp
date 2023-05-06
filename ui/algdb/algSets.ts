export type AlgSet = {
    name: string,
    cases: number,
    puzzle: string,
    description: string[],
    recommended: string[],
}

export const algSets: AlgSet[] = [
    {
        "name": "2x2 CLL",
        "cases": 42,
        "puzzle": "2x2",
        "description": [
            "2x2 CLL stands for Corners of Last Layer, and it is used to solve the last layer of the 2x2 Rubik's Cube. This algorithm set is for cubers who want to take 2x2 more seriously. With CLL, you'll be able to solve the last layer in one step instead of two.",
            "After CLL, you can also learn EG1 and EG2. These algorithm sets are used to solve the cube after solving the first face (NOT the first layer). Solving one face is a lot less restrictive than solving one layer, so this leads to more efficient solutions. If you want to become a 2x2 master, you should start with CLL, then progress to EG1 and EG2."
        ],
        "recommended": ["2x2 PBL", "2x2 EG1", "2x2 EG2"]
    },
    {
        "name": "2x2 EG1",
        "cases": 42,
        "puzzle": "2x2",
        "description": [
            "EG1 is commonly learned after CLL. CLL, EG1, and EG2 go hand in hand. These three algorithm sets will allow you to solve the entire cube after solving one face.",
            "CLL: First layer is solved. This occurs 1/6th of the time",
            "EG1: First layer has an adjacent swap. This occurs 4/6th of the time",
            "EG2: First layer has a diagonal swap. This occurs 1/6th of the time"
        ],
        "recommended": ["2x2 PBL", "2x2 CLL", "2x2 EG2"]
    },
    {
        "name": "2x2 EG2",
        "cases": 42,
        "puzzle": "2x2",
        "description": [
            "EG2 is commonly learned after EG1. CLL, EG1, and EG2 go hand in hand. These three algorithm sets will allow you to solve the entire cube after solving one face.",
            "CLL: First layer is solved. This occurs 1/6th of the time",
            "EG1: First layer has an adjacent swap. This occurs 4/6th of the time",
            "EG2: First layer has a diagonal swap. This occurs 1/6th of the time"
        ],
        "recommended": ["2x2 PBL", "2x2 CLL", "2x2 EG1"]
    },
    {
        "name": "2x2 PBL",
        "cases": 6,
        "puzzle": "2x2",
        "description": [
            "PBL stands for Permutation of Both Layers. It is a good intermediate method for 2x2 solvers after they have learned a beginner method.",
            "Instead of solving a layer, you can begin by solving a face. That means the first layer doesn't have to be permuted, which leads to more efficient solutions for the first step. Then you orient the last layer, and finally permuate both layers at the same time."
        ],
        "recommended": ["2x2 CLL", "2x2 EG1", "2x2 EG2"]
    },
    {
        "name": "4x4 PLL Parity",
        "cases": 22,
        "puzzle": "4x4",
        "description": [
            "When you are solving a 4x4, PLL parity can significantly slow down a solve. Luckily, there are some tricks you can use to minimize the damage without learning too mamny new algorithms.",
            "Some algorithms in this set are similar to PLL algorithms you already know, except there is a parity algorithm mixed in. By doing the parity algorithm strategically, you can turn a slow PLL into a fast PLL."
        ],
        "recommended": []
    },
    {
        "name": "COLL",
        "cases": 40,
        "puzzle": "3x3",
        "description": [
            "COLL is an algorithm set to solve the corners of the last layer when edges are already oriented. This algorithm set is typically used in CFOP, but it is optional. Cubers who learn COLL only use it when a good opportunity arises.",
            "The advantage of COLL is that it will lead to a PLL where the corners are solved. There is a 1/12th chance of a PLL skip, a good chance of a U perm, and it could also be an H perm or Z perm. COLL can give an advantage because U perms are faster than other PLLs like G, V, N, and E.",
            "In addition, COLL can be useful if you plan to learn ZBLL. COLL is a subset of ZBLL, so the algorithms you learn will be useful later on. COLL can also teach you how to recognize corner cases, which can be challenging if you have only learned sets like OLL and PLL."
        ],
        "recommended": ["ZBLL"]
    },
    {
        "name": "CMLL",
        "cases": 42,
        "puzzle": "3x3",
        "description": [
            "CMLL is the third step of the Roux method, after solving the first two blocks. The goal of this step is to solve the corners of the last layer without considering the M-slice.",
            "In contrast to other algorithm sets like COLL, this algorithm set IS allowed to disturb the M-slice. This gives more freedom and allows more efficient algorithms for some cases."
        ],
        "recommended": []
    },
    {
        "name": "OLLCP",
        "cases": 342,
        "puzzle": "3x3",
        "description": [
            "OLLCP stands for Orientation of Last Layer and Corner Permutation. As the name implies, this step solves OLL and corner permutation at the same time.",
            "OLLCP is typically used with CFOP, and it is an advanced algorithm set. It is recommended to learn OLL and PLL, then decide if OLLCP is worth it for you. Sometimes it is even used with Roux, in a variant called the Pinkie Pie method."
        ],
        "recommended": ["OLL", "COLL"]
    },
    {
        "name": "F2L",
        "cases": 69,
        "puzzle": "3x3",
        "description": [
            "First Two Layers (also called F2L) is the second stop of the CFOP Rubik's Cube method. This step comes after the cross.",
            "In F2L, there are 4 slots to solve. Typically cubers solve one slot at a time by forming a corner-edge pair, then inserting the pair into its slot.",
            "This algorithm set is different from other sets. With sets like OLL and PLL, you learn them through rote memorization. However, with F2L it is recommended to understand the algorithms intuitively."
        ],
        "recommended": ["OLL", "PLL"]
    },
    {
        "name": "OLL",
        "cases": 57,
        "puzzle": "3x3",
        "description": [
            "Orientation of Last Layer (also called OLL) is the third step of the CFOP Rubik's Cube method. This step is used to orient the last layer of the cube. That means if you start by solving the white cross, for example, the goal of OLL is to get all the yellow stickers on top."
        ],
        "recommended": ["F2L", "PLL"]
    },
    {
        "name": "PLL",
        "cases": 21,
        "puzzle": "3x3",
        "description": [
            "Permutation of Last Layer (also called PLL) is the last step of the CFOP Rubik's Cube method. Up to this point, the first two layers should be solved, and the last layer should be oriented. Since orientation of last layer was completed in the previous step, permuting the pieces should solve the rest of the cube."
        ],
        "recommended": ["F2L", "OLL"]
    },
    {
        "name": "Winter Variation",
        "cases": 27,
        "puzzle": "3x3",
        "description": [
            "Winter Variation (also called WV) is an advanced variation that's useful for methods like CFOP and ZZ. When you are solving the last slot of F2L, you can use winter variation as long as the edges are oriented. Winter variation allows you to skip OLL by altering how you insert the last pair. This technique is commonly called 'influencing' OLL."
        ],
        "recommended": ["OLL", "PLL"]
    },
    {
        "name": "ZBLL",
        "cases": 472,
        "puzzle": "3x3",
        "description": [
            "ZBLL is short for Zborowski-Bruchem Last Layer, and it is used to solve the entire last layer in 1 step. This algorithm set can be used when the last layer edges are oriented. Therefore, ZBLL is a subset of full 1-look last layer, which has approximately 6x as many algorithms because there are 6 cases for edge orientation.",
            "ZBLL is useful in many methods, including CFOP, Roux, and ZZ. Advanced cubers may decide to learn some or all of ZBLL depending on their goals."
        ],
        "recommended": ["OLL", "PLL"]
    }
];