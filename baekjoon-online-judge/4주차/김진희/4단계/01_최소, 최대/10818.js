const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, numArr] = input.map((ele, idx) =>
  idx === 0
    ? +ele
    : ele
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
);
console.log(`${numArr[0]} ${numArr[N - 1]}`);
