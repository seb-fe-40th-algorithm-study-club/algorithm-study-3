const input = require('fs').readFileSync("../예제.txt").toString().trim().split(' ');
// 제출전 경로 수정하기 '/dev/stdin'

let answer = 0;

for(let i = 0 ; i < input.length ; i ++){
    if(input[i] !== ''){
        answer++;
    }
}
console.log(answer);