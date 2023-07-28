import { type WCASumOfRanks, fetchWCASumOfRanks } from "../lib/scripts/wca";

let callback: (state) => void;

export function setCallback(_callback: (state) => void) {
    callback = _callback;
    return state;
}

type State = {
    wcaId: string,
    region: string,
    type: string,
    loading: boolean,
    data?: WCASumOfRanks,
}

const urlParams = new URLSearchParams(window.location.search);

const DEFAULT_REGION = "World";
const DEFAULT_TYPE = "Single";

let state: State = {
    wcaId: urlParams.get("wcaId") ?? "",
    region: urlParams.get("region") ?? DEFAULT_REGION,
    type: urlParams.get("type") ?? DEFAULT_TYPE,
    loading: true,
    data: undefined,
};

export const controller = {
    calculate: () => {
        if (!state.loading) {
            state.loading = true;
            callback(state);
        }
        
        const { wcaId, region, type } = state;

        // Add to query params
        const url = new URL(window.location.href);
        setOrDelete(url, "wcaId", wcaId);
        setOrDelete(url, "region", region, DEFAULT_REGION);
        setOrDelete(url, "type", type, DEFAULT_TYPE);
        window.history.pushState({}, "", url.toString());

        fetchWCASumOfRanks(type, region, wcaId)
            .then(data => {
                state.loading = false;
                state.data = data;
                callback(state);
            })
            .catch(console.error);
    },
};

function setOrDelete(url: URL, key: string, value: string, defaultVal?: string) {
    if (value && value !== defaultVal) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
}

(function initApp() {
    controller.calculate();
})();
