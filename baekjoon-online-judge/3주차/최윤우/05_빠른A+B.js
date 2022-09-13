const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let sum = '';

for (let i=1; i<=input[0]; i++){
    let number = input[i].split(' ').map((el)=>+el);
    sum += number[0] + number[1] + '\n';
}

console.log(sum);


// 실패! 뭐가 문제인지 모르겠음

/*
let testCase = [];
let sum = null;
for (let i = 1; i <= input[0]; i++) {
    testCase = input[i].split(" ").map(Number);
    sum += testCase[0] + testCase[1]
}
console.log(sum);
*/


