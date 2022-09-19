const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().split(" ").map(Number); 
// 제출전 경로 수정하기 '/dev/stdin'

console.log(input);
const a = input[0]; 

if(a>=90){ // 100>=a>=90 이렇게 조건을 넣으면, 입력을 100으로 넣으면 F가 나온다 작거나 같은경우는 인식을 못하는건가?
    console.log('A');
}
else if(a>=80){ // 89>=a>=80 이렇게 조건 넣어주면 테스트 통과가 안됨...왜그럴까..
    console.log('B');
}else if(a>=70){
    console.log('C');
}else if(a>=60){
    console.log('D');
}else{
    console.log('F');
}