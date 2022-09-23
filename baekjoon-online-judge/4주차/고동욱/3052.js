//나머지
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let numb = [];

input.forEach(el => {
    const num = el % 42
    if(numb.indexOf(num)===-1){
        numb.push(num)
    }
})

console.log(numb.length)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(el => Number(el));

// let count = 0;
// let numb = [];

// for (let i = 0; i < 10; i++) {
//     if (input[i] % 42 !== 0 || input[i] % 42 === 0) {
//         for (let j = 0; j < 10; j++) {
//             if (numb[j] === input[i]) {
//                 count -= 1
//             }
//         }
//         count++;
//         numb.push(input[i]);
//     }

// }

// console.log(count)