const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split("\n"); 
// 제출전 경로 수정하기 '/dev/stdin'

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
    let arr = input[i].split(' ').map(item=>Number(item));
    answer += `Case #${i}: ${arr[0]} + ${arr[1]} = ${arr[0] + arr[1]}` + '\n' 
}

console.log(answer);