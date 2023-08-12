import * as AlgSetAPI from "../lib/scripts/api/algSet";

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
