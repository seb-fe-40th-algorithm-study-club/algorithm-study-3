const input = require('fs').readFileSync("../예제.txt").toString().split('\n'); 
// 제출전 경로 수정하기 '/dev/stdin'


let num = +input[0];

for(let i = 1; i <= num; i++ ){
    let count = 0;
    let sum = 0;

    let problem = input[i].split(''); // 근데, 다들 problem은 아에 없애고,
    for(let j = 0; j < problem.length; j++){
        if(problem[j] === 'O'){  // 여기 조건문을 input[i][j] === "O" 이렇게 작성 많이 하심 -> 굳이 배열에 넣어줄 필요가 없는게, 문자열도 인덱싱 가능하기 떄문인거 같다.
            count++;
        }else {
            count=0;
        }
        sum += count;
    }
    console.log(sum);
}