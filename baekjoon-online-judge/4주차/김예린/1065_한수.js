// 다른 코드 참고했습니다.

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

let num = Number(input);

function hansu(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        let hundredNumber = Math.floor((i % 1000) / 100);
        let tenNumber = Math.floor((i % 100) / 10);
        let oneNumber = i % 10;

        // 1~99인 경우는 따질 것도 없이 모든 수가 한수이다
        if(i < 100){ 
            count++;
        }else if(100 <= i && i < 1000){
            if (hundredNumber - tenNumber === tenNumber - oneNumber){
                count++;
            }
        }
    }
    return count;
}
console.log(hansu(num));