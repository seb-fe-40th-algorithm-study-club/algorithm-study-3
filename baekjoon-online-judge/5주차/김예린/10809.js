let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

let result = []

// 알파벳 포함 x => -1, 알파벳 포함 o => 인덱스 위치로 출력
for(let i =97; i<=122; i++){
    result.push(input.indexOf(String.fromCharCode(i)))
}
console.log(result.join(' '))