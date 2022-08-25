const fs = require("fs");
let [count, ...costs] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");
count = +count;
const numCosts = costs.map((d) => d.split(" ").map(Number));
const dp = Array.from(Array(count), () => new Array(3));
dp[0][0] = numCosts[0][0];
dp[0][1] = numCosts[0][1];
dp[0][2] = numCosts[0][2];

for (let i = 1; i < count; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + numCosts[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + numCosts[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + numCosts[i][2];
}

console.log(Math.min(...dp[count - 1]));
