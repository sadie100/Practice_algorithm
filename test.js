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

for (let i = 2; i < stair; i++) {
  if (visited[i - 2] === 2 && visited[i - 1] === 2) {
    break;
  }
  if (visited[i - 2] === 2) {
    memo[i] = memo[i - 1] + scores[i];
    visited[i] = visited[i - 1] + 1;
  } else if (visited[i - 1] === 2) {
    memo[i] = memo[i - 2] + scores[i];
    visited[i] = 1;
  } else {
    if (memo[i - 2] > memo[i - 1]) {
      memo[i] = memo[i - 2] + scores[i];
      visited[i] = 1;
    } else {
      memo[i] = memo[i - 1] + scores[i];
      visited[i] = visited[i - 1] + 1;
    }
  }
}

console.log(memo[stair - 1]);
