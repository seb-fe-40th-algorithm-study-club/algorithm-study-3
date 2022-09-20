const fs=require('fs');
const input=fs.readFileSync('/dev/stdin').toString();

/** 
 * 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력
 * 윤년은 년도가 4의 배수이면서, 100의 배수가 아닐때 또는 400의 배수일 때이다.
 * **/

let year = Number(input)

if((year%4===0&&year%100 !== 0)||year%400===0){
    console.log(1)
}else{
    console.log(0)
}