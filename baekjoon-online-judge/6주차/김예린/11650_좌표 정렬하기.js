let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.shift();

let newArr = input.map((i) => i.split(" ").map(Number));

let result = "";
newArr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .forEach((i) => {
    result += `${i[0]} ${i[1]}\n`;
  });
console.log(result);
