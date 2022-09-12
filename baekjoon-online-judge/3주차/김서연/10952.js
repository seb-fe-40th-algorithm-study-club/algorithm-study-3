const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().trim().split('\n'); 
// 제출전 경로 수정하기 '/dev/stdin'

for(let i = 0; i <= input.length-2; i++){
    let newArr = input[i].split(' ')
    console.log(Number(newArr[0]) + Number(newArr[1]));
}