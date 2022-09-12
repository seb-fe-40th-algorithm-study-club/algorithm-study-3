let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = [];
num = input[0].split(" ");

let total = Number(num[0]);
let limit = Number(num[1]);

let numbers = [];
numbers = input[1].split(" ");

let result = "";

for (let i = 0; i < total; i++) {
  if (Number(numbers[i]) < limit) {
    result += numbers[i] + " ";
  }
}
console.log(result);
