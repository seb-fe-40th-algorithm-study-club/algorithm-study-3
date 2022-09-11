const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = Number(line);
}).on("close", function () {
  solution(input, 0);
  process.exit();
});

const solution = (input, memo) => {
  memo += input;
  if (input === 1) return console.log(memo);
  solution(--input, memo);
};
