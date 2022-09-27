const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let dialObj = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

let answer = 0;
for (const ele of input) {
  const num = Object.keys(dialObj).find((v) => dialObj[v].includes(ele));
  answer += +num + 1;
}
console.log(answer);
