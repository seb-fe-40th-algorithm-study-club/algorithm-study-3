const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const caseNum = +input[0];

//내가 푼 방법 <= 실패
for(let i = 1; i <= caseNum; i++){
    let n = 0;
    let sum = 0;
    input[i].split(' ').map(Number).forEach((el) => {
        n = input[i][0]
        sum += el
    })
    sum = sum - n
    let avarage = sum / n
    let count = 0;
    input[i].split(' ').map(Number).forEach((el) => {
        n = input[i][0]
        if(el > avarage) {
            count++
        }
    })
    console.log((count / n * 100).toFixed(3)+'%');
}

// 레퍼런스
let allCases = Number(input[0]);

for (let i = 1; i <= allCases; i++) {
  let cases = input[i].split(' ');
  let scoreCaseCount = Number(cases[0]);
  let sum = 0;

  for (let j = 1; j <= scoreCaseCount; j++) {
    sum += Number(cases[j]);
  }
  let reverage = sum / scoreCaseCount;

  let highScoreStudent = 0;
  for (let k = 1; k <= scoreCaseCount; k++) {
    if (reverage < cases[k]) {
      highScoreStudent++;
    }
  }
  
  result = (highScoreStudent / scoreCaseCount * 100).toFixed(3);
  console.log(result + '%');
}