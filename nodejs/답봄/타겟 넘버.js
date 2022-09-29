/***
재귀를 돌려서 구한다.
함수 fs를 정의한다. => index와 sum값을 인자로 받는 함수
    만약 index가 numbers의 length-1이면, 즉 배열의 맨 마지막 원소를 돌린 것이면
    현재 값까지 적용한 sum과 target을 비교하고 일치하면 answer을 1 증가시킨 후 리턴한다.
    아닐 경우, 다음 인덱스를 넣어서 fs를 돌린다.
    이 때 +하는 경우와 -하는 경우를 둘 다 돌린다.
fs(0,0)을 돌리고 answer를 리턴한다.
***/

function solution(numbers, target) {
  var answer = 0;

  const fs = (index, sum) => {
    if (index === numbers.length - 1) {
      if (sum - numbers[index] === target || sum + numbers[index] === target) {
        answer += 1;
      }
      return;
    }

    fs(index + 1, sum - numbers[index]);
    fs(index + 1, sum + numbers[index]);
  };

  fs(0, 0);

  return answer;
}
