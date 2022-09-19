const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let star = "";

for (let i = 0; i < input[0]; i++) {
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
