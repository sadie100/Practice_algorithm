const input = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const num = input.shift();
const dp = new Array(Math.max(...input) + 1).fill(null);
dp[0] = [1, 0];
dp[1] = [0, 1];
for (let i = 2; i <= Math.max(...input) + 1; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

for (let test of input) {
  console.log(dp[test][0], dp[test][1]);
}
