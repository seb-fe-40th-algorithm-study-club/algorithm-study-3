const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = -1;
let init = 0;

rl.on("line", function (line) {
  init = Number(line);

  solution(init);
}).on("close", function () {
  console.log(cnt);
  process.exit();
});

const solution = (newNum) => {
  cnt++;
  if (cnt !== 0 && newNum === init) return;

  solution(setNewNum(newNum));
};

const setNewNum = (newNum) => {
  let sum = newNum;
  const units = setUnits(newNum);

  if (newNum >= 10) {
    const tens = Math.floor(newNum / 10);
    sum = tens + units;
  }
  return units * 10 + setUnits(sum);
};

const setUnits = (num) => {
  if (num < 10) return num;
  return num % 10;
};
