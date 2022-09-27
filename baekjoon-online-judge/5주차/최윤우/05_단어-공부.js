const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString();

let arr = input.toUpperCase()
let alphabets = [...new Set(arr.split(''))];
let maxChar = '';
let maxCount = 0;

    for (let i = 0; i < alphabets.length; i++) {
        let count = arr.split(alphabets[i]).length - 1;

        if (count > maxCount) {
            maxChar = alphabets[i];
            maxCount = count;
        } else if (count === maxCount) {
            maxChar = '?';
        }
    }

console.log(maxChar);