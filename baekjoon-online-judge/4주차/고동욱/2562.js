//최댓값
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(el => Number(el));

let maximum = 0
let idx = 0;

for(let i=0;i<9;i++){
    if(input[i]>maximum){
        maximum = input[i];
        idx = i;
    }
}

console.log(maximum);
console.log(idx+1);

