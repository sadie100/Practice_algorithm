/***
    answer 배열 정의
    commands를 반복 돌린다.
        현재 시점의 command를 [i, j, k]로 구조 분해한다.
        array를 복사한 후 i, j, k 연산을 수행핸다.
        answer에 결과값 넣는다.
    answer 리턴
***/

function solution(array, commands) {
  var answer = [];
  commands.forEach(([i, j, k]) => {
    const arr = array.slice();
    const cut = arr.splice(i - 1, j - i + 1);
    answer.push(cut.sort((a, b) => a - b)[k - 1]);
  });
  return answer;
}
