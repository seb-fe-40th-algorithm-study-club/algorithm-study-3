//단어 정렬
const [n, ...words] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
Array.from(new Set(words))
    .sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    .sort((a, b) => a.length - b.length)
    .forEach(i => console.log(i));


    //https://tesseractjh.tistory.com/34
    //무슨 풀이가 이렇게 나오는지 신기해서 가져왔습니다.
    