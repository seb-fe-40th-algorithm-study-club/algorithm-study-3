const input = require('fs').readFileSync("../예제.txt").toString().split('\n'); 
// 제출전 경로 수정하기 '/dev/stdin'

let N = +input[0];
let scores = input[1].split(' ').map(Number);
let max = Math.max(...scores);

let average =[];

scores.forEach( x =>{
    let newScore = x/max*100

    average.push(newScore)
})

console.log(average.reduce((a,b)=> a+b)/N);