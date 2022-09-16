//OX퀴즈
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let total = Number(input[0]);

for (let i = 1; i <= total; i++) {
    let count = 0;
    let score = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'O') {
            count++
        } else {
            count = 0;
        }

        score += count
    }
    console.log(score)
}


