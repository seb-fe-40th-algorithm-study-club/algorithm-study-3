let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let a = Math.max(...input)
console.log(a)
console.log(input.indexOf(a) + 1)