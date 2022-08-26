function shuffle(array) {
    let i = array.length;

    // While there remain elements to shuffle...
    while (i != 0) {

        // Pick a remaining element...
        let r = Math.floor(Math.random() * i);
        i--;

        // And swap it with the current element.
        let temp = array[r];
        array[r] = array[i];
        array[i] = temp;
    }
    
    return array;
}

const turn = (pieces, i1, i2, i3, i4) => {
    const temp = pieces[i1];
    pieces[i1] = pieces[i2];
    pieces[i2] = pieces[i3];
    pieces[i3] = pieces[i4];
    pieces[i4] = temp;
}
const x = (pieces) => turn(pieces, 0, 1, 2, 3);
const y = (pieces) => turn(pieces, 1, 5, 3, 4);
const z = (pieces) => turn(pieces, 0, 4, 2, 5);

// Test x, y, z
// const example = [0, 1, 2, 3, 4, 5];
// x(example);
// y(example);
// z(example);
// console.log(example);

const freq = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

function determineValid(centers) {
    const cpy = [...centers];

    // Turn such that 0 is in the 0th index
    if (cpy[1] === 0) {
        x(cpy);
    } else if (cpy[2] === 0) {
        x(cpy); x(cpy);
    } else if (cpy[3] === 0) {
        x(cpy); x(cpy); x(cpy);
    } else if (cpy[4] === 0) {
        z(cpy);
    } else if (cpy[5] === 0) {
        z(cpy); z(cpy); z(cpy);
    }

    // Turn such that 1 is in the 1st index
    if (cpy[4] === 1) {
        y(cpy); y(cpy); y(cpy);
    } else if (cpy[3] === 1) {
        y(cpy); y(cpy);
    } else if (cpy[5] === 1) {
        y(cpy);
    }

    // Verify that the rest are correct
    return cpy[2] === 2 && cpy[3] === 3 && cpy[4] === 4 && cpy[5] === 5;
}

// Test determineValid
// console.log(determineValid([0, 1, 2, 3, 4, 5])); // t
// console.log(determineValid([1, 2, 3, 0, 4, 5])); // t
// console.log(determineValid([0, 5, 2, 4, 1, 3])); // t
// console.log(determineValid([1, 0, 2, 3, 4, 5])); // f

for (let j = 0; j < 100000; j++) {
    let centers = [0, 1, 2, 3, 4, 5];
    shuffle(centers);
    while (!determineValid(centers)) {
        shuffle(centers);
    }
    freq[0][centers[0]] += 1;
    freq[1][centers[1]] += 1;
    freq[2][centers[2]] += 1;
    freq[3][centers[3]] += 1;
    freq[4][centers[4]] += 1;
    freq[5][centers[5]] += 1;
}

console.log(freq);