import * as AlgSetAPI from "../lib/scripts/api/algSet";
import { AlgSetStore } from "../lib/scripts/store";

export const preBuiltSets = [
    "OLL",
    "PLL",
    "F2L",
    "CMLL",
    "ZBLL",
    "2x2 CLL",
    "2x2 EG1",
    "2x2 EG2",
];

export class AlgSetLogic {
    callback: (state) => void;

    constructor(callback) {
        this.callback = callback;
    }

    chooseAlgSet(id: number, algSets: AlgSetAPI.MinAlgSet[]) {
        AlgSetStore.set(id);
        const algSet = algSets.find(algSet => algSet.id === id);
        
        this.callback({
            algSet,
            modalType: null,
        });
    }

    displayChooseAlgSet() {
        this.callback({ modalType: "choose alg set"} );
    }

    clickCustomSet() {
        this.callback({
            modalType: "create alg set",
            algSetEditing: {
                name: "",
            },
        });
    }

    async createPrebuiltAlgSet(uid: number, set: string, algSets: AlgSetAPI.MinAlgSet[]) {
        const algSet = await AlgSetAPI.createPrebuilt(uid, set);
        const newAlgSets = algSets
            ? [algSet, ...algSets]
            : [algSet];

        this.callback({
            algSets: newAlgSets,
            algSet,
            modalType: null,
        });
    }

    editAlgSet(id: number, algSets: AlgSetAPI.MinAlgSet[]) {
        const algSetEditing = algSets.find(algSet => algSet.id === id);
        this.callback({
            modalType: "edit alg set",
            algSetEditing,
        });
    }

    deleteAlgSet(id: number, algSets: AlgSetAPI.MinAlgSet[], algSet: AlgSetAPI.AlgSet) {
        AlgSetAPI.deleteSet(id);
        const newAlgSets = algSets.filter(algSet => algSet.id !== id);

        this.callback({
            algSets: newAlgSets,
        });
    }

    createAlgSet(algSet: AlgSetAPI.AlgSet, algSets: AlgSetAPI.MinAlgSet[]) {
        AlgSetAPI.create(algSet);
        const newAlgSets = [algSet, ...algSets];

        this.callback({
            modalType: null,
            algSet,
            algSets: newAlgSets,
        });
    }

    saveAlgSet(id: number, set: string, trainingAlgs: AlgSetAPI.TrainingAlg[], algSets: AlgSetAPI.MinAlgSet[]) {
        AlgSetAPI.update(id, set, trainingAlgs);
        const algSet = algSets.find(algSet => algSet.id === id);

        this.callback({
            modalType: null,
            algSet,
            algSets,
        });
    }
}
