/*
f(n)을 저장하는 배열 생성
n번째 피보나치 수%1234567을 계산해서 배열에 넣는 함수 생성
n까지 위 함수를 반복
n번째 원소 리턴
*/

function solution(n) {
  const memo = new Array(n + 1).fill(0);
  memo[0] = 0;
  memo[1] = 1;

  const fibo = (num) => {
    memo[num] = (memo[num - 1] + memo[num - 2]) % 1234567;
  };

  for (let i = 2; i <= n; i++) {
    fibo(i);
  }

  return memo[n];
}
