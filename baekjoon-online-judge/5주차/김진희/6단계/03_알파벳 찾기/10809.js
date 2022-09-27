const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((v) => input.indexOf(v))
  .join(" ");

console.log(alphabet);
