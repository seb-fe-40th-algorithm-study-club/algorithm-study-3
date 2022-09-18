const input = require('fs').readFileSync("../예제.txt").toString().split('\n').map(Number); 
// 제출전 경로 수정하기 '/dev/stdin'

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);