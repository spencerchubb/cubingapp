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
    data?: {
        event: string,
        single: number,
        average: number,
        singleColor: string,
        averageColor: string,
    }[],
}

const urlParams = new URLSearchParams(window.location.search);

let state: State = {
    wcaId: urlParams.get("wcaId") ?? "",
    loading: false,
    error: undefined,
    wcaPerson: undefined,
    totalSingle: undefined,
    totalAverage: undefined,
    data: undefined,
};

export const controller = {
    calculate: () => {
        const wcaId = state.wcaId;

        if (!wcaId) return;

        // Add to query params
        const url = new URL(window.location.href);
        url.searchParams.set("wcaId", wcaId);
        window.history.pushState({}, "", url.toString());

        state.loading = true;
        callback(state);

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

            state.data = Object.entries(wcaPerson.personal_records)
                .map(([event, value]) => {
                    const single = value?.single?.world_rank ?? 0;
                    const average = value?.average?.world_rank ?? 0;

                    return {
                        event,
                        single,
                        average,
                        singleColor: getColor(single, maxRanksSingle[event] ?? 0),
                        averageColor: getColor(average, maxRanksAverage[event] ?? 0),
                    };
                });

            state.loading = false;
            callback(state);
        });
    },
};

const maxRanksSingle = {
    "222": 129325,
    "333": 199014,
    "333bf": 8776,
    "333fm": 8582,
    "333ft": 3265,
    "333mbf": 2985,
    "333mbo": 139,
    "333oh": 52310,
    "444": 59396,
    "444bf": 1387,
    "555": 28500,
    "555bf": 716,
    "666": 11263,
    "777": 9079,
    "clock": 14953,
    "magic": 4928,
    "minx": 22382,
    "mmagic": 2076,
    "pyram": 87787,
    "skewb": 49360,
    "sq1": 17030,
};

const maxRanksAverage = {
    "222": 125257,
    "333": 194302,
    "333bf": 2487,
    "333fm": 3660,
    "333ft": 2384,
    "333oh": 40552,
    "444": 38276,
    "444bf": 279,
    "555": 18466,
    "555bf": 99,
    "666": 7995,
    "777": 6247,
    "clock": 11215,
    "magic": 4641,
    "minx": 13313,
    "mmagic": 2039,
    "pyram": 83794,
    "skewb": 46958,
    "sq1": 12718,
};

function getColor(rank: number, maxRank: number) {
    const score = (1 - rank / maxRank) * 100;

    // Calculate the red, green, and blue components of the color.
    // Divide by 120 to darken and improve contrast with white text.
    var red = Math.round((100 - score) * 255 / 120);
    var green = Math.round((score) * 255 / 120);
    var blue = 0;

    // Return the RGB string
    return "rgb(" + red + "," + green + "," + blue + ")";
}