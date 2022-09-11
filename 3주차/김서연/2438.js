//별찍기 1

const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString(); 
// 제출전 경로 수정하기 '/dev/stdin'

let sum = ''
for(let i = 1; i<= +input; ++i){
    sum = sum + '*'
    console.log(sum);
}
