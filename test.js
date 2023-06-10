//2579 계단 오르기
//마지막 계단에서 시작한다.

const fs = require("fs");
let [stair, ...scores] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

scores = scores.reverse();
const memo = new Array(stair).fill(0);
const visited = new Array(stair).fill(false);

if (stair === 1) {
  console.log(scores[0]);
  return;
}

memo[0] = scores[0];
memo[1] = scores[0] + scores[1];
visited[1] = true;

if (stair < 3) {
  console.log(memo[stair - 1]);
  return;
}

for (let i = 2; i < stair; i++) {
  if (!visited[i - 1]) {
    memo[i] = Math.max(memo[i - 2] + scores[i], memo[i - 1] + scores[i]);
    if (memo[i - 1] > memo[i - 2]) {
      visited[i] = true;
    }
  } else {
    memo[i] = memo[i - 2] + scores[i];
  }
}

console.log(Math.max(memo[stair - 1], memo[stair - 2]));
