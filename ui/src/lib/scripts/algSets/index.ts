export type AlgSetCase = {
    name: string;
    subsets?: string[];
    setup?: string;
    algs?: string[];
    variants?: {
        name: string;
        algs: string[];
    }[];
    pre?: () => string; // Perform before the alg
}

export type AlgSet = {
    puzzle: string;
    setup?: string;
    pre?: () => string; // Perform before the alg
    post?: () => string; // Perform after the alg
    gray?: number[]; // Used to hide stickers
    purple?: number[]; // Used to indicate orientation of stickers
    cases: AlgSetCase[];
}