const fs = require('fs');

const [x, y] = fs.readFileSync(0)
// 0으로 설정해야함 왜? 에디터로는 되는데.
.toString()
.trim()
.split('\n')
.map(Number);

if (x > 0 && y > 0) {
    return console.log(1)
}
else if (x > 0 && y < 0) {
    return console.log(4)
}
else if (x < 0 && y > 0) {
    return console.log(2)
}
else if (x < 0 && y < 0) {
    return console.log(3)
}