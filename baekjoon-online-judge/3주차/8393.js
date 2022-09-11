//합
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let A = Number(input);
let result = 0;

for (i = 0; i <= A; i++) {
    result += i
}

console.log(result);