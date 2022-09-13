//X보다 작은수
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = [];
num = input[0].split(' ');

let total = Number(num[0]);
let max = Number(num[1]);

let arr = [];
arr = input[1].split(' ');

let result = '';

for (let i = 0; i < total; i++) {
    if (Number(arr[i]) < max) {
        result += arr[i] + ' ';
    }
}

console.log(result);