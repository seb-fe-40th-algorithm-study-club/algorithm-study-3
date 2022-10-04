const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let result = '';
let inputValue = input.sort((a, b) => a - b);
result = inputValue.join('\n');
console.log(result);
// 정렬 알고리즘이 뭔지 어렵다. 카운팅 정렬은 뭐지? 메모리 초과라고 뜸

const numbers = [5,2,3,1,4,2,3,5,1,7];
const max = Math.max(...numbers);

const array = new Array(max + 1);
array.fill(0);

for (let i = 0; i < numbers.length; i++) {
  array[numbers[i]]++;
}

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i);
    }
  }
}
