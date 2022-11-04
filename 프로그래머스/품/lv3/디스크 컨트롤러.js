/***
각 시점에서 작업의 소요시간이 가장 적게 드는 요청을 처리하면 평균을 가장 줄일 수 있다.

현재 소요시간을 담는 변수 time 정의(초기값 0)
jobs를 복사해서 남은 작업 담을 workList 정의
workList를 작업 소요시간 순으로 sort한다.

workList가 빌 때까지 반복한다.
    workList를 돌리면서 현재 time에서 실행 가능한 job을 탐색한다.
    걸리면(현재 실행가능한 job이 있으면),
        그 job을 workList에서 제거
        job의 소요시간만큼 time을 늘린다.
        time-job의 요청시간만큼 answer를 늘린다.(요청부터 종료까지 걸린 시간 더하기)
    걸리지 않으면(현재 실행가능한 job이 없으면)
        time을 1 늘린다.

answer를 jobs의 length로 나눈다.(평균 구하기)
***/

function solution(jobs) {
  var answer = 0;
  let time = 0;
  let workList = jobs.slice().sort((a, b) => a[1] - b[1]);

  while (workList.length > 0) {
    let request = -1;
    for (let i = 0; i < workList.length; i++) {
      if (workList[i][0] <= time) {
        request = i;
        break;
      }
    }
    if (request === -1) {
      time += 1;
      continue;
    }
    time += workList[request][1];
    answer += time - workList[request][0];

    workList.splice(request, 1);
  }
  return Math.floor(answer / jobs.length);
}
