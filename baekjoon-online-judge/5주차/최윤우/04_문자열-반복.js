const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const caseNum = +input[0];

let result = '';

for (let i = 1; i <= caseNum; i++) {
  let count = Number(input[i].split(' ')[0]);
  let cases = input[i].split(' ')[1];
  
  for (let j = 0; j < cases.length; j++) {
    for (let k = 0; k < count; k++) {
      result += cases[j];
    }
  }
  result += '\n';
}

console.log(result);