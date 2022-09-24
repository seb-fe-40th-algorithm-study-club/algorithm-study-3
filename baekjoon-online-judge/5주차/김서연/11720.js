const input = require('fs').readFileSync("../예제.txt").toString().split('\n');
// 제출전 경로 수정하기 '/dev/stdin'

let num = input[0];
let plus = input[1].split('').map(Number)
let sum = 0

for(let i = 0; i < num; i++){
    sum = sum + plus[i];
}
console.log(sum);

