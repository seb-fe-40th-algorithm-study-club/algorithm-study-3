const { sign } = require('crypto');

const input = require('fs').readFileSync("../예제.txt").toString().split('\n');
// 제출전 경로 수정하기 '/dev/stdin'


let h = +(input[0].split(' ')[0]);
let m = +(input[0].split(' ')[1]);
let t = +(input[1]);

// m에 t더해서 60이상인경우 h가 더해짐 / 
// h가 23초과면, 더해지는 시간 고려해야함 ex)25시 27시 등
let sum = m + t

if(sum>=60){
    h = h + parseInt(sum/60);
    sum = (sum % 60);
    if(h>=24){
        h -= 24;
    }
}
console.log(h + ' ' + sum);