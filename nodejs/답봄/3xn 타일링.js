/*
n이 홀수인 경우는 불가하므로 생각하지 않는다.

가로의 길이가 2일 때 방법의 수는 3이다.
가로의 길이 n의 방법의 수를 r(n)이라 하면,
n이 2씩 늘어난다면 기존 r(n-2)에 3(r(2))을 곱한 것
+ n이 2보다 클 때, 타일을 걸쳐서 배치하는 경우(예제의 마지막에서 두 개)가 있다 => +2 추가
+ 이전 새 패턴 경우들을 뒤쪽에 배치하는 경우 => r(n-4) * 2, r(n-6)*2, ... 추가

점화식으로 나타내면,
r(n) = r(n-2)*r(2) + r(n-4)*2 + r(n-6)*2 + ... + 2;
*/

function solution(n) {
  const table = new Array(n + 1).fill(0);
  table[0] = 0;
  table[2] = 3;
  let idx = 2;
  let sum = new Array(n + 1).fill(0);
  sum[0] = 0;
  sum[2] = 6;
  while (idx <= n) {
    idx += 2;

    table[idx] = (table[idx - 2] * table[2] + sum[idx - 4] + 2) % 1000000007;
    sum[idx] = sum[idx - 2] + table[idx] * 2;
  }
  return table[n];
}
