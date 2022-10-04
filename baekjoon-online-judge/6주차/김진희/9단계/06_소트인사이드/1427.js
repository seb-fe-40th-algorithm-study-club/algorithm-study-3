const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const answer = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .sort((a, b) => b - a)
  .join("");
console.log(answer);
