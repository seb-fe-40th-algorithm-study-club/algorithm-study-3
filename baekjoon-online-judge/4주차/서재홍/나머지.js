const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const count = new Set(input.map((x) => x % 42)).size;

console.log(count);
//
