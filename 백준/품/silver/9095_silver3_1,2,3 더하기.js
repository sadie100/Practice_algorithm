const input = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const num = input.shift();
const dp = new Array(11).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

input.forEach((i) => {
  console.log(dp[i]);
});
