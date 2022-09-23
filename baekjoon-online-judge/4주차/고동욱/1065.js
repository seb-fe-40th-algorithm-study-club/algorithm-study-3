// 한수
// 1도 모르겠습니다.
// 알고리즘 어렵네요 :( 


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let n = +input;

let arr = new Array(n+1).fill(true);

for(let i=0;i<n+1; i++){
    let numList = String(i).split('');
    if(numList.length<3){
        continue
    }else{
        let d = numList[1] - numList[0];
        for(let j=1;j<numList.length -1; j++){
            if(d !== numList[j+1] - numList[j]){
                arr[i]=false;
                break;
            }
        }
    }
}
console.log(arr.filter((is)=>is).length -1)