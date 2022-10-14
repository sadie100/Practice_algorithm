/*
n이 홀수인 경우는 불가하므로 생각하지 않는다.

가로의 길이가 2일 때 방법의 수는 3이다.
가로의 길이 n의 방법의 수를 r(n)이라 하면,
n이 2씩 늘어난다면 기존 r(n)에 *3을 곱한 것
+ n이 2보다 클 때, 타일을 걸쳐서 배치하는 경우(예제의 마지막에서 두 개)가 있다
=> +2 추가

점화식으로 나타내면,
r(n) = r(n-1)*3+2
*/

function solution(n) {
  var answer = 0;
  let idx = 0;
  while (idx < 3) {
    idx += 2;
    if (idx === 2) {
      answer = 3;
      continue;
    }
    answer = answer * 3 + 2;
  }
  return answer;
}
