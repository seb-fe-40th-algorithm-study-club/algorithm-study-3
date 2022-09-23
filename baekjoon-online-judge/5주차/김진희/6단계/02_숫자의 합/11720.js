const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [_, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = input.split("").reduce((acc, cur) => acc + +cur, 0);

console.log(answer);
