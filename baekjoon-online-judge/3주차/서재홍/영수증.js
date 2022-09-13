let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let total = +input[0];
let count = +input[1];
let sum = 0;

for (let i = 2; i <= count + 1; i++) {
  let newArr = input[i].split(" ").map((item) => Number(item));
  sum += newArr[0] * newArr[1];
}
console.log(total === sum ? "Yes" : "No");
