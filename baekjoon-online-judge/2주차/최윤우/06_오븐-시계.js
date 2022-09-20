let input = require("fs")
.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")

const hour = input[0].split(" ")[0];
const minute = input[0].split(" ")[1];
const cookTime = input[1];

calculate(+hour, +minute, +cookTime);
// +input 하니까 안됨

function calculate(hour, minute, cookTime) {
    minute += cookTime;
 
    while (minute >= 60){
        minute -= 60;
        hour += 1;
    }
 
    hour %= 24;
    console.log(hour, minute);
}

// 반복문 짜는 법을 모르겠음 고민하다가 레퍼 찾아봄
// 연산자 신세계