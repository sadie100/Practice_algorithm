function solution(n, works) {
  works.sort((a, b) => b - a);
  if (works.length === 1) {
    return n >= works[0] ? 0 : (works[0] - n) ** 2;
  }

  while (n) {
    let max = works[0];
    if (max === 0) break;
    for (let i = 0; i < works.length; i++) {
      if (works[i] === max) {
        works[i] -= 1;
        n -= 1;
      }
      if (n === 0) break;
    }
  }
  return works.reduce((acc, cur) => {
    return (acc += cur ** 2);
  }, 0);
}
