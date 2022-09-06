let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let h = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let time = parseInt(input[1])

let result_h = 0
let result_m = 0
result_h = Math.floor(((h*60) + m + time)/60)
result_m = ((h*60) + m + time) % 60

if(result_h >= 24){
    result_h -= 24
}
console.log(`${result_h} ${result_m}`)