const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

let cnt = 0;

for (let i = 0; i < N; i++) {
  const str = rest[i];
  const charArr = [str[0]];
  let breakFlag = false;
  for (let j = 1; j <= str.length; j++) {
    if (str[j] === str[j - 1]) continue;
    if (charArr.includes(str[j])) {
      breakFlag = true;
      break;
    }
    charArr.push(str[j]);
  }
  if (!breakFlag) cnt++;
}

console.log(cnt);
