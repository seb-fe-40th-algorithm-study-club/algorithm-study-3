//아스키코드

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

console.log(input.charCodeAt(0))