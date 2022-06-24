/**
 * IndexedDB functions
 */

import { Move } from "./common/types";

let db;
let request;

function open(callback: Function) {
    // If db is already open, don't open again
    if (db) {
        callback();
        return;
    }

    request = indexedDB.open("SolveTimes", 1);

    request.onerror = event => {
        console.log("Why didn't you allow my web app to use IndexedDB?!");
    };

    request.onsuccess = (event: any) => {
        db = event.target.result;

        db.onerror = event => {
            // Generic error handler for all errors targeted at this database's
            // requests!
            console.error("Database error: " + event.target.errorCode);
        };

        // We can call this now that db is defined.
        callback();
    };

    request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore("times", { autoIncrement: true });
    };
}

type Time = {
    /**
     * seconds
     */
    solveTime: number,
    initialCubeState: number[],
    moves: Move[],
}

export function addTime(time: Time) {
    open(() => {
        const transaction = db.transaction(["times"], "readwrite");

        transaction.oncomplete = event => {
            console.log("Transaction complete");
        };

        transaction.onerror = event => {
            console.log("Transaction error");
        };

        const objectStore = transaction.objectStore("times");
        objectStore.add(time);
    });
}

export function getTime(solveID: number, callback: (time: Time) => void) {
    open(() => {
        const transaction = db.transaction(["times"]);

        transaction.onsuccess = event => {
            console.log("Transaction success");
        };
    
        transaction.onerror = event => {
            console.log("Transaction error");
        };
    
        const objectStore = transaction.objectStore("times");
        objectStore.get(solveID).onsuccess = event => {
            console.log(event.target.result);
        }
    });
}

export function getTimes(callback: (times: Time[]) => void) {
    open(() => {
        const transaction = db.transaction(["times"]);

        transaction.onsuccess = event => {
            console.log("Transaction success");
        };
    
        transaction.onerror = event => {
            console.log("Transaction error");
        };
    
        const results = [];

        const objectStore = transaction.objectStore("times");
        objectStore.openCursor().onsuccess = event => {
    
            const cursor = event.target.result;
            if (cursor) {
                results.push(cursor.value);
                cursor.continue();
            } else {
                console.log("No more entries!");
                callback(results);
            }
        };
    });
}