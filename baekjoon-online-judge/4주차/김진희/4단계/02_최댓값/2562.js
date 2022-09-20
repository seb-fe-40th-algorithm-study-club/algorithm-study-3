const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const tempInput = [...input];
tempInput.sort((a, b) => b - a);
const maxNum = tempInput[0];
console.log(`${maxNum}\n${input.indexOf(maxNum) + 1}`);
