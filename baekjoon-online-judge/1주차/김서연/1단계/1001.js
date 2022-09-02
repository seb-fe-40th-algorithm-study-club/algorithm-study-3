const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split(" ").map(Number); // ex) [1, 2]
// 제출전 경로 수정하기 '/dev/stdin'
console.log(input);
const a = input[0];
const b = input[1];

console.log(a-b);