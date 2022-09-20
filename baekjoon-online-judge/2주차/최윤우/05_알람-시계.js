let input = require("fs")
.readFileSync("/dev/stdin")
.toString()
.trim()
.split(" ")

const a = Number(input[0]);
const b = Number(input[1]);

if (b >= 45) {
    return console.log(`${a} ${b - 45}`)
}
if (b < 45 && a > 0) {
    return console.log(`${a - 1} ${60 - 45 + b}`)
}
else if (b < 45 && a === 0) {
    return console.log(`23 ${60 - 45 + b}`)
}