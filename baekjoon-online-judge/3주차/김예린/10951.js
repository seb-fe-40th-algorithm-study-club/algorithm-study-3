let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let num = input
let result = ''

for(let i = 0; i<num.length; i++){
    let list = input[i].split(' ').map(Number)
    result = list[0] + list[1]
    console.log(result)
}