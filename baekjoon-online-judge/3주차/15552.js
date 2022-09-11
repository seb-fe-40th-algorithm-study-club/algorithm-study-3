//빠른 A+B
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = '';

for (let i = 1; i <= input[0]; i++) {
    let number = input[i].split(' ');
    answer += Number(number[0]) + Number(number[1]) + "\n";
}

console.log(answer);
