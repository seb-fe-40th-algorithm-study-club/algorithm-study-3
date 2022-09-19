const input = require('fs').readFileSync(0).toString().split('\n'); // 왜 readFileSync(0)인거지? 경로 안쓰고?

const [a, b] = input;

if(a>0){
   if(b>0){
       console.log(1);
   }else{
       console.log(4);
   }
   // console.log(y > 0 ? 1 : 4); 이렇게 더 간단하게 쓸 수 있다.
}else{
   if(b>0){
       console.log(2);
   }else{
       console.log(3);
   }
}