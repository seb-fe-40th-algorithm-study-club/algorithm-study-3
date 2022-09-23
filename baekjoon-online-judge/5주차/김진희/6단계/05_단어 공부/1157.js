const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split("");

let maxNum = 0;
let maxChar = [];

input.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  if (acc[cur] > maxNum) {
    maxNum = acc[cur];
    maxChar = [cur];
  } else if (acc[cur] === maxNum) {
    maxChar = [...maxChar, cur];
  }
  return acc;
}, {});

console.log(maxChar.length === 1 ? maxChar[0] : "?");
