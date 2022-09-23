const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let caseNum = input[0];
let arr = input[1].split(' ').map(Number)
const maxNum = Math.max(...arr);
let sum = 0;
for (let i=0; i< arr.length; i++) {
    sum += arr[i] / maxNum * 100
}
let result = sum / arr.length;

console.log(result)