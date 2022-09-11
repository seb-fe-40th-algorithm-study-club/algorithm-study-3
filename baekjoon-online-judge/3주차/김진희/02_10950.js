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
  const [num, ...rest] = input.map((ele, idx) => {
    return idx === 0 ? Number(ele) : ele.split(" ").map(Number);
  });

  for (let i = 0; i < num; i++) {
    console.log(rest[i][0] + rest[i][1]);
  }
};
