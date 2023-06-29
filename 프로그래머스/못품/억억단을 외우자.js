function solution(e, starts) {
  var answer = [];
  const newStarts = starts.map((st, id) => [st, id]);
  newStarts.sort((a, b) => b[0] - a[0]);
  const answers = starts.map((d) => 0);
  console.log(newStarts);
  // const sqrt = Math.ceil(Math.sqrt(e));
  // const table = {};
  let idx = 0;
  for (let i = e; i >= 1; i--) {
    for (let j = Math.floor(e / i); j >= 1; j--) {
      console.log("i", i, "j", j);
      // if (i * j > e) break;
      let increase = 1;
      if (i !== j) increase = 2;
      while (j * i < newStarts[idx][0]) {
        const oldIdx = newStarts[idx][1];
        idx += 1;
        const newIdx = newStarts[idx][1];
        console.log(oldIdx, newIdx);
        answers[newIdx] = answers[oldIdx];
      }
      const newIdx = newStarts[idx][1];
      answers[newIdx] += increase;
    }
  }

  return answers;
}
