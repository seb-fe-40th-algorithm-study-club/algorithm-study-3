let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

let a = input[0]
let b = input[1]

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)