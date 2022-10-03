const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = input
  .sort((a, b) => +a.split(" ")[0] - +b.split(" ")[0])
  .join("\n");

console.log(answer);
