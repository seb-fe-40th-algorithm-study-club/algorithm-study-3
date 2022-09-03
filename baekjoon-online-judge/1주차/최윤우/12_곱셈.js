const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(value=> +value);

const [a, b] = input;

console.log(a * (b % 10));
console.log(a * parseInt((b % 100)/10));
console.log(a * parseInt(b / 100));
console.log(a * b);