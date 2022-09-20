//최소, 최대
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let numbers = input[1].split(' ').map(el =>Number(el))

// console.log(`${Math.min(...numbers)}${Math.max(...numbers)}`)

let count = Number(input[0]);
let numbers = input[1].split(' ').map(x=> Number(x));

numbers.sort((a, b) => a - b);

console.log(`${numbers[0]} ${numbers[count - 1]}`);