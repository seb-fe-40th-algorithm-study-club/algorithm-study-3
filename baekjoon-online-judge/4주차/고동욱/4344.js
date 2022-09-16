//평균은 넘겠지
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let fstTotal = Number(input[0])

for(let i=1;i<=fstTotal;i++){
    let sum = 0;
    let count = 0;

    let scores = input[i].split(' ').map(Number);
    let secTotal = scores[0];
    
    for(let j=1;j<=secTotal;j++){
        sum += scores[j]
    }
    
    let avg = sum/secTotal;
    
    for(let k=1;k<=secTotal;k++){
        if(avg<scores[k]){
            count++;
        }
    }

    console.log(((count/secTotal)*100).toFixed(3)+'%');
}

