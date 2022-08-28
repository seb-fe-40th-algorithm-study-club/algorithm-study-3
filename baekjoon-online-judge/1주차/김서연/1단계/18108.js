const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split(" ").map(Number); // [1, 2]


const y = input[0]; 

console.log(y - 543);

// console.log(input[0] + input[1]);