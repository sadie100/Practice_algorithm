/***
큐 queue를 정의한다.
operations를 복사해서 operQ를 만든다.
operQ가 빌 때까지 반복문을 돌린다.
    operQ의 첫 번째를 꺼내서 명령어 형식에 따라 연산을 한다.
queue 상태에 따라 answer를 리턴한다.

***/

function solution(operations) {
  var answer = [];
  let queue = [];
  let operQ = operations.slice();

  while (operQ.length > 0) {
    const operation = operQ.shift();
    if (operation.includes("I")) {
      const num = Number(operation.replace("I ", ""));
      queue.push(num);
    } else if (operation === "D 1") {
      if (queue.length === 0) continue;
      const max = Math.max(...queue);
      const maxIdx = queue.indexOf(max);
      queue.splice(maxIdx, 1);
    } else if (operation === "D -1") {
      if (queue.length === 0) continue;
      const min = Math.min(...queue);
      const minIdx = queue.indexOf(min);
      queue.splice(minIdx, 1);
    }
  }
  if (queue.length === 0) {
    answer = [0, 0];
  } else {
    answer = [Math.max(...queue), Math.min(...queue)];
  }

  return answer;
}
