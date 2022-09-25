let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('');
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;

while (true) {
	if (croatia.includes(input.slice(0, 3).join(""))) {
		input.splice(0, 3);
		count++;
	} else if (croatia.includes(input.slice(0, 2).join(""))) {
		input.splice(0, 2);
		count++;
	} else {
		input.splice(0, 1);
		count++;
	}
	if (input.length === 0) {
		console.log(count);
		break;
	}
}