function solution(sequence) {
  const dpPlus = sequence.map((d) => 0);
  const dpMinus = [...dpPlus];
  let subNum = 1;

  dpPlus[0] = sequence[0];
  dpMinus[0] = -sequence[0];
  subNum = -1;
  let answer = Math.max(dpPlus[0], dpMinus[0]);

  for (let i = 1; i < sequence.length; i++) {
    let num = sequence[i];
    dpPlus[i] = Math.max(dpPlus[i - 1] + subNum * num, subNum * num);
    dpMinus[i] = Math.max(
      dpMinus[i - 1] + subNum * num * -1,
      subNum * num * -1
    );
    answer = Math.max(answer, dpPlus[i], dpMinus[i]);
    subNum *= -1;
  }

  return answer;
}
