// 알파벳 찾기

// 왜 안되는지 모르겠네요ㅜ...

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

// let eng = 'abcedfghijklmnopqrstuvwxyz'
// let max = eng.length;
// let result = [];

// for(let i=0;i<max;i++){
//     const search = (el) => el === eng[i]
//     result.push(input.findIndex(search))
// }

// console.log(result)

const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
    result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));