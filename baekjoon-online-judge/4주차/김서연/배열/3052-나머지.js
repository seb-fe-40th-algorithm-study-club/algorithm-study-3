const input = require('fs').readFileSync("../예제.txt").toString().trim().split('\n').map(Number); 
// 제출전 경로 수정하기 '/dev/stdin'

const userNum = [];

// 원래는 for문 썼었는데, forEach도 있음을 잊지 말것..
input.forEach(x => {
     const num = x % 42;
    
    // 어떻게 배열안에 중복 된게 있는지를.. 찾는 부분이 막혀 답을 찾아보게 되었습니다.
    if (userNum.indexOf(num) === -1) {
        userNum.push(num);
    }
});

console.log(userNum.length);