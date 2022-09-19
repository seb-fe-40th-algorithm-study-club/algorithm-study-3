//더하기 사이클
//스스로의 힘으로 풀지 못한 문제.

let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let num = input;
let sum;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10;

    if (input === num) {
        break;
    }
}

console.log(i);