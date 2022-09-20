const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele, idx) => (idx === 0 ? +ele : ele.split("")));

const [N, ...result] = input;

let answer = "";
for (let i = 0; i < N; i++) {
  let init = 0;
  const score = result[i].reduce((acc, cur) => {
    if (cur === "O") init++;
    else init = 0;
    return acc + init;
  }, 0);
  answer += score + "\n";
}

console.log(answer);
