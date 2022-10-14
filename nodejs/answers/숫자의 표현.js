/*
완전탐색

for문 두개를 돌려서 1부터 n까지 더해 가면서 15가 되면 answer를 1 늘리고, 15 이상으로 넘어가면 break하는 식으로 한다.
*/

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    let acc = i;
    if (acc === n) {
      answer += 1;
      break;
    } else if (acc > n) {
      break;
    }
    for (let j = i + 1; j <= n; j++) {
      acc += j;
      if (acc === n) {
        answer += 1;
        break;
      } else if (acc > n) {
        break;
      }
    }
  }

  return answer;
}
