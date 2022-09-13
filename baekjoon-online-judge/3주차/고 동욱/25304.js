//영수증
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let total = +input[0];
let piece = +input[1];
let used = 0;

for (let i = 2; i <= piece + 1; i++) {
    let item = input[i].split(' ').map(el => Number(el));
    used += item[0] * item[1]
}

if (total === used) {
    console.log('Yes');
} else {
    console.log('No');
}

