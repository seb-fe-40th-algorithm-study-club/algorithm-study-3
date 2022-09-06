const fs = require('fs');
const input = fs.readFileSync("../예제.txt").toString().trim();
// 제출전 경로 수정하기 '/dev/stdin'

// console.log(input);
// const a = +(input[0]); --> trim()을 사용하면 배열이 아니니까 주의하도록 하자

if(input % 4 === 0){ // 문제를 읽을때는 쉼표(,)가 어디에 있는지를 확인하여 문제를 정확히 파악하자
    if(input % 100 != 0 || input % 400 === 0){
        console.log(1);
    }else{
        console.log(0);
    }

}else{
    console.log(0);
}