const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const chessmen = [1, 1, 2, 2, 2, 8];
let result = "";

for (let i = 0; i < chessmen.length; i++) {
  result += `${chessmen[i] - input[i]} `;
}

console.log(result.trim());
