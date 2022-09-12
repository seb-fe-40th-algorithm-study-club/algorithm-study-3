//별찍기 1

const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString(); 
// 제출전 경로 수정하기 '/dev/stdin'

let sum = ''
for(let i = 1; i<= +input; ++i){
    sum = sum + '*'
    console.log(sum);

    // 또는
    //console.log("*".repeat(i)) 로 가능 ;; repeat()메서드는 호출된 문자열의 지정된 수의 복사본이 함께 연결된 새 문자열을 구성하고 반환한다.
}
