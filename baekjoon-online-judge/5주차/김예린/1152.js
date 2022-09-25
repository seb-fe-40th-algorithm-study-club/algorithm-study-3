let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

let newArr = input.split(' ')
let count = 0

for(let i =0; i<newArr.length; i++){
    if(newArr[i] !== ""){
        count++
    }   
}

console.log(count)