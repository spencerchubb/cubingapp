import { type WCAPerson, fetchWCAPerson } from "../lib/scripts/wca";

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type State = {
    wcaId: string,
    loading: boolean,
    error?: string,
    wcaPerson?: WCAPerson,
    totalSingle?: number,
    totalAverage?: number,
}

const urlParams = new URLSearchParams(window.location.search);


let state: State = {
    wcaId: urlParams.get("wcaId") ?? "",
    loading: true,
    error: undefined,
    wcaPerson: undefined,
    totalSingle: undefined,
    totalAverage: undefined,
};

export const controller = {
    calculate: () => {
        if (!state.loading) {
            state.loading = true;
            callback(state);
        }
        
        const wcaId = state.wcaId;

        // Add to query params
        const url = new URL(window.location.href);
        setOrDelete(url, "wcaId", wcaId);
        window.history.pushState({}, "", url.toString());

        fetchWCAPerson(wcaId).then(wcaPerson => {
            state.wcaPerson = wcaPerson;

            state.error = wcaPerson.error;
            if (state.error) {
                state.loading = false;
                callback(state);
                return;
            }

            // If wcaPerson doesn't have an event, set it to the max rank.
            Object.entries(maxRanksSingle).forEach(([key, value]) => {
                if (!wcaPerson.personal_records[key]?.single) {
                    wcaPerson.personal_records[key] ||= {}; // Initialize if undefined
                    wcaPerson.personal_records[key].single = {
                        world_rank: value,
                        // Arbitrary values for the rest
                        best: 0,
                        continent_rank: 0,
                        country_rank: 0,
                    };
                }
            });
            Object.entries(maxRanksAverage).forEach(([key, value]) => {
                if (!wcaPerson.personal_records[key]?.average) {
                    wcaPerson.personal_records[key] ||= {}; // Initialize if undefined
                    wcaPerson.personal_records[key].average = {
                        world_rank: value,
                        // Arbitrary values for the rest
                        best: 0,
                        continent_rank: 0,
                        country_rank: 0,
                    };
                }
            });

            // Delete 333ft, 333mbo, magic, and mmagic
            ["333ft", "333mbo", "magic", "mmagic"].forEach(event => {
                delete state.wcaPerson?.personal_records[event];
            });
            
            state.totalSingle = 0;
            state.totalAverage = 0;
            for (const value of Object.values(wcaPerson.personal_records)) {
                state.totalSingle += value?.single?.world_rank ?? 0;
                state.totalAverage += value?.average?.world_rank ?? 0;
            }

            state.loading = false;
            callback(state);
        });
    },
};

function setOrDelete(url: URL, key: string, value: string, defaultVal?: string) {
    if (value && value !== defaultVal) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
}

(function initApp() {
    controller.calculate();
})();

const maxRanksSingle = {
    "222": 124185,
    "333": 191708,
    "333bf": 8515,
    "333fm": 8326,
    "333ft": 3265,
    "333mbf": 2886,
    "333mbo": 139,
    "333oh": 50278,
    "444": 57260,
    "444bf": 1342,
    "555": 27459,
    "555bf": 685,
    "666": 10845,
    "777": 8755,
    "clock": 13850,
    "magic": 4928,
    "minx": 21313,
    "mmagic": 2076,
    "pyram": 84086,
    "skewb": 47329,
};

const maxRanksAverage = {
    "222": 120247,
    "333": 187079,
    "333bf": 2390,
    "333fm": 3526,
    "333ft": 2384,
    "333oh": 39038,
    "444": 36974,
    "444bf": 252,
    "555": 17864,
    "555bf": 90,
    "666": 7723,
    "777": 6030,
    "clock": 10416,
    "magic": 4641,
    "minx": 12745,
    "mmagic": 2039,
    "pyram": 80227,
    "skewb": 45022,
    "sq1": 12183,
};
