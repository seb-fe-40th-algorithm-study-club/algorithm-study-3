const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input.map(Number)
let result = 0;
let count = 0;
for(let i=0; i < arr.length; i++) {
    if (result < arr[i]) {
        result = arr[i]
        count = i + 1;
    }
}
console.log(result + "\n" + count)