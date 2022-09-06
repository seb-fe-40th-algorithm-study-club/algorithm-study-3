const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

if (A === B && A === C && B === C) {
    return console.log(10000 + A * 1000)
} 


if (A !== B || A !== C || B !== C) {
    if(A===B||A===C){
        return console.log(1000 + A * 100)
    }else if(B===C){
        return console.log(1000 + B * 100)
    }
} 

// if (A !== B && A !== C && B !== C) {
//     if (A> B > C || A > C > B) {
//         return console.log(A * 100)
//     } else if (B > A > C || B > C > A) {
//         return console.log(B * 100)
//     } else if (C > A > B || C > B > A) {
//         return console.log(C * 100)
//     }
// }
//-->
/**
 * if (A !== B && A !== C && B !== C) {
    if ((A>B&&B>C)||(A>C&&C>B)) {
        return console.log(A * 100)
    } else if ((B>C&&C>A)||(B>A&&A>C)) {
        return console.log(B * 100)
    } else if ((C>A&&A>B)||(C>B&&B>A)) {
        return console.log(C * 100)
    } 
 * **/

if (A !== B && A !== C && B !== C) {
    const sort = [A, B, C].sort();  
    return console.log(sort.pop() * 100);
}