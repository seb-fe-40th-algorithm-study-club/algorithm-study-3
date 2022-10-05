const input = require('fs').readFileSync("../../예제.txt").toString().trim().split('\n');
// 제출전 경로 수정하기 '/dev/stdin'

let num = input.shift();
let stack = []
let result = []
// let act = input[0].split(' ');
// console.log(act[0] === 'push');

// push, pop(가장위 정수 뺴고, 그 수를 출력. 만약 정수가 없으면 -1출력), size, empty(비어있으면1, 아니면 0), top (가장위에 있는 정수 출력,정수가 없으면 -1)
for(let i = 0; i < num; i++){
    let act = input[i].split(' ');
 if(act[0] === 'push'){
    stack.push(act[1])
 }
 if(act[0] === 'pop'){
    if(stack.length === 0){
        result.push(-1);
    }else{
        result.push(stack[stack.length-1]);
        stack.pop(stack.length-1)
    }
 } 
 if(act[0] === 'size'){
    result.push(stack.length);
 } 
 if(act[0] === 'empty'){
    if(stack.length === 0){
        result.push(1);
    }else{
        result.push(0);
    }
 }
 if(act[0] === 'top'){
    if(stack.length === 0){
        result.push(-1);
    }else{
        result.push(stack[stack.length-1]);
    }
 }
}

console.log(result.join('\n')); // 처음에 시간초과되어, 결과를 한 배열에 넣어 한번에 출력해줘야 함