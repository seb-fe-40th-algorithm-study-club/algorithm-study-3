const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const total = +input[0];
const caseNum = +input[1];

let totalSum = 0;
for (let i = 2; i <= caseNum + 1; i++) {
    let newArr = input[i].split(" ").map(Number);
    totalSum += newArr[0] * newArr[1];
}
total === totalSum ? console.log("Yes") : console.log("No");
