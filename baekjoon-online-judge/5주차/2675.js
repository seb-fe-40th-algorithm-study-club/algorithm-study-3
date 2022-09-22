//문자열 반복
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let max = input.shift()

for(let i=0; i< max; i++){
    let result = ''

    let [max2, str] = input[i].split(' ')

    for(let j=0; j< str.length ; j++){
        for(k=0;k<max2;k++){
            result += str[j]
        }
    }
    console.log(result)
}

