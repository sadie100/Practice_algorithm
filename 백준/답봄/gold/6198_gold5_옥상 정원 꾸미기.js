const fs = require("fs");
const [n, ...heights] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];
let answer = 0;
for (let height of heights) {
  while (stack.length > 0) {
    if (stack[stack.length - 1] > height) {
      break;
    }
    stack.pop();
  }
  answer += stack.length;
  stack.push(height);
}

console.log(answer);
