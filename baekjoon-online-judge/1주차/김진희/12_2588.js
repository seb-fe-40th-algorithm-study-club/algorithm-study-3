const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [a, b] = input;
a = Number(a);

let result = 0;

for (let i = b.length - 1; i >= 0; i--) {
  const mul = a * parseInt(b[i]);
  console.log(mul);
  result += mul * 10 ** (b.length - 1 - i);
}

console.log(result);
