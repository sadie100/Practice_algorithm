const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

let number = Number(input);
const dp = new Array(number + 1).fill(0);

for (let i = 1; i <= number; i++) {
  if (i === 1) {
    dp[i] = 0;
    continue;
  }
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
}

console.log(dp[number]);
