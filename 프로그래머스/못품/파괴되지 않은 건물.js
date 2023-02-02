function solution(board, skill) {
  var answer = 0;

  for (let [type, r1, c1, r2, c2, degree] of skill) {
    //공격
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        type === 1 ? (board[r][c] -= degree) : (board[r][c] += degree);
      }
    }
  }

  return board.flat().filter((d) => d > 0).length;
}
