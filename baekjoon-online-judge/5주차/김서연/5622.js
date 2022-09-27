const input = require('fs').readFileSync("../예제.txt").toString().trim();
// 제출전 경로 수정하기 '/dev/stdin'

let phone = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};
let result = 0;

for (let i = 0; i < input.length; i++) {
	for (let j = 2; j <= 9; j++) {
		if (phone[j].includes(input[i])) {
			result += j + 1;
			break;
		}
	}
}

console.log(result);