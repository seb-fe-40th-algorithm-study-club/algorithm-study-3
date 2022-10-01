let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input.shift()
let sortArr = input.map(Number).sort((a, b) => a - b)

// 모든 결과 담을 문자열 생성
let result = ''

// 평균
let avg = Math.round(sortArr.reduce((acc, cur) => acc + cur) / n)
result += `${avg}\n`

// 중앙값
let mid = sortArr[Math.floor(n/2)]
result += `${mid}\n`

// 최빈값
const map = new Map();
let max = 1;
for (let number of sortArr) {
if (map.has(number)) {
  max = Math.max(max, map.get(number) + 1);
  map.set(number, map.get(number) + 1);
} else map.set(number, 1);
}

const maxArr = [];
for (let [key, val] of map) {
if (val === max) maxArr.push(key);
}

let fre = maxArr.length === 1 ? maxArr[0] : maxArr[1]
result += `${fre}\n`

// 범위
let scope = sortArr[n-1] - sortArr[0]
result += `${scope}`

console.log(result)
