let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// 다른 코드 참고했습니다.

let n = input.shift()
let countGroupWord = 0

for(let i = 0; i<n; i++){
    let letter = []
    let word = input[i]
    let isGroupWord = true; 
    
    for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length -1) {
        isGroupWord = false;
        break;
      }
    }
    }
    
    if (isGroupWord) {
    countGroupWord += 1;
    }
}
console.log(countGroupWord);