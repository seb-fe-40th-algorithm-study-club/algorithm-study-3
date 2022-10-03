const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = input.shift();

for(let i = 0; i < iter; i++){
    input[i] += " " + i;
}

let arr = [];

for(let i = 0; i < iter; i++){
    arr.push(input[i].split(" "));
}

arr.sort((a,b) => {
    if(a[0] === b[0]){
        return a[2] - b[2]
    } else {
        return a[0] - b[0]
    }
})

let ans = [];


for(let i = 0; i < iter; i++){
    arr[i].pop();
    ans.push(arr[i].join(" "));
}

console.log(ans.join("\n"));