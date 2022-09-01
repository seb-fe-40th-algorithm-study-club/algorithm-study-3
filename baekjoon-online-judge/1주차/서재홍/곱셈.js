let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let ones = input[1] % 10;
console.log(input[0] * ones);

let tens = Math.floor((input[1] % 100) / 10);
console.log(input[0] * tens);

let hundreds = Math.floor(input[1] / 100);
console.log(input[0] * hundreds);

console.log(input[0] * input[1]);
