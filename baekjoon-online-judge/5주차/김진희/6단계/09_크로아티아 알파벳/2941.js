const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const i in alphabet) {
  if (input.includes(alphabet[i])) input = input.replaceAll(alphabet[i], i);
}

[...new Set(input)];

console.log(input.length);
