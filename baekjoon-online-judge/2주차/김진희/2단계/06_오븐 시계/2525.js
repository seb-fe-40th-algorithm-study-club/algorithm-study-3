const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  const [[a, b], [c]] = input;
  let min = b + c;
  if (min < 60) {
    console.log(a, min);
  } else {
    let hour = a;
    hour += Math.floor(min / 60);
    console.log(hour % 24, min % 60);
  }
  process.exit();
});
