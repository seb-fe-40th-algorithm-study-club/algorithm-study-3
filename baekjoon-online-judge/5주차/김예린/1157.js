let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

let up = input.toUpperCase()
let obj = {}

for(let i = 0; i<up.length; i++){
    // 알파벳 개수 구하기
    if(obj[up[i]] === undefined){
        obj[up[i]] = 1
    }
    else {
        obj[up[i]] += 1        
    }
}

// 개수가 가장 많은 알파벳 count 세고, result에 넣기
let count = 0
let result = ''

for(let i in obj){
    if(obj[i] > count){
        count = obj[i]
        result = i
    }
    else if(obj[i] === count){
        result = '?'
    }
}
console.log(result)