const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split('\n');
// 제출전 경로 수정하기 '/dev/stdin'

const num1= +input[0];
const num2= input[1].split('');

const a =num1*Number(num2[2])
const b =num1*Number(num2[1])
const c =num1*Number(num2[0])
const sum = a+b*10+c*100

console.log(a);
console.log(b);
console.log(c);
console.log(sum);

// const [A, B] = fs.readFileSync("../예제.txt").toString().split('\n');
// const [B0, B1, B2] = B.split('');

// const temp1 = A * B2;
// const temp2 = A * B1;
// const temp3 = A * B0;
// const sum = temp1 + Number(`${temp2}0`) +  Number(`${temp3}00`);

// console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`)
// 출처: https://overcome-the-limits.tistory.com/245 