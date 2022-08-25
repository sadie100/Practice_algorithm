const fs = require("fs");
const [count, ...comeIn] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const caseList = [];
let arr = [];
comeIn.map((num, idx) => {
  arr.push(num);
  if (idx % 2 === 1) {
    caseList.push([...arr]);
    arr = [];
  }
});

caseList.map(([floor, room]) => {
  const dp = Array.from(Array(floor + 1)).fill(new Array(room + 1));
  for (let i = 1; i <= room; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= floor; i++) {
    for (let j = 1; j <= room; j++) {
      if (j === 1) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
  }
  console.log(dp[floor][room]);
});
