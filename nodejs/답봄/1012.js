const fs = require("fs");
const [testCount, ...testList] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

const row = [1, 0, -1, 0];
const column = [0, 1, 0, -1];
let width, height, count, result, graph, visited;
const dfs = (w, h) => {
  if (visited[w][h]) return;

  visited[w][h] = true;

  if (graph[w][h] !== 1) return;
  for (let i = 0; i < 4; i++) {
    if (
      w + row[i] >= 0 &&
      w + row[i] < width &&
      h + column[i] >= 0 &&
      h + column[i] < height
    ) {
      if (
        graph[w + row[i]][h + column[i]] === 1 &&
        !visited[w + row[i]][h + column[i]]
      ) {
        dfs(w + row[i], h + column[i]);
      }
    }
  }
};
while (testList.length > 0) {
  result = 0;
  [width, height, count] = testList[0].split(" ").map(Number);
  const num = +count;
  const [info, ...placeList] = testList.splice(0, 1 + num);
  graph = Array.from(Array(+width), () => new Array(+height).fill(0));
  visited = Array.from(Array(+width), () => new Array(+height).fill(false));
  placeList.map((placeInfo) => {
    const [w, h] = placeInfo.trim().split(" ");
    graph[+w][+h] = 1;
  });

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (!visited[i][j]) {
        if (graph[i][j] === 1) {
          result++;
        }
        dfs(i, j);
      }
    }
  }
  console.log(result);
}
