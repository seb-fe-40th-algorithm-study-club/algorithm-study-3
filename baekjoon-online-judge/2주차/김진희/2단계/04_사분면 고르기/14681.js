const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  const [x, y] = input;
  let result = 0;

  if (y > 0) result = x > 0 ? 1 : 2;
  else result = x < 0 ? 3 : 4;

  console.log(result);
  process.exit();
});
