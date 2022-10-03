const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');

let count = 0
for (let i = 0; i < input.length; i++) {
    if(input[i]) count++
}
console.log(count)