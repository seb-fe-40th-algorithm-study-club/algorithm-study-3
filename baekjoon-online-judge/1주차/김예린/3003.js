let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

let piece = [1,1,2,2,2,8]
let result = ''

for(let i =0; i<piece.length; i++){
    result += (piece[i] - input[i]) + ' '
}
result.slice(0,-1)
console.log(result)