//커트라인
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input1 = input[0].split(' ');
let canGet = input1[1];
let grade = input[1].split(' ');
grade.sort((a,b)=> b-a);

console.log(grade[canGet-1]);


