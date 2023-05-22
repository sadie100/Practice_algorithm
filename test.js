//3015 오아시스 재결합

const fs = require("fs");
const [N, ...heights] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let ans = 0;
const stack = [];
for (let height of heights) {
  while (stack.length > 0 && stack[stack.length - 1] < height) {
    stack.pop();
  }
  ans += stack.length;
  stack.push(height);
}

console.log(ans);
// 3 2 3 5
5;
// 3 2 1
// 8 5 4

// 6 3 8
