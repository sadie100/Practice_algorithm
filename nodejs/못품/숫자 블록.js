/*
들어온 begin부터 end까지의 수 안에서 자기 자신을 제외하고 가장 큰 약수를 반환하면 된다.

만약 2로 나눠지는 수일 경우 : 2로 나눈 값을 반환한다.
아닐 경우 : 밑의 방법들 참고

효율적으로 약수 구하는 알고리즘 : 만약 제곱근이 있을 경우
1. 각 수의 제곱근을 구한다
2. 1부터 제곱근까지의 약수를 구한다
3. 수에서 해당 약수를 나눠서 나머지 약수를 구한다

만약 제곱근이 없을 경우
1. 각 수의 n/2까지 돌리면서 약수를 구한다.

위를 처리하면서 가장 큰 약수를 담는다.
*/

function solution(begin, end) {
  var answer = [];

  const getMaxMeasure = (num) => {
    let measure = 0;

    if (num % 2 === 0) {
      return num / 2;
    }

    //제곱근 있는 경우
    if (Math.floor(Math.sqrt(num)) === Math.sqrt(num)) {
      const sqrt = Math.sqrt(num);
      for (let i = 1; i <= sqrt; i++) {
        if (i === num) continue;
        if (sqrt % i === 0) {
          measure =
            i === 1 ? Math.max(i, measure) : Math.max(i, num / i, measure);
        }
      }
    } else {
      //제곱근 없는 경우
      for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (i === num) continue;

        if (num % i === 0) {
          measure =
            i === 1 ? Math.max(i, measure) : Math.max(i, num / i, measure);
        }
      }
    }

    return measure;
  };

  for (let i = begin; i <= end; i++) {
    answer.push(getMaxMeasure(i));
  }

  return answer;
}
