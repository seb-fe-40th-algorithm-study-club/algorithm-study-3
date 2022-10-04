const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);
let sum = input[0],
  maxCnt = 1,
  cnt = 1,
  arr = [input[0]];

for (let i = 1; i < N; i++) {
  sum += input[i];

  if (input[i] !== input[i - 1]) {
    cnt = 1;
    if (cnt === maxCnt) arr.push(input[i]);
    continue;
  }

  cnt++;
  if (cnt < maxCnt) continue;
  if (cnt === maxCnt) {
    arr.push(input[i]);
    continue;
  }
  maxCnt = cnt;
  arr = [input[i]];
}

const a = Math.round(sum / N);
const b = input[Math.floor(N / 2)];
const c = arr.length > 1 ? arr[1] : arr[0];
const d = input[N - 1] - input[0];

console.log(`${a === -0 ? 0 : a}\n${b}\n${c}\n${d}`);
