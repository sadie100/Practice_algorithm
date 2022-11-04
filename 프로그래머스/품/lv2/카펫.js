/*
yellow수의 약수 찾기
각 약수들+2 씩 곱하면 brown+yellow 충족하는지 확인
조건에 맞는 수에 2씩 더해서 리턴
*/

function solution(brown, yellow) {
  var answer = [];

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i !== 0) {
      continue;
    }
    let j = yellow / i;
    if ((j + 2) * (i + 2) === brown + yellow) {
      answer = [j + 2, i + 2];
    }
  }

  return answer.sort((a, b) => b - a);
}
