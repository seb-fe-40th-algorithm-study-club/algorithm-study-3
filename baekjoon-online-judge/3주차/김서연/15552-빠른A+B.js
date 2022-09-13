const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split("\n"); 
// 제출전 경로 수정하기 '/dev/stdin'

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
    let arr = input[i].split(' ').map(item=>Number(item));
    answer += arr[0] + arr[1] + '\n' // 정답을 하나하나 출력하면 시간초과 됨
}
// 정답을 문자열로 받아 한번에 출력하니 시간 단축
console.log(answer);

// 질문 : 왜 문자열에 넣어서 출력할까..?
