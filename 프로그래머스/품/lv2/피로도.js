function solution(k, dungeons) {
  var answer = -1;
  const visited = dungeons.map((d) => false);

  const dfs = (tired, checkedCnt) => {
    if (checkedCnt === dungeons.length) {
      return;
    }
    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i]) continue;
      const [least, consume] = dungeons[i];
      if (tired >= least) {
        visited[i] = true;
        answer = Math.max(answer, checkedCnt + 1);
        dfs(tired - consume, checkedCnt + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return answer;
}
