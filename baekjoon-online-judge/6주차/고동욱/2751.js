//수 정렬하기 2

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let results = '';

input.shift()
input.sort((a, b) => a - b).forEach(num => (results += `${num}\n`));

console.log(results);