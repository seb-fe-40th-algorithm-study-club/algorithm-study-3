const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let testCase = [];
for (let i = 0; i < input.length; i++) {
    if(input[i][0] === '0') {
        continue;
    }
    testCase = input[i].split(" ").map(Number);
    console.log(testCase[0] + testCase[1]);
}