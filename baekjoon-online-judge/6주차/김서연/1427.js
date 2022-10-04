const input = require('fs').readFileSync("../../예제.txt").toString().trim().split('').map(Number);
// 제출전 경로 수정하기 '/dev/stdin'
let result = input.sort((a,b)=> b-a);
let sum = '';

for(let i = 0; i < result.length; i++){
    sum = sum + input[i];
}
console.log(sum);