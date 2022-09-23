const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split('\n'); 
// 제출전 경로 수정하기 '/dev/stdin'

let count = +input[0];
let numbers = input[1].split(' ').map(x=> Number(x));

let max = numbers[0]; 
let min = numbers[0];

for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);