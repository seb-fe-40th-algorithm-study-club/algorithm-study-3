//숫자의 합

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let max = Number(input[0])
let number = input[1].split('').map(Number)
let result = 0;

for(let i=0;i<max;i++){
    result += number[i]
}

console.log(result);