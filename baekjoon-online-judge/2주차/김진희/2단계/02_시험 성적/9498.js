const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const score = Number(input);

let result = "";
const decimal = score % 10;
switch ((score - decimal) / 10) {
  case 10:
  case 9:
    result = "A";
    break;
  case 8:
    result = "B";
    break;
  case 7:
    result = "C";
    break;
  case 6:
    result = "D";
    break;
  default:
    result = "F";
    break;
}

console.log(result);
