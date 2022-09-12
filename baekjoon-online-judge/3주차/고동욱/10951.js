//A+B -4
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = input.length


for (let i = 0; i < max - 1; i++) {
    let A = Number(input[i].split(' ')[0])
    let B = Number(input[i].split(' ')[1])

    console.log(A + B)
}
