//크로아티아 알파벳
let input=require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length);