const input = require('fs').readFileSync("../../예제.txt").toString().trim().split('\n').map(Number);
// 제출전 경로 수정하기 '/dev/stdin'


let arr = input.slice(1, input.length);
arr.sort((a,b)=> a-b);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

