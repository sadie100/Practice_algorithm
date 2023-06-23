function solution(scores) {
  let answer = -1;
  let rank = [];
  let leftMax = 0;
  let rightMax = 0;
  const newScores = scores
    .map((score, idx) => [score, idx])
    .sort((a, b) =>
      b[0][0] === a[0][0] ? a[0][1] - b[0][1] : b[0][0] - a[0][0]
    );

  for (let i = 0; i < newScores.length; i++) {
    const [[one, two], idx] = newScores[i];
    if (i === 0) {
      leftMax = one;
      rightMax = two;
      rank.push([one + two, idx]);
      continue;
    }
    if (one < leftMax && two < rightMax) {
      continue;
    }
    rightMax = Math.max(rightMax, two);
    rank.push([one + two, idx]);
  }

  rank.sort((a, b) => b[0] - a[0]);
  let same = 0;
  let ranking = 1;
  for (let i = 0; i < rank.length; i++) {
    const [score, index] = rank[i];
    if (index === 0) {
      if (i === 0 || rank[i - 1][0] === score) {
        answer = ranking;
      } else {
        answer = ranking + same + 1;
      }
      break;
    }
    if (i === 0) {
      continue;
    }
    if (rank[i - 1][0] === score) {
      same += 1;
    } else {
      ranking += same + 1;
      same = 0;
    }
  }

  return answer;
}
