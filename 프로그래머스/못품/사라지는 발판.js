function solution(board, aloc, bloc) {
  var answer = -1;
  const dx = [0, 1, -1, 0];
  const dy = [1, 0, 0, -1];

  const row = board.length;
  const col = board[0].length;

  let visited = board.map((d) => {
    return d.map((d2) => {
      if (d2 === 0) return true;
      else return false;
    });
  });

  let aMoveMax = 0;
  let bMoveMax = 0;
  let aMoveMin = Infinity;
  let bMoveMin = Infinity;
  let bans = 0;
  let aans = 0;

  const dfs = (ax, ay, bx, by, turn, aMove, bMove) => {
    let moved = false;
    for (let i = 0; i < 4; i++) {
      if (turn === "A") {
        const nx = ax + dx[i];
        const ny = ay + dy[i];
        if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
        if (visited[nx][ny]) continue;
        visited[nx][ny] = true;
        dfs(nx, ny, bx, by, "B", aMove + 1, bMove);
        visited[nx][ny] = false;
        moved = true;
      } else {
        const nx = bx + dx[i];
        const ny = by + dy[i];
        if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
        if (visited[nx][ny]) continue;
        visited[nx][ny] = true;
        dfs(ax, ay, nx, ny, "A", aMove, bMove + 1);
        visited[nx][ny] = false;
        moved = true;
      }
    }
    if (!moved) {
      if (turn === "B") {
        //B 패배. bMove 최대, aMove 최소여야 함
        if (bMoveMax < bMove && aMoveMin > aMove) {
          bans = bMove + aMove;
          bMoveMax = bMove;
          aMoveMin = aMove;
        }
      } else {
        //A 패배. aMove 최대, bMove 최소여야 함
        if (aMoveMax < aMove && bMoveMin > bMove) {
          aans = bMove + aMove;
          bMoveMin = bMove;
          aMoveMax = aMove;
        }
      }
    }
  };

  visited[aloc[0]][aloc[1]] = true;
  visited[bloc[0]][bloc[1]] = true;

  dfs(aloc[0], aloc[1], bloc[0], bloc[1], "A", 0, 0);

  console.log(aans, bans);

  // return maxi+mini;
}
