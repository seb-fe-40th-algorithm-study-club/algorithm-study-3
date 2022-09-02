const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
// 제출전 경로 수정하기 '/dev/stdin'

let [a, b, c] = input;

let sum;

if(a===b && a===c) {
    sum =10000+a*1000;
}
else if(a===b){
    sum = 1000+a*100;
}else if(b===c){
    sum = 1000+b*100;
}else if(c===a){
    sum = 1000+c*100;
}else if(a !=b && b!=c){  // 중간에 들어가면 해결안되고, 그냥 else로해도 해결됨...a!=b!=c 이런식으로 절대 안된다.
    sum= Math.max(a, b, c)*100    
}
console.log(sum);
