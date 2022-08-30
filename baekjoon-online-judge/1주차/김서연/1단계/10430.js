const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split(" ").map(Number); // ex) [1, 2]
// 제출전 경로 수정하기 '/dev/stdin'

const A = input[0];
const B = input[1];
const C = input[2];

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) *(B%C))%C);
// 테스트를 해보자
