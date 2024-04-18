// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

function solution(n) {
    var answer = []
    for(let i =1; i<=n; i++) {
        if(n%i === 0) {
         answer.push(i)
        }
    }
    console.log(answer)
    const answer1 = answer.reduce((acc,val)=> acc+val, 0)
    return answer1;
}

//타풀이

function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}

