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
  let count = 1;
  while (stack.length > 0) {
    if (stack[stack.length - 1][0] > height) {
      break;
    }
    if (stack[stack.length - 1][0] === height) {
      count = stack[stack.length - 1][1] + 1;
    } else {
      count = 1;
    }
    const [popped, cnt] = stack.pop();
    ans += cnt;
  }
  if (stack.length > 0) {
    ans += 1;
  }
  stack.push([height, count]);
}

console.log(ans);
