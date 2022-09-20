const input = require('fs').readFileSync("../예제.txt").toString().split('\n'); 
// 제출전 경로 수정하기 '/dev/stdin'

let num = +input[0]

for(let i = 1; i <= num; i++){
    let testCase = input[i].split(' ').map(Number);
    let sum = 0;
    let average = 0;
    for(let j = 1; j <= testCase[0]; j++){
        sum += testCase[j]
        average = sum/j
    }
    // 위에처럼 하기보다는,
    // N : 학생의 수
    // const N = testCase[0];
    // 학생 점수 총합 = testCase 요소의 총합 - N
    // let sum = testCase.reduce((acc, cValue) => acc + cValue, -N); // 초기값은 -N
    // 평균 점수 = 총 점수 / 학생수
    // let avg = sum / N;
    // 이렇게 하는것이 더 간편해 보임.. 참고하기

    let count = 0;
    for(let k = 1; k <= testCase[0]; k++){
        if(testCase[k] > average){
            count++;
        }
    }
    console.log((count/testCase[0]*100).toFixed(3) + '%'); // toFixed(3)는 숫자를 소수점 3자리까지 표시한다.
}