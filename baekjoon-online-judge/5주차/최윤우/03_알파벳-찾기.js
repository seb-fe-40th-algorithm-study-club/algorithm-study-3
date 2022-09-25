let input = require('fs').readFileSync('/dev/stdin').toString();
const arr = input.split('')
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

for(let i = 0; i < alphabet.length; i++) {
    alphabet[i] = arr.indexOf(alphabet[i]);
}

console.log(alphabet.join(' '))