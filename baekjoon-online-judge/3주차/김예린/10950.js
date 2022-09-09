let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let num = input[0]
let result = ''

for(let i = 1; i<=num; i++){
    let list = input[i].split(' ').map(Number)
    result = list[0] + list[1]
    console.log(result)
}