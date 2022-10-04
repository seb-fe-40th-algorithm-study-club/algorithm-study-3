let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.shift();
let newArr = input.map(Number);

function quickSort(newArr) {
  // arr의 요소가 하나이면 arr 자체를 그대로 반환 - base condition
  if (newArr.length < 2) {
    return newArr;
  }
  // quickSort 초기 배열을 선언 첫 pivot 배열의 첫 번째 요소이다.
  let pivot = [newArr[0]];
  let left = [];
  let right = [];

  // for문을 돌면서 pivot보다 작은 것은 왼쪽
  // 큰 것은 오른쪽
  // 그렇지 않은 것은 pivot에 넣어준다.
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] < pivot) {
      left.push(newArr[i]);
    } else if (newArr[i] > pivot) {
      right.push(newArr[i]);
    } else {
      pivot.push(newArr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
console.log(quickSort(newArr));
