function solution(board, aloc, bloc) {
  const dx = [0, 1, -1, 0];
  const dy = [1, 0, 0, -1];

  const row = board.length;
  const col = board[0].length;

  const dfs = (ax, ay, bx, by, turn, cnt) => {
    let nowx, nowy;
    if (turn === "A") {
      nowx = ax;
      nowy = ay;
    } else {
      nowx = bx;
      nowy = by;
    }

    if (!board[nowx][nowy]) {
      return { win: false, cnt };
    }

    board[nowx][nowy] = 0;

    let win = Infinity;
    let lose = 0;

    for (let i = 0; i < 4; i++) {
      let result;
      const nx = nowx + dx[i];
      const ny = nowy + dy[i];
      if (nx < 0 || nx >= row || ny < 0 || ny >= col || !board[nx][ny])
        continue;
      if (turn === "A") {
        result = dfs(nx, ny, bx, by, "B", cnt + 1);
      } else {
        result = dfs(ax, ay, nx, ny, "A", cnt + 1);
      }
      if (!result.win) {
        //이겼을 경우
        win = Math.min(result.cnt, win);
      } else {
        //졌을 경우
        lose = Math.max(result.cnt, lose);
      }
    }
    board[nowx][nowy] = 1;

    if (win === Infinity && lose === 0) {
      return { win: false, cnt: cnt };
    } else if (win === Infinity) {
      return { win: false, cnt: lose };
    } else {
      return { win: true, cnt: win };
    }
  };

  return dfs(aloc[0], aloc[1], bloc[0], bloc[1], "A", 0).cnt;
}
