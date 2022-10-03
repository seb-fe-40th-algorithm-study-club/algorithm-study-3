const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let caseNum = input[0].split(" ");
let award = caseNum[1];

let grade = input[1].split(" ");
grade.sort((a,b) => b - a);

console.log(grade[award - 1]);