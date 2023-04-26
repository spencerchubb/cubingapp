import * as AlgSetAPI from "../lib/scripts/api/algSet";
import { AlgSetStore } from "../lib/scripts/store";
import { updateModal } from "./modal";

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
        const state = updateModal("choose alg set");
        this.callback(state);
    }

    chooseAlgSet(id: number, algSets: AlgSetAPI.AlgSet[]) {
        AlgSetStore.set(id);
        const algSet = algSets.find(algSet => algSet.id === id);
        const state = {
            algSet,
            ...updateModal(null),
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
            ...updateModal(null),
        };
        this.callback(state);
    }

    createCustomSet() {
        const modalState = updateModal("edit alg set");
        const state = {
            ...modalState,
            algSetEditing: {
                name: "",
            },
        }
        this.callback(state);
    }

    editAlgSet(id: number, algSets: AlgSetAPI.AlgSet[]) {
        const modalState = updateModal("edit alg set");
        const algSetEditing = algSets.find(algSet => algSet.id === id);
        const state = {
            ...modalState,
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
        const modalState = updateModal(null);
        AlgSetAPI.update(id, set, trainingAlgs);
        const algSet = algSets.find(algSet => algSet.id === id);
        const state = {
            ...modalState,
            algSet,
            algSets,
        }
        this.callback(state);
    }
}
