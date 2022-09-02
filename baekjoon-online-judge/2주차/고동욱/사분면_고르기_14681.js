const fs=require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let x = Number(input[0])
let y = Number(input[1])

if(x > 0) y > 0 ? console.log(1) : console.log(4)
if(x < 0) y > 0 ? console.log(2) : console.log(3)
