//A+b -3
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let number = input[i].split(' ');

    console.log(Number(number[0]) + Number(number[1]));
}