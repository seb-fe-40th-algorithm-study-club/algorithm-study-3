const fs = require('fs');
// const input = fs.readFileSync('../예제.txt').toString(); // input === '1 2';
 const input = fs.readFileSync('../예제.txt').toString().split(' '); //['1', '2']
// const input = fs.readFileSync("../예제.txt").toString().split(" ").map(Number); // [1, 2]

console.log(input);
const a = parseInt(input[0]); //parseInt 또는 Number 또는 +만 써도 숫자로 바뀜
const b = +(input[1]);
console.log(a);
console.log(b);
console.log(a+b);

// console.log(input[0] + input[1]);