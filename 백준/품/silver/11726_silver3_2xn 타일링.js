const input = Number(require("fs").readFileSync("test.txt").toString().trim());

const dp = [];

dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[input]);
