// 시간 초과1
/*
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = input.split(" ");

const array = answer
  .filter((v, i) => answer.indexOf(v) === i)
  .sort((a, b) => a - b);

console.log(answer.map((ele) => array.indexOf(ele)).join(" "));
*/

// 시간 초과2
/*
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = input.split(" ");
const set = new Set(answer);

const array = [...set].sort((a, b) => a - b);

console.log(answer.map((ele) => array.indexOf(ele)).join(" "));
*/

// 시간 초과3
/*
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = input.split(" ");

const array = answer
  .filter((v, i) => answer.indexOf(v) === i)
  .sort((a, b) => a - b)
  .reduce((a, b, i) => {
    a[b] = i;
    return a;
  }, {});

console.log(answer.map((ele) => array[ele]).join(" "));
 */
