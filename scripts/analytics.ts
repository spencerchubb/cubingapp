import { getUserID, setUserID } from "./store";

const url = "http://54.209.248.96:3000"

/**
 * Return the userID from localStorage.
 * If it's not there, then generate an ID, store it in localStorage, and return it.
 */
function userID() {
    let _userID = getUserID();
    if (_userID) {
        return _userID;
    }

    // 2^63 - 1 = 9,223,372,036,854,775,807
    // This is the maximum integer in sqlite3
    _userID = Math.floor(Math.random() * 9_223_372_036_854_775_807);
    setUserID(_userID);
    return _userID;
}

/** Types of analytics events (AE) */
export enum AE {
    ViewCuble = "ViewCuble",
    ViewIndex = "ViewIndex",
    ViewPlay = "ViewPlay",
    ViewTrain = "ViewTrain",
}

export function addAnalyticsEvent(type: AE) {
    const body = {
        userID: userID(),
        type: type,
    };
    // console.log(body);
    fetch(`${url}/addAnalyticsEvent`, {
        method: "POST",
        body: JSON.stringify(body),
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
        });
}