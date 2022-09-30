let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = input.shift();

let result = input.sort((a, b) => a - b);
console.log(result.join("\n"));
