let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let num1 = Number(input[0]);

if (90 <= num1) {
  console.log("A");
} else if (80 <= num1) {
  console.log("B");
} else if (70 <= num1) {
  console.log("C");
} else if (60 <= num1) {
  console.log("D");
} else {
  console.log("F");
}
