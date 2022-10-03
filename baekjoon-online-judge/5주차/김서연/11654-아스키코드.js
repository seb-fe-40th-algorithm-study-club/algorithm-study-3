const input = require('fs').readFileSync("../예제.txt").toString().trim(); 
// 제출전 경로 수정하기 '/dev/stdin'

const answer = input.charCodeAt(); // charCodeAt()는 유니코드를 뱐환한다.

console.log(answer)
