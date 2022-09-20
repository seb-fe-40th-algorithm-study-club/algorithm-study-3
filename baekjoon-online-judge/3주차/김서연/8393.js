// 합 

const fs = require('fs');
const input = +fs.readFileSync("../예제.txt").toString(); 
// 제출전 경로 수정하기 '/dev/stdin'


let n = input;
let sum = 0;

for(let i = 1; i<=n; i++){
    sum = sum + i
}
console.log(sum);
