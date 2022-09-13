let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
console.log(input)

let count = 0
let N = +input
let isNotSame = true
let addN = 0

while(isNotSame){
    addN = Math.floor(N / 10) + N % 10
    N = N%10*10 + addN % 10
    count++
    
    if(N === +input){
        console.log(count)
        isNotSame = false
    }
}