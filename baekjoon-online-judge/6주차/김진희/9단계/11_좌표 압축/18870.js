const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = input.split(" ");
const set = new Set(answer);

const dic = [...set]
  .sort((a, b) => a - b)
  .reduce((a, b, i) => {
    a[b] = i;
    return a;
  }, {});

console.log(answer.map((ele) => dic[ele]).join(" "));
