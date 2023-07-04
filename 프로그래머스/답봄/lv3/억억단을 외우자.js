function solution(e, starts) {
  const table = new Array(e + 1).fill(0);
  for (let i = 1; i <= e; i++) {
    for (let j = 1; j <= e; j++) {
      if (i * j > e) break;
      table[i * j] += 1;
    }
  }
  const maxArr = new Array(e + 1).fill(e);
  for (let i = e - 1; i > 0; i--) {
    if (table[i] < table[maxArr[i + 1]]) {
      maxArr[i] = maxArr[i + 1];
    } else {
      maxArr[i] = i;
    }
  }
  return starts.map((start) => maxArr[start]);
}
