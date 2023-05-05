function solution(targets) {
  var answer = 0;
  let now = 0;

  sortedTarget = targets.sort((a, b) => {
    return b[1] - a[1];
  });

  for ([start, end] of sortedTarget) {
    if (!now) {
      answer += 1;
      now = start;
      continue;
    }
    if (now >= end) {
      answer += 1;
      now = start;
    } else if (start > now) {
      now = start;
    }
  }

  return answer;
}
