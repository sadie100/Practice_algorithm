function solution(e, starts) {
  var answer = [];
  const dp = new Array(5000000).fill(0);
  let before = 0;
  let start = 0;
  starts.map((s) => {
    start = Math.max(s, start);
    for (let i = start; i < e; i++) {
      for (let j = s; j < Math.floor(Math.sqrt(s)); j++) {
        if (i * j > e) {
          break;
        }
        dp[i * j] += 1;
      }
    }
  });

  return answer;
}
