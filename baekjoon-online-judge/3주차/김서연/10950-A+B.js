const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split('\n'); 
// 제출전 경로 수정하기 '/dev/stdin'

//첫번째 입력받은 수는 테스트 케이스의 개수이다.
// 각 테스트 케이스를 더해야 한다.
/// 모르겠어서 정답 찾아 봤습니다...ㅠ

// 나눈 배열의 첫번째를 제외한 배열을 for 문으로 각각의 테스트 케이스에 split 메서드를 사용하여 A와 B를 나눠준 후 더한 값을 출력
for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    
    console.log(Number(numbers[0]) + Number(numbers[1]));
}