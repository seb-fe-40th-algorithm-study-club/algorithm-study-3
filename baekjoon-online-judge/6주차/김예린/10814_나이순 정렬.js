let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.shift();

// parseInt("1 abcd") // 1
// parseFloat("2 abcd") // 2
let result = input.sort((a, b) => parseInt(a) - parseInt(b));
console.log(result.join("\n"));
