/* 
문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 사항
x는 1 이상, 10000 이하인 정수입니다.
*/

// 풀이 (1점)
const j_solution = (x) => {
  const answer = String(x)
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0);
  return x % answer === 0;
};

console.log(j_solution(10));

// 다른 사람 풀이
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}
