const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = Number(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
};
