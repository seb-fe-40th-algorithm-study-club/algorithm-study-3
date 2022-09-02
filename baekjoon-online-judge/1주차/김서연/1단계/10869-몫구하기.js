const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split(" ").map(Number); // ex) [1, 2]
// 제출전 경로 수정하기 '/dev/stdin'

const a = input[0];
const b = input[1];

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b)); // 나누기가 아니고, 몫을 구하려면 parseInt()함수에 넣어줘서 정수부분만 취해야 함
console.log(a%b);