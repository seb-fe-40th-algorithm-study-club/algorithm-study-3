const input = require('fs').readFileSync("../예제.txt").toString();
// 제출전 경로 수정하기 '/dev/stdin'

let resultArr = [];
let result = '';
  // indexOf(A) : 만약에 A값이 있다면 그 값의 index를, 없다면 -1을 반환한다.
  // String.fromCharCode(97) //'a': 유니코드 값을 문자열로 변환시켜준다. 각 알파벳을 해당하는 아스키코드는 'a'는  97번이고, 'z'는 122번이기 때문에 97-122까지 반복 실행하고, 이 값을 String.fromCharCode 메서드를 사용하여 알파벳 문자을 생성해준다.
  for (let i = 97; i <= 122; i++) {
    let alphabet = String.fromCharCode(i);
  
    for (let j = 0; j < input.length; j++) {
      resultArr.push(input[j].indexOf(alphabet));
    }
  }

  result = resultArr.join(' ');    //배열의 모든요소를 " "로 구분 join()하여, 연결하여 새 문자열을 만들고 반환한다.
  console.log(result);
