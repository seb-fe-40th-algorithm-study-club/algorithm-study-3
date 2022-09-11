const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split("\n"); 
// 제출전 경로 수정하기 '/dev/stdin'

let total = +input[0];
let cnt = +input[1];
let sum = 0;

for(let i = 2; i<=cnt+1; ++i){
    let newArr = input[i].split(" ").map(item=>Number(item)); // input에서 Number로 바꿔주게 되면은 2개씩 입력 받은 줄은 NaN이 되어버림
    sum += newArr[0]*newArr[1] // 이부분에서 곱하기 전에 숫자로 바꿔줘도 됨
}

console.log(total === sum ? "Yes" : "No");
