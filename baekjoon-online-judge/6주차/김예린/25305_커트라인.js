let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, person] = input.shift().split(" ").map(Number);
let newArr = String(input).split(" ").map(Number);

newArr.sort((a, b) => b - a);
console.log(newArr[person - 1]);
