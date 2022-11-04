/*
A를 오름차순으로, B를 내림차순으로 정렬한다
A와 B를 순서대로 곱해서 더한다
*/

function solution(A, B) {
  var answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
