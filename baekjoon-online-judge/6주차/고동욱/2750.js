//수 정렬하기
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift()
input.sort((a, b) => a - b);

for (let i = 0; i<input.length; i++){
    console.log(input[i])
}

