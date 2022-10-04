let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.shift();

// 'a'.localeCompare('a') // 0
// 'a'.localeCompare('b') // 1
let filter = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
let newArr = [...new Set(filter)];
console.log(newArr.join("\n"));
