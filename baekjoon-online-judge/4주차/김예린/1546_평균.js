let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let list = input[1].split(' ').map(Number)
let big = Math.max(...list)

let newArr = list.map(score => (score/big) * 100)
let sum = newArr.reduce((acc,cur) => acc + cur)
console.log(sum / list.length)