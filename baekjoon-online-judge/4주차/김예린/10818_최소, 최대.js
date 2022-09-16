let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let list = input[1].split(' ').map(Number)

console.log(`${Math.min(...list)} ${Math.max(...list)}`)
