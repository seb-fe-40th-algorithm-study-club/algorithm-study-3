const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split('\n'); 
// 제출전 경로 수정하기 '/dev/stdin'

let num = input[0].split(' ');
let N = +num[0];
let X = +num[1];
let A = input[1].split(' ');


let sum = ''
for(let i = 0; i < N; i++){
    if(+A[i] < X){
        sum = `${sum + A[i]} `
    }
}
console.log(sum);