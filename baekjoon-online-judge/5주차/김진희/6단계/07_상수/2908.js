const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => {
    return [...v].reverse().join("");
  });
//   .map((v) => {
//     const hundreds = (v % 10) * 100;
//     const tens = Math.floor((v / 10) % 10) * 10;
//     const units = Math.floor(v / 100);
//     return hundreds + tens + units;
//   });

console.log(Math.max(a, b));
