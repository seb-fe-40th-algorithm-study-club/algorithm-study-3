const input = require('fs').readFileSync("../예제.txt").toString().split(' ').map(Number);
// 제출전 경로 수정하기 '/dev/stdin'


// M에서 뺀 값이 음수일 경우, M= 60-(M-45), H에서 1을 뺴준다.
// H 값이 음수일 경우, 23이된다.

let[H, M] = input;   // 왜 오류가 나는지 계속 찾다가... const는 상수여서..let 써야 합니다..

M -= 45;

if (M < 0) {
    M += 60;
    H--;

    if (H === -1) {
        H = 23;
    }
}

console.log(H + ' ' + M);