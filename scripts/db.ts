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

    request = indexedDB.open("Solves", 1);

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
        const objectStore = db.createObjectStore("solves", { autoIncrement: true });
    };
}

type Solve = {
    /**
     * seconds
     */
    time: number,
    initialCubeState: number[],
    moves: Move[],
}

export function addSolve(solve: Solve) {
    open(() => {
        const transaction = db.transaction(["solves"], "readwrite");

        transaction.oncomplete = event => {
            console.log("Transaction complete");
        };

        transaction.onerror = event => {
            console.log("Transaction error");
        };

        const objectStore = transaction.objectStore("solves");
        objectStore.add(solve);
    });
}

export function getSolve(solveID: number, callback: (solve: Solve) => void) {
    open(() => {
        const transaction = db.transaction(["solves"]);

        transaction.onsuccess = event => {
            console.log("Transaction success");
        };
    
        transaction.onerror = event => {
            console.log("Transaction error");
        };
    
        const objectStore = transaction.objectStore("solves");
        objectStore.get(solveID).onsuccess = event => {
            callback(event.target.result);
        }
    });
}

export function getSolves(callback: (solves: Solve[]) => void) {
    open(() => {
        const transaction = db.transaction(["solves"]);

        transaction.onsuccess = event => {
            console.log("Transaction success");
        };
    
        transaction.onerror = event => {
            console.log("Transaction error");
        };

        const objectStore = transaction.objectStore("solves");
        objectStore.getAll().onsuccess = event => {
            callback(event.target.result);
        }
    });
}