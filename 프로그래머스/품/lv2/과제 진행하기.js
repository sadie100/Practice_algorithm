const getMinute = (time) => {
  const [hour, min] = time.split(":").map(Number);
  return hour * 60 + min;
};

function solution(plans) {
  var answer = [];
  const newPlans = plans.map(([name, start, playtime]) => {
    return [name, getMinute(start), +playtime];
  });
  newPlans.sort(([aName, aStart, aPlaytime], [bName, bStart, bPlaytime]) => {
    return bStart - aStart;
  });

  //새 과제 시작시간
  let next = newPlans[newPlans.length - 1][1];
  //현 과제 끝나는 시간
  let nowEnd = 0;
  let nowName = "";
  const progress = [];

  while (true) {
    if (newPlans.length === 0) {
      answer.push(nowName);
      break;
    }
    //새 과제 시작시간이 현과제 끝시간 전이면 인터셉트 처리
    if (next < nowEnd) {
      progress.push([nowName, nowEnd - next]);
      const [nextName, nextStart, nextTime] = newPlans.pop();
      nowEnd = nextStart + nextTime;
      nowName = nextName;
      if (newPlans.length > 0) {
        next = newPlans[newPlans.length - 1][1];
      }
    } else if (next > nowEnd) {
      //현과제가 무사히 끝났을 경우. progress 있으면 progress 돌고, 없으면 새과제로 jump
      if (nowName) answer.push(nowName);
      if (progress.length > 0) {
        const [nextName, lastTime] = progress.pop();
        nowEnd += lastTime;
        nowName = nextName;
      } else {
        const [nextName, nextStart, nextTime] = newPlans.pop();
        nowEnd = nextStart + nextTime;
        nowName = nextName;
        if (newPlans.length > 0) {
          next = newPlans[newPlans.length - 1][1];
        }
      }
    } else {
      //새과제와 타이밍 좋게 change
      if (nowName) answer.push(nowName);
      const [nextName, nextStart, nextTime] = newPlans.pop();
      nowEnd = nextStart + nextTime;
      nowName = nextName;
      if (newPlans.length > 0) {
        next = newPlans[newPlans.length - 1][1];
      }
    }
  }

  while (progress.length > 0) {
    const [name, time] = progress.pop();
    answer.push(name);
  }

  return answer;
}
