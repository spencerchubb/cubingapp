/**
 * This file is used for doing more advanced analysis after the raw data has been pulled into a json file.
 */

const fs = require("fs");

let data = fs.readFileSync("raw.json");
data = JSON.parse(data);

const userFreq = {};
const typeFreq = {};

data.forEach(ele => {
    const fields = ele["_fieldsProto"];
    const type = fields.type.stringValue;
    const userID = fields.userID.doubleValue;
    const date = fields.date.integerValue;
    console.log({type, userID, date});

    if (userID in userFreq) {
        userFreq[userID] += 1;
    } else {
        userFreq[userID] = 1;
    }

    if (type in typeFreq) {
        typeFreq[type] += 1;
    } else {
        typeFreq[type] = 1;
    }
});

console.log(userFreq);
console.log(typeFreq);