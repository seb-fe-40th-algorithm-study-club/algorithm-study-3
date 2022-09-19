//같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
//같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
//모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
const [num1, num2, num3] = input.sort((a, b) => b - a);

if (num1 === num2 && num2 === num3) {
  console.log(10000 + num1 * 1000);
} else if (num1 === num2 && num2 !== num3) {
  console.log(1000 + num1 * 100);
} else if (num2 === num3 && num3 !== num1) {
  console.log(1000 + num2 * 100);
} else if (num3 === num1 && num1 !== num2) {
  console.log(1000 + num3 * 100);
} else {
  console.log(num1 * 100);
}
