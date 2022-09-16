let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let number = input[1].split(" ").map((el) => Number(el));

number.sort((a, b) => a - b);
console.log(`${number[0]} ${number[count - 1]}`);
