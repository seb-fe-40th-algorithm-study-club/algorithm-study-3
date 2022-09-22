//단어 공부
const fs = require('fs');
const input2 = fs.readFileSync('/dev/stdin').toString().split('')
let test = input2.sort().join('').toUpperCase()
let input = test.split('')

let arr = []
let arrLength = []

while (input.length > 0) {
    let isAlphabet = input.findIndex((el) => el !== input[0])

    if (isAlphabet === -1) {
        arr.push(input[0])
        arrLength.push(input.length)
        input.splice(0, input.length)
    }
    else {
        arr.push(input[0])
        arrLength.push(isAlphabet)
        input.splice(0, isAlphabet)
    }
}

let result = ''

let count = 0

for (let i = 0; i < arr.length; i++) {

    if (count === Number(arrLength[i])) {
        result = '?'
    } else if (count < Number(arrLength[i])) {
        result = arr[i]
        count = Number(arrLength[i])
    }

}


console.log(result)

