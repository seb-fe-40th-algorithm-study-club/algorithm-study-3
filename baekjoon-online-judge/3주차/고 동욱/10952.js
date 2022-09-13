//A+B -5
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = input.length
let result = 0

for (let i = 0; i < max; i++) {
    let A = Number(input[i].split(' ')[0])
    let B = Number(input[i].split(' ')[1])
    result = A + B

    if (result === 0) {
        break;
    } else {
        console.log(result)
    }
}
