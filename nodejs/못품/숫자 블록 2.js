/*
들어온 begin부터 end까지의 수 안에서 자기 자신을 제외하고 가장 큰 약수를 반환하면 된다.

에라스토테네스의 체로 100000까지의 소수 구하고 맨 처음부터 나눠 보면서
나눠지면 -> 나눈 값을 반환한다.
아닐 경우 : 밑의 방법들 참고

효율적으로 약수 구하는 알고리즘 : 만약 제곱근이 있을 경우
1. 각 수의 제곱근을 구한다
2. 1부터 제곱근까지의 약수를 구한다
3. 수에서 해당 약수를 나눠서 나머지 약수를 구한다

만약 제곱근이 없을 경우
1. 각 수의 n/2까지 돌리면서 약수를 구한다.

위를 처리하면서 가장 큰 약수를 담는다.
*/

const chae = (maxNum) => {
  let max = Math.min(10000000, maxNum);

  const chaeArr = new Array(max + 1).fill(true);

  chaeArr[0] = false;
  chaeArr[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (chaeArr[i]) {
      for (let j = i * i; j <= max; j += i) {
        chaeArr[j] = false;
      }
    }
  }

  const chaeNum = chaeArr
    .map((data, idx) => {
      if (data) return idx;
    })
    .filter((d) => !!d);

  return chaeNum;
};

function solution(begin, end) {
  var answer = [];

  const chaeArr = chae(end);

  const getMaxMeasure = (num) => {
    for (let small of chaeArr) {
      if (num < small) break;
      if (num % small === 0) {
        if (num / small > 10000000) continue;
        return num / small;
      }
    }

    return num === 1 ? 0 : num > 10000000 ? 10000000 : num;
  };

  for (let i = begin; i <= end; i++) {
    answer.push(getMaxMeasure(i));
  }

  return answer;
}
