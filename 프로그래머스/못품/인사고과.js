function solution(scores) {
  let answer = -1;
  let maxOne = 0;
  let maxTwo = 0;
  let maxIdx = 0;
  const rank = [];

  for (let i = 0; i < scores.length; i++) {
    const [one, two] = scores[i];
    if (i === 0) {
      maxOne = one;
      maxTwo = two;
      continue;
    }
    if (maxOne < one && maxTwo < two) {
      maxOne = one;
      maxTwo = two;
      maxIdx = i;
      continue;
    }
    if (maxOne <= one && maxTwo <= two) {
      rank.push([maxOne + maxTwo, maxIdx]);
      maxOne = one;
      maxTwo = two;
      maxIdx = i;
      continue;
    }
    if (maxOne > one && maxTwo > two) {
      continue;
    }
    rank.push([one + two, i]);
  }

  rank.push([maxOne + maxTwo, maxIdx]);

  rank.sort((a, b) => b[0] - a[0]);
  let same = 0;
  rank.reduce((acc, cur, idx) => {
    const [score, index] = cur;
    if (answer > -1) return;
    if (index === 0) {
      if (idx === 0 || rank[idx - 1][0] === score) {
        answer = acc;
      } else {
        answer = acc + same + 1;
      }
      return;
    }
    if (idx === 0) {
      return acc;
    }
    if (rank[idx - 1][0] === score) {
      same += 1;
      return acc;
    } else {
      let res = acc + same + 1;
      same = 0;
      return res;
    }
  }, 1);

  return answer;
}
