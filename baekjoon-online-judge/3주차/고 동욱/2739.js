//구구단
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let A = Number(input[0]);

for (let i = 1; i < 10; i++) {
    console.log(`${A} * ${i} = ${A * i}`);
}