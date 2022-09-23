//그룹 단어 체커
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const arr = [];

for (let i = 1; i < input.length; i++) {
    arr.push(input[i]);
}

let answer = arr.length;
let temp = '';

arr.forEach((item) => {
    temp = item[0];
    for (let i = 1; i < item.length; i++) {
        if (temp.includes(item[i]) && item[i - 1] !== item[i]) {
            answer--;
            break;
        }
        temp += item[i];
    }
});

console.log(answer);
출처: https://yong-nyong.tistory.com/20?category=880814 [용뇽 개발 노트:티스토리]