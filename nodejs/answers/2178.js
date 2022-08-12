const input = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);
const graph = [];

for (let i = 1; i <= N; i++) {
  graph.push(input[i].trim().split("").map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  const queue = [[x, y]];
  while (true) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      if (x + dx[i] < 0 || x + dx[i] >= N || y + dy[i] < 0 || y + dy[i] >= M) {
        continue;
      }

      if (graph[x + dx[i]][y + dy[i]] === 1) {
        graph[x + dx[i]][y + dy[i]] = graph[x][y] + 1;
        queue.push([x + dx[i], y + dy[i]]);
      }
    }
    if (queue.length === 0) {
      return graph[N - 1][M - 1];
    }
  }
};
console.log(bfs(0, 0));
