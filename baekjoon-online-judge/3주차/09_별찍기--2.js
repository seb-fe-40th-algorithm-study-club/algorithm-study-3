let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let result = '';

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i - 1; j++) {
    result += ' ';
  }
  for (let k = 0; k <=i; k++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);