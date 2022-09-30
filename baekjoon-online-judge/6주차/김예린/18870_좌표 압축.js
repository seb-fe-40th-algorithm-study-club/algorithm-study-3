let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let newArr = input[1].split(" ").map(Number);

// 1. set으로 중복제거 후 sort로 정렬
let set = new Set(newArr);
let sorted = [...set].sort((a, b) => a - b);

// 2. 정렬한 배열의 각 요소를 key로 인덱스 값을 value로 하는 딕셔너리 생성
let dic = {};
sorted.forEach((e, idx) => {
  dic[e] = idx;
});

// 3. arr배열의 요소를 key값으로 가지고 있는 dic의 value값을 answer에 추가
let answer = "";
for (let i of newArr) {
  answer += dic[i] + " ";
}
console.log(answer);
