const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((ele) => Number(ele));
const [king, queen, rooks, bishops, knights, pawns] = input;

console.log(
  1 - king,
  1 - queen,
  2 - rooks,
  2 - bishops,
  2 - knights,
  8 - pawns
);
