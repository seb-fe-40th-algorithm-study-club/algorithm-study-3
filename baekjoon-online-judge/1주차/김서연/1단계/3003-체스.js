const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split(" ").map(Number); // ex) [1, 2]
// 제출전 경로 수정하기 '/dev/stdin'

// 입력값 순서는 킹,퀸,룩,비숏,나이트,폰 순서다.
//각 피스의 총 갯수는 1,1,2,2,2,8개 이고, 그 이상 숫자를 입력하면 음수가 나와야 한다.
const k = input[0];
const q = input[1];
const l = input[2];
const b = input[3];
const n = input[4];
const f = input[5];

console.log(`${1-k} ${1-q} ${2-l} ${2-b} ${2-n} ${8-f}`)

// const chess = [1, 1, 2, 2, 2, 8];
// let answer = input.map((i, index) => { //i:처리할 현재 요소, index : 처리할 현재 요소의 인덱스
//   return chess[index] - i;

// })
// console.log(...answer)
