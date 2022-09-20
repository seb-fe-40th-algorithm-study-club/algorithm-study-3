const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele, idx) => (idx === 0 ? +ele : ele.split(" ").map(Number)));

const [N, score] = input;
const M = [...score].sort((a, b) => b - a)[0];
const newAvg = score.reduce((acc, cur) => acc + (cur / M) * 100, 0) / N;
console.log(newAvg);
