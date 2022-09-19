const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const [amount, num, ...rest] = input.map((ele, idx) => {
    switch (idx) {
      case 0:
      case 1:
        return Number(ele);
        break;
      default:
        return ele.split(" ").map(Number);
        break;
    }
  });

  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += rest[i][0] * rest[i][1];
  }
  console.log(amount === sum ? "Yes" : "No");
};
