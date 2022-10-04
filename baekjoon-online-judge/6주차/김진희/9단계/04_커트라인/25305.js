const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [[N, k], x] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => {
    if (i === 0) return v.split(" ");
    return v.split(" ").sort((a, b) => b - a);
  });

console.log(x[k - 1]);
