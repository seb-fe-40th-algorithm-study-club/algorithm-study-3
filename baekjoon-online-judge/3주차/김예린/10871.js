let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = input.map(i => i.split(' ').map(Number))
let n = arr[0][0]
let x = arr[0][1]
let list = arr[1]

for(let i = 0; i<n; i++){
    if(list[i] < x){
        console.log(list[i])
    }
}