//구구단

const fs = require('fs');
const input = +fs.readFileSync("../예제.txt").toString().trim(); 
// 제출전 경로 수정하기 '/dev/stdin'

for(let i = 1; i<=9; i++){
    console.log(`${input} * ${i} = ${input * i}`);
}