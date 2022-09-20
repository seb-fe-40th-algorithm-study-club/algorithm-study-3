const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele, idx) => (idx === 0 ? +ele : ele.split(" ").map(Number)));

const [C, ...rest] = input;

let answer = "";
for (let i = 0; i < C; i++) {
  const [N, ...scores] = rest[i];
  const avg = scores.reduce((acc, cur) => acc + cur, 0) / N;
  let rate = (scores.filter((score) => score > avg).length / N) * 100;
  rate = (Math.round(rate * 1000) / 1000).toFixed(3);
  answer += `${rate}%\n`;
}

console.log(answer);
