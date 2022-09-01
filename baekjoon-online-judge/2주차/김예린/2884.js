let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let [h, m] = input
m -= 45

if(m < 0){
    m += 60;
    h--;
    if(h === -1){
        h = 23
    }
}
console.log(`${h} ${m}`)