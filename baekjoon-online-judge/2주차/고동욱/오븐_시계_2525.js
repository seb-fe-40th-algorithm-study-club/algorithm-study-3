let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let[hour, minute]=input[0].split(' ').map(Number);
let overtime = Number(input[1]); //Minute

minute += overtime;

while (minute>=60){
    minute -= 60;
    hour ++;
}
hour %= 24;

console.log(hour, minute);