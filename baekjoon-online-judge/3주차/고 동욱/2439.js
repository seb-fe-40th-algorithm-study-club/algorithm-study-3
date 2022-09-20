//별찍기 -2
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

let base = Number(input);

let star = new Array(base).fill(' ');

for (let i = base - 1; i >= 0; i--) {
    star[i] = '*';

    console.log(star.join(''));
}