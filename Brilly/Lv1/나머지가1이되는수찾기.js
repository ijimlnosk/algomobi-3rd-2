/* 
문제설명
자연수 n이 매개변수로 주어집니다.
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
답이 항상 존재함은 증명될 수 있습니다.

제한 사항
3 ≤ n ≤ 1,000,000
*/

// 풀이 및 프로그래머스 제출
const j_solution = (n) => {
  let x = 1;
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
};

// 다른 사람 풀이
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

const solution = function (n) {
  for (let i = 0; i < n; i++) {
    if (n % i == 1) {
      return i;
    }
  }
};
