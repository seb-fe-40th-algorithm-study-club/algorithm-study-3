let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

let croa = ['c=','c-','dz=','d-','lj','nj','s=','z=']

for(let alpha of croa){
    input = input.split(alpha).join('1')
}
console.log(input.length)