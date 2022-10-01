const input = require('fs').readFileSync("../../예제.txt").toString().trim().split('\n');
// 제출전 경로 수정하기 '/dev/stdin'

let num = +input[0].split(' ')[1];
let score = input[1].split(' ').map(Number)
score.sort((a,b)=>b-a);

console.log(score[num-1]);