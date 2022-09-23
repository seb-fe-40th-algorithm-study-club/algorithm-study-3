const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const caseNum = +input[0];
let testCase = input[1].split(" ");
    testCase.sort((a, b) => b - a)
    console.log(testCase[caseNum - 1], testCase[0]);