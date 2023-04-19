function solution(participant, completion) {
  const answer = {};
  for (let part of participant) {
    if (answer[part]) {
      answer[part] += 1;
    } else {
      answer[part] = 1;
    }
  }

  for (let comp of completion) {
    answer[comp] -= 1;
  }

  ans = Object.entries(answer).filter(([key, val]) => {
    return val > 0;
  });
  return ans[0][0];
}
