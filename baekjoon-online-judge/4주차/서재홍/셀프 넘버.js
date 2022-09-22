function notSelfNumber(n) {
    let sum = n;
    
    while(n>0){
        sum += n % 10;
        n = Math.floor(n/10);
    }
    return sum;
}
const selfNumber = new Array(10000);
selfNumber.fill(true);

for(let i = 0; i < 10000; i++){
    selfNumber[notSelfNumber(i)] = false;

if(selfNumber[i]){
    console.log(i)
    }
}