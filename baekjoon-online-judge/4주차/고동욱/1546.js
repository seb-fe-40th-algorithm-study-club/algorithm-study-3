//평균
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let total = input[0]
let record = input[1].split(' ');

let max = Math.max(...record);
let sum = 0;

for(let i=0;i<total;i++){
    sum += record[i]/max*100;
}

console.log(sum/total);