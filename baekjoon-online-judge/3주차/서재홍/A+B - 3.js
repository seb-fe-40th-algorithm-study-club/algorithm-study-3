let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (i = 1; i <= input[0]; i++) {
  let n = input[i].split(" ");

  console.log(Number(n[0]) + Number(n[1]));
}
