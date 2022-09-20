const fs=require('fs');
const input=fs.readFileSync('/dev/stdin')
							.toString()
							.split('\n')
							
let A = input[0]
let B = input[1]
let [B0, B1, B2]=B.split('');

console.log(A*B2)
console.log(A*B1)
console.log(A*B0)
console.log(A*B)