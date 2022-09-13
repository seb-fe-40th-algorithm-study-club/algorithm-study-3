const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString(); 
// 제출전 경로 수정하기 '/dev/stdin'

// 모르겠어서 답 찾아봄..
let result = '';
let blank = '';
for (let i = 1; i <= input; i++){
  result += "*";
  for (let j = 0; j < input-i; j++){
    blank += ' ';
  }
  console.log(blank + result);
  blank = '';
}