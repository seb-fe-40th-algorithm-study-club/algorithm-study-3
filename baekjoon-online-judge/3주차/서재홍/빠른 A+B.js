let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let result = "";

for (let i = 1; i <= input[0]; i++) {
  let number = input[i].split(" ");
  result += Number(number[0]) + Number(number[1]) + "\n";
}
console.log(result);
