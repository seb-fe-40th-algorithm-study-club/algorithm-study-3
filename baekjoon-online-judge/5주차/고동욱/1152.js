//단어의 개수
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

if(input[0]===''){
    console.log(0)
}else{
console.log(input.length)
}