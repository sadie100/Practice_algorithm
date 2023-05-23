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
let dup = 1;
let last = -1;
for (let height of heights) {
  if (stack.length > 0 && last === height) {
    dup += 1;
  } else {
    dup = 1;
  }
  while (stack.length > 0 && stack[stack.length - 1] < height) {
    stack.pop();
    ans += 1;
  }
  if (stack.length > 0) {
    ans += Math.min(stack.length, dup);
  }
  stack.push(height);
  last = stack[stack.length - 1];
}

console.log(ans);
/*
2 0 
4 1
1 2
2 4
2 6
5 9
1 10
*/
