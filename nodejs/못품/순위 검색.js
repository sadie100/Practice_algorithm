/*
효율성 테스트 통과를 위해선 query를 단순화하는 것과, 이분탐색 필요
=> info에서 점수를 제외한 나머지 조건들을 하나의 string으로 만든다. 이후 점수와 함께 객체 형태로 저장
info 배열을 점수 오름차순으로 정렬한다
query에서 -의 경우와 점수를 따로 빼서, 나머지 조건들을 모두 include하는 info만 필터링
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
  const middle = array[middleIdx].score;

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
  let applicant = [];

  info.forEach((apply, idx) => {
    const applyArr = apply.split(" ");
    const score = Number(applyArr.pop());

    applicant.push({
      info: applyArr.join(""),
      score: score,
    });
  });

  applicant = applicant.sort((a, b) => a.score - b.score);

  query.forEach((cond) => {
    const condArr = cond.split(/ and | |-/g).filter((d) => !!d);
    const score = Number(condArr.pop());

    const filtered = applicant.filter(({ info, score }) => {
      return condArr.every((cond) => info.includes(cond));
    });

    const count = binarySearch(filtered, score, 0, filtered.length - 1);
    answer.push(filtered.length - count);
  });

  return answer;
}
