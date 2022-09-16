let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let list = input.map(el => el % 42)
let count = [...new Set(list)]

console.log(count.length)