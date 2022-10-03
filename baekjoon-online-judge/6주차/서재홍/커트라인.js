let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = +input[0].split(" ")[1];
let scoreArr = input[1].split(" ").map(Number);
scoreArr.sort((a, b) => b - a);

console.log(scoreArr[num - 1]);
