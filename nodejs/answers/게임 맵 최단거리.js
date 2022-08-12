const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

const n = maps.length;
const m = maps[0].length;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

var answer = 0;
const bfs = (x, y) => {
  const queue = [];
  maps[x][y] = 1;
  queue.push([x, y]);
  while (true) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      if (x + dx[i] < 0 || x + dx[i] >= n || y + dy[i] < 0 || y + dy[i] >= m) {
        continue;
      }
      if (maps[x + dx[i]][y + dy[i]] === 1) {
        maps[x + dx[i]][y + dy[i]] = maps[x][y] + 1;
        queue.push([x + dx[i], y + dy[i]]);
      }
    }
    if (queue.length === 0) {
      return maps[n - 1][m - 1];
    }
  }
};
console.log(bfs(0, 0));
