let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let [a, b, c] = input
let sorted = [a, b, c].sort()

if(a===b && b===c && a===c) console.log(10000 + a * 1000)

if(a===b && b!==c && a!==c) console.log(1000 + a * 100)
if(b===c && a!==b && a!==c) console.log(1000 + b * 100)
if(a===c && b!==c && a!==b) console.log(1000 + c * 100)

if(a!==b && b!==c && a!==c) console.log(sorted[2] * 100)

