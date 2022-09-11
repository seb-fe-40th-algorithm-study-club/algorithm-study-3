const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split(" ").map(Number); 
// 제출전 경로 수정하기 '/dev/stdin'

const a = input[0]; 
const b = input[1];

if(a>b){
    console.log('>');
}
if(a<b){
    console.log('<');
}
if(a===b){
    console.log('==');
}