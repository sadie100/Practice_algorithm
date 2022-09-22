/**
people을 정렬, 다음을 반복한다
    각 시점에서 가장 작은 애를 뽑는다
    가장 큰 애와 짝을 지어 본다
    limit을 통과하면 두 짝을 배열에서 꺼내고 success를 1 올린다
    통과하지 못하면 비교했던 큰 애를 배열에서 꺼내고 fail을 1 올린다
만약 반복문을 통과했을 때 배열에 한 명이 남아있으면 fail을 1 올린다
success와 fail을 합한다

**/

function solution(people, limit) {
  var answer = 0;

  let restPeople = people.sort((a, b) => a - b);
  let success = 0;
  let fail = 0;
  while (restPeople.length > 1) {
    const min = restPeople[0];
    const length = restPeople.length - 1;
    for (let i = length; i >= 0; i--) {
      if (min + restPeople[i] <= limit) {
        //limit을 충족함
        restPeople.splice(i, 1);
        restPeople.shift();
        success += 1;
        break;
      } else {
        //limit을 충족하지 않음
        //현재 매칭중인 restPeople[i] 빼기
        fail += 1;
        restPeople.pop();
      }
    }
    if (restPeople.length === 1) {
      fail += 1;
    }
  }

  answer = success + fail;
  return answer;
}
