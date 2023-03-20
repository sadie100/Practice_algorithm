//문자열 순서 : d, l, r, u

function solution(n, m, x, y, r, c, k) {
  let answer = "";
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];
  const distLabel = ["d", "l", "r", "u"];
  const graph = Array.from(Array(n + 1), () => new Array(m + 1).fill("."));

  graph[x][y] = "S";
  graph[r][c] = "E";

  let toX = Math.abs(r - x);
  let toY = Math.abs(c - y);
  let remain = k;
  let nowX = x;
  let nowY = y;
  if (toX + toY > remain || (toX + toY) % 2 !== remain % 2) {
    return "impossible";
  }

  while (remain > toX + toY) {
    for (let i = 0; i < 4; i++) {
      const nextX = nowX + dx[i];
      const nextY = nowY + dy[i];
      if (nextX > 0 && nextX <= n && nextY > 0 && nextY <= m) {
        answer += distLabel[i];
        nowX = nextX;
        nowY = nextY;
        toX = Math.abs(r - nowX);
        toY = Math.abs(c - nowY);
        remain -= 1;
        break;
      }
    }
  }

  if (nowX < r) {
    let downCnt = r - nowX;
    remain -= downCnt;
    answer += distLabel[0].repeat(downCnt);
    nowX = r;
  }
  if (nowY > c) {
    let leftCnt = nowY - c;
    remain -= leftCnt;
    answer += distLabel[1].repeat(leftCnt);
    nowY = c;
  }
  if (nowY < c) {
    let rightCnt = c - nowY;
    remain -= rightCnt;
    answer += distLabel[2].repeat(rightCnt);
    nowY = c;
  }
  if (nowX > r) {
    let upCnt = nowX - r;
    remain -= upCnt;
    answer += distLabel[3].repeat(upCnt);
    nowX = r;
  }

  return answer;
}
