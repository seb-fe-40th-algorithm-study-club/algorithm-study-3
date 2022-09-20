let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let total = +input[0]
let count = +input[1]
let sum = 0

for(let i =2; i<=count+1; i++){
    let newArr = input[i].split(' ')
    sum += newArr[0] * newArr[1]
}
console.log(total === sum ? "Yes" : "No")