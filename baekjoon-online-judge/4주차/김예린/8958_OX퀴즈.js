let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = +input.shift()

for(let i = 0; i<input.length; i++){
    let list = input[i].split('')
    
    let count = 0
    let sum = 0
    
    for(let i =0; i<list.length; i++){
        if(list[i] ==='O') {
            count++
            sum += count
        }
        else if(list[i] ==='X'){
            count = 0
        }
    }
    console.log(sum)
}