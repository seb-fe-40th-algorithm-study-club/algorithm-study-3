const fs=require('fs');
const input=fs.readFileSync('/dev/stdin').toString();

let result = Number(input)

if(result>89){
    console.log('A')
}else if(result>79){
    console.log('B')
}else if(result>69){
    console.log('C')
}else if(result>59){
    console.log('D')
}else{
    console.log('F')
}