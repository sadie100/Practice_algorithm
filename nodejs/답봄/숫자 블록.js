/*
들어온 begin부터 end까지의 수 안에서 자기 자신을 제외하고 가장 큰 약수를 반환하면 된다.

효율적으로 약수 구하는 알고리즘
1. 1부터 각 수의 제곱근까지의 약수를 구한다
2. 수에서 해당 약수를 나눠서 나머지 약수를 구한다

위를 처리하면서 가장 큰 약수를 담는다.

주의할 점 : 
10000000번 블록까지만 사용하므로 10000000 이상의 약수는 반환하면 안 된다.

*/

function solution(begin, end) {
  var answer = [];

  const getMaxMeasure = (num) => {
    if (num === 1) return 0;
    let measure = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num / i > 10000000) continue;
      if (num % i === 0) {
        measure = Math.max(
          ...[i, num / i, measure].filter(
            (data) => data < 10000000 && data !== num
          )
        );
        break;
      }
    }

    return measure;
  };

  for (let i = begin; i <= end; i++) {
    answer.push(getMaxMeasure(i));
  }

  return answer;
}
