//다이얼
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('')

let num = ['', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', ' ']
let time = 0;


for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < num[j].length; k++) {
            num[j][k].split('')
            if (num[j][k] === input[i]) {
                time = time + (j + 2)
            }
        }
    }
}
console.log(time);
