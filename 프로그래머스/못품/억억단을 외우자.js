function solution(e, starts) {
  var answer = starts.map((d) => 0);
  const newStarts = starts.map((st, id) => [st, id]);
  newStarts.sort((a, b) => b[0] - a[0]);
  // const answers = starts.map((d)=>0)
  console.log(newStarts);
  let nowMax = 0;
  let nowMaxCnt = 0;
  // const sqrt = Math.ceil(Math.sqrt(e));
  const table = {};
  for (let i = e; i >= 1; i--) {
    let idx = 0;
    const tempAnswers = starts.map((d) => 0);
    for (let j = Math.floor(e / i); j >= 1; j--) {
      console.log("i", i, "j", j);
      let number = i * j;
      if (number > e) break;

      let increase = 1;
      if (i !== j) increase = 2;

      if (table[number]) {
        table[number] += increase;
      } else {
        table[number] = increase;
      }

      if (nowMaxCnt < table[number]) {
        nowMax = number;
        nowMaxCnt = table[number];
      }

      while (number < newStarts[idx][0]) {
        let answerIdx = newStarts[idx][1];
        answer[answerIdx] = nowMax;
        idx += 1;
      }
    }
  }

  return answer;
}
