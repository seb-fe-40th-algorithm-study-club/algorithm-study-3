

// 한수란? 각 자리수들이 등차수열을 이루는 수
// 등차수열이란? 각 항들이 일정한 차이를 보이는 수열, 예를 들면 한수는 123(공차 1), 753(공차 -2), 111(공차 0)등이 가능하다. * 공차: 공통적으로 나타나는 '차'임.
// 그런데 여기서부터 헷갈리기 시작할 것이다. 3자리수 이상이면 쉽게 알 수 있는데 과연 3자리수 미만은 어떻게 될까? 결론부터 얘기하면 1자리수, 2자리수들은 모두 한수가 된다.
// 참고 : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=occidere&logNo=220790000403   https://nyang-in.tistory.com/166

// 1,000보다 작거나 같은 자연수 input이 주어진다.
// 1보다 크거나 같고, input보다 작거나 같은 한수의 개수를 출력한다.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let num = Number(input);

function hansu(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        let hundredNumber = Math.floor((i % 1000) / 100);
        let tenNumber = Math.floor((i % 100) / 10);
        let oneNumber = i % 10;

        if(i < 100){ // n이 한자리 수 혹은 두자리 수 일 때
            count++;
        }else if(100 <= i && i < 1000){ // 1000은 한수가 아니니 제외, 4자리 수이기도 하고
            if (hundredNumber - tenNumber === tenNumber - oneNumber){
                count++;
            }
        }
    }
    return count;
}
console.log(hansu(num));