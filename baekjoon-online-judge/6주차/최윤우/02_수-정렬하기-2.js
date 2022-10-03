const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let result = '';
let inputValue = input.sort((a, b) => a - b);
result = inputValue.join('\n');
console.log(result);
