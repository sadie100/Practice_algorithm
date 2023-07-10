function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let startIdx = 0;
  for (let number of A) {
    for (let i = startIdx; i < B.length; i++) {
      if (B[i] > number) {
        answer += 1;
        startIdx = Math.min(B.length, i + 1);
        break;
      }
      if (i === B.length - 1) {
        return answer;
      }
    }
    if (startIdx === B.length) {
      return answer;
    }
  }

  return answer;
}
