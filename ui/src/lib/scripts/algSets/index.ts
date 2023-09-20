export type AlgSetCase = {
    name: string;
    subsets?: string[];
    setup?: string;
    algs?: string[];
    variants?: {
        name: string;
        algs: string[];
    }[];
}

export type AlgSet = {
    puzzle: string;
    setup?: string;
    pre?: string[]; // Options to perform before the alg
    post?: string[]; // Options to perform after the alg
    gray?: number[]; // Used to hide stickers
    purple?: number[]; // Used to indicate orientation of stickers
    cases: AlgSetCase[];
}