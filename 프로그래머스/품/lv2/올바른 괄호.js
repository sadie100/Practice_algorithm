/*
s를 split하고 배열 반복 돌리면서 검증한다
list stack 생성
만약 현재 문자열이 (이면 1 넣는다
)이면 pop한다
다 끝나고 stack이 빈 배열이면 true

효율성 테스트 통과하지 못해서 list -> Number, 1씩 +/- 하는 방식으로 변경
*/

function solution(s) {
  var answer = true;
  let checkNum = 0;

  for (let word of s.split("")) {
    if (word === "(") {
      checkNum += 1;
    } else if (word === ")") {
      if (checkNum === 0) {
        return false;
      } else {
        checkNum -= 1;
      }
    }
  }

  if (checkNum > 0) answer = false;
  return answer;
}
