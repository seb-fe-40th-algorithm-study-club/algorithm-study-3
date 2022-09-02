const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().trim(); // ex) [1, 2]
// 띄어쓰기로 나누는 것이 아니므로 문자열의 가장 앞부분과 가장 뒷부분의 공백을 지워주는 trim을 이용한다.


console.log(input + '??!');