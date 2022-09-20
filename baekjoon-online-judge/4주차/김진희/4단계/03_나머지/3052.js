const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => +ele % 42);

// const filteredArray = input.filter((ele, idx) => idx === input.indexOf(ele));
// console.log(filteredArray.length);
console.log([...new Set(input)].length);
