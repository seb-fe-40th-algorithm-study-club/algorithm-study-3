const fs = require('fs');
const input = +fs.readFileSync("../예제.txt").toString(); 
// 제출전 경로 수정하기 '/dev/stdin'

let num = input;
let sum;
let cycle = 0;

while (true) {
    cycle++;
  
    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 
  
    if (input === num) {
      break;
    } 
  }
  
console.log(cycle);

// 문제
// 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자릿수를 있어 붙이면 새로운 수를 만들 수 있다.
// 예로 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다.
// 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.
// 위의 예는 4번 만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.
// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
// 첫째 줄에 N이 주어진다. 

// 풀이 ex) const num = 27;
// 1의 자리에 있는 수 구하기: num % 10  // 7
// 10의 자리에 있는 수 구하기: Math.floor(num / 10)   // 2
// 1의 자리에 있는 수 10의 자리 수로 만들기 : (num % 10) * 10   // 70


// 직접 디버깅
// cycle = 1
// sum = 2 + 6 = 8
// num = 60 + 8 = 68

// cycle = 2
// sum 6 + 8 = 14
// num = 80+ 4 =84

// cycle = 3
// sum 8+4 = 12
// num = 40 + 2 = 42

// cycle = 4
// sum = 4 + 2 = 6
// num = 20 + 6 = 26
// if (input = 26) === 26 break;... cycle = 4