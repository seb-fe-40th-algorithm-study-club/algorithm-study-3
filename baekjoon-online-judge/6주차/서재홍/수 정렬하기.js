let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let arr = input.slice(1, input.length);
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
