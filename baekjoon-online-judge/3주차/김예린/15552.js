let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
console.log(input)

let num = +input[0]
let result = ''

for(let i =1; i<=num; i++){
    let arr = input[i].split(' ').map(Number)
    result += arr[0] + arr[1] + '\n'
}
console.log(result)