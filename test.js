//2579 계단 오르기
//마지막 계단에서 시작한다.

const fs = require("fs");
let [stair, ...scores] = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map(Number);

scores = scores.reverse();
const memo = new Array(stair).fill(0);
const visited = new Array(stair).fill(0);
let ans = 0;

memo[0] = scores[0];
visited[0] = 1;
memo[1] = scores[0] + scores[1];
visited[1] = 2;

const queue = [];
queue.push([[...memo], [...visited], 1]);
while (queue.length > 0) {
  const [newMemo, newVisited, nowIdx] = queue.pop();

  for (let i = nowIdx + 1; i < stair; i++) {
    if (newVisited[i - 2] === 2 && newVisited[i - 1] === 2) {
      break;
    }
    if (newVisited[i - 2] === 2) {
      newMemo[i] = newMemo[i - 1] + scores[i];
      newVisited[i] = newVisited[i - 1] + 1;
    } else if (newVisited[i - 1] === 2) {
      newMemo[i] = newMemo[i - 2] + scores[i];
      newVisited[i] = 1;
    } else {
      newMemo[i] = newMemo[i - 2] + scores[i];
      newVisited[i] = 1;
      const addMemo = [...newMemo];
      const addVisited = [...newVisited];
      addMemo[i] = newMemo[i - 1] + scores[i];
      addVisited[i] = newVisited[i - 1] + 1;
      queue.push([[...addMemo], [...addVisited], i]);
    }
    if (i === stair - 1) {
      ans = Math.max(ans, newMemo[stair - 1]);
    }
  }
}

console.log(ans);
