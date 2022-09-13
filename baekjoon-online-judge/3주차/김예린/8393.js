let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

let result = 0
let num = Number(input)

for(let i = num; i>0; i--){ // 5
    result += i
}
console.log(result)