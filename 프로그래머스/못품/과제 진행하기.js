const getMinute = (time) => {
  const [hour, min] = time.split(":").map(Number);
  return hour * 60 + min;
};

function solution(plans) {
  var answer = [];
  const newPlans = plans.map(([name, start, playtime]) => {
    return [name, getMinute(start), playtime];
  });
  newPlans.sort(([aName, aStart, aPlaytime], [bName, bStart, bPlaytime]) => {
    return bStart - aStart;
  });

  let now = [];
  const progress = [];
  const [nextName, nextStart, nextTime] = newPlans.pop();

  now = [nextName, nextTime + nextStart];

  console.log(newPlans);
  while (newPlans.length > 0) {
    const [name, start, playtime] = newPlans.pop();

    let [nowname, endTime] = now;
    if (endTime > start) {
      //현재과제 끝나는 시간이 다음과제 시작시간보다 늦음 -> 현재 과제 멈추기
      progress.push([nowname, endTime - start]);
      now = [name, start + playtime];
    } else if (endTime < start) {
      //현재과제 끝나는 시간이 다음과제 시작시간보다 빠름 => 현재 과제 완료 가능, progress 돌리기 가능
      answer.push(nowname);
      while (true) {
        if (progress.length === 0) break;
        if (endTime >= start) break;
        const [nextName, nextTime] = progress.pop();
        now = [nextName, endTime + nextTime];

        endTime += nextTime;
      }
      answer.push(now[0]);
      if (endTime > start) {
        progress.push([now[0], now[1] - start]);
        now = [name, start + playtime];
      } else {
        now = [name, start + playtime];
      }
    } else {
      //현재과제 끝나는 시간 == 다음과제 시작시간
      answer.push(nowname);
      now = [name, start + playtime];
    }
  }

  while (progress.length > 0) {
    const [name, time] = progress.pop();
    answer.push(name);
  }

  return answer;
}
