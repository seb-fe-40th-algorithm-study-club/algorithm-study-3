let input = require('fs').readFileSync("../예제.txt").toString().split(' ');
// 제출전 경로 수정하기 '/dev/stdin'

let num1 = [...input[0]].reverse().join('');
let num2 = [...input[1]].reverse().join('');
    
console.log(Math.max(num1, num2));