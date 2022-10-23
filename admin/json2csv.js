let fs = require('fs');
let data = require('./zbllProgress.json');
data = data.sort((a, b) => b.score - a.score);

let csvString = 'alg,data\n';

data.forEach(datum => {
    csvString += `${datum.alg},${datum.score}\n`;
});

fs.writeFile('./zbllProgress.csv', csvString, err => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
    }
});