const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input.map(Number)
let newArr = [];
for(let i =0; i < arr.length; i++) {
    newArr.push(arr[i] % 42);
}
result = newArr.reduce((acc, v) => acc.includes(v) ? acc : [...acc, v], []);


console.log(result.length);