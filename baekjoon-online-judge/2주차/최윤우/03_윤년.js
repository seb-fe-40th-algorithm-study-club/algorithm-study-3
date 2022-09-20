let input = require("fs")
.readFileSync("/dev/stdin")
.toString()
.split(" ");

const a = parseInt(input[0]);

if (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) {
    return console.log("1");
} else {
    return console.log("0");
}