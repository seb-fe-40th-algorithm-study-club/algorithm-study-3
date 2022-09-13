const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const caseNum = input[0];

let testCase = [];
for (let i = 1; i <= caseNum; i++) {
    testCase = input[i].split(" ").map(Number);
    console.log(testCase[0] + testCase[1]);
}