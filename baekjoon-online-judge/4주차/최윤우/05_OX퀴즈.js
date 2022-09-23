const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const caseNum = +input[0];

for(let i = 1; i <= caseNum; i++){
    let n = 0;
    let sum = 0;
    input[i].split('').forEach((el) => {
        if(el === 'O'){       
        n++;
        sum += n;
        } else {
        n = 0;
        }
    })
  console.log(sum);
}