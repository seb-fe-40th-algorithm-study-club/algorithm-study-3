const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";
let cnt = -1;
let idx = 0;

rl.on("line", function (line) {
  if (cnt === -1) {
    cnt = Number(line);
    return;
  }

  const input = line.split(" ").map(Number);
  if (input.length === 2) solution(input);
}).on("close", function () {
  console.log(result);
  process.exit();
});

const solution = (input) => {
  const [A, B] = input;
  result += A + B;
  if (idx !== cnt - 1) result += "\n";
  idx++;
};
