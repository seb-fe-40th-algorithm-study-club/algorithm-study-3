const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
}).on("close", function () {
  solution(input);

  process.exit();
});

const solution = ([a, b, c]) => {
  if (a === b && b === c) {
    return console.log(10000 + a * 1000);
  }
  if (a === b || b === c) {
    return console.log(1000 + b * 100);
  }
  return console.log(c * 100);
};
