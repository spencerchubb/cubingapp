/**
 * Run this file to pull analytics about usage.
 * Example: node analytics.js
 */

const admin = require("firebase-admin");
const fs = require("fs");

const keyPath = "C:\\Users\\chubbsw\\src\\virtual-cube-firebase-adminsdk-4s6p2-727492e1cc.json";
const serviceAccount = require(keyPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

admin.firestore().collection('analyticsEvents').get().then(querySnapshot => {
    // These args for JSON.stringify will pretty-print the json
    const docs = querySnapshot.docs;
    fs.writeFileSync("raw.json", JSON.stringify(docs, null, '\t'));
});