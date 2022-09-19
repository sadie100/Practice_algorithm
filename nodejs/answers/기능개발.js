/***
    progresses 돌려서 완료일까지 남은 날짜수 담은 goalQueue 배열 정의
    while 반복 돌림
        date+1 하고 answer에 넣게 될 complete 정의
        while 반복 돌림
            goalQueue의 맨 앞에 있는 애 가져옴(goal)
            해당 goal과 date 비교
            만약 date가 goal보다 크거나 같으면 pop으로 배포처리, complete 1 증가
            그 다음 것도 date와 비교해서 조건 만족하면 바로 pop으로 배포처리
            반복
            goal이 date보다 작으면 반복 탈출
        한번에 배포처리한 수를 answer에 넣기
        goalQueue 빌 때까지 반복
***/
function solution(progresses, speeds) {
  var answer = [];
  //완료일까지 남은 날짜수 담은 배열
  let goalQueue = progresses.map((prog, idx) => {
    return Math.ceil((100 - prog) / speeds[idx], 10);
  });

  let date = 0; //경과된 시간
  while (goalQueue.length > 0) {
    let complete = 0;
    while (true) {
      console.log(goalQueue);
      if (goalQueue.length <= 0) {
        break;
      }
      const goal = goalQueue[0];
      if (date >= goal) {
        complete++;
        goalQueue.shift();
      } else {
        break;
      }
    }
    if (complete > 0) {
      answer.push(complete);
    }
    date += 1;
  }
  return answer;
}
