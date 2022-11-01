/*
체스판의 첫 줄에 배치하고 나머지 줄들에 배치하는 경우를 찾는다
체스판의 첫 줄이 가질 수 있는 경우의 수가 전체 경우의 수

board array를 만들어서 배치할 때마다 현재 배치된 영역을 표시
이때, board array는 일차원 배열로 만든다.
(어차피 한 줄에는 하나의 퀸만 가능하므로 이차원이 될 필요가 없다)
index는 가로줄 idx, 각 index의 값은 세로줄 idx를 나타내도록 생성한다
ex: [1,2,4,5]이면 (0,1), (1,2), (2,4), (3,5)에 퀸이 있는 그런 느낌으로

현재 퀸의 상태를 board에 배치하고 해당 array를 바탕으로 다음 줄에 배치가 가능한지 검사한다.
*/

function solution(n) {
  let count = 0;

  const putQueen = (col, row, board) => {
    //어느 col, row에 queen을 뒀을 때
    board[col] = row;
    if (row === n - 1) {
      //체스판의 끝에 온 경우
      count += 1;
      return;
    }

    for (let i = 0; i < n; i++) {
      //다음 row에 col를 늘려가면서 퀸 배치
      //이때 가능한 board에만 퀸 배치하도록 검사
      if (board[i] !== undefined) continue;
      let flag = true;
      for (let j = 0; j < n; j++) {
        if (Math.abs(i - j) === Math.abs(row + 1 - j)) {
          flag = false;
          break;
        }
      }
      if (flag) {
        putQueen(i, row + 1, [...board]);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    //첫번째 줄에 퀸 배치
    const defaultBoard = new Array(n);
    putQueen(i, 0, defaultBoard);
  }
  return count;
}
