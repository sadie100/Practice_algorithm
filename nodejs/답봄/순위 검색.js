/*
효율성 테스트 통과를 위해선 info를 타입별로 나눠 두는 것과, 이분탐색 필요
=> info에서 점수를 제외한 나머지 조건들을 하나의 string으로 만들고 객체 key로 저장한다.
value에는 점수 배열을 둔다. 같은 조건을 가진 지원자는 배열로 묶인다.
각 value 배열을 점수 오름차순으로 정렬한다
query에서 -의 경우와 점수를 따로 빼서, 나머지 조건들을 모두 include하는 info 객체 프로퍼티만 필터링한다.
위 info에서 점수 조건을 만족하는 경우의 수를 구해온다
점수 조건을 확인할 때 이분탐색 로직을 활용
*/

//이분탐색 로직 변형
const binarySearch = (array, target, start, end) => {
  //start, end는 배열의 인덱스
  if (start > end) {
    return start;
  }
  const middleIdx = Math.floor((start + end) / 2);
  const middle = array[middleIdx];

  if (target === middle) {
    return binarySearch(array, target, start, middleIdx - 1);
  }

  if (target > middle) {
    //타겟이 중간값보다 크면=>왼쪽 버림
    return binarySearch(array, target, middleIdx + 1, end);
  } else if (target < middle) {
    //타겟이 중간값보다 작으면 => 오른쪽 버림
    return binarySearch(array, target, start, middleIdx - 1);
  }
};

function solution(info, query) {
  var answer = [];
  let applicant = {};

  //info를 타입별로 나눠둔다.
  info.forEach((apply, idx) => {
    const applyArr = apply.split(" ");
    const score = Number(applyArr.pop());

    const keyStr = applyArr.join("");
    if (!applicant[keyStr]) {
      applicant[keyStr] = [score];
    } else {
      applicant[keyStr].push(score);
    }
  });

  //이분 탐색을 위한 정렬
  for (let apply in applicant) {
    applicant[apply].sort((a, b) => a - b);
  }

  //쿼리를 돌리면서 각 조건에 부합하는 지원자를 찾고 push한다
  query.forEach((cond) => {
    const condArr = cond.split(/ and | |-/g).filter((d) => !!d);
    const score = Number(condArr.pop());

    const filtered = Object.keys(applicant)
      .filter((info) => {
        return condArr.every((cond) => info.includes(cond));
      })
      .reduce((acc, cur) => {
        return (
          acc +
          applicant[cur].length -
          binarySearch(applicant[cur], score, 0, applicant[cur].length - 1)
        );
      }, 0);
    answer.push(filtered);
  });

  return answer;
}
