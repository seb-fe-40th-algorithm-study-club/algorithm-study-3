const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ").map(Number); // ex) [1, 2]
// 제출전 경로 수정하기 '/dev/stdin'

const a = input[0];
const b = input[1];

console.log(a*b);