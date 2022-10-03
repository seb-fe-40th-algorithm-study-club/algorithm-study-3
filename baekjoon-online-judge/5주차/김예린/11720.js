let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let result = input[1].split('').map(Number).reduce((acc,cur) => acc + cur)
console.log(result)