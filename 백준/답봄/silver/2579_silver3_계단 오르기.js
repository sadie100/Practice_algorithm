//2579 계단 오르기
//마지막 계단에서 시작한다.

const fs = require("fs");
let [stair, ...scores] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const memo = new Array(stair).fill(0);

memo[0] = scores[0];
memo[1] = Math.max(scores[1], scores[0] + scores[1]);
memo[2] = Math.max(scores[1] + scores[2], scores[0] + scores[2]);

for (let i = 3; i < stair; i++) {
  memo[i] = Math.max(
    memo[i - 3] + scores[i - 1] + scores[i],
    memo[i - 2] + scores[i]
  );
}

console.log(memo[stair - 1]);
