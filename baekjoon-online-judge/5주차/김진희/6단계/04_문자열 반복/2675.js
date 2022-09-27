const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = "";

for (let i = 0; i < +T; i++) {
  const [R, S] = rest[i].split(" ");
  for (const char of S) {
    answer += char.repeat(+R);
  }
  answer += "\n";
}

console.log(answer);
