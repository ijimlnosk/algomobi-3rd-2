/* 
문제 설명
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ num1 ≤ 10,000
0 ≤ num2 ≤ 10,000
*/

// 풀이 (1점)
const j_solution = (num1, num2) => {
  if (num1 === num2) return 1;
  else return -1;
};

console.log(j_solution(2, 3));
