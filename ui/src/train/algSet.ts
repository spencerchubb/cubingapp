import * as AlgSetAPI from "../lib/scripts/api/algSet";

export const preBuiltSets = [
    "OLL",
    "PLL",
    "F2L",
    "CMLL",
    "ZBLL",
    "2x2 CLL",
    "2x2 EG1",
    "2x2 EG2",
    "2x2 TCLL+",
    "2x2 TCLL-",
    "Pyraminx L4E",
];

export class AlgSetLogic {
    callback: (state) => void;

    constructor(callback) {
        this.callback = callback;
    }

    async createAlgSet(set: string, algSets: AlgSetAPI.MinAlgSet[]) {
        const algSet = await AlgSetAPI.create(set);
        const newAlgSets = algSets
            ? [algSet, ...algSets]
            : [algSet];

        this.callback({
            algSets: newAlgSets,
            algSet,
            modalType: null,
        });
    }

    deleteAlgSet(id: number, algSets: AlgSetAPI.MinAlgSet[], algSet: AlgSetAPI.AlgSet) {
        AlgSetAPI.deleteSet(id);
        const newAlgSets = algSets.filter(algSet => algSet.id !== id);

        this.callback({
            algSets: newAlgSets,
        });
    }
}
