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

    displayChooseAlgSet() {
        this.callback({ modalType: "choose alg set"} );
    }

    chooseAlgSet(id: number, algSets: AlgSetAPI.AlgSet[]) {
        AlgSetStore.set(id);
        const algSet = algSets.find(algSet => algSet.id === id);
        const state = {
            algSet,
            modalType: null,
        };
        this.callback(state);
    }

    async createPrebuiltAlgSet(uid: number, set: string, algSets: AlgSetAPI.AlgSet[]) {
        const algSet = await AlgSetAPI.createPrebuilt(uid, set);
        const newAlgSets = algSets
            ? [algSet, ...algSets]
            : [algSet];
        const state: any = {
            algSets: newAlgSets,
            algSet,
            modalType: null,
        };
        this.callback(state);
    }

    createCustomSet() {
        const state = {
            modalType: "edit alg set",
            algSetEditing: {
                name: "",
            },
        }
        this.callback(state);
    }

    editAlgSet(id: number, algSets: AlgSetAPI.AlgSet[]) {
        const algSetEditing = algSets.find(algSet => algSet.id === id);
        const state = {
            modalType: "edit alg set",

            algSetEditing,
        }
        this.callback(state);
    }

    deleteAlgSet(id: number, algSets: AlgSetAPI.AlgSet[], algSet: AlgSetAPI.AlgSet) {
        AlgSetAPI.deleteSet(id);
        const newAlgSets = algSets.filter(algSet => algSet.id !== id);

        const state = {
            algSets: newAlgSets,
        }
        this.callback(state);
    }

    saveAlgSet(id: number, set: string, trainingAlgs: AlgSetAPI.TrainingAlg[], algSets: AlgSetAPI.AlgSet[]) {
        AlgSetAPI.update(id, set, trainingAlgs);
        const algSet = algSets.find(algSet => algSet.id === id);
        const state = {
            modalType: null,
            algSet,
            algSets,
        }
        this.callback(state);
    }
}
