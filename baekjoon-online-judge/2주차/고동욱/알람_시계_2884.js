let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let hour = Number(input[0]);  // Hour
let minute = Number(input[1]);  // Minute

minute -= 45;

if (minute < 0) {
    minute += 60;
    hour--;

    if (hour === -1) {
        hour = 23;
    }
}

console.log(hour + ' ' + minute);

// const fs=require('fs');
// const input=fs.readFileSync('/dev/stdin').toString().split(' ');

// let hour = Number(input[0]);
// let minute = Number(input[1]);

// if(minute<45){
//     if(hour === 0){
//         hour = 23
//         minute = 60 + (minute - 45)
//         console.log(hour + ' ' + minute)
//     }
//     hour = hour -1
//     minute = 60 + (minute -45)
//     console.log(hour + ' ' + minute)
// }else{
//     minute= minute-45
//     console.log(hour + ' ' + minute)
// }