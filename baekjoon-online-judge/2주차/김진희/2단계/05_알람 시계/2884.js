const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
}).on("close", function () {
  const [h, m] = input;
  const flag = m - 45;
  if (flag < 0) {
    console.log(getHour(h - 1), 60 + flag);
  } else {
    console.log(h, flag);
  }

  process.exit();
});

const getHour = (hour) => {
  if (hour < 0) return 24 + hour;
  return hour;
};
