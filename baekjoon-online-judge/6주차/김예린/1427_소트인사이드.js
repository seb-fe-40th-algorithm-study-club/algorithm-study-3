let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let newArr = input.trim().split("").map(Number);
console.log(newArr.sort((a, b) => b - a).join(""));
