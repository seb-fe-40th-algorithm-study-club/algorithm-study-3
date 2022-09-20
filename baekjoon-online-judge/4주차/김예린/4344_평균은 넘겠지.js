let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let a = +input.shift()
let result = []

for(let i =0; i<input.length; i++){
    let num = input[i].trim().split(' ').map(Number)
    num.shift()
    
    let sum = 0
    let avg = 0
    let count = 0
    
    for(let i =0; i<num.length; i++){
        sum += num[i]
        avg = sum / num.length
    }
    
    for(let i =0; i<num.length; i++){
        if(num[i] > avg) count++
    }
    console.log(`${parseFloat((count/num.length)*100).toFixed(3)}%`)
}