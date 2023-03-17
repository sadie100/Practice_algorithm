//문자열 순서 : d, l, r, u

function solution(n, m, x, y, r, c, k) {
  let answer = "";
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];
  const distLabel = ["d", "l", "r", "u"];

  // const toX = Math.abs(r-x);
  // const toY = Math.abs(c-y);

  function dfs(nowX, nowY, dist, trace) {
    if (!!answer || dist > k) return;
    if (dist === k) {
      if (graph[nowX][nowY] === "E") {
        answer = trace;
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (!!answer) return;
      const nextX = nowX + dx[i];
      const nextY = nowY + dy[i];
      if (nextX > 0 && nextX <= n && nextY > 0 && nextY <= m) {
        dfs(nextX, nextY, dist + 1, trace + distLabel[i]);
      }
    }
  }

  const graph = Array.from(Array(n + 1), () => new Array(m + 1).fill("."));

  graph[x][y] = "S";
  graph[r][c] = "E";

  //dfs
  dfs(x, y, 0, "");
  return !!answer ? answer : "impossible";
}
