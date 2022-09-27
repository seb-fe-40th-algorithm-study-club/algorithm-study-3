let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input.shift()

for(let i =0; i<n; i++){
    const [iter, str] = input[i].split(' ')
    let result = ''
    
    for(let j =0; j<str.length; j++){
        for(let k =0; k<iter; k++){
            result += str[j]
        }     
    }
    console.log(result)
}