const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const [node, edge, start] = input[0].split(" ").map((d) => +d);
const graph = [[]];

for (let i = 1; i <= node; i++) {
  const thisNode = [];
  for (let j = 1; j < input.length; j++) {
    const arr = input[j].split(" ").map((d) => +d);
    if (arr.indexOf(i) !== -1) {
      const idx = arr.indexOf(i);
      idx === 0 ? thisNode.push(arr[1]) : thisNode.push(arr[0]);
    }
  }
  const sortNode = thisNode.sort((a, b) => a - b);
  graph.push(sortNode);
}

const visit = Array(node + 1).fill(false);
const visit2 = Array(node + 1).fill(false);

//1. dfs
let dfs_answer = "";
const dfs = (num) => {
  visit[num] = true;
  dfs_answer += `${num}`;
  for (let near of graph[num]) {
    if (!visit[near]) {
      dfs_answer += " ";
      dfs(near);
    }
  }
};

dfs(start);

//2. bfs
let bfs_answer = "";

const bfs = (num) => {
  const queue = [];
  queue.push(num);
  visit2[num] = true;
  bfs_answer += `${num}`;

  while (true) {
    const a = queue.shift();
    for (let i of graph[a]) {
      if (!visit2[i]) {
        bfs_answer += " ";
        queue.push(i);
        visit2[i] = true;
        bfs_answer += `${i}`;
      }
    }
    if (queue.length === 0) break;
  }
};

bfs(start);

console.log(dfs_answer);
console.log(bfs_answer);
