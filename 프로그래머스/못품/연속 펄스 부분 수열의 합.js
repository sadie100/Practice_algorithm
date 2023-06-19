function solution(sequence) {
  const dpNum = sequence.map(() => 0);
  const dpMultiply = sequence.map(() => []);

  if (sequence[0] < 0) {
    //음수일 경우
    dpNum[0] = sequence[0] * -1;
    dpMultiply[0] = [-1];
  } else if (sequence[0] > 0) {
    dpNum[0] = sequence[0];
    dpMultiply[0] = [1];
  } else {
    dpNum[0] = sequence[0];
    dpMultiply[0] = [-1, 1];
  }

  let answer = dpNum[0];
  for (let idx = 1; idx < sequence.length; idx++) {
    const num = sequence[idx];
    let lastMax = Number.MIN_SAFE_INTEGER;
    let maxMulti = [];
    dpMultiply[idx - 1].map((subNum) => {
      const connected = dpNum[idx - 1] + num * subNum * -1;
      if (connected > lastMax) {
        lastMax = connected;
        maxMulti = [subNum * -1];
      } else if (connected === lastMax) {
        maxMulti.push(subNum * -1);
      }
    });
    const subNums = [1, -1];
    subNums.map((subNum) => {
      const newStart = num * subNum;
      if (newStart > lastMax) {
        lastMax = newStart;
        maxMulti = [subNum];
      } else if (newStart === lastMax) {
        if (!maxMulti.includes(subNum)) {
          maxMulti.push(subNum);
        }
      }
    });
    answer = Math.max(answer, lastMax);
    dpNum[idx] = lastMax;
    dpMultiply[idx] = maxMulti;
  }

  return answer;
}
