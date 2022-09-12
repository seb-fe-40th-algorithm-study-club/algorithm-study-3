const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputs = input[0].split(' ');

let caseNum = +inputs[0];
let limit = +inputs[1];

let numbers = input[1].split(' ');

result = '';
for (let i = 0; i < caseNum; i++) {
  if (+numbers[i] < limit) {
    result += numbers[i] + ' ';
  }
}

console.log(result);